"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, ArrowRight, Award } from "lucide-react";
import RevealText from "./RevealText";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#EBF1FF]/60 via-[#F4F7FC] to-[#F4F7FC] pt-32 pb-20 sm:pt-40 lg:py-28 min-h-[90vh] flex items-center">
      {/* Decorative ambient background accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-400/10 blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          
          {/* Left Text Column (Col 1-7) */}
          <div className="lg:col-span-7">
            {/* Pill Badge */}
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/90 px-4 py-2 text-xs sm:text-sm font-semibold text-[#1B2559] shadow-sm backdrop-blur-sm mb-6">
                <ShieldCheck className="h-4 w-4 text-[#2563EB] shrink-0" />
                <span>Hands-on training by medical professionals</span>
              </div>
            </FadeIn>

            {/* Headline */}
            <RevealText as="h1" className="font-display text-[2.5rem] sm:text-6xl xl:text-[4.2rem] leading-[1.08] sm:leading-[1.06] tracking-tight text-[#141414]">
              <span className="block font-light">Train Today.</span>
              <span className="block font-extrabold text-[#141414]">Respond Tomorrow.</span>
            </RevealText>

            {/* Subtitle */}
            <FadeIn delay={0.4}>
              <p className="mt-6 sm:mt-7 max-w-xl text-base sm:text-lg leading-relaxed text-[#1B2559]/85 font-normal">
                Professional First Aid, CPR, AED and Health &amp; Safety Training designed to build
                confident lifesavers in workplaces, institutions and communities.
              </p>
            </FadeIn>

            {/* Action Buttons */}
            <FadeIn delay={0.5}>
              <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2563EB] px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  <span>Book a Training</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/courses"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200/90 bg-white/90 px-8 py-3.5 text-base font-bold text-[#1B2559] shadow-sm backdrop-blur-sm transition-all hover:bg-white hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  Explore Training Programs
                </Link>
              </div>
            </FadeIn>

            {/* Subtext */}
            <FadeIn delay={0.6}>
              <p className="mt-8 sm:mt-12 text-xs sm:text-sm font-medium text-[#1B2559]/70">
                Trusted by leading organizations across India and beyond
              </p>
            </FadeIn>
          </div>

          {/* Right Framed Hero Image Card Column (Col 8-12) */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.3} className="relative w-full">
              {/* Soft ambient background glow */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-blue-500/20 via-indigo-500/15 to-sky-400/20 blur-2xl -z-10" />

              {/* Framed Image Container */}
              <div className="relative aspect-[16/11] sm:aspect-[4/3] lg:aspect-[4/3.2] w-full overflow-hidden rounded-3xl border-4 border-white bg-slate-100 shadow-2xl shadow-blue-950/15 transition-transform duration-500 hover:scale-[1.01]">
                <Image
                  src="/hero-cpr.jpg"
                  alt="Hands performing CPR compressions on a training mannequin"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover object-center"
                />

                {/* Floating Badge Overlay on Image Card */}
                <div className="absolute bottom-4 left-4 right-4 sm:left-5 sm:bottom-5 sm:right-auto inline-flex items-center gap-2.5 rounded-2xl border border-white/80 bg-white/95 px-4 py-2.5 shadow-md backdrop-blur-md">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB] shrink-0">
                    <Award className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1B2559]">100% Practical Training</p>
                    <p className="text-[11px] text-[#1B2559]/70">Certified CPR &amp; First Aid</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
