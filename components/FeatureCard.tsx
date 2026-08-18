import {
  Award,
  BadgeCheck,
  Hand,
  Laptop,
  Siren,
  SlidersHorizontal,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  award: Award,
  hand: Hand,
  sliders: SlidersHorizontal,
  laptop: Laptop,
  siren: Siren,
  badge: BadgeCheck,
};

export default function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  const Icon = ICONS[icon] ?? Award;
  return (
    <div className="group flex h-full gap-5 rounded-3xl bg-white p-7 shadow-card ring-1 ring-navy-300/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-aqua-50 text-aqua-600 transition-colors duration-300 group-hover:bg-aqua-500 group-hover:text-white">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <div>
        <h3 className="font-display text-lg font-bold text-navy-900">{title}</h3>
        <p className="mt-2 leading-relaxed text-navy-600">{description}</p>
      </div>
    </div>
  );
}
