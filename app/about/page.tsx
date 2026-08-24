import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import TrustBar from "@/components/TrustBar";
import ParallaxImage from "@/components/ParallaxImage";
import RevealText from "@/components/RevealText";
import FadeIn from "@/components/FadeIn";
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
      <section className="bg-gradient-to-b from-[#E4E7FB] to-[#F0F3FC] pb-20 pt-36 sm:pt-44">
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
      <section className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-2xl font-bold text-[#141414] sm:text-3xl">Our Story</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-[#1B2559]/80">
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
          </FadeIn>
        </div>
      </section>

      {/* Training approach */}
      <section className="bg-white py-24 border-t border-[rgba(0,0,0,0.08)]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            number="01"
            eyebrow="Our Approach"
            title="Until Response Becomes Reflex"
            subtitle="Attendance doesn't save lives — competence does. Every program is designed around how people actually behave under pressure."
          />
          <div className="mt-16 grid gap-px bg-[rgba(0,0,0,0.08)] lg:grid-cols-3 border border-[rgba(0,0,0,0.08)]">
            {[
              {
                title: "Scenario-Driven Practice",
                description:
                  "Mannequins, AED trainer units and realistic drills — participants rehearse real emergencies, not abstract theory, until the right response comes automatically.",
              },
              {
                title: "Built for Pressure",
                description:
                  "Real emergencies bring panic, noise and hesitation. Training deliberately accounts for how people respond under stress, so skills hold up when it counts.",
              },
              {
                title: "Demonstrated Competence",
                description:
                  "Participants show they can perform the skills hands-on before completing the program — certification reflects ability, not just attendance.",
              },
            ].map(({ title, description }, i) => (
              <FadeIn key={title} delay={i * 0.1} className="bg-white p-8">
                <span className="font-mono text-xs font-semibold text-[#3B5BDB] block mb-3">0{i + 1}</span>
                <h3 className="font-display text-xl font-bold text-[#141414]">{title}</h3>
                <p className="mt-3 leading-relaxed text-[#1B2559]/75">{description}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-[#F0F3FC] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <FadeIn className="border border-[rgba(0,0,0,0.08)] bg-white p-10">
              <span className="font-mono text-xs font-semibold text-[#3B5BDB] block mb-2">VISION</span>
              <h2 className="font-display text-2xl font-bold text-[#141414]">Our Vision</h2>
              <p className="mt-4 text-lg leading-relaxed text-[#1B2559]/80">{FOUNDER.vision}</p>
            </FadeIn>
            <FadeIn delay={0.1} className="border border-[rgba(0,0,0,0.08)] bg-white p-10">
              <span className="font-mono text-xs font-semibold text-[#3B5BDB] block mb-2">MISSION</span>
              <h2 className="font-display text-2xl font-bold text-[#141414]">Our Mission</h2>
              <p className="mt-4 text-lg leading-relaxed text-[#1B2559]/80">{FOUNDER.mission}</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Founder profile */}
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
                Founder &amp; Lead Trainer
              </p>
            </FadeIn>
            <RevealText as="h2" className="font-display text-3xl font-bold tracking-tight text-[#141414] sm:text-4xl">
              {FOUNDER.name}
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
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-[#F0F3FC] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            number="02"
            eyebrow="Standards & Credentials"
            title="Built Around Recognized Standards"
            subtitle="Accreditation logos and certificates will be displayed here once confirmed and supplied by the organization."
          />
          <div className="mt-16 grid gap-px bg-[rgba(0,0,0,0.08)] sm:grid-cols-2 lg:grid-cols-4 border border-[rgba(0,0,0,0.08)]">
            {CREDENTIALS.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1} className="bg-white p-8">
                <span className="font-mono text-xs font-semibold text-[#3B5BDB] block mb-3">0{i + 1}</span>
                <h3 className="font-display text-lg font-bold text-[#141414]">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#1B2559]/75">
                  {item.description}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <TrustBar />
      <CTABanner />
    </>
  );
}
