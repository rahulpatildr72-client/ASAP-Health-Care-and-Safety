"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import CourseCard from "@/components/CourseCard";
import FadeIn from "@/components/FadeIn";
import { Course, CourseCategory, CATEGORY_META } from "@/data/courses";
import { Building, Video, Shield, Leaf, Clock, ArrowRight, List, LayoutGrid } from "lucide-react";

type CoursesClientProps = {
  courses: Course[];
};

const CATEGORY_ORDER: CourseCategory[] = ["emergency", "wellbeing"];

const CategoryIcon = ({ icon, className }: { icon: "shield" | "leaf"; className?: string }) => {
  if (icon === "shield") return <Shield className={className} />;
  return <Leaf className={className} />;
};

const tabClass = (active: boolean) =>
  `flex items-center gap-2 rounded-full border px-5 py-2.5 text-[0.9rem] font-medium transition-all active:scale-95 sm:px-6 ${
    active
      ? "border-primary bg-primary text-white"
      : "border-gray-300 bg-white text-gray-600 hover:border-primary hover:text-primary"
  }`;

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

  return (
    <div>
      {/* Filter Tabs (reference: tabBar) */}
      <div className="mb-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
        <button onClick={() => setFilterMode(filterMode === "offline" ? "all" : "offline")} className={tabClass(filterMode === "offline")}>
          <Building className="h-4 w-4" />
          <span>Offline Training (Onsite)</span>
        </button>

        <button onClick={() => setFilterMode(filterMode === "online" ? "all" : "online")} className={tabClass(filterMode === "online")}>
          <Video className="h-4 w-4" />
          <span>Online Training (Live)</span>
        </button>
      </div>

      {/* View Toggle */}
      <div className="mb-8 flex items-center justify-end gap-2">
        <button
          onClick={() => setViewMode("list")}
          className={`flex items-center gap-1.5 rounded-md px-3 py-2 text-xs font-semibold transition-all ${
            viewMode === "list" ? "bg-primary text-white" : "bg-gray-100 text-gray-600 hover:bg-primary-light hover:text-primary"
          }`}
        >
          <List className="h-3.5 w-3.5" />
          List
        </button>
        <button
          onClick={() => setViewMode("cards")}
          className={`flex items-center gap-1.5 rounded-md px-3 py-2 text-xs font-semibold transition-all ${
            viewMode === "cards" ? "bg-primary text-white" : "bg-gray-100 text-gray-600 hover:bg-primary-light hover:text-primary"
          }`}
        >
          <LayoutGrid className="h-3.5 w-3.5" />
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
                  <div className="mb-8 flex items-center gap-4">
                    <div className="icon-square h-12 w-12 sm:h-14 sm:w-14">
                      <CategoryIcon icon={group.meta.icon} className="h-6 w-6 sm:h-7 sm:w-7" />
                    </div>
                    <div>
                      <h2 className="font-display text-[1.5rem] font-bold tracking-[-0.01em] text-gray-900 sm:text-[1.75rem]">
                        {group.meta.label}
                      </h2>
                      <p className="mt-0.5 text-[0.875rem] text-gray-500">
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
                            className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white px-5 py-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-light hover:shadow-md sm:gap-6 sm:px-7 sm:py-6"
                          >
                            <span className="flex-none font-display text-2xl font-extrabold tabular-nums text-primary sm:text-3xl">
                              {num}.
                            </span>

                            <div className="min-w-0 flex-1">
                              <h3 className="font-display text-[1.05rem] font-semibold leading-snug text-gray-900 transition-colors group-hover:text-primary sm:text-[1.2rem]">
                                {course.shortTitle}
                              </h3>
                              <p className="mt-1 line-clamp-1 max-w-xl text-[0.85rem] text-gray-600 sm:text-[0.9rem]">
                                {course.tagline}
                              </p>
                            </div>

                            <span className="tag-pill hidden flex-none sm:inline-flex">
                              <Clock className="h-3.5 w-3.5" />
                              {course.duration}
                            </span>

                            <ArrowRight className="h-4 w-4 flex-none text-gray-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary sm:h-5 sm:w-5" />
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
                        <FadeIn key={course.slug} delay={i * 0.08} className="h-full min-h-[320px]">
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
        <div className="py-16 text-center text-gray-600">
          No training programs found for this mode.
        </div>
      )}
    </div>
  );
}
