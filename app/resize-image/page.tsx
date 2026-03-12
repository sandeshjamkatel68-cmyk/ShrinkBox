import type { Metadata } from "next";
import ResizeImageWidget from "@/components/tools/ResizeImageWidget";
import { TrustSignals, FAQ, ToolHero } from "@/components/seo";

export const metadata: Metadata = {
  title: "Resize Image Online Free — JPG, PNG & WebP Resizer | ShrinkBox",
  description:
    "Resize JPG, PNG, and WebP images online for free. Set exact width and height in pixels or resize by percentage. No signup required. Fast, private, and easy with ShrinkBox.",
  keywords: [
    "resize image online",
    "image resizer",
    "resize jpg online",
    "resize png online",
    "resize webp online",
    "change image dimensions",
    "resize image in pixels",
    "resize image by percentage",
    "free image resizer",
    "ShrinkBox image resizer",
  ],
  alternates: {
    canonical: "https://shrink-box.com/resize-image",
  },
  openGraph: {
    title: "Resize Image Online Free — JPG, PNG & WebP Resizer | ShrinkBox",
    description:
      "Resize JPG, PNG, and WebP images online for free. Set exact dimensions or resize by percentage with ShrinkBox.",
    url: "https://shrink-box.com/resize-image",
    siteName: "ShrinkBox",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resize Image Online Free — JPG, PNG & WebP Resizer | ShrinkBox",
    description:
      "Resize images online for free. Change width and height in pixels or percentage with ShrinkBox.",
  },
};

const FAQ_ITEMS = [
  {
    q: "Can I resize an image without losing quality?",
    a: "For small adjustments, quality loss is usually minimal. Downscaling often keeps images looking clear while reducing dimensions. Upscaling does not add real detail, so it may not improve visual quality.",
  },
  {
    q: "What image formats are supported?",
    a: "ShrinkBox supports JPG, PNG, and WebP images for resizing.",
  },
  {
    q: "Can I resize by pixels or percentage?",
    a: "Yes. You can resize an image by entering exact dimensions in pixels or by scaling it using a percentage, depending on the tool settings.",
  },
  {
    q: "What fit modes are available?",
    a: "Fit Inside keeps the whole image within the target size without cropping. Cover fills the target size but may crop edges. Contain keeps the full image visible and may add padding. Stretch forces exact dimensions but can distort the image.",
  },
  {
    q: "Does resizing change the file format?",
    a: "No. Resizing changes the image dimensions, not the file format. A JPG stays JPG, a PNG stays PNG, and a WebP stays WebP unless you use a separate converter.",
  },
  {
    q: "Is this image resizer free to use?",
    a: "Yes. ShrinkBox lets you resize images online for free with no signup required.",
  },
  {
    q: "Are my uploaded images stored?",
    a: "No. Your files are processed securely and automatically removed after processing.",
  },
];

export default function ResizeImagePage() {
  return (
    <>
      <section className="max-w-2xl mx-auto px-4 pt-14 pb-8">
        <ToolHero
          icon="📐"
          title="Resize Image Online"
          description="Resize JPG, PNG, and WebP images by exact pixel dimensions or percentage. Change image size online in seconds with no signup required."
          badge="Free · Instant · Private"
        />

        <div className="mt-6 mb-8">
          <p className="text-[var(--text-muted)] leading-relaxed">
            ShrinkBox helps you resize images online for free without installing extra
            software. Change image width and height in pixels or resize by percentage for
            websites, email, forms, social media, assignments, and digital projects. It is
            a quick and simple way to adjust image dimensions while keeping the file format
            the same.
          </p>
        </div>

        <ResizeImageWidget />

        <div className="mt-8">
          <TrustSignals />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <FAQ items={FAQ_ITEMS} />
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">
            Why use an online image resizer?
          </h2>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
            Resizing an image is useful when a file is too large in dimensions for a
            website, form upload, email attachment, profile image, or design layout.
            Changing image dimensions helps you prepare images for specific uses without
            needing a desktop editing application.
          </p>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
            This is especially useful for students, developers, designers, bloggers,
            businesses, and anyone working with digital images. Smaller or properly sized
            images can load faster, fit platform requirements better, and be easier to
            manage across devices.
          </p>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            ShrinkBox gives you a fast and private way to resize JPG, PNG, and WebP images
            online for free, without creating an account or installing software.
          </p>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-4 pb-16 text-sm text-[var(--text-muted)] leading-relaxed space-y-4">
        <h2 className="text-xl font-bold text-[var(--text)]">
          How image resizing works
        </h2>
        <p>
          Image resizing changes the width and height of the image to match the dimensions
          you choose. This can be done with exact pixel values or by scaling the image by a
          percentage of its original size.
        </p>
        <p>
          Resizing is different from compression. Compression reduces file size, while
          resizing changes the image dimensions. In many cases, resizing also helps reduce
          file weight because smaller dimensions usually require less data.
        </p>
      </section>
    </>
  );
}