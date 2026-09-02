"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle, Clock, BadgeCheck, MapPin } from "lucide-react";
import RevealText from "./RevealText";
import FadeIn from "./FadeIn";
import { CONTACT } from "@/data/site";

const NOTES = [
  { icon: Clock, label: "Response within 24 hours" },
  { icon: MapPin, label: "Onsite & live online" },
  { icon: BadgeCheck, label: "Certificate on completion" },
];

/** Green gradient CTA band with decorative circle (reference: ctaBanner). */
export default function CTABanner() {
  const wa = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
    "Hello! I'd like to book a training session."
  )}`;

  return (
    <section className="bg-green-gradient relative overflow-hidden py-16 text-center text-white sm:py-20 lg:py-24">
      <span aria-hidden="true" className="pointer-events-none absolute -right-[20%] -top-1/2 h-[400px] w-[400px] rounded-full bg-white/5" />
      <span aria-hidden="true" className="pointer-events-none absolute -bottom-[40%] -left-[10%] h-[300px] w-[300px] rounded-full bg-white/[0.04]" />

      <div className="relative mx-auto max-w-4xl px-5 lg:px-8">
        <RevealText as="h2" className="font-display text-[2rem] leading-[1.15] text-white sm:text-[2.5rem] lg:text-[3rem]">
          <span className="block font-medium text-white/90">Be Ready When</span>
          <span className="block font-extrabold">Every Second Matters.</span>
        </RevealText>
        <FadeIn delay={0.3}>
          <p className="mx-auto mt-4 max-w-xl text-[1rem] leading-relaxed text-white/85 sm:text-[1.1rem]">
            Equip yourself or your team with practical skills that can make a difference during an emergency.
          </p>
        </FadeIn>
        <FadeIn delay={0.4}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link href="/contact" className="btn btn-white btn-lg w-full sm:w-auto">
              Book a Training
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-accent btn-lg w-full sm:w-auto">
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </FadeIn>
        <FadeIn delay={0.5}>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-[0.875rem] text-white/75">
            {NOTES.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-accent" />
                {label}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
