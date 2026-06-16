"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { HomeProductGrid } from "@/components/home/HomeProductGrid";
import { PremiumHero } from "@/components/home/PremiumHero";
import { Reveal, staggerContainer, staggerItem } from "@/components/motion/Reveal";
import { faqs, highlights, portfolioItems, processSteps } from "@/data/site";

export function PremiumHome() {
  return (
    <main>
      <PremiumHero />

      <section className="section-y relative overflow-hidden bg-white">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent" />
        <div className="container-px">
          <Reveal>
            <SectionHeading
              eyebrow="Product categories"
              title="หมวดบรรจุภัณฑ์สำหรับสินค้าแต่ละประเภท"
              description="จัดกลุ่มตัวอย่างตามรูปแบบบรรจุภัณฑ์ เพื่อให้เลือกแนวทางที่เหมาะกับสินค้าและงบประมาณได้ง่ายขึ้น"
              align="center"
            />
          </Reveal>
          <HomeProductGrid />
        </div>
      </section>

      <section className="section-y overflow-hidden bg-[linear-gradient(180deg,#fff7f7_0%,#ffffff_72%)]">
        <div className="container-px grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <Reveal>
            <div className="sticky top-28">
              <SectionHeading
                eyebrow="Why Packtive"
                title="งานผลิตที่ดูเป็นระบบ แต่ยังยืดหยุ่นสำหรับแบรนด์ใหม่"
                description="เราออกแบบประสบการณ์ให้เจ้าของแบรนด์เข้าใจสเปก ราคา และจังหวะผลิตได้ง่ายขึ้น ตั้งแต่วันแรกที่เริ่มคุย"
              />
              <div className="mt-8 rounded-lg border border-brand-100 bg-white p-6 shadow-card">
                <p className="text-4xl font-black text-brand-700">Practical</p>
                <p className="mt-2 text-sm leading-7 text-neutral-600">บรรจุภัณฑ์ควรดูดี ผลิตได้จริง คุมรายละเอียดได้ และเหมาะกับต้นทุนของธุรกิจ</p>
              </div>
            </div>
          </Reveal>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-5 sm:grid-cols-2"
          >
            {highlights.map((item, index) => (
              <motion.article
                variants={staggerItem}
                key={item.title}
                className={`rounded-lg border border-neutral-100 bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-premium ${
                  index % 2 === 1 ? "sm:translate-y-8" : ""
                }`}
              >
                <span className="text-sm font-black text-brand-600">0{index + 1}</span>
                <h3 className="mt-5 text-2xl font-black leading-tight text-ink">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-neutral-600">{item.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-y bg-[#fff7f4] text-ink">
        <div className="container-px">
          <Reveal>
            <SectionHeading
              eyebrow="Process"
              title="ขั้นตอนสั่งผลิตที่ชัดเจนและตรวจสอบได้"
              description="ทุกขั้นตอนมีเป้าหมายชัดเจน ตั้งแต่รับโจทย์จนถึงส่งมอบ เพื่อให้คุณวางแผนสเปก งบประมาณ และระยะเวลาได้มั่นใจขึ้น"
              align="center"
            />
          </Reveal>
          <div className="mt-14 grid gap-4 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.08}>
                <article className="relative h-full rounded-lg border border-brand-100/80 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-premium">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-600 text-lg font-black text-white">{index + 1}</span>
                  <h3 className="mt-7 text-xl font-black leading-tight text-ink">{step.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-neutral-700">{step.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y overflow-hidden bg-white">
        <div className="container-px">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <SectionHeading
                eyebrow="Portfolio"
                title="ตัวอย่างงานที่ช่วยให้เห็นทิศทางของแบรนด์"
                description="ใช้ภาพจริงจากคลัง Packtive เพื่อแสดงแนวทางบรรจุภัณฑ์ที่สามารถต่อยอดสู่การผลิตได้"
              />
            </Reveal>
            <Reveal delay={0.12}>
              <Link href="/portfolio" className="inline-flex rounded-full border border-brand-100 px-5 py-3 text-sm font-bold text-brand-700 transition hover:bg-brand-600 hover:text-white">
                ดูผลงานทั้งหมด
              </Link>
            </Reveal>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18 }}
            className="mt-12 grid gap-5 md:grid-cols-3"
          >
            {portfolioItems.map((item, index) => (
              <motion.article key={item.title} variants={staggerItem} className={`group overflow-hidden rounded-lg bg-neutral-100 shadow-card ${index === 1 ? "md:mt-12" : ""}`}>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image src={item.image} alt={item.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="bg-white p-6">
                  <p className="text-sm font-bold text-brand-700">{item.category}</p>
                  <h3 className="mt-2 text-2xl font-black text-ink">{item.title}</h3>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-y bg-[linear-gradient(180deg,#ffffff,#fff5f5)]">
        <div className="container-px grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title="คำถามที่ช่วยให้เริ่มงานได้เป็นระบบขึ้น"
              description="คำตอบสั้นและชัดเจน เพื่อช่วยให้คุณเตรียมข้อมูลก่อนคุยสเปกและขอใบเสนอราคา"
            />
          </Reveal>
          <div className="grid gap-4">
            {faqs.slice(0, 5).map((faq, index) => (
              <Reveal key={faq.question} delay={index * 0.06}>
                <article className="rounded-lg border border-neutral-100 bg-white p-6 shadow-card">
                  <h3 className="text-lg font-black leading-8 text-ink">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">{faq.answer}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
