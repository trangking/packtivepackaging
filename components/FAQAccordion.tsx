"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="overflow-hidden rounded-[1.25rem] border border-neutral-200/80 bg-white shadow-[0_16px_48px_rgba(110,18,15,0.055)]">
      {items.map((item, index) => {
        const open = openIndex === index;
        const answerId = `faq-answer-${index}`;

        return (
          <article key={item.question} className="overflow-hidden border-b border-neutral-200 last:border-b-0">
            <button
              type="button"
              className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition duration-300 hover:bg-brand-50/45 sm:px-6 sm:py-6"
              aria-expanded={open}
              aria-controls={answerId}
              onClick={() => setOpenIndex(open ? -1 : index)}
            >
              <span className="text-base font-black leading-7 text-ink sm:text-lg">{item.question}</span>
              <span
                className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border text-xl font-semibold transition duration-200 ${
                  open ? "border-brand-600 bg-brand-600 text-white shadow-lg shadow-brand-600/15" : "border-neutral-200 bg-white text-brand-700"
                }`}
                aria-hidden="true"
              >
                {open ? "-" : "+"}
              </span>
            </button>
            <motion.div
              id={answerId}
              initial={false}
              animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
              transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
              aria-hidden={!open}
            >
              <p className="max-w-3xl px-5 pb-5 text-sm leading-7 text-neutral-600 sm:px-6 sm:pb-6 sm:text-base sm:leading-8">{item.answer}</p>
            </motion.div>
          </article>
        );
      })}
    </div>
  );
}
