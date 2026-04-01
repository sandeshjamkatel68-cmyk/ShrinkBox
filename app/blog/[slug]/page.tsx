import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/content/blogPosts";
import { ArticleSchema } from "@/lib/seo";

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

  "compress-pdf-for-email": {
    intro: `Sending a PDF by email sounds simple until you hit the dreaded "attachment too large" error. Gmail caps attachments at 25MB. Outlook allows 20MB. Many corporate mail servers are even stricter at 10MB. If your PDF is over the limit, here is exactly how to compress it down to size — for free, in under a minute.`,
    sections: [
      {
        h2: "Why PDFs get so large",
        body: `Most oversized PDFs fall into two categories: documents with high-resolution images embedded inside them, and documents exported from software like PowerPoint, Word or design tools that embed unnecessary metadata, fonts, and preview thumbnails.

A presentation exported as PDF from PowerPoint, for example, can easily be 30-50MB because each slide contains a full-resolution image preview. The actual content might compress down to 5-8MB without any visible quality loss.`,
      },
      {
        h2: "How to compress a PDF for email — step by step",
        body: `1. Go to shrink-box.com/compress-pdf
2. Click the upload area or drag your PDF onto it
3. Wait a few seconds for processing
4. Download the compressed PDF

ShrinkBox strips hidden metadata, optimizes the file structure, and re-encodes the PDF using object stream compression. For most standard documents this reduces file size by 10-40%.

The result is shown immediately — you can see the original size, compressed size, and percentage reduction before downloading.`,
      },
      {
        h2: "What if my PDF is still too large after compression?",
        body: `If your PDF contains many high-resolution photos or scanned pages, basic compression may not reduce it enough. Here are your options:

Re-export from the source: If you have the original Word, PowerPoint or design file, re-export it with compression settings enabled. In Microsoft Office choose File → Export → Minimum size.

Split the PDF: Use ShrinkBox's Split PDF tool to break the document into smaller parts and send them in separate emails.

Use a file sharing link: Upload to Google Drive or Dropbox and share a link instead of an attachment. This sidesteps size limits entirely.`,
      },
      {
        h2: "Gmail, Outlook and other email size limits",
        body: `Gmail: 25MB per email total (including all attachments)
Outlook.com: 20MB per email
Yahoo Mail: 25MB per email
Apple Mail: 20MB per email
Corporate email servers: Often 10MB or less

If your compressed PDF is still over the limit for your recipient's email provider, the safest approach is to use Google Drive or WeTransfer to share large files.`,
      },
      {
        h2: "How to check your PDF size before sending",
        body: `On Windows: Right-click the PDF file → Properties → look at the Size field.
On Mac: Right-click → Get Info → Size.
On mobile: Long press the file in Files app → Info.

Aim for under 10MB to be safe with all email providers. Under 5MB is ideal.`,
      },
    ],
    cta: { label: "Compress PDF for email", href: "/compress-pdf" },
  },

  "ilovepdf-alternative": {
    intro: `ilovepdf is one of the most popular PDF tool sites on the internet. But it comes with frustrations — ads everywhere, file size limits on free tier, and some tools requiring a paid account. If you are looking for a free ilovepdf alternative that just works without the friction, here are the best options in 2026.`,
    sections: [
      {
        h2: "Why people look for ilovepdf alternatives",
        body: `ilovepdf is a solid tool but has real limitations on the free tier:

- File size limit of 100MB (lower for some tools)
- Daily task limits on free accounts
- Requires account creation for some features
- Heavy with ads
- Some advanced features are paid only

If you just need to quickly compress a PDF, merge two files, or convert an image — you do not need to create an account or deal with limitations.`,
      },
      {
        h2: "ShrinkBox — best for no signup tools",
        body: `ShrinkBox (shrink-box.com) is a free tool site with 25+ image and PDF tools. The key difference from ilovepdf is that nothing requires an account. Upload, process, download — that is the entire flow.

Available tools include: compress PDF, merge PDF, split PDF, rotate PDF, remove pages, add watermark, protect PDF, unlock PDF, add page numbers, PDF to JPG, PDF to Word, and a full set of image tools for compression and conversion.

Files are deleted immediately after processing. No ads on tool pages. No signup ever required.`,
      },
      {
        h2: "Smallpdf — best for occasional use",
        body: `Smallpdf offers a clean interface and good compression quality. The free tier allows 2 tasks per hour which is enough for occasional use. More than that requires a paid subscription at around $12/month.

Best for: people who need PDF tools occasionally and do not mind the task limit.`,
      },
      {
        h2: "PDF24 — best free desktop alternative",
        body: `PDF24 offers both a web tool and a free desktop application. The desktop version has no limits at all since processing happens locally on your computer. The web version is also largely free.

Best for: power users who process many PDFs regularly and want no limits.`,
      },
      {
        h2: "Comparison table",
        body: `Feature comparison for free tiers:

ShrinkBox: No signup, no limits, 25+ tools, files deleted instantly
ilovepdf: No signup for basic tools, daily limits, ads
Smallpdf: 2 tasks/hour free, clean interface
PDF24: No limits, web + desktop, slightly dated interface

For quick one-off tasks with no friction — ShrinkBox or ilovepdf.
For regular heavy use — PDF24 desktop app.
For occasional use with good UX — Smallpdf.`,
      },
    ],
    cta: { label: "Try ShrinkBox free", href: "/" },
  },

  "reduce-image-size-without-losing-quality": {
    intro: `Reducing image file size without making images look worse is one of the most valuable skills for web developers, designers, bloggers, and anyone who shares images online. The good news is that modern compression algorithms can reduce image file sizes by 40-70% with zero visible quality loss. Here is exactly how to do it.`,
    sections: [
      {
        h2: "Understanding lossy vs lossless compression",
        body: `There are two types of image compression:

Lossy compression removes some image data permanently to achieve smaller file sizes. JPEG uses lossy compression. At high quality settings (80-90%), the data removed is in areas the human eye is least sensitive to — subtle color gradations, fine texture in backgrounds. At normal viewing sizes the difference is invisible.

Lossless compression reorganizes the image data more efficiently without removing anything. PNG uses lossless compression by default. File sizes are larger but quality is mathematically identical to the original.

For photographs: use lossy compression at 80-90% quality. You get 40-60% smaller files with no visible difference.
For graphics, logos, screenshots: use lossless PNG compression or convert to WebP.`,
      },
      {
        h2: "The right quality settings",
        body: `JPEG quality guide:
90-100%: Near lossless. File sizes still large. Use only for print.
80-90%: Sweet spot for web. Invisible quality loss at normal sizes. 40-60% smaller than original.
70-80%: Slight quality loss visible on close inspection. 60-70% smaller. Good for thumbnails.
Below 70%: Visible artifacts. Only for very small thumbnails.

ShrinkBox uses 78% quality for Medium compression and 88% for Low compression — both are in the ideal range for web use.`,
      },
      {
        h2: "How to reduce image size without losing quality — step by step",
        body: `1. Go to shrink-box.com/compress-image
2. Upload your JPG, PNG or WebP image (up to 10MB)
3. Select Low or Medium compression level
4. Click Compress
5. Compare the before and after file sizes
6. Download if satisfied

For best results use Medium compression — it achieves the best balance of size reduction and quality preservation using MozJPEG encoding, which is the same technology used by Facebook, Google and major CDNs.`,
      },
      {
        h2: "Convert to WebP for maximum size reduction",
        body: `WebP is a modern image format developed by Google that is 25-35% smaller than JPEG at equivalent visual quality. If you are optimizing images for a website, converting to WebP gives you better compression than JPEG with no visible quality difference.

All modern browsers support WebP. Convert your images at shrink-box.com/convert-jpg-to-webp.`,
      },
      {
        h2: "Batch compress multiple images at once",
        body: `If you have many images to compress, use the Bulk Compress tool at shrink-box.com/bulk-compress. Upload up to 10 images at once and download them all compressed in seconds. Each image gets its own before and after comparison so you can see exactly how much was saved.`,
      },
    ],
    cta: { label: "Compress images now", href: "/compress-image" },
  },

  "compress-image-for-whatsapp": {
    intro: `WhatsApp compresses images automatically when you send them — but this automatic compression often makes photos look blurry and low quality. Instagram has strict file size limits. Facebook reduces image quality on upload. If you want your images to look sharp when shared on social media, the solution is to compress them yourself before uploading, using the right settings.`,
    sections: [
      {
        h2: "WhatsApp image size limits and quality",
        body: `WhatsApp allows images up to 16MB. However it automatically re-compresses any image you send to reduce data usage. This automatic compression is aggressive and often makes photos look noticeably worse.

To avoid WhatsApp's automatic compression:
1. Compress the image yourself first to a reasonable size (under 1MB)
2. Send as a Document instead of a Photo — WhatsApp does not compress documents

Sending as a document preserves the original quality. To do this tap the attachment icon → Document → select your image file.`,
      },
      {
        h2: "Instagram image size and format requirements",
        body: `Instagram recommended sizes:
Square post: 1080×1080px
Portrait post: 1080×1350px
Landscape post: 1080×566px
Stories: 1080×1920px

Instagram rejects images over 8MB. It also re-compresses images on upload which reduces quality. Best practice: resize to the exact dimensions before uploading and compress to under 1MB. Instagram's re-compression will then have minimal impact.`,
      },
      {
        h2: "How to compress images for social media — step by step",
        body: `For WhatsApp:
1. Go to shrink-box.com/compress-image
2. Upload your photo
3. Select Medium compression
4. Download — aim for under 500KB

For Instagram:
1. First resize at shrink-box.com/resize-image to 1080px wide
2. Then compress at Medium setting
3. Download and upload to Instagram

For Facebook:
1. Compress at Low setting (Facebook is less strict)
2. Keep file under 4MB for best quality`,
      },
      {
        h2: "Best image format for social media",
        body: `JPG: Best for photos. Smallest file size. Supported everywhere.
PNG: Best for screenshots and graphics with text. Larger files.
WebP: Best compression but not supported in all social apps yet.

For WhatsApp and Instagram, always use JPG for photos. Use PNG only for screenshots or images with text that must stay sharp.`,
      },
      {
        h2: "Bulk compress multiple photos at once",
        body: `If you have a batch of holiday photos or product images to prepare for social media, use shrink-box.com/bulk-compress to compress up to 10 images at once. Upload them all, choose Medium compression, and download all compressed files in one go.`,
      },
    ],
    cta: { label: "Compress image for WhatsApp", href: "/compress-image" },
  },

  "remove-pages-from-pdf": {
    intro: `Need to delete a page from a PDF? Maybe there is a blank page at the end, a cover page you do not need, or confidential information on a specific page you want to remove before sharing. Here is the fastest free way to remove any page from a PDF without installing any software.`,
    sections: [
      {
        h2: "How to remove pages from a PDF online — step by step",
        body: `1. Go to shrink-box.com/remove-pdf-pages
2. Upload your PDF file
3. Type the page numbers you want to remove, separated by commas
   Example: 1, 3, 5 removes pages 1, 3 and 5
4. Click Remove Pages
5. Download your cleaned PDF

The tool shows you how many pages the original had and how many remain after removal. Processing takes a few seconds regardless of PDF size.`,
      },
      {
        h2: "Common reasons to remove PDF pages",
        body: `Blank pages: PDFs exported from Word often have blank pages at the end. Remove them to keep the document clean.

Cover pages: When sharing internal documents externally you may want to remove a cover page that contains internal information.

Duplicate pages: Scanned documents sometimes produce duplicate pages. Remove the extras.

Confidential pages: Remove pages containing sensitive information before sharing with clients or colleagues.

Outdated content: Remove pages with outdated information when you cannot edit the PDF source.`,
      },
      {
        h2: "How to check page numbers before removing",
        body: `Open your PDF in any PDF viewer (Adobe Reader, browser, Preview on Mac). Page numbers are shown at the bottom of the viewer or in the page panel on the left.

Note that PDF page numbers and printed page numbers may differ. A document might have printed page numbers starting at 5 but the PDF pages start at 1. Always use the PDF viewer page count, not the printed numbers inside the document.`,
      },
      {
        h2: "Can I remove multiple pages at once?",
        body: `Yes. Enter all page numbers separated by commas: 1, 2, 5, 8

You can remove as many pages as you want as long as at least one page remains in the document. The tool will not allow you to remove all pages.

If you need to keep only a few specific pages from a large document, it may be easier to use the Split PDF tool instead — extract just the pages you want to keep.`,
      },
    ],
    cta: { label: "Remove PDF pages now", href: "/remove-pdf-pages" },
  },

  "password-protect-pdf-free": {
    intro: `Protecting a PDF with a password is one of the most common document security tasks. Whether you are sending a contract, sharing financial information, or distributing confidential reports, adding password protection ensures only the intended recipient can open the file. Here is how to do it for free in under 30 seconds.`,
    sections: [
      {
        h2: "How to add a password to a PDF — step by step",
        body: `1. Go to shrink-box.com/protect-pdf
2. Upload your PDF file
3. Enter a password (minimum 4 characters)
4. Confirm the password
5. Click Protect PDF
6. Download the protected file

The tool adds a confidential watermark to every page and embeds the password protection. The process takes a few seconds.`,
      },
      {
        h2: "What makes a strong PDF password",
        body: `A good PDF password should be:

At least 8 characters long
Contains a mix of letters, numbers and symbols
Not based on obvious information like your name or birthday

Example of a weak password: john2024
Example of a strong password: J#7mK9$x

Remember: if you forget the password there is no way to recover it. Store it somewhere safe like a password manager.`,
      },
      {
        h2: "PDF protection levels explained",
        body: `There are two types of PDF protection:

Open password (user password): Prevents anyone from opening the file without the password. This is what most people need for sharing sensitive documents.

Permissions password (owner password): Allows opening but restricts printing, copying text, or editing. Used for distributing documents you want people to read but not modify.

For most use cases — sending a document securely — an open password is sufficient.`,
      },
      {
        h2: "How to share password-protected PDFs securely",
        body: `Never send the password in the same email as the protected PDF. If someone intercepts the email they get both the file and the password.

Best practice:
1. Send the protected PDF by email
2. Send the password through a different channel — SMS, WhatsApp, or a phone call

This way even if one channel is compromised, the attacker only has half of what they need.`,
      },
      {
        h2: "How to remove a password from a PDF",
        body: `If you need to remove the password from a PDF you own, use the Unlock PDF tool at shrink-box.com/unlock-pdf. Upload the file, enter the current password, and download the unlocked version.`,
      },
    ],
    cta: { label: "Protect PDF with password", href: "/protect-pdf" },
  },

  "convert-images-to-pdf": {
    intro: `Need to combine multiple photos into a single PDF document? Whether you are creating a photo album, submitting scanned documents, combining product photos, or assembling a portfolio — converting images to PDF is a common task. Here is the fastest free way to do it online without any software.`,
    sections: [
      {
        h2: "How to convert multiple images to PDF — step by step",
        body: `1. Go to shrink-box.com/images-to-pdf
2. Click the upload area or drag your images onto it
3. You can upload up to 20 images at once (JPG, PNG or WebP)
4. Remove any images you do not want using the X button
5. Click Create PDF
6. Download your PDF

Each image becomes one page in the PDF. The page size matches the image dimensions.`,
      },
      {
        h2: "What order will the images appear in the PDF?",
        body: `Images appear in the PDF in the same order they were uploaded. Most browsers upload files in alphabetical order by filename when you select multiple files at once.

To control the order: name your files before uploading. Use numbers at the start of filenames: 01_cover.jpg, 02_page1.jpg, 03_page2.jpg and so on. They will then upload and appear in the correct sequence.`,
      },
      {
        h2: "Best image formats for PDF conversion",
        body: `JPG: Best for photographs. Smallest file size. Recommended for photo albums and scanned documents.

PNG: Best for screenshots, diagrams, and images with text. Larger file size but sharper text and edges.

WebP: Modern format with good compression. Supported by the converter.

For scanned documents: use JPG at high quality for the smallest PDF. For screenshots with text: use PNG to keep text sharp and readable.`,
      },
      {
        h2: "Common uses for images to PDF conversion",
        body: `Scanned documents: Scan multiple pages with your phone camera and combine into one PDF to email or upload.

Photo albums: Combine holiday photos into a single PDF to share with family.

Portfolio: Combine work samples into one document for job applications.

Receipts: Combine receipt photos into one PDF for expense reporting.

Product catalogs: Combine product photos into a catalog PDF.`,
      },
      {
        h2: "How to compress the resulting PDF",
        body: `PDFs created from high-resolution images can be large. After downloading your PDF from the images to PDF converter, run it through the PDF compressor at shrink-box.com/compress-pdf to reduce the file size before sharing.`,
      },
    ],
    cta: { label: "Convert images to PDF", href: "/images-to-pdf" },
  },

  "rotate-pdf-online": {
    intro: `Scanned a document upside down? Received a PDF where some pages are rotated the wrong way? Rotating PDF pages is a simple fix that should take seconds. Here is how to rotate any PDF page online for free — no software installation, no signup, instant download.`,
    sections: [
      {
        h2: "How to rotate a PDF online — step by step",
        body: `1. Go to shrink-box.com/rotate-pdf
2. Upload your PDF file
3. Choose the rotation angle: 90°, 180° or 270°
4. Click Rotate PDF
5. Download the rotated file

The rotation applies to all pages in the document. Processing takes a few seconds.`,
      },
      {
        h2: "Which angle should I choose?",
        body: `90° clockwise: Rotates pages a quarter turn to the right. Use this if your pages appear turned on their left side.

180°: Flips pages completely upside down. Use this if your document is completely inverted.

270° clockwise (same as 90° counter-clockwise): Rotates pages a quarter turn to the left. Use this if your pages appear turned on their right side.

Not sure which to use? Try 90° first. If it is not right, try 270°. If pages are completely upside down, use 180°.`,
      },
      {
        h2: "Why do PDFs end up rotated?",
        body: `The most common cause is scanning. When you scan a document on a flatbed scanner or with a phone camera app, the orientation of the original document determines the page rotation in the output PDF. If you placed the document upside down or sideways on the scanner, the resulting PDF will be rotated.

Another common cause is PDF creation from different applications. Some design tools export PDFs in landscape orientation when the content was created in portrait, causing an apparent 90° rotation.`,
      },
      {
        h2: "Can I rotate just one page instead of all pages?",
        body: `The ShrinkBox rotate tool rotates all pages by the same angle. If you need to rotate only specific pages while leaving others unchanged, the workaround is:

1. Split the PDF into individual pages using shrink-box.com/split-pdf
2. Rotate the specific pages that need it
3. Merge all pages back together using shrink-box.com/merge-pdf

This takes a few extra steps but gives you full control over individual page rotation.`,
      },
    ],
    cta: { label: "Rotate PDF now", href: "/rotate-pdf" },
  },

  "webp-vs-png-vs-jpg-2026": {
    intro: `The image format you choose affects your website loading speed, Google ranking, storage costs, and visual quality. In 2026 the answer to which format to use has become clearer than ever — but it still depends on your specific use case. Here is the definitive guide to choosing between WebP, PNG and JPG.`,
    sections: [
      {
        h2: "JPG in 2026 — still relevant?",
        body: `JPG has been the standard photo format since 1992 and it is still widely used. Its advantages are universal compatibility and good compression for photographs.

Use JPG when:
- Maximum compatibility is required (old software, email clients)
- File must work on any device without question
- Sharing photos with non-technical users

Avoid JPG when:
- Image has transparency (JPG does not support it)
- Image contains text or sharp edges (compression creates artifacts)
- You are optimizing a website (WebP is better)

JPG file sizes are 3-5x larger than equivalent WebP at the same quality.`,
      },
      {
        h2: "PNG in 2026 — when lossless matters",
        body: `PNG is a lossless format that preserves every pixel exactly. It supports full transparency (alpha channel).

Use PNG when:
- Image has transparent background (logos, icons, UI elements)
- Image contains text that must remain sharp
- Screenshot of software interface
- You cannot accept any quality loss

Avoid PNG when:
- Image is a photograph (file size will be 3-8x larger than JPG)
- You are serving images on a website (WebP is better)

PNG is the right choice for logos and graphics. Using PNG for photos is a common mistake that wastes significant storage and bandwidth.`,
      },
      {
        h2: "WebP in 2026 — the clear winner for web",
        body: `WebP was developed by Google specifically for web use. It supports both lossy and lossless compression plus transparency.

Browser support as of 2026: Chrome, Firefox, Safari, Edge — all support WebP. Over 97% of global browser usage supports it.

File size comparison at equivalent quality:
WebP vs JPG: 25-35% smaller
WebP vs PNG: 15-25% smaller (lossless), up to 70% smaller (lossy)

Use WebP for:
- All images on websites
- Any image where file size matters
- Replacing JPG photos on web pages
- Replacing PNG graphics that do not need maximum compatibility

Convert your existing images to WebP at shrink-box.com/convert-jpg-to-webp`,
      },
      {
        h2: "Quick decision guide for 2026",
        body: `Website photo: WebP (best size and quality)
Website logo with transparency: WebP or PNG
Email attachment photo: JPG (universal compatibility)
Screenshot with text: PNG (sharpest text)
Social media photo: JPG (most compatible)
Print photo: JPG at 100% quality or PNG
Logo file for sharing: PNG
Archive of photos: JPG (best storage efficiency for photos)`,
      },
      {
        h2: "How to convert your images to WebP",
        body: `Converting existing JPG or PNG images to WebP takes seconds using ShrinkBox:

For JPG to WebP: shrink-box.com/convert-jpg-to-webp
For PNG to WebP: shrink-box.com/convert-png-to-webp

Upload your image, click Convert, download the WebP file. Typical size reduction is 25-40% compared to the original JPG.`,
      },
    ],
    cta: { label: "Convert to WebP", href: "/convert-jpg-to-webp" },
  },

  "add-page-numbers-to-pdf": {
    intro: `A PDF without page numbers is hard to navigate and looks unprofessional when printed. Whether you are preparing a report, thesis, manual, or any multi-page document, adding page numbers makes it easier to reference specific sections. Here is how to add page numbers to any PDF online for free in under a minute.`,
    sections: [
      {
        h2: "How to add page numbers to a PDF — step by step",
        body: `1. Go to shrink-box.com/add-page-numbers-pdf
2. Upload your PDF file
3. Choose the position: bottom center, bottom right, bottom left, top center, or top right
4. Choose the format: simple numbers (1, 2, 3) or page of total (1/10, 2/10, 3/10)
5. Choose the color: black or gray
6. Set the starting number if you want to begin from a number other than 1
7. Click Add Page Numbers
8. Download your numbered PDF`,
      },
      {
        h2: "Which position should I choose?",
        body: `Bottom center: Most common and professional. Works for reports, theses, and formal documents. Matches most document style guides.

Bottom right: Common for printed books and documents where pages are viewed side by side. Right side is easy to find when flipping pages.

Bottom left: Less common. Used when right side is reserved for other information.

Top center or top right: Used in some academic and legal documents where bottom margin is used for footnotes.

For most documents, bottom center is the safe default choice.`,
      },
      {
        h2: "Page of total format explained",
        body: `The format 1 / 10, 2 / 10, 3 / 10 shows both the current page and the total number of pages. This is helpful when:

- Readers need to know how much of the document remains
- Documents are printed and pages might get separated
- Legal or formal documents where completeness matters

Simple numbering (1, 2, 3) is cleaner and preferred for most documents. Use page of total when the reader benefit from knowing the document length.`,
      },
      {
        h2: "Can I add page numbers starting from a specific number?",
        body: `Yes. The starting number setting lets you begin from any number. This is useful when:

Your document has a cover page or table of contents that should not be numbered — set starting number to 0 or skip those pages first.

Your PDF is one chapter of a larger document and pages should continue from the previous chapter — set starting number to match.

For example if your previous chapter ended on page 24, set starting number to 25 for the next chapter.`,
      },
      {
        h2: "Adding page numbers to scanned PDFs",
        body: `Page numbers can be added to any PDF including scanned documents. The numbers are added as a separate layer on top of the scanned content, so even non-editable scanned PDFs work perfectly.

After adding page numbers, consider running the PDF through the compressor at shrink-box.com/compress-pdf to reduce file size before sharing.`,
      },
    ],
    cta: { label: "Add page numbers to PDF", href: "/add-page-numbers-pdf" },
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
    alternates: {
      canonical: `https://shrink-box.com/blog/${slug}`,
    },
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
      <ArticleSchema 
        title={post.title} 
        description={post.excerpt} 
        url={`https://shrink-box.com/blog/${slug}`} 
        datePublished={post.date} 
      />
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
