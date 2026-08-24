"use client";

import { useEffect, useState } from "react";

/**
 * Returns "up" | "down" based on scroll direction.
 * Uses a threshold (~5px) to guard against Lenis jitter.
 */
export function useScrollDirection(threshold = 5) {
  const [direction, setDirection] = useState<"up" | "down">("up");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const diff = currentY - lastY;
        if (Math.abs(diff) > threshold) {
          setDirection(diff > 0 ? "down" : "up");
          lastY = currentY;
        }
        setScrollY(currentY);
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return { direction, scrollY };
}
