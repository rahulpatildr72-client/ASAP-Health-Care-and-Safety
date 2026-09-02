"use client";

import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/site";
import FadeIn from "./FadeIn";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5 text-accent" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-3.5 w-3.5 ${i < count ? "fill-current" : "opacity-30"}`} />
      ))}
    </div>
  );
}

/** Three equal bordered cards with quote icon and initial avatar (reference: testimonialCard). */
export default function TestimonialCarousel() {
  return (
    <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
      {TESTIMONIALS.map((t, i) => (
        <FadeIn key={t.name} delay={i * 0.1} className="h-full">
          <figure className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-primary-light hover:shadow-md sm:p-8">
            <span className="icon-square mb-4 h-10 w-10 rounded-lg">
              <Quote className="h-5 w-5" />
            </span>
            <Stars count={t.rating} />
            <blockquote className="mt-3 flex-1 text-[0.95rem] italic leading-[1.7] text-gray-700">
              &ldquo;{t.text}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-4 border-t border-gray-200 pt-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary font-display font-bold text-white">
                {t.name.charAt(0)}
              </span>
              <div>
                <strong className="block text-[0.9rem] text-gray-900">{t.name}</strong>
                <span className="text-[0.8rem] text-gray-500">{t.company}</span>
              </div>
            </figcaption>
          </figure>
        </FadeIn>
      ))}
    </div>
  );
}
