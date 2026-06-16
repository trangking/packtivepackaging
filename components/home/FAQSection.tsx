import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { faqs } from "@/data/site";

export function FAQSection() {
  return (
    <section className="section-y bg-white">
      <div className="container-px grid gap-10 lg:grid-cols-[0.7fr_1fr] lg:items-start lg:gap-12">
        <ScrollReveal direction="left">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow">Before you start</p>
            <h2 className="mt-3 max-w-xl text-[1.75rem] font-black leading-[1.16] text-ink sm:text-4xl lg:text-5xl">
              ข้อมูลสำคัญก่อนเริ่มผลิตบรรจุภัณฑ์
            </h2>
            <p className="mt-5 max-w-lg text-base leading-8 text-neutral-600 sm:text-lg sm:leading-9">
              คำตอบเหล่านี้ช่วยให้คุณเตรียมข้อมูลได้ครบขึ้น และช่วยให้ทีมงานประเมินสเปก งบประมาณ และระยะเวลาได้ชัดเจนกว่าเดิม
            </p>
            <Link
              href="/faq"
              className="focus-ring mt-7 inline-flex min-h-12 items-center rounded-full border border-brand-100 px-5 py-3 text-sm font-bold text-brand-700 transition hover:-translate-y-0.5 hover:bg-brand-50 sm:mt-8"
            >
              อ่านคำถามทั้งหมด
            </Link>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="right">
          <FAQAccordion items={faqs.slice(0, 4)} />
        </ScrollReveal>
      </div>
    </section>
  );
}
