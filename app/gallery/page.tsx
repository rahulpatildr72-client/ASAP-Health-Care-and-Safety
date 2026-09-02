import type { Metadata } from "next";
import Lightbox, { type GalleryImage } from "@/components/Lightbox";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import FadeIn from "@/components/FadeIn";
import { SITE_NAME } from "@/data/site";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "See our First Aid, CPR and safety training in action — hands-on sessions with corporate teams, schools and institutions.",
  openGraph: {
    title: `Gallery | ${SITE_NAME}`,
    description: "Our First Aid, CPR and safety training sessions in action.",
  },
};

const IMAGES: GalleryImage[] = [
  { src: "/hero-cpr.jpg", alt: "Chest compressions on a CPR training mannequin", width: 1024, height: 643 },
  { src: "/first-aid-training.png", alt: "Instructor demonstrating bandaging during first aid practice", width: 1024, height: 1024 },
  { src: "/aed-training.png", alt: "Attaching AED pads to a training mannequin", width: 1024, height: 1024 },
  { src: "/meditation-yoga.jpg", alt: "Meditation and yoga wellness session", width: 1200, height: 1395 },
  { src: "/fire-safety.webp", alt: "Fire safety and extinguisher training session", width: 1000, height: 667 },
  { src: "/corporate-training.png", alt: "Corporate team practicing CPR during an onsite session", width: 1024, height: 1024 },
  { src: "/choking-response.png", alt: "Choking response demonstration in a classroom", width: 1024, height: 1024 },
  { src: "/stress-management-inner.jpg", alt: "Stress management workshop for office teams", width: 1170, height: 777 },
  { src: "/ert-training.png", alt: "Emergency Response Team drill in an industrial facility", width: 1024, height: 1024 },
  { src: "/health-safety-training.png", alt: "Workplace safety briefing on a factory floor", width: 1024, height: 1024 },
  { src: "/cpr-training.png", alt: "Trainer guiding CPR technique on a mannequin", width: 1024, height: 1024 },
  { src: "/posh-awareness.webp", alt: "POSH awareness workshop for office staff", width: 1024, height: 1024 },
  { src: "/female-healthcare.png", alt: "Female healthcare and wellbeing awareness session", width: 1024, height: 1024 },
  { src: "/counselling-wellbeing.png", alt: "Counselling and mental wellbeing workshop", width: 1024, height: 1024 },
  { src: "/wellness-program.png", alt: "Yoga session during a workplace wellness program", width: 1024, height: 1024 },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero breadcrumb={[{ label: "Gallery" }]}>
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            as="h1"
            tone="light"
            eyebrow="Gallery"
            titleLight="Training"
            title="In Action"
            subtitle="Real skills, real practice — a look inside our hands-on First Aid, CPR and safety training sessions."
          />
        </div>
      </PageHero>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <FadeIn>
            <Lightbox images={IMAGES} />
          </FadeIn>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
