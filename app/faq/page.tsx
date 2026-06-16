import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { SectionHeading } from "@/components/SectionHeading";
import { faqs } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "FAQ คำถามที่พบบ่อย | Packtive Packaging",
  description: "คำถามที่พบบ่อยเกี่ยวกับการผลิตบรรจุภัณฑ์ MOQ ระยะเวลาผลิต การออกแบบ artwork และการขอใบเสนอราคา",
  path: "/faq",
  keywords: ["FAQ แพคเกจจิ้ง", "ขั้นต่ำผลิตบรรจุภัณฑ์", "ออกแบบแพคเกจจิ้ง"]
});

export default function FaqPage() {
  return (
    <main>
      <section className="section-y bg-white">
        <div className="container-px">
          <SectionHeading eyebrow="FAQ" title="คำถามที่พบบ่อย" description="รวมคำตอบสำคัญเพื่อช่วยให้คุณเตรียมข้อมูลและเริ่มโปรเจกต์บรรจุภัณฑ์ได้อย่างเป็นระบบ" align="center" />
          <div className="mx-auto mt-10 max-w-4xl">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  );
}
