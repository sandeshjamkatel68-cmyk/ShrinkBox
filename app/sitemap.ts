import { MetadataRoute } from "next";
import { FILE_TOOLS } from "@/lib/data/fileTools";

const BASE = "https://shrink-box.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-08-09");

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/tools`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.5 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
  ];

  const toolPages: MetadataRoute.Sitemap = FILE_TOOLS.map((tool) => ({
    url: `${BASE}/${tool.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...toolPages];
}
