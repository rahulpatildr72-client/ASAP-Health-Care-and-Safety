import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, Share2, Facebook, Instagram, Linkedin } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";
import { CONTACT, SITE_NAME, SITE_URL, SOCIAL_LINKS } from "@/data/site";

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

const SOCIAL_ICONS = { facebook: Facebook, instagram: Instagram, linkedin: Linkedin } as const;

const infoItems = [
  { icon: Phone, label: "Phone", value: CONTACT.phone, href: CONTACT.phoneHref },
  { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: MapPin, label: "Location", value: CONTACT.location },
];

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

                {/* Social profiles */}
                <li className="card p-5 hover:border-primary-light">
                  <div className="flex items-center gap-3">
                    <span className="icon-square h-10 w-10 shrink-0 rounded-lg">
                      <Share2 className="h-4.5 w-4.5" />
                    </span>
                    <p className="text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-gray-500">Follow us</p>
                  </div>
                  <div className="mt-3 flex items-center gap-2.5">
                    {SOCIAL_LINKS.map(({ label, href, icon }) => {
                      const Icon = SOCIAL_ICONS[icon];
                      const external = href.startsWith("http");
                      return (
                        <a
                          key={label}
                          href={href}
                          aria-label={label}
                          target={external ? "_blank" : undefined}
                          rel={external ? "noopener noreferrer" : undefined}
                          className="icon-square h-10 w-10 rounded-lg hover:-translate-y-0.5 hover:bg-primary hover:text-white"
                        >
                          <Icon className="h-4.5 w-4.5" />
                        </a>
                      );
                    })}
                  </div>
                </li>
              </ul>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <EnquiryForm />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
