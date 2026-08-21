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

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    setHasScrolled(scrollY > 100);
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
      { opacity: 1, y: 0, duration: 0.8, delay: 0.6, ease: "power4.out" }
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
          opacity: 0,
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

          <div className="hidden items-center gap-10 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`link-underline whitespace-nowrap text-[15px] font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-[#3B5BDB] active"
                    : "text-[#1B2559]/80 hover:text-[#3B5BDB]"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href={CTA_LINK.href}
              aria-current={isActive(CTA_LINK.href) ? "page" : undefined}
              className={`group link-underline inline-flex items-center gap-1 whitespace-nowrap text-[15px] font-medium transition-colors ${
                isActive(CTA_LINK.href)
                  ? "text-[#3B5BDB] active"
                  : "text-[#1B2559]/80 hover:text-[#3B5BDB]"
              }`}
            >
              {CTA_LINK.label}
              <span
                aria-hidden="true"
                className="inline-block text-[#3B5BDB] transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>

          <button
            type="button"
            className="link-underline text-[15px] font-medium text-[#1B2559] hover:text-[#3B5BDB] lg:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </nav>
      </header>

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
            {[...NAV_LINKS, CTA_LINK].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-overlay-link
                onClick={() => setMenuOpen(false)}
                className={`block font-display text-[2.6rem] leading-[1.08] tracking-tight transition-colors ${
                  isActive(link.href) ? "text-[#3B5BDB]" : "text-[#1B2559]/70 hover:text-[#3B5BDB]"
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
            <a href={`mailto:${CONTACT.email}`} className="link-underline hover:text-[#3B5BDB]">
              {CONTACT.email}
            </a>
            <a href={CONTACT.phoneHref} className="link-underline hover:text-[#3B5BDB]">
              {CONTACT.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
