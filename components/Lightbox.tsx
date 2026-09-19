import Image from "next/image";

export type GalleryImage = { src: string; alt: string; width: number; height: number };

/** Masonry gallery grid. Images are display-only (no lightbox). */
export default function Lightbox({ images }: { images: GalleryImage[] }) {
  return (
    <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>div]:mb-5">
      {images.map((img) => (
        <div
          key={img.src}
          className="relative block w-full break-inside-avoid overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200"
        >
          <Image
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="w-full"
          />
        </div>
      ))}
    </div>
  );
}
