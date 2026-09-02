"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Globe, Linkedin, Instagram, Facebook, Youtube, ChevronRight } from "lucide-react";
import { COURSES } from "@/data/courses";
import { CONTACT, SITE_NAME } from "@/data/site";

const navigation = [
  { label: "About", href: "/about" },
  { label: "Training Programs", href: "/courses" },
  { label: "Corporate Training", href: "/corporate" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

/* PLACEHOLDER — point these at the real social profiles. */
const SOCIALS = [
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "YouTube", href: "#", icon: Youtube },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 pt-16 text-white/80 sm:pt-20">
      <div className="mx-auto grid max-w-7xl gap-x-12 gap-y-12 px-5 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:px-8">
        {/* Brand */}
        <div>
          <Link href="/" className="inline-flex rounded-lg bg-white px-4 py-3">
            <Image src="/logo-full.png" alt={SITE_NAME} width={1000} height={308} className="h-10 w-auto sm:h-11" />
          </Link>
          <p className="mt-5 max-w-sm text-[0.9rem] leading-[1.7] text-white/60">
            Professional First Aid, CPR, AED and Health &amp; Safety training for teams and individuals —
            hands-on, practical and delivered by medical professionals.
          </p>
          <div className="mt-6 flex items-center gap-2">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:-translate-y-0.5 hover:bg-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer Navigation">
          <h4 className="underline-bar mb-6 font-display text-[1.05rem] font-semibold text-white">Quick Links</h4>
          <ul className="flex flex-col gap-2.5 text-[0.9rem]">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="flex items-center gap-1.5 text-white/60 transition-all hover:translate-x-1 hover:text-white">
                  <ChevronRight className="h-3.5 w-3.5" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Training programs">
          <h4 className="underline-bar mb-6 font-display text-[1.05rem] font-semibold text-white">Training</h4>
          <ul className="flex flex-col gap-2.5 text-[0.9rem]">
            {COURSES.map((course) => (
              <li key={course.slug}>
                <Link
                  href={`/courses/${course.slug}`}
                  className="flex items-center gap-1.5 text-white/60 transition-all hover:translate-x-1 hover:text-white"
                >
                  <ChevronRight className="h-3.5 w-3.5 shrink-0" />
                  {course.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h4 className="underline-bar mb-6 font-display text-[1.05rem] font-semibold text-white">Contact Us</h4>
          <ul className="space-y-4 text-[0.9rem] text-white/60">
            <li className="flex items-start gap-2.5">
              <Phone className="mt-1 h-4 w-4 shrink-0 text-primary-mid" />
              <a href={CONTACT.phoneHref} className="transition-colors hover:text-white">{CONTACT.phone}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-1 h-4 w-4 shrink-0 text-primary-mid" />
              <a href={`mailto:${CONTACT.email}`} className="break-all transition-colors hover:text-white">{CONTACT.email}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-primary-mid" />
              <span>{CONTACT.location}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Globe className="mt-1 h-4 w-4 shrink-0 text-primary-mid" />
              <span className="font-medium text-white/85">{CONTACT.onlineNote}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 border-t border-white/10 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 text-center text-[0.82rem] text-white/40 sm:flex-row sm:text-left lg:px-8">
          <p>© 2026 {SITE_NAME}. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="transition-colors hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="transition-colors hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
