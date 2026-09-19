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
  { src: "/gallery/training-01.jpg", alt: "Women's health and hygiene awareness session for a village community", width: 1280, height: 960 },
  { src: "/gallery/training-02.jpg", alt: "Checking responsiveness during an outdoor emergency response drill", width: 1280, height: 720 },
  { src: "/gallery/training-03.jpg", alt: "CPR practice on a mannequin with an AED trainer at an industrial site", width: 960, height: 1280 },
  { src: "/gallery/training-04.jpg", alt: "Participant performing chest compressions on a CPR mannequin", width: 572, height: 769 },
  { src: "/gallery/training-05.jpg", alt: "Infant CPR demonstration during a corporate training session", width: 960, height: 1280 },
  { src: "/gallery/training-06.jpg", alt: "Choking response demonstration with security staff", width: 960, height: 1280 },
  { src: "/gallery/training-07.jpg", alt: "Hands-on infant first aid practice with a training doll", width: 960, height: 1280 },
  { src: "/gallery/training-08.jpg", alt: "Learning to operate an AED trainer with pads attached to a mannequin", width: 960, height: 1280 },
  { src: "/gallery/training-09.jpg", alt: "Infant AED and CPR practice during an onsite session", width: 720, height: 1280 },
  { src: "/gallery/training-10.jpg", alt: "Bandaging practice during first aid training", width: 1280, height: 960 },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero breadcrumb={[{ label: "Gallery" }]}>
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            as="h1"
            tone="light"
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
