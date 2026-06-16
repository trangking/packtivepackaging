import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/site";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-[1.1rem] border border-neutral-200/70 bg-white shadow-[0_14px_40px_rgba(103,16,18,0.055)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-brand-100 hover:shadow-[0_22px_62px_rgba(103,16,18,0.10)] sm:rounded-[1.25rem]">
      <Link href={`/products/${product.slug}`} aria-label={`ดูข้อมูลบรรจุภัณฑ์ ${product.name}`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-[radial-gradient(circle_at_50%_38%,#ffffff_0%,#fff7f7_58%,#f3eeee_100%)] p-4">
          <div className="absolute inset-x-8 bottom-5 h-10 rounded-full bg-brand-900/5 blur-xl transition duration-500 group-hover:bg-brand-900/8" />
          <Image
            src={product.image}
            alt={product.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-contain p-4 transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
          />
          <span className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-xs font-bold text-brand-700 shadow-sm ring-1 ring-brand-100/70 backdrop-blur">
            {product.shortName}
          </span>
        </div>
        <div className="p-5 sm:p-6">
          <h3 className="text-lg font-black leading-snug text-ink sm:text-xl">{product.name}</h3>
          <p className="mt-3 line-clamp-3 text-sm leading-7 text-neutral-600">{product.description}</p>
          <span className="mt-5 inline-flex text-sm font-bold text-brand-700 transition duration-300 group-hover:translate-x-1">ดูข้อมูลหมวดนี้</span>
        </div>
      </Link>
    </article>
  );
}
