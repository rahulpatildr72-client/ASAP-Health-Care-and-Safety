"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import CourseCard from "@/components/CourseCard";
import FadeIn from "@/components/FadeIn";
import { Course, CourseCategory, CATEGORY_META } from "@/data/courses";
import { Building, Video, Shield, Leaf, Clock, ArrowRight } from "lucide-react";

type CoursesClientProps = {
  courses: Course[];
};

const CATEGORY_ORDER: CourseCategory[] = ["emergency", "wellbeing"];

const CategoryIcon = ({ icon, className }: { icon: "shield" | "leaf"; className?: string }) => {
  if (icon === "shield") return <Shield className={className} />;
  return <Leaf className={className} />;
};

export default function CoursesClient({ courses }: CoursesClientProps) {
  const searchParams = useSearchParams();
  const initialMode = searchParams.get("mode") || "all";
  const [filterMode, setFilterMode] = useState<string>(initialMode);
  const [viewMode, setViewMode] = useState<"cards" | "list">("list");

  useEffect(() => {
    const mode = searchParams.get("mode");
    if (mode === "offline" || mode === "online" || mode === "all") {
      setFilterMode(mode);
    }
  }, [searchParams]);

  const filteredCourses = courses.filter((course) => {
    if (filterMode === "offline") {
      return course.modes.some((m) =>
        ["Onsite", "Classroom", "Blended"].includes(m)
      );
    }
    if (filterMode === "online") {
      return course.modes.some((m) =>
        ["Live Online", "Blended"].includes(m)
      );
    }
    return true;
  });

  // Group courses by category
  const groupedCourses = CATEGORY_ORDER.reduce<
    { category: CourseCategory; meta: (typeof CATEGORY_META)[CourseCategory]; courses: Course[] }[]
  >((acc, cat) => {
    const catCourses = filteredCourses.filter((c) => c.category === cat);
    if (catCourses.length > 0) {
      acc.push({ category: cat, meta: CATEGORY_META[cat], courses: catCourses });
    }
    return acc;
  }, []);

  // Global index across all categories for numbering
  let globalIndex = 0;

  return (
    <div>
      {/* Filter Tabs */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
        <button
          onClick={() => setFilterMode(filterMode === "offline" ? "all" : "offline")}
          className={`flex items-center gap-2 rounded-full px-4 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-bold transition-all active:scale-95 ${
            filterMode === "offline"
              ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/25"
              : "bg-slate-100/90 text-[#1B2559]/80 hover:bg-slate-200 hover:text-[#141414]"
          }`}
        >
          <Building className="h-4 w-4" />
          <span>Offline Training (Onsite)</span>
        </button>

        <button
          onClick={() => setFilterMode(filterMode === "online" ? "all" : "online")}
          className={`flex items-center gap-2 rounded-full px-4 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-bold transition-all active:scale-95 ${
            filterMode === "online"
              ? "bg-[#2563EB] text-white shadow-md shadow-blue-500/25"
              : "bg-slate-100/90 text-[#1B2559]/80 hover:bg-slate-200 hover:text-[#141414]"
          }`}
        >
          <Video className="h-4 w-4" />
          <span>Online Training (Live)</span>
        </button>
      </div>

      {/* View Toggle */}
      <div className="mb-8 flex items-center justify-end gap-2">
        <button
          onClick={() => setViewMode("list")}
          className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition-all ${
            viewMode === "list"
              ? "bg-[#141414] text-white shadow-sm"
              : "bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700"
          }`}
        >
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          List
        </button>
        <button
          onClick={() => setViewMode("cards")}
          className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition-all ${
            viewMode === "cards"
              ? "bg-[#141414] text-white shadow-sm"
              : "bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700"
          }`}
        >
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
          Cards
        </button>
      </div>

      {/* Grouped Content */}
      {filteredCourses.length > 0 ? (
        <div className="space-y-12 sm:space-y-16">
          {groupedCourses.map((group) => {
            return (
              <div key={group.category}>
                {/* Category Heading */}
                <FadeIn>
                  <div className="mb-8 sm:mb-10 flex items-center gap-3 sm:gap-4">
                    <div
                      className={`flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl ${
                        group.category === "emergency"
                          ? "bg-gradient-to-br from-sky-100 to-blue-200/80"
                          : "bg-gradient-to-br from-emerald-100 to-green-200/80"
                      }`}
                    >
                      <CategoryIcon
                        icon={group.meta.icon}
                        className={`h-6 w-6 sm:h-7 sm:w-7 ${
                          group.category === "emergency"
                            ? "text-sky-600"
                            : "text-emerald-600"
                        }`}
                      />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[#141414]">
                        {group.meta.label}
                      </h2>
                      <p className="mt-0.5 text-sm text-[#1B2559]/60 font-medium">
                        {group.courses.length} {group.courses.length === 1 ? "program" : "programs"}
                      </p>
                    </div>
                  </div>
                </FadeIn>

                {/* List View */}
                {viewMode === "list" && (
                  <div className="space-y-3 sm:space-y-4">
                    {group.courses.map((course, i) => {
                      const globalIdx = filteredCourses.findIndex((c) => c.slug === course.slug);
                      const num = globalIdx >= 0 ? globalIdx + 1 : i + 1;

                      return (
                        <FadeIn key={course.slug} delay={i * 0.06}>
                          <Link
                            href={`/courses/${course.slug}`}
                            className="group flex items-center gap-4 sm:gap-6 rounded-2xl border border-[rgba(0,0,0,0.06)] bg-white px-5 py-5 sm:px-7 sm:py-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/[0.06] hover:-translate-y-0.5 hover:border-blue-200/60"
                          >
                            {/* Number */}
                            <span
                              className={`flex-none font-display text-2xl sm:text-3xl font-extrabold tabular-nums ${
                                group.category === "emergency"
                                  ? "text-sky-500"
                                  : "text-emerald-500"
                              }`}
                            >
                              {num}.
                            </span>

                            {/* Title & Duration */}
                            <div className="flex-1 min-w-0">
                              <h3 className="font-display text-lg sm:text-xl font-bold text-[#141414] leading-snug group-hover:text-[#2563EB] transition-colors">
                                {course.shortTitle}
                              </h3>
                              <p className="mt-1 text-xs sm:text-sm text-[#1B2559]/60 line-clamp-1 max-w-xl">
                                {course.tagline}
                              </p>
                            </div>

                            {/* Duration Badge */}
                            <div className="flex-none hidden sm:flex items-center gap-1.5 rounded-full bg-slate-100 px-3.5 py-1.5 text-xs font-bold text-[#1B2559]/70">
                              <Clock className="h-3.5 w-3.5" />
                              {course.duration}
                            </div>

                            {/* Arrow */}
                            <ArrowRight className="flex-none h-4 w-4 sm:h-5 sm:w-5 text-slate-300 group-hover:text-[#2563EB] transition-all duration-300 group-hover:translate-x-1" />
                          </Link>
                        </FadeIn>
                      );
                    })}
                  </div>
                )}

                {/* Cards View */}
                {viewMode === "cards" && (
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {group.courses.map((course, i) => {
                      const globalIdx = filteredCourses.findIndex((c) => c.slug === course.slug);

                      return (
                        <FadeIn key={course.slug} delay={i * 0.08}>
                          <CourseCard course={course} index={globalIdx >= 0 ? globalIdx : i} />
                        </FadeIn>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="py-16 text-center text-[#1B2559]/70">
          No training programs found for this mode.
        </div>
      )}
    </div>
  );
}
