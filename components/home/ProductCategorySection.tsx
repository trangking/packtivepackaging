import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { products } from "@/data/site";

const categoryCards = [
  { product: products[1], blurb: "ขวดและดรอปเปอร์สำหรับสกินแคร์" },
  { product: products[2], blurb: "หลอดครีมพกพาง่าย ใช้งานสะดวก" },
  { product: products[3], blurb: "กระปุกครีมพร้อมขายทันที" }
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
                บรรจุภัณฑ์จริง พร้อมใช้กับสินค้าของคุณ
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-neutral-600 sm:text-lg lg:justify-self-end">
              เลือกหมวดที่ใกล้สินค้าคุณที่สุด แล้วเริ่มวางสเปกได้ทันที
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 sm:mt-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <ScrollReveal direction="left">
            <div className="relative overflow-hidden rounded-[1.25rem] bg-[#f8f2ef] shadow-[0_22px_70px_rgba(110,18,15,0.08)] ring-1 ring-brand-200 sm:rounded-[1.5rem]">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/PacktivePackaging/image/img2/1-1-2048x2048.jpg.webp"
                  alt="กระปุกครีมภาพสินค้าจริง ตัวอย่างงานจริงจาก Packtive Packaging"
                  fill
                  sizes="(min-width: 1024px) 56vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-4 left-4 h-10 w-10 overflow-hidden rounded-xl shadow-lg shadow-black/20 ring-2 ring-white/80 sm:h-12 sm:w-12">
                <Image
                  src="/PacktivePackaging/image/logo/Packtive Square Logo Banner Layout - 7.png"
                  alt="Packtive Packaging"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="lg:pl-8">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-700">Featured direction</p>
              <h3 className="mt-3 text-2xl font-black leading-tight text-ink sm:text-3xl">ดีไซน์ที่สื่อสารคุณภาพได้ตั้งแต่แรกเห็น</h3>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                <li className="rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700 ring-1 ring-brand-100">วัสดุที่ใช้ได้จริง</li>
                <li className="rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700 ring-1 ring-brand-100">งานพิมพ์คุณภาพ</li>
                <li className="rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700 ring-1 ring-brand-100">พร้อมขายทันที</li>
              </ul>
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
          <div className="mt-16 grid gap-5 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {categoryCards.map((item) => (
              <Link
                key={item.product.slug}
                href={`/products/${item.product.slug}`}
                className="focus-ring group relative overflow-hidden rounded-[1.25rem] bg-white shadow-crimson ring-1 ring-neutral-200/70 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-crimson-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[radial-gradient(circle_at_50%_38%,#ffffff_0%,#fff7f7_58%,#f3eeee_100%)] p-4">
                  <Image
                    src={item.product.image}
                    alt={item.product.alt}
                    fill
                    sizes="(min-width: 1024px) 22vw, 46vw"
                    className="object-contain p-4 transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <p className="text-sm font-black text-ink">{item.product.shortName}</p>
                  <p className="mt-1 text-xs leading-5 text-neutral-600">{item.blurb}</p>
                </div>
              </Link>
            ))}
            <Link
              href="/products"
              className="focus-ring group relative flex flex-col items-center justify-center gap-2 overflow-hidden rounded-[1.25rem] border border-brand-100 bg-brand-50/50 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-brand-50"
            >
              <span className="text-sm font-bold text-brand-700">ดูหมวดสินค้าทั้งหมด</span>
              <span aria-hidden="true" className="text-brand-700 transition duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
