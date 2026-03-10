import type { Metadata } from "next";
import ConvertImageWidget from "@/components/tools/ConvertImageWidget";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";

export const metadata: Metadata = {
  title: "Convert JPG to PNG Online — Free JPG to PNG Converter",
  description: "Convert JPG and JPEG images to PNG format online for free. Lossless output, transparent background support. No signup.",
};

const FAQ_ITEMS = [
  { q: "Why convert JPG to PNG?", a: "PNG supports transparency and uses lossless compression — ideal for logos, screenshots, and graphics where you need crisp edges or a transparent background." },
  { q: "Will converting JPG to PNG improve quality?", a: "Converting from JPG to PNG won't recover quality lost during the original JPG compression, but the PNG output won't lose any further quality." },
  { q: "Is PNG always larger than JPG?", a: "Yes, usually. PNG is lossless so files tend to be larger than equivalent JPGs. Use PNG when you need transparency or lossless quality, JPG for photos." },
];

export default function JpgToPngPage() {
  return (
    <>
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero icon="🔄" title="Convert JPG to PNG" description="Upload a JPG or JPEG image and convert it to PNG format instantly. Supports transparency. Free and private." badge="JPG → PNG · Free" />
        <ConvertImageWidget defaultTarget="png" allowedSources=".jpg,.jpeg" />
        <div className="mt-8"><TrustSignals /></div>
      </section>
      <section className="max-w-4xl mx-auto px-4 pb-16"><FAQ items={FAQ_ITEMS} /></section>
    </>
  );
}
