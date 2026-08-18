import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="bg-peri-wash relative overflow-hidden pb-20 pt-36 sm:pt-40 lg:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-10%] h-[480px] w-[480px] rounded-full bg-white/40 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-10 lg:px-8">
        <Reveal>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-sm font-semibold text-navy-800 shadow-sm">
            <ShieldCheck className="h-4 w-4 text-brand-600" aria-hidden="true" />
            Hands-on training by medical professionals
          </span>
          {/* Mixed-weight display headline — light first line, extra-bold second */}
          <h1 className="font-display text-[2.6rem] leading-[1.08] tracking-tight text-ink sm:text-6xl xl:text-[4.2rem]">
            <span className="block font-light">Train Today.</span>
            <span className="block font-extrabold">Respond Tomorrow.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-navy-700">
            Professional First Aid, CPR, AED and Health &amp; Safety Training designed to build
            confident lifesavers in workplaces, institutions and communities.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-8 py-4 font-display text-base font-bold text-white shadow-lg shadow-brand-600/30 transition-all hover:-translate-y-0.5 hover:bg-brand-700"
            >
              Book a Training <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/80 px-8 py-4 font-display text-base font-bold text-navy-900 ring-1 ring-white transition-all hover:-translate-y-0.5 hover:bg-white"
            >
              Explore Training Programs
            </Link>
          </div>
          <p className="mt-8 text-sm font-medium text-navy-700">
            Trusted by leading organizations across India and beyond
          </p>
        </Reveal>

        {/* Negative bottom margin lets the wrist run off the hero's bottom edge
            (section overflow-hidden clips it), matching the approved mock. */}
        <Reveal delay={0.15} className="relative mx-auto -mb-20 w-full max-w-sm lg:-mb-28 lg:max-w-[400px]">
          {/* Client-supplied hand cutout (transparent background), hue-matched
              to the fresh-blue theme — sits directly on the hero wash like the mock. */}
          <Image
            src="/hero-hand.webp"
            alt="Wooden mannequin hand holding a card with a heart — training that puts lifesaving in your hands"
            width={700}
            height={1232}
            priority
            sizes="(max-width: 1024px) 90vw, 400px"
            className="h-auto w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
