"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";
import RevealText from "./RevealText";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="bg-hero-gradient relative flex min-h-[560px] items-center overflow-hidden py-20 md:h-[85vh] md:max-h-[800px] md:min-h-[550px] md:py-0">
      {/* Photo with slow zoom */}
      <div className="animate-hero-zoom absolute inset-0" aria-hidden="true">
        <Image
          src="/hero-cpr.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_35%]"
        />
      </div>
      {/* Green overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: "linear-gradient(90deg, rgba(3,58,39,0.85) 0%, rgba(10,104,71,0.6) 50%, rgba(10,104,71,0.3) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-[2] mx-auto w-full max-w-7xl px-5 text-white lg:px-8">
        <FadeIn delay={0.1}>
          <p className="mb-4 flex items-center gap-3 text-[0.85rem] font-medium uppercase tracking-[0.15em] text-white/85 sm:text-[0.95rem]">
            <span className="h-0.5 w-10 shrink-0 bg-accent" aria-hidden="true" />
            <ShieldCheck className="h-4 w-4 shrink-0 text-accent" />
            Hands-on training by medical professionals
          </p>
        </FadeIn>

        <RevealText
          as="h1"
          className="max-w-[760px] font-display text-[2rem] font-extrabold leading-[1.1] text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.2)] sm:text-[2.8rem] lg:text-[3.5rem]"
        >
          <span className="block">Skills That Save Life.</span>
          <span className="block">Knowledge That Protects.</span>
        </RevealText>

        <FadeIn delay={0.4}>
          <p className="mt-6 max-w-[550px] text-[1rem] leading-[1.6] text-white/90 sm:text-[1.15rem]">
            Professional First Aid, CPR, AED and Health &amp; Safety Training designed to build
            confident lifesavers in workplaces, institutions and communities.
          </p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link href="/contact" className="btn btn-accent btn-lg">
              Book a Training
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/courses" className="btn btn-white btn-lg">
              Explore Training Programs
            </Link>
          </div>
        </FadeIn>

      </div>

    </section>
  );
}
