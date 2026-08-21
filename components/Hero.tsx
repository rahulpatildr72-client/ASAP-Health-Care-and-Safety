"use client";

import Image from "next/image";
import Link from "next/link";
import RevealText from "./RevealText";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#E4E7FB] to-[#F0F3FC] pb-24 pt-36 sm:pt-44 lg:pb-36">
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div>
          <FadeIn delay={0.1}>
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-[#1B2559]/70">
              Hands-on training by medical professionals
            </p>
          </FadeIn>

          {/* Mixed-weight display headline — EXACT typography locked */}
          <RevealText as="h1" className="font-display text-[2.6rem] leading-[1.08] tracking-tight text-[#141414] sm:text-6xl xl:text-[4.2rem]">
            <span className="block font-light">Train Today.</span>
            <span className="block font-extrabold">Respond Tomorrow.</span>
          </RevealText>

          <FadeIn delay={0.4}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#1B2559]/80">
              Professional First Aid, CPR, AED and Health &amp; Safety Training designed to build
              confident lifesavers in workplaces, institutions and communities.
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="mt-10 flex flex-wrap items-center gap-8">
              <Link
                href="/contact"
                className="group link-underline inline-flex items-center gap-1.5 text-[15px] font-medium text-[#141414] hover:text-[#3B5BDB]"
              >
                Book a Training
                <span
                  aria-hidden="true"
                  className="inline-block text-[#3B5BDB] transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
              <Link
                href="/courses"
                className="group link-underline inline-flex items-center gap-1.5 text-[15px] font-medium text-[#1B2559]/70 hover:text-[#3B5BDB]"
              >
                Explore Training Programs
                <span
                  aria-hidden="true"
                  className="inline-block text-[#3B5BDB] transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="mt-12 text-sm font-medium text-[#1B2559]/60">
              Trusted by leading organizations across India and beyond
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.3} className="relative mx-auto w-full max-w-sm lg:max-w-[400px]">
          <Image
            src="/hero-hand.webp"
            alt="Wooden mannequin hand holding a card with a heart — training that puts lifesaving in your hands"
            width={700}
            height={1232}
            priority
            sizes="(max-width: 1024px) 90vw, 400px"
            className="h-auto w-full filter contrast-[1.02]"
          />
        </FadeIn>
      </div>

      {/* Scroll indicator bottom-left */}
      <div className="absolute bottom-8 left-5 hidden sm:block lg:left-8">
        <FadeIn delay={0.8}>
          <span className="text-xs uppercase tracking-widest text-[#1B2559]/50">
            Scroll ↓
          </span>
        </FadeIn>
      </div>
    </section>
  );
}
