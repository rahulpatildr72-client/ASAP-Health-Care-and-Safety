"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Image, { type ImageProps } from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Image in an overflow-hidden frame with a ~8% parallax scrub.
 * The image is slightly taller than its container to allow movement.
 * prefers-reduced-motion: static, no parallax.
 */
export default function ParallaxImage({
  src,
  alt,
  width,
  height,
  sizes,
  priority = false,
  className = "",
  containerClassName = "",
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
  containerClassName?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    if (!container || !image) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    gsap.fromTo(
      image,
      { y: "-4%" },
      {
        y: "4%",
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === container) t.kill();
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden ${containerClassName}`}
    >
      <div ref={imageRef} className="relative h-full w-full" style={{ willChange: "transform" }}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          fill={!width && !height}
          sizes={sizes || "(max-width: 1024px) 100vw, 50vw"}
          priority={priority}
          className={`h-full w-full object-cover ${className}`}
          style={{ transform: "scale(1.08)" }}
        />
      </div>
    </div>
  );
}
