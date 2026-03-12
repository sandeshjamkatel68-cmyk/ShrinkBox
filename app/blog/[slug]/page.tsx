import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/content/blogPosts";

// ── Full article content keyed by slug ───────────────────────────────────────
const ARTICLES: Record<string, { intro: string; sections: { h2: string; body: string }[]; cta: { label: string; href: string }; coverImage?: string }> = {
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

  // ── 10 New Articles ───────────────────────────────────────────────────────

  "split-pdf-guide": {
    coverImage: "https://images.unsplash.com/photo-1618044733300-9472054094ee?w=800&q=80",
    intro: `You've downloaded a 60-page report but only need pages 12–18. Or a client sent a combined PDF and you need to extract just the invoice pages. Splitting a PDF is a routine task that most people do more often than they realize — and it should take less than a minute.

This guide covers every method to split a PDF, from free online tools to desktop software, with no unnecessary steps.`,
    sections: [
      {
        h2: "When should you split a PDF?",
        body: `Common reasons to split a PDF include:
- Extracting specific pages to share with someone who doesn't need the full document
- Breaking a large scanned archive into individual files for easier storage
- Separating chapters of a book or report
- Isolating pages that need to be re-edited in a source document
- Reducing file size by removing pages before sharing via email

Splitting is also useful as a pre-step before merging — rearranging a document by splitting it into individual pages first, then merging them in the new order.`,
      },
      {
        h2: "How to split a PDF with ShrinkBox",
        body: `1. Go to shrinkbox.io/split-pdf
2. Upload your PDF
3. Select the pages or ranges you want to extract (e.g., "1–5", "12", "18–25")
4. Choose whether to export each page as a separate file or as one combined file containing only your selected range
5. Download the result

The tool handles PDFs of any size. There's no software to install and no account required for the free tier.`,
      },
      {
        h2: "Splitting by page ranges vs. individual pages",
        body: `Most PDF splitters offer two modes:

Page range extraction: You specify "pages 10–20" and receive a single PDF containing only those pages. This is useful when you're sharing a chapter or section.

Individual page splitting: Every page becomes its own PDF file, packaged as a ZIP download. This is useful when you need to reorganize, edit individual pages, or upload specific pages to another system.

ShrinkBox supports both modes.`,
      },
      {
        h2: "Can you split password-protected PDFs?",
        body: `No — encrypted PDFs cannot be split because the tool cannot access the page content without the password. The solution is to first open the PDF in a reader (entering the password), then re-save it without encryption. On a Mac, open in Preview and export via File → Export as PDF. On Windows, print to "Microsoft Print to PDF" to create an unencrypted copy.`,
      },
      {
        h2: "Splitting large PDFs (100+ pages)",
        body: `Very large PDFs — scanned books, legal discovery files, archive exports — can be split the same way, but processing time increases with file size. For files over 100 MB, a desktop tool like PDF24 or Adobe Acrobat may be faster than a browser-based tool. For most documents under 50 MB, an online tool handles it instantly.`,
      },
    ],
    cta: { label: "Split a PDF now", href: "/split-pdf" },
  },

  "image-compression-quality-vs-size": {
    coverImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    intro: `Every time you compress an image, you're making a tradeoff: smaller file size in exchange for some loss of visual fidelity. The goal isn't to compress as much as possible — it's to compress just enough that the image still looks excellent while loading as fast as possible.

Understanding this tradeoff lets you make smarter decisions instead of using default settings that may not fit your use case.`,
    sections: [
      {
        h2: "How lossy compression works",
        body: `JPEG and WebP (in lossy mode) work by analyzing the image in blocks and discarding detail that human vision is least likely to notice. Subtle variations in smooth areas, fine texture in uniform backgrounds, and minor color shifts in shadows are typically the first things discarded.

The "quality" setting in most tools maps to how aggressively this discarding happens. At quality 95, almost nothing is discarded. At quality 50, significant detail is removed — often visibly.`,
      },
      {
        h2: "The quality settings sweet spot",
        body: `For photographs destined for the web:
- Quality 85–95: Near-lossless. Very little size reduction. Useful only when absolute fidelity matters (print assets stored as JPEG, stock photo delivery).
- Quality 70–85: The web sweet spot. Typically 40–60% smaller than the original with no visible degradation at screen sizes.
- Quality 50–70: Noticeable compression. Suitable for thumbnails, preview images, or backgrounds where pixel-level quality doesn't matter.
- Below 50: Visible artifacts. Useful only for extremely bandwidth-constrained situations (slow networks, SMS sharing).

ShrinkBox's "Medium" preset targets quality 78 — tested across thousands of images as the best balance for general web use.`,
      },
      {
        h2: "The image content matters",
        body: `Compression artifacts are most visible in certain types of image content:
- Gradients and sky: JPEG blocking artifacts appear as faint grid patterns at low quality
- Text in images: Blurring around letter edges is often the first thing people notice
- Sharp edges (logos, UI screenshots): Halos and ringing artifacts appear around high-contrast edges

Faces and foliage, by contrast, are much more forgiving — compression artifacts are harder to see in complex textures.

If your image contains text or sharp-edged graphics, use a higher quality setting or switch to WebP which handles these better than JPEG.`,
      },
      {
        h2: "Testing your output",
        body: `The best way to evaluate a compression result is to view the before and after side-by-side at the actual display size — not zoomed in to 400%. Most visitors won't zoom in; they see the image at the size it appears on screen.

ShrinkBox shows you both the original and compressed size after processing. A compression ratio of 40–65% is a good benchmark for photos. If you're only achieving 10–20% reduction, consider whether the source image was already compressed (e.g., a downloaded web image).`,
      },
    ],
    cta: { label: "Find your sweet spot", href: "/compress-image" },
  },

  "convert-png-to-jpg": {
    coverImage: "https://images.unsplash.com/photo-1544396821-4dd40b938ad3?w=800&q=80",
    intro: `PNG files of photographs are often 3–6x larger than the same image saved as JPEG. If you have a folder full of PNG photos — perhaps exported from a design tool or screenshot from your desktop — converting them to JPEG is one of the fastest ways to free up space and speed up your website.

This guide explains when conversion makes sense, when it doesn't, and how to do it correctly.`,
    sections: [
      {
        h2: "Why PNG photos are so large",
        body: `PNG is a lossless format — every pixel is stored exactly. This is great for logos and screenshots where you need sharp edges, but for photographs with millions of slightly different colors, lossless storage is inefficient.

A 12 MP photo from a smartphone might be:
- 3–5 MB as JPEG (at quality 85%)
- 15–25 MB as PNG

There's no visual benefit to keeping photos in PNG format — JPEG handles photographic content equally well at a fraction of the size.`,
      },
      {
        h2: "When you should NOT convert PNG to JPEG",
        body: `Conversion is a one-way lossy process. You'll lose:
- Transparency: JPEG doesn't support alpha channels. Any transparent areas in your PNG will be filled with a solid color (usually white).
- Lossless quality: If the PNG contains text, logos, or sharp-edged graphics, JPEG compression will introduce blurring and artifacts around those edges.

Rule of thumb: only convert PNG to JPEG if the image is a photograph with no transparent areas.`,
      },
      {
        h2: "How to convert PNG to JPEG with ShrinkBox",
        body: `1. Go to shrinkbox.io/convert-jpg-to-webp (the tool handles PNG → JPEG too)
2. Upload your PNG file
3. Select JPEG as the output format
4. Choose your quality setting (78–85% recommended)
5. Download the converted image

The conversion happens in your browser — your file is never stored on a server.`,
      },
      {
        h2: "PNG to WebP: often a better choice",
        body: `If you're converting for web use, consider converting to WebP instead of JPEG. WebP gives you the same file size benefits as JPEG for photographs, but also supports transparency (so logos and graphics convert correctly) and achieves 25–35% smaller files than equivalent JPEG.

The only reason to prefer JPEG over WebP is compatibility with older software that doesn't support WebP — which is increasingly rare.`,
      },
    ],
    cta: { label: "Convert PNG to JPG or WebP", href: "/convert-jpg-to-webp" },
  },

  "pdf-vs-word-which-to-send": {
    coverImage: "https://images.unsplash.com/photo-1568667256549-094345857637?w=800&q=80",
    intro: `You've finished a document and you need to send it. Should you attach a PDF or the original Word file? The answer depends entirely on what you want the recipient to do with it — and getting it wrong creates unnecessary friction on their end.

Here's a clear framework for deciding which format to use.`,
    sections: [
      {
        h2: "Send a PDF when:",
        body: `The document is final and you don't want it changed. PDFs preserve your exact formatting — fonts, spacing, layout — regardless of what software or operating system the recipient uses. A Word document that looks perfect on your machine may look broken on theirs if they have different fonts installed.

Send PDF for: contracts, invoices, reports, portfolios, presentations intended for reading, any document where formatting matters and editing is not expected.`,
      },
      {
        h2: "Send a Word document when:",
        body: `You want the recipient to edit, comment, or collaborate on the content. Word documents (DOCX) are live, editable files. If you're asking someone to fill in information, track changes, or provide feedback inline, a DOCX is the right format.

Send DOCX for: draft documents needing review, templates, forms the recipient should fill out, files you'll both edit together.`,
      },
      {
        h2: "PDF advantages",
        body: `- Consistent appearance across all devices and operating systems
- Cannot be accidentally edited
- Smaller file size than DOCX for complex layouts
- Easier to sign digitally
- Better archiving format — doesn't depend on specific software versions to render correctly
- Supported natively by every modern operating system without additional software`,
      },
      {
        h2: "When to send both",
        body: `For documents that need to be both edited and presented — a contract template, a proposal that will be customized — consider sending both formats. Include the DOCX for editing and the PDF as a reference for how the final output should look.

Some professionals send PDFs by default and offer the source DOCX on request. This protects the document while keeping it accessible.`,
      },
      {
        h2: "Reducing PDF file size before sending",
        body: `If your PDF is too large to email (over 10 MB), use ShrinkBox to compress it before sending. Most PDFs created from Office documents compress by 30–60% with no visible quality loss.`,
      },
    ],
    cta: { label: "Compress your PDF for email", href: "/compress-pdf" },
  },

  "compress-images-for-social-media": {
    coverImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    intro: `Every major social media platform — Instagram, Twitter/X, Facebook, LinkedIn — re-compresses your images when you upload them. This means even if you upload a perfect high-resolution image, what your followers see has been processed by the platform's algorithm.

The problem is that platform re-compression often produces worse results than compressing the image yourself beforehand. Here's how to pre-optimize your images so they survive the platform's processing and still look great.`,
    sections: [
      {
        h2: "Why platforms re-compress your images",
        body: `Social platforms serve images to billions of users across every device and network condition. To manage bandwidth costs and load times, they automatically re-encode all uploaded images. They optimize for their specific delivery infrastructure, not for visual quality.

Instagram, for example, compresses all uploaded images to JPEG, often at a quality level that introduces artifacts if the source image wasn't already well-optimized. Uploading a heavily compressed image and then having it compressed again makes artifacts much more visible.`,
      },
      {
        h2: "Recommended dimensions by platform",
        body: `Resizing to the correct dimensions before uploading prevents the platform from scaling your image down, which introduces additional quality loss:

- Instagram feed: 1080 × 1080 px (square) or 1080 × 1350 px (portrait)
- Instagram Stories / Reels: 1080 × 1920 px
- Twitter/X: 1200 × 675 px
- Facebook post: 1200 × 630 px
- LinkedIn post: 1200 × 627 px

Upload at exactly these dimensions when possible. Uploading larger images doesn't improve quality — it just gives the platform more data to compress.`,
      },
      {
        h2: "The right compression settings for social",
        body: `Because platforms will apply their own compression on top of yours, you want to upload images that are already well-optimized — but not over-compressed.

Target quality 85–90% for social media images. This gives the platform's algorithm the cleanest source material to work with and minimizes double-compression artifacts.

Use ShrinkBox's "Low" compression setting for social media uploads — it targets quality 85%, preserving detail while removing unnecessary metadata.`,
      },
      {
        h2: "JPEG vs PNG for social uploads",
        body: `For photographs: upload as JPEG at quality 85–90%. Most platforms convert PNGs to JPEG anyway, so uploading PNG gives you no quality benefit and results in a larger upload.

For graphics with text, logos, or sharp edges: upload as PNG. The lossless format preserves sharp edges better, and some platforms (like Twitter) handle PNG uploads without converting them.

Avoid WebP for social uploads — platform support is inconsistent and you won't get a quality benefit over a well-compressed JPEG.`,
      },
    ],
    cta: { label: "Optimize images for social media", href: "/compress-image" },
  },

  "reduce-image-size-without-losing-quality": {
    coverImage: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80",
    intro: `"Reduce image size without losing quality" is the most common request in image optimization — and the most misunderstood. True lossless size reduction exists, but it has limits. What's almost always possible is reducing file size to a degree that's imperceptible to human eyes, which is practically the same thing.

This guide covers every technique, from truly lossless methods to perceptually lossless approaches.`,
    sections: [
      {
        h2: "Truly lossless techniques",
        body: `These methods reduce file size without changing any pixel data:

Metadata removal: Camera photos contain EXIF data — GPS coordinates, camera model, shutter speed, copyright information, and more. This metadata adds 10–50 KB per image, sometimes more. Stripping it is lossless and has no effect on how the image looks.

PNG optimization: Lossless PNG compressors (like OxiPNG and zopflipng) find more efficient ways to encode the same pixel data. This can achieve 10–30% reduction on PNGs.

Color palette reduction: For images with limited colors (icons, diagrams, flat-design graphics), reducing the color palette from 24-bit to 8-bit (indexed color) dramatically reduces file size — often 60–80% — with no visible loss for those image types.`,
      },
      {
        h2: "Perceptually lossless techniques",
        body: `These methods do change pixel data, but the changes are invisible or imperceptible at normal viewing sizes:

JPEG at quality 80–85%: For photographs, the difference between quality 100% and quality 80% is genuinely invisible at screen resolution. The file size difference is enormous — typically 60–70% smaller.

Chroma subsampling: Human eyes are better at detecting differences in brightness than in color. JPEG and WebP use this by storing color information at lower resolution than brightness information. At moderate compression levels, this is completely invisible.

Converting PNG photos to JPEG or WebP: A lossless PNG photo contains no more visual information than a well-compressed JPEG of the same image. The PNG is just storing that information less efficiently.`,
      },
      {
        h2: "Resize before compressing",
        body: `If your image is significantly larger than it will ever be displayed, resizing is the most impactful optimization. An image that will appear at 800px wide doesn't benefit from being stored at 4000px wide — and the file is 25x larger.

For retina displays, 2x the display size is sufficient: an image displayed at 800px wide should be 1600px wide in the source file. Going beyond 2x provides no benefit and just increases file size.`,
      },
      {
        h2: "The right tool for each technique",
        body: `ShrinkBox handles metadata removal, compression, format conversion, and resizing in one step. For most use cases, uploading your image and selecting "Medium" compression covers all the perceptually lossless techniques automatically.

For specialized lossless PNG optimization, dedicated tools like Squoosh (browser-based) or ImageOptim (Mac desktop) apply more aggressive lossless algorithms.`,
      },
    ],
    cta: { label: "Reduce your image size now", href: "/compress-image" },
  },

  "core-web-vitals-images": {
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    intro: `Google's Core Web Vitals are a set of performance metrics that directly influence search rankings. Three of them — LCP, CLS, and FID/INP — are all affected by how you handle images on your website. Poor image optimization is one of the most common reasons sites fail their Core Web Vitals assessment.

This guide explains exactly how images affect each metric and what to fix first.`,
    sections: [
      {
        h2: "LCP: Largest Contentful Paint",
        body: `LCP measures how long it takes for the largest visible element on the page to load. In most cases, that element is an image — a hero photo, a product image, or a banner.

A good LCP score is under 2.5 seconds. Common image-related causes of poor LCP:
- Uncompressed images (a 5 MB hero image takes 3–8 seconds on a typical mobile connection)
- Images not preloaded with <link rel="preload">
- Images loaded lazily when they're above the fold
- Images not served in next-gen formats (WebP is ~30% smaller than JPEG at equivalent quality)

Fix: Compress your largest above-the-fold image aggressively, convert to WebP, and add a preload hint in your HTML.`,
      },
      {
        h2: "CLS: Cumulative Layout Shift",
        body: `CLS measures how much the page layout shifts while loading. If an image loads and pushes other content down the page, that's a layout shift — and it's a terrible user experience.

The fix is simple but often forgotten: always specify width and height attributes on every <img> element. This tells the browser how much space to reserve before the image loads, preventing layout shift.

<img src="hero.webp" width="1200" height="630" alt="...">

Without these attributes, the browser doesn't know the image dimensions until it downloads the file, causing everything below the image to jump down when it loads.`,
      },
      {
        h2: "INP: Interaction to Next Paint",
        body: `INP (which replaced FID in 2024) measures responsiveness — how quickly the page responds to user interactions. Images don't directly cause high INP, but they contribute indirectly.

Very large images consume bandwidth and processing resources, which can delay the browser's ability to respond to user interactions. Images that use JavaScript-based lazy loading add script execution overhead.

Fix: Use the native loading="lazy" attribute instead of JavaScript lazy loading libraries. This is handled by the browser at a lower level with less performance overhead.`,
      },
      {
        h2: "Image-specific recommendations for better Core Web Vitals",
        body: `1. Convert all images to WebP — 25–35% smaller than JPEG
2. Compress the hero/LCP image below 200 KB if possible
3. Add width and height to all <img> tags
4. Use loading="lazy" on images below the fold
5. Add <link rel="preload"> for the LCP image in <head>
6. Use responsive images with srcset to serve appropriate sizes for different screens
7. Serve images from a CDN with edge caching`,
      },
    ],
    cta: { label: "Optimize images for better scores", href: "/compress-image" },
  },

  "batch-compress-images": {
    coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    intro: `Compressing images one at a time is fine when you have a handful of files. But what if you have 50 product photos to upload, or 200 images from a photoshoot? Doing them individually would take hours. Batch compression lets you process all of them at once, applying the same optimization settings to every file.

Here's how to batch compress images efficiently, with the right tool for each scenario.`,
    sections: [
      {
        h2: "When to use batch compression",
        body: `Batch compression is the right approach when:
- You have more than 5–10 images to optimize at once
- All images need the same compression settings (e.g., all product photos at quality 80%)
- You're preparing a folder of images for a website migration or upload
- You're processing a photoshoot before delivery to a client

For one-off compressions, single-file tools are simpler. For anything involving multiple files with similar requirements, batch compression saves significant time.`,
      },
      {
        h2: "How to batch compress with ShrinkBox",
        body: `1. Go to shrinkbox.io/compress-image
2. Click the upload area and select multiple files (or drag and drop a selection)
3. ShrinkBox accepts up to 10 images at once on the free tier
4. Choose your compression level (Medium is recommended for most use cases)
5. Click "Compress all"
6. Download the compressed files as a ZIP

All files are processed with the same settings in one pass. The ZIP download contains all compressed images with their original filenames.`,
      },
      {
        h2: "Mixed file types in a batch",
        body: `ShrinkBox handles JPEGs, PNGs, and WebP files in the same batch. Each file is compressed using the optimal settings for its format:
- JPEGs: quality-based compression with metadata stripping
- PNGs: lossless optimization plus metadata removal
- WebP: quality re-encoding if the source has overhead

If you want to convert all files to a single format (e.g., all to WebP), use the batch convert feature instead.`,
      },
      {
        h2: "What to expect: typical results",
        body: `In a batch of typical website images:
- JPEG photos: 40–60% reduction at medium quality
- PNG screenshots: 15–35% reduction (lossless methods)
- PNG photos: 10–20% reduction (lossless only — converting to WebP gives much better results)
- WebP files: 15–30% additional reduction if source was over-compressed

A folder of 50 product photos at 2–4 MB each will typically compress to 0.5–1.5 MB each — reducing the total folder size from 100–200 MB to 25–75 MB.`,
      },
    ],
    cta: { label: "Batch compress your images", href: "/compress-image" },
  },

  "pdf-compression-explained": {
    coverImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    intro: `PDF compression is more nuanced than image compression. A PDF isn't a single type of data — it's a container that can hold text, fonts, images, vector graphics, form data, metadata, and more. Each type compresses differently, and the right approach depends on what's making your specific PDF large.

This guide explains what's actually inside a PDF, how compression works on each element, and what it genuinely can and can't do.`,
    sections: [
      {
        h2: "What makes PDFs large?",
        body: `The most common culprits, in order of typical impact:

1. Embedded images: Photos and screenshots inside a PDF are often stored at full resolution. A 12 MP photo embedded in a PDF takes as much space in the PDF as it would as a standalone file. Multi-page scanned documents are almost entirely image data.

2. Embedded fonts: PDFs embed font files to ensure text looks the same on any device. A single font can add 200–500 KB. Documents using many custom fonts can have several MB of font data alone.

3. Metadata and hidden data: PDFs often contain creation software stamps, edit history, embedded thumbnails, comments, form field definitions, and XMP metadata. None of this is visible in the document but it adds file weight.

4. Uncompressed text/vector streams: Most well-exported PDFs compress their text and vector data using zlib compression, but some older export pipelines leave these uncompressed.`,
      },
      {
        h2: "How online PDF compressors work",
        body: `Tools like ShrinkBox's PDF compressor apply several optimizations:

- Strip metadata and hidden data (typically saves 10–30% on documents from Office apps)
- Re-compress or downsample embedded images (major savings on image-heavy PDFs)
- Font subsetting: replace fully embedded fonts with subsets containing only the characters actually used in the document
- Re-compress content streams using more efficient compression

The actual savings depend entirely on what's making the PDF large. A 2 MB PDF that's 90% text may only compress to 1.8 MB. A 10 MB PDF that's mostly scanned images may compress to 2–3 MB.`,
      },
      {
        h2: "What PDF compression can't fix",
        body: `Compression cannot:
- Reduce size below the information content of the document — there's a floor set by the actual content
- Improve a PDF that was already exported with optimal settings
- Remove content you want to keep without affecting quality

If your PDF was already exported from Word or Google Docs with compression enabled, an online compressor may only achieve 5–15% reduction. The biggest gains come from PDFs exported without compression (many corporate tools) or scanned documents.`,
      },
      {
        h2: "Scanned PDFs: the special case",
        body: `Scanned PDFs are almost entirely image data — typically TIFF or uncompressed bitmap images stored inside a PDF wrapper. They are usually the largest type of PDF and the most compressible.

A 50-page scanned document might be 50–200 MB. After image re-compression, it typically drops to 5–25 MB — 70–90% reduction. The tradeoff is some reduction in image quality (text sharpness and photo detail).

For archive-quality scans, use a lower compression level. For documents that just need to be readable and shareable, higher compression produces dramatically smaller files.`,
      },
    ],
    cta: { label: "Compress your PDF", href: "/compress-pdf" },
  },

  "avif-vs-webp": {
    coverImage: "https://images.unsplash.com/photo-1617859047452-8510bcf207fd?w=800&q=80",
    intro: `WebP was supposed to be the future of web images — and it mostly succeeded. But now there's AVIF, a newer format promising even better compression. Should you make the switch? The answer depends on your audience, your toolchain, and how much you care about cutting-edge performance.

Here's a practical comparison of AVIF vs WebP in 2025.`,
    sections: [
      {
        h2: "What is AVIF?",
        body: `AVIF (AV1 Image File Format) is an image format based on the AV1 video codec, developed by the Alliance for Open Media (which includes Google, Apple, Netflix, and others). It was finalized in 2019 and has been gaining browser support since 2020.

Like WebP, AVIF supports both lossy and lossless compression, transparency, and wide color gamut. Its key advantage over WebP is better compression efficiency — especially at low quality settings where compression artifacts are less acceptable.`,
      },
      {
        h2: "Compression: how do they compare?",
        body: `At high quality settings (visual quality equivalent to JPEG at 85%):
- AVIF: typically 45–55% smaller than JPEG
- WebP: typically 25–35% smaller than JPEG

At medium quality settings, AVIF's advantage grows. It produces fewer blocky artifacts than JPEG and fewer color banding artifacts than WebP at equivalent file sizes.

For photographic content, AVIF wins on compression efficiency at almost every quality level. For lossless compression of graphics, the advantage is smaller — both AVIF and WebP outperform PNG, but by similar margins.`,
      },
      {
        h2: "Browser support in 2025",
        body: `WebP: ~97% global browser support (Chrome, Firefox, Edge, Safari since 2020)
AVIF: ~92% global browser support (Chrome since 2020, Firefox since 2021, Edge since 2021, Safari since 2023)

The gap has narrowed significantly. Safari added AVIF support in version 16 (2022), which now has wide adoption. For most consumer web audiences in 2025, AVIF is safe to use.

The remaining ~8% without AVIF support are primarily older mobile browsers and legacy enterprise environments.`,
      },
      {
        h2: "Encoding speed: the practical difference",
        body: `WebP encodes much faster than AVIF. Encoding a single image:
- WebP: milliseconds to seconds
- AVIF: seconds to minutes for high-quality encoding

For sites that compress images at upload time (like user-generated content platforms), AVIF's encoding speed is a real limitation. For pre-built static sites where images are compressed ahead of time, it's less of an issue.`,
      },
      {
        h2: "What should you use?",
        body: `Use WebP if:
- You need broad compatibility without conditional serving
- Images are compressed dynamically at request time
- You're already migrating from JPEG/PNG and don't want to re-encode again soon

Use AVIF if:
- You're optimizing for maximum performance and file size
- You can serve fallbacks (using the <picture> element with WebP or JPEG as fallback)
- Your audience is primarily on modern browsers

Best practice in 2025: serve AVIF to browsers that support it, WebP to the rest. The <picture> element makes this straightforward:
<picture>
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="...">
</picture>`,
      },
    ],
    cta: { label: "Convert to WebP now", href: "/convert-jpg-to-webp" },
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

      {/* Cover image */}
      {article.coverImage && (
        <div className="mb-8 rounded-2xl overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={article.coverImage}
            alt={post.title}
            className="w-full h-56 object-cover"
          />
        </div>
      )}

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
