import type { Metadata } from "next";
import CourseCard from "@/components/CourseCard";
import CTABanner from "@/components/CTABanner";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
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
      <section className="bg-peri-wash-soft pb-16 pt-36 sm:pt-40">
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

      <section className="bg-white pb-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COURSES.map((course, i) => (
              <Reveal key={course.slug} delay={(i % 3) * 0.1}>
                <CourseCard course={course} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
