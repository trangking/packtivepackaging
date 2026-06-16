import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { portfolioItems } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Portfolio ผลงานบรรจุภัณฑ์ | Packtive Packaging",
  description: "ชมตัวอย่างผลงานบรรจุภัณฑ์ กล่อง ซองฟอยล์ และบรรจุภัณฑ์เครื่องสำอางจาก Packtive Packaging",
  path: "/portfolio",
  keywords: ["ผลงานแพคเกจจิ้ง", "portfolio packaging"]
});

export default function PortfolioPage() {
  return (
    <main>
      <section className="section-y bg-white">
        <div className="container-px">
          <SectionHeading eyebrow="Portfolio" title="ตัวอย่างผลงานบรรจุภัณฑ์" description="ตัวอย่างงานที่สะท้อนแนวทางการออกแบบที่สะอาด ชัดเจน และพร้อมต่อยอดให้เหมาะกับสินค้าและภาพลักษณ์ของแต่ละแบรนด์" align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {portfolioItems.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-lg border border-neutral-100 bg-white shadow-card">
                <div className="relative aspect-[4/5]">
                  <Image src={item.image} alt={item.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <p className="text-sm font-bold text-brand-700">{item.category}</p>
                  <h2 className="mt-2 text-xl font-black text-ink">{item.title}</h2>
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
