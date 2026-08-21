"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import RevealText from "./RevealText";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F4F7FC] pt-32 pb-20 sm:pt-40 lg:py-32 min-h-[85vh] flex items-center">
      {/* CPR Image on Right side with smooth gradient blend */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[60%] h-full z-0 overflow-hidden">
        <Image
          src="/hero-cpr.jpg"
          alt="Hands performing CPR compressions on a training mannequin"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover object-center lg:object-left"
        />
        {/* Soft Radial Gradient Overlay blending smoothly from left background into image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F4F7FC] via-[#F4F7FC]/85 to-transparent lg:via-[#F4F7FC]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F4F7FC] via-transparent to-[#F4F7FC]/50 lg:hidden" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8 w-full">
        <div className="max-w-2xl">
          {/* Pill Badge */}
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/90 px-4 py-2 text-xs sm:text-sm font-semibold text-[#1B2559] shadow-sm backdrop-blur-sm mb-6">
              <ShieldCheck className="h-4 w-4 text-[#2563EB]" />
              <span>Hands-on training by medical professionals</span>
            </div>
          </FadeIn>

          {/* Headline */}
          <RevealText as="h1" className="font-display text-[2.75rem] leading-[1.06] tracking-tight text-[#141414] sm:text-6xl xl:text-[4.4rem]">
            <span className="block font-light">Train Today.</span>
            <span className="block font-extrabold text-[#141414]">Respond Tomorrow.</span>
          </RevealText>

          {/* Subtitle */}
          <FadeIn delay={0.4}>
            <p className="mt-7 max-w-xl text-base sm:text-lg leading-relaxed text-[#1B2559]/85 font-normal">
              Professional First Aid, CPR, AED and Health &amp; Safety Training designed to build
              confident lifesavers in workplaces, institutions and communities.
            </p>
          </FadeIn>

          {/* Action Buttons */}
          <FadeIn delay={0.5}>
            <div className="mt-9 flex flex-wrap items-center gap-4 sm:gap-5">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2563EB] px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-xl hover:-translate-y-0.5"
              >
                Book a Training
                <span aria-hidden="true" className="text-lg">→</span>
              </Link>

              <Link
                href="/courses"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200/80 bg-white/90 px-8 py-3.5 text-base font-bold text-[#1B2559] shadow-sm backdrop-blur-sm transition-all hover:bg-white hover:shadow-md hover:-translate-y-0.5"
              >
                Explore Training Programs
              </Link>
            </div>
          </FadeIn>

          {/* Subtext */}
          <FadeIn delay={0.6}>
            <p className="mt-12 text-xs sm:text-sm font-medium text-[#1B2559]/70">
              Trusted by leading organizations across India and beyond
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
