"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";
import RevealText from "./RevealText";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="relative flex items-center overflow-hidden bg-[#F4F7FC] pt-28 pb-[36vh] sm:pt-36 sm:pb-[34vh] lg:min-h-[90vh] lg:py-36 lg:pb-36">
      {/* CPR background image. Mobile: a band anchored to the bottom, with the
          copy sitting on clean background above it. Desktop: the right-hand
          column, faded in from the left. */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-[38vh] lg:inset-y-0 lg:left-auto lg:right-0 lg:h-full lg:w-[62%]">
          <Image
            src="/hero-cpr.jpg"
            alt="Hands performing CPR compressions on a training mannequin"
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 62vw"
            className="object-cover object-[42%_45%] lg:object-[20%_30%]"
          />
        </div>

        {/* Mobile: blend the top edge of the band into the page background so
            there is no hard seam under the copy. */}
        <div className="absolute inset-x-0 bottom-0 h-[38vh] bg-gradient-to-b from-[#F4F7FC] from-2% via-[#F4F7FC]/45 via-28% to-transparent lg:hidden" />

        {/* Desktop: left-to-right fade across the image column. */}
        <div className="absolute inset-0 hidden bg-gradient-to-r from-[#F4F7FC] via-[#F4F7FC] via-42% to-transparent to-65% lg:block" />
      </div>

      {/* Hero Content Layer */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8 w-full">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Pill Badge */}
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100/80 bg-white/90 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-[#1B2559] shadow-sm backdrop-blur-sm mb-5 sm:mb-6">
              <ShieldCheck className="h-4 w-4 text-[#2563EB] shrink-0" />
              <span>Hands-on training by medical professionals</span>
            </div>
          </FadeIn>

          {/* Headline */}
          <RevealText as="h1" className="font-display text-[2.1rem] xs:text-[2.5rem] sm:text-5xl lg:text-6xl xl:text-[4.1rem] leading-[1.08] sm:leading-[1.06] tracking-tight text-[#141414]">
            <span className="block font-light">Skills That Save Lives.</span>
            <span className="block font-extrabold text-[#141414]">Knowledge That Protects.</span>
          </RevealText>

          {/* Subtitle */}
          <FadeIn delay={0.4}>
            <p className="mt-5 sm:mt-7 max-w-lg text-base sm:text-lg leading-relaxed text-[#1B2559]/90 font-medium sm:font-normal">
              Professional First Aid, CPR, AED and Health &amp; Safety Training designed to build
              confident lifesavers in workplaces, institutions and communities.
            </p>
          </FadeIn>

          {/* Action Buttons */}
          <FadeIn delay={0.5}>
            <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2563EB] px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <span>Book a Training</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/courses"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200/90 bg-white/95 px-8 py-3.5 text-base font-bold text-[#1B2559] shadow-sm backdrop-blur-sm transition-all hover:bg-white hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98]"
              >
                Explore Training Programs
              </Link>
            </div>
          </FadeIn>

          {/* Subtext */}
          <FadeIn delay={0.6}>
            <p className="mt-6 sm:mt-12 text-xs sm:text-sm font-semibold text-[#1B2559]/75">
              Trusted by leading organizations across India and beyond
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
