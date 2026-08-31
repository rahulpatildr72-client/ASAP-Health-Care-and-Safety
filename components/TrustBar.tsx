"use client";

import StatCounter from "./StatCounter";
import FadeIn from "./FadeIn";
import { STATS } from "@/data/site";

export default function TrustBar() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:gap-12 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.08} className="text-left border-l border-[rgba(0,0,0,0.08)] pl-4 sm:pl-6 first:border-l-0 first:pl-0 [&:nth-child(3)]:border-l-0 [&:nth-child(3)]:pl-0 sm:[&:nth-child(3)]:border-l sm:[&:nth-child(3)]:pl-6">
              <p className="font-display text-3xl font-extrabold tracking-tight text-[#3B5BDB] sm:text-5xl">
                <StatCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#1B2559]/70">
                {stat.label}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
