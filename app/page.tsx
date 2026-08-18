import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, ShieldCheck } from "lucide-react";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import AudienceGrid from "@/components/AudienceGrid";
import CourseCard from "@/components/CourseCard";
import SplitSection from "@/components/SplitSection";
import FeatureCard from "@/components/FeatureCard";
import HowItWorks from "@/components/HowItWorks";
import IndustryGrid from "@/components/IndustryGrid";
import LogoWall from "@/components/LogoWall";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import FAQAccordion from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { COURSES } from "@/data/courses";
import { CREDENTIALS, FOUNDER, SITE_TAGLINE, WHY_US } from "@/data/site";

export const metadata: Metadata = {
  title: "First Aid, CPR & Health Safety Training in India",
  description: SITE_TAGLINE,
};

const experienceLabels = ["Hands-On", "Interactive", "Practical", "Confidence-Building"];

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />

      {/* Training categories */}
      <section className="bg-gradient-to-b from-white to-peri-100/70 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Training Programs"
            title="Training That Prepares You for Real Emergencies"
            subtitle="Hands-on programs delivered onsite, in classrooms and live online — for teams and individuals."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COURSES.map((course, i) => (
              <Reveal key={course.slug} delay={(i % 3) * 0.1}>
                <CourseCard course={course} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AudienceGrid />

      {/* Corporate split */}
      <SplitSection
        eyebrow="Corporate Training"
        title="Turn Your Employees Into Confident First Responders"
        description="Medical and accidental emergencies don't wait for an ambulance. We train your teams to respond quickly and confidently in those critical first minutes — with programs designed around your workplace, your risks and your people."
        points={[
          "Hands-on practical training",
          "Experienced medical professionals",
          "Customized programs",
          "Onsite corporate sessions",
          "Online training options",
          "Certification available",
        ]}
        ctaLabel="Request Corporate Training"
        ctaHref="/corporate"
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1100&q=80"
        imageAlt="Corporate team attending a hands-on first aid training session in a modern office"
        badge={{ value: "250+", label: "Corporate clients trained" }}
      />

      {/* Why choose us */}
      <section className="bg-gradient-to-b from-peri-100/70 to-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Why Us"
            title="Why Organizations Trust Us"
            subtitle="From multinational hotels to schools and factories, teams choose us for one reason: training that actually works in a real emergency."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_US.map((feature, i) => (
              <Reveal key={feature.title} delay={(i % 3) * 0.1}>
                <FeatureCard {...feature} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />

      {/* Training experience */}
      <section className="bg-peri-wash py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <span className="mb-4 inline-flex items-center rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-brand-700 ring-1 ring-brand-100">
                The Training Experience
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
                Don&apos;t Just Learn. Practice.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-navy-700">
                Every session is built around doing — chest compressions on mannequins, AED
                demonstrations, bandaging, choking response drills and realistic scenarios. We
                train until emergency response becomes reflex, because in a real emergency you
                fall back on muscle memory, not slides.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {experienceLabels.map((label) => (
                  <span
                    key={label}
                    className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy-800 shadow-sm ring-1 ring-navy-300/20"
                  >
                    {label}
                  </span>
                ))}
              </div>
              <Link
                href="/gallery"
                className="mt-8 inline-flex items-center gap-1.5 font-display font-semibold text-brand-700 transition-colors hover:text-brand-800"
              >
                See the training in action <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative">
                {/* PLACEHOLDER photo — replace with a real session photo. */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-float">
                  <Image
                    src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1100&q=80"
                    alt="Participant practicing chest compressions on a CPR mannequin under trainer guidance"
                    fill
                    sizes="(max-width: 1024px) 100vw, 576px"
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-4 right-4 rounded-2xl bg-white px-6 py-4 shadow-float">
                  <p className="font-display text-3xl font-extrabold text-brand-600">100%</p>
                  <p className="text-sm font-semibold text-navy-600">Hands-on practice</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Certification / trust — placeholder slots, do not invent claims */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Credibility"
            title="Training Built Around Recognized Standards"
            subtitle="Our programs follow internationally recognized guidelines and are delivered by certified instructors."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CREDENTIALS.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="flex h-full flex-col items-center rounded-3xl border border-brand-100 bg-brand-50/50 p-8 text-center transition-colors duration-300 hover:border-brand-200 hover:bg-brand-50">
                  {/* PLACEHOLDER SLOT — replace icon with the official accreditation logo once confirmed. */}
                  <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-white text-brand-600 shadow-sm ring-1 ring-brand-100">
                    <ShieldCheck className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-lg font-bold text-navy-900">{item.title}</h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-navy-600">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the expert */}
      <section className="bg-gradient-to-b from-white to-peri-100/70 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-5 lg:gap-16 lg:px-8">
          <Reveal className="lg:col-span-2">
            <div className="relative mx-auto max-w-sm">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-float">
                {/* PLACEHOLDER portrait — replace with the founder's real photo. */}
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80"
                  alt={`Professional portrait of ${FOUNDER.name}, founder and lead trainer`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 384px"
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-4 left-4 rounded-2xl bg-white px-6 py-3 shadow-float">
                <p className="font-display font-bold text-navy-900">{FOUNDER.name}</p>
                <p className="text-sm font-medium text-brand-600">{FOUNDER.role}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <span className="mb-4 inline-flex items-center rounded-full bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-700 ring-1 ring-brand-100">
              About the Founder
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Meet the Expert Behind the Training
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-600">{FOUNDER.story}</p>
            <ul className="mt-8 space-y-3">
              {FOUNDER.qualifications.map((item) => (
                <li key={item} className="flex items-start gap-3 font-medium text-navy-800">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-display text-base font-semibold text-navy-800 ring-1 ring-navy-300 transition-all hover:-translate-y-0.5 hover:text-brand-700 hover:ring-brand-400"
              >
                Meet Our Team <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <IndustryGrid />
      <LogoWall />

      {/* Testimonials */}
      <section className="bg-gradient-to-b from-white to-peri-100/70 py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Testimonials"
            title="What Our Participants Say"
            subtitle="Feedback from the teams and individuals we've trained."
          />
          <Reveal className="mt-14">
            <TestimonialCarousel />
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know before booking your training."
          />
          <Reveal className="mt-14">
            <FAQAccordion />
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
