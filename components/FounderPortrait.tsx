import Image from "next/image";

/** Circular founder photo (reference: directorPhoto). */
export default function FounderPortrait({ alt }: { alt: string }) {
  return (
    <div className="relative mx-auto h-44 w-44 shrink-0 sm:h-48 sm:w-48">
      <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white bg-gray-200 shadow-lg">
        <Image src="/founder.jpg" alt={alt} fill sizes="200px" className="object-cover" />
      </div>
    </div>
  );
}
