"use client";

import Link from "next/link";
import Image from "next/image";
import type { Course } from "@/data/courses";

const CARD_HIGHLIGHTS: Record<string, string[]> = {
  "first-aid-cpr-training": ["CPR & First Aid Certification", "Wound Care & Emergency Response"],
  "basic-first-aid-cpr": ["Essential CPR Fundamentals", "Basic Wound Care & Recovery"],
  "cpr-aed-choking": ["AED Defibrillator Operation", "Choking & Airway Clearance"],
  "fire-safety-awareness": ["Fire Extinguisher Operation", "Evacuation & Emergency Drills"],
  "ert-emergency-response-team": ["Incident Command & Crisis Response", "Evacuation & Triage Drills"],
  "posh-prevention-sexual-harassment": ["POSH Act Compliance & Legal Framework", "IC Committee & Workplace Policy"],
  "stress-management-awareness": ["Stress Coping Techniques", "Work-Life Balance Strategies"],
  "counselling-mental-wellbeing": ["Active Listening Skills", "Mental Health First Aid"],
  "diet-nutrition-meditation-yoga": ["Balanced Nutrition Planning", "Yoga & Meditation Practices"],
  "female-healthcare-wellbeing": ["Women's Health Across Life Stages", "Preventive Care & Self-Wellness"],
};

export default function CourseCard({ course, index }: { course: Course; index?: number }) {
  const formattedNumber =
    typeof index === "number" ? String(index + 1).padStart(2, "0") : undefined;

  const highlights = CARD_HIGHLIGHTS[course.slug] || (course.learn ? course.learn.slice(0, 2) : []);

  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group relative block overflow-hidden rounded-[26px] sm:rounded-[30px] min-h-[410px] sm:min-h-[430px] shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
    >
      {/* Background image */}
      <Image
        src={course.cardImage}
        alt={course.imageAlt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Deep Dark Green/Emerald gradient overlay matching reference design */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,32,25,0.20) 0%, rgba(6,28,22,0.65) 35%, rgba(4,22,17,0.92) 75%, rgba(3,18,14,0.98) 100%)",
        }}
      />

      {/* Faded number watermark */}
      {formattedNumber && (
        <span
          className="absolute top-[36%] right-5 z-[2] font-display font-extrabold text-white/12 select-none pointer-events-none tracking-tighter"
          style={{ fontSize: "clamp(3.5rem, 8vw, 5.5rem)", lineHeight: 1 }}
        >
          {formattedNumber}
        </span>
      )}

      {/* Duration badge */}
      <div className="absolute top-5 left-5 z-[3]">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-md px-3.5 py-1.5 text-[11px] sm:text-xs font-bold text-white/95 border border-white/10">
          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          {course.duration}
        </span>
      </div>

      {/* Card content */}
      <div className="absolute inset-0 z-[3] flex flex-col justify-end p-6 sm:p-7">
        {/* Title */}
        <h3 className="font-display text-2xl sm:text-[1.65rem] font-bold text-white leading-tight tracking-tight drop-shadow-sm">
          {course.title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-white/90 font-normal line-clamp-2 max-w-sm">
          {course.tagline}
        </p>

        {/* Bullet Highlights with Yellow/Orange Dots */}
        {highlights.length > 0 && (
          <ul className="mt-3.5 space-y-1.5">
            {highlights.map((point) => (
              <li key={point} className="flex items-center gap-2 text-xs sm:text-sm font-bold text-white">
                <span className="h-2 w-2 rounded-full bg-amber-400 shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}

        {/* CTA Link */}
        <div className="mt-4 flex items-center gap-2 font-display text-sm sm:text-base font-bold text-[#F59E0B] group-hover:text-amber-300 transition-colors">
          <span>Explore Program</span>
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
