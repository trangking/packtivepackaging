"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type AnimatedSectionProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  variant?: "fade-up" | "gradient";
};

export function AnimatedSection({ children, variant = "fade-up", className = "", style, ...props }: AnimatedSectionProps) {
  const isGradient = variant === "gradient";
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={isGradient ? { opacity: shouldReduceMotion ? 1 : 0.001, y: 14, backgroundPosition: "0% 50%" } : { opacity: shouldReduceMotion ? 1 : 0.001, y: 16, scale: 0.998 }}
      whileInView={isGradient ? { opacity: 1, y: 0, backgroundPosition: "100% 50%" } : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.74, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={{ willChange: shouldReduceMotion ? "auto" : "transform, opacity, background-position", ...style }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
