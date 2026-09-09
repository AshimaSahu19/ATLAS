import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { Booking, LostFoundItem, TripPlan, Trip } from '../types';

import {
  lostFoundItems as seedLostFound,
  savedPlaces,
  trips as seedTrips,
} from '../data/catalog';

import { uid } from '../utils/format';

import {
  fetchTrips,
  fetchBookings,
  deleteTrip,
  cancelBookingApi,
} from '../services/atlasApi';

type Theme = 'light' | 'dark' | 'system';

export interface Toast {
  id: string;
  title: string;
  description?: string;
  tone: 'success' | 'info' | 'error';
}

interface AtlasState {
  theme: Theme;
  setTheme: (t: Theme) => void;
  isDark: boolean;

  language: string;
  setLanguage: (code: string) => void;

  saved: string[];
  toggleSaved: (id: string, label?: string) => void;
  isSaved: (id: string) => boolean;

  savedItems: typeof savedPlaces;
  removeSavedItem: (id: string) => void;

  trips: Trip[];
  removeTrip: (id: string) => Promise<void>;

  bookings: Booking[];
  addBooking: (b: Booking) => void;
  cancelBooking: (id: string) => Promise<void>;

  lostFound: LostFoundItem[];
  addLostFound: (item: LostFoundItem) => void;

  plan: TripPlan | null;
  setPlan: (p: TripPlan | null) => void;

  toasts: Toast[];
  toast: (t: Omit<Toast, 'id'>) => void;
  dismissToast: (id: string) => void;
}

const AtlasContext = createContext<AtlasState | null>(null);

export function AtlasProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>('light');

  const [language, setLanguage] = useState('en');

  const [saved, setSaved] = useState<string[]>([
    'kyoto',
    'santorini',
    'a1',
  ]);

  const [savedItems, setSavedItems] = useState(savedPlaces);

  // =========================
  // TRIPS
  // =========================

  const [trips, setTrips] = useState<Trip[]>(seedTrips);

  useEffect(() => {
    fetchTrips()
      .then(setTrips)
      .catch((error) => {
        console.error('Failed to load trips:', error);
      });
  }, []);

  // =========================
  // BOOKINGS
  // =========================

  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    fetchBookings()
      .then(setBookings)
      .catch((error) => {
        console.error('Failed to load bookings:', error);
      });
  }, []);

  // =========================
  // OTHER STATE
  // =========================

  const [lostFound, setLostFound] =
    useState<LostFoundItem[]>(seedLostFound);

  const [plan, setPlan] = useState<TripPlan | null>(null);

  const [toasts, setToasts] = useState<Toast[]>([]);

  // =========================
  // THEME
  // =========================

  const prefersDark =
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
      : false;

  const isDark =
    theme === 'dark' ||
    (theme === 'system' && prefersDark);

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle('dark', isDark);
  }, [isDark]);

  // =========================
  // TOAST
  // =========================

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) =>
      prev.filter((t) => t.id !== id)
    );
  }, []);

  const toast = useCallback(
    (t: Omit<Toast, 'id'>) => {
      const id = uid('toast');

      setToasts((prev) => [
        ...prev,
        {
          ...t,
          id,
        },
      ]);

      window.setTimeout(() => {
        setToasts((prev) =>
          prev.filter((x) => x.id !== id)
        );
      }, 3600);
    },
    []
  );

  // =========================
  // SAVED PLACES
  // =========================

  const toggleSaved = useCallback(
    (id: string, label?: string) => {
      setSaved((prev) => {
        const exists = prev.includes(id);

        toast({
          title: exists
            ? 'Removed from saved'
            : 'Saved',

          description: label
            ? `${label} ${
                exists ? 'removed from' : 'added to'
              } your places.`
            : undefined,

          tone: exists ? 'info' : 'success',
        });

        return exists
          ? prev.filter((x) => x !== id)
          : [...prev, id];
      });
    },
    [toast]
  );

  // =========================
  // CONTEXT VALUE
  // =========================

  const value = useMemo<AtlasState>(
    () => ({
      // Theme
      theme,
      setTheme,
      isDark,

      // Language
      language,

      setLanguage: (code: string) => {
        setLanguage(code);

        toast({
          title: 'Language updated',
          description:
            'Interface language preference saved.',
          tone: 'success',
        });
      },

      // Saved
      saved,

      toggleSaved,

      isSaved: (id: string) =>
        saved.includes(id),

      savedItems,

      removeSavedItem: (id: string) => {
        setSavedItems((prev) =>
          prev.filter((p) => p.id !== id)
        );

        toast({
          title: 'Removed',
          description:
            'Place removed from your collection.',
          tone: 'info',
        });
      },

      // Trips
      trips,

      removeTrip: async (id: string) => {
        try {
          await deleteTrip(id);

          setTrips((prev) =>
            prev.filter((t) => t.id !== id)
          );

          toast({
            title: 'Trip deleted successfully',
            tone: 'success',
          });
        } catch (error) {
          console.error(
            'Failed to delete trip:',
            error
          );

          toast({
            title: 'Failed to delete trip',
            description:
              'Please try again.',
            tone: 'error',
          });
        }
      },

      // Bookings
      bookings,

      addBooking: (b: Booking) => {
        setBookings((prev) => [
          b,
          ...prev,
        ]);
      },

      cancelBooking: async (id: string) => {
        try {
          await cancelBookingApi(id);

          setBookings((prev) =>
            prev.map((b) =>
              b.id === id
                ? {
                    ...b,
                    status: 'cancelled',
                  }
                : b
            )
          );

          toast({
            title: 'Booking cancelled',
            description:
              'Your booking has been cancelled successfully.',
            tone: 'success',
          });
        } catch (error) {
          console.error(
            'Failed to cancel booking:',
            error
          );

          toast({
            title: 'Failed to cancel booking',
            description:
              'Please try again.',
            tone: 'error',
          });
        }
      },

      // Lost & Found
      lostFound,

      addLostFound: (
        item: LostFoundItem
      ) => {
        setLostFound((prev) => [
          item,
          ...prev,
        ]);
      },

      // Trip Planner
      plan,
      setPlan,

      // Toasts
      toasts,
      toast,
      dismissToast,
    }),

    [
      theme,
      isDark,
      language,
      saved,
      savedItems,
      trips,
      bookings,
      lostFound,
      plan,
      toasts,
      toggleSaved,
      toast,
      dismissToast,
    ]
  );

  // =========================
  // PROVIDER
  // =========================

  return (
    <AtlasContext.Provider value={value}>
      {children}
    </AtlasContext.Provider>
  );
}

// =========================
// useAtlas Hook
// =========================

export function useAtlas() {
  const ctx = useContext(AtlasContext);

  if (!ctx) {
    throw new Error(
      'useAtlas must be used inside AtlasProvider'
    );
  }

  return ctx;
}