"use client";

import StatCounter from "./StatCounter";
import FadeIn from "./FadeIn";
import { STATS } from "@/data/site";

/** Two-by-two (four-up on desktop) stats grid with divider lines, big green figures and uppercase labels. */
export default function StatsGrid() {
  const dividers = ["", "border-l", "lg:border-l", "border-l"];
  return (
    <section className="border-y border-gray-100 bg-white py-14 sm:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-12 px-5 lg:grid-cols-4 lg:px-8">
        {STATS.map((stat, i) => (
          <FadeIn
            key={stat.label}
            delay={i * 0.08}
            className={`${dividers[i]} border-gray-200 px-5 sm:px-8 lg:px-10 ${i % 2 === 0 ? "pl-0 lg:pl-0" : ""} ${i === 2 ? "lg:pl-10" : ""}`}
          >
            <p className="font-display text-[2.4rem] font-extrabold leading-[1.05] text-primary sm:text-[3.25rem]">
              <StatCounter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-4 text-[0.8rem] font-medium uppercase tracking-[0.15em] text-gray-500 sm:text-[0.95rem]">
              {stat.label}
            </p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
