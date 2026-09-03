"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Shield, Leaf, Clock, ArrowRight, Building, Video, CircleCheck } from "lucide-react";
import AppIcon from "@/components/icons";
import { Course, CourseCategory, CATEGORY_META } from "@/data/courses";

type CoursesClientProps = {
  courses: Course[];
};

const CATEGORY_ORDER: CourseCategory[] = ["emergency", "wellbeing"];

const isCategory = (value: string | null): value is CourseCategory =>
  value === "emergency" || value === "wellbeing";

/** Delivery formats — informational only; every program is available in both. */
const FORMATS = [
  { icon: Building, label: "Offline Training (Onsite)" },
  { icon: Video, label: "Online Training (Live)" },
];

const CategoryIcon = ({ icon, className }: { icon: "shield" | "leaf"; className?: string }) =>
  icon === "shield" ? <Shield className={className} /> : <Leaf className={className} />;

/** Category tabs + program cards (reference: programs page tab bar and card grid). */
export default function CoursesClient({ courses }: CoursesClientProps) {
  const searchParams = useSearchParams();
  const requested = searchParams.get("category");
  const [active, setActive] = useState<CourseCategory>(isCategory(requested) ? requested : "emergency");

  // Support deep links such as /courses?category=wellbeing
  useEffect(() => {
    if (isCategory(requested)) setActive(requested);
  }, [requested]);

  const visible = courses.filter((course) => course.category === active);

  return (
    <div>
      {/* Training formats (not filters) */}
      <div className="mb-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3">
        {FORMATS.map(({ icon: Icon, label }) => (
          <span
            key={label}
            className="inline-flex items-center justify-center gap-2.5 rounded-full border border-primary/20 bg-primary-light px-6 py-2.5 text-[0.9rem] font-semibold text-primary-dark"
          >
            <Icon className="h-4 w-4 text-primary" />
            <span>{label}</span>
            <CircleCheck className="h-4 w-4 text-primary" aria-hidden="true" />
          </span>
        ))}
      </div>

      {/* Category tabs — the only filters */}
      <div
        role="tablist"
        aria-label="Training categories"
        className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center"
      >
        {CATEGORY_ORDER.map((category) => {
          const meta = CATEGORY_META[category];
          const selected = category === active;
          const count = courses.filter((course) => course.category === category).length;
          return (
            <button
              key={category}
              id={`tab-${category}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`panel-${category}`}
              onClick={() => setActive(category)}
              className={`inline-flex items-center justify-center gap-2.5 rounded-full border px-6 py-3 text-[0.95rem] font-semibold transition-all duration-300 active:scale-[0.98] sm:px-7 ${
                selected
                  ? "border-primary bg-primary text-white shadow-[0_8px_20px_rgba(10,104,71,0.25)]"
                  : "border-gray-300 bg-white text-gray-700 hover:border-primary hover:text-primary"
              }`}
            >
              <CategoryIcon icon={meta.icon} className="h-4 w-4" />
              <span>{meta.label}</span>
              <span
                className={`rounded-full px-2 py-0.5 text-[0.7rem] font-bold tabular-nums ${
                  selected ? "bg-white/20 text-white" : "bg-primary-light text-primary"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Program cards — remounted on tab change so the fade-up replays */}
      <div
        key={active}
        id={`panel-${active}`}
        role="tabpanel"
        aria-labelledby={`tab-${active}`}
        className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3"
      >
        {visible.map((course, i) => (
          <Link
            key={course.slug}
            href={`/courses/${course.slug}`}
            className="card animate-fade-up group flex h-full flex-col items-center p-7 text-center hover:border-primary-light sm:p-8"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <span className="icon-square h-16 w-16 rounded-2xl group-hover:bg-primary group-hover:text-white">
              <AppIcon name={course.icon} className="h-7 w-7" />
            </span>
            <span className="tag-pill mt-5">{CATEGORY_META[course.category].label}</span>
            <h3 className="mt-4 font-display text-[1.15rem] font-bold leading-snug text-gray-900 transition-colors group-hover:text-primary sm:text-[1.25rem]">
              {course.shortTitle}
            </h3>
            <p className="mt-2.5 text-[0.9rem] leading-[1.65] text-gray-600">{course.tagline}</p>

            <div className="mt-auto w-full pt-6">
              <div className="flex items-center justify-between gap-3 border-t border-gray-100 pt-4">
                <span className="inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-gray-700">
                  <Clock className="h-3.5 w-3.5 text-primary" />
                  {course.duration}
                </span>
                <span className="inline-flex items-center gap-1 text-[0.85rem] font-semibold text-primary">
                  View Program
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
