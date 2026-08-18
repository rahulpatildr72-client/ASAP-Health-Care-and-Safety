import {
  Building2,
  Dumbbell,
  Factory,
  GraduationCap,
  Hotel,
  Shield,
  Stethoscope,
  Users,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { INDUSTRIES } from "@/data/site";

const ICONS: Record<string, LucideIcon> = {
  building: Building2,
  hotel: Hotel,
  school: GraduationCap,
  stethoscope: Stethoscope,
  factory: Factory,
  shield: Shield,
  dumbbell: Dumbbell,
  users: Users,
};

export default function IndustryGrid() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Safety Training for Every Environment"
          subtitle="Wherever people work, learn or gather, emergencies can happen. We train them all."
        />
        <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {INDUSTRIES.map(({ icon, title, description }, i) => {
            const Icon = ICONS[icon] ?? Users;
            return (
              <Reveal key={title} delay={(i % 4) * 0.08}>
                <div className="group flex h-full flex-col items-center rounded-3xl bg-white p-7 text-center shadow-card ring-1 ring-navy-300/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover hover:ring-brand-200">
                  <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="font-display font-bold text-navy-900">{title}</h3>
                  <p className="mt-1.5 text-sm text-navy-500">{description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
