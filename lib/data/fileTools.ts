export interface FileTool {
  slug: string;
  name: string;
  shortLabel: string;
  description: string;
  category: "image" | "pdf" | "video";
}

/** Only tools that are actually live. Do not add a slug here until its page ships. */
export const FILE_TOOLS: FileTool[] = [
  {
    slug: "compress-image",
    name: "Compress Image",
    shortLabel: "Compress Image",
    description: "Shrink JPG, PNG, and WebP files without a visible quality loss.",
    category: "image",
  },
  {
    slug: "heic-to-jpg",
    name: "HEIC to JPG Converter",
    shortLabel: "HEIC → JPG",
    description: "Convert iPhone HEIC photos to JPG so any device can open them.",
    category: "image",
  },
  {
    slug: "resize-image",
    name: "Resize Image",
    shortLabel: "Resize Image",
    description: "Set exact pixel dimensions for uploads, avatars, and forms.",
    category: "image",
  },
  {
    slug: "png-to-jpg",
    name: "PNG to JPG Converter",
    shortLabel: "PNG → JPG",
    description: "Convert PNG to JPG and cut file size for photos that don't need transparency.",
    category: "image",
  },
  {
    slug: "jpg-to-png",
    name: "JPG to PNG Converter",
    shortLabel: "JPG → PNG",
    description: "Convert JPG to lossless PNG for logos, screenshots, and flat graphics.",
    category: "image",
  },
  {
    slug: "webp-converter",
    name: "WebP Converter",
    shortLabel: "WebP Converter",
    description: "Convert JPG or PNG to WebP, or WebP back to JPG.",
    category: "image",
  },
  {
    slug: "avif-converter",
    name: "AVIF Converter",
    shortLabel: "AVIF Converter",
    description: "Convert images to AVIF, the smallest widely-supported format.",
    category: "image",
  },
];

export function getFileTool(slug: string): FileTool | undefined {
  return FILE_TOOLS.find((t) => t.slug === slug);
}
