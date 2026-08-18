import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  titleLight,
  subtitle,
  align = "center",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  /** Optional light-weight first line rendered above the bold title (mixed-weight display pattern). */
  titleLight?: string;
  subtitle?: string;
  align?: "center" | "left";
  as?: "h1" | "h2";
}) {
  const isDisplay = Tag === "h1" || Boolean(titleLight);
  return (
    <Reveal className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}>
      {eyebrow && (
        <span className="mb-4 inline-flex items-center rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-brand-600 shadow-sm ring-1 ring-brand-100">
          {eyebrow}
        </span>
      )}
      <Tag
        className={`font-display tracking-tight text-navy-900 ${
          isDisplay ? "text-4xl sm:text-5xl" : "text-3xl font-bold sm:text-4xl"
        }`}
      >
        {titleLight ? (
          <>
            <span className="block font-light">{titleLight}</span>
            <span className="block font-extrabold">{title}</span>
          </>
        ) : (
          <span className={isDisplay ? "font-extrabold" : undefined}>{title}</span>
        )}
      </Tag>
      {subtitle && <p className="mt-5 text-lg leading-relaxed text-navy-600">{subtitle}</p>}
    </Reveal>
  );
}
