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
            "linear-gradient(160deg, rgba(7,50,40,0.88) 0%, rgba(7,50,40,0.62) 50%, rgba(7,50,40,0.30) 100%)",
        }}
      />

      {/* Large faded number watermark */}
      {formattedNumber && (
        <span
          className="absolute top-4 right-5 z-[2] font-display font-bold text-white/15 select-none"
          style={{ fontSize: "clamp(4rem, 8vw, 7rem)", lineHeight: 1 }}
        >
          {formattedNumber}
        </span>
      )}

      {/* Card content */}
      <div className="absolute inset-0 z-[3] flex flex-col justify-end p-6 sm:p-7">
        {/* Title */}
        <h3 className="font-display text-xl font-bold text-white sm:text-2xl leading-tight">
          {course.title}
        </h3>

        {/* Description */}
        <p className="mt-2.5 text-sm leading-relaxed text-white/80 max-w-md line-clamp-3">
          {course.tagline}
        </p>

        {/* CTA */}
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#F59E0B] transition-all duration-300 group-hover:gap-2.5">
          Explore
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
