"use client";

import Image from "next/image";
import { useState } from "react";
import { PacktiveMark } from "@/components/Logo";

const ecosystemItems = [
  {
    id: "pouch",
    label: "Pouch",
    title: "ซองและถุง",
    description: "เหมาะกับอาหาร ขนม เครื่องดื่ม และสินค้าไลฟ์สไตล์ที่ต้องการภาพจำชัดเจนบนชั้นวางและช่องทางออนไลน์",
    image: "/PacktivePackaging/catalog/item-03.jpg",
    className: "left-[1%] top-[18%] h-[24%] w-[29%]"
  },
  {
    id: "bottle",
    label: "Bottle",
    title: "ขวดและดรอปเปอร์",
    description: "ช่วยให้สกินแคร์และผลิตภัณฑ์ดูแลผิวดูสะอาด เป็นระบบ และสื่อสารคุณภาพของแบรนด์ได้ชัดเจน",
    image: "/PacktivePackaging/catalog/item-60.jpg",
    className: "right-[2%] top-[14%] h-[25%] w-[27%]"
  },
  {
    id: "tube",
    label: "Tube",
    title: "หลอดครีม",
    description: "เหมาะกับแฮนด์ครีม เจล โลชั่น และแบรนด์ที่ต้องการบรรจุภัณฑ์ใช้งานง่าย พกพาสะดวก และดูเรียบร้อย",
    image: "/PacktivePackaging/catalog/item-56.jpg",
    className: "left-[8%] bottom-[10%] h-[24%] w-[24%]"
  },
  {
    id: "jar",
    label: "Jar",
    title: "กระปุก",
    description: "เหมาะกับครีม มาสก์ และผลิตภัณฑ์ดูแลผิวที่ต้องการงานนำเสนอมั่นใจ พร้อมจับคู่กับฉลากหรือกล่องเซ็ต",
    image: "/PacktivePackaging/catalog/item-88.jpg",
    className: "right-[8%] bottom-[9%] h-[23%] w-[26%]"
  }
];

export function PackagingEcosystem() {
  const [activeId, setActiveId] = useState(ecosystemItems[0].id);
  const active = ecosystemItems.find((item) => item.id === activeId) ?? ecosystemItems[0];

  return (
    <div>
      <div className="sm:hidden">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-white shadow-xl shadow-brand-900/10 ring-1 ring-brand-100/70">
          <Image
            src="/PacktivePackaging/catalog/item-86.jpg"
            alt="Packtive Packaging gift box ecosystem"
            fill
            sizes="94vw"
            className="object-contain p-5"
          />
        </div>

        <div className="mt-4 grid gap-3">
          {ecosystemItems.map((item) => {
            const activeItem = activeId === item.id;

            return (
              <button
                key={item.id}
                type="button"
                className={`focus-ring flex items-center gap-3 rounded-2xl border p-3 text-left transition ${
                  activeItem ? "border-brand-600 bg-brand-50 text-brand-700" : "border-neutral-200 bg-white text-ink"
                }`}
                onClick={() => setActiveId(item.id)}
              >
                <span className="relative h-16 w-16 shrink-0 rounded-xl bg-white">
                  <Image src={item.image} alt={item.title} fill sizes="64px" className="object-contain p-2" />
                </span>
                <span>
                  <span className="block text-xs font-black uppercase tracking-[0.14em] text-brand-700">{item.label}</span>
                  <span className="mt-1 block text-base font-black leading-snug">{item.title}</span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-4 border-l-2 border-brand-600 bg-white/88 px-4 py-4 shadow-sm">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-700">Packaging system</p>
          <h3 className="mt-1 text-lg font-black text-ink">{active.title}</h3>
          <p className="mt-2 text-sm leading-7 text-neutral-600">{active.description}</p>
        </div>
      </div>

      <div className="relative hidden min-h-[540px] sm:block">
      <div className="absolute inset-0">
        <div className="absolute left-[10%] top-[14%] h-[70%] w-[80%] rounded-[999px] bg-brand-50/70 blur-3xl" />
        <div className="absolute left-[15%] top-[21%] h-[54%] w-[70%] rounded-full border border-brand-100/70" />
        <div className="absolute left-[29%] top-[31%] h-[33%] w-[42%] rounded-full border border-neutral-200" />
        <div className="absolute left-[50%] top-[18%] h-[66%] w-px -translate-x-1/2 bg-[linear-gradient(180deg,transparent,rgba(215,25,32,0.22),transparent)]" />
        <div className="absolute left-[12%] top-[50%] h-px w-[76%] bg-[linear-gradient(90deg,transparent,rgba(215,25,32,0.18),transparent)]" />
        <PacktiveMark className="absolute left-[38%] top-[36%] h-36 w-36 text-brand-900/[0.045]" />
      </div>

      <div className="absolute left-[28%] top-[22%] z-20 h-[48%] w-[46%]">
        <div className="relative h-full w-full">
          <Image
            src="/PacktivePackaging/catalog/item-86.jpg"
            alt="กล่องเซ็ตเป็นศูนย์กลางของระบบบรรจุภัณฑ์ Packtive"
            fill
            sizes="(min-width: 1024px) 32vw, 82vw"
            className="object-contain drop-shadow-[0_28px_52px_rgba(23,23,23,0.14)]"
          />
        </div>
      </div>

      {ecosystemItems.map((item) => {
        const activeItem = activeId === item.id;

        return (
          <button
            key={item.id}
            type="button"
            className={`focus-ring absolute z-30 ${item.className} transition duration-300 ${activeItem ? "scale-105 opacity-100" : "opacity-72 hover:scale-[1.03] hover:opacity-100"}`}
            onMouseEnter={() => setActiveId(item.id)}
            onFocus={() => setActiveId(item.id)}
            onClick={() => setActiveId(item.id)}
          >
            <span className="relative block h-full w-full">
              <Image src={item.image} alt={item.title} fill sizes="(min-width: 1024px) 16vw, 42vw" className="object-contain drop-shadow-[0_18px_34px_rgba(23,23,23,0.12)]" />
            </span>
            <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap border px-3 py-1 text-[11px] font-black uppercase tracking-[0.12em] backdrop-blur ${activeItem ? "border-brand-600 bg-brand-600 text-white" : "border-white bg-white/80 text-brand-700"}`}>
              {item.label}
            </span>
          </button>
        );
      })}

      <div className="absolute bottom-2 left-1/2 z-40 w-[min(92%,460px)] -translate-x-1/2 border-l-2 border-brand-600 bg-white/88 px-5 py-4 shadow-[0_18px_50px_rgba(23,23,23,0.10)] backdrop-blur-xl">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-700">Packaging system</p>
        <h3 className="mt-1 text-xl font-black text-ink">{active.title}</h3>
        <p className="mt-2 text-sm leading-7 text-neutral-600">{active.description}</p>
      </div>
      </div>
    </div>
  );
}
