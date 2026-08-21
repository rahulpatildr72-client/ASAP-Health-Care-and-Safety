import type { Metadata } from "next";
import Lightbox, { type GalleryImage } from "@/components/Lightbox";
import SectionHeading from "@/components/SectionHeading";
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
  {
    src: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&w=900&q=80",
    alt: "Trainer demonstrating CPR technique on a mannequin",
    width: 900,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=900&q=80",
    alt: "Participant practicing chest compressions during a training session",
    width: 900,
    height: 1200,
  },
  {
    src: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80",
    alt: "Hands-on bandaging practice with first aid equipment",
    width: 900,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
    alt: "AED demonstration during a group workshop",
    width: 900,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80",
    alt: "Corporate team attending an onsite safety training session",
    width: 900,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    alt: "Group discussion during a customized corporate workshop",
    width: 900,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80",
    alt: "Medical professional leading a training session",
    width: 900,
    height: 1125,
  },
  {
    src: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=80",
    alt: "First aid supplies and protective equipment ready for training",
    width: 900,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=900&q=80",
    alt: "Healthcare professionals reviewing emergency procedures together",
    width: 900,
    height: 600,
  },
];

export default function GalleryPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-[#E4E7FB] to-[#F0F3FC] pb-20 pt-36 sm:pt-44">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            as="h1"
            eyebrow="Gallery"
            titleLight="Training"
            title="In Action"
            subtitle="Real skills, real practice — a look inside our hands-on First Aid, CPR and safety training sessions."
          />
        </div>
      </section>

      <section className="bg-white py-24 border-t border-[rgba(0,0,0,0.08)]">
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
