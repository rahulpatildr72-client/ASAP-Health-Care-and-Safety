"use client";

export default function FeatureCard({
  title,
  description,
  index,
}: {
  icon: string;
  title: string;
  description: string;
  index?: number;
}) {
  const formattedIndex = typeof index === "number" ? String(index + 1).padStart(3, "0") : undefined;

  return (
    <div className="border-t border-[rgba(0,0,0,0.08)] pt-8 pb-4">
      {formattedIndex && (
        <span className="font-mono text-xs font-semibold text-[#3B5BDB] block mb-3">
          {formattedIndex}
        </span>
      )}
      <h3 className="font-display text-xl font-bold text-[#141414]">{title}</h3>
      <p className="mt-3 leading-relaxed text-[#1B2559]/75">{description}</p>
    </div>
  );
}
