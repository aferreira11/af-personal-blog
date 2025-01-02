'use client';
import { motion, useInView, type Variants, type Transition } from 'framer-motion';
import { type ReactNode, useRef } from 'react';
import { cn } from '@/lib/utils';

interface InViewProps {
  children: ReactNode;
  variants?: {
    hidden: { [key: string]: any };
    visible: { [key: string]: any };
  };
  transition?: Transition;
  className?: string;
  amount?: number;
  once?: boolean;
}

const defaultVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export function InView({
  children,
  variants = defaultVariants,
  transition,
  className,
  amount,
  once,
}: InViewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount, once });

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
