import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; href?: string };

/**
 * Inner-page hero: deep-green gradient with faint decorative circles and an
 * optional breadcrumb (reference: PageHero).
 */
export default function PageHero({
  children,
  breadcrumb,
  padding = "pt-14 pb-14 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20",
  className = "",
}: {
  children: React.ReactNode;
  breadcrumb?: Crumb[];
  padding?: string;
  className?: string;
}) {
  return (
    <section className={`bg-green-gradient-deep relative overflow-hidden text-white ${padding} ${className}`}>
      <span aria-hidden="true" className="pointer-events-none absolute -right-[20%] -top-1/2 h-[500px] w-[500px] rounded-full bg-white/[0.03]" />
      <span aria-hidden="true" className="pointer-events-none absolute -bottom-[30%] -left-[10%] h-[300px] w-[300px] rounded-full bg-white/[0.02]" />
      <div className="relative">
        {breadcrumb && (
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-2 text-[0.85rem] text-white/60">
              <Link href="/" className="text-white/70 transition-colors hover:text-white">
                Home
              </Link>
              {breadcrumb.map((crumb) => (
                <span key={crumb.label} className="flex items-center gap-2">
                  <ChevronRight className="h-3.5 w-3.5" />
                  {crumb.href ? (
                    <Link href={crumb.href} className="text-white/70 transition-colors hover:text-white">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/80">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
