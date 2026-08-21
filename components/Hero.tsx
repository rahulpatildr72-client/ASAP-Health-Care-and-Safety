"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";
import RevealText from "./RevealText";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F4F7FC] pt-28 pb-16 sm:pt-40 lg:py-32 min-h-[85vh] flex items-center">
      {/* Desktop Background Image with Gradient Fade */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[60%] h-full z-0 overflow-hidden hidden lg:block">
        <Image
          src="/hero-cpr.jpg"
          alt="Hands performing CPR compressions on a training mannequin"
          fill
          priority
          sizes="60vw"
          className="object-cover object-left"
        />
        {/* Soft Radial Gradient Overlay blending smoothly from left background into image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F4F7FC] via-[#F4F7FC]/85 to-transparent via-[#F4F7FC]/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8 w-full">
        <div className="max-w-2xl">
          {/* Pill Badge */}
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100/80 bg-white/90 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-[#1B2559] shadow-sm backdrop-blur-sm mb-5 sm:mb-6">
              <ShieldCheck className="h-4 w-4 text-[#2563EB] shrink-0" />
              <span>Hands-on training by medical professionals</span>
            </div>
          </FadeIn>

          {/* Headline */}
          <RevealText as="h1" className="font-display text-[2.4rem] sm:text-6xl xl:text-[4.4rem] leading-[1.08] sm:leading-[1.06] tracking-tight text-[#141414]">
            <span className="block font-light">Train Today.</span>
            <span className="block font-extrabold text-[#141414]">Respond Tomorrow.</span>
          </RevealText>

          {/* Subtitle */}
          <FadeIn delay={0.4}>
            <p className="mt-5 sm:mt-7 max-w-xl text-base sm:text-lg leading-relaxed text-[#1B2559]/85 font-normal">
              Professional First Aid, CPR, AED and Health &amp; Safety Training designed to build
              confident lifesavers in workplaces, institutions and communities.
            </p>
          </FadeIn>

          {/* Action Buttons (Mobile-Responsive Stack) */}
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

          {/* Mobile CPR Image Card */}
          <FadeIn delay={0.6} className="mt-8 lg:hidden">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/80 shadow-lg shadow-blue-950/5">
              <Image
                src="/hero-cpr.jpg"
                alt="Hands performing CPR compressions on a training mannequin"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover object-center"
              />
            </div>
          </FadeIn>

          {/* Subtext */}
          <FadeIn delay={0.7}>
            <p className="mt-8 sm:mt-12 text-xs sm:text-sm font-medium text-[#1B2559]/70">
              Trusted by leading organizations across India and beyond
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
