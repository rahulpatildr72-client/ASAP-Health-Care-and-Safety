"use client";

import Link from "next/link";
import { CircleCheck, ArrowRight } from "lucide-react";
import ParallaxImage from "./ParallaxImage";
import RevealText from "./RevealText";
import FadeIn from "./FadeIn";

/** Green gradient split section (reference: section-green + introImageWrapper). */
export default function SplitSection({
  eyebrow,
  title,
  description,
  points,
  ctaLabel,
  ctaHref,
  image,
  imageAlt,
  badge,
  reverse = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
  badge?: { value: string; label: string };
  reverse?: boolean;
}) {
  return (
    <section className="bg-green-gradient relative overflow-hidden py-16 text-white sm:py-24">
      <span aria-hidden="true" className="pointer-events-none absolute -right-[15%] -top-1/2 h-[500px] w-[500px] rounded-full bg-white/[0.04]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className={`${reverse ? "lg:order-2" : ""}`}>
          <div className="relative">
            <ParallaxImage
              src={image}
              alt={imageAlt}
              containerClassName="aspect-[4/3] w-full rounded-2xl border-4 border-white shadow-lg"
            />
            {badge && (
              <div className="absolute -bottom-6 left-6 rounded-xl bg-white px-5 py-4 text-primary shadow-lg">
                <p className="font-display text-[2rem] font-extrabold leading-none text-primary">{badge.value}</p>
                <p className="mt-1 text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-gray-600">{badge.label}</p>
              </div>
            )}
          </div>
        </div>

        <div className={`${reverse ? "lg:order-1" : ""}`}>
          <FadeIn>
            <p className="mb-4 flex items-center gap-3 text-[0.85rem] font-medium uppercase tracking-[0.15em] text-white/80">
              <span className="h-0.5 w-10 bg-accent" aria-hidden="true" />
              {eyebrow}
            </p>
          </FadeIn>

          <RevealText as="h2" className="font-display text-[1.75rem] font-bold leading-[1.2] text-white sm:text-[2.25rem]">
            {title}
          </RevealText>

          <FadeIn delay={0.2}>
            <p className="mt-5 text-[1rem] leading-[1.7] text-white/85 sm:text-[1.1rem]">{description}</p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <ul className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-2 text-[0.9rem] font-medium text-white/95">
                  <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-8">
              <Link href={ctaHref} className="btn btn-white">
                {ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
