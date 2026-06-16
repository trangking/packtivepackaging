import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { portfolioItems } from "@/data/site";

const featured = portfolioItems.slice(0, 2);

export function PortfolioSection() {
  return (
    <section className="section-y bg-[#fbfaf8]">
      <div className="container-px">
        <ScrollReveal>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="mt-3 max-w-2xl text-[1.75rem] font-black leading-[1.16] text-ink sm:text-4xl lg:text-5xl">
                ตัวอย่างงานที่ช่วยให้สินค้าเล่าเรื่องแบรนด์ได้ชัดขึ้น
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg sm:leading-9">
              เราให้ความสำคัญกับทั้งภาพลักษณ์ การใช้งาน และความพร้อมในการผลิต เพื่อให้บรรจุภัณฑ์สนับสนุนการขายได้อย่างเป็นรูปธรรม
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-10 sm:mt-16 sm:gap-12">
          {featured.map((item, index) => (
            <ScrollReveal key={item.title} direction={index % 2 === 0 ? "left" : "right"}>
              <article className={`grid gap-6 sm:gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-white shadow-[0_22px_70px_rgba(103,16,18,0.08)] ring-1 ring-neutral-200/70 sm:aspect-[16/11] sm:rounded-[1.5rem]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 52vw, 100vw"
                    className="object-contain p-4 transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.018] sm:p-8"
                  />
                </div>
                <div className="lg:px-6">
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-brand-700">{item.category}</p>
                  <h3 className="mt-4 text-2xl font-black leading-tight text-ink sm:text-3xl">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-neutral-600 sm:mt-5 sm:text-base sm:leading-8">
                    วางองค์ประกอบสินค้าให้เหมาะกับการใช้งานหลายช่องทาง ทั้งหน้าร้าน ออนไลน์ และสื่อเปิดตัวแบรนด์ โดยคำนึงถึงความชัดของชื่อสินค้า สี และความรู้สึกแรกเห็น
                  </p>
                  <div className="mt-6 grid gap-3 rounded-[1rem] border border-neutral-200/80 bg-white/70 px-4 py-4 text-xs font-bold leading-6 text-neutral-700 shadow-sm sm:mt-7 sm:text-sm">
                    <span>เป้าหมาย: ทำให้สินค้าดูพร้อมขายและน่าเชื่อถือ</span>
                    <span>โฟกัส: โครงสร้าง ภาพลักษณ์ วัสดุ และการใช้งานจริง</span>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <Link
            href="/portfolio"
            className="focus-ring mt-14 inline-flex rounded-full border border-brand-100 bg-white px-5 py-3 text-sm font-bold text-brand-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-600 hover:text-white hover:shadow-lg hover:shadow-brand-600/15"
          >
            ดูผลงานทั้งหมด
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
