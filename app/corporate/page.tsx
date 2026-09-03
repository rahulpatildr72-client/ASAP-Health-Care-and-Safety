import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ShieldCheck, Users, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import SplitSection from "@/components/SplitSection";
import HowItWorks from "@/components/HowItWorks";
import CTABanner from "@/components/CTABanner";
import PageHero from "@/components/PageHero";
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
    icon: MapPin,
    title: "Onsite, At Your Premises",
    description:
      "We bring certified trainers, CPR mannequins, AED trainer units and first aid equipment to your office, plant, hotel or campus — so your teams train in the environment where they would actually respond.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Support",
    description:
      "Indian workplace regulations, including the Factories Act, require designated trained first aiders and stocked first aid arrangements at many workplaces. Our programs help your organization train and certify those first aiders. (Confirm the exact requirements applicable to your establishment with your compliance team.)",
  },
  {
    icon: Users,
    title: "Built for Groups",
    description:
      "From a single department to a multi-site rollout, we structure batches so every participant gets genuine hands-on practice — not a seat in a crowded lecture.",
  },
];

export default function CorporatePage() {
  return (
    <>
      <PageHero breadcrumb={[{ label: "Corporate Training" }]}>
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            as="h1"
            tone="light"
            eyebrow="Corporate Training"
            titleLight="Emergency-Ready Teams,"
            title="Built On Site"
            subtitle="Train your employees to respond confidently to medical and accidental emergencies — with programs customized to your organization, delivered onsite or live online."
          />
          <FadeIn delay={0.2} className="mt-8">
            <Link href="/contact" className="btn btn-accent btn-lg">
              Request a Group Training Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </PageHero>

      {/* Pillars (reference: service cards) */}
      <section className="bg-off-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {pillars.map(({ icon: Icon, title, description }, i) => (
              <FadeIn key={title} delay={i * 0.1} className="h-full">
                <div className="group relative h-full overflow-hidden rounded-2xl bg-white p-8 text-center shadow-sm transition-all duration-300 before:absolute before:inset-x-0 before:top-0 before:h-1 before:origin-left before:scale-x-0 before:bg-primary before:transition-transform before:duration-300 before:content-[''] hover:-translate-y-2 hover:shadow-lg hover:before:scale-x-100">
                  <span className="icon-square mx-auto mb-6 h-[70px] w-[70px] rounded-2xl group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h2 className="font-display text-[1.15rem] font-semibold text-gray-900">{title}</h2>
                  <p className="mt-2 text-[0.9rem] leading-[1.6] text-gray-600">{description}</p>
                </div>
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
        image="/corporate-training.png"
        imageAlt="Corporate team practicing CPR during a customized onsite emergency response workshop"
        badge={{ value: "250+", label: "Corporate clients trained" }}
        reverse
      />

      <HowItWorks />

      {/* Group pricing enquiry */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Group Pricing"
            title="Get a Quote for Your Team"
            subtitle="Tell us your headcount, locations and preferred training mode — we'll come back with a program plan and group pricing."
          />
          <FadeIn delay={0.2} className="flex justify-center">
            <Link href="/contact" className="btn btn-primary btn-lg">
              Request Group Pricing <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
