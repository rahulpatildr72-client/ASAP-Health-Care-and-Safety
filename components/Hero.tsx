import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Hand, Laptop, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";

const chips = [
  { icon: BadgeCheck, label: "Certified Trainers", className: "-left-4 top-10 lg:-left-10", delay: 0.5 },
  { icon: Hand, label: "Hands-On Training", className: "-right-3 top-1/2 lg:-right-8", delay: 0.7 },
  { icon: Laptop, label: "Online & Onsite", className: "-left-4 bottom-10 lg:-left-12", delay: 0.9 },
];

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

        <Reveal delay={0.15} className="relative mx-auto w-full max-w-md">
          <div className="img-blend relative aspect-[906/1010]">
            {/* Hero visual from the approved mock, hue-matched to the fresh-blue theme.
                No card/box: edges feather into the background (see .img-blend). */}
            <Image
              src="/hero-hand.jpg"
              alt="Wooden mannequin hand holding a card with a heart — training that puts lifesaving in your hands"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 448px"
              className="object-cover"
            />
          </div>
          {chips.map(({ icon: Icon, label, className, delay }) => (
            <Reveal
              key={label}
              delay={delay}
              className={`absolute ${className} flex items-center gap-2 rounded-full bg-white px-4 py-2.5 shadow-float`}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-50">
                <Icon className="h-4 w-4 text-brand-600" aria-hidden="true" />
              </span>
              <span className="whitespace-nowrap text-sm font-semibold text-navy-900">{label}</span>
            </Reveal>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
