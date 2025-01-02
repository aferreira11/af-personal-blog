'use client';

import { cn } from '@/lib/utils';
import { motion, type Variants, type Transition } from 'framer-motion';
import { X } from 'lucide-react';
import * as React from 'react';

const DialogContext = React.createContext<{
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}>({});

interface DialogProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  variants?: Variants;
  transition?: Transition;
  defaultOpen?: boolean;
  className?: string;
}

export function Dialog({ children, open, onOpenChange }: Omit<DialogProps, 'variants' | 'transition' | 'defaultOpen' | 'className'>) {
  return (
    <DialogContext.Provider value={{ open, onOpenChange }}>
      {children}
      {open && (
        <div
          className="fixed inset-0 z-[49] bg-black/50"
          onClick={() => onOpenChange?.(false)}
        />
      )}
    </DialogContext.Provider>
  );
}

export function DialogTrigger({ children, ...props }: { children: React.ReactNode }) {
  const { onOpenChange } = React.useContext(DialogContext);
  
  return React.cloneElement(React.Children.only(children) as React.ReactElement, {
    onClick: () => onOpenChange?.(true),
    ...props,
  });
}

export function DialogContent({ children, className }: { children: React.ReactNode; className?: string }) {
  const { open } = React.useContext(DialogContext);
  
  if (!open) return null;
  
  return (
    <div className="fixed inset-0 z-[51] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 40 }}
        transition={{ type: 'spring', bounce: 0, duration: 0.25 }}
        className={cn('relative rounded-lg shadow-lg', className)}
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
        role="dialog"
      >
        {children}
      </motion.div>
    </div>
  );
}

export function DialogHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('mb-4', className)}>{children}</div>;
}

export function DialogTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h2 className={cn('text-lg font-semibold', className)}>{children}</h2>;
}

export function DialogDescription({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn('text-sm text-muted-foreground', className)}>{children}</p>;
}

interface DialogCloseProps {
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  onClose?: () => void;
}

export function DialogClose({ className, children, disabled, onClose }: DialogCloseProps) {
  const { onOpenChange } = React.useContext(DialogContext);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (disabled) return;
    if (onClose) onClose();
    onOpenChange?.(false);
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={cn(
        "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
        className
      )}
    >
      {children || <X className="h-4 w-4" />}
      <span className="sr-only">Close</span>
    </button>
  );
}
