"use client";

import FadeIn from "./FadeIn";
import { CLIENTS } from "@/data/site";

export default function LogoWall() {
  const row = [...CLIENTS, ...CLIENTS];
  return (
    <section className="border-y border-[rgba(0,0,0,0.08)] bg-surface py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 mb-10">
        <FadeIn className="text-left">
          <p className="text-xs font-semibold uppercase tracking-widest text-navy-500">
            Trusted by Leading Organizations
          </p>
          <p className="mt-1 text-sm text-navy-500">Corporates, schools, hotels and healthcare teams</p>
        </FadeIn>
      </div>
      <div className="relative overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-12 pr-12">
          {row.map((client, i) => (
            <span
              key={`${client}-${i}`}
              className="whitespace-nowrap font-display text-lg font-medium text-navy-600 tracking-tight"
              aria-hidden={i >= CLIENTS.length}
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
