"use client";

import RevealText from "./RevealText";
import FadeIn from "./FadeIn";

/** Splits a title so the last word(s) can carry the green→amber gradient (reference: trainingsHeading span). */
function splitTitle(title: string) {
  const words = title.trim().split(/\s+/);
  const tailCount = words.length >= 5 ? 2 : 1;
  return {
    lead: words.slice(0, words.length - tailCount).join(" "),
    tail: words.slice(words.length - tailCount).join(" "),
  };
}

export default function SectionHeading({
  eyebrow,
  number,
  title,
  titleLight,
  subtitle,
  align = "center",
  as: Tag = "h2",
  tone = "dark",
  gradient = true,
  weight = "bold",
  highlight,
}: {
  eyebrow?: string;
  number?: string;
  title: string;
  titleLight?: string;
  subtitle?: string;
  align?: "center" | "left";
  as?: "h1" | "h2";
  /** `light` renders white text for use on the green page hero. */
  tone?: "dark" | "light";
  /** Apply the gradient accent to the last word(s) of left-aligned headings. */
  gradient?: boolean;
  /** `medium` renders a light-tone single-line title in the softer titleLight style. */
  weight?: "bold" | "medium";
  /** Phrase inside `title` to render with the green-to-gold gradient (centered variant). */
  highlight?: string;
}) {
  const centeredTitle = titleLight ? `${titleLight} ${title}` : title;
  const hi = highlight && centeredTitle.includes(highlight) ? highlight : undefined;
  const renderCenteredTitle = () => {
    if (!hi) return centeredTitle;
    const at = centeredTitle.indexOf(hi);
    return (
      <>
        {centeredTitle.slice(0, at)}
        <span className="text-gradient whitespace-nowrap">{hi}</span>
        {centeredTitle.slice(at + hi.length)}
      </>
    );
  };
  const light = tone === "light";
  const eyebrowText = [number, eyebrow].filter(Boolean).join("  ");

  /* ── Light (page hero) ── */
  if (light) {
    return (
      <div className="max-w-3xl">
        {eyebrowText && (
          <FadeIn>
            <p className="mb-4 flex items-center gap-3 text-[0.85rem] font-medium uppercase tracking-[0.15em] text-white/80">
              <span className="h-0.5 w-10 bg-accent" aria-hidden="true" />
              {eyebrowText}
            </p>
          </FadeIn>
        )}
        <RevealText as={Tag} className="font-display text-[2rem] leading-[1.15] text-white sm:text-[2.75rem]">
          {titleLight ? (
            <>
              <span className="block font-medium text-white/85">{titleLight}</span>
              <span className="block font-extrabold">{title}</span>
            </>
          ) : (
            <span className={weight === "medium" ? "block font-medium text-white/85" : "block font-extrabold"}>{title}</span>
          )}
        </RevealText>
        {subtitle && (
          <FadeIn delay={0.2}>
            <p className="mt-4 max-w-[600px] text-[1rem] leading-relaxed text-white/80 sm:text-[1.1rem]">{subtitle}</p>
          </FadeIn>
        )}
      </div>
    );
  }

  /* ── Centered section title with green underline (reference: .section-title) ── */
  if (align === "center") {
    return (
      <div className="section-title">
        {/* Label pill sits on the left edge; title and subtitle stay centered */}
        {eyebrowText && (
          <FadeIn className="text-left">
            <span className="tag-pill mb-5">{eyebrowText}</span>
          </FadeIn>
        )}
        <div className="mx-auto max-w-3xl">
          <RevealText
            as={Tag}
            className="font-display text-[1.75rem] font-bold tracking-[-0.01em] text-gray-900 sm:text-[2.25rem]"
          >
            <span className="block">
              <span className="section-title-heading">{renderCenteredTitle()}</span>
            </span>
          </RevealText>
          {subtitle && (
            <FadeIn delay={0.2}>
              <p className="mx-auto mt-6 max-w-[600px] text-[1rem] leading-relaxed text-gray-600 sm:text-[1.1rem]">{subtitle}</p>
            </FadeIn>
          )}
        </div>
      </div>
    );
  }

  /* ── Left-aligned with tag pill and gradient tail (reference: trainingsHeader) ── */
  const { lead, tail } = splitTitle(title);
  return (
    <div className="max-w-3xl text-left">
      {eyebrowText && (
        <FadeIn>
          <span className="tag-pill mb-5">{eyebrowText}</span>
        </FadeIn>
      )}
      <RevealText
        as={Tag}
        className="font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-gray-900 sm:text-[2.5rem] lg:text-[3rem]"
      >
        {titleLight ? (
          <>
            <span className="block font-medium text-gray-700">{titleLight}</span>
            <span className="block">{title}</span>
          </>
        ) : (
          <span className="block">
            {lead && <>{lead} </>}
            {gradient ? <span className="text-gradient">{tail}</span> : tail}
          </span>
        )}
      </RevealText>
      {subtitle && (
        <FadeIn delay={0.2}>
          <p className="mt-4 max-w-2xl text-[0.95rem] leading-[1.7] text-gray-600 sm:text-[1.05rem]">{subtitle}</p>
        </FadeIn>
      )}
    </div>
  );
}
