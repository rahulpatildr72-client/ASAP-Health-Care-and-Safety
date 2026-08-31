"use client";

import Link from "next/link";
import Image from "next/image";
import type { Course } from "@/data/courses";

const CARD_HIGHLIGHTS: Record<string, string[]> = {
  "first-aid-cpr-training": ["Basics of First Aid & Emergency Response", "CPR Awareness & Response"],
  "basic-first-aid-cpr": ["Fundamental First Aid Principles", "CPR Awareness"],
  "cpr-aed-choking": ["Cardiac Emergency Awareness", "AED Operation & Choking Response"],
  "fire-safety-awareness": ["Fire Risks & Hazard Prevention", "Fire Extinguishers & Evacuation"],
  "ert-emergency-response-team": ["Incident Command & Crisis Response", "Evacuation & Triage Drills"],
  "posh-prevention-sexual-harassment": ["POSH Act Compliance & Legal Framework", "IC Committee & Workplace Policy"],
  "stress-management-awareness": ["Understanding Stress Triggers", "Relaxation & Coping Habits"],
  "counselling-mental-wellbeing": ["Mental & Emotional Wellbeing", "Supportive Communication & Empathy"],
  "diet-nutrition-meditation-yoga": ["Balanced Nutrition Basics", "Mindfulness, Meditation & Yoga"],
  "female-healthcare-wellbeing": ["Women's Health Across Life Stages", "Preventive Care & Self-Wellness"],
};

export default function CourseCard({ course, index }: { course: Course; index?: number }) {
  const formattedNumber =
    typeof index === "number" ? String(index + 1).padStart(2, "0") : undefined;

  const highlights = CARD_HIGHLIGHTS[course.slug] || (course.learn ? course.learn.slice(0, 2) : []);

  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group relative block overflow-hidden rounded-[24px] sm:rounded-[28px] min-h-[380px] sm:min-h-[410px] shadow-lg transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl"
    >
      {/* Background image */}
      <Image
        src={course.cardImage}
        alt={course.imageAlt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* Default Overlay: Subtle gradient at bottom so title is readable */}
      <div
        className="absolute inset-0 z-[1] transition-opacity duration-500 opacity-100 group-hover:opacity-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.25) 50%, rgba(4,22,17,0.85) 100%)",
        }}
      />

      {/* Hovered Overlay: Deep dark green/emerald gradient overlay revealing details */}
      <div
        className="absolute inset-0 z-[1] transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(180deg, rgba(6,28,22,0.75) 0%, rgba(4,22,17,0.92) 50%, rgba(3,18,14,0.98) 100%)",
        }}
      />

      {/* Faded number watermark */}
      {formattedNumber && (
        <span
          className="absolute top-5 right-5 sm:top-6 sm:right-6 z-[2] font-display font-extrabold text-white/30 sm:text-white/35 select-none pointer-events-none tracking-tighter group-hover:text-white/20 transition-colors duration-500"
          style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", lineHeight: 1 }}
        >
          {formattedNumber}
        </span>
      )}

      {/* Duration badge */}
      <div className="absolute top-5 left-5 z-[3]">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-black/30 backdrop-blur-md px-3.5 py-1.5 text-[11px] sm:text-xs font-bold text-white/95 border border-white/15 shadow-sm">
          <svg className="h-3 w-3 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          {course.duration}
        </span>
      </div>

      {/* Card Content Container */}
      <div className="absolute inset-0 z-[3] flex flex-col justify-end p-6 sm:p-7">
        <div className="transform transition-transform duration-500 ease-out">
          {/* Course Title (always visible) */}
          <h3 className="font-display text-2xl sm:text-[1.6rem] font-extrabold text-white leading-tight tracking-tight drop-shadow-md">
            {course.title}
          </h3>

          {/* Collapsible Details Container that expands & fades in on hover */}
          <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-out group-hover:grid-rows-[1fr] group-hover:opacity-100 group-hover:mt-3">
            <div className="overflow-hidden space-y-3">
              {/* Tagline */}
              <p className="text-xs sm:text-sm leading-relaxed text-white/90 font-normal max-w-sm">
                {course.tagline}
              </p>

              {/* Bullet Highlights with Amber/Yellow Dots */}
              {highlights.length > 0 && (
                <ul className="space-y-1.5 pt-0.5">
                  {highlights.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-xs sm:text-sm font-bold text-white">
                      <span className="h-2 w-2 rounded-full bg-amber-400 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* CTA Link */}
              <div className="pt-1.5 flex items-center gap-2 font-display text-xs sm:text-sm font-bold text-[#F59E0B] group-hover:text-amber-300 transition-colors">
                <span>Explore</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
