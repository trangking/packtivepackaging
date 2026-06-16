import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { ProductCard } from "@/components/ProductCard";
import { ProductSwiper } from "@/components/ProductSwiper";
import { SectionHeading } from "@/components/SectionHeading";
import { products } from "@/data/site";
import { createMetadata } from "@/lib/seo";

type ProductDetailPageProps = {
  params: { slug: string };
};

export function generateMetadata({ params }: ProductDetailPageProps): Metadata {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) {
    return {};
  }

  return createMetadata({
    title: `${product.name} | Packtive Packaging`,
    description: product.description,
    path: `/products/${product.slug}`,
    keywords: [product.name, `รับผลิต${product.name}`, "บรรจุภัณฑ์", "แพคเกจจิ้ง"]
  });
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) {
    notFound();
  }

  const related = products.filter((item) => item.slug !== product.slug).slice(0, 3);

  return (
    <main>
      <section className="bg-[linear-gradient(180deg,#fff,#fff5f5)] pt-10 sm:pt-14 lg:pt-16">
        <div className="container-px">
          <nav className="flex flex-wrap items-center gap-2 text-sm font-semibold leading-6 text-neutral-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-brand-700">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-brand-700">
              Products
            </Link>
            <span>/</span>
            <span className="text-brand-700">{product.name}</span>
          </nav>

          <div className="grid gap-9 py-12 sm:py-14 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-20">
            <div className="max-w-2xl">
              <p className="eyebrow">Product Detail</p>
              <h1 className="mt-4 text-[clamp(2.4rem,5vw,4.6rem)] font-black leading-[1.12] text-ink">รับผลิต{product.name} สำหรับแบรนด์สินค้า</h1>
              <p className="mt-5 max-w-xl text-base leading-8 text-neutral-600 sm:mt-6 sm:text-lg sm:leading-9">{product.description}</p>
              <ul className="mt-7 grid gap-3">
                {product.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm font-semibold leading-7 text-neutral-700">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-600" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact">ขอใบเสนอราคา</ButtonLink>
                <ButtonLink href="/how-to-order" variant="secondary" className="w-full justify-center sm:w-auto">
                  ดูขั้นตอนการผลิต
                </ButtonLink>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] border border-brand-100/80 bg-white shadow-xl shadow-brand-900/10 sm:rounded-[1.5rem]">
              <Image
                src={product.image}
                alt={product.alt}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain p-6"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-px">
          <SectionHeading
            eyebrow="Category gallery"
            title={`ตัวอย่างสินค้าในหมวด${product.name}`}
            description="เลื่อนดูตัวอย่างสินค้าในหมวดนี้เพื่อเปรียบเทียบรูปทรง วัสดุ และแนวทางการนำเสนอ ก่อนเลือกสเปกที่เหมาะกับแบรนด์ของคุณ"
          />
          <div className="mt-10">
            <ProductSwiper items={product.items} detailHref={`/products/${product.slug}`} />
          </div>
        </div>
      </section>

      <section className="section-y bg-neutral-50">
        <div className="container-px">
          <SectionHeading eyebrow="Related categories" title="หมวดบรรจุภัณฑ์อื่นที่เกี่ยวข้อง" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ProductCard key={item.slug} product={item} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
