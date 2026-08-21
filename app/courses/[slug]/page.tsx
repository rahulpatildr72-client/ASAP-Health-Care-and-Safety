import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTABanner from "@/components/CTABanner";
import ParallaxImage from "@/components/ParallaxImage";
import RevealText from "@/components/RevealText";
import FadeIn from "@/components/FadeIn";
import { COURSES, getCourse } from "@/data/courses";
import { SITE_NAME, SITE_URL } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return COURSES.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};
  return {
    title: course.title,
    description: course.tagline,
    openGraph: {
      title: `${course.title} | ${SITE_NAME}`,
      description: course.tagline,
      url: `${SITE_URL}/courses/${course.slug}`,
    },
  };
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.tagline,
    url: `${SITE_URL}/courses/${course.slug}`,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    hasCourseInstance: course.modes.map((mode) => ({
      "@type": "CourseInstance",
      courseMode: mode.toLowerCase().includes("online") ? "Online" : "Onsite",
    })),
  };

  const facts = [
    { label: "Duration", value: course.duration },
    { label: "Modes", value: course.modes.join(" · ") },
    { label: "Certification", value: "Certificate on completion" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />

      {/* Course hero */}
      <section className="bg-surface pb-20 pt-36 sm:pt-44">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-6">
            <FadeIn>
              <nav aria-label="Breadcrumb" className="mb-4 text-xs font-semibold uppercase tracking-widest text-navy-500">
                <Link href="/courses" className="link-underline hover:text-ink">
                  Programs
                </Link>{" "}
                / <span className="text-ink">{course.title}</span>
              </nav>
            </FadeIn>

            <RevealText as="h1" className="font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
              {course.title}
            </RevealText>

            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg leading-relaxed text-navy-600">{course.tagline}</p>
            </FadeIn>

            <FadeIn delay={0.3} className="mt-8">
              <Link
                href="/contact"
                className="group link-underline inline-flex items-center gap-1.5 text-base font-semibold text-ink"
              >
                Enquire About This Training
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </FadeIn>
          </div>

          <div className="lg:col-span-6">
            <ParallaxImage
              src={course.image}
              alt={course.imageAlt}
              containerClassName="aspect-[4/3] w-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="border-y border-[rgba(0,0,0,0.08)] bg-white py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:grid-cols-3 lg:px-8">
          {facts.map(({ label, value }) => (
            <div key={label} className="border-l border-[rgba(0,0,0,0.08)] pl-6 first:border-l-0 first:pl-0">
              <p className="text-xs font-semibold uppercase tracking-widest text-navy-500">{label}</p>
              <p className="mt-2 font-display text-lg font-bold text-ink">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Overview + who should attend + learn */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-8">
            <FadeIn>
              <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
                About This Program
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-navy-600">
                {course.overview.map((para) => (
                  <p key={para.slice(0, 40)}>{para}</p>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="mt-16 border-t border-[rgba(0,0,0,0.08)] pt-12">
              <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
                What You&apos;ll Learn
              </h2>
              <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {course.learn.map((point) => (
                  <li key={point} className="text-base text-navy-700">
                    — {point}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.3} className="mt-16 border-t border-[rgba(0,0,0,0.08)] pt-12">
              <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
                Certification
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-navy-600">{course.certification}</p>
            </FadeIn>
          </div>

          <aside className="lg:col-span-4">
            <FadeIn delay={0.1}>
              <div className="sticky top-32 border border-[rgba(0,0,0,0.08)] bg-surface p-8">
                <span className="text-xs font-mono text-accent">TARGET AUDIENCE</span>
                <h2 className="mt-2 font-display text-xl font-bold text-ink">
                  Who Should Attend
                </h2>
                <ul className="mt-6 space-y-3.5 border-t border-[rgba(0,0,0,0.08)] pt-6">
                  {course.whoShouldAttend.map((who) => (
                    <li key={who} className="text-sm text-navy-700">
                      — {who}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 border-t border-[rgba(0,0,0,0.08)] pt-6">
                  <Link
                    href="/contact"
                    className="group link-underline inline-flex items-center gap-1.5 text-sm font-semibold text-ink"
                  >
                    Book This Training
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </FadeIn>
          </aside>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
