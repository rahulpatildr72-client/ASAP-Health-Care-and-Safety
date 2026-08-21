"use client";

import Image from "next/image";
import Link from "next/link";
import { COURSES } from "@/data/courses";
import { CONTACT, SITE_NAME } from "@/data/site";

const navigation = [
  { label: "About", href: "/about" },
  { label: "Training Programs", href: "/courses" },
  { label: "Corporate Training", href: "/corporate" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(0,0,0,0.08)] bg-white text-navy-600">
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
            <p className="mt-6 text-sm leading-relaxed text-navy-500 max-w-xs">
              Professional First Aid, CPR, AED and Health &amp; Safety training for teams and individuals.
            </p>
          </div>

          <nav aria-label="Footer Navigation">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-navy-500">Navigation</h3>
            <ul className="mt-6 space-y-3.5 text-sm">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-underline text-navy-700 hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Training programs">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-navy-500">Training</h3>
            <ul className="mt-6 space-y-3.5 text-sm">
              {COURSES.map((course) => (
                <li key={course.slug}>
                  <Link href={`/courses/${course.slug}`} className="link-underline text-navy-700 hover:text-ink">
                    {course.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-navy-500">Contact</h3>
            <ul className="mt-6 space-y-3.5 text-sm text-navy-700">
              <li>
                <a href={CONTACT.phoneHref} className="link-underline hover:text-ink">
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="link-underline hover:text-ink break-all">
                  {CONTACT.email}
                </a>
              </li>
              <li className="text-navy-500">{CONTACT.location}</li>
              <li className="font-medium text-ink">{CONTACT.onlineNote}</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-[rgba(0,0,0,0.08)] pt-8 text-xs text-navy-400 sm:flex-row">
          <p>© 2026 {SITE_NAME}. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="link-underline hover:text-ink">
              Privacy Policy
            </Link>
            <Link href="/terms" className="link-underline hover:text-ink">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
