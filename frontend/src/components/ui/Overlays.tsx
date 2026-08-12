import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2Icon, ChevronDownIcon, InfoIcon, XIcon, TriangleAlertIcon } from 'lucide-react';
import { cn } from '../../utils/format';
import { useAtlas } from '../../contexts/AtlasContext';

export function Modal({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  size = 'md'








}: {open: boolean;onClose: () => void;title: string;description?: string;children: React.ReactNode;footer?: React.ReactNode;size?: 'md' | 'lg';}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open &&
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6">
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"
          onClick={onClose} />
        
          <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 320, damping: 30 }}
          className={cn(
            'relative w-full overflow-hidden rounded-t-3xl sm:rounded-3xl bg-surface shadow-lift border border-line',
            size === 'lg' ? 'max-w-2xl' : 'max-w-lg'
          )}>
          
            <div className="flex items-start justify-between gap-4 border-b border-line px-6 py-5">
              <div>
                <h2 className="text-lg font-bold text-ink">{title}</h2>
                {description && <p className="mt-1 text-sm text-muted">{description}</p>}
              </div>
              <button
              onClick={onClose}
              aria-label="Close dialog"
              className="rounded-lg p-1.5 text-muted transition-colors hover:bg-subtle hover:text-ink">
              
                <XIcon className="h-4.5 w-4.5" />
              </button>
            </div>
            <div className="atlas-scroll max-h-[70vh] overflow-y-auto px-6 py-5">{children}</div>
            {footer && <div className="flex justify-end gap-3 border-t border-line bg-canvas/60 px-6 py-4">{footer}</div>}
          </motion.div>
        </div>
      }
    </AnimatePresence>);

}

export function Drawer({
  open,
  onClose,
  title,
  children





}: {open: boolean;onClose: () => void;title: string;children: React.ReactNode;}) {
  return (
    <AnimatePresence>
      {open &&
      <div className="fixed inset-0 z-50">
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-slate-900/40"
          onClick={onClose} />
        
          <motion.aside
          role="dialog"
          aria-label={title}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 320, damping: 34 }}
          className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col border-l border-line bg-surface">
          
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <h2 className="text-base font-bold text-ink">{title}</h2>
              <button onClick={onClose} aria-label="Close panel" className="rounded-lg p-1.5 text-muted hover:bg-subtle">
                <XIcon className="h-4.5 w-4.5" />
              </button>
            </div>
            <div className="atlas-scroll flex-1 overflow-y-auto px-5 py-5">{children}</div>
          </motion.aside>
        </div>
      }
    </AnimatePresence>);

}

export function Dropdown({
  label,
  options,
  value,
  onChange,
  align = 'left'






}: {label: string;options: {value: string;label: string;}[];value: string;onChange: (value: string) => void;align?: 'left' | 'right';}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const current = options.find((o) => o.value === value);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="inline-flex h-11 items-center gap-2 rounded-xl border border-line bg-surface px-3.5 text-sm font-medium text-ink transition-colors hover:border-ink/20">
        
        <span className="text-muted">{label}</span>
        {current?.label}
        <ChevronDownIcon className={cn('h-4 w-4 text-muted transition-transform', open && 'rotate-180')} />
      </button>
      <AnimatePresence>
        {open &&
        <motion.ul
          role="listbox"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          className={cn(
            'absolute z-30 mt-2 min-w-[200px] overflow-hidden rounded-xl border border-line bg-surface p-1 shadow-lift',
            align === 'right' ? 'right-0' : 'left-0'
          )}>
          
            {options.map((option) =>
          <li key={option.value}>
                <button
              role="option"
              aria-selected={option.value === value}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className={cn(
                'w-full rounded-lg px-3 py-2 text-left text-sm transition-colors',
                option.value === value ? 'bg-brand/10 font-semibold text-brand' : 'text-ink hover:bg-subtle'
              )}>
              
                  {option.label}
                </button>
              </li>
          )}
          </motion.ul>
        }
      </AnimatePresence>
    </div>);

}

export function Toaster() {
  const { toasts, dismissToast } = useAtlas();
  const icons = {
    success: <CheckCircle2Icon className="h-4.5 w-4.5 text-success" />,
    info: <InfoIcon className="h-4.5 w-4.5 text-brand" />,
    error: <TriangleAlertIcon className="h-4.5 w-4.5 text-danger" />
  };
  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-[60] flex w-full max-w-sm flex-col gap-2.5 px-4 sm:px-0">
      <AnimatePresence>
        {toasts.map((t) =>
        <motion.div
          key={t.id}
          role="status"
          initial={{ opacity: 0, y: 16, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, x: 24 }}
          className="pointer-events-auto flex items-start gap-3 rounded-xl border border-line bg-surface p-3.5 shadow-lift">
          
            <span className="mt-0.5">{icons[t.tone]}</span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-ink">{t.title}</p>
              {t.description && <p className="mt-0.5 text-[13px] text-muted">{t.description}</p>}
            </div>
            <button onClick={() => dismissToast(t.id)} aria-label="Dismiss" className="text-muted hover:text-ink">
              <XIcon className="h-4 w-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>);

}