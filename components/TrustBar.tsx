"use client";

import StatCounter from "./StatCounter";
import FadeIn from "./FadeIn";
import { STATS } from "@/data/site";

export default function TrustBar() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-2 gap-12 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.08} className="text-left border-l border-[rgba(0,0,0,0.08)] pl-6 first:border-l-0 first:pl-0">
              <p className="font-display text-4xl font-extrabold tracking-tight text-[#3B5BDB] sm:text-5xl">
                <StatCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-[#1B2559]/70">
                {stat.label}
              </p>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.4}>
          <p className="mt-16 text-left text-sm text-[#1B2559]/60">
            Trusted by organizations that put people first across healthcare, hospitality, education and industry.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
