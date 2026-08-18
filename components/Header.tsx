"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Training Programs", href: "/courses" },
  { label: "Corporate Training", href: "/corporate" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer on route change and lock body scroll while it is open.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-5">
      {/* Floating white pill navbar, detached from the page top */}
      <nav
        aria-label="Main"
        className={`mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full bg-white/95 pl-5 pr-2.5 backdrop-blur-md transition-shadow duration-300 ${
          scrolled
            ? "shadow-[0_2px_4px_rgb(27_37_89/0.06),0_18px_40px_-16px_rgb(27_37_89/0.28)]"
            : "shadow-[0_2px_4px_rgb(27_37_89/0.04),0_12px_32px_-16px_rgb(27_37_89/0.18)]"
        }`}
      >
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-full.png"
            alt="ASAP Healthcare & Safety"
            width={1001}
            height={310}
            priority
            className="h-11 w-auto sm:h-12"
          />
        </Link>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`whitespace-nowrap rounded-full px-3.5 py-2 text-[15px] font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-brand-50 text-brand-600"
                    : "text-navy-700 hover:bg-brand-50 hover:text-brand-600"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden whitespace-nowrap rounded-full bg-brand-600 px-6 py-2.5 font-display text-[15px] font-bold text-white shadow-md shadow-brand-600/30 transition-all hover:-translate-y-0.5 hover:bg-brand-700 sm:inline-flex"
          >
            Book Training
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-navy-800 ring-1 ring-navy-300/60 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile slide-in drawer */}
      <div
        className={`fixed inset-x-0 bottom-0 top-0 -z-10 transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-navy-950/30" onClick={() => setOpen(false)} aria-hidden="true" />
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-[85%] overflow-y-auto bg-white p-6 pt-24 shadow-float transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block rounded-full px-5 py-3 font-medium ${
                    isActive(link.href)
                      ? "bg-brand-50 text-brand-600"
                      : "text-navy-800 hover:bg-brand-50 hover:text-brand-600"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Link
                href="/contact"
                className="block rounded-full bg-brand-600 px-5 py-3 text-center font-display font-bold text-white"
              >
                Book Training
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
