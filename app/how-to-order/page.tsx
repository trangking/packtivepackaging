import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { processSteps } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "วิธีสั่งผลิตบรรจุภัณฑ์ | Packtive Packaging",
  description: "ขั้นตอนสั่งผลิตบรรจุภัณฑ์กับ Packtive Packaging ตั้งแต่รับโจทย์ เลือกสเปก วางแนวทาง เสนอราคา ผลิต ตรวจงาน และส่งมอบ",
  path: "/how-to-order",
  keywords: ["วิธีสั่งผลิตแพคเกจจิ้ง", "ขั้นตอนผลิตบรรจุภัณฑ์"]
});

export default function HowToOrderPage() {
  return (
    <main>
      <section className="section-y bg-white">
        <div className="container-px">
          <SectionHeading eyebrow="How to order" title="ขั้นตอนการเริ่มงานกับ Packtive Packaging" description="กระบวนการทำงานถูกจัดให้ชัดเจน เพื่อให้คุณเห็นสเปก งบประมาณ และลำดับงานก่อนเข้าสู่การผลิตจริง" align="center" />
          <div className="mx-auto mt-12 max-w-4xl">
            {processSteps.map((step, index) => (
              <article key={step.title} className="grid gap-5 border-l border-brand-100 pb-10 pl-6 last:pb-0 sm:grid-cols-[120px_1fr] sm:pl-8">
                <div>
                  <span className="inline-grid h-12 w-12 place-items-center rounded-full bg-brand-600 text-lg font-black text-white">{index + 1}</span>
                </div>
                <div className="rounded-lg border border-neutral-100 bg-white p-6 shadow-card">
                  <h2 className="text-2xl font-black text-ink">{step.title}</h2>
                  <p className="mt-3 text-base leading-8 text-neutral-600">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  );
}
