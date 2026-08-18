import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { STEPS } from "@/data/site";

export default function HowItWorks() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="From First Click to First Responder"
          subtitle="Getting your team trained is simple — four steps from enquiry to certification."
        />
        <ol className="relative mt-16 grid gap-10 lg:grid-cols-4 lg:gap-6">
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-7 hidden border-t-2 border-dashed border-brand-200 lg:block"
          />
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.12} as="li" className="relative">
              <div className="flex flex-col items-center text-center lg:px-2">
                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 font-display text-lg font-bold text-white shadow-lg shadow-brand-600/30 ring-8 ring-white">
                  {step.number}
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-navy-900">{step.title}</h3>
                <p className="mt-2 max-w-xs leading-relaxed text-navy-600">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
