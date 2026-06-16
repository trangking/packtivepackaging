"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";

type HeroParallaxLayerProps = {
  children: ReactNode;
  className?: string;
  mode: "background" | "text" | "visual" | "showcaseBack" | "showcaseMid" | "showcaseFront";
};

export function HeroParallaxLayer({ children, className = "", mode }: HeroParallaxLayerProps) {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const yRange =
    mode === "background"
      ? [0, 92]
      : mode === "text"
        ? [0, -54]
        : mode === "showcaseBack"
          ? [0, 72]
          : mode === "showcaseMid"
            ? [0, 40]
            : mode === "showcaseFront"
              ? [0, 18]
              : [0, 46];
  const yTransform = useTransform(scrollY, [0, 680], yRange);
  const opacityTransform = useTransform(scrollY, [0, 440], mode === "text" ? [1, 0.58] : [1, 1]);
  const intro =
    mode === "text"
      ? { opacity: shouldReduceMotion ? 1 : 0.001, y: shouldReduceMotion ? 0 : 18 }
      : mode === "visual"
        ? { opacity: shouldReduceMotion ? 1 : 0.001, scale: shouldReduceMotion ? 1 : 0.982, y: shouldReduceMotion ? 0 : 18 }
        : { opacity: 1, y: 0, scale: 1 };
  const introDelay = mode === "visual" ? 0.16 : 0.04;

  return (
    <motion.div style={{ y: shouldReduceMotion ? 0 : yTransform, opacity: shouldReduceMotion ? 1 : opacityTransform }} className={className}>
      <motion.div
        initial={intro}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.82, ease: [0.22, 1, 0.36, 1], delay: shouldReduceMotion ? 0 : introDelay }}
        style={{ willChange: shouldReduceMotion ? "auto" : "transform, opacity" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
