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

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#D6DAF6] to-[#C3C8EF] text-[#4A5070]">
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-20 lg:px-8">
        {/* Single row on desktop: brand | navigation | training | contact */}
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr]">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex">
              <Image
                src="/logo-full.png"
                alt="ASAP Healthcare & Safety"
                width={1001}
                height={310}
                className="h-14 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-sm leading-relaxed">
              Professional First Aid, CPR, AED and Health &amp; Safety training — building
              confident lifesavers in workplaces, institutions and communities.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1B2559] shadow-sm transition-colors hover:bg-[#3B5BDB] hover:text-white"
                >
                  <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer">
            <h3 className="font-display font-semibold text-[#1B3A6B]">Navigation</h3>
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

          <nav aria-label="Training programs">
            <h3 className="font-display font-semibold text-[#1B3A6B]">Training</h3>
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

          <div>
            <h3 className="font-display font-semibold text-[#1B3A6B]">Contact</h3>
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

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#1B3A6B]/15 pt-8 text-sm text-[#4E5478] sm:flex-row">
          <p>© 2026 {SITE_NAME}. All Rights Reserved.</p>
          <p className="flex gap-6">
            {/* PLACEHOLDER — create real Privacy Policy and Terms pages before launch. */}
            <a href="#" className={linkClass}>
              Privacy Policy
            </a>
            <a href="#" className={linkClass}>
              Terms &amp; Conditions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
