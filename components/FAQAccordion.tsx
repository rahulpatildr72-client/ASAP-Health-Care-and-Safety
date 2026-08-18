"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/data/site";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-4">
      {FAQS.map((faq, i) => {
        const open = openIndex === i;
        return (
          <div
            key={faq.question}
            className="overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-navy-300/15"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : i)}
              aria-expanded={open}
              aria-controls={`faq-panel-${i}`}
              className="flex w-full items-center justify-between gap-4 px-7 py-5 text-left focus-visible:outline-2 focus-visible:outline-brand-600"
            >
              <span className="font-display text-lg font-semibold text-navy-900">
                {faq.question}
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-brand-600 transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>
            <div
              id={`faq-panel-${i}`}
              className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-7 pb-6 leading-relaxed text-navy-600">{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
