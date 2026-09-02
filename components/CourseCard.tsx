"use client";

import Link from "next/link";
import Image from "next/image";
import type { Course } from "@/data/courses";

const CARD_HIGHLIGHTS: Record<string, string[]> = {
  "first-aid-cpr-training": ["Basics of First Aid & Emergency Response", "CPR Awareness & Response"],
  "basic-first-aid-cpr": ["Fundamental First Aid Principles", "CPR Awareness"],
  "cpr-aed-choking": ["Cardiac Emergency Awareness", "AED Operation & Choking Response"],
  "fire-safety-awareness": ["Fire Risks & Hazard Prevention", "Fire Extinguishers & Evacuation"],
  "ert-emergency-response-team": ["Emergency Preparedness Principles", "ERT Roles & Evacuation Protocols"],
  "posh-prevention-sexual-harassment": ["Respectful Workplace & Boundaries", "Inappropriate Behavior Recognition"],
  "stress-management-awareness": ["Understanding Stress Triggers", "Relaxation & Coping Habits"],
  "counselling-mental-wellbeing": ["Mental & Emotional Wellbeing", "Supportive Communication & Empathy"],
  "diet-nutrition-meditation-yoga": ["Balanced Nutrition Basics", "Mindfulness, Meditation & Yoga"],
  "female-healthcare-wellbeing": ["Women's Health Concerns & Self-Care", "Preventive Care & Regular Check-ups"],
};

/** Image card with deep-green gradient overlay and hover-reveal details (reference: trainingCard). */
export default function CourseCard({
  course,
  index,
  className = "",
}: {
  course: Course;
  index?: number;
  className?: string;
}) {
  const formattedNumber =
    typeof index === "number" ? String(index + 1).padStart(2, "0") : undefined;

  const highlights = CARD_HIGHLIGHTS[course.slug] || (course.learn ? course.learn.slice(0, 2) : []);

  return (
    <Link
      href={`/courses/${course.slug}`}
      className={`group relative flex h-full min-h-[300px] flex-col justify-end overflow-hidden rounded-2xl bg-gray-200 transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(0,0,0,0.18)] ${className}`}
    >
      {/* Background image */}
      <Image
        src={course.cardImage}
        alt={course.imageAlt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Gradient overlays */}
      <div
        className="absolute inset-0 z-[1] transition-opacity duration-500 group-hover:opacity-0"
        style={{ background: "linear-gradient(180deg, rgba(3,58,39,0.1) 0%, rgba(3,58,39,0.6) 50%, rgba(3,58,39,0.95) 100%)" }}
      />
      <div
        className="absolute inset-0 z-[1] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: "linear-gradient(180deg, rgba(3,58,39,0.2) 0%, rgba(3,58,39,0.7) 40%, rgba(3,58,39,0.98) 100%)" }}
      />

      {/* Number watermark */}
      {formattedNumber && (
        <span
          className="pointer-events-none absolute right-6 top-6 z-[2] select-none font-display text-[3rem] font-black leading-none text-white/[0.12] transition-all duration-500 group-hover:scale-110 group-hover:text-white/25"
        >
          {formattedNumber}
        </span>
      )}

      {/* Duration badge */}
      <span className="absolute left-5 top-5 z-[3] inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/30 px-3.5 py-1.5 text-[11px] font-bold text-white/95 backdrop-blur-md sm:text-xs">
        <svg className="h-3 w-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        {course.duration}
      </span>

      {/* Content */}
      <div className="relative z-[3] w-full p-6 text-white sm:p-7">
        <h3 className="font-display text-[1.25rem] font-bold leading-tight tracking-[0.01em] text-white">
          {course.title}
        </h3>

        <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-out group-hover:mt-2 group-hover:grid-rows-[1fr] group-hover:opacity-100">
          <div className="space-y-3 overflow-hidden">
            <p className="max-w-sm text-[0.9rem] leading-[1.4] text-white/90">{course.tagline}</p>

            {highlights.length > 0 && (
              <ul className="space-y-1.5">
                {highlights.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-[0.85rem] font-medium text-white">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="flex items-center gap-1.5 pt-1 text-[0.9rem] font-semibold text-accent">
              <span>Explore</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
