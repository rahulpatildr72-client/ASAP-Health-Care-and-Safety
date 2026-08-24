"use client";

import Link from "next/link";
import Image from "next/image";
import type { Course } from "@/data/courses";

export default function CourseCard({ course, index }: { course: Course; index?: number }) {
  const formattedNumber =
    typeof index === "number" ? String(index + 1).padStart(2, "0") : undefined;

  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group relative block overflow-hidden rounded-2xl min-h-[290px]"
      style={{ aspectRatio: "4 / 3" }}
    >
      {/* Background image */}
      <Image
        src={course.cardImage}
        alt={course.imageAlt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Dark gradient overlay for text readability */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(7,30,25,0.45) 0%, rgba(5,25,20,0.72) 45%, rgba(4,18,15,0.95) 100%)",
        }}
      />

      {/* Large faded number watermark */}
      {formattedNumber && (
        <span
          className="absolute top-3.5 right-4 z-[2] font-display font-extrabold text-white/20 select-none pointer-events-none tracking-tighter"
          style={{ fontSize: "clamp(3.2rem, 7vw, 5rem)", lineHeight: 1 }}
        >
          {formattedNumber}
        </span>
      )}

      {/* Card content */}
      <div className="absolute inset-0 z-[3] flex flex-col justify-end p-5 sm:p-7">
        {/* Title */}
        <h3 className="font-display text-xl font-bold text-white sm:text-2xl leading-tight drop-shadow-sm">
          {course.title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-white/85 max-w-md line-clamp-2 sm:line-clamp-3">
          {course.tagline}
        </p>

        {/* CTA */}
        <div className="mt-3.5">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 px-3.5 py-1.5 text-xs sm:text-sm font-bold text-amber-300 backdrop-blur-md transition-all duration-300 group-hover:bg-amber-400 group-hover:text-slate-950 group-hover:border-amber-400 group-hover:shadow-md">
            <span>Explore Program</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}
