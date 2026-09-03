import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Clock, MapPin, Award, CircleCheck, ArrowRight, MessageCircle, Users } from "lucide-react";
import CTABanner from "@/components/CTABanner";
import PageHero from "@/components/PageHero";
import ParallaxImage from "@/components/ParallaxImage";
import CertificateCard from "@/components/CertificateCard";
import RevealText from "@/components/RevealText";
import FadeIn from "@/components/FadeIn";
import { COURSES, getCourse, CATEGORY_META } from "@/data/courses";
import { CONTACT, SITE_NAME, SITE_URL } from "@/data/site";

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
    { icon: MapPin, label: "Modes", value: course.modes.join(" · ") },
    { icon: Award, label: "Certification", value: "Certificate on completion" },
  ];

  // Local training photos are far more on-topic than the remote placeholder stills.
  const heroImage = course.image.startsWith("http") ? course.cardImage : course.image;

  const waHref = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
    `Hello! I'd like to enquire about the ${course.title}.`
  )}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />

      {/* Course hero */}
      <PageHero breadcrumb={[{ label: "Programs", href: "/courses" }, { label: course.shortTitle }]}>
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="lg:col-span-6">
            <FadeIn>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3.5 py-1.5 text-[0.75rem] font-semibold uppercase tracking-[0.05em] text-white backdrop-blur-[10px]">
                <span className={`h-2 w-2 rounded-full ${course.category === "emergency" ? "bg-accent" : "bg-primary-light"}`} />
                {CATEGORY_META[course.category].label}
              </span>
            </FadeIn>

            <RevealText as="h1" className="font-display text-[2rem] font-extrabold leading-[1.15] text-white sm:text-[2.75rem]">
              {course.title}
            </RevealText>

            <FadeIn delay={0.2}>
              <p className="mt-4 max-w-[600px] text-[1rem] leading-relaxed text-white/80 sm:text-[1.1rem]">{course.tagline}</p>
            </FadeIn>
          </div>

          <div className="relative lg:col-span-6">
            {course.galleryImages && course.galleryImages.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                {course.galleryImages.map((imgSrc, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-[4/3] min-h-[240px] w-full overflow-hidden rounded-2xl border-4 border-white shadow-lg transition-transform duration-500 hover:scale-[1.02] sm:min-h-[300px]"
                  >
                    <Image
                      src={imgSrc}
                      alt={`${course.title} image ${idx + 1}`}
                      fill
                      priority
                      sizes="(max-width: 640px) 100vw, 30vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="relative">
                <ParallaxImage
                  src={heroImage}
                  alt={course.imageAlt}
                  containerClassName="aspect-[4/3] w-full rounded-2xl border-4 border-white shadow-lg"
                  priority
                />
                {/* floating fact chips */}
                <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-lg sm:left-8">
                  <span className="icon-square h-10 w-10 rounded-lg">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display text-[1rem] font-extrabold leading-none text-gray-900">{course.duration}</p>
                    <p className="mt-1 text-[0.7rem] font-medium uppercase tracking-[0.05em] text-gray-500">Session length</p>
                  </div>
                </div>
                <div className="absolute -top-4 right-5 hidden items-center gap-2.5 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-white backdrop-blur-[10px] sm:right-8 sm:flex">
                  <Users className="h-4 w-4 text-accent" />
                  <span className="text-[0.8rem] font-semibold">Small batches · hands-on</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </PageHero>

      {/* Quick facts (reference: trustBar) */}
      <section className="border-b border-gray-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-5 lg:gap-8 lg:px-8">
          {facts.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white px-6 py-4 shadow-sm">
              <span className="icon-square h-[50px] w-[50px] shrink-0">
                <Icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-[0.75rem] text-gray-500">{label}</p>
                <p className="font-display text-[0.95rem] font-semibold leading-[1.3] text-gray-800">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Overview + who should attend + learn */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-8">
            <FadeIn>
              <h2 className="text-center font-display text-[1.75rem] font-bold text-gray-900 sm:text-[2.25rem]">
                <span className="section-title-heading">About This Program</span>
              </h2>
              <div className="mt-5 space-y-4 text-[1rem] leading-[1.8] text-gray-700 sm:text-[1.05rem]">
                {course.overview.map((para) => (
                  <p key={para.slice(0, 40)}>{para}</p>
                ))}
              </div>

              {course.secondaryImage && (
                <div className="mt-8 overflow-hidden rounded-2xl border-4 border-white shadow-lg">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={course.secondaryImage}
                      alt={`${course.title} feature session`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
            </FadeIn>

            <FadeIn delay={0.2} className="mt-14 border-t border-gray-200 pt-12">
              <h2 className="text-center font-display text-[1.75rem] font-bold text-gray-900 sm:text-[2.25rem]">
                <span className="section-title-heading">What You&apos;ll Learn</span>
              </h2>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {course.learn.map((point) => (
                  <li key={point} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-off-white px-4 py-3 text-[0.95rem] text-gray-800">
                    <CircleCheck className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.3} className="mt-14 border-t border-gray-200 pt-12">
              <div className="grid items-center gap-10 md:grid-cols-2">
                <div>
                  <h2 className="text-center font-display text-[1.75rem] font-bold text-gray-900 sm:text-[2.25rem]">
                    <span className="section-title-heading">Certification</span>
                  </h2>
                  <p className="mt-5 text-[1rem] leading-[1.8] text-gray-700 sm:text-[1.05rem]">{course.certification}</p>
                  <p className="mt-4 text-[0.875rem] text-gray-500">
                    Certificates are issued in the participant&apos;s name and note the program completed and the date of training.
                  </p>
                </div>
                <div className="mx-auto w-full max-w-sm">
                  <CertificateCard program={course.shortTitle} />
                </div>
              </div>
            </FadeIn>
          </div>

          <aside className="lg:col-span-4">
            <FadeIn delay={0.1}>
              <div className="sticky top-32 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
                <div className="bg-green-gradient px-7 py-6 text-white">
                  <span className="text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-white/70">Target Audience</span>
                  <h2 className="mt-1 font-display text-[1.25rem] font-semibold text-white">Who Should Attend</h2>
                </div>
                <div className="p-7">
                  <ul className="space-y-3.5">
                    {course.whoShouldAttend.map((who) => (
                      <li key={who} className="flex items-start gap-2.5 text-[0.9rem] leading-[1.6] text-gray-700">
                        <Users className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{who}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 space-y-3 border-t border-gray-200 pt-6">
                    <Link href="/contact" className="btn btn-primary btn-block">
                      Book This Training <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-block">
                      <MessageCircle className="h-4 w-4" /> Ask on WhatsApp
                    </a>
                  </div>
                  <p className="mt-5 flex items-center gap-2 text-xs text-gray-500">
                    <Clock className="h-3.5 w-3.5" /> Typical response within 24 hours
                  </p>
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
