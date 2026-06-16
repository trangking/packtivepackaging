import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { ProductCard } from "@/components/ProductCard";
import { ProductSwiper } from "@/components/ProductSwiper";
import { SectionHeading } from "@/components/SectionHeading";
import { products } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "สินค้าและบริการ | Packtive Packaging รับผลิตบรรจุภัณฑ์",
  description: "รวมหมวดบรรจุภัณฑ์จาก Packtive Packaging เช่น ซองและถุงแพคเกจจิ้ง ขวด ดรอปเปอร์ หลอดครีม กระปุกครีม และกล่องเซ็ต",
  path: "/products",
  keywords: ["หมวดสินค้าแพคเกจจิ้ง", "ซองฟอยล์", "หลอดครีม", "ขวดเซรั่ม", "กระปุกครีม", "กล่องบรรจุภัณฑ์"]
});

const flagshipSlug = products.reduce((largest, product) => (product.items.length > largest.items.length ? product : largest), products[0]).slug;

export default function ProductsPage() {
  return (
    <main>
      <section className="section-y bg-white">
        <div className="container-px">
          <SectionHeading
            eyebrow="Products"
            title="หมวดบรรจุภัณฑ์และตัวอย่างสินค้า"
            description="เลือกดูหมวดบรรจุภัณฑ์ตามประเภทสินค้า พร้อมตัวอย่างภาพจริงในแต่ละหมวด เพื่อช่วยให้ประเมินรูปแบบที่เหมาะกับแบรนด์ของคุณได้ง่ายขึ้น"
            align="center"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {products.map((product) => {
        const previewCount = Math.min(8, product.items.length);
        const isFlagship = product.slug === flagshipSlug;

        return (
          <section
            key={product.slug}
            id={product.slug}
            className={`section-y scroll-mt-24 ${isFlagship ? "bg-neutral-50" : "bg-white"}`}
          >
            <div className="container-px">
              <SectionHeading
                title={`ตัวอย่าง${product.name}`}
                description={`ภาพถ่ายจริงแบบเต็มชิ้น ให้เห็นวัสดุ พื้นผิว และแนวทางจัดวางกราฟิกที่ใช้ได้จริงกับ${product.shortName}`}
              />
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {product.features.map((feature) => (
                  <li key={feature} className="rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700 ring-1 ring-brand-100">
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-baseline justify-between gap-3">
                <p className="text-sm font-semibold text-neutral-500">
                  แสดง {previewCount} จาก {product.items.length} แบบ
                </p>
                <Link
                  href={`/products/${product.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 transition-all duration-300 hover:translate-x-1"
                >
                  ดูสเปกและราคาแบบเต็ม
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
              <div className="mt-6">
                <ProductSwiper items={product.items.slice(0, previewCount)} />
              </div>
            </div>
          </section>
        );
      })}

      <CTASection />
    </main>
  );
}
