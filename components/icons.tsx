import {
  Award,
  Hand,
  SlidersHorizontal,
  Laptop,
  Siren,
  BadgeCheck,
  Building2,
  School,
  Stethoscope,
  Users,
  Hotel,
  Factory,
  Shield,
  Dumbbell,
  HeartPulse,
  Flame,
  Brain,
  Smile,
  Apple,
  Zap,
  Wind,
  Cross,
  Heart,
  Leaf,
  type LucideProps,
} from "lucide-react";

/** Maps the string icon keys used in data/site.ts and data/courses.ts to lucide components. */
const ICONS = {
  award: Award,
  hand: Hand,
  sliders: SlidersHorizontal,
  laptop: Laptop,
  siren: Siren,
  badge: BadgeCheck,
  building: Building2,
  school: School,
  stethoscope: Stethoscope,
  users: Users,
  hotel: Hotel,
  factory: Factory,
  shield: Shield,
  dumbbell: Dumbbell,
  heartpulse: HeartPulse,
  flame: Flame,
  brain: Brain,
  smile: Smile,
  apple: Apple,
  zap: Zap,
  wind: Wind,
  cross: Cross,
  heart: Heart,
  leaf: Leaf,
} as const;

export type IconKey = keyof typeof ICONS;

export default function AppIcon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = ICONS[name as IconKey] ?? Shield;
  return <Cmp {...props} />;
}
