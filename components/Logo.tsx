import Link from "next/link";

type LogoVariant = "a" | "b" | "c";

type LogoProps = {
  inverted?: boolean;
  variant?: LogoVariant;
  className?: string;
};

function PacktiveIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="48"
      height="48"
      viewBox="0 0 288 288"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Packtive icon"
    >
      <rect width="288" height="288" fill="currentColor" />
      <path
        d="M144 47 243 104v113l-99 58-99-58V104l99-57Z"
        stroke="white"
        strokeWidth="17"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M70 147c12-36 49-34 74-3 25-31 62-33 74-3-13 34-49 36-74 3-25 33-62 31-74 3Z"
        stroke="white"
        strokeWidth="20"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PacktiveMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="64"
      height="64"
      viewBox="0 0 288 288"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M144 47 243 104v113l-99 58-99-58V104l99-57Z"
        stroke="currentColor"
        strokeWidth="17"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M70 147c12-36 49-34 74-3 25-31 62-33 74-3-13 34-49 36-74 3-25 33-62 31-74 3Z"
        stroke="currentColor"
        strokeWidth="20"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({ inverted = false, variant = "b", className = "" }: LogoProps) {
  const textColor = inverted ? "text-white" : "text-ink dark:text-white";
  const subTextColor = inverted ? "text-neutral-400" : "text-neutral-500 dark:text-neutral-300";

  return (
    <Link
      href="/"
      aria-label="Packtive Packaging กลับหน้าแรก"
      className={`focus-ring group inline-flex items-center gap-3 rounded-xl ${className}`}
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-600 text-brand-600 shadow-lg shadow-brand-600/25 transition group-hover:shadow-brand-600/35">
        <PacktiveIcon className="h-11 w-11" />
      </span>

      {variant === "a" ? (
        <span className={`hidden whitespace-nowrap text-[15px] font-bold tracking-normal sm:block ${textColor}`}>
          Packtive <span className="font-semibold">Packaging</span>
        </span>
      ) : null}

      {variant === "b" ? (
        <span className="hidden min-w-0 leading-none sm:block">
          <span className={`block text-[15px] font-bold tracking-normal ${textColor}`}>Packtive</span>
          <span className={`mt-1 block text-[10px] font-bold uppercase tracking-[0.22em] ${subTextColor}`}>Packaging</span>
        </span>
      ) : null}
    </Link>
  );
}

export { PacktiveIcon, PacktiveMark };
