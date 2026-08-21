import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import SplitSection from "@/components/SplitSection";
import LogoWall from "@/components/LogoWall";
import HowItWorks from "@/components/HowItWorks";
import CTABanner from "@/components/CTABanner";
import FadeIn from "@/components/FadeIn";
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
    title: "Onsite, At Your Premises",
    description:
      "We bring certified trainers, CPR mannequins, AED trainer units and first aid equipment to your office, plant, hotel or campus — so your teams train in the environment where they would actually respond.",
  },
  {
    title: "Compliance Support",
    description:
      "Indian workplace regulations, including the Factories Act, require designated trained first aiders and stocked first aid arrangements at many workplaces. Our programs help your organization train and certify those first aiders. (Confirm the exact requirements applicable to your establishment with your compliance team.)",
  },
  {
    title: "Built for Groups",
    description:
      "From a single department to a multi-site rollout, we structure batches so every participant gets genuine hands-on practice — not a seat in a crowded lecture.",
  },
];

export default function CorporatePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-[#E4E7FB] to-[#F0F3FC] pb-20 pt-36 sm:pt-44">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            as="h1"
            eyebrow="Corporate Training"
            titleLight="Emergency-Ready Teams,"
            title="Built On Site"
            subtitle="Train your employees to respond confidently to medical and accidental emergencies — with programs customized to your organization, delivered onsite or live online."
          />
          <FadeIn delay={0.2} className="mt-10">
            <Link
              href="/contact"
              className="group link-underline inline-flex items-center gap-1.5 text-base font-semibold text-[#141414] hover:text-[#3B5BDB]"
            >
              Request a Group Training Quote
              <span className="inline-block text-[#3B5BDB] transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-white py-24 border-t border-[rgba(0,0,0,0.08)]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-px bg-[rgba(0,0,0,0.08)] lg:grid-cols-3 border border-[rgba(0,0,0,0.08)]">
            {pillars.map(({ title, description }, i) => (
              <FadeIn key={title} delay={i * 0.1} className="bg-white p-8">
                <span className="font-mono text-xs font-semibold text-[#3B5BDB] block mb-3">0{i + 1}</span>
                <h2 className="font-display text-xl font-bold text-[#141414]">{title}</h2>
                <p className="mt-3 leading-relaxed text-[#1B2559]/75 text-sm">{description}</p>
              </FadeIn>
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
      <section className="bg-white py-32 border-t border-[rgba(0,0,0,0.08)]">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <SectionHeading
            eyebrow="Group Pricing"
            title="Get a Quote for Your Team"
            subtitle="Tell us your headcount, locations and preferred training mode — we'll come back with a program plan and group pricing."
          />
          <FadeIn delay={0.2} className="mt-10 flex justify-center">
            <Link
              href="/contact"
              className="group link-underline inline-flex items-center gap-1.5 text-base font-semibold text-[#141414] hover:text-[#3B5BDB]"
            >
              Request Group Pricing
              <span className="inline-block text-[#3B5BDB] transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </FadeIn>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
