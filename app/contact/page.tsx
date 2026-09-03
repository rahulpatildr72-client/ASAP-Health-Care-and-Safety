import type { Metadata } from "next";
import { Phone, Mail, MapPin, Globe, MessageCircle, Clock, ExternalLink } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";
import { CONTACT, SITE_NAME, SITE_URL } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact & Book Training",
  description:
    "Book First Aid, CPR, AED or Health & Safety training for your team or yourself. Onsite across India, live online worldwide. Get in touch for a training plan and quote.",
  openGraph: {
    title: `Contact & Book Training | ${SITE_NAME}`,
    description: "Book First Aid, CPR, AED or Health & Safety training for your team or yourself.",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: SITE_URL,
  telephone: CONTACT.phone,
  email: CONTACT.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  areaServed: "India",
  description:
    "Professional First Aid, CPR, AED and Health & Safety training for organizations and individuals — onsite across India and live online worldwide.",
};

const infoItems = [
  { icon: Phone, label: "Phone", value: CONTACT.phone, href: CONTACT.phoneHref },
  { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: MapPin, label: "Location", value: CONTACT.location },
  { icon: Globe, label: "Online Training", value: CONTACT.onlineNote },
];

const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.location)}`;
const waHref = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
  "Hello! I'd like to enquire about a training session."
)}`;

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      <PageHero breadcrumb={[{ label: "Contact" }]}>
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            as="h1"
            tone="light"
            weight="medium"
            title="Contact"
            subtitle="Tell us about your team and your training needs — we'll get back to you with a program and a plan."
          />
          <FadeIn delay={0.25}>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-[0.8rem] font-semibold text-white backdrop-blur-[10px]">
              <Clock className="h-3.5 w-3.5 text-accent" />
              Typical response within 24 hours
            </div>
          </FadeIn>
        </div>
      </PageHero>

      {/* Enquiry (reference: Get In Touch grid) */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8 [&>*]:min-w-0">
          <FadeIn delay={0.1}>
            <EnquiryForm />
          </FadeIn>

          <div className="space-y-5">
            <FadeIn delay={0.2}>
              <ul className="grid gap-4 sm:grid-cols-2">
                {infoItems.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="card p-5 hover:border-primary-light">
                    <div className="flex items-center gap-3">
                      <span className="icon-square h-10 w-10 shrink-0 rounded-lg">
                        <Icon className="h-4.5 w-4.5" />
                      </span>
                      <p className="text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-gray-500">{label}</p>
                    </div>
                    {href ? (
                      <a href={href} className="mt-3 block break-words font-display text-[1rem] font-semibold text-gray-900 transition-colors hover:text-primary">
                        {value}
                      </a>
                    ) : (
                      <p className="mt-3 font-display text-[1rem] font-semibold text-gray-900">{value}</p>
                    )}
                  </li>
                ))}
              </ul>
            </FadeIn>

            {/* WhatsApp quick card */}
            <FadeIn delay={0.3}>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl bg-[#25D366] p-5 text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/20">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-display text-[1rem] font-semibold">Prefer WhatsApp?</p>
                  <p className="text-[0.85rem] text-white/90">Chat with us directly — quick answers on dates, batches and pricing.</p>
                </div>
                <ExternalLink className="h-4 w-4 shrink-0 opacity-80 transition-transform group-hover:translate-x-0.5" />
              </a>
            </FadeIn>

            {/* Location panel (PLACEHOLDER for a real map embed; reference: enquiryMap) */}
            <FadeIn delay={0.4}>
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-100">
                <div className="relative h-48 bg-primary-light/60">
                  <div aria-hidden="true" className="absolute inset-0 opacity-70">
                    <div className="absolute left-0 right-0 top-[38%] h-2 -rotate-6 bg-white" />
                    <div className="absolute left-0 right-0 top-[68%] h-1.5 rotate-3 bg-white/90" />
                    <div className="absolute bottom-0 top-0 left-[30%] w-1.5 rotate-12 bg-white/90" />
                    <div className="absolute bottom-0 top-0 left-[72%] w-2 -rotate-6 bg-white" />
                  </div>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="relative flex h-12 w-12 items-center justify-center">
                      <span className="animate-ring absolute inset-0 rounded-full bg-primary/40" />
                      <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-lg ring-4 ring-white">
                        <MapPin className="h-5 w-5" />
                      </span>
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3 bg-white px-5 py-4">
                  <div className="min-w-0">
                    <p className="text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-gray-500">Training centre</p>
                    <p className="truncate text-[0.95rem] font-semibold text-gray-900">{CONTACT.location}</p>
                  </div>
                  <a href={mapsHref} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm shrink-0">
                    Open map <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
