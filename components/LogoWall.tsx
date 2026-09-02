"use client";

import FadeIn from "./FadeIn";
import { CLIENTS } from "@/data/site";

function Chip({ name, hidden }: { name: string; hidden: boolean }) {
  return (
    <span
      aria-hidden={hidden}
      className="flex shrink-0 items-center gap-3 rounded-full border border-gray-200 bg-white py-2 pl-2 pr-5 shadow-sm"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary font-display text-xs font-bold text-white">
        {name.charAt(0)}
      </span>
      <span className="whitespace-nowrap font-display text-[0.95rem] font-semibold text-gray-800">{name}</span>
    </span>
  );
}

export default function LogoWall() {
  const row = [...CLIENTS, ...CLIENTS];
  const half = Math.ceil(CLIENTS.length / 2);
  const rowB = [...CLIENTS.slice(half), ...CLIENTS.slice(0, half), ...CLIENTS.slice(half), ...CLIENTS.slice(0, half)];

  return (
    <section className="overflow-hidden border-y border-gray-200 bg-white py-14 sm:py-16">
      <div className="mx-auto mb-8 max-w-7xl px-5 sm:mb-10 lg:px-8">
        <FadeIn className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-primary">
              Trusted by Leading Organizations
            </p>
            <p className="mt-1 text-[0.9rem] text-gray-600">Corporates, schools, hotels and healthcare teams across India</p>
          </div>
          <p className="inline-flex items-center gap-2 text-[0.85rem] font-semibold text-gray-600">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            250+ corporate clients
          </p>
        </FadeIn>
      </div>

      <div className="mask-fade-x space-y-4">
        <div className="animate-marquee flex w-max items-center gap-4 pr-4">
          {row.map((client, i) => (
            <Chip key={`a-${client}-${i}`} name={client} hidden={i >= CLIENTS.length} />
          ))}
        </div>
        <div className="animate-marquee flex w-max items-center gap-4 pr-4 [animation-direction:reverse] [animation-duration:55s]" aria-hidden="true">
          {rowB.map((client, i) => (
            <Chip key={`b-${client}-${i}`} name={client} hidden />
          ))}
        </div>
      </div>
    </section>
  );
}
