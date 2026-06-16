import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PacktiveMark } from "@/components/Logo";
import { PackagingEcosystem } from "@/components/PackagingEcosystem";
import { SectionHeading } from "@/components/SectionHeading";
import { highlights } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "เกี่ยวกับ Packtive Packaging | ทีมออกแบบและผลิตบรรจุภัณฑ์",
  description: "รู้จัก Packtive Packaging ทีมออกแบบและผลิตบรรจุภัณฑ์สำหรับแบรนด์ที่ต้องการงานที่เหมาะกับสินค้า ใช้งานได้จริง และดูน่าเชื่อถือ",
  path: "/about",
  keywords: ["เกี่ยวกับ Packtive Packaging", "โรงงานบรรจุภัณฑ์"]
});

export default function AboutPage() {
  return (
    <main>
      <section className="section-y relative overflow-hidden bg-[linear-gradient(180deg,#fff,#fff5f5)]">
        <PacktiveMark className="absolute -left-16 top-24 hidden h-72 w-72 text-brand-900/[0.04] sm:block" />
        <div className="container-px grid gap-9 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-12">
          <div>
            <p className="eyebrow">About us</p>
            <h1 className="mt-4 text-3xl font-black leading-[1.16] text-ink sm:text-4xl lg:text-5xl">
              เราช่วยวางบรรจุภัณฑ์ให้เหมาะกับสินค้าและภาพลักษณ์ของแบรนด์
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-600 sm:mt-6 sm:text-lg sm:leading-9">
              Packtive Packaging ดูแลงานบรรจุภัณฑ์ตั้งแต่การเลือกประเภทสินค้า วางสเปก ออกแบบ artwork ไปจนถึงการผลิตจริง โดยให้ความสำคัญกับความชัดเจนของแบรนด์ รายละเอียดงาน และการใช้งานในตลาดจริง
            </p>
          </div>

          <PackagingEcosystem />
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-px">
          <SectionHeading eyebrow="Our strengths" title="สิ่งที่ช่วยให้งานผลิตเป็นระบบและมั่นใจขึ้น" align="center" />
          <div className="mx-auto mt-10 max-w-5xl border-y border-neutral-200 sm:mt-12">
            {highlights.map((item, index) => (
              <article key={item.title} className="grid gap-4 border-b border-neutral-200 py-6 last:border-b-0 md:grid-cols-[100px_0.85fr_1.15fr] md:py-7 lg:grid-cols-[120px_0.8fr_1.2fr]">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-brand-700">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="text-xl font-black leading-tight text-ink sm:text-2xl">{item.title}</h2>
                <p className="text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  );
}
