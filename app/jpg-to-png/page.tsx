import type { Metadata } from "next";
import ToolPageShell from "@/components/tools/ToolPageShell";
import ConvertTool from "@/components/tools/ConvertTool";

export const metadata: Metadata = {
  title: "JPG to PNG Converter — Free, No Upload",
  description: "Convert JPG images to lossless PNG for logos, screenshots, and graphics. Runs in your browser, nothing uploaded.",
  alternates: { canonical: "https://shrink-box.com/jpg-to-png" },
};

export default function Page() {
  return (
    <ToolPageShell
      title="JPG to PNG Converter"
      subhead="Convert JPG to lossless PNG when you need transparency or sharp-edged graphics — processed locally, never uploaded."
      breadcrumbLabel="JPG to PNG"
      tool={<ConvertTool accept="image/jpeg,.jpg,.jpeg" outputMime="image/png" outputExt="png" dropLabel="Drop JPG files here, or choose files" dropHint="Output is lossless, so file size will increase" />}
      howItWorks={[
        "Drop one or more JPG files.",
        "Your browser decodes each JPG and re-encodes it as a lossless PNG.",
        "Download the converted PNGs individually or as a ZIP.",
      ]}
      technicalHeading="Why convert to PNG at all"
      technicalParagraphs={[
        "PNG's lossless compression preserves every pixel exactly, which matters for two cases: images with transparency, and graphics with hard edges — text, icons, logos, diagrams — where JPEG's compression artifacts show up as visible blur or ringing around edges.",
        "Converting a JPG to PNG doesn't recover detail the JPG already lost — a blurry JPG stays blurry as a PNG. What it does is stop further generational loss: if you plan to edit and re-save the image multiple times, doing that as PNG avoids re-compressing lossy artifacts on every save.",
        "Expect the file to get larger, sometimes significantly — PNG has no equivalent to JPEG's aggressive photographic compression, so a photo converted to PNG can be 3–5x the original size.",
      ]}
      faqs={[
        {
          q: "Will converting to PNG improve image quality?",
          a: "No — it preserves whatever quality the JPG already had, it doesn't restore detail lost during the original JPEG compression. It does prevent further loss on future edits.",
        },
        {
          q: "Why is my PNG so much bigger than the JPG?",
          a: "PNG is lossless and JPG is lossy, so PNG files are inherently larger for photographic content. This is expected and not a bug.",
        },
      ]}
      relatedTools={[
        { href: "/png-to-jpg", label: "PNG to JPG" },
        { href: "/resize-image", label: "Resize Image" },
        { href: "/webp-converter", label: "WebP Converter" },
      ]}
      schemaName="JPG to PNG Converter"
      schemaUrl="https://shrink-box.com/jpg-to-png"
    />
  );
}
