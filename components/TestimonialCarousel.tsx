"use client";

import { TESTIMONIALS } from "@/data/site";
import FadeIn from "./FadeIn";

export default function TestimonialCarousel() {
  const featured = TESTIMONIALS[0];
  const rest = TESTIMONIALS.slice(1);

  return (
    <div className="space-y-16">
      {/* Featured main quote */}
      {featured && (
        <FadeIn className="border-b border-[#3B5BDB] pb-16">
          <blockquote className="font-display text-2xl font-light leading-snug tracking-tight text-[#141414] sm:text-3xl lg:text-4xl">
            &ldquo;{featured.text}&rdquo;
          </blockquote>
          <div className="mt-8 flex items-center justify-between">
            <div>
              <p className="font-display font-bold text-[#141414]">{featured.name}</p>
              <p className="text-sm text-[#1B2559]/70">{featured.company}</p>
            </div>
            <span className="font-mono text-xs font-semibold text-[#3B5BDB]">FEATURED FEEDBACK</span>
          </div>
        </FadeIn>
      )}

      {/* Quiet hairline-separated rows for the rest */}
      <div className="space-y-0">
        {rest.map((t, i) => (
          <FadeIn key={t.name} delay={i * 0.1} className="border-b border-[rgba(0,0,0,0.08)] py-8">
            <blockquote className="text-base text-[#1B2559]/80 leading-relaxed">
              &ldquo;{t.text}&rdquo;
            </blockquote>
            <div className="mt-4 flex items-center justify-between text-sm">
              <p className="font-display font-semibold text-[#141414]">{t.name}</p>
              <p className="text-[#1B2559]/60">{t.company}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
