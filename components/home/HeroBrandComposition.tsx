"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { PacktiveMark } from "@/components/Logo";

export function HeroBrandComposition() {
  const shouldReduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 80, damping: 24, mass: 0.6 });
  const smoothY = useSpring(pointerY, { stiffness: 80, damping: 24, mass: 0.6 });

  const heroX = useTransform(smoothX, [-1, 1], shouldReduceMotion ? [0, 0] : [-10, 10]);
  const heroY = useTransform(smoothY, [-1, 1], shouldReduceMotion ? [0, 0] : [-8, 8]);
  const glowX = useTransform(smoothX, [-1, 1], shouldReduceMotion ? [0, 0] : [12, -12]);
  const glowY = useTransform(smoothY, [-1, 1], shouldReduceMotion ? [0, 0] : [8, -8]);
  const markX = useTransform(smoothX, [-1, 1], shouldReduceMotion ? [0, 0] : [8, -8]);
  const markY = useTransform(smoothY, [-1, 1], shouldReduceMotion ? [0, 0] : [6, -6]);

  return (
    <div
      className="relative min-h-[300px] min-w-0 sm:min-h-[460px] lg:min-h-[620px] xl:min-h-[680px]"
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        pointerX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
        pointerY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
      }}
      onPointerLeave={() => {
        pointerX.set(0);
        pointerY.set(0);
      }}
      aria-label="ภาพตัวอย่างชุดบรรจุภัณฑ์ Packtive Packaging"
    >
      <motion.div
        className="absolute inset-0"
        style={{ x: glowX, y: glowY }}
        animate={shouldReduceMotion ? undefined : { opacity: [0.86, 1, 0.9] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute left-[5%] top-[9%] h-[76%] w-[90%] rounded-[999px] bg-white/86 shadow-[0_44px_120px_rgba(103,16,18,0.12)] blur-2xl" />
        <div className="absolute right-[10%] top-[16%] h-40 w-40 rounded-full bg-brand-100/70 blur-3xl sm:h-56 sm:w-56" />
        <div className="absolute left-[18%] bottom-[14%] h-36 w-36 rounded-full bg-white blur-3xl sm:h-48 sm:w-48" />
      </motion.div>

      <motion.div
        className="absolute right-[8%] top-[8%] z-10"
        style={{ x: markX, y: markY }}
        animate={shouldReduceMotion ? undefined : { scale: [1, 1.025, 1], opacity: [0.78, 1, 0.78] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <PacktiveMark className="h-28 w-28 text-brand-900/[0.055] sm:h-44 sm:w-44" />
      </motion.div>

      <motion.div className="absolute left-[2%] top-[5%] z-20 h-[88%] w-[96%] sm:top-[7%] sm:h-[84%]" style={{ x: heroX, y: heroY }}>
        <motion.div
          className="relative h-full w-full"
          animate={shouldReduceMotion ? undefined : { y: [0, -14, 0], rotate: [0, -0.5, 0], scale: [1, 1.006, 1] }}
          transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/PacktivePackaging/image/ชุดครีมพลาสติก7.webp"
            alt="ชุดบรรจุภัณฑ์พลาสติกสำหรับสกินแคร์ Packtive Packaging"
            fill
            priority
            sizes="(min-width: 1280px) 52vw, (min-width: 1024px) 48vw, 94vw"
            className="object-contain drop-shadow-[0_38px_68px_rgba(23,23,23,0.16)]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
