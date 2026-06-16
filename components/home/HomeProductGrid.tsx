"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/site";
import { staggerContainer, staggerItem } from "@/components/motion/Reveal";

export function HomeProductGrid() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.16 }}
      className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
    >
      {products.slice(0, 8).map((product, index) => (
        <motion.article
          key={product.slug}
          variants={staggerItem}
          className={`group relative overflow-hidden rounded-lg border border-neutral-100 bg-white shadow-card transition duration-300 hover:-translate-y-2 hover:shadow-premium ${
            index === 0 || index === 5 ? "lg:col-span-2" : ""
          }`}
        >
          <Link href={`/products/${product.slug}`} className="block">
            <div className={`relative overflow-hidden bg-gradient-to-br from-white via-brand-50/50 to-neutral-100 ${index === 0 ? "aspect-[16/10]" : "aspect-[4/4.4]"}`}>
              <Image
                src={product.image}
                alt={product.alt}
                fill
                sizes={index === 0 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
                className="object-contain p-5 transition duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent opacity-90" />
              <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-brand-700 shadow-sm">
                {product.shortName}
              </span>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5 text-white">
              <h3 className="text-2xl font-black leading-tight">{product.name}</h3>
              <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/85">{product.description}</p>
              <span className="mt-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-brand-700 shadow-sm transition group-hover:bg-brand-600 group-hover:text-white">
                ดูข้อมูลหมวดนี้
              </span>
            </div>
          </Link>
        </motion.article>
      ))}
    </motion.div>
  );
}
