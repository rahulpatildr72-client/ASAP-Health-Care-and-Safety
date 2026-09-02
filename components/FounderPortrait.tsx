import Image from "next/image";
import { Shield } from "lucide-react";

/** Circular leadership photo with amber shield badge (reference: directorPhoto). */
export default function FounderPortrait({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto h-44 w-44 shrink-0 sm:h-48 sm:w-48">
      <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white bg-gray-200 shadow-lg">
        <Image src={src} alt={alt} fill sizes="200px" className="object-cover" />
      </div>
      <span
        aria-hidden="true"
        className="absolute bottom-1 right-1 flex h-11 w-11 items-center justify-center rounded-full bg-accent text-white shadow-md ring-4 ring-white"
      >
        <Shield className="h-5 w-5" />
      </span>
    </div>
  );
}
