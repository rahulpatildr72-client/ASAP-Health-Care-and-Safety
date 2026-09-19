import type { Metadata } from "next";
import Image from "next/image";
import {
  BadgeCheck,
  Eye,
  Target,
  Users,
  CircleCheck,
  Hand,
  ShieldCheck,
  UserCheck,
  Lightbulb,
  Building2,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import TrustBar from "@/components/TrustBar";
import CTABanner from "@/components/CTABanner";
import PageHero from "@/components/PageHero";
import FounderPortrait from "@/components/FounderPortrait";
import FadeIn from "@/components/FadeIn";
import { FOUNDER, SITE_NAME } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${SITE_NAME} — our story, our founder, and our mission to build confident lifesavers through professional First Aid, CPR and safety training.`,
  openGraph: {
    title: `About Us | ${SITE_NAME}`,
    description: `Our story, our founder, and our mission to build confident lifesavers.`,
  },
};


const EXPERTISE = [
  "Practical demonstrations",
  "CPR and AED demonstrations",
  "First-aid demonstrations",
  "Emergency-response scenarios",
  "Case-based learning",
  "Interactive discussions",
  "Question-and-answer sessions",
  "Workplace and community-specific examples",
];

const WHY_US = [
  {
    icon: UserCheck,
    title: "Doctor-Led Training",
    description: "Learn from trainers with practical knowledge of health and safety.",
  },
  {
    icon: Hand,
    title: "Practical Learning",
    description: "Focus on demonstrations, activities, and real-world situations.",
  },
  {
    icon: Lightbulb,
    title: "Clear & Easy to Understand",
    description: "Training is explained in a simple and practical way.",
  },
  {
    icon: Building2,
    title: "Organization Focused",
    description: "Programs can be adapted to the needs of different organizations.",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    description: "Encourages awareness, preparedness, and responsible action.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero breadcrumb={[{ label: "About Us" }]}>
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            as="h1"
            tone="light"
            weight="medium"
            title="About ASAP Health & Safety"
            subtitle="Born from two decades of frontline emergency experience, we exist for one reason: to make sure that when an emergency happens, someone nearby knows exactly what to do."
          />
        </div>
      </PageHero>

      {/* Our Story (reference: Who We Are split) */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading title="Our Story" />
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border-4 border-white shadow-lg">
              <Image
                src="/health-safety-training.png"
                alt="Industrial safety training session on a factory floor"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 left-4 w-[40%] overflow-hidden rounded-xl border-4 border-white shadow-lg sm:left-6">
              <div className="relative aspect-square">
                <Image
                  src="/cpr-training.png"
                  alt="Trainer guiding a participant through chest compressions"
                  fill
                  sizes="20vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute -top-4 right-4 flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-md sm:right-6">
              <span className="icon-square h-10 w-10 rounded-lg">
                <Users className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-[1.1rem] font-extrabold leading-none text-primary">30,000+</p>
                <p className="mt-0.5 text-[0.7rem] font-medium text-gray-500">Lifesavers trained</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="space-y-4 text-[1rem] leading-[1.8] text-gray-700 sm:text-[1.05rem]">
              <p className="font-display text-[1.15rem] font-bold text-gray-900 sm:text-[1.25rem]">
                Training people to be ready when safety matters most.
              </p>
              <p>
                ASAP is supported by a team of doctors, healthcare and safety professionals with relevant
                experience in healthcare, emergency response, first aid, CPR, AED, workplace
                health and safety, preventive healthcare and health education.
              </p>
              <p>
                Our professional team includes doctors with relevant clinical and training
                qualifications, including professionals with AHA BLS Instructor credentials, where
                applicable.
              </p>
              <p className="rounded-xl border-l-4 border-primary bg-primary-light/60 px-5 py-4 font-medium text-primary-dark">
                People don&apos;t rise to the occasion in an emergency — they fall back on their
                training. So we make sure the training is worth falling back on.
              </p>
            </div>
          </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Training Expertise */}
      <section className="bg-off-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Our Training Expertise"
            title="Doctor-Led Training"
            subtitle="At ASAP, our core health and safety training sessions are conducted by doctors and safety experts respectively, bringing medical knowledge, clinical understanding and practical healthcare experience directly into the training environment."
          />
          <FadeIn>
            <p className="mb-6 text-center font-display text-[1.15rem] font-semibold text-gray-900 sm:text-[1.25rem]">
              Our doctors use:
            </p>
          </FadeIn>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {EXPERTISE.map((item, i) => (
              <FadeIn key={item} delay={i * 0.04}>
                <li className="flex h-full items-center gap-3.5 rounded-xl border border-gray-200 bg-white px-5 py-4 transition-colors hover:border-primary/40 hover:bg-primary-light/60">
                  <CircleCheck className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-[0.95rem] font-semibold text-gray-800">{item}</span>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      {/* Experience Behind ASAP */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading align="center" title="Experience Behind ASAP" />
          <FadeIn>
            <div className="mx-auto max-w-3xl space-y-5 text-center text-[1rem] leading-[1.8] text-gray-700 sm:text-[1.1rem]">
              <p>
                The professional experience supporting ASAP includes many years of first-aid
                training, clinical healthcare exposure, BLS/CPR training and healthcare-management
                knowledge.
              </p>
              <p>
                Our programmes are designed for corporates, industries, educational institutions,
                healthcare organisations, communities and individuals, with content adapted
                according to the needs of each group.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why ASAP Health & Safety? */}
      <section className="bg-off-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Why Choose Us"
            title="Why ASAP Health & Safety?"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
            {WHY_US.map(({ icon: Icon, title, description }, i) => (
              <FadeIn key={title} delay={i * 0.08} className="h-full">
                <div className="group h-full rounded-2xl border border-gray-200 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
                  <span className="icon-square mx-auto mb-4 h-14 w-14 rounded-2xl group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-[1.05rem] font-semibold leading-snug text-gray-900">{title}</h3>
                  <p className="mt-2 text-[0.875rem] leading-[1.6] text-gray-600">{description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Key figures */}
      <TrustBar />

      {/* Vision & Mission (reference: vmCard grid) */}
      <section className="bg-off-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading align="center" title="Our Vision & Mission" />
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            <FadeIn className="card p-8 sm:p-10">
              <span className="icon-square mb-5 h-14 w-14">
                <Eye className="h-6 w-6" />
              </span>
              <span className="tag-pill mb-3">Vision</span>
              <h2 className="font-display text-[1.5rem] font-semibold text-gray-900">Our Vision</h2>
              <p className="mt-3 leading-[1.7] text-gray-600">{FOUNDER.vision}</p>
            </FadeIn>
            <FadeIn delay={0.1} className="card p-8 sm:p-10">
              <span className="icon-square mb-5 h-14 w-14">
                <Target className="h-6 w-6" />
              </span>
              <span className="tag-pill mb-3">Mission</span>
              <h2 className="font-display text-[1.5rem] font-semibold text-gray-900">Our Mission</h2>
              <p className="mt-3 leading-[1.7] text-gray-600">{FOUNDER.mission}</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Founder (reference: leadership card) */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading align="center" eyebrow="Founder" title={FOUNDER.name} />
          <FadeIn>
            <div className="flex flex-col items-center gap-8 rounded-2xl bg-off-white p-7 sm:p-10 md:flex-row md:items-start md:gap-12">
              <FounderPortrait alt="" />
              <div className="min-w-0 flex-1">
                <div className="space-y-4 border-l-4 border-primary pl-5 text-[1rem] leading-[1.8] text-gray-700 sm:text-[1.05rem]">
                  {FOUNDER.story.map((para) => (
                    <p key={para.slice(0, 40)}>{para}</p>
                  ))}
                </div>
                <p className="mt-5 font-display text-[1.15rem] font-bold text-gray-900">{FOUNDER.name}</p>
                <p className="text-[0.9rem] font-bold text-gray-900">{FOUNDER.role}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="bg-off-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading align="center" title="Our Commitment" />
          <FadeIn>
            <p className="mx-auto max-w-3xl text-center text-[1rem] leading-[1.8] text-gray-700 sm:text-[1.1rem]">
              At ASAP Healthcare and Safety, our goal is not simply to conduct training sessions.
              We aim to build confidence, improve preparedness and promote a culture of prevention
              and responsible action by making essential health and safety knowledge accessible to
              more people.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mx-auto mt-10 max-w-3xl text-center">
              <span className="mx-auto mb-5 block h-1 w-14 rounded-full bg-accent" aria-hidden="true" />
              <p className="font-display text-[1.25rem] font-bold text-gray-900 sm:text-[1.5rem]">
                ASAP Healthcare and Safety
              </p>
              <p className="mt-2 font-display text-[1.05rem] font-semibold text-primary sm:text-[1.2rem]">
                Empowering People. Promoting Health. Protecting Life.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
