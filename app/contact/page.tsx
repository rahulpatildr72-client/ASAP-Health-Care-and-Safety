import type { Metadata } from "next";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";
import Reveal from "@/components/Reveal";
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

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      <section className="bg-peri-wash-soft pb-24 pt-36 sm:pt-40">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-5 lg:gap-16 lg:px-8">
          <Reveal className="lg:col-span-2">
            <span className="mb-4 inline-flex items-center rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-brand-700 ring-1 ring-brand-100">
              Contact
            </span>
            <h1 className="font-display text-4xl tracking-tight text-navy-900 sm:text-5xl">
              <span className="block font-light">Let&apos;s Build</span>
              <span className="block font-extrabold">A Safer Workplace</span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-navy-600">
              Tell us about your team and your training needs — we&apos;ll get back to you with a
              program and a plan.
            </p>
            <ul className="mt-10 space-y-6">
              {infoItems.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-brand-600 shadow-sm ring-1 ring-brand-100">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-navy-500">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="font-medium text-navy-900 transition-colors hover:text-brand-600"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-medium text-navy-900">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* PLACEHOLDER — replace with the real Google Maps embed for the training center. */}
            <div className="mt-10 flex aspect-video items-center justify-center rounded-3xl bg-brand-100/60 ring-1 ring-brand-200">
              <p className="max-w-xs text-center text-sm font-medium text-navy-600">
                Google Map embed placeholder — add the official location embed code here.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <EnquiryForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
