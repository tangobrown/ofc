"use client";

import { useState } from "react";

export type FaqItem = { q: string; a: React.ReactNode };

/**
 * Accessible FAQ accordion. Gold question + / − toggle, open item's question
 * tinted cream, divider between items. First item open by default.
 */
export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-faq">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-b border-[rgba(192,157,108,0.22)]">
            <h3 className="m-0">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span
                  className={`font-display text-[clamp(19px,1.8vw,24px)] uppercase tracking-[0.02em] transition-colors ${
                    isOpen ? "text-cream" : "text-gold"
                  }`}
                >
                  {item.q}
                </span>
                <span aria-hidden="true" className="shrink-0 text-[22px] leading-none text-gold">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="prose-faq pb-7 text-[16px] leading-[1.8] text-body [&_a]:text-gold [&_a:hover]:text-cream [&_a]:underline [&_li]:mb-2 [&_ul]:my-3 [&_ul]:list-disc [&_ul]:pl-5 [&_strong]:text-text-hi">
                  {item.a}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
