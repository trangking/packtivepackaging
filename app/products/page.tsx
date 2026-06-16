import type { Metadata } from "next";
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

      {products.map((product, index) => (
        <section key={product.slug} className={`section-y ${index % 2 === 0 ? "bg-neutral-50" : "bg-white"}`}>
          <div className="container-px">
            <SectionHeading
              eyebrow={product.shortName}
              title={`ตัวอย่าง${product.name}`}
              description={`${product.description} ภาพตัวอย่างแสดงแบบเต็มชิ้น เพื่อให้เห็นรูปทรง รายละเอียด และแนวทางการนำเสนอสินค้าได้ชัดเจน`}
            />
            <div className="mt-10">
              <ProductSwiper items={product.items.slice(0, 8)} detailHref={`/products/${product.slug}`} />
            </div>
          </div>
        </section>
      ))}

      <CTASection />
    </main>
  );
}
