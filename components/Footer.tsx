import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
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
const socials = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

const linkClass = "transition-colors hover:text-[#3B5BDB]";
const headingClass = "font-display text-sm font-semibold uppercase tracking-wide text-[#1B3A6B]";
/* Hairline dashed vertical divider between columns (desktop only) */
const dividerCol = "lg:border-l lg:border-dashed lg:border-[#B8BEE8] lg:pl-8";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#D6DAF6] to-[#C3C8EF] text-[#4A5070]">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-20 lg:px-8">
        {/* Top block: brand | navigation | training | contact */}
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.9fr_1.1fr_1.1fr]">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex">
              <Image
                src="/logo-full.png"
                alt="ASAP Healthcare & Safety"
                width={1000}
                height={308}
                className="h-14 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-sm leading-relaxed">
              Professional First Aid, CPR, AED and Health &amp; Safety training for teams and
              individuals.
            </p>
            <div className="mt-5 flex items-center gap-4">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-[#1B3A6B] transition-colors hover:text-[#3B5BDB]"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer" className={dividerCol}>
            <h3 className={headingClass}>Navigation</h3>
            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Training programs" className={dividerCol}>
            <h3 className={headingClass}>Training</h3>
            <ul className="mt-5 space-y-3">
              {COURSES.map((course) => (
                <li key={course.slug}>
                  <Link href={`/courses/${course.slug}`} className={linkClass}>
                    {course.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={dividerCol}>
            <h3 className={headingClass}>Contact</h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a href={CONTACT.phoneHref} className={linkClass}>
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className={`break-all ${linkClass}`}>
                  {CONTACT.email}
                </a>
              </li>
              <li>{CONTACT.location}</li>
              <li className="font-medium text-[#3B5BDB]">{CONTACT.onlineNote}</li>
            </ul>
          </div>
        </div>

        {/* Middle strip: accreditation placeholders (client to supply real logos — do not invent badges) */}
        <div className="mt-14 border-y border-[#1B3A6B]/12 py-8">
          <p className="text-center font-display text-sm font-semibold uppercase tracking-wide text-[#1B3A6B]">
            Certified &amp; Recognized By
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            {/* PLACEHOLDER SLOTS — replace with official accreditation logos once confirmed. */}
            {[1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className="flex h-14 w-36 items-center justify-center rounded-xl border border-dashed border-[#8A92B8] text-xs font-medium text-[#7A81A8]"
              >
                Accreditation logo
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 text-sm text-[#4E5478] sm:flex-row">
          <p>© 2026 {SITE_NAME}. All Rights Reserved.</p>
          <p className="flex items-center gap-3">
            {/* PLACEHOLDER — create real Privacy Policy and Terms pages before launch. */}
            <a href="#" className={linkClass}>
              Privacy
            </a>
            <span aria-hidden="true" className="text-[#8A92B8]">
              |
            </span>
            <a href="#" className={linkClass}>
              Terms
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
