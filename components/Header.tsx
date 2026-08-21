"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight, Phone, Mail, ArrowRight } from "lucide-react";
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

          {/* Desktop Floating Pill Nav Bar */}
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

          {/* Desktop CTA Button */}
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
            className="flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#1B2559] shadow-sm backdrop-blur-md transition-all active:scale-95 lg:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <>
                <X className="h-4 w-4 text-[#2563EB]" />
                <span>Close</span>
              </>
            ) : (
              <>
                <Menu className="h-4 w-4 text-[#2563EB]" />
                <span>Menu</span>
              </>
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-50 overflow-y-auto lg:hidden bg-slate-950/40 backdrop-blur-md"
        style={{ opacity: 0, pointerEvents: "none" }}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div
          ref={overlayLinksRef}
          className="min-h-full flex flex-col justify-between bg-gradient-to-b from-[#FFFFFF] via-[#F4F7FC] to-[#EBF1FF] px-5 pt-24 pb-8"
        >
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#1B2559]/50 px-1" data-overlay-link>
              Navigation
            </p>

            {/* Nav Card Group */}
            <div className="rounded-2xl border border-slate-200/80 bg-white/90 p-2 shadow-sm space-y-1.5" data-overlay-link>
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
                        ? "bg-[#2563EB] text-white shadow-md shadow-blue-500/20"
                        : "text-[#1B2559] hover:bg-slate-50"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className={`h-4 w-4 ${active ? "text-white" : "text-[#2563EB]"}`} />
                  </Link>
                );
              })}
            </div>

            {/* Mobile CTA */}
            <div data-overlay-link>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#2563EB] py-4 text-center font-display text-base font-bold text-white shadow-lg shadow-blue-500/25 transition-transform active:scale-[0.98]"
              >
                <span>Book Training</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Contact Card at Bottom */}
          <div className="mt-8 space-y-3" data-overlay-link>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#1B2559]/50 px-1">
              Direct Contact
            </p>
            <div className="rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-sm space-y-3">
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-3 text-sm font-semibold text-[#1B2559] hover:text-[#2563EB] transition-colors"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB] shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="truncate">{CONTACT.phone}</span>
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 text-sm font-semibold text-[#1B2559] hover:text-[#2563EB] transition-colors"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB] shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="truncate">{CONTACT.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
