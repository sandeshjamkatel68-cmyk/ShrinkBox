import type { Metadata } from "next";
import ToolPageShell from "@/components/tools/ToolPageShell";
import ResizeImageTool from "./ResizeImageTool";

export const metadata: Metadata = {
  title: "Resize Image Online — Free, No Upload",
  description:
    "Resize images to exact pixel dimensions for uploads, avatars, and web forms. Runs entirely in your browser, nothing uploaded.",
  alternates: { canonical: "https://shrink-box.com/resize-image" },
};

export default function Page() {
  return (
    <ToolPageShell
      title="Resize Image"
      subhead="Set a maximum width and height for a batch of images at once — processed on your device, never uploaded."
      breadcrumbLabel="Resize Image"
      tool={<ResizeImageTool />}
      howItWorks={[
        "Set the maximum width and height in pixels — the image is scaled down to fit inside that box, aspect ratio preserved.",
        "Drop your images. Each one is decoded, scaled, and re-encoded locally in your browser.",
        "Download each resized image, or grab all of them as a ZIP.",
      ]}
      technicalHeading="Why 'resize' means 'scale to fit', not stretch"
      technicalParagraphs={[
        "This tool never distorts an image. When you set a max width and height, each image is scaled down proportionally until it fits inside that box — the same logic as `object-fit: contain` in CSS. An image already smaller than the target is left at its original size; this tool only shrinks, it doesn't upscale.",
        "Common targets: 1920×1080 for a screen-filling photo, 1200×630 for a social share image, 512×512 for an avatar upload, and 2000px on the long edge for most portal upload limits that are stated in megapixels rather than dimensions.",
        "Resizing and compressing are related but distinct: resizing reduces the pixel count, compression reduces the bytes per pixel. Combining both — as this tool does, encoding the resized output at 85% JPEG quality — gets the biggest file size reduction.",
      ]}
      comparisonTable={{
        headers: ["Original", "Resized to 1920×1080", "Resized to 800×600"],
        rows: [
          ["4032×3024, 5.1 MB", "~1.1 MB", "~340 KB"],
          ["6000×4000, 8.4 MB", "~1.3 MB", "~380 KB"],
        ],
      }}
      faqs={[
        {
          q: "Will this stretch or distort my image?",
          a: "No. The image is scaled to fit within your target width and height while keeping its original aspect ratio.",
        },
        {
          q: "Can I make an image bigger than it already is?",
          a: "This tool only scales down. Upscaling with quality preservation needs a different algorithm (like AI upscaling) and isn't what this tool does.",
        },
        {
          q: "What size should I use for a passport photo or ID upload?",
          a: "Most portals specify exact pixel dimensions in their instructions — enter those directly. If they only give a file size limit, resize to roughly 1000px on the long edge and adjust from there.",
        },
      ]}
      relatedTools={[
        { href: "/compress-image", label: "Compress Image" },
        { href: "/heic-to-jpg", label: "HEIC to JPG" },
        { href: "/png-to-jpg", label: "PNG to JPG" },
      ]}
      schemaName="Resize Image"
      schemaUrl="https://shrink-box.com/resize-image"
    />
  );
}
