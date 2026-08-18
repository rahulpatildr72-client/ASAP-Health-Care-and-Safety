import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

/**
 * Reusable split layout: photo on one side, heading + checklist + CTA on the other.
 * Used for the corporate training pitch on the homepage and /corporate.
 */
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
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal className={reverse ? "lg:order-2" : ""}>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-float">
              {/* PLACEHOLDER photo — replace with a real training photo. */}
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 576px"
                className="object-cover"
              />
            </div>
            {badge && (
              <div className="absolute bottom-4 right-4 rounded-2xl bg-white px-6 py-4 shadow-float">
                <p className="font-display text-3xl font-extrabold text-brand-600">{badge.value}</p>
                <p className="text-sm font-semibold text-navy-600">{badge.label}</p>
              </div>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.1} className={reverse ? "lg:order-1" : ""}>
          <span className="mb-4 inline-flex items-center rounded-full bg-aqua-50 px-4 py-1.5 text-sm font-semibold text-aqua-600 ring-1 ring-aqua-200">
            {eyebrow}
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-600">{description}</p>
          <ul className="mt-8 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-2.5 font-medium text-navy-800">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 font-display text-base font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:-translate-y-0.5 hover:bg-brand-700"
            >
              {ctaLabel} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
