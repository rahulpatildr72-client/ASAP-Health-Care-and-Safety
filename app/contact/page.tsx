import type { Metadata } from "next";
import EnquiryForm from "@/components/EnquiryForm";
import RevealText from "@/components/RevealText";
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
  { label: "Phone", value: CONTACT.phone, href: CONTACT.phoneHref },
  { label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { label: "Location", value: CONTACT.location },
  { label: "Online Training", value: CONTACT.onlineNote },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      <section className="bg-surface pb-24 pt-36 sm:pt-44">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <FadeIn>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-navy-500">
                Contact
              </p>
            </FadeIn>
            <RevealText as="h1" className="font-display text-4xl tracking-tight text-ink sm:text-5xl">
              <span className="block font-light">Let&apos;s Build</span>
              <span className="block font-extrabold">A Safer Workplace</span>
            </RevealText>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg leading-relaxed text-navy-600">
                Tell us about your team and your training needs — we&apos;ll get back to you with a
                program and a plan.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <ul className="mt-12 space-y-6 border-t border-[rgba(0,0,0,0.08)] pt-8">
                {infoItems.map(({ label, value, href }) => (
                  <li key={label} className="border-b border-[rgba(0,0,0,0.08)] pb-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-navy-500 mb-1">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="link-underline font-display text-lg font-bold text-ink"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-display text-lg font-bold text-ink">{value}</p>
                    )}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          <div className="lg:col-span-7">
            <FadeIn delay={0.2}>
              <EnquiryForm />
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
