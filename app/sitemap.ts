import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/content/blogPosts";
import { TOOL_META } from "@/lib/seo";

const BASE_URL = "https://shrink-box.com";

/* Updated when tool content or metadata is significantly changed */
const TOOL_LAST_UPDATED = "2026-05-13";

export default function sitemap(): MetadataRoute.Sitemap {
  const toolPaths = Object.values(TOOL_META).map((tool) => tool.url);
  const staticPaths = ["/", "/about", "/contact", "/privacy", "/terms", "/blog", "/tools"];
  const blogPaths = BLOG_POSTS.map((p) => `/blog/${p.slug}`);

  const allPaths = Array.from(new Set([...staticPaths, ...toolPaths, ...blogPaths]));

  return allPaths.map((path) => {
    let priority = 0.5;
    let changefreq: "weekly" | "monthly" | "yearly" = "monthly";
    let lastModified = TOOL_LAST_UPDATED;

    if (path === "/") {
      priority = 1.0;
      changefreq = "weekly";
      lastModified = "2026-05-02";
    } else if (path === "/blog") {
      priority = 0.7;
      changefreq = "weekly";
      lastModified = "2026-05-02";
    } else if (toolPaths.includes(path)) {
      priority = 0.8;
      lastModified = TOOL_LAST_UPDATED;
    } else if (blogPaths.includes(path)) {
      priority = 0.6;
      const post = BLOG_POSTS.find((p) => `/blog/${p.slug}` === path);
      if (post) lastModified = post.date;
    }

    return {
      url: `${BASE_URL}${path}`,
      lastModified: new Date(lastModified),
      changeFrequency: changefreq,
      priority,
    };
  });
}
