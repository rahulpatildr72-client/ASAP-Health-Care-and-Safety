import type { Metadata } from "next";
import CourseCard from "@/components/CourseCard";
import CTABanner from "@/components/CTABanner";
import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";
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
      <section className="bg-surface pb-20 pt-36 sm:pt-44">
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

      <section className="bg-white py-24 border-t border-[rgba(0,0,0,0.08)]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="border-b border-[rgba(0,0,0,0.08)]">
            {COURSES.map((course, i) => (
              <FadeIn key={course.slug} delay={i * 0.08}>
                <CourseCard course={course} index={i} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
