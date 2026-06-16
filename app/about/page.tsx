import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { SVGProps } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { PacktiveMark } from "@/components/Logo";
import { PackagingEcosystem } from "@/components/PackagingEcosystem";
import { SectionHeading } from "@/components/SectionHeading";
import { highlights, productCategories } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "เกี่ยวกับ Packtive Packaging | ทีมออกแบบและผลิตบรรจุภัณฑ์",
  description: "รู้จัก Packtive Packaging ทีมออกแบบและผลิตบรรจุภัณฑ์สำหรับแบรนด์ที่ต้องการงานที่เหมาะกับสินค้า ใช้งานได้จริง และดูน่าเชื่อถือ",
  path: "/about",
  keywords: ["เกี่ยวกับ Packtive Packaging", "โรงงานบรรจุภัณฑ์"]
});

function IconProcess(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 4 4 8l8 4 8-4-8-4Z" />
      <path d="M4 12l8 4 8-4" />
      <path d="M4 16l8 4 8-4" />
    </svg>
  );
}

function IconDesign(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 20l4-1 11-11-3-3L5 16l-1 4Z" />
      <path d="M14 7l3 3" />
    </svg>
  );
}

function IconMoq(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 8l8-4 8 4-8 4-8-4Z" />
      <path d="M4 8v8l8 4 8-4V8" />
      <path d="M12 12v8" />
    </svg>
  );
}

function IconQuality(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="10" cy="10" r="6" />
      <path d="M14.5 14.5 20 20" />
      <path d="M7.5 10l2 2 3-4" />
    </svg>
  );
}

function IconCommunication(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 5h16v10H9l-4 4V5Z" />
      <path d="M8 9h8M8 12h5" />
    </svg>
  );
}

const highlightIcons = [IconProcess, IconDesign, IconMoq, IconQuality, IconCommunication];

const galleryFeatures = [productCategories[0], productCategories[1], productCategories[3], productCategories[4]];

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
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact">ขอใบเสนอราคา</ButtonLink>
              <ButtonLink href="/how-to-order" variant="secondary">
                ดูขั้นตอนการทำงาน
              </ButtonLink>
            </div>
          </div>

          <PackagingEcosystem />
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-px grid gap-10 lg:grid-cols-[0.62fr_1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading title="สิ่งที่ช่วยให้งานผลิตเป็นระบบและมั่นใจขึ้น" description="ตั้งแต่วันแรกที่คุยกันจนถึงวันที่ของส่งมอบ ทีมงานดูแลรายละเอียดให้ครบ เพื่อลดความเสี่ยงที่งานจะคลาดเคลื่อนจากที่ตกลงไว้" />
          </div>

          <div className="border-t border-neutral-200">
            {highlights.map((item, index) => {
              const Icon = highlightIcons[index] ?? IconProcess;

              return (
                <article key={item.title} className="grid gap-4 border-b border-neutral-200 py-7 last:border-b-0 sm:grid-cols-[56px_1fr] sm:gap-6">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-xl font-black leading-tight text-ink sm:text-2xl">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">{item.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-y bg-neutral-50">
        <div className="container-px">
          <SectionHeading
            title="งานจริงจากสายผลิต Packtive"
            description="ตัวอย่างหมวดบรรจุภัณฑ์ที่เราดูแลอยู่เป็นประจำ พร้อมให้คุณเลือกดูตัวอย่างเต็มหมวดได้ทันที"
            align="center"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {galleryFeatures.map((category, index) => (
              <Link
                key={category.slug}
                href={`/products/${category.slug}`}
                className={`focus-ring group relative overflow-hidden rounded-[1.25rem] bg-white shadow-crimson ring-1 ring-neutral-200/70 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-crimson-lg ${
                  index === 0 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[radial-gradient(circle_at_50%_38%,#ffffff_0%,#fff7f7_58%,#f3eeee_100%)] p-4">
                  <Image
                    src={category.image}
                    alt={category.alt}
                    fill
                    sizes={index === 0 ? "(min-width: 1024px) 46vw, 92vw" : "(min-width: 1024px) 22vw, 46vw"}
                    className="object-contain p-4 transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <p className="text-sm font-black text-ink">{category.shortName}</p>
                  <p className="mt-1 text-xs font-bold text-brand-700 transition duration-300 group-hover:translate-x-1">ดูตัวอย่างทั้งหมด →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
