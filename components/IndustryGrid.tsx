"use client";

import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";
import { INDUSTRIES } from "@/data/site";

export default function IndustryGrid() {
  return (
    <section className="bg-white py-32 border-t border-[rgba(0,0,0,0.08)]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          number="05"
          eyebrow="Industries We Serve"
          title="Safety Training for Every Environment"
          subtitle="Wherever people work, learn or gather, emergencies can happen. We train them all."
        />
        <div className="mt-20 grid grid-cols-1 gap-px bg-[rgba(0,0,0,0.08)] sm:grid-cols-2 lg:grid-cols-4 border border-[rgba(0,0,0,0.08)]">
          {INDUSTRIES.map(({ title, description }, i) => (
            <FadeIn key={title} delay={(i % 4) * 0.06} className="bg-white p-8">
              <span className="font-mono text-xs text-accent block mb-2">
                0{i + 1}
              </span>
              <h3 className="font-display font-bold text-ink text-lg">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-500">{description}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
