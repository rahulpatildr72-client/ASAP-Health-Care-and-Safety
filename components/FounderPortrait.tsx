import Image from "next/image";

/** Circular brand mark shown in place of a leadership photo (reference: directorPhoto). */
export default function FounderPortrait() {
  return (
    <div className="relative mx-auto h-44 w-44 shrink-0 sm:h-48 sm:w-48">
      <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full border-4 border-white bg-white p-6 shadow-lg">
        <Image src="/logo-mark.png" alt="ASAP Healthcare & Safety logo" width={160} height={160} className="h-full w-full object-contain" />
      </div>
    </div>
  );
}
