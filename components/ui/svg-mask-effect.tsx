"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const MaskContainer = ({
  children,
  revealText,
  className,
}: {
  children: React.ReactNode;
  revealText?: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    const container = containerRef.current;
    const mask = maskRef.current;

    if (!container || !mask) return;

    const updateMousePosition = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      animationFrameId = requestAnimationFrame(() => {
        mask.style.setProperty("--mouse-x", `${x}px`);
        mask.style.setProperty("--mouse-y", `${y}px`);
      });
    };

    container.addEventListener("mousemove", updateMousePosition);

    return () => {
      container.removeEventListener("mousemove", updateMousePosition);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className={cn("h-full relative", className)}
    >
      <div className="absolute inset-0 z-0 [mask-image:url(/mask.svg)] [mask-size:40px] [mask-repeat:no-repeat]" style={{ maskPosition: "var(--mouse-x, 0) var(--mouse-y, 0)" }}>
        {revealText}
      </div>
      <div ref={maskRef} className="absolute inset-0 z-10">
        {children}
      </div>
    </motion.div>
  );
};
