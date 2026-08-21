"use client";

import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";
import { STEPS } from "@/data/site";

export default function HowItWorks() {
  return (
    <section className="bg-white py-32 border-t border-[rgba(0,0,0,0.08)]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          number="04"
          eyebrow="How It Works"
          title="From First Click to First Responder"
          subtitle="Getting your team trained is simple — four steps from enquiry to certification."
        />
        <ol className="mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.12} as="li" className="border-t border-[rgba(0,0,0,0.08)] pt-8">
              <span className="font-mono text-sm text-accent block">
                STEP {step.number}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-ink">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-navy-600 text-sm">{step.description}</p>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
