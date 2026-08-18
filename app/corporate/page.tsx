import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, ScrollText, Users2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SplitSection from "@/components/SplitSection";
import LogoWall from "@/components/LogoWall";
import HowItWorks from "@/components/HowItWorks";
import CTABanner from "@/components/CTABanner";
import { SITE_NAME } from "@/data/site";

export const metadata: Metadata = {
  title: "Corporate Training",
  description:
    "Onsite and online First Aid, CPR, AED and safety training for corporate teams — customized programs, statutory first-aider compliance support, and group training across India.",
  openGraph: {
    title: `Corporate Training | ${SITE_NAME}`,
    description:
      "Customized First Aid, CPR and safety training for corporate teams — onsite, online, and compliant.",
  },
};

const pillars = [
  {
    icon: Building2,
    title: "Onsite, At Your Premises",
    description:
      "We bring certified trainers, CPR mannequins, AED trainer units and first aid equipment to your office, plant, hotel or campus — so your teams train in the environment where they would actually respond.",
  },
  {
    icon: ScrollText,
    title: "Compliance Support",
    description:
      "Indian workplace regulations, including the Factories Act, require designated trained first aiders and stocked first aid arrangements at many workplaces. Our programs help your organization train and certify those first aiders. (Confirm the exact requirements applicable to your establishment with your compliance team.)",
  },
  {
    icon: Users2,
    title: "Built for Groups",
    description:
      "From a single department to a multi-site rollout, we structure batches so every participant gets genuine hands-on practice — not a seat in a crowded lecture.",
  },
];

export default function CorporatePage() {
  return (
    <>
      <section className="bg-peri-wash-soft pb-16 pt-36 sm:pt-40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            as="h1"
            eyebrow="Corporate Training"
            titleLight="Emergency-Ready Teams,"
            title="Built On Site"
            subtitle="Train your employees to respond confidently to medical and accidental emergencies — with programs customized to your organization, delivered onsite or live online."
          />
          <Reveal delay={0.15} className="mt-9 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 font-display text-base font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:-translate-y-0.5 hover:bg-brand-700"
            >
              Request a Group Training Quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {pillars.map(({ icon: Icon, title, description }, i) => (
              <Reveal key={title} delay={i * 0.1}>
                <div className="flex h-full flex-col rounded-3xl bg-white p-8 shadow-card ring-1 ring-navy-300/15">
                  <span className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
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

      <SplitSection
        eyebrow="Customization"
        title="A Program Designed Around Your Organization"
        description="We start with your environment — your facilities, your risk profile, your teams and your schedule — and build the training mix around it. First Aid, CPR, AED, choking response and safety modules can be combined into a single session or a phased program."
        points={[
          "Scenario drills based on your actual workplace",
          "Sessions scheduled around shifts and operations",
          "Single batches to company-wide rollouts",
          "Consistent training across multiple sites",
          "Live online options for distributed teams",
          "Certification for successful participants",
        ]}
        ctaLabel="Discuss Your Requirements"
        ctaHref="/contact"
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1100&q=80"
        imageAlt="Corporate team collaborating during a customized emergency response workshop"
        badge={{ value: "250+", label: "Corporate clients trained" }}
        reverse
      />

      <HowItWorks />
      <LogoWall />

      {/* Group pricing enquiry */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <SectionHeading
            eyebrow="Group Pricing"
            title="Get a Quote for Your Team"
            subtitle="Tell us your headcount, locations and preferred training mode — we'll come back with a program plan and group pricing."
          />
          <Reveal delay={0.15} className="mt-9">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 font-display text-base font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:-translate-y-0.5 hover:bg-brand-700"
            >
              Request Group Pricing <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
