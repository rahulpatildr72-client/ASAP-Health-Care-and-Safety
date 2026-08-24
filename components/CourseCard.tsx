"use client";

import Link from "next/link";
import type { Course } from "@/data/courses";

export default function CourseCard({ course, index }: { course: Course; index?: number }) {
  const formattedNumber = typeof index === "number" ? String(index + 1).padStart(2, "0") : undefined;

  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group block border-t border-[rgba(0,0,0,0.08)] py-8 transition-transform duration-300 hover:translate-x-3"
    >
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
        <div className="flex items-baseline gap-6 sm:gap-10">
          {formattedNumber && (
            <span className="font-mono text-sm font-semibold text-[#3B5BDB] shrink-0">
              {formattedNumber}.
            </span>
          )}
          <div>
            <h3 className="font-display text-xl font-bold text-[#141414] transition-colors group-hover:text-[#3B5BDB]">
              {course.title}
            </h3>
            <p className="mt-2 text-base leading-relaxed text-[#1B2559]/75 max-w-2xl">
              {course.tagline}
            </p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1B2559]/70 group-hover:text-[#3B5BDB] shrink-0 sm:self-center">
          Explore Program
          <span className="inline-block text-[#3B5BDB] transition-transform duration-300 group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}
