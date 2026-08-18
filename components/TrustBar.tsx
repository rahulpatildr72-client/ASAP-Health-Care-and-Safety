import Reveal from "./Reveal";
import StatCounter from "./StatCounter";
import { STATS } from "@/data/site";

/**
 * Statistics strip below the hero.
 * ⚠ CLIENT TO CONFIRM — figures in data/site.ts are taken from the existing
 * business website and must be verified before launch.
 */
export default function TrustBar() {
  return (
    <section className="border-b border-navy-300/20 bg-white py-14">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="text-center">
              <p className="font-display text-4xl font-extrabold tracking-tight text-brand-600 sm:text-5xl">
                <StatCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-navy-500">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3}>
          <p className="mt-12 text-center font-display text-lg font-medium italic text-navy-600">
            Trusted by organizations that put people first.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
