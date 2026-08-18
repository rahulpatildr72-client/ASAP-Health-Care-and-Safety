import Link from "next/link";
import { ArrowRight, HeartPulse } from "lucide-react";
import Reveal from "./Reveal";

export default function CTABanner() {
  return (
    <section className="px-5 pb-24 lg:px-8">
      <Reveal className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-peri-100 via-peri-200 to-peri-300 px-8 py-20 text-center shadow-card sm:px-16">
          {/* soft white glow + tiny safety-red pulse line (emergency association) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/50 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-brand-300/30 blur-3xl"
          />
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-1/2 h-24 w-full -translate-y-1/2 text-red-400/20"
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
            fill="none"
          >
            <path d="M0 50h300l30-40 30 80 30-60 30 20h780" stroke="currentColor" strokeWidth="3" />
          </svg>
          <div className="relative">
            <span className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
              <HeartPulse className="h-8 w-8 text-brand-600" aria-hidden="true" />
            </span>
            <h2 className="mx-auto max-w-2xl font-display text-3xl tracking-tight text-navy-900 sm:text-5xl">
              <span className="block font-light">Be Ready When</span>
              <span className="block font-extrabold">Every Second Matters.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-navy-700">
              Equip yourself or your team with practical skills that can make a difference during
              an emergency.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-8 py-4 font-display text-base font-bold text-white shadow-lg shadow-brand-600/30 transition-all hover:-translate-y-0.5 hover:bg-brand-700"
              >
                Book a Training <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/70 px-8 py-4 font-display text-base font-bold text-navy-900 ring-1 ring-white transition-all hover:-translate-y-0.5 hover:bg-white"
              >
                Talk to Our Team
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
