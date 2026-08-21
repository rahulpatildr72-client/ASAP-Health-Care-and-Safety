"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Opacity + y:24px fade-in for body text and small elements.
 * prefers-reduced-motion: opacity only, no transform.
 */
export default function FadeIn({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  y = 24,
}: {
  children: ReactNode;
  as?: "div" | "p" | "span" | "li" | "section" | "aside" | "figure";
  className?: string;
  delay?: number;
  y?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: prefersReduced ? 0 : y,
      },
      {
        opacity: 1,
        y: 0,
        duration: prefersReduced ? 0.3 : 0.8,
        delay,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [delay, y]);

  return (
    // @ts-expect-error — ref type varies with rendered tag
    <Tag ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </Tag>
  );
}
