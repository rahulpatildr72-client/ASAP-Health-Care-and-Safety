"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/data/site";
import FadeIn from "./FadeIn";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {FAQS.map((faq, i) => {
        const open = openIndex === i;
        return (
          <FadeIn key={faq.question} delay={i * 0.05}>
            <div
              className={`rounded-xl border bg-white transition-all duration-300 ${
                open ? "border-primary-light shadow-md" : "border-gray-200 shadow-sm hover:border-primary-light"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(open ? -1 : i)}
                aria-expanded={open}
                aria-controls={`faq-panel-${i}`}
                className="flex w-full items-center justify-between gap-6 px-5 py-4 text-left sm:px-6 sm:py-5"
              >
                <span className="font-display text-[1rem] font-semibold text-gray-900 sm:text-[1.05rem]">
                  {faq.question}
                </span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                    open ? "bg-primary text-white" : "bg-primary-light text-primary"
                  }`}
                >
                  {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
              <div
                id={`faq-panel-${i}`}
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                  open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="max-w-2xl px-5 pb-5 text-[0.95rem] leading-[1.7] text-gray-600 sm:px-6 sm:pb-6">{faq.answer}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
}
