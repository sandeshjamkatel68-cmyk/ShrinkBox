# ShrinkBox — Complete Rebuild Plan
### From a dead directory to a 10K/month organic tool product

**Prepared:** August 2026
**Current state:** ~8–10 real human visitors/month, 6 total clicks in 3 months, avg. position 78.6, 16 pages crawled-not-indexed, AdSense rejected
**Target:** 10,000 organic sessions/month, sustainable revenue, defensible product

---

## 0. Read this part first

Three things must be true or the rest of this document is wasted effort.

**1. You are abandoning the alternatives directory.** Not softening it, not keeping it as a side section. The "X alternatives" query space is owned by G2, Capterra, Zapier, Reddit, and the vendors' own blogs — and it is exactly the query type AI Overviews now answer without sending a click. Your 2,018 impressions on "ahrefs alternatives" produced zero clicks. That is not a copy problem. That SERP is closed to you.

**2. You are building tools, not pages about tools.** The distinction is everything. A directory page competes on authority, which you don't have. A tool page competes on *utility and speed*, which you can control today. Tool pages also get bookmarked, get repeat visits, get linked to naturally, and get shared in Slack threads. Directory pages get none of that.

**3. The privacy angle is the moat, and it is real.** Every major competitor — iLovePDF, Smallpdf, TinyPNG, CloudConvert — uploads your file to their server. ShrinkBox will not. Everything runs in the browser via WebAssembly. This is not marketing spin: it's a genuine technical differentiator that also means your infrastructure cost stays near-zero as you scale, which is what makes the unit economics work from Nepal.

The domain already promises this. **ShrinkBox should shrink things.** You had the right name and the wrong product.

---

## 1. Positioning

> **ShrinkBox — file tools that never upload your files.**
> Compress, convert, and resize images, PDFs, and video. Everything runs in your browser. Nothing touches a server.

**Who it's for:** anyone who hits a file size limit. Someone emailing a 40MB PDF. A developer shipping images. A student uploading to a portal with a 2MB cap. A person with 300 iPhone HEICs their Windows laptop won't open.

**Why they pick you over iLovePDF:** it's faster (no upload/download round trip), it works offline after first load, it handles batches without a paywall, and their files stay on their machine. For anyone touching a contract, an ID scan, a medical form, or unreleased work — that last one is not a nice-to-have.

**The one-line proof, used everywhere:** *Your file never leaves this tab.*

---

## 2. Design direction

Your instinct is right — the current site reads as machine-generated. The specific tells are: emoji category icons, mint-green-on-white Tailwind defaults, a two-tone hero headline where the second line is the accent colour, and a `21+ / 51+ / $0` stat bar. Those four things appear on essentially every vibe-coded site shipped in the last eighteen months.

The fix is not "better Tailwind." It's committing to a point of view.

### 2.1 Concept: the instrument

Compression is measurement. You put a file in, a number comes out, and the number is the whole point. So the site should look like a **measuring instrument** — a light meter, an audio compressor plugin, a lab scale. Precise, cool-toned, engineered. Not friendly, not playful, not "startup."

This also rules out the three looks AI design currently defaults to: warm cream + serif + terracotta, near-black + acid green, and broadsheet hairline columns. None of those say *instrument*.

### 2.2 Tokens

**Colour** — six values, no more. Light-first.

| Token | Hex | Use |
|---|---|---|
| `--casing` | `#E8EAED` | Page background. A cool machined grey, not cream, not white. |
| `--panel` | `#FFFFFF` | Tool surfaces, cards |
| `--ink` | `#16181D` | All primary text |
| `--ink-dim` | `#5C6270` | Labels, captions, metadata |
| `--signal` | `#1F35E8` | The single accent. Hard electric blue — primary buttons, active states, focus rings. |
| `--removed` | `#C0392B` | Used *only* to show bytes eliminated. Never decorative. |

Dark mode: invert to `--casing: #0F1115`, `--panel: #191C22`, keep `--signal` at `#4B5DFF` for contrast. Ship dark mode — this audience expects it.

The discipline that makes this work: `--signal` appears **at most twice per screen**. Everything else is the neutral scale. Colour is information here, not decoration.

**Type** — three roles, deliberately paired.

- **Display:** `Archivo Expanded` (700/800). A wide engineered grotesk — reads as signage and instrument panels, not as a startup landing page. Used only for the H1 and tool names. Set tight: `letter-spacing: -0.02em`, `line-height: 0.95`.
- **Body:** `Public Sans` (400/500). Neutral, high legibility, US government design system heritage — deliberately unglamorous so the display face carries all personality.
- **Data:** `IBM Plex Mono` (400/600). Every file size, percentage, dimension, and byte count. Tabular numerals on. This is what makes the site feel like a measuring device rather than a blog.

Do not use Inter for anything. It's the single strongest "generated" signal in 2026 typography.

**Scale:** 12 / 14 / 16 / 20 / 28 / 40 / 64. Nothing between. Discipline in a small scale reads as intentional; a sprawling scale reads as generated.

**Geometry:** `border-radius: 4px` on everything except the file drop zone (`0px`, with a 2px dashed border). No shadows except one: `0 1px 2px rgba(0,0,0,0.06)` on panels. No gradients anywhere.

### 2.3 The signature element: the byte ruler

One memorable thing, executed precisely, reused on every page.

When compression completes, the result is not a text line saying "reduced by 68%." It's a **horizontal scale bar** representing the original file. The eliminated portion visually cuts away — animating left-to-right over 600ms — leaving the compressed size as a solid block, with the removed span rendered in `--removed` as a hatched, ghosted remnder.

```
ORIGINAL  ████████████████████████████████████  4.2 MB
COMPRESSED ███████████                            1.3 MB
           └─────────┘└──────────────────────┘
             kept          2.9 MB removed
```

Monospace numerals sit at both ends. The whole thing is one component, used in the hero, on every tool page, and in every batch result row. **This is the thing people screenshot.** It's the site's identity.

Respect `prefers-reduced-motion` — snap to the final state with no animation.

### 2.4 The hero is a working tool

Do not build a headline-plus-stats hero. The homepage above-the-fold **is the image compressor** — a drop zone, live and functional, that compresses a file the moment it's dropped, no navigation, no signup. The headline sits above it in one line, and the byte ruler fires below it.

The pitch and the product are the same object. That is the strongest possible hero for this subject, and almost nobody in this category does it.

### 2.5 Responsiveness

Mobile is not a scaled-down desktop here — on phones, roughly 60% of your traffic will be someone trying to shrink a photo to fit an upload limit, on the move.

- Breakpoints: 480 / 768 / 1200. Three, not six.
- The drop zone becomes a full-width **"Choose file"** button on touch devices — drag-and-drop is meaningless on a phone and a dashed rectangle there looks broken.
- Byte ruler stacks vertically below 480px.
- All tap targets ≥ 44px.
- Test on a real mid-range Android over 4G, not just Chrome DevTools. Your users are not on M-series MacBooks.

**Quality floor, non-negotiable:** visible keyboard focus rings (`2px solid var(--signal)`, `outline-offset: 2px`), reduced motion respected, full keyboard operation of every tool, semantic landmarks, `aria-live` announcements when compression completes.

---

## 3. The tool roster

Build in this order. Each tier ships completely before the next begins.

### Tier 1 — Images (weeks 1–5)
Highest volume-to-difficulty ratio. All fully client-side, all fast, all sub-100KB of JS per tool.

| # | Tool | URL | Library |
|---|---|---|---|
| 1 | Image compressor | `/compress-image` | `@jsquash/jpeg`, `/png`, `/webp`, `/avif`, `/oxipng` |
| 2 | HEIC to JPG | `/heic-to-jpg` | `libheif-js` or `heic-to` |
| 3 | Image resizer | `/resize-image` | `@jsquash/resize` |
| 4 | PNG to JPG | `/png-to-jpg` | Canvas + jSquash |
| 5 | JPG to PNG | `/jpg-to-png` | Canvas + jSquash |
| 6 | WebP converter (both ways) | `/webp-converter` | `@jsquash/webp` |
| 7 | AVIF converter | `/avif-converter` | `@jsquash/avif` |
| 8 | Image cropper | `/crop-image` | Canvas |
| 9 | SVG optimizer | `/optimize-svg` | `svgo` browser build |
| 10 | Favicon generator | `/favicon-generator` | Canvas + `jszip` |
| 11 | Image to Base64 | `/image-to-base64` | FileReader |

**Start with #2, HEIC to JPG.** Two of your six total clicks came from that exact query — it's the only demonstrated intent in three months of data, the query has genuine volume (every iPhone owner on a Windows machine hits this), and it's technically simple. Ship it first, get it indexed, and use it as your proof that the new architecture ranks.

### Tier 2 — PDF (weeks 6–9)
Higher volume, harder competition, heavier libraries. Worth it because PDF is where the privacy angle bites hardest — people compress contracts and scanned IDs.

| # | Tool | URL | Library |
|---|---|---|---|
| 12 | Compress PDF | `/compress-pdf` | `pdf-lib` + `pdfjs-dist` re-encode |
| 13 | Merge PDF | `/merge-pdf` | `pdf-lib` |
| 14 | Split PDF | `/split-pdf` | `pdf-lib` |
| 15 | PDF to JPG | `/pdf-to-jpg` | `pdfjs-dist` render to canvas |
| 16 | JPG to PDF | `/jpg-to-pdf` | `pdf-lib` |
| 17 | Rotate PDF | `/rotate-pdf` | `pdf-lib` |

**Note on PDF compression:** true client-side PDF compression is hard. `pdf-lib` alone won't recompress embedded image streams. The working approach is: parse with `pdfjs-dist`, extract image XObjects, re-encode them through jSquash at target quality, rebuild with `pdf-lib`. Budget a full week for this one tool. It's your highest-value page — do it properly or don't ship it.

### Tier 3 — Video & audio (weeks 10–13)
Enormous volume, but `ffmpeg.wasm` is a ~25MB payload and slow on mid-range hardware. Ship these last, lazy-loaded, with an honest warning about file size limits.

| # | Tool | URL | Library |
|---|---|---|---|
| 18 | Compress video | `/compress-video` | `@ffmpeg/ffmpeg` |
| 19 | Video to GIF | `/video-to-gif` | `@ffmpeg/ffmpeg` |
| 20 | MP4 to MP3 | `/mp4-to-mp3` | `@ffmpeg/ffmpeg` |
| 21 | Compress audio | `/compress-audio` | `@ffmpeg/ffmpeg` |

**Hard cap video at 200MB** with a clear message when exceeded. Overpromising here produces browser crashes, which produce one-star word of mouth.

---

## 4. Technical architecture

### 4.1 Stack

Stay on Next.js — you know it, and App Router static export gives you what you need.

```
Next.js 15 (App Router, output: 'export' where possible)
├─ Static generation for every tool page (no SSR — there's no server work to do)
├─ Web Workers for all codec execution (never block the main thread)
├─ Service Worker caching WASM binaries (instant repeat loads, offline capable)
├─ Zero database, zero auth for v1
├─ Cloudflare Pages (free tier, global edge, better than Vercel for pure static)
└─ Plausible or Umami for analytics — not GA4
```

**Why move off GA4:** your current data is unusable. 17 of 29 "users" are Singapore/Ashburn/Council Bluffs/Guiyang — datacenter cities, i.e. bots. GA4's bot filtering is failing you and you cannot make decisions on that data. Plausible is ~$9/mo, filters bots properly, and doesn't need a cookie banner.

**Why Cloudflare Pages over Vercel:** unlimited bandwidth on the free tier. When a tool page goes viral on Reddit and serves 25MB of WASM to 40,000 people in a day, Vercel's bandwidth billing becomes a problem and Cloudflare's does not.

### 4.2 The processing pipeline

Every tool follows one shape. Build this abstraction once in week 1 and every subsequent tool is a thin wrapper.

```
File input (drop / picker / paste)
  → Validate (type, size, corruption) — fail loudly and specifically
  → Transfer ArrayBuffer to Web Worker
  → Worker: lazy-import codec WASM (cached by SW after first run)
  → Worker: decode → transform → encode
  → postMessage progress every 100ms
  → Return Blob to main thread
  → Byte ruler animates
  → Download (or ZIP via jszip for batches)
```

**Critical performance rules:**
- Never load a codec until a file is actually selected. Your homepage LCP must stay under 1.2s, and a 3MB WASM blob in the initial bundle destroys that.
- Use `Comlink` to keep worker code readable, or hand-roll `postMessage` — either, but be consistent.
- Cache WASM in a Service Worker keyed by version. Second visit should be instant and offline-capable.
- Transferable objects for ArrayBuffers, always. Copying a 40MB buffer between threads is a visible freeze.

### 4.3 Batch processing — your paid tier lives here

Free tools cap at what a browser handles comfortably. The gate is natural and honest:

| | Free | Pro ($4/mo or $29/yr) |
|---|---|---|
| Files per batch | 5 | Unlimited |
| Max file size | 25MB (200MB video) | 500MB |
| Formats | All | All |
| Quality presets | 3 defaults | Custom + saved presets |
| Batch ZIP download | ✓ | ✓ |
| Ads | Yes | None |
| API access | — | 10K calls/mo |

This is honest: the free tier genuinely solves the common case. Pro is for people doing this as work, and those people will pay $4 without thinking about it.

---

## 5. SEO architecture

### 5.1 Fix the existing damage first — week 1, before anything else

Google currently has a low opinion of this domain. That has to be corrected before new pages will rank.

1. **The 8 404s** — either restore or return `410 Gone`. A 410 tells Google to drop the URL permanently; a 404 leaves it re-crawling for months.
2. **The 10 redirect pages** — resolve every chain to a single hop. Chained redirects burn crawl budget.
3. **The 16 crawled-not-indexed pages** — this is Google's quality verdict, not a bug. These are your thin alternatives pages. Delete them and return 410. Do not try to "improve" them.
4. **The alternatives content** — audit by impressions. Anything above ~100 impressions in 3 months: rewrite as a genuine comparison and keep. Everything else: 410. My expectation is you keep two or three pages at most.
5. **Rebuild `sitemap.xml`** with only live, indexable URLs. Submit fresh.
6. **Homepage 301** stays as-is (same URL, new content) — you keep whatever trust the domain has.

Expect a 4–6 week lag before Google re-evaluates. This is why month 1–2 traffic stays near zero even with everything done right, and why the 4-month target isn't reachable.

### 5.2 Page template

Every tool page carries the same structure. The tool is above the fold; the content that makes it rankable sits below it.

```
1. H1: exact-match task phrasing — "Compress PDF" not "PDF Compression Utility"
2. One-sentence subhead containing the privacy claim
3. THE TOOL — fully functional, no scroll required
4. "Your files stay on your device" trust panel (three short points, no icons)
5. How it works — 3 steps, plain language, ~150 words
6. Technical explainer — 300–500 words, genuinely informative
   (e.g. on /compress-image: what MozJPEG actually does, why quality 75
   is the sweet spot, when AVIF beats WebP, with real numbers)
7. Quality comparison table with actual measured file sizes
8. FAQ — 5–7 questions, FAQPage schema
9. Related tools — 4 internal links, contextual not boilerplate
```

That's 800–1,200 words of *real* content per page. It is not filler and it is not AI-spun — the technical explainer section is where you demonstrate genuine expertise, and it's what separates a page Google indexes from one it crawls and discards. **Write these yourself, or have Claude draft and then rewrite substantially.** Google's helpful-content systems are the reason your 16 pages sit unindexed.

### 5.3 Schema

`SoftwareApplication` on every tool page with `applicationCategory: "UtilitiesApplication"`, `operatingSystem: "Any"`, `offers.price: "0"`. Plus `FAQPage` for the FAQ block, `BreadcrumbList` sitewide. These drive rich results and are a meaningful CTR advantage in a category where nobody bothers.

### 5.4 Query targets

Group by intent, not by volume alone. Difficulty estimates assume you're starting from DR 0.

**Winnable in months 2–4** (long-tail, weaker SERPs):
- `heic to jpg converter free`, `convert heic to jpg without uploading`
- `compress image without losing quality online`
- `compress pdf without uploading`, `offline pdf compressor`
- `resize image to 2mb`, `compress image to 100kb`
- `webp to png converter`, `avif to jpg`
- `compress image for email`, `reduce photo size for passport application`

**Winnable in months 5–8** (mid-tier head terms):
- `compress pdf`, `compress image`, `heic to jpg`
- `merge pdf free`, `pdf to jpg`
- `image compressor`, `video compressor online`

**The privacy cluster — your uncontested ground, start immediately:**
- `compress pdf without uploading to server`
- `image compressor that doesn't upload`
- `offline file compressor browser`
- `is it safe to upload pdf to ilovepdf`
- `smallpdf privacy concerns`

That last group has modest volume but near-zero competition and *perfect* intent match — someone searching it is explicitly looking for what only you offer. These should be your first blog posts.

### 5.5 The "compress to X" pattern

Very high intent, very specific, near-zero competition:

`/compress-image-to-100kb`, `/compress-image-to-200kb`, `/compress-image-to-1mb`, `/compress-pdf-to-500kb`, `/compress-pdf-to-1mb`, `/resize-image-to-2mb`

Each is a real page with the target size **pre-configured** in the tool. Someone searching "compress image to 100kb" lands on a page where the tool already targets 100KB. That's a genuinely better experience, not a doorway page — which is exactly the distinction that keeps it from being thin content.

Cap this at 10–12 pages. Generating 200 of them is how you end up back at "crawled, currently not indexed."

---

## 6. Distribution — because SEO alone is too slow

SEO from DR 0 takes months. These run in parallel and are what actually gets you to 10K faster than organic-only would.

**Open source the codec wrappers.** Publish your Web Worker abstraction layer as an npm package — the thing that wraps jSquash into a clean batch-processing API. Developers use it, it links back, and you get DR from GitHub. This is the single highest-leverage link-building move available to you and it costs one weekend.

**Show HN, once, when Tier 1 is complete.** Title: *"Show HN: File tools that run entirely in your browser — nothing uploaded."* HN loves client-side WASM and loves privacy. A front-page day is 30–60K visits and, more importantly, 20–40 organic backlinks that permanently change your ranking ceiling. You get one shot — do not fire it early with three half-finished tools.

**Product Hunt** the same week. Aim for a Tuesday–Thursday launch.

**Reddit, carefully.** r/webdev, r/privacy, r/DataHoarder, r/photography, r/pdf. Participate for two weeks before posting anything of your own. r/privacy in particular is a genuinely receptive audience for "doesn't upload your files" — but they will destroy you for a drive-by promo.

**A browser extension.** Right-click any image → compress. Chrome Web Store is a discovery channel with far less competition than Google search, and extension users are sticky.

**Write the technical posts on dev.to and Hashnode.** "How we compress PDFs entirely in the browser" — real engineering content, links back, reaches exactly the audience that shares tools.

**Then a free API tier.** Developers embed it, you get referral traffic and links. This is also the natural upsell path to Pro.

---

## 7. Monetization

Stack it, don't rely on one stream.

| Stream | When | Realistic at 10K/mo |
|---|---|---|
| AdSense (2 units/page, below fold only) | Month 4 — reapply after content exists | $30–80/mo |
| ShrinkBox Pro subscriptions | Month 5 | 0.5–1.5% conversion → $200–600/mo |
| API tier | Month 7 | $100–400/mo |
| Affiliate (cloud storage, VPN, dev tools) | Month 6 | $50–150/mo |

**On AdSense:** the current rejection ("you need to fix some things") is almost certainly the thin-content problem. Do not reapply until Tier 1 tools plus their 800+ word content pages are live and indexed. A second rejection makes the third attempt harder.

**Never place ads above the fold or inside the tool interface.** A tool that feels ad-infested loses the exact trust advantage the whole positioning depends on. Below-the-fold only, two units maximum.

At 10K/month total this lands somewhere around $400–1,000/month. Modest — but on near-zero infrastructure cost, and with a growth curve rather than a ceiling, unlike the directory. At 50K/month it becomes a real business.

---

## 8. Roadmap

### Weeks 1–2 — Foundation and cleanup
- Kill the 404s (410), fix redirect chains, delete thin alternatives pages
- New sitemap, resubmit to Search Console
- Migrate analytics to Plausible
- Build the design system: tokens, type scale, byte ruler component, drop zone, worker abstraction
- Ship **HEIC to JPG** — first new tool, full page template, submit for indexing

*Success marker: HEIC page indexed within 14 days.*

### Weeks 3–5 — Tier 1 complete
- Ship remaining 10 image tools
- New homepage with the live compressor hero
- Dark mode
- Mobile QA on real devices over real networks
- Open-source the worker/codec wrapper package
- Publish 3 privacy-cluster blog posts

*Success marker: 11 tool pages indexed, first non-branded impressions on tool queries.*

### Week 6 — Launch week
- Show HN + Product Hunt, same week
- Chrome extension submitted
- Reddit posts in communities you've already been active in

*Success marker: 15+ referring domains. This is the number that matters, not the traffic spike.*

### Weeks 7–10 — Tier 2 (PDF)
- Six PDF tools, `/compress-pdf` given a full dedicated week
- The 10–12 "compress to X" pages
- Reapply to AdSense
- Two technical posts on dev.to

*Success marker: ~1,500–2,500 organic sessions/month, avg. position under 30.*

### Weeks 11–14 — Tier 3 + monetization
- Video and audio tools, lazy-loaded, hard-capped
- Ship ShrinkBox Pro (Stripe or Lemon Squeezy — Paddle if Nepal payout is easier)
- API alpha
- Ongoing: one technical post per week

*Success marker: ~4,000–6,000 sessions/month, first paying subscribers.*

### Weeks 15–20 — Compound
- Fill remaining long-tail tool gaps based on actual Search Console query data
- Push the tools that show traction, kill the ones that don't
- Guest posts, HARO, directory submissions
- API public launch

*Success marker: 10,000+ organic sessions/month.*

---

## 9. Traffic projection

| Month | Organic sessions/mo | What's driving it |
|---|---|---|
| 1 | ~50 | Cleanup phase; Google re-evaluating |
| 2 | ~300 | HEIC + first image tools indexing |
| 3 | ~800 | Tier 1 ranking on long-tail; launch backlinks landing |
| 4 | ~1,800 | Authority from launch links compounding |
| 5 | ~3,200 | PDF tools entering the index |
| 6 | ~5,500 | Head terms breaking into page 2–3 |
| 7 | ~8,000 | Compounding + video tools |
| 8 | **~11,000** | Target reached |

The curve is slow-then-steep, and month 2 will feel like nothing is working. It is. Search Console *average position* is your real month-2 metric, not sessions — if it moves from 78 toward 40, you're on track regardless of what the traffic number says.

---

## 10. Kill criteria

Set these now, while you're not emotionally invested in the outcome. Check them honestly.

- **Month 3:** if average position hasn't moved below 45, the technical foundation is wrong. Stop building tools and audit indexing.
- **Month 4:** if fewer than 15 referring domains, distribution has failed. Traffic will not compound. Fix that before writing another page.
- **Month 6:** if under 2,500 organic sessions, the niche is harder than modelled. Reassess whether this deserves months 7–12.
- **Month 8:** if under 6,000 sessions and zero paying users, stop. Take the WASM tooling you've built — it's genuinely reusable — and put the time into SuccessMantra.

That last line is not pessimism. It's the discipline you didn't have with the directory, which is why four months went into something the data was telling you to abandon by week six.

---

## 11. First seven days

1. `410` the 8 broken URLs and delete the 16 unindexed thin pages
2. Fix redirect chains, rebuild and submit the sitemap
3. Install Plausible, remove GA4
4. Set up the new repo: Next.js 15, static export, Cloudflare Pages
5. Build the token system and the byte ruler component
6. Build the Web Worker + jSquash abstraction layer
7. Ship `/heic-to-jpg` complete with its content page, and request indexing

Seven days. One tool live. That's the whole first milestone — and it will already outperform four months of the directory.