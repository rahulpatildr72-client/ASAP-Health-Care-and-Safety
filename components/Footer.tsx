"use client";

import Image from "next/image";
import Link from "next/link";
import { COURSES } from "@/data/courses";
import { CONTACT, SITE_NAME } from "@/data/site";

const navigation = [
  { label: "About", href: "/about" },
  { label: "Training Programs", href: "/courses" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(0,0,0,0.08)] bg-gradient-to-b from-[#D6DAF6] to-[#C3C8EF] text-[#1B2559]">
      <div className="mx-auto max-w-7xl px-5 pb-12 pt-24 lg:px-8">
        <div className="grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex">
              <Image
                src="/logo-full.png"
                alt="ASAP Healthcare & Safety"
                width={1000}
                height={308}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-[#1B2559]/80 max-w-xs">
              Professional First Aid, CPR, AED and Health &amp; Safety training for teams and individuals.
            </p>
          </div>

          <nav aria-label="Footer Navigation">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#1B2559]">Navigation</h3>
            <ul className="mt-6 space-y-3.5 text-sm">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-underline font-medium text-[#1B2559]/80 hover:text-[#1B2559]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Training programs">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#1B2559]">Training</h3>
            <ul className="mt-6 space-y-3.5 text-sm">
              {COURSES.map((course) => (
                <li key={course.slug}>
                  <Link href={`/courses/${course.slug}`} className="link-underline font-medium text-[#1B2559]/80 hover:text-[#1B2559]">
                    {course.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#1B2559]">Contact</h3>
            <ul className="mt-6 space-y-3.5 text-sm text-[#1B2559]/80">
              <li>
                <a href={CONTACT.phoneHref} className="link-underline font-medium hover:text-[#1B2559]">
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="link-underline font-medium hover:text-[#1B2559] break-all">
                  {CONTACT.email}
                </a>
              </li>
              <li className="text-[#1B2559]/70">{CONTACT.location}</li>
              <li className="font-semibold text-[#1B2559]">{CONTACT.onlineNote}</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-[#1B2559]/15 pt-8 text-xs text-[#1B2559]/70 sm:flex-row">
          <p>© 2026 {SITE_NAME}. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="link-underline hover:text-[#1B2559]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="link-underline hover:text-[#1B2559]">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
