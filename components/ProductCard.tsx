import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/site";

type ProductCardProps = {
  product: Product;
  linkMode?: "jump" | "navigate";
};

export function ProductCard({ product, linkMode = "jump" }: ProductCardProps) {
  const href = linkMode === "jump" ? `#${product.slug}` : `/products/${product.slug}`;
  const ariaLabel = linkMode === "jump" ? `ไปยังตัวอย่าง ${product.name}` : `ดูข้อมูล ${product.name}`;

  return (
    <article className="group overflow-hidden rounded-[1.1rem] border border-neutral-200/70 bg-white shadow-crimson transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-brand-100 hover:shadow-crimson-lg sm:rounded-[1.25rem]">
      <Link href={href} aria-label={ariaLabel}>
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
          {linkMode === "jump" ? (
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 transition duration-300 group-hover:translate-y-0.5">
              ดูตัวอย่างด้านล่าง
              <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5">
                <path d="M8 2v10m0 0L4 8m4 4l4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          ) : (
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 transition duration-300 group-hover:translate-x-1">
              ดูข้อมูลหมวดนี้
              <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5">
                <path d="M2 8h10m0 0L8 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          )}
        </div>
      </Link>
    </article>
  );
}
