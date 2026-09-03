"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight, ChevronDown, Mail, Phone, Shield, Leaf } from "lucide-react";
import SocialIcon from "./SocialIcon";
import { COURSES, CATEGORY_META } from "@/data/courses";
import { CONTACT, SOCIAL_LINKS } from "@/data/site";

/** Dropdown entries: one per training category, linking to the tab on /courses. */
const CATEGORY_LINKS = (["emergency", "wellbeing"] as const).map((key) => ({
  key,
  href: `/courses?category=${key}`,
  label: CATEGORY_META[key].label,
  icon: CATEGORY_META[key].icon,
  count: COURSES.filter((course) => course.category === key).length,
}));

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Training Programs", href: "/courses", isDropdown: true },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

/* PLACEHOLDER — point these at the real social profiles. */
const SOCIALS = SOCIAL_LINKS;

const navLinkClass = (active: boolean) =>
  `relative flex items-center gap-1 whitespace-nowrap rounded-md px-3 py-2.5 text-[0.9rem] font-medium transition-all duration-200 after:absolute after:bottom-1 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-primary after:transition-all after:duration-300 after:content-[''] hover:bg-primary-light hover:text-primary hover:after:w-3/5 ${
    active ? "bg-primary-light text-primary after:w-3/5" : "text-gray-700"
  }`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
    setMobileSubmenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setDropdownOpen(false);
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Utility bar */}
      <div className="hidden bg-primary-dark text-white md:block">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-5 text-[0.82rem] lg:px-8">
          <div className="flex items-center gap-6">
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-1.5 text-white/90 transition-colors hover:text-white">
              <Mail className="h-3.5 w-3.5" />
              {CONTACT.email}
            </a>
            <a href={CONTACT.phoneHref} className="flex items-center gap-1.5 text-white/90 transition-colors hover:text-white">
              <Phone className="h-3.5 w-3.5" />
              {CONTACT.phone}
            </a>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              {SOCIALS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:-translate-y-px hover:bg-white/25"
                >
                  <SocialIcon name={icon} className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sticky main header */}
      <header
        className={`sticky top-0 z-[60] bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-[0_4px_20px_rgba(0,0,0,0.1)]" : "shadow-[0_2px_10px_rgba(0,0,0,0.06)]"
        }`}
      >
        <nav
          aria-label="Main"
          className="mx-auto flex h-[74px] max-w-7xl items-center justify-between gap-6 px-5 lg:h-[92px] lg:px-8"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-full.png"
              alt="ASAP Healthcare & Safety"
              width={1527}
              height={458}
              priority
              className="h-10 w-auto sm:h-12 lg:h-14"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-0.5 lg:flex">
            {NAV_LINKS.map((link) => {
              if (link.isDropdown) {
                return (
                  <div
                    key={link.href}
                    className="relative flex h-full items-center"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      aria-current={isActive(link.href) ? "page" : undefined}
                      className={navLinkClass(isActive(link.href))}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                      />
                    </Link>

                    {/* Dropdown */}
                    <div
                      className={`absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 transition-all duration-300 ${
                        dropdownOpen ? "visible translate-y-0 opacity-100" : "invisible translate-y-2 opacity-0"
                      }`}
                    >
                      <div className="rounded-2xl border border-gray-200 bg-white p-3 shadow-[0_10px_40px_rgba(0,0,0,0.12)]">
                        <div className="border-b-2 border-primary-light px-3 pb-2 pt-1 text-[0.8rem] font-bold text-primary">
                          Training Categories
                        </div>

                        {CATEGORY_LINKS.map((cat) => (
                          <Link
                            key={cat.key}
                            href={cat.href}
                            onClick={() => setDropdownOpen(false)}
                            className="group mt-2 flex items-center gap-3 rounded-xl p-2.5 transition-all hover:bg-primary-light"
                          >
                            <div className="icon-square h-9 w-9 shrink-0 rounded-lg group-hover:bg-primary group-hover:text-white">
                              {cat.icon === "shield" ? <Shield className="h-4 w-4" /> : <Leaf className="h-4 w-4" />}
                            </div>
                            <div>
                              <div className="text-[0.85rem] font-semibold text-gray-900 group-hover:text-primary">{cat.label}</div>
                              <div className="text-[0.75rem] text-gray-600">{cat.count} programs</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={navLinkClass(isActive(link.href))}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link href="/contact" className="btn btn-primary ml-3 px-6 py-2.5 text-[0.9rem]">
              Book Training
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-md text-gray-900 transition-colors hover:bg-primary-light hover:text-primary lg:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="h-6 w-6" strokeWidth={2.2} /> : <Menu className="h-6 w-6" strokeWidth={2.2} />}
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile drawer (slides in from the right) */}
      <div
        className={`fixed right-0 top-0 z-[55] h-full w-[300px] max-w-[85vw] overflow-y-auto bg-white px-6 pb-8 pt-24 shadow-[-4px_0_20px_rgba(0,0,0,0.15)] transition-transform duration-300 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        aria-hidden={!menuOpen}
      >
        <div className="space-y-1">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);

            if (link.isDropdown) {
              return (
                <div key={link.href}>
                  <div
                    className={`flex items-center justify-between rounded-md px-3 py-3 text-[0.95rem] font-medium transition-colors ${
                      active ? "bg-primary-light text-primary" : "text-gray-800 hover:bg-primary-light hover:text-primary"
                    }`}
                  >
                    <Link href={link.href} onClick={() => setMenuOpen(false)} className="flex-1">
                      {link.label}
                    </Link>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setMobileSubmenuOpen((v) => !v);
                      }}
                      className="rounded p-1 text-gray-600 transition-colors hover:text-primary"
                      aria-label="Toggle Training Programs sub-menu"
                    >
                      <ChevronDown className={`h-4 w-4 transition-transform ${mobileSubmenuOpen ? "rotate-180" : ""}`} />
                    </button>
                  </div>

                  {mobileSubmenuOpen && (
                    <div className="ml-3 space-y-1 border-l-2 border-primary-light pl-3 pt-1">
                      {CATEGORY_LINKS.map((cat) => (
                        <Link
                          key={cat.key}
                          href={cat.href}
                          onClick={() => setMenuOpen(false)}
                          className="flex items-center gap-2.5 rounded-md px-3 py-2.5 text-[0.9rem] font-medium text-gray-700 hover:bg-primary-light hover:text-primary"
                        >
                          {cat.icon === "shield" ? <Shield className="h-4 w-4 text-primary" /> : <Leaf className="h-4 w-4 text-primary" />}
                          <span>{cat.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center justify-between rounded-md px-3 py-3 text-[0.95rem] font-medium transition-colors ${
                  active ? "bg-primary-light text-primary" : "text-gray-800 hover:bg-primary-light hover:text-primary"
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </Link>
            );
          })}
        </div>

        <Link href="/contact" onClick={() => setMenuOpen(false)} className="btn btn-primary btn-block mt-6">
          Book Training
        </Link>

        <div className="mt-8 space-y-3 border-t border-gray-200 pt-6 text-[0.85rem] text-gray-600">
          <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 hover:text-primary">
            <Mail className="h-4 w-4 text-primary" /> {CONTACT.email}
          </a>
          <a href={CONTACT.phoneHref} className="flex items-center gap-2 hover:text-primary">
            <Phone className="h-4 w-4 text-primary" /> {CONTACT.phone}
          </a>
        </div>
      </div>
    </>
  );
}
