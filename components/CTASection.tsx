import Image from "next/image";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { ButtonLink } from "./ButtonLink";

const checklist = ["ประเภทสินค้า", "จำนวนที่ต้องการ", "งบประมาณโดยประมาณ", "reference หรือไฟล์แบรนด์"];

export function CTASection() {
  return (
    <section className="bg-[#fff7f7] py-14 sm:py-20">
      <div className="container-px">
        <AnimatedSection variant="fade-up" className="relative overflow-hidden rounded-[1.25rem] bg-[linear-gradient(135deg,#b31d18_0%,#d8251f_52%,#ef6259_100%)] px-5 py-8 text-white shadow-[0_24px_70px_rgba(110,18,15,0.16)] sm:rounded-[1.5rem] sm:px-10 sm:py-10 lg:px-14">
          <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-10">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-white/78">Next step</p>
              <h2 className="mt-4 max-w-2xl text-[1.75rem] font-black leading-[1.16] sm:text-4xl lg:text-5xl">
                เริ่มต้นโปรเจกต์บรรจุภัณฑ์ด้วยข้อมูลที่ชัดเจน
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/88">
                ส่งรายละเอียดสินค้า จำนวนที่ต้องการ และ reference ที่มี ทีม Packtive จะช่วยประเมินสเปกเบื้องต้นและแนะนำแนวทางที่เหมาะกับการผลิตจริง
              </p>
            </div>

            <div className="rounded-[1rem] bg-white px-5 py-6 text-ink shadow-[0_22px_54px_rgba(110,18,15,0.16)] ring-1 ring-white/70 sm:rounded-[1.25rem] sm:px-7">
              <div className="flex items-center gap-3">
                <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg ring-1 ring-neutral-200/70">
                  <Image src="/PacktivePackaging/image/logo/Packtive Square Logo Banner Layout - 7.png" alt="Packtive Packaging" fill sizes="36px" className="object-contain" />
                </span>
                <h3 className="text-xl font-black">ข้อมูลที่ช่วยให้ประเมินราคาได้แม่นยำขึ้น</h3>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {checklist.map((item) => (
                  <div key={item} className="flex items-center gap-3 border-b border-neutral-200 pb-3 text-sm font-bold text-neutral-700">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-brand-600 shadow-sm shadow-brand-600/30" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact" className="w-full justify-center shadow-xl shadow-brand-600/20 sm:w-auto">
                  ขอใบเสนอราคา
                </ButtonLink>
                <ButtonLink href="/portfolio" variant="secondary" className="w-full justify-center border-neutral-200 sm:w-auto">
                  ดูผลงาน
                </ButtonLink>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
