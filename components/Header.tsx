"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight, ArrowRight } from "lucide-react";
import { gsap } from "gsap";

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
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const overlayLinksRef = useRef<HTMLDivElement>(null);
  const introRan = useRef(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => setMenuOpen(false), [pathname]);

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
        duration: 0.35,
        ease: "power3.out",
        onStart: () => { overlay.style.pointerEvents = "auto"; },
      });

      gsap.fromTo(
        links,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: "power3.out", delay: 0.1 }
      );
    } else {
      if (prefersReduced) {
        overlay.style.opacity = "0";
        overlay.style.pointerEvents = "none";
        return;
      }

      gsap.to(overlay, {
        opacity: 0,
        duration: 0.25,
        ease: "power3.in",
        onComplete: () => { overlay.style.pointerEvents = "none"; },
      });
    }
  }, [menuOpen]);

  return (
    <>
      {/* Sleek Dark Navy Full-Bleed Sticky Header (matching Image 2) */}
      <header
        ref={headerRef}
        className="fixed inset-x-0 top-0 z-[60] bg-[#0A1329]/95 border-b border-white/10 py-3 backdrop-blur-md transition-all duration-300 shadow-md"
      >
        <nav
          aria-label="Main"
          className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8"
        >
          {/* Logo with clean white rounded container for contrast */}
          <Link href="/" className="flex items-center rounded-xl bg-white px-3 py-1.5 shadow-sm transition-transform hover:scale-[1.02]">
            <Image
              src="/logo-full.png"
              alt="ASAP Healthcare & Safety"
              width={1001}
              height={310}
              priority
              className="h-8 w-auto sm:h-9"
            />
          </Link>

          {/* Desktop Dark Navy Nav Links */}
          <div className="hidden items-center gap-1.5 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-[14px] font-semibold transition-all ${
                  isActive(link.href)
                    ? "bg-[#2563EB] text-white shadow-md shadow-blue-500/30"
                    : "text-slate-200 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden items-center lg:flex">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#2563EB] px-6 py-2.5 text-[14px] font-bold text-white shadow-md shadow-blue-500/30 transition-all hover:bg-blue-600 hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
            >
              Book Training
            </Link>
          </div>

          {/* Mobile Menu 3-Line Button */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-sm backdrop-blur-md transition-all active:scale-95 lg:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <X className="h-5 w-5 text-white" />
            ) : (
              <Menu className="h-5 w-5 text-white" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-50 overflow-y-auto lg:hidden bg-slate-950/60 backdrop-blur-md"
        style={{ opacity: 0, pointerEvents: "none" }}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div
          ref={overlayLinksRef}
          className="min-h-full flex flex-col justify-start bg-gradient-to-b from-[#0A1329] via-[#0D1B3E] to-[#0A1329] px-5 pt-24 pb-10"
        >
          <div className="space-y-6">
            {/* Nav Card Group */}
            <div className="rounded-2xl border border-white/10 bg-[#132042]/90 p-2 shadow-xl space-y-1.5" data-overlay-link>
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    data-overlay-link
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-bold transition-all ${
                      active
                        ? "bg-[#2563EB] text-white shadow-md shadow-blue-500/30"
                        : "text-slate-200 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className={`h-4 w-4 ${active ? "text-white" : "text-blue-400"}`} />
                  </Link>
                );
              })}
            </div>

            {/* Mobile CTA Button */}
            <div data-overlay-link>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#2563EB] py-4 text-center font-display text-base font-bold text-white shadow-lg shadow-blue-500/30 transition-transform active:scale-[0.98]"
              >
                <span>Book Training</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
