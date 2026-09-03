import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CircleCheck } from "lucide-react";
import Hero from "@/components/Hero";
import AudienceGrid from "@/components/AudienceGrid";
import CourseCard from "@/components/CourseCard";
import FeatureCard from "@/components/FeatureCard";
import IndustryGrid from "@/components/IndustryGrid";
import LogoWall from "@/components/LogoWall";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import FAQAccordion from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";
import SectionHeading from "@/components/SectionHeading";
import CertificateCard from "@/components/CertificateCard";
import FadeIn from "@/components/FadeIn";
import { COURSES } from "@/data/courses";
import { SITE_TAGLINE, WHY_US } from "@/data/site";

export const metadata: Metadata = {
  title: "First Aid, CPR & Health Safety Training in India",
  description: SITE_TAGLINE,
};

const CERT_POINTS = [
  "Issued after demonstrated hands-on competence",
  "Programs based on the latest AHA guidelines",
  "Supports workplace first-aider documentation",
  "Refresher sessions to keep skills current",
];

/** Homepage-only display titles for the program cards (course data itself is unchanged). */
const HOME_CARD_TITLES: Record<string, string> = {
  "first-aid-cpr-training": "First Aid & CPR Training",
  "basic-first-aid-cpr": "Basic First Aid & CPR",
  "cpr-aed-choking": "CPR, AED & Choking",
  "fire-safety-awareness": "Fire Safety Awareness",
  "ert-emergency-response-team": "Emergency Response Team (ERT)",
  "diet-nutrition": "Diet & Nutrition",
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 3. Training Programs — bento grid (reference: trainingsSection) */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
            <SectionHeading
              number="01"
              eyebrow="Training Programs"
              title="Training That Prepares You for Real Emergencies"
            />
            <FadeIn delay={0.2} className="flex flex-col items-start gap-5 lg:w-[400px] lg:shrink-0">
              <p className="text-[0.95rem] leading-[1.7] text-gray-600">
                Hands-on programs delivered onsite, in classrooms and live online — for teams and individuals.
              </p>
              <Link href="/courses" className="btn-outline-pill">
                See All Programs
                <ArrowRight className="h-4 w-4 transition-transform duration-300" />
              </Link>
            </FadeIn>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:auto-rows-[280px] lg:grid-cols-3">
            {COURSES.map((course, i) => (
              <FadeIn key={course.slug} delay={(i % 3) * 0.08} className={`h-full ${i === 0 ? "lg:row-span-2" : ""}`}>
                <CourseCard
                  course={course}
                  index={i}
                  title={HOME_CARD_TITLES[course.slug]}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 02 Who We Train */}
      <AudienceGrid />

      {/* 5. 03 Why Us (reference: services grid) */}
      <section className="bg-off-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            number="03"
            eyebrow="Why Us"
            title="Why Organizations Trust Us"
            subtitle="From multinational hotels to schools and factories, teams choose us for one reason: training that actually works in a real emergency."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {WHY_US.map((feature, i) => (
              <FadeIn key={feature.title} delay={(i % 3) * 0.08} className="h-full">
                <FeatureCard {...feature} index={i} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 04 Certification */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <SectionHeading
              number="04"
              eyebrow="Certification"
              title="Walk Out With Proof of Competence"
              subtitle="Every participant who successfully completes a program receives a certificate of completion — a record of hands-on training for personal and workplace documentation."
            />
            <FadeIn delay={0.2}>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {CERT_POINTS.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-[0.9rem] font-medium text-gray-800">
                    <CircleCheck className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.3}>
              <Link href="/courses" className="btn btn-primary mt-8">
                See All Programs <ArrowRight className="h-4 w-4" />
              </Link>
            </FadeIn>
          </div>
          <div className="flex justify-center lg:justify-end">
            <FadeIn delay={0.15} className="w-full max-w-md">
              <CertificateCard />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 8. 05 Industries */}
      <IndustryGrid />

      {/* 9. Logo wall */}
      <LogoWall />

      {/* 10. 07 Testimonials */}
      <section className="bg-off-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            number="07"
            eyebrow="Testimonials"
            title="What Our Participants Say"
            subtitle="Feedback from the teams and individuals we've trained."
          />
          <div className="mt-12">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* 11. 08 FAQ */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <SectionHeading
            number="08"
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know before booking your training."
          />
          <div className="mt-12">
            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* 12. Final CTA */}
      <CTABanner />
    </>
  );
}
