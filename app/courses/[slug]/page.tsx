import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  MonitorSmartphone,
  Users,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import CTABanner from "@/components/CTABanner";
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
    { icon: Clock, label: "Duration", value: course.duration },
    { icon: MonitorSmartphone, label: "Modes", value: course.modes.join(" · ") },
    { icon: Award, label: "Certification", value: "Certificate on successful completion" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />

      {/* Course hero */}
      <section className="bg-peri-wash-soft pb-16 pt-36 sm:pt-40">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-5 text-sm font-medium text-navy-500">
              <Link href="/courses" className="transition-colors hover:text-brand-600">
                Training Programs
              </Link>{" "}
              / <span className="text-navy-800">{course.title}</span>
            </nav>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-navy-950 sm:text-5xl">
              {course.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-600">{course.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 font-display text-base font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:-translate-y-0.5 hover:bg-brand-700"
              >
                Enquire About This Training <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-float">
              {/* PLACEHOLDER photo — replace with a real session photo for this course. */}
              <Image
                src={course.image}
                alt={course.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 576px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Quick facts */}
      <section className="border-y border-navy-300/20 bg-white py-10">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:grid-cols-3 lg:px-8">
          {facts.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-navy-500">{label}</p>
                <p className="mt-0.5 font-medium text-navy-900">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Overview + who should attend + learn */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-3 lg:gap-16 lg:px-8">
          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                About This Program
              </h2>
              <div className="mt-5 space-y-5 text-lg leading-relaxed text-navy-600">
                {course.overview.map((para) => (
                  <p key={para.slice(0, 40)}>{para}</p>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-14">
              <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                What You&apos;ll Learn
              </h2>
              <ul className="mt-6 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
                {course.learn.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 font-medium text-navy-800">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="mt-14">
              <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                Certification
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-navy-600">{course.certification}</p>
            </Reveal>
          </div>

          <aside>
            <Reveal delay={0.1}>
              <div className="sticky top-28 rounded-3xl bg-brand-50/60 p-8 ring-1 ring-brand-100">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand-600 shadow-sm ring-1 ring-brand-100">
                  <Users className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 className="mt-5 font-display text-xl font-bold text-navy-900">
                  Who Should Attend
                </h2>
                <ul className="mt-5 space-y-3">
                  {course.whoShouldAttend.map((who) => (
                    <li key={who} className="flex items-start gap-2.5 text-navy-700">
                      <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-600" aria-hidden="true" />
                      {who}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 font-display font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:-translate-y-0.5 hover:bg-brand-700"
                >
                  Book This Training <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
