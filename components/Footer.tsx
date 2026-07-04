import Image from "next/image";
import Link from "next/link";
import { contact, products } from "@/data/site";
import { Logo } from "./Logo";

const footerLinks = [
  { href: "/about", label: "เกี่ยวกับเรา" },
  { href: "/portfolio", label: "ผลงาน" },
  { href: "/how-to-order", label: "วิธีสั่งผลิต" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "ติดต่อเรา" }
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-brand-100/70 bg-[#fff8f6] text-ink">
      <div className="container-px relative grid gap-9 py-12 sm:py-14 md:grid-cols-[1.4fr_1fr_1fr] md:gap-10">
        <div>
          <div className="flex items-center gap-4">
            <Logo />
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-neutral-700">
            Packtive Packaging ให้บริการออกแบบและผลิตบรรจุภัณฑ์สำหรับแบรนด์สินค้า โดยเน้นสเปกที่เหมาะสม ภาพลักษณ์ที่น่าเชื่อถือ และกระบวนการทำงานที่ตรวจสอบได้
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link className="rounded-full bg-brand-600 px-4 py-2 font-semibold text-white shadow-lg shadow-brand-600/15 transition hover:-translate-y-0.5 hover:bg-brand-700" href={contact.lineUrl}>
              Line
            </Link>
            <Link className="rounded-full border border-brand-100 bg-white px-4 py-2 font-semibold text-brand-700 transition hover:-translate-y-0.5 hover:bg-brand-50" href={contact.facebookUrl}>
              Facebook
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-brand-700">Products</h2>
          <ul className="mt-4 grid gap-3 text-sm text-neutral-700">
            {products.slice(0, 6).map((product) => (
              <li key={product.slug}>
                <Link className="transition hover:text-brand-700" href={`/products/${product.slug}`}>
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-brand-700">Contact</h2>
          <address className="mt-4 grid gap-3 text-sm not-italic leading-7 text-neutral-700">
            <span>{contact.address}</span>
            <Link className="transition hover:text-brand-700" href={`tel:${contact.phone}`}>
              โทร {contact.phone}
            </Link>
            <Link className="transition hover:text-brand-700" href={`mailto:${contact.email}`}>
              {contact.email}
            </Link>
          </address>
          <div className="mt-6 grid grid-cols-2 gap-2 text-sm text-neutral-700">
            {footerLinks.map((item) => (
              <Link key={item.href} className="transition hover:text-brand-700" href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="relative border-t border-brand-100/70 py-5">
        <div className="container-px flex flex-col gap-2 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Packtive Packaging. All rights reserved.</p>
          <p>ออกแบบและผลิตบรรจุภัณฑ์ พร้อมให้คำแนะนำด้านสเปกและงานผลิต</p>
        </div>
      </div>
    </footer>
  );
}
