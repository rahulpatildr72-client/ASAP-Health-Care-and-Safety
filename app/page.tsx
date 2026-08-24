import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import AudienceGrid from "@/components/AudienceGrid";
import CourseCard from "@/components/CourseCard";
import FeatureCard from "@/components/FeatureCard";
import IndustryGrid from "@/components/IndustryGrid";
import LogoWall from "@/components/LogoWall";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import FAQAccordion from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";
import SectionHeading from "@/components/SectionHeading";
import ParallaxImage from "@/components/ParallaxImage";
import RevealText from "@/components/RevealText";
import FadeIn from "@/components/FadeIn";
import { COURSES } from "@/data/courses";
import { FOUNDER, SITE_TAGLINE, WHY_US } from "@/data/site";

export const metadata: Metadata = {
  title: "First Aid, CPR & Health Safety Training in India",
  description: SITE_TAGLINE,
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Stats strip */}
      <TrustBar />

      {/* 3. 01 Training Programs */}
      <section className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            number="01"
            eyebrow="Training Programs"
            title="Training That Prepares You for Real Emergencies"
            subtitle="Hands-on programs delivered onsite, in classrooms and live online — for teams and individuals."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {COURSES.map((course, i) => (
              <FadeIn key={course.slug} delay={i * 0.08}>
                <CourseCard course={course} index={i} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 02 Who We Train */}
      <AudienceGrid />

      {/* 5. 03 Why Us */}
      <section className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            number="03"
            eyebrow="Why Us"
            title="Why Organizations Trust Us"
            subtitle="From multinational hotels to schools and factories, teams choose us for one reason: training that actually works in a real emergency."
          />
          <div className="mt-16 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_US.map((feature, i) => (
              <FadeIn key={feature.title} delay={(i % 3) * 0.08}>
                <FeatureCard {...feature} index={i} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>



      {/* 10. Founder */}
      <section className="bg-white py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <ParallaxImage
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80"
              alt={`Professional portrait of ${FOUNDER.name}, founder and lead trainer`}
              containerClassName="aspect-[4/5] w-full"
            />
          </div>

          <div className="lg:col-span-7">
            <FadeIn>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#1B2559]/70">
                About the Founder
              </p>
            </FadeIn>
            <RevealText as="h2" className="font-display text-3xl font-bold tracking-tight text-[#141414] sm:text-4xl">
              Meet the Expert Behind the Training
            </RevealText>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg leading-relaxed text-[#1B2559]/80">{FOUNDER.story}</p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <ul className="mt-8 space-y-3 border-t border-[rgba(0,0,0,0.08)] pt-6">
                {FOUNDER.qualifications.map((item) => (
                  <li key={item} className="text-sm font-medium text-[#1B2559]/90">
                    — {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="mt-10">
                <Link
                  href="/about"
                  className="group link-underline inline-flex items-center gap-1.5 text-sm font-medium text-[#141414] hover:text-[#3B5BDB]"
                >
                  Meet Our Team
                  <span className="inline-block text-[#3B5BDB] transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 11. 05 Industries */}
      <IndustryGrid />

      {/* 12. Logo wall */}
      <LogoWall />

      {/* 13. 07 Testimonials */}
      <section className="bg-[#F0F3FC] py-32">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <SectionHeading
            number="07"
            eyebrow="Testimonials"
            title="What Our Participants Say"
            subtitle="Feedback from the teams and individuals we've trained."
          />
          <div className="mt-16">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* 14. 08 FAQ */}
      <section className="bg-white py-32">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <SectionHeading
            number="08"
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know before booking your training."
          />
          <div className="mt-16">
            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* 15. Final CTA */}
      <CTABanner />
    </>
  );
}
