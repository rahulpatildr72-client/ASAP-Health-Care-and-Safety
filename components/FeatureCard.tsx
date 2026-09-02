"use client";

import AppIcon from "./icons";

/** Centered service card with icon square and top accent bar (reference: serviceCard). */
export default function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
  index?: number;
}) {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl bg-white p-8 text-center shadow-sm transition-all duration-300 before:absolute before:inset-x-0 before:top-0 before:h-1 before:origin-left before:scale-x-0 before:bg-primary before:transition-transform before:duration-300 before:content-[''] hover:-translate-y-2 hover:shadow-lg hover:before:scale-x-100">
      <span className="icon-square mx-auto mb-6 h-[70px] w-[70px] rounded-2xl group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
        <AppIcon name={icon} className="h-7 w-7" />
      </span>
      <h3 className="font-display text-[1.15rem] font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-[0.9rem] leading-[1.6] text-gray-600">{description}</p>
    </div>
  );
}
