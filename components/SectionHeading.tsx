type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverted?: boolean;
};

export function SectionHeading({ eyebrow, title, description, align = "left", inverted = false }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className={`mt-3 text-[1.75rem] font-black leading-[1.16] tracking-normal sm:text-4xl lg:text-5xl ${inverted ? "text-white" : "text-ink"}`}>{title}</h2>
      {description ? <p className={`mt-4 max-w-2xl text-base leading-8 sm:text-lg sm:leading-9 ${align === "center" ? "mx-auto" : ""} ${inverted ? "text-neutral-300" : "text-neutral-600"}`}>{description}</p> : null}
    </div>
  );
}
