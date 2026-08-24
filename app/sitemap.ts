import type { MetadataRoute } from "next";
import { COURSES } from "@/data/courses";
import { SITE_URL } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/courses",
    "/corporate",
    "/gallery",
    "/contact",
    "/privacy",
    "/terms",
  ].map((path) => ({
      url: `${SITE_URL}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })
  );

  const coursePages = COURSES.map((course) => ({
    url: `${SITE_URL}/courses/${course.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...coursePages];
}
