"use client";

import { useEffect, useRef, useState } from "react";

/** Animated count-up that starts when scrolled into view. Supports string values (displayed as-is). */
export default function StatCounter({ value, suffix }: { value: number | string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isNumeric = typeof value === "number";
  const [display, setDisplay] = useState(isNumeric ? 0 : value);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-40px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || !isNumeric) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }
    const duration = 1400;
    const start = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round((value as number) * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, value, isNumeric]);

  return (
    <span ref={ref}>
      {typeof display === "number" ? display.toLocaleString("en-IN") : display}
      {suffix}
    </span>
  );
}
