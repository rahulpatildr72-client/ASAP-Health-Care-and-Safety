"use client";

import { useEffect, useRef, useState, useCallback } from "react";
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
];

const CTA_LINK = { label: "Contact", href: "/contact" };

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { direction, scrollY } = useScrollDirection();
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const overlayLinksRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const introRan = useRef(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // ── Close menu on route change ──
  useEffect(() => setMenuOpen(false), [pathname]);

  // ── Track if page has scrolled past 100px ──
  useEffect(() => {
    setHasScrolled(scrollY > 100);
  }, [scrollY]);

  // ── Body scroll lock when overlay is open ──
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

  // ── Escape key closes menu ──
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

  // ── Intro animation: header fades in with the page ──
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
      { opacity: 1, y: 0, duration: 0.8, delay: 0.6, ease: "power4.out" }
    );
  }, []);

  // ── Mobile overlay animation ──
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

  // ── Header hide/show behavior ──
  const headerHidden = hasScrolled && direction === "down";
  const headerSolid = hasScrolled && direction === "up";

  const prefersReduced =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  return (
    <>
      <header
        ref={headerRef}
        className="fixed inset-x-0 top-0 z-[60]"
        style={{
          opacity: 0, // GSAP intro will animate this to 1
          transform: headerHidden && !prefersReduced ? "translateY(-100%)" : "translateY(0)",
          transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), background-color 0.3s ease",
          backgroundColor: headerSolid ? "#ffffff" : "transparent",
          borderBottom: headerSolid ? "1px solid rgba(0,0,0,0.08)" : "1px solid transparent",
        }}
      >
        <nav
          ref={navRef}
          aria-label="Main"
          className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8"
        >
          {/* Wordmark / Logo */}
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

          {/* Desktop nav links */}
          <div className="hidden items-center gap-10 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`link-underline whitespace-nowrap text-[15px] font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-ink active"
                    : "text-navy-700 hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* CTA — same text style + arrow nudge */}
            <Link
              href={CTA_LINK.href}
              aria-current={isActive(CTA_LINK.href) ? "page" : undefined}
              className={`group link-underline inline-flex items-center gap-1 whitespace-nowrap text-[15px] font-medium transition-colors ${
                isActive(CTA_LINK.href)
                  ? "text-ink active"
                  : "text-navy-700 hover:text-ink"
              }`}
            >
              {CTA_LINK.label}
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>

          {/* Mobile: "Menu" / "Close" text toggle */}
          <button
            type="button"
            className="link-underline text-[15px] font-medium text-navy-700 lg:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </nav>
      </header>

      {/* ── Mobile full-screen overlay ── */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-50 lg:hidden"
        style={{ opacity: 0, pointerEvents: "none", backgroundColor: "var(--color-surface)" }}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div
          ref={overlayLinksRef}
          className="flex h-full flex-col justify-between px-5 pb-10 pt-28"
        >
          {/* Nav links — large heading style */}
          <nav className="space-y-2">
            {[...NAV_LINKS, CTA_LINK].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-overlay-link
                onClick={() => setMenuOpen(false)}
                className={`block font-display text-[2.6rem] leading-[1.08] tracking-tight transition-colors ${
                  isActive(link.href) ? "text-ink" : "text-navy-500 hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Small footer row */}
          <div
            data-overlay-link
            className="flex items-center justify-between border-t border-[rgba(0,0,0,0.08)] pt-6 text-sm text-navy-500"
          >
            <a href={`mailto:${CONTACT.email}`} className="link-underline hover:text-ink">
              {CONTACT.email}
            </a>
            <a href={CONTACT.phoneHref} className="link-underline hover:text-ink">
              {CONTACT.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
