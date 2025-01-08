'use client';

import { motion, useSpring } from 'framer-motion';
import { useRef } from 'react';

interface MagneticProps {
  children: React.ReactNode;
  intensity?: number;
  range?: number;
}

export function Magnetic({ 
  children, 
  intensity = 0.6,
  range = 100
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useSpring(0, {
    stiffness: 150,
    damping: 15
  });

  const y = useSpring(0, {
    stiffness: 150,
    damping: 15
  });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const element = ref.current;
    if (!element) return;

    const { height, width, left, top } = element.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    const distance = Math.sqrt(Math.pow(middleX, 2) + Math.pow(middleY, 2));
    const maxRange = range;

    if (distance < maxRange) {
      // Calculate the intensity based on distance
      const power = (maxRange - distance) / maxRange;
      x.set(middleX * intensity * power);
      y.set(middleY * intensity * power);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const motionStyle = {
    x,
    y,
  };

  return (
    <motion.div
      ref={ref}
      style={motionStyle}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className="overflow-visible"
    >
      {children}
    </motion.div>
  );
}
