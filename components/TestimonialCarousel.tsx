"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/site";

/* ⚠ REPLACE the placeholder entries in data/site.ts with real client-supplied testimonials. */
export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  const go = (dir: number) =>
    setIndex((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length);

  const t = TESTIMONIALS[index];

  return (
    <div className="relative">
      <div
        className="overflow-hidden rounded-3xl bg-white p-10 shadow-card ring-1 ring-navy-300/15 sm:p-12"
        aria-live="polite"
      >
        <Quote className="h-10 w-10 text-brand-200" aria-hidden="true" />
        <figure key={index} className="animate-[fadeIn_0.4s_ease]">
          <blockquote className="mt-5 text-lg leading-relaxed text-navy-700 sm:text-xl">
            &ldquo;{t.text}&rdquo;
          </blockquote>
          <figcaption className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 font-display font-bold text-brand-700">
                {t.name.charAt(0)}
              </span>
              <div>
                <p className="font-display font-bold text-navy-900">{t.name}</p>
                <p className="text-sm text-navy-500">{t.company}</p>
              </div>
            </div>
            <div className="flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-brand-500 text-brand-500" aria-hidden="true" />
              ))}
            </div>
          </figcaption>
        </figure>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-navy-700 shadow-card ring-1 ring-navy-300/20 transition-all hover:text-brand-600 hover:ring-brand-300 focus-visible:outline-2 focus-visible:outline-brand-600"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-brand-600" : "w-2.5 bg-navy-300 hover:bg-brand-300"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next testimonial"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-navy-700 shadow-card ring-1 ring-navy-300/20 transition-all hover:text-brand-600 hover:ring-brand-300 focus-visible:outline-2 focus-visible:outline-brand-600"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
