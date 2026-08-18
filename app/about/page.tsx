import type { Metadata } from "next";
import Image from "next/image";
import { Activity, BadgeCheck, Brain, ClipboardCheck, Compass, Eye, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import TrustBar from "@/components/TrustBar";
import { CREDENTIALS, FOUNDER, SITE_NAME } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${SITE_NAME} — our story, our founder, and our mission to build confident lifesavers through professional First Aid, CPR and safety training.`,
  openGraph: {
    title: `About Us | ${SITE_NAME}`,
    description: `Our story, our founder, and our mission to build confident lifesavers.`,
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-peri-wash-soft pb-16 pt-36 sm:pt-40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            as="h1"
            eyebrow="About Us"
            titleLight="We Train People to Respond"
            title="When Lives Depend On It"
            subtitle="Born from two decades of frontline emergency experience, we exist for one reason: to make sure that when an emergency happens, someone nearby knows exactly what to do."
          />
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">Our Story</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-navy-600">
              <p>
                Most medical emergencies are decided before the ambulance arrives. Cardiac arrest,
                choking, severe bleeding — in each case, the first three to five minutes belong not
                to doctors, but to whoever happens to be standing nearby. That simple, sobering fact
                is why this organization exists.
              </p>
              <p>
                What began as one doctor&apos;s conviction has grown into a training organization
                that has equipped thousands of employees, teachers, hospitality teams, security
                staff, parents and individuals — across India and internationally — with practical,
                hands-on lifesaving skills.
              </p>
              <p>
                Every program we run is built on the same principle: people don&apos;t rise to the
                occasion in an emergency, they fall back on their training. So we make sure the
                training is worth falling back on.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Training approach */}
      <section className="bg-white pb-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Our Approach"
            title="Until Response Becomes Reflex"
            subtitle="Attendance doesn't save lives — competence does. Every program is designed around how people actually behave under pressure."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[
              {
                icon: Activity,
                title: "Scenario-Driven Practice",
                description:
                  "Mannequins, AED trainer units and realistic drills — participants rehearse real emergencies, not abstract theory, until the right response comes automatically.",
              },
              {
                icon: Brain,
                title: "Built for Pressure",
                description:
                  "Real emergencies bring panic, noise and hesitation. Training deliberately accounts for how people respond under stress, so skills hold up when it counts.",
              },
              {
                icon: ClipboardCheck,
                title: "Demonstrated Competence",
                description:
                  "Participants show they can perform the skills hands-on before completing the program — certification reflects ability, not just attendance.",
              },
            ].map(({ icon: Icon, title, description }, i) => (
              <Reveal key={title} delay={i * 0.1}>
                <div className="flex h-full flex-col rounded-3xl bg-white p-8 shadow-card ring-1 ring-navy-300/15">
                  <span className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-aqua-50 text-aqua-600">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h2 className="font-display text-xl font-bold text-navy-900">{title}</h2>
                  <p className="mt-3 leading-relaxed text-navy-600">{description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-peri-100/60 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="flex h-full flex-col rounded-3xl bg-white p-10 shadow-card ring-1 ring-navy-300/15">
                <span className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <Eye className="h-7 w-7" aria-hidden="true" />
                </span>
                <h2 className="font-display text-2xl font-bold text-navy-900">Our Vision</h2>
                <p className="mt-4 text-lg leading-relaxed text-navy-600">{FOUNDER.vision}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex h-full flex-col rounded-3xl bg-white p-10 shadow-card ring-1 ring-navy-300/15">
                <span className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-aqua-50 text-aqua-600">
                  <Compass className="h-7 w-7" aria-hidden="true" />
                </span>
                <h2 className="font-display text-2xl font-bold text-navy-900">Our Mission</h2>
                <p className="mt-4 text-lg leading-relaxed text-navy-600">{FOUNDER.mission}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Founder profile (expanded) */}
      <section className="bg-white py-24">
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
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-3">
            <span className="mb-4 inline-flex items-center rounded-full bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-700 ring-1 ring-brand-100">
              Founder &amp; Lead Trainer
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              {FOUNDER.name}
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
          </Reveal>
        </div>
      </section>

      {/* Certifications — placeholder slots only */}
      <section className="bg-peri-100/60 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Standards & Credentials"
            title="Built Around Recognized Standards"
            subtitle="Accreditation logos and certificates will be displayed here once confirmed and supplied by the organization."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CREDENTIALS.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="flex h-full flex-col items-center rounded-3xl bg-white p-8 text-center shadow-card ring-1 ring-navy-300/15">
                  {/* PLACEHOLDER SLOT — replace with the official accreditation logo once confirmed. */}
                  <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-600">
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

      <TrustBar />
      <div className="pt-24">
        <CTABanner />
      </div>
    </>
  );
}
