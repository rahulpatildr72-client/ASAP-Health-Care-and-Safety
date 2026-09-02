"use client";

import StatCounter from "./StatCounter";
import FadeIn from "./FadeIn";
import { STATS } from "@/data/site";

/** Green stats band (reference: statsBar). */
export default function TrustBar() {
  return (
    <section className="bg-primary py-10 sm:py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-8 px-5 text-center lg:grid-cols-4 lg:px-8">
        {STATS.map((stat, i) => (
          <FadeIn key={stat.label} delay={i * 0.08} className="text-white">
            <p className="font-display text-[1.8rem] font-extrabold leading-none sm:text-[2.5rem]">
              <StatCounter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-[0.85rem] text-white/80">{stat.label}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
