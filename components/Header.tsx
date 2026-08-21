"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { useScrollDirection } from "./useScrollDirection";
import { CONTACT } from "@/data/site";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Training Programs", href: "/courses" },
  { label: "Corporate Training", href: "/corporate" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { direction, scrollY } = useScrollDirection();
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const overlayLinksRef = useRef<HTMLDivElement>(null);
  const introRan = useRef(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    setHasScrolled(scrollY > 50);
  }, [scrollY]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

  useEffect(() => {
    if (introRan.current) return;
    introRan.current = true;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const header = headerRef.current;
    if (!header) return;

    gsap.fromTo(
      header,
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power4.out" }
    );
  }, []);

  useEffect(() => {
    const overlay = overlayRef.current;
    const linksContainer = overlayLinksRef.current;
    if (!overlay || !linksContainer) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const links = linksContainer.querySelectorAll("[data-overlay-link]");

    if (menuOpen) {
      if (prefersReduced) {
        overlay.style.opacity = "1";
        overlay.style.pointerEvents = "auto";
        return;
      }

      gsap.to(overlay, {
        opacity: 1,
        duration: 0.4,
        ease: "power3.inOut",
        onStart: () => { overlay.style.pointerEvents = "auto"; },
      });

      gsap.fromTo(
        links,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power4.out", delay: 0.15 }
      );
    } else {
      if (prefersReduced) {
        overlay.style.opacity = "0";
        overlay.style.pointerEvents = "none";
        return;
      }

      gsap.to(overlay, {
        opacity: 0,
        duration: 0.3,
        ease: "power3.inOut",
        onComplete: () => { overlay.style.pointerEvents = "none"; },
      });
    }
  }, [menuOpen]);

  const headerHidden = hasScrolled && direction === "down";

  return (
    <>
      <header
        ref={headerRef}
        className="fixed inset-x-0 top-0 z-[60] pt-4 pb-2 transition-all duration-300"
        style={{
          transform: headerHidden ? "translateY(-100%)" : "translateY(0)",
        }}
      >
        <nav
          aria-label="Main"
          className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-full.png"
              alt="ASAP Healthcare & Safety"
              width={1001}
              height={310}
              priority
              className="h-10 w-auto sm:h-12"
            />
          </Link>

          {/* Floating Pill Nav Bar */}
          <div className="hidden items-center rounded-full border border-white/80 bg-white/90 p-1.5 shadow-sm backdrop-blur-md lg:flex gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-[14px] font-medium transition-all ${
                  isActive(link.href)
                    ? "bg-[#EAF0FF] text-[#2563EB] font-semibold"
                    : "text-[#1B2559]/80 hover:bg-slate-50 hover:text-[#2563EB]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Action CTA Button */}
          <div className="hidden items-center lg:flex">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#2563EB] px-6 py-2.5 text-[14px] font-bold text-white shadow-md shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5"
            >
              Book Training
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="flex h-10 items-center justify-center rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[#1B2559] shadow-sm border border-slate-200 backdrop-blur-md lg:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </nav>
      </header>

      {/* Mobile Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-50 lg:hidden"
        style={{ opacity: 0, pointerEvents: "none", backgroundColor: "#F0F3FC" }}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div
          ref={overlayLinksRef}
          className="flex h-full flex-col justify-between px-5 pb-10 pt-28"
        >
          <nav className="space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-overlay-link
                onClick={() => setMenuOpen(false)}
                className={`block font-display text-[2.4rem] leading-[1.08] tracking-tight transition-colors ${
                  isActive(link.href) ? "text-[#2563EB] font-bold" : "text-[#1B2559]/70 hover:text-[#2563EB]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div
            data-overlay-link
            className="flex items-center justify-between border-t border-[rgba(0,0,0,0.08)] pt-6 text-sm text-[#1B2559]/70"
          >
            <a href={`mailto:${CONTACT.email}`} className="link-underline hover:text-[#2563EB]">
              {CONTACT.email}
            </a>
            <a href={CONTACT.phoneHref} className="link-underline hover:text-[#2563EB]">
              {CONTACT.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
