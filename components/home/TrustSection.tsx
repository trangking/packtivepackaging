import Image from "next/image";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

const brandProcess = [
  { step: "01", title: "Consultation", thai: "เข้าใจโจทย์ธุรกิจ", image: "/PacktivePackaging/image/เครื่องสำอาง3.webp" },
  { step: "02", title: "Packaging Design", thai: "วางแนวทางบรรจุภัณฑ์", image: "/PacktivePackaging/image/ชุดขวดพลาสติก3.webp" },
  { step: "03", title: "Prototype Review", thai: "ตรวจสเปกก่อนผลิต", image: "/PacktivePackaging/image/เครื่องสำอาง4.webp" },
  { step: "04", title: "Production & Delivery", thai: "ผลิตและส่งมอบ", image: "/PacktivePackaging/image/ชุดขวดพลาสติก4.webp" }
];

export function TrustSection() {
  return (
    <section className="section-y relative overflow-hidden bg-[#fff7f4] text-ink">
      <div className="absolute inset-0 hidden bg-[radial-gradient(circle_at_18%_24%,rgba(216,37,31,0.10),transparent_42%)] sm:block" />
      <div className="container-px relative">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-700">Why Packtive</p>
            <h2 className="mt-3 text-[1.75rem] font-black leading-[1.16] sm:text-4xl lg:text-5xl">
              ตั้งแต่ไอเดียจนถึงงานผลิต ใน 4 ขั้นตอน
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {brandProcess.map((item, index) => (
            <ScrollReveal key={item.step} delay={index * 0.06}>
              <div className="group overflow-hidden rounded-[1.25rem] bg-white shadow-crimson ring-1 ring-neutral-200/70 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-crimson-lg">
                <div className="relative aspect-square overflow-hidden bg-[radial-gradient(circle_at_50%_38%,#ffffff_0%,#fff7f7_58%,#f3eeee_100%)]">
                  <Image
                    src={item.image}
                    alt={`${item.title} - ${item.thai}`}
                    fill
                    sizes="(min-width: 1024px) 22vw, 46vw"
                    className="object-cover transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white/92 text-xs font-black text-brand-700 shadow-sm ring-1 ring-brand-100/70 backdrop-blur">
                    {item.step}
                  </span>
                </div>
                <div className="p-4 sm:p-5">
                  <p className="text-sm font-black text-ink">{item.title}</p>
                  <p className="mt-1 text-xs font-bold text-brand-700">{item.thai}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
