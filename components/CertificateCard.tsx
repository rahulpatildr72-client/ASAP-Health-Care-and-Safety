import Image from "next/image";
import { SITE_NAME } from "@/data/site";

/**
 * Stylised "certificate of completion" mock-up rendered purely with CSS/SVG.
 * Used as a visual for the certification promise — not a real document.
 */
export default function CertificateCard({
  program = "First Aid & CPR Training Program",
  name = "Participant Name",
  className = "",
  tilt = true,
}: {
  program?: string;
  name?: string;
  className?: string;
  tilt?: boolean;
}) {
  return (
    <div
      className={`relative w-full max-w-md rounded-2xl border border-gray-200 bg-white p-2 shadow-lg ${
        tilt ? "rotate-[-2deg] transition-transform duration-500 hover:rotate-0" : ""
      } ${className}`}
      aria-label="Illustration of a certificate of completion"
      role="img"
    >
      <div className="relative overflow-hidden rounded-xl border border-primary/20 bg-off-white px-6 py-6 sm:px-8 sm:py-7">
        {/* inner double rule */}
        <div className="pointer-events-none absolute inset-2 rounded-lg border border-primary/10" />
        {/* corner ornaments */}
        {["top-3 left-3", "top-3 right-3 rotate-90", "bottom-3 right-3 rotate-180", "bottom-3 left-3 -rotate-90"].map(
          (pos) => (
            <span
              key={pos}
              className={`pointer-events-none absolute ${pos} h-4 w-4 border-l-2 border-t-2 border-primary/40`}
            />
          )
        )}
        {/* watermark */}
        <div className="pointer-events-none absolute -bottom-8 -right-6 h-40 w-40 opacity-[0.06]">
          <Image src="/logo-mark.png" alt="" fill className="object-contain" />
        </div>

        {/* header */}
        <div className="relative flex items-center gap-3">
          <div className="relative h-10 w-9 shrink-0">
            <Image src="/logo-mark.png" alt="" fill className="object-contain" />
          </div>
          <div>
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.18em] text-primary-dark">{SITE_NAME}</p>
            <p className="text-[10px] font-medium uppercase tracking-widest text-gray-500">Training Division · Mumbai</p>
          </div>
        </div>

        {/* title */}
        <div className="relative mt-6 text-center">
          <p className="font-display text-2xl font-extrabold uppercase tracking-[0.22em] text-gray-900 sm:text-[1.7rem]">
            Certificate
          </p>
          <p className="mt-0.5 font-display text-sm font-normal italic tracking-wide text-gray-600">of Completion</p>
        </div>

        <div className="relative mt-5 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">This certifies that</p>
          <p className="mx-auto mt-2 inline-block border-b border-gray-400 px-6 pb-1 font-display text-lg font-bold text-gray-900">
            {name}
          </p>
          <p className="mx-auto mt-3 max-w-xs text-[11px] leading-relaxed text-gray-600">
            has successfully completed the hands-on <span className="font-semibold text-primary-dark">{program}</span> and
            demonstrated the required practical competence.
          </p>
        </div>

        {/* footer */}
        <div className="relative mt-6 flex items-end justify-between gap-4">
          {/* seal */}
          <div className="relative flex h-16 w-16 shrink-0 items-center justify-center">
            <svg viewBox="0 0 64 64" className="absolute inset-0 h-full w-full drop-shadow-md" aria-hidden="true">
              <defs>
                <linearGradient id="sealGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#0D8B5E" />
                  <stop offset="100%" stopColor="#064E35" />
                </linearGradient>
              </defs>
              <path
                d="M32 2l5.4 4.2 6.7-1.3 3 6.2 6.3 2.6-.6 6.8 4.7 5-4.7 5 .6 6.8-6.3 2.6-3 6.2-6.7-1.3L32 62l-5.4-4.2-6.7 1.3-3-6.2-6.3-2.6.6-6.8L6.5 32l4.7-5-.6-6.8 6.3-2.6 3-6.2 6.7 1.3z"
                fill="url(#sealGrad)"
              />
              <circle cx="32" cy="32" r="19" fill="none" stroke="#F9A825" strokeOpacity="0.9" strokeWidth="1.5" strokeDasharray="2 2.5" />
              <path d="M23 32.5l6 6 12-12" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
