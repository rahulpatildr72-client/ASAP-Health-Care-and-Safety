"use client";

import Image from "next/image";
import { CircleCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";
import AppIcon from "./icons";
import { AUDIENCES } from "@/data/site";

/** Real training photos from /public matched to each audience segment. */
const AUDIENCE_IMAGES: Record<string, { src: string; alt: string }> = {
  "Corporates & Industries": {
    src: "/corporate-training.png",
    alt: "Office team practicing CPR on mannequins during an onsite corporate training session",
  },
  "Schools & Institutions": {
    src: "/choking-response.png",
    alt: "Instructor demonstrating choking response to a classroom of staff",
  },
  "Hospitals & Gyms": {
    src: "/aed-training.png",
    alt: "Healthcare staff attaching AED pads to a training mannequin",
  },
  "Communities & Individuals": {
    src: "/hero-cpr.jpg",
    alt: "Individual performing chest compressions on a CPR mannequin",
  },
};

/** Alternating image / text rows (reference: aboutPreview grid). */
export default function AudienceGrid() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Who We Train"
          title="Training Built for the People In Front of Us"
          subtitle="An office floor, a classroom, a hospital corridor and a family home face very different emergencies. Every program is shaped around who is in the room."
        />

        <div className="space-y-16 lg:space-y-24">
          {AUDIENCES.map((audience, i) => {
            const img = AUDIENCE_IMAGES[audience.title];
            const reverse = i % 2 === 1;
            return (
              <FadeIn key={audience.title} delay={0.05}>
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                  <div className={`group relative aspect-[4/3] overflow-hidden rounded-2xl bg-primary-light ${reverse ? "lg:order-2" : ""}`}>
                    {img && (
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    )}
                    {/* Soft green fade over the photo */}
                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{ background: "linear-gradient(180deg, rgba(3,58,39,0.06) 0%, rgba(3,58,39,0.36) 50%, rgba(3,58,39,0.66) 100%)" }}
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <span className="tag-pill mb-4">
                      <AppIcon name={audience.icon} className="h-3.5 w-3.5" />
                      Who We Train
                    </span>
                    <h3 className="font-display text-[1.6rem] font-semibold leading-tight text-gray-900 sm:text-[2rem]">
                      {audience.title}
                    </h3>
                    <p className="mt-4 leading-[1.8] text-gray-700">{audience.description}</p>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {audience.points.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-[0.9rem] font-medium text-gray-800">
                          <CircleCheck className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
