"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "left" | "right" | "scale";

type ScrollRevealProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
};

const offsets: Record<Direction, { x: number; y: number; scale: number }> = {
  up: { x: 0, y: 18, scale: 1 },
  left: { x: -18, y: 0, scale: 1 },
  right: { x: 18, y: 0, scale: 1 },
  scale: { x: 0, y: 8, scale: 0.992 }
};

export function ScrollReveal({ children, delay = 0, direction = "up", className = "", style, ...props }: ScrollRevealProps) {
  const offset = offsets[direction];
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0.001, x: offset.x, y: offset.y, scale: offset.scale }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -10% 0px" }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.72, ease: [0.22, 1, 0.36, 1], delay: shouldReduceMotion ? 0 : delay }}
      className={className}
      style={{ willChange: shouldReduceMotion ? "auto" : "transform, opacity", ...style }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
