"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ButtonLink } from "./ButtonLink";
import { Logo } from "./Logo";

const navItems = [
  { href: "/", label: "หน้าแรก" },
  { href: "/about", label: "เกี่ยวกับเรา" },
  { href: "/products", label: "สินค้า" },
  { href: "/portfolio", label: "ผลงาน" },
  { href: "/how-to-order", label: "วิธีสั่งผลิต" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "ติดต่อเรา" }
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const onHero = pathname === "/" && !scrolled;

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 40);

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        onHero
          ? "border-white/70 bg-white/64 text-ink shadow-none"
          : "border-brand-100/50 bg-white/94 text-ink shadow-[0_10px_34px_rgba(110,18,15,0.06)]"
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between sm:h-[68px]" aria-label="Main navigation">
        <div className="hidden sm:block">
          <Logo variant="a" />
        </div>
        <div className="sm:hidden">
          <Logo variant="c" />
        </div>
        <div className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            const className = onHero
              ? active
                ? "bg-brand-600 text-white shadow-sm shadow-brand-600/20"
                : "text-neutral-700 hover:bg-white/70 hover:text-brand-700"
              : active
                ? "bg-brand-50 text-brand-700 shadow-sm ring-1 ring-brand-100"
                : "text-neutral-700 hover:bg-white hover:text-brand-700";

            return (
              <Link key={item.href} href={item.href} className={`focus-ring rounded-full px-3.5 py-2 text-sm font-semibold transition-all duration-300 ${className}`}>
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="hidden items-center gap-3 xl:flex">
          <ButtonLink
            href="/products"
            variant="secondary"
            className={onHero ? "border-white/70 bg-white/84 text-brand-700 shadow-sm hover:bg-brand-50" : ""}
          >
            ดูหมวดสินค้า
          </ButtonLink>
          <ButtonLink href="/contact" className={onHero ? "shadow-xl shadow-black/15" : ""}>
            ขอใบเสนอราคา
          </ButtonLink>
        </div>
        <button
          type="button"
          className={`focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border transition xl:hidden ${
            onHero ? "border-white/70 bg-white/78 text-ink" : "border-neutral-200 bg-white text-ink"
          }`}
          aria-label="เปิดเมนู"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="grid gap-1.5">
            <span className={`block h-0.5 w-5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>
      <AnimatePresence>
        {open ? (
        <motion.div
          initial={{ opacity: 0, y: -8, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="border-t border-brand-100/70 bg-white/98 shadow-xl shadow-brand-900/10 backdrop-blur-xl xl:hidden"
        >
          <div className="container-px grid gap-1.5 py-4">
            {navItems.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`focus-ring rounded-2xl px-4 py-3 text-base font-semibold transition-all duration-300 ${
                    active ? "bg-brand-50 text-brand-700" : "text-neutral-700 hover:bg-brand-50 hover:text-brand-700"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <ButtonLink href="/contact" className="mt-3 w-full justify-center">
              ขอใบเสนอราคา
            </ButtonLink>
          </div>
        </motion.div>
      ) : null}
      </AnimatePresence>
    </header>
  );
}
