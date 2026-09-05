import type { Metadata } from "next";
import Image from "next/image";
import { Activity, Siren, BadgeCheck, Eye, Target, Users } from "lucide-react";
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

const APPROACH = [
  {
    icon: Activity,
    title: "Scenario-Driven Practice",
    description:
      "Mannequins, AED trainer units and realistic drills — participants rehearse real emergencies, not abstract theory, until the right response comes automatically.",
  },
  {
    icon: Siren,
    title: "Built for Pressure",
    description:
      "Real emergencies bring panic, noise and hesitation. Training deliberately accounts for how people respond under stress, so skills hold up when it counts.",
  },
  {
    icon: BadgeCheck,
    title: "Demonstrated Competence",
    description:
      "Participants show they can perform the skills hands-on before completing the program — certification reflects ability, not just attendance.",
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
              <p className="font-display text-[1.15rem] font-semibold text-gray-900 sm:text-[1.25rem]">
                Training people to be ready when safety matters most.
              </p>
              <p>
                Emergencies can happen anywhere — at a workplace, hotel, gym, school, or in
                everyday life. In those important first moments, knowing what to do can make a
                real difference. V-Safe World was created with a simple goal: to make practical
                safety, emergency response, and wellbeing training accessible to organizations and
                individuals.
              </p>
              <p>
                We provide practical training programs covering First Aid, CPR, AED, Fire Safety,
                Emergency Response, POSH, Stress Management, Mental Wellbeing, Nutrition, Yoga,
                Meditation, and Women&apos;s Health.
              </p>
              <p>
                Our approach goes beyond simply explaining procedures. We focus on clear guidance,
                practical learning, demonstrations, and confidence-building so participants can
                better understand how to respond when they need those skills.
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
          <SectionHeading align="center" eyebrow="Founder & Lead Trainer" title={FOUNDER.name} />
          <FadeIn>
            <div className="flex flex-col items-center gap-8 rounded-2xl bg-off-white p-7 sm:p-10 md:flex-row md:items-start md:gap-12">
              <FounderPortrait
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80"
                alt={`Professional portrait of ${FOUNDER.name}, founder and lead trainer`}
              />
              <div className="min-w-0 flex-1">
                <blockquote className="border-l-4 border-primary pl-5 text-[1rem] italic leading-[1.7] text-gray-700 sm:text-[1.15rem]">
                  {FOUNDER.story}
                </blockquote>
                <p className="mt-5 font-display text-[1.1rem] font-semibold text-gray-900">{FOUNDER.name}</p>
                <p className="text-[0.85rem] text-gray-500">{FOUNDER.role}</p>
                <ul className="mt-6 grid gap-3 border-t border-gray-200 pt-6 sm:grid-cols-2">
                  {FOUNDER.qualifications.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[0.875rem] font-medium text-gray-800">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Training approach */}
      <section className="bg-off-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Our Approach"
            title="Until Response Becomes Reflex"
            subtitle="Attendance doesn't save lives — competence does. Every program is designed around how people actually behave under pressure."
          />

          <FadeIn className="mx-auto mb-12 max-w-4xl">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border-4 border-white shadow-lg">
              <Image
                src="/first-aid-training.png"
                alt="Instructor bandaging a participant's arm during first aid practice"
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <p className="mt-4 text-center text-[0.9rem] text-gray-600">
              <span className="font-semibold uppercase tracking-[0.08em] text-primary">Hands-on, always</span>
              {" — "}
              Mannequins, AED trainers, bandages and real equipment in every session.
            </p>
          </FadeIn>

          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {APPROACH.map(({ icon: Icon, title, description }, i) => (
              <FadeIn key={title} delay={i * 0.1} className="h-full">
                <div className="group relative h-full overflow-hidden rounded-2xl bg-white p-8 text-center shadow-sm transition-all duration-300 before:absolute before:inset-x-0 before:top-0 before:h-1 before:origin-left before:scale-x-0 before:bg-primary before:transition-transform before:duration-300 before:content-[''] hover:-translate-y-2 hover:shadow-lg hover:before:scale-x-100">
                  <span className="icon-square mx-auto mb-6 h-[70px] w-[70px] rounded-2xl group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="font-display text-[1.15rem] font-semibold text-gray-900">{title}</h3>
                  <p className="mt-2 text-[0.9rem] leading-[1.6] text-gray-600">{description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
