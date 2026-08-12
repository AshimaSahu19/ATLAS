import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Booking, LostFoundItem, TripPlan, Trip } from '../types';
import { bookings as seedBookings, lostFoundItems as seedLostFound, savedPlaces, trips as seedTrips } from '../data/catalog';
import { uid } from '../utils/format';

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
  removeTrip: (id: string) => void;
  bookings: Booking[];
  addBooking: (b: Booking) => void;
  cancelBooking: (id: string) => void;
  lostFound: LostFoundItem[];
  addLostFound: (item: LostFoundItem) => void;
  plan: TripPlan | null;
  setPlan: (p: TripPlan | null) => void;
  toasts: Toast[];
  toast: (t: Omit<Toast, 'id'>) => void;
  dismissToast: (id: string) => void;
}

const AtlasContext = createContext<AtlasState | null>(null);

export function AtlasProvider({ children }: {children: React.ReactNode;}) {
  const [theme, setTheme] = useState<Theme>('light');
  const [language, setLanguage] = useState('en');
  const [saved, setSaved] = useState<string[]>(['kyoto', 'santorini', 'a1']);
  const [savedItems, setSavedItems] = useState(savedPlaces);
  const [trips, setTrips] = useState<Trip[]>(seedTrips);
  const [bookings, setBookings] = useState<Booking[]>(seedBookings);
  const [lostFound, setLostFound] = useState<LostFoundItem[]>(seedLostFound);
  const [plan, setPlan] = useState<TripPlan | null>(null);
  const [toasts, setToasts] = useState<Toast[]>([]);

  const prefersDark =
  typeof window !== 'undefined' && window.matchMedia ?
  window.matchMedia('(prefers-color-scheme: dark)').matches :
  false;
  const isDark = theme === 'dark' || theme === 'system' && prefersDark;

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', isDark);
  }, [isDark]);

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback(
    (t: Omit<Toast, 'id'>) => {
      const id = uid('toast');
      setToasts((prev) => [...prev, { ...t, id }]);
      window.setTimeout(() => setToasts((prev) => prev.filter((x) => x.id !== id)), 3600);
    },
    []
  );

  const toggleSaved = useCallback(
    (id: string, label?: string) => {
      setSaved((prev) => {
        const exists = prev.includes(id);
        toast({
          title: exists ? 'Removed from saved' : 'Saved',
          description: label ? `${label} ${exists ? 'removed from' : 'added to'} your places.` : undefined,
          tone: exists ? 'info' : 'success'
        });
        return exists ? prev.filter((x) => x !== id) : [...prev, id];
      });
    },
    [toast]
  );

  const value = useMemo<AtlasState>(
    () => ({
      theme,
      setTheme,
      isDark,
      language,
      setLanguage: (code: string) => {
        setLanguage(code);
        toast({ title: 'Language updated', description: 'Interface language preference saved.', tone: 'success' });
      },
      saved,
      toggleSaved,
      isSaved: (id: string) => saved.includes(id),
      savedItems,
      removeSavedItem: (id: string) => {
        setSavedItems((prev) => prev.filter((p) => p.id !== id));
        toast({ title: 'Removed', description: 'Place removed from your collection.', tone: 'info' });
      },
      trips,
      removeTrip: (id: string) => {
        setTrips((prev) => prev.filter((t) => t.id !== id));
        toast({ title: 'Trip deleted', tone: 'info' });
      },
      bookings,
      addBooking: (b: Booking) => setBookings((prev) => [b, ...prev]),
      cancelBooking: (id: string) => {
        setBookings((prev) => prev.map((b) => b.id === id ? { ...b, status: 'cancelled' } : b));
        toast({ title: 'Booking cancelled', description: 'A confirmation has been sent to your email.', tone: 'error' });
      },
      lostFound,
      addLostFound: (item: LostFoundItem) => setLostFound((prev) => [item, ...prev]),
      plan,
      setPlan,
      toasts,
      toast,
      dismissToast
    }),
    [theme, isDark, language, saved, savedItems, trips, bookings, lostFound, plan, toasts, toggleSaved, toast, dismissToast]
  );

  return <AtlasContext.Provider value={value}>{children}</AtlasContext.Provider>;
}

export function useAtlas() {
  const ctx = useContext(AtlasContext);
  if (!ctx) throw new Error('useAtlas must be used inside AtlasProvider');
  return ctx;
}