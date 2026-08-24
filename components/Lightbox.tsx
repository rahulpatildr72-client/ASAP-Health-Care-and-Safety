"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type GalleryImage = { src: string; alt: string; width: number; height: number };

/**
 * Masonry gallery grid + lightweight custom lightbox.
 * Keyboard: Escape closes, arrow keys navigate.
 */
export default function Lightbox({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: number) =>
      setActive((i) => (i === null ? null : (i + dir + images.length) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, step]);

  return (
    <>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>button]:mb-5">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setActive(i)}
            className="group block w-full overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-navy-300/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover focus-visible:outline-2 focus-visible:outline-brand-600"
            aria-label={`View larger: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="w-full transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={images[active].alt}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/90 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition-colors hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition-colors hover:bg-white/20"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="relative max-h-[85vh] w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[active].src}
              alt={images[active].alt}
              width={images[active].width * 2}
              height={images[active].height * 2}
              sizes="100vw"
              className="mx-auto max-h-[80vh] w-auto rounded-2xl object-contain"
            />
            <p className="mt-4 text-center text-sm text-white/80">{images[active].alt}</p>
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next image"
            className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition-colors hover:bg-white/20"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </>
  );
}
