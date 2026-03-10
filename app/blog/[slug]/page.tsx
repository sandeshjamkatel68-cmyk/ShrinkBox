import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/content/blogPosts";

// ── Full article content keyed by slug ───────────────────────────────────────
const ARTICLES: Record<string, { intro: string; sections: { h2: string; body: string }[]; cta: { label: string; href: string } }> = {
  "how-to-compress-images-for-web": {
    intro: `Images are the single biggest contributor to slow page load times. Studies consistently show that pages loading in under 2 seconds have higher conversion rates, lower bounce rates, and rank better on Google. If your images aren't compressed, you're leaving performance on the table — and your visitors feel it, even if they can't name why.

This guide explains exactly how to compress JPG, PNG, and WebP images for web use — with practical settings, real expectations, and no fluff.`,
    sections: [
      {
        h2: "Why image compression matters for SEO",
        body: `Google's Core Web Vitals scoring includes Largest Contentful Paint (LCP) — which measures how quickly the biggest visible element on a page loads. In most cases, that element is an image. Uncompressed images directly hurt your LCP score, which directly hurts your search ranking.

Beyond SEO, compressed images mean lower bandwidth costs, faster mobile load times, and a better experience for users on slower connections.`,
      },
      {
        h2: "JPG compression: the right quality setting",
        body: `JPEG uses lossy compression — it discards some image data to achieve smaller file sizes. The key is finding the quality level where the file is small but the image still looks good.

For most web images, a quality setting of 75–85% is ideal. At 80%, you typically see a 30–60% reduction in file size compared to the original with no visible difference at normal screen sizes. Going below 65% starts to show noticeable artifacts, especially in gradients and skin tones.

ShrinkBox's "Medium" compression level targets 78% quality — the sweet spot for web use.`,
      },
      {
        h2: "PNG compression: strip metadata first",
        body: `PNG is lossless by default, which means compression has more limited effect on file size compared to JPEG. However, a significant amount of PNG file size often comes from embedded metadata — color profiles, creation software stamps, comments, and EXIF data.

Stripping this metadata alone can reduce a PNG by 15–30%. After that, applying palette optimization (converting to indexed color when the image has limited colors) can reduce size by another 20–50% for illustrations and screenshots.

For photos in PNG format, consider converting to WebP instead — you'll get better results.`,
      },
      {
        h2: "WebP: the best format for web images",
        body: `WebP was developed by Google specifically for the web. It supports both lossy and lossless compression, and delivers 25–35% smaller files than JPEG at equivalent quality. It also supports transparency like PNG.

All modern browsers support WebP. If you're building a website, WebP should be your default format. Use ShrinkBox to convert your existing JPGs and PNGs to WebP, or compress existing WebP files further.`,
      },
      {
        h2: "Practical workflow",
        body: `Here's a simple workflow for compressing images before uploading them to a website:

1. Export from your design tool at 2x resolution (retina support) but at standard quality settings.
2. Upload to ShrinkBox and choose "Medium" compression.
3. If the output looks good, use it. If you need more size reduction, try "High".
4. For PNG files with transparency, check if converting to WebP works for your use case.

Always compare the before and after sizes. A good compression result for a photo is 40–60% reduction. For screenshots and illustrations, 20–40% is normal.`,
      },
    ],
    cta: { label: "Compress your images now", href: "/compress-image" },
  },

  "reduce-pdf-file-size": {
    intro: `A PDF that's too large to email is one of the most common file frustrations. Email providers typically cap attachments at 10–25 MB, and many upload forms have similar limits. Here are five methods to reduce PDF file size, starting with the fastest free options.`,
    sections: [
      {
        h2: "Method 1: Use a free online compressor (fastest)",
        body: `The easiest option for occasional use. Upload your PDF to ShrinkBox, and it will strip metadata and optimize the file structure. This works best on PDFs exported from word processors, presentations, or web browsers — files that often carry significant metadata overhead.

Best for: Text-heavy PDFs, documents created in Word, Google Docs, or Keynote.`,
      },
      {
        h2: "Method 2: Re-export from the original source",
        body: `If you have access to the original file (Word doc, PowerPoint, etc.), re-exporting with compression settings is often the most effective approach.

In Microsoft Office: File → Export → Create PDF/XPS → Options → choose "Minimum size (publishing online)". This can reduce size by 50–80% compared to the default export.

In Google Docs: File → Download → PDF. Google's export is generally well-optimized.`,
      },
      {
        h2: "Method 3: Reduce image quality within the PDF",
        body: `If your PDF contains many high-resolution images (scanned documents, photo-heavy reports), the images are likely the main source of large file size. Tools like Adobe Acrobat Pro allow you to re-compress embedded images at lower resolutions.

For a free alternative, printing the PDF to a new PDF using a PDF printer (available on Windows and Mac) often re-encodes images at screen resolution.`,
      },
      {
        h2: "Method 4: Remove unnecessary elements",
        body: `PDFs often contain hidden data: form fields, comments, bookmarks, embedded fonts, and attached files. Removing these can reduce size meaningfully.

In Adobe Acrobat: Tools → Optimize PDF → Audit Space Usage shows you exactly what's taking up space. You can then selectively remove elements.`,
      },
      {
        h2: "Method 5: Split the PDF",
        body: `If the PDF doesn't need to be one file, splitting it into smaller chunks solves the size problem immediately. Use ShrinkBox's PDF splitter to extract individual pages — each as its own PDF — and share only the pages the recipient needs.`,
      },
    ],
    cta: { label: "Compress a PDF now", href: "/compress-pdf" },
  },

  "jpg-vs-png-vs-webp": {
    intro: `Choosing the wrong image format is one of the most common reasons websites are slower than they should be. A photo saved as a PNG can be 5x larger than the same image in JPEG. A JPEG logo looks terrible because of compression artifacts. Here's a clear guide to when to use each format.`,
    sections: [
      {
        h2: "JPEG/JPG: best for photographs",
        body: `JPEG is a lossy format optimized for photographic content — images with smooth color gradients, skin tones, and complex scenery. It achieves high compression by discarding subtle color information that human eyes are unlikely to notice.

Use JPEG for: product photos, landscape photos, portraits, and any image that came from a camera.
Avoid JPEG for: logos, text-heavy graphics, screenshots, and images with transparent backgrounds (JPEG doesn't support transparency).`,
      },
      {
        h2: "PNG: best for graphics and transparency",
        body: `PNG is a lossless format — it preserves every pixel exactly. This makes it larger than JPEG for photos, but ideal for:

- Logos with transparent backgrounds
- Screenshots (especially of user interfaces)
- Graphics with sharp edges and text
- Images where you cannot accept any quality loss

The tradeoff is file size. A 1MB photo as JPEG might be 4–6MB as PNG. Only use PNG when you specifically need its advantages.`,
      },
      {
        h2: "WebP: best for web use in almost all cases",
        body: `WebP combines the best of both formats. It supports lossy compression (like JPEG) and lossless compression (like PNG), plus transparency. And it's 25–35% smaller than the equivalent JPEG or PNG.

Browser support is now excellent — Chrome, Firefox, Edge, and Safari (since 2020) all support WebP.

If you're building a website and your audience uses modern browsers, WebP should be your default format for both photos and graphics.`,
      },
      {
        h2: "Quick decision guide",
        body: `Photo with no transparency → JPEG (or WebP for smaller size)
Graphic with transparency → PNG (or WebP with transparency)
Web image where size matters → WebP
Image for print → PNG or JPEG at high quality
Logo or icon → SVG if vector, PNG if raster
Screenshot → PNG`,
      },
    ],
    cta: { label: "Convert your images", href: "/convert-jpg-to-webp" },
  },

  "compress-images-for-email": {
    intro: `Most email providers limit attachments to 10–25 MB. Gmail caps at 25 MB, Outlook at 20 MB, and many corporate mail servers are stricter. If your images are too large to send, you have two options: reduce the image file size, or use a file sharing service. This guide covers how to compress images specifically for email.`,
    sections: [
      {
        h2: "How large is too large for email?",
        body: `A single uncompressed photo from a modern smartphone is typically 3–8 MB. Send three photos and you're approaching the limit. Send ten and you'll hit a wall.

The goal is to get each image under 1 MB for email use without making it look noticeably worse. This is easily achievable — most photos can be compressed to under 500 KB with no visible degradation.`,
      },
      {
        h2: "Step 1: Resize if necessary",
        body: `If your image is very large (over 3000px wide), resizing it before compression will dramatically reduce file size. For email, images rarely need to be wider than 1200px — most email clients won't display them larger than that anyway.

Use ShrinkBox's resize tool to set the width to 1200px with "Fit inside" mode selected. This preserves the aspect ratio and won't upscale smaller images.`,
      },
      {
        h2: "Step 2: Compress with the right settings",
        body: `For email, use "Medium" compression in ShrinkBox. This targets 78% JPEG quality — high enough to look great on any screen, low enough to achieve meaningful size reduction.

For PNG files: switch to JPEG or WebP first (using the Convert tool), then compress. PNGs of photos are inefficient; JPEG or WebP will be much smaller.`,
      },
      {
        h2: "Step 3: Check the output",
        body: `ShrinkBox shows you the original size, compressed size, and reduction percentage. A good email-ready image is under 500 KB. Most photos will compress to 150–400 KB at medium quality — small enough to send multiple without hitting limits.

If the compressed version still looks good at full size on screen, it will look fine in email.`,
      },
    ],
    cta: { label: "Compress images for email", href: "/compress-image" },
  },

  "what-is-webp": {
    intro: `In 2010, Google released a new image format called WebP. The goal was simple: make images on the web smaller without making them look worse. More than a decade later, WebP is now supported by every major browser — but many websites and designers still default to JPEG and PNG. Here's everything you need to know.`,
    sections: [
      {
        h2: "Why Google created WebP",
        body: `Images account for a large percentage of web page weight. JPEG was invented in 1992 and PNG in 1996. Both predate modern web performance demands by decades. Google created WebP with a specific goal: reduce image size by 25–35% compared to these older formats, at comparable visual quality.

Smaller images mean faster page loads, lower bandwidth costs, and better performance scores — all things Google cares deeply about for its search ranking algorithm.`,
      },
      {
        h2: "How WebP compression works",
        body: `WebP uses a compression technique based on VP8 video codec technology. It analyzes images in 8x8 pixel blocks and uses predictive encoding — predicting what each block looks like based on neighboring blocks and storing only the differences.

For lossy compression (like JPEG), WebP typically achieves 25–34% better compression at the same visual quality. For lossless compression (like PNG), the advantage is 26% smaller files on average.`,
      },
      {
        h2: "WebP vs JPEG vs PNG: file size comparison",
        body: `A typical 1 MB JPEG photo converted to WebP at equivalent quality is approximately 650–750 KB — a 25–35% reduction with no visible difference.

The same photo as a lossless PNG might be 4–5 MB. As a lossy WebP it drops to under 1 MB. As a lossless WebP it's typically 15–25% smaller than the equivalent PNG.

For web use, WebP wins on file size in almost every scenario.`,
      },
      {
        h2: "Browser support in 2025",
        body: `WebP is now supported in:
- Chrome (since 2011)
- Firefox (since 2019)  
- Edge (since 2018)
- Safari (since 2020)
- All major mobile browsers

Over 97% of browsers worldwide support WebP. The only major holdout — Safari — added support in 2020. For any website targeting modern users, WebP is safe to use as your primary image format.`,
      },
      {
        h2: "How to convert your images to WebP",
        body: `The easiest way is to use ShrinkBox's free converter. Upload your JPEG or PNG image, select WebP as the output format, and download the result. The process takes seconds and requires no software installation.

For bulk conversion of many images, use the Bulk Compress tool — upload up to 10 images at once and download them all converted to WebP.`,
      },
    ],
    cta: { label: "Convert to WebP now", href: "/convert-jpg-to-webp" },
  },

  "merge-pdf-guide": {
    intro: `Whether you're combining a contract with its exhibits, assembling a portfolio, or merging monthly reports into one archive — merging PDFs is one of the most common document tasks. Here's how to do it for free in under a minute.`,
    sections: [
      {
        h2: "When you'd need to merge PDFs",
        body: `Common scenarios where merging PDFs is useful:
- Combining a signed cover page with a main document
- Assembling a portfolio from multiple files
- Joining scanned pages into one document
- Combining invoices or receipts for expense reports
- Merging chapters of a book or report`,
      },
      {
        h2: "How to merge PDFs with ShrinkBox",
        body: `1. Go to the Merge PDF tool at shrinkbox.io/merge-pdf
2. Drag and drop your PDF files into the upload area, or click to browse
3. Use the up/down arrows to set the order you want
4. Click "Merge PDFs into one"
5. Download your merged PDF

The process takes a few seconds regardless of file count. You can merge up to 10 PDFs at once in the free tier.`,
      },
      {
        h2: "Does merging affect PDF quality?",
        body: `No. ShrinkBox's merge tool copies each page from the source PDFs exactly as-is. Text, images, fonts, and layouts are all preserved. The only change is that all pages are combined into a single file.

The output file may be slightly smaller than the sum of the inputs, because shared resources (like embedded fonts) are only included once in the merged document.`,
      },
      {
        h2: "What about password-protected PDFs?",
        body: `Encrypted or password-protected PDFs cannot be merged directly — the encryption prevents reading the file content. You'll need to remove the password first.

In Adobe Acrobat Reader: open the file, enter the password, then File → Save As → save without password. Alternatively, print the PDF to a new PDF file, which creates an unencrypted copy.`,
      },
    ],
    cta: { label: "Merge PDFs now", href: "/merge-pdf" },
  },
};

// ── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Not Found" };
  return {
    title:       `${post.title} | ShrinkBox Blog`,
    description: post.excerpt,
  };
}

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post    = BLOG_POSTS.find((p) => p.slug === slug);
  const article = ARTICLES[slug];
  if (!post || !article) notFound();

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      {/* Back */}
      <Link href="/blog" className="text-sm text-[var(--text-muted)] hover:text-[var(--brand)] transition-colors mb-8 inline-block">
        ← All articles
      </Link>

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-medium text-[var(--brand)] bg-[var(--brand-light)] rounded-full px-2.5 py-0.5">{post.tag}</span>
          <span className="text-xs text-[var(--text-subtle)]">
            {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </span>
          <span className="text-xs text-[var(--text-subtle)]">· {post.readMin} min read</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{post.title}</h1>
      </div>

      {/* Article body */}
      <div className="prose prose-sm max-w-none space-y-8 text-[var(--text-muted)] leading-relaxed">
        {/* Intro */}
        <p className="text-base leading-relaxed whitespace-pre-line">{article.intro}</p>

        {/* Sections */}
        {article.sections.map((section) => (
          <section key={section.h2}>
            <h2 className="text-xl font-semibold text-[var(--text)] mb-3">{section.h2}</h2>
            <p className="whitespace-pre-line">{section.body}</p>
          </section>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 rounded-2xl border border-[var(--brand)]/30 bg-[var(--brand-light)] px-6 py-6 text-center">
        <p className="font-semibold text-[var(--text)] mb-3">Ready to try it yourself?</p>
        <Link
          href={article.cta.href}
          className="inline-block bg-[var(--brand)] hover:bg-[var(--brand-dim)] text-white font-semibold rounded-xl py-2.5 px-6 text-sm transition-colors"
        >
          {article.cta.label} →
        </Link>
      </div>

      {/* Related posts */}
      <div className="mt-12">
        <h3 className="text-sm font-semibold text-[var(--text-muted)] mb-4">More articles</h3>
        <div className="flex flex-col gap-3">
          {BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3).map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`}
              className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 hover:border-[var(--brand)]/40 transition-colors">
              <span className="text-xs font-medium text-[var(--brand)] bg-[var(--brand-light)] rounded-full px-2 py-0.5 shrink-0 mt-0.5">{p.tag}</span>
              <span className="text-sm font-medium">{p.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
