import { Suspense } from "react";
import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
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
      <PageHero breadcrumb={[{ label: "Training Programs" }]}>
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            as="h1"
            tone="light"
            titleLight="Training That Prepares You"
            title="For Real Emergencies"
            subtitle="Every program is hands-on, practical and delivered by certified instructors — onsite at your premises, in our classroom, or live online."
          />
        </div>
      </PageHero>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Suspense fallback={<div className="py-16 text-center text-gray-500">Loading programs...</div>}>
            <CoursesClient courses={COURSES} />
          </Suspense>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
