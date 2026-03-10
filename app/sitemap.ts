import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/content/blogPosts";

const BASE_URL = "https://shrinkbox.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const toolPages = [
    "/compress-image",
    "/compress-pdf",
    "/compress-webp",
    "/bulk-compress",
    "/resize-image",
    "/convert-jpg-to-png",
    "/convert-png-to-webp",
    "/convert-jpg-to-webp",
    "/merge-pdf",
    "/split-pdf",
    "/reduce-jpg-size",
    "/reduce-png-size",
  ];

  const staticPages = ["/", "/about", "/contact", "/privacy", "/terms", "/blog"];

  const blogPages = BLOG_POSTS.map((p) => `/blog/${p.slug}`);

  const allPages = [...staticPages, ...toolPages, ...blogPages];

  return allPages.map((path) => ({
    url:              `${BASE_URL}${path}`,
    lastModified:     new Date(),
    changeFrequency:  path === "/" ? "weekly" : "monthly",
    priority:         path === "/" ? 1 : toolPages.includes(path) ? 0.8 : 0.6,
  }));
}
