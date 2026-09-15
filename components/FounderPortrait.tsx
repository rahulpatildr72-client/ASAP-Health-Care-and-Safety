import Image from "next/image";

/** Circular leadership photo with the brand logo mark as a badge (reference: directorPhoto). */
export default function FounderPortrait({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto h-44 w-44 shrink-0 sm:h-48 sm:w-48">
      <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white bg-gray-200 shadow-lg">
        <Image src={src} alt={alt} fill sizes="200px" className="object-cover" />
      </div>
      <span
        aria-hidden="true"
        className="absolute bottom-1 right-1 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md ring-4 ring-white"
      >
        <Image src="/logo-mark.png" alt="" width={32} height={32} className="h-8 w-8 object-contain" />
      </span>
    </div>
  );
}
