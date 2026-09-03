"use client";

import { ClipboardCheck, CalendarCheck, HeartPulse, Award } from "lucide-react";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";
import { STEPS } from "@/data/site";

const STEP_ICONS = [ClipboardCheck, CalendarCheck, HeartPulse, Award];

export default function HowItWorks() {
  return (
    <section className="bg-off-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="How It Works"
          title="From First Click to First Responder"
          subtitle="Getting your team trained is simple — four steps from enquiry to certification."
        />
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => {
            const Icon = STEP_ICONS[i % STEP_ICONS.length];
            return (
              <FadeIn key={step.number} delay={i * 0.1} as="li" className="h-full">
                <div className="card group flex h-full flex-col p-7 hover:border-primary-light">
                  <div className="flex items-center justify-between">
                    <span className="icon-square h-14 w-14 group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="tag-pill">Step {step.number}</span>
                  </div>
                  <h3 className="mt-6 font-display text-[1.15rem] font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-[0.9rem] leading-[1.6] text-gray-600">{step.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
