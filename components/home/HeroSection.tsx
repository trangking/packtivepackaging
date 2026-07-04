import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { HeroBrandComposition } from "@/components/home/HeroBrandComposition";
import { HeroParallaxLayer } from "@/components/motion/HeroParallaxLayer";

export function HeroSection() {
  return (
    <section className="relative isolate -mt-16 overflow-hidden bg-[#fff8f8] pt-16 text-ink sm:-mt-[68px] sm:pt-[68px] lg:min-h-[92svh]">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_24%_38%,rgba(255,255,255,0.98),rgba(255,255,255,0.78)_36%,transparent_63%),radial-gradient(circle_at_76%_42%,rgba(216,37,31,0.12),transparent_34%),linear-gradient(115deg,#fffdfd_0%,#fff3f3_48%,#ffffff_100%)]" />
      <div className="absolute bottom-0 left-0 right-0 -z-10 h-36 bg-[linear-gradient(180deg,rgba(255,255,255,0),#ffffff)]" />

      <div className="container-px grid gap-8 py-10 sm:gap-10 sm:py-12 lg:min-h-[calc(92svh-68px)] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center lg:gap-16 xl:gap-20">
        <HeroParallaxLayer mode="text" className="min-w-0 max-w-[760px]">
          <p className="inline-flex rounded-full border border-brand-100 bg-white/80 px-4 py-2 text-sm font-bold text-brand-700 shadow-lg shadow-brand-600/10 backdrop-blur-md">
            Packaging solutions for brand-ready products
          </p>
          <h1 className="mt-6 max-w-[22rem] text-[clamp(1.72rem,7.1vw,5.2rem)] font-black leading-[1.14] tracking-normal text-ink sm:mt-7 sm:max-w-[720px] sm:text-[clamp(3rem,6.2vw,5.2rem)] sm:leading-[1.08]">
            บรรจุภัณฑ์ที่ช่วยให้สินค้าของคุณดูน่าเชื่อถือ
          </h1>
          <p className="mt-5 max-w-[22rem] text-[0.95rem] font-medium leading-7 text-neutral-700 sm:mt-6 sm:max-w-[620px] sm:text-[1.12rem] sm:leading-9 lg:text-[1.2rem]">
            Packtive Packaging ช่วยวางแนวทาง ออกแบบ และผลิตบรรจุภัณฑ์ให้เหมาะกับสินค้า กลุ่มลูกค้า และงบประมาณ พร้อมดูแลรายละเอียดจนพร้อมใช้งานจริง
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
            <ButtonLink href="/contact" className="w-full min-w-44 px-7 text-base shadow-2xl shadow-brand-600/25 sm:w-auto">
              ขอคำปรึกษา
            </ButtonLink>
            <ButtonLink
              href="/portfolio"
              variant="secondary"
              className="w-full min-w-44 border-brand-100 bg-white px-7 text-base text-brand-700 shadow-xl shadow-black/5 hover:bg-brand-50 sm:w-auto"
            >
              ดูผลงาน
            </ButtonLink>
          </div>

          <ul className="mt-8 hidden max-w-xl grid-cols-3 gap-3 border-t border-brand-100/70 pt-5 text-xs font-bold uppercase tracking-[0.12em] text-neutral-500 sm:grid">
            <li>Brand direction</li>
            <li>Material planning</li>
            <li>Production support</li>
          </ul>

        </HeroParallaxLayer>

        <HeroParallaxLayer mode="visual">
          <HeroBrandComposition />
        </HeroParallaxLayer>
      </div>
    </section>
  );
}
