import Image from "next/image";
import { ButtonLink } from "./ButtonLink";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fff,#fff5f5)]">
      <div className="container-px grid min-h-[calc(100vh-80px)] gap-10 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-16">
        <div className="fade-up">
          <p className="eyebrow">Packtive Packaging</p>
          <h1 className="mt-4 text-4xl font-black leading-tight tracking-normal text-ink sm:text-5xl lg:text-6xl">
            ออกแบบและผลิตบรรจุภัณฑ์ให้เหมาะกับสินค้าและแบรนด์ของคุณ
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-neutral-600">
            ดูแลงานซองฟอยล์ หลอดครีม กระปุก ขวดเซรั่ม ขวดปั๊ม กล่อง และบรรจุภัณฑ์เครื่องสำอาง พร้อมทีมงานช่วยแนะนำสเปกและรายละเอียดที่เหมาะกับการผลิตจริง
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact">ขอใบเสนอราคา</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              ขอคำปรึกษา
            </ButtonLink>
            <ButtonLink href="/products" variant="ghost">
              ดูหมวดสินค้า
            </ButtonLink>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-neutral-200 pt-6">
            {[
              ["ครบกระบวนการ", "ผลิตและออกแบบ"],
              ["วางแผนได้", "แนะนำ MOQ"],
              ["ตรวจสเปก", "คุมรายละเอียดงาน"]
            ].map(([value, label]) => (
              <div key={value}>
                <dt className="text-xl font-black text-brand-700 sm:text-2xl">{value}</dt>
                <dd className="mt-1 text-xs font-semibold text-neutral-500 sm:text-sm">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative fade-up lg:pl-6">
          <div className="relative aspect-[4/4.2] overflow-hidden rounded-lg bg-neutral-100 shadow-premium sm:aspect-[5/4] lg:aspect-[4/4.5]">
            <Image
              src="/PacktivePackaging/hero-packtive.jpg"
              alt="Packtive Packaging ตัวอย่างแพคเกจจิ้งสีแดงสำหรับสินค้าอาหาร"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-white/70 bg-white/90 p-4 shadow-card backdrop-blur sm:left-auto sm:w-80">
            <p className="text-sm font-black text-ink">Factory professional, production-ready detail</p>
            <p className="mt-2 text-sm leading-6 text-neutral-600">แนะนำวัสดุ เทคนิคพิมพ์ และภาพลักษณ์ให้เหมาะกับสินค้าและกลุ่มลูกค้าของแบรนด์</p>
          </div>
        </div>
      </div>
    </section>
  );
}
