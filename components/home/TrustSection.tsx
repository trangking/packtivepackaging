import { PacktiveMark } from "@/components/Logo";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

const brandProcess = [
  {
    step: "01",
    title: "Consultation",
    thai: "ทำความเข้าใจโจทย์ธุรกิจ",
    text: "เริ่มจากประเภทสินค้า กลุ่มลูกค้า งบประมาณ ช่องทางขาย และภาพลักษณ์ที่ต้องการสื่อสาร"
  },
  {
    step: "02",
    title: "Packaging Design",
    thai: "วางแนวทางบรรจุภัณฑ์",
    text: "แปลงโจทย์เป็นวัสดุ โครงสร้าง สี ฟินิชงานพิมพ์ และ artwork ที่เหมาะกับการผลิตจริง"
  },
  {
    step: "03",
    title: "Prototype Review",
    thai: "ตรวจสเปกก่อนยืนยันงาน",
    text: "ทบทวนขนาด ผิวสัมผัส สี งานพิมพ์ และความพร้อมของไฟล์ เพื่อลดความคลาดเคลื่อนก่อนผลิต"
  },
  {
    step: "04",
    title: "Production & Delivery",
    thai: "ผลิต ตรวจงาน และส่งมอบ",
    text: "ดำเนินการผลิตตามสเปกที่ตกลง ตรวจรายละเอียดสำคัญ และจัดส่งงานให้พร้อมใช้งาน"
  }
];

export function TrustSection() {
  return (
    <section className="section-y relative overflow-hidden bg-[#fff7f4] text-ink">
      <PacktiveMark className="absolute -right-20 top-20 hidden h-80 w-80 text-brand-900/[0.045] sm:block" />
      <div className="absolute inset-0 hidden bg-[radial-gradient(circle_at_18%_24%,rgba(215,25,32,0.10),transparent_42%)] sm:block" />
      <div className="container-px relative grid gap-10 lg:grid-cols-[0.72fr_1fr] lg:items-start lg:gap-12">
        <ScrollReveal direction="left">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-700">Why Packtive</p>
            <h2 className="mt-3 max-w-xl text-[1.75rem] font-black leading-[1.16] sm:text-4xl lg:text-5xl">
              กระบวนการทำงานที่ชัดเจน ตั้งแต่ไอเดียจนถึงงานผลิต
            </h2>
            <p className="mt-5 max-w-lg text-base leading-8 text-neutral-700 sm:mt-6 sm:text-lg sm:leading-9">
              เราเริ่มจากการทำความเข้าใจเป้าหมายของแบรนด์ แล้วช่วยเลือกแนวทางบรรจุภัณฑ์ที่เหมาะกับสินค้า งบประมาณ และขั้นตอนการผลิตจริง
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-3 border-t border-brand-100/80 pt-3">
          {brandProcess.map((item, index) => (
            <ScrollReveal key={item.step} direction={index % 2 === 0 ? "right" : "left"} delay={index * 0.06}>
              <article className="grid gap-4 rounded-[1.1rem] border-b border-brand-100/80 px-0 py-7 transition duration-300 hover:bg-white/58 hover:shadow-[0_18px_50px_rgba(103,16,18,0.06)] sm:px-4 md:grid-cols-[110px_0.9fr_1.1fr] md:gap-5 md:py-8">
                <p className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-black uppercase tracking-[0.08em] text-brand-700 shadow-sm ring-1 ring-brand-100">{item.step}</p>
                <div>
                  <h3 className="text-xl font-black leading-tight text-ink sm:text-2xl">{item.title}</h3>
                  <p className="mt-2 text-base font-bold text-brand-700">{item.thai}</p>
                </div>
                <p className="text-sm leading-7 text-neutral-700 sm:text-base sm:leading-8">{item.text}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
