"use client";

import Link from "next/link";
import RevealText from "./RevealText";
import FadeIn from "./FadeIn";

export default function CTABanner() {
  return (
    <section className="bg-[#3B5BDB] text-white py-36">
      <div className="mx-auto max-w-4xl px-5 lg:px-8 text-center">
        <RevealText as="h2" className="font-display text-4xl tracking-tight text-white sm:text-6xl">
          <span className="block font-light">Be Ready When</span>
          <span className="block font-extrabold">Every Second Matters.</span>
        </RevealText>
        <FadeIn delay={0.3}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/90">
            Equip yourself or your team with practical skills that can make a difference during an emergency.
          </p>
        </FadeIn>
        <FadeIn delay={0.4}>
          <div className="mt-10 flex items-center justify-center">
            <Link
              href="/contact"
              className="group link-underline inline-flex items-center gap-1.5 text-lg font-semibold text-white hover:text-white"
            >
              Book a Training
              <span
                aria-hidden="true"
                className="inline-block text-white transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
