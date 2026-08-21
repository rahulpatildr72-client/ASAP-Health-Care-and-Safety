"use client";

import { useState } from "react";
import { FAQS } from "@/data/site";
import FadeIn from "./FadeIn";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="border-t border-[rgba(0,0,0,0.08)]">
      {FAQS.map((faq, i) => {
        const open = openIndex === i;
        return (
          <FadeIn key={faq.question} delay={i * 0.05} className="border-b border-[rgba(0,0,0,0.08)]">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : i)}
              aria-expanded={open}
              aria-controls={`faq-panel-${i}`}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className="font-display text-lg font-bold text-[#141414]">
                {faq.question}
              </span>
              <span className="font-mono text-base font-bold text-[#3B5BDB] shrink-0">
                {open ? "—" : "+"}
              </span>
            </button>
            <div
              id={`faq-panel-${i}`}
              className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-6 leading-relaxed text-[#1B2559]/75 text-base max-w-2xl">{faq.answer}</p>
              </div>
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
}
