"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import CourseCard from "@/components/CourseCard";
import FadeIn from "@/components/FadeIn";
import { Course } from "@/data/courses";
import { Building, Video, Layers } from "lucide-react";

type CoursesClientProps = {
  courses: Course[];
};

export default function CoursesClient({ courses }: CoursesClientProps) {
  const searchParams = useSearchParams();
  const initialMode = searchParams.get("mode") || "all";
  const [filterMode, setFilterMode] = useState<string>(initialMode);

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

  return (
    <div>
      {/* Filter Tabs */}
      <div className="mb-12 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
        <button
          onClick={() => setFilterMode("all")}
          className={`flex items-center gap-2 rounded-full px-4 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-bold transition-all active:scale-95 ${
            filterMode === "all"
              ? "bg-[#2563EB] text-white shadow-md shadow-blue-500/25"
              : "bg-slate-100/90 text-[#1B2559]/80 hover:bg-slate-200 hover:text-[#141414]"
          }`}
        >
          <Layers className="h-4 w-4" />
          <span>All Programs ({courses.length})</span>
        </button>

        <button
          onClick={() => setFilterMode("offline")}
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
          onClick={() => setFilterMode("online")}
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

      {/* Courses Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course, i) => (
            <FadeIn key={course.slug} delay={i * 0.08}>
              <CourseCard course={course} index={i} />
            </FadeIn>
          ))}
        </div>
      ) : (
        <div className="py-16 text-center text-[#1B2559]/70">
          No training programs found for this mode.
        </div>
      )}
    </div>
  );
}
