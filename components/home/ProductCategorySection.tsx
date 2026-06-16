import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { products } from "@/data/site";

const decisions = [
  { label: "โจทย์", text: "สินค้าต้องการบรรจุภัณฑ์ที่สื่อสารคุณภาพได้ชัดเจน และยังคงบุคลิกของแบรนด์ไว้ครบถ้วน" },
  { label: "แนวทาง", text: "กำหนดโครงสร้างกล่อง วัสดุ สี และองค์ประกอบกราฟิกให้เหมาะกับการใช้งานจริงและภาพลักษณ์ของสินค้า" },
  { label: "ผลลัพธ์", text: "ได้บรรจุภัณฑ์ที่พร้อมใช้ทั้งสำหรับการขายออนไลน์ การจัดวางหน้าร้าน และการส่งต่อเข้าสู่กระบวนการผลิต" }
];

const pathways = [
  { product: products[0], text: "ซองและถุงสำหรับอาหาร ขนม เครื่องดื่ม และสินค้าไลฟ์สไตล์" },
  { product: products[1], text: "ขวดและดรอปเปอร์สำหรับสกินแคร์ เซรั่ม และผลิตภัณฑ์ดูแลผิว" },
  { product: products[2], text: "หลอดครีมสำหรับแฮนด์ครีม โลชั่น เจล และผลิตภัณฑ์คลินิก" },
  { product: products[4], text: "กล่องและเซ็ตบรรจุภัณฑ์สำหรับการขาย การเปิดตัว และชุดของขวัญ" }
];

export function ProductCategorySection() {
  return (
    <section className="section-y bg-white">
      <div className="container-px">
        <ScrollReveal>
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow">Packaging strategy</p>
              <h2 className="mt-3 max-w-2xl text-[1.75rem] font-black leading-[1.16] text-ink sm:text-4xl lg:text-5xl">
                เริ่มจากเป้าหมายของสินค้า ก่อนกำหนดวัสดุและรูปแบบบรรจุภัณฑ์
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg sm:leading-9 lg:justify-self-end">
              บรรจุภัณฑ์ที่ดีควรสนับสนุนการขาย การใช้งาน และภาพลักษณ์ของแบรนด์ จากนั้นจึงแปลงเป็นโครงสร้าง วัสดุ สี และรายละเอียดการผลิตที่ทำได้จริง
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 sm:mt-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <ScrollReveal direction="left">
            <div className="relative overflow-hidden rounded-[1.25rem] bg-[#f8f2ef] shadow-[0_22px_70px_rgba(103,16,18,0.08)] ring-1 ring-brand-200 sm:rounded-[1.5rem]">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/PacktivePackaging/image/ชุดขวดพลาสติก1.webp"
                  alt="Case study ชุดขวดและกระปุกพลาสติก Packtive Packaging"
                  fill
                  sizes="(min-width: 1024px) 56vw, 100vw"
                  className="object-contain p-4 sm:p-8"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="lg:pl-8">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-700">Featured direction</p>
              <h3 className="mt-3 text-2xl font-black leading-tight text-ink sm:text-3xl">ชุดขวดและกระปุกที่สื่อสารคุณภาพได้ตั้งแต่แรกเห็น</h3>
              <div className="mt-7 grid gap-6 sm:mt-8 sm:gap-7">
                {decisions.map((item, index) => (
                  <ScrollReveal key={item.label} delay={index * 0.07}>
                    <div className="grid grid-cols-[36px_1fr] gap-4 border-t border-neutral-200 pt-5 transition duration-300 hover:border-brand-100 sm:grid-cols-[44px_1fr]">
                    <span className="text-sm font-black text-brand-700">{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h4 className="text-lg font-black text-ink">{item.label}</h4>
                      <p className="mt-2 text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">{item.text}</p>
                    </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
              <Link
                href="/portfolio"
                className="focus-ring mt-8 inline-flex rounded-full bg-brand-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-brand-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700"
              >
                ดูแนวทางผลงาน
              </Link>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="mt-16 border-y border-neutral-200 sm:mt-20">
            {pathways.map((item, index) => (
              <ScrollReveal key={item.product.slug} delay={index * 0.045} className="border-b border-neutral-200 last:border-b-0">
              <Link
                href={`/products/${item.product.slug}`}
                className="group grid gap-3 py-6 transition duration-300 hover:bg-brand-50/50 sm:grid-cols-[0.35fr_1fr_auto] sm:items-center sm:px-4"
              >
                <span className="text-sm font-black uppercase tracking-[0.14em] text-brand-700">{item.product.shortName}</span>
                <span className="text-lg font-black leading-snug text-ink transition group-hover:text-brand-700 sm:text-xl">{item.text}</span>
                <span className="text-sm font-bold text-neutral-500 transition group-hover:translate-x-1 group-hover:text-brand-700">ดูข้อมูลหมวดนี้</span>
              </Link>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
