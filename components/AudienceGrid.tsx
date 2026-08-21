"use client";

import Link from "next/link";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";
import { AUDIENCES } from "@/data/site";

export default function AudienceGrid() {
  return (
    <section className="bg-[#F0F3FC] py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          number="02"
          eyebrow="Who We Train"
          title="Training Built for the People In Front of Us"
          subtitle="An office floor, a classroom, a hospital corridor and a family home face very different emergencies. Every program is shaped around who is in the room."
        />
        <div className="mt-20 border-b border-[rgba(0,0,0,0.08)]">
          {AUDIENCES.map((audience, i) => (
            <FadeIn key={audience.title} delay={i * 0.1}>
              <div className="group border-t border-[rgba(0,0,0,0.08)] py-12">
                <div className="grid items-start gap-8 lg:grid-cols-12">
                  <div className="lg:col-span-5">
                    <span className="font-mono text-xs font-semibold text-[#3B5BDB]">
                      SECTION 0{i + 1}
                    </span>
                    <h3 className="mt-2 font-display text-2xl font-bold text-[#141414]">
                      {audience.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-[#1B2559]/75">
                      {audience.description}
                    </p>
                    <Link
                      href={audience.href}
                      className="group/link link-underline mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#141414] hover:text-[#3B5BDB]"
                    >
                      {audience.linkLabel}
                      <span className="inline-block text-[#3B5BDB] transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                    </Link>
                  </div>
                  <div className="lg:col-span-7">
                    <ul className="space-y-4 border-l border-[rgba(0,0,0,0.08)] pl-6 lg:pl-10">
                      {audience.points.map((point) => (
                        <li key={point} className="text-base text-[#1B2559]/80">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
