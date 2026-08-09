import type { Metadata } from "next";
import ToolPageShell from "@/components/tools/ToolPageShell";
import ConvertTool from "@/components/tools/ConvertTool";

export const metadata: Metadata = {
  title: "PNG to JPG Converter — Free, No Upload",
  description: "Convert PNG images to JPG and cut file size for photos that don't need transparency. Runs in your browser, nothing uploaded.",
  alternates: { canonical: "https://shrink-box.com/png-to-jpg" },
};

export default function Page() {
  return (
    <ToolPageShell
      title="PNG to JPG Converter"
      subhead="Convert PNG to JPG for photos and screenshots that don't need transparency — smaller files, processed locally."
      breadcrumbLabel="PNG to JPG"
      tool={<ConvertTool accept="image/png,.png" outputMime="image/jpeg" outputExt="jpg" quality={0.9} dropLabel="Drop PNG files here, or choose files" dropHint="Transparent areas become white" />}
      howItWorks={[
        "Drop one or more PNG files.",
        "Your browser decodes each PNG and re-encodes it as a JPG at 90% quality, flattening any transparency onto white.",
        "Download the converted JPGs individually or as a ZIP.",
      ]}
      technicalHeading="When PNG to JPG actually helps"
      technicalParagraphs={[
        "PNG uses lossless compression, which is ideal for flat graphics, logos, and screenshots with sharp edges and few colors — but it's a poor fit for photographs, where it produces files several times larger than an equivalent-quality JPG.",
        "JPG's lossy compression is built for exactly that case: continuous-tone photographic content. Converting a photo saved as PNG (common when it's been through a screenshot tool or certain export pipelines) to JPG usually cuts its size by 60–85% with no visible difference.",
        "The one thing you lose is transparency — JPG has no alpha channel, so any transparent pixels in the source PNG are filled with white in the output. If you need to keep transparency, this isn't the right conversion.",
      ]}
      comparisonTable={{
        headers: ["Content type", "PNG size", "JPG size (90%)"],
        rows: [
          ["Photo screenshot, 1920×1080", "3.8 MB", "~480 KB"],
          ["Scanned document page", "2.1 MB", "~310 KB"],
        ],
      }}
      faqs={[
        {
          q: "What happens to transparent areas?",
          a: "They're filled with white, since JPG doesn't support an alpha channel. If your PNG relies on transparency, keep it as PNG or use WebP instead.",
        },
        {
          q: "Will I lose image quality?",
          a: "At 90% JPG quality the loss is not visible in normal viewing for photographic content. Flat graphics with sharp edges (text, logos) can show mild artifacting — for those, PNG usually stays the better format.",
        },
      ]}
      relatedTools={[
        { href: "/jpg-to-png", label: "JPG to PNG" },
        { href: "/compress-image", label: "Compress Image" },
        { href: "/webp-converter", label: "WebP Converter" },
      ]}
      schemaName="PNG to JPG Converter"
      schemaUrl="https://shrink-box.com/png-to-jpg"
    />
  );
}
