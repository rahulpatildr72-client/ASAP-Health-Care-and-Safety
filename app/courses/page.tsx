import { Suspense } from "react";
import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";
import SectionHeading from "@/components/SectionHeading";
import CoursesClient from "./CoursesClient";
import { COURSES } from "@/data/courses";
import { SITE_NAME } from "@/data/site";

export const metadata: Metadata = {
  title: "Training Programs",
  description:
    "Explore our First Aid, CPR, AED, choking response, health & safety and customized corporate training programs — delivered onsite, in classrooms and live online.",
  openGraph: {
    title: `Training Programs | ${SITE_NAME}`,
    description:
      "First Aid, CPR, AED, choking response, health & safety and customized corporate training programs.",
  },
};

export default function CoursesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-[#E4E7FB] to-[#F0F3FC] pb-20 pt-36 sm:pt-44">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            as="h1"
            eyebrow="Training Programs"
            titleLight="Training That Prepares You"
            title="For Real Emergencies"
            subtitle="Every program is hands-on, practical and delivered by certified instructors — onsite at your premises, in our classroom, or live online."
          />
        </div>
      </section>

      <section className="bg-white py-20 border-t border-[rgba(0,0,0,0.08)]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Suspense fallback={<div className="py-16 text-center text-slate-500">Loading programs...</div>}>
            <CoursesClient courses={COURSES} />
          </Suspense>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
