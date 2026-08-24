"use client";

import RevealText from "./RevealText";
import FadeIn from "./FadeIn";

export default function SectionHeading({
  eyebrow,
  number,
  title,
  titleLight,
  subtitle,
  align = "left",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  number?: string;
  title: string;
  titleLight?: string;
  subtitle?: string;
  align?: "center" | "left";
  as?: "h1" | "h2";
}) {
  const isDisplay = Tag === "h1" || Boolean(titleLight);
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}>
      {(eyebrow || number) && (
        <FadeIn>
          <div className={`mb-4 flex items-center gap-3 ${align === "center" ? "justify-center" : "justify-start"}`}>
            {number && (
              <span className="text-xs font-mono font-semibold text-[#3B5BDB]">{number}</span>
            )}
            {eyebrow && (
              <span className="text-xs font-semibold uppercase tracking-widest text-[#1B2559]/70">
                {eyebrow}
              </span>
            )}
          </div>
        </FadeIn>
      )}
      <RevealText
        as={Tag}
        className={`font-display tracking-tight text-[#141414] ${
          isDisplay ? "text-3xl sm:text-4xl lg:text-5xl" : "text-2xl sm:text-3xl lg:text-4xl font-bold"
        }`}
      >
        {titleLight ? (
          <>
            <span className="block font-light">{titleLight}</span>
            <span className="block font-extrabold">{title}</span>
          </>
        ) : (
          <span className={isDisplay ? "block font-extrabold" : "block"}>{title}</span>
        )}
      </RevealText>
      {subtitle && (
        <FadeIn delay={0.2}>
          <p className="mt-3.5 sm:mt-5 text-sm sm:text-base lg:text-lg leading-relaxed text-[#1B2559]/80">{subtitle}</p>
        </FadeIn>
      )}
    </div>
  );
}
