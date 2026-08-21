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
  const formattedIndex = typeof index === "number" ? String(index + 1).padStart(2, "0") : undefined;

  return (
    <div className="border-t border-[rgba(0,0,0,0.08)] pt-8 pb-4">
      {formattedIndex && (
        <span className="font-mono text-xs text-accent block mb-3">
          0{formattedIndex}
        </span>
      )}
      <h3 className="font-display text-xl font-bold text-ink">{title}</h3>
      <p className="mt-3 leading-relaxed text-navy-600">{description}</p>
    </div>
  );
}
