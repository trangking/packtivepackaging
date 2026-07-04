import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary:
    "bg-brand-600 text-white shadow-[0_14px_34px_rgba(216,37,31,0.22)] hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-[0_18px_42px_rgba(216,37,31,0.24)] active:translate-y-0",
  secondary:
    "border border-brand-100 bg-white/92 text-brand-700 shadow-sm hover:-translate-y-0.5 hover:border-brand-200 hover:bg-brand-50 hover:shadow-[0_14px_34px_rgba(110,18,15,0.08)] active:translate-y-0",
  ghost: "text-ink hover:-translate-y-0.5 hover:bg-neutral-100 active:translate-y-0"
};

export function ButtonLink({ href, children, variant = "primary", className = "" }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`focus-ring inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
