"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { CatalogItem } from "@/data/site";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type ProductSwiperProps = {
  items: CatalogItem[];
};

export function ProductSwiper({ items }: ProductSwiperProps) {
  const sliderId = `product-swiper-${items[0]?.id ?? "default"}`.replace(/[^a-zA-Z0-9_-]/g, "-");

  return (
    <div className="product-swiper relative">
      <div className="mb-5 flex justify-end gap-2 sm:gap-3">
        <button
          type="button"
          aria-label="ดูรูปก่อนหน้า"
          className={`${sliderId}-prev swiper-control grid h-11 w-11 place-items-center rounded-full border border-brand-100 bg-white text-brand-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-600 hover:text-white`}
        >
          <span aria-hidden="true" className="text-2xl leading-none">
            ‹
          </span>
        </button>
        <button
          type="button"
          aria-label="ดูรูปถัดไป"
          className={`${sliderId}-next swiper-control grid h-11 w-11 place-items-center rounded-full border border-brand-100 bg-white text-brand-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-600 hover:text-white`}
        >
          <span aria-hidden="true" className="text-2xl leading-none">
            ›
          </span>
        </button>
      </div>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        navigation={{
          prevEl: `.${sliderId}-prev`,
          nextEl: `.${sliderId}-next`
        }}
        pagination={{ clickable: true, el: `.${sliderId}-pagination` }}
        spaceBetween={16}
        slidesPerView={1.04}
        breakpoints={{
          640: { slidesPerView: 1.45, spaceBetween: 20 },
          900: { slidesPerView: 2.1, spaceBetween: 24 },
          1280: { slidesPerView: 2.65, spaceBetween: 26 }
        }}
        className="!overflow-visible"
      >
        {items.map((item, index) => (
          <SwiperSlide key={item.id} className="h-auto">
            <motion.article
              initial={{ opacity: 0.001, y: 22, scale: 0.992 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.24 }}
              transition={{ duration: 0.66, ease: [0.22, 1, 0.36, 1], delay: Math.min(index * 0.045, 0.18) }}
              className="group flex h-full min-h-[370px] flex-col overflow-hidden rounded-[1.1rem] border border-neutral-200/70 bg-white shadow-crimson transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-brand-100 hover:shadow-crimson-lg sm:min-h-[420px] sm:rounded-[1.25rem]"
            >
              <div className="relative aspect-[4/3] bg-[radial-gradient(circle_at_50%_38%,#ffffff_0%,#fff7f7_58%,#f5f5f5_100%)] p-4 sm:aspect-[5/3.4] sm:p-6">
                <div className="absolute inset-x-10 bottom-6 h-10 rounded-full bg-brand-900/5 blur-xl transition duration-500 group-hover:bg-brand-900/8" />
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1280px) 40vw, (min-width: 900px) 48vw, (min-width: 640px) 70vw, 92vw"
                  className="object-contain p-3 transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025] sm:p-6"
                />
              </div>
              <div className="flex flex-1 flex-col items-start p-5 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-600">{item.category}</p>
                <h3 className="mt-3 text-xl font-black leading-snug text-ink sm:text-[1.35rem]">{item.title}</h3>
              </div>
            </motion.article>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={`${sliderId}-pagination mt-7 flex justify-center`} />
    </div>
  );
}
