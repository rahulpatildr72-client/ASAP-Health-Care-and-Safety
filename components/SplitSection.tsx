"use client";

import Link from "next/link";
import ParallaxImage from "./ParallaxImage";
import RevealText from "./RevealText";
import FadeIn from "./FadeIn";

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
    <section className="bg-surface py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-12 lg:px-8">
        <div className={`lg:col-span-6 ${reverse ? "lg:order-2" : ""}`}>
          <div className="relative">
            <ParallaxImage
              src={image}
              alt={imageAlt}
              containerClassName="aspect-[4/3] w-full"
            />
            {badge && (
              <div className="absolute bottom-6 left-6 border border-[rgba(0,0,0,0.08)] bg-white p-5">
                <p className="font-display text-3xl font-extrabold text-ink">{badge.value}</p>
                <p className="text-xs uppercase tracking-widest text-navy-500">{badge.label}</p>
              </div>
            )}
          </div>
        </div>

        <div className={`lg:col-span-6 ${reverse ? "lg:order-1" : ""}`}>
          <FadeIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-navy-500">
              {eyebrow}
            </p>
          </FadeIn>

          <RevealText as="h2" className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {title}
          </RevealText>

          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg leading-relaxed text-navy-600">{description}</p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2 border-t border-[rgba(0,0,0,0.08)] pt-6">
              {points.map((point) => (
                <li key={point} className="text-sm font-medium text-navy-700">
                  — {point}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-10">
              <Link
                href={ctaHref}
                className="group link-underline inline-flex items-center gap-1.5 text-[15px] font-medium text-ink"
              >
                {ctaLabel}
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
