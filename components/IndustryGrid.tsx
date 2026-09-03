"use client";

import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";
import AppIcon from "./icons";
import { INDUSTRIES } from "@/data/site";

/** Bordered centered cards with icon squares (reference: inner-pages card grid). */
export default function IndustryGrid() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          number="05"
          eyebrow="Industries We Serve"
          title="Safety Training for Every Environment"
          subtitle="Wherever people work, learn or gather, emergencies can happen. We train them all."
        />
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {INDUSTRIES.map(({ icon, title, description }, i) => (
            <FadeIn key={title} delay={(i % 4) * 0.06} className="h-full">
              <div className="card group h-full p-6 text-center hover:border-primary-light sm:p-8">
                <span className="icon-square mx-auto mb-4 h-[60px] w-[60px] group-hover:bg-primary group-hover:text-white">
                  <AppIcon name={icon} className="h-6 w-6" />
                </span>
                <h3 className="font-display text-[1rem] font-semibold text-gray-900 sm:text-[1.05rem]">{title}</h3>
                <p className="mt-1.5 text-[0.85rem] leading-[1.6] text-gray-600">{description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
