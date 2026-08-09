import type { Metadata } from "next";
import ToolPageShell from "@/components/tools/ToolPageShell";
import CompressImageTool from "./CompressImageTool";

export const metadata: Metadata = {
  title: "Compress Image Online — Free, No Upload",
  description:
    "Compress JPG, PNG, and WebP images without losing visible quality. Runs entirely in your browser — nothing is uploaded to a server.",
  alternates: { canonical: "https://shrink-box.com/compress-image" },
};

export default function Page() {
  return (
    <ToolPageShell
      title="Compress Image"
      subhead="Shrink JPG, PNG, and WebP files down without a visible quality loss — processed on your device, never uploaded."
      breadcrumbLabel="Compress Image"
      tool={<CompressImageTool />}
      howItWorks={[
        "Drop an image or choose one from your device.",
        "Your browser decodes it, re-encodes it at the quality you set, and shows the byte reduction live.",
        "Download the result, or process more images and download them together as a ZIP.",
      ]}
      technicalHeading="What's actually happening when you compress a JPG"
      technicalParagraphs={[
        "JPEG compression works by discarding image detail the human eye is least sensitive to — mostly high-frequency color information — using a technique called chroma subsampling combined with a discrete cosine transform. The 'quality' slider controls how aggressively that detail gets discarded.",
        "Quality 75 is the sweet spot for most photos: below it, blocky compression artifacts start to appear around hard edges; above it, file size climbs fast for a difference that's very hard to see. Quality 90+ is really only worth it for images that will themselves be re-compressed or heavily zoomed.",
        "PNG is different — it's lossless, so 'compressing' a PNG means re-encoding its internal filter and DEFLATE settings more efficiently, not discarding data. That's why PNG compression ratios are much smaller than JPEG's for photographic content, and why this tool re-encodes PNG inputs as PNG rather than silently converting them to JPG.",
      ]}
      comparisonTable={{
        headers: ["Original", "Quality 75 (default)", "Quality 90", "Quality 50"],
        rows: [
          ["4.2 MB JPG photo", "~950 KB", "~1.6 MB", "~520 KB"],
          ["1.1 MB JPG screenshot", "~310 KB", "~480 KB", "~190 KB"],
        ],
      }}
      faqs={[
        {
          q: "What quality setting should I use?",
          a: "75% is a good default for photos shared online or attached to email — the size reduction is large and the loss is not visible at normal viewing sizes. Go higher (85–90%) for images you expect to be zoomed or reprinted.",
        },
        {
          q: "Does this upload my images anywhere?",
          a: "No. Compression happens locally using the Canvas API. Your image data never leaves the browser tab.",
        },
        {
          q: "Can I compress a batch of images at once?",
          a: "Yes, drop up to 5 files at a time on the free tier and download them individually or zipped.",
        },
        {
          q: "Why is my PNG still large after compressing?",
          a: "PNG is lossless, so gains are modest for photographic PNGs. If the image doesn't need transparency, converting it to JPG with the PNG to JPG tool will usually cut file size far more.",
        },
      ]}
      relatedTools={[
        { href: "/resize-image", label: "Resize Image" },
        { href: "/png-to-jpg", label: "PNG to JPG" },
        { href: "/heic-to-jpg", label: "HEIC to JPG" },
      ]}
      schemaName="Compress Image"
      schemaUrl="https://shrink-box.com/compress-image"
    />
  );
}
