"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";

const stats = [
  { value: "One Stop", label: "วางสเปก ออกแบบ และผลิต" },
  { value: "Flexible MOQ", label: "แนะนำจำนวนผลิตตามโจทย์ธุรกิจ" },
  { value: "Brand Ready", label: "พร้อมสำหรับการนำเสนอหลายช่องทาง" }
];

export function PremiumHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#fff_0%,#fff7f7_48%,#ffffff_100%)]">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(215,25,32,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(215,25,32,0.06)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-white to-transparent" />

      <div className="container-px grid min-h-[calc(100vh-80px)] gap-12 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-16">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}>
          <div className="inline-flex items-center rounded-full border border-brand-100 bg-white/80 px-4 py-2 text-sm font-bold text-brand-700 shadow-sm backdrop-blur">
            Packtive Packaging • Packaging Production Partner
          </div>
          <h1 className="mt-6 max-w-3xl text-[clamp(2.65rem,6vw,5.15rem)] font-black leading-[1.12] text-ink">
            ออกแบบและผลิตบรรจุภัณฑ์สำหรับแบรนด์ของคุณ
          </h1>
          <p className="mt-7 max-w-2xl text-lg font-normal leading-9 text-neutral-600 sm:text-xl">
            ช่วยกำหนดสเปก วางแนวทางภาพลักษณ์ และผลิตบรรจุภัณฑ์ให้เหมาะกับสินค้า ตั้งแต่ซองฟอยล์ หลอดครีม ขวด กระปุก ไปจนถึงกล่องเซ็ตแบรนด์
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" className="min-h-12 px-7 text-base">
              ขอใบเสนอราคา
            </ButtonLink>
            <ButtonLink href="/products" variant="secondary" className="min-h-12 px-7 text-base">
              ดูหมวดสินค้า
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-lg border border-white bg-white/70 p-4 shadow-card backdrop-blur"
              >
                <p className="text-lg font-black text-brand-700">{stat.value}</p>
                <p className="mt-1 text-sm leading-6 text-neutral-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="relative min-h-[520px] lg:min-h-[650px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-10 mx-auto aspect-[4/4.4] max-w-[520px] overflow-hidden rounded-lg border border-white bg-white shadow-premium"
          >
            <Image
              src="/PacktivePackaging/hero-packtive.jpg"
              alt="ตัวอย่างแพคเกจจิ้ง Packtive สีแดงสำหรับสินค้าอาหาร"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-contain bg-white p-5"
            />
          </motion.div>

          <motion.div
            animate={{ y: [0, -14, 0], rotate: [-2, 0.5, -2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 top-0 hidden w-56 overflow-hidden rounded-lg border border-white bg-white shadow-premium sm:block"
          >
            <div className="relative aspect-[4/3]">
              <Image src="/PacktivePackaging/catalog/item-03.jpg" alt="ซองฟอยล์พรีเมียมสำหรับแบรนด์" fill sizes="224px" className="object-contain bg-white p-3" />
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 16, 0], rotate: [2, -0.5, 2] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 right-0 w-56 overflow-hidden rounded-lg border border-white bg-white shadow-premium sm:w-64"
          >
            <div className="relative aspect-[4/3]">
              <Image src="/PacktivePackaging/catalog/item-86.jpg" alt="กล่องบรรจุภัณฑ์พรีเมียม Packtive" fill sizes="256px" className="object-contain bg-white p-3" />
            </div>
            <div className="p-4">
              <p className="text-sm font-black text-ink">Design-to-Production</p>
              <p className="mt-1 text-xs leading-5 text-neutral-500">ทีมงานช่วยคุม mood, material และสเปกการผลิต</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
