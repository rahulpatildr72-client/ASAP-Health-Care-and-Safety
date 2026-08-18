import Reveal from "./Reveal";
import { CLIENTS } from "@/data/site";

/**
 * Client logo wall with a gentle CSS marquee.
 * PLACEHOLDER — currently renders client names as monochrome text chips.
 * Swap in real, permission-granted logo images before launch.
 */
export default function LogoWall() {
  const row = [...CLIENTS, ...CLIENTS];
  return (
    <section className="border-y border-navy-300/20 bg-peri-100/60 py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="text-center">
          <h2 className="font-display text-2xl font-bold text-navy-900">
            Trusted by Leading Organizations
          </h2>
          <p className="mt-2 text-navy-500">Corporates, schools, hotels and healthcare teams</p>
        </Reveal>
      </div>
      <div className="relative mt-10 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-peri-100/90 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-peri-100/90 to-transparent"
        />
        <div className="animate-marquee flex w-max items-center gap-6 pr-6">
          {row.map((client, i) => (
            <span
              key={`${client}-${i}`}
              className="whitespace-nowrap rounded-2xl bg-white px-8 py-4 font-display text-lg font-semibold text-navy-500 shadow-sm ring-1 ring-navy-300/20"
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
