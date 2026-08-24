"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Headline text split into lines, each masked (overflow-hidden),
 * translated y 100%→0, 0.08s stagger, once, at 80% viewport entry.
 * Wraps existing headings WITHOUT altering their classes or styles.
 * prefers-reduced-motion: no transform, opacity fade only.
 */
export default function RevealText({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  as?: "div" | "h1" | "h2" | "h3" | "span" | "p";
  className?: string;
  delay?: number;
}) {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      // Just a simple opacity fade
      gsap.fromTo(
        el,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.4,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            once: true,
          },
        }
      );
      return;
    }

    // Wrap each line-level child in a mask
    const children = Array.from(el.children);
    if (children.length === 0) {
      // If no child elements, treat the container itself as one "line"
      gsap.set(el, { overflow: "hidden" });
      gsap.fromTo(
        el,
        { y: "100%", opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            once: true,
          },
        }
      );
      return;
    }

    // Each direct child becomes a "line"
    children.forEach((child) => {
      const wrapper = child as HTMLElement;
      wrapper.style.overflow = "hidden";
      wrapper.style.display = "block";
    });

    const innerElements = children.map((child) => {
      const inner = child as HTMLElement;
      // Wrap content in a span for the transform
      const span = document.createElement("span");
      span.style.display = "block";
      span.style.willChange = "transform";
      while (inner.firstChild) {
        span.appendChild(inner.firstChild);
      }
      inner.appendChild(span);
      return span;
    });

    gsap.set(innerElements, { y: "100%" });

    gsap.to(innerElements, {
      y: 0,
      duration: 1,
      stagger: 0.08,
      delay,
      ease: "power4.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        once: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [delay]);

  return (
    // @ts-expect-error — ref type varies with rendered tag
    <Tag ref={containerRef} className={className}>
      {children}
    </Tag>
  );
}
