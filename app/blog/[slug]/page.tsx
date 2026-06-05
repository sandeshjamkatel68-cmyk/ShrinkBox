import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'

const POSTS: Record<string, { title: string; date: string; category: string; description: string; content: string }> = {
  'free-alternatives-to-notion': {
    title: 'Best Free Alternatives to Notion in 2025',
    date: '2026-05-01',
    category: 'Project Management',
    description: 'Notion costs $8-16/month per user. Here are 3 completely free alternatives that cover everything most people use Notion for.',
    content: `Notion is a great product — but at $8–16/month per user, it adds up fast for small teams. The good news: several free tools cover everything most people actually use Notion for.

## Obsidian (Free)

Obsidian stores everything locally as plain Markdown files. It works offline, has no subscription, and has a powerful plugin ecosystem. If you use Notion mainly for personal notes and knowledge management, Obsidian is the best replacement.

The tradeoff: no real-time collaboration. But for solo use, it's unbeatable.

## Anytype (Free)

Anytype looks and feels like Notion — databases, linked pages, kanban boards. It's end-to-end encrypted and syncs across devices for free. The project is open source and the team is committed to keeping the core free.

## AppFlowy (Free)

AppFlowy is the most Notion-like of the alternatives. It's open source, self-hostable, and has a desktop app. If you want to own your data completely, this is the one.

## Which should you pick?

- Personal notes only → Obsidian
- Need sync and privacy → Anytype
- Team use, self-hosted → AppFlowy`,
  },

  'free-alternatives-to-figma': {
    title: 'Best Free Alternatives to Figma in 2025',
    date: '2026-05-05',
    category: 'Design',
    description: 'Figma charges $12/month per editor. Penpot and Lunacy offer the same core features completely free.',
    content: `Since Adobe acquired Figma and raised prices, many designers have been looking for alternatives. The good news is that free options have improved dramatically.

## Penpot (Free)

Penpot is the closest thing to Figma that is completely free. It is open source, browser-based, and supports real-time collaboration. The interface will feel familiar if you are coming from Figma.

It is built on SVG so your files are not locked in to any proprietary format.

## Lunacy (Free)

Lunacy by Icons8 is a full-featured design tool that is 100% free. It works offline, has built-in icons and illustrations, and even opens Sketch files. The built-in asset library alone saves hours of work.

## Which should you pick?

- Need browser-based collaboration → Penpot
- Solo designer, want offline app → Lunacy`,
  },

  'how-to-shrink-your-saas-bill': {
    title: 'How to Cut Your SaaS Bill in Half This Month',
    date: '2026-05-10',
    category: 'Savings Guide',
    description: 'The average startup spends $4,000+/month on software. Here is a step-by-step audit to find what you can replace for free.',
    content: `The average startup spends $4,000+ per month on software. Most of that spend is on tools that have perfectly good free alternatives. Here is how to audit and cut it.

## Step 1: List everything you pay for

Go through your credit card and bank statements for the last 3 months. Write down every recurring SaaS charge. Include tools team members expense themselves.

## Step 2: Categorize by usage

For each tool, ask: is this used daily, weekly, or rarely? Be honest. Tools used rarely are the easiest to cut.

## Step 3: Find free alternatives

For every tool, search the name on ShrinkBox. Focus on tools that cost $20 or more per month first — that is where the biggest savings are.

## Step 4: Run parallel for 2 weeks

Do not cancel immediately. Run the free alternative alongside the paid tool for 2 weeks. If the free version works, cancel the paid one.

## Common swaps that save money

- Notion → Obsidian or Anytype (save $8–16/month per user)
- Figma → Penpot (save $12/month per editor)
- Ahrefs → Google Search Console plus Ubersuggest free tier (save $99/month)
- Slack → Discord (save $7.25/month per user)
- Zoom → Google Meet (save $15.99/month)
- Hotjar → Microsoft Clarity (save $32/month)

That is $170+ per month from 6 swaps alone.`,
  },

  'free-slack-alternatives-for-small-teams': {
    title: 'Best Free Slack Alternatives for Small Teams in 2025',
    date: '2026-05-15',
    category: 'Communication',
    description: 'Slack charges $7.25 per user per month. For a team of 10 that is $870 a year. These free alternatives do the same job.',
    content: `Slack is great software but at $7.25 per user per month, a team of 10 pays $870 per year just for messaging. For small teams and startups, that is hard to justify when free options exist.

## Discord (Free)

Discord is the most popular free Slack alternative. Unlike Slack's free plan which deletes messages after 90 days, Discord keeps all message history forever for free. It also includes voice channels and video calls at no cost.

Setting up channels, threads, and roles in Discord works exactly like Slack. Most developer and startup teams have already switched.

## Mattermost (Free, self-hosted)

Mattermost is an open source team messaging platform you can self-host for free. It looks and works like Slack, supports unlimited message history, and gives you complete control over your data.

Self-hosting requires a server but can be set up on a $5 per month VPS in about an hour.

## Google Chat (Free)

If your team already uses Google Workspace, Google Chat is built in and free. It supports channels (called Spaces), direct messages, threads, and integrates directly with Google Drive and Meet.

## Which should you pick?

- Small startup or dev team → Discord
- Need full data control → Mattermost
- Already on Google Workspace → Google Chat

## The bottom line

Slack's core value is team messaging. All three alternatives above deliver team messaging for free. The only thing you lose is Slack's polish and some third-party integrations — neither of which justify $870 per year for most small teams.`,
  },

  'best-free-seo-tools-ahrefs-alternatives': {
    title: 'Best Free SEO Tools — Ahrefs Alternatives That Actually Work',
    date: '2026-05-20',
    category: 'SEO & Marketing',
    description: 'Ahrefs costs $99/month. These free SEO tools cover 80% of what most small websites need from Ahrefs.',
    content: `Ahrefs starts at $99 per month. For enterprise SEO teams managing hundreds of sites, that is reasonable. For solo founders, bloggers, and small businesses, it is hard to justify. The good news: free tools cover most of what you actually need.

## Google Search Console (Free)

Google Search Console is the most underrated free SEO tool available. It gives you direct data from Google itself — which keywords your pages rank for, how many impressions and clicks you get, your average position, and which pages have indexing issues.

For tracking your own site's SEO performance, Search Console is actually better than Ahrefs because it uses real Google data, not estimates.

## Ubersuggest Free Tier

Ubersuggest by Neil Patel offers free daily keyword searches. You can check keyword difficulty, search volume, and get content ideas. The free tier limits you to a few searches per day but for small sites that is often enough.

## Google Keyword Planner (Free)

Originally built for Google Ads, Keyword Planner gives you search volume data directly from Google. You need a Google Ads account to access it but you do not need to run any ads.

## Semrush Free Tier

Semrush offers 10 free searches per day on their free plan. That is enough to check competitor keywords, do quick site audits, and research specific pages.

## What Ahrefs does that free tools cannot

The main things Ahrefs does that free tools struggle with are comprehensive backlink analysis, competitor keyword gap analysis, and bulk keyword research across thousands of terms at once.

If you need those things daily, Ahrefs is worth it. If you run a small site or blog, the free tools above cover everything you need.

## Recommended setup for small sites

Use Google Search Console as your primary tool. Check it weekly. Add Ubersuggest for occasional keyword research. Use Google Keyword Planner when planning new content. This combination is free and covers 80% of what most small sites need from Ahrefs.`,
  },

  'microsoft-clarity-vs-hotjar-free-alternative': {
    title: 'Microsoft Clarity vs Hotjar — Why I Switched to the Free Option',
    date: '2026-05-25',
    category: 'Analytics',
    description: 'Microsoft Clarity is completely free with no session limits. Hotjar charges $32/month for the same features. Here is why I switched.',
    content: `Hotjar is one of the most popular user behavior analytics tools — heatmaps, session recordings, conversion funnels. It starts at $32 per month for the basic plan. Microsoft Clarity does almost exactly the same thing and is completely free forever.

## What Microsoft Clarity offers for free

Microsoft Clarity gives you unlimited session recordings with no data caps, heatmaps showing where users click and scroll, rage click and dead click detection, JavaScript error tracking, and an AI-powered dashboard that summarizes what is happening on your site.

There is no free trial. There is no paid tier. It is simply free, maintained by Microsoft, and used by millions of websites worldwide.

## How it compares to Hotjar

Hotjar's free plan limits you to 35 sessions per day. Once you exceed that, you need to upgrade to the $32 per month plan for 100 daily sessions, or $80 per month for more.

Clarity has no session limits at all. You can record every single visitor on a site with millions of monthly visits and pay nothing.

## What Hotjar does better

Hotjar has more polished survey and feedback tools, better funnel analysis, and a more refined user interface. If you run a large ecommerce site that actively uses user feedback surveys, Hotjar's extra features may justify the cost.

For most websites, blogs, SaaS products, and small businesses, Clarity's free tier is more than enough.

## How to set up Microsoft Clarity

Go to clarity.microsoft.com, create a free account, add the tracking script to your site, and you will start seeing recordings within minutes. The setup takes about 5 minutes.

## The bottom line

If you are paying for Hotjar and primarily using it for session recordings and heatmaps, you are paying $384 per year for something Microsoft gives away for free. Switch to Clarity, save the money, and use it for something that actually grows your business.`,
  },

  'free-password-manager-bitwarden-vs-1password': {
    title: 'Bitwarden vs 1Password — Why the Free Option Wins',
    date: '2026-05-28',
    category: 'Password & Security',
    description: '1Password costs $2.99/month. Bitwarden is free, open source, and just as secure. Here is why most people should switch.',
    content: `1Password is one of the most popular password managers. It is well-designed, reliable, and secure. It also costs $2.99 per month for individuals or $4.99 per month for families. Bitwarden is open source, end-to-end encrypted, and completely free for individuals.

## Why Bitwarden is just as secure as 1Password

Bitwarden uses AES-256 bit encryption, the same standard used by banks and governments. All encryption happens on your device before data is sent to servers, so even Bitwarden cannot see your passwords.

Bitwarden is open source, meaning the code is publicly reviewed by thousands of security researchers worldwide. This is actually considered more trustworthy than closed-source software because vulnerabilities get found and fixed faster.

Bitwarden has also passed independent third-party security audits.

## What you get on Bitwarden free

The free individual plan includes unlimited password storage, sync across unlimited devices, browser extensions for all major browsers, mobile apps for iOS and Android, two-factor authentication, and secure password sharing with one other person.

## What 1Password does better

1Password has a more polished interface, better travel mode for crossing borders, slightly smoother browser extension experience, and better family sharing features. If you are a power user who values those extras, 1Password is worth the $36 per year.

For the vast majority of users who just need to store and autofill passwords securely, Bitwarden's free tier is everything you need.

## How to migrate from 1Password to Bitwarden

Export your 1Password vault as a CSV file. Import it into Bitwarden using their built-in import tool. The whole process takes about 10 minutes. Bitwarden supports direct import from 1Password format so no data transformation is needed.

## The bottom line

Bitwarden and 1Password are both excellent password managers. Bitwarden is free and open source. 1Password costs $36 per year. Unless you specifically need 1Password's advanced features, switch to Bitwarden and keep the $36.`,
  },

  'free-email-marketing-tools-mailchimp-alternatives': {
    title: 'Best Free Email Marketing Tools — Mailchimp Alternatives in 2025',
    date: '2026-06-01',
    category: 'SEO & Marketing',
    description: 'Mailchimp gutted its free plan. Brevo and MailerLite offer better free tiers with automation included.',
    content: `Mailchimp used to be the go-to free email marketing tool for small businesses and creators. In 2023 they significantly reduced their free tier, removed automation, and limited contacts to 500. Meanwhile Brevo and MailerLite have built genuinely generous free plans that are now better than what Mailchimp used to offer.

## Brevo (Free — 300 emails per day, unlimited contacts)

Brevo, formerly known as Sendinblue, offers the most generous free email marketing plan available. You can store unlimited contacts and send up to 300 emails per day on the free plan. That is 9,000 emails per month for free.

Brevo also includes basic email automation on the free plan, which Mailchimp removed from their free tier. For small businesses sending a weekly newsletter to a list under 5,000 people, Brevo's free plan covers everything.

## MailerLite (Free — up to 1,000 subscribers, 12,000 emails per month)

MailerLite has one of the cleanest email builders available. The free plan allows up to 1,000 subscribers and 12,000 emails per month, includes landing page builder, basic automation, and pop-up forms.

For creators, bloggers, and small businesses just starting to build an email list, MailerLite's free plan is excellent.

## How Mailchimp compares today

Mailchimp's current free plan allows 500 contacts and 1,000 emails per month. There is no automation on the free tier. The interface is cluttered with upsells. Most users who were on Mailchimp's old free plan now have a better option elsewhere.

## Which should you pick?

- Large contact list, want unlimited storage → Brevo
- Building a new list, want clean interface → MailerLite
- Already paying Mailchimp and want to save money → Either one

## Migrating from Mailchimp

Both Brevo and MailerLite support direct import from Mailchimp. Export your Mailchimp audience as a CSV and import it. Both platforms have step-by-step guides and the process takes about 15 minutes.

## The bottom line

Mailchimp built its reputation on a generous free plan that no longer exists. Brevo and MailerLite have filled that gap with better free tiers. If you are paying for Mailchimp or frustrated with their current free plan limitations, switching takes 15 minutes and saves you money immediately.`,
  },

  'open-source-alternatives-to-paid-software': {
    title: 'The Best Open Source Alternatives to Paid Software in 2025',
    date: '2026-06-03',
    category: 'Savings Guide',
    description: 'Open source software is free, secure, and often just as good as paid alternatives. Here are the best ones worth switching to today.',
    content: `Open source software gets a bad reputation for being complicated or inferior to paid tools. In most cases that reputation is outdated. Today's best open source tools are polished, actively maintained, and trusted by millions of users worldwide.

## What open source actually means

Open source means the source code is publicly available for anyone to read, audit, and contribute to. This has two practical benefits for users: the software is free to use, and the security code is reviewed by thousands of developers worldwide which means vulnerabilities get found and fixed faster.

## The best open source alternatives by category

**Design — Penpot (replaces Figma)**
Penpot is a browser-based design tool with real-time collaboration. It is fully open source and free. Used by design teams at companies worldwide as a Figma alternative.

**Note-taking — Obsidian (replaces Notion)**
Obsidian stores notes as plain Markdown files on your device. Completely free for personal use with a thriving plugin community.

**Password manager — Bitwarden (replaces 1Password)**
End-to-end encrypted, audited by third parties, and completely free for individuals. Used by millions of people worldwide.

**Video editing — DaVinci Resolve (replaces Adobe Premiere)**
Used by Hollywood studios, completely free for individuals. Professional-grade color grading, audio mixing, and video editing in one tool.

**Analytics — Umami (replaces Google Analytics)**
Privacy-friendly, GDPR-compliant website analytics you can self-host for free. Simple, clean dashboard with no cookie banners needed.

**Team messaging — Mattermost (replaces Slack)**
Self-hosted team messaging with unlimited message history. Full control over your data.

**Email marketing — Listmonk (replaces Mailchimp)**
Self-hosted newsletter and mailing list manager. Free, fast, and handles millions of subscribers.

## Are open source tools safe to use?

Yes. Open source tools are often more secure than closed-source commercial software because the code is publicly audited. Tools like Bitwarden and Penpot have passed independent security audits and are trusted by large organizations.

## The bottom line

The best open source tools today are genuinely excellent. Switching from paid to open source alternatives in design, note-taking, password management, analytics, and communication can save $200 or more per month with no meaningful sacrifice in quality.`,
  },

  'reduce-saas-costs-startup': {
    title: 'How Startups Can Reduce SaaS Costs Without Sacrificing Productivity',
    date: '2026-06-04',
    category: 'Savings Guide',
    description: 'SaaS costs are one of the fastest-growing expenses for startups. Here is how to cut them without hurting your team.',
    content: `SaaS subscriptions feel affordable individually — $12 here, $32 there. But they compound quickly. The average startup with a team of 5 spends $2,000 to $5,000 per month on software. Much of that spend is on tools that have free alternatives capable of doing the same job.

## Why SaaS costs spiral out of control

The problem is not any single tool. It is the accumulation. A project management tool, a design tool, an analytics tool, a communication tool, a password manager, an email marketing platform, a CRM — each seems justified on its own. Together they become a significant fixed cost that grows every time someone adds a new tool without removing an old one.

## The audit process

Start by listing every recurring software charge in the last 3 months. Include tools paid by individuals on expense reports. Most startups find 20 to 40 percent of their SaaS tools are either unused or used by only one person.

Categorize each tool as essential, occasionally used, or rarely used. Rarely used tools are immediate cancellation candidates. Occasionally used tools are candidates for free alternatives.

## Where the biggest savings are

The largest single savings opportunity for most startups is replacing Slack with Discord (save $7.25 per user per month), replacing Figma with Penpot for design work (save $12 per editor), replacing Ahrefs or Semrush with Google Search Console and free tier tools (save $99 to $119 per month), and replacing Hotjar with Microsoft Clarity (save $32 per month).

A startup of 5 people making these 4 changes saves $180 or more per month immediately.

## How to switch without disrupting the team

The key is parallel running. Before canceling a paid tool, run the free alternative alongside it for two weeks. Let team members test the free option. If it covers their core workflow, cancel the paid subscription.

Most switches take one to two hours of setup time. The productivity impact is minimal for tools like analytics, password managers, and design tools.

## Tools worth keeping paid

Not everything should be replaced. If a tool is used daily by your whole team and directly generates revenue or saves significant time, the cost is justified. Sales CRMs, customer support tools, and core product infrastructure are usually worth paying for.

The goal is not to eliminate all paid software. The goal is to eliminate paid software where an equally good free option exists.

## The bottom line

SaaS costs are controllable. A two-hour audit and a few tool switches can cut a startup's software bill by 30 to 50 percent without any meaningful loss in productivity. The savings compound every month and can be redirected to hiring, marketing, or product development.`,
  },
}

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = POSTS[slug]
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    keywords: [post.category.toLowerCase(), 'free alternatives', 'saas alternatives', post.title.toLowerCase()],
  }
}

export async function generateStaticParams() {
  return Object.keys(POSTS).map(slug => ({ slug }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = POSTS[slug]
  if (!post) notFound()

  const paragraphs = post.content.split('\n\n')

  return (
    <div className="max-w-2xl mx-auto px-5 py-12">
      <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-8">
        <Link href="/" className="hover:text-emerald-500 transition-colors">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-emerald-500 transition-colors">Blog</Link>
        <span>/</span>
        <span className="text-gray-600 truncate">{post.title}</span>
      </nav>

      <div className="mb-4 flex items-center gap-2">
        <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">{post.category}</span>
        <span className="text-xs text-gray-400">{post.date}</span>
      </div>

      <h1 className="text-2xl font-bold text-gray-900 mb-8 leading-tight">{post.title}</h1>

      <div className="space-y-4">
        {paragraphs.map((p, i) => {
          if (p.startsWith('## ')) {
            return <h2 key={i} className="text-lg font-semibold text-gray-900 mt-8 mb-2">{p.slice(3)}</h2>
          }
          return <p key={i} className="text-sm text-gray-600 leading-relaxed">{p}</p>
        })}
      </div>

      <div className="mt-12 p-5 rounded-xl bg-emerald-50 border border-emerald-100">
        <p className="text-sm font-semibold text-gray-900 mb-1">Find free alternatives instantly</p>
        <p className="text-sm text-gray-500 mb-3">Search any tool you pay for and find free alternatives in seconds.</p>
        <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold transition-colors">
          Search ShrinkBox
        </Link>
      </div>

      <div className="mt-8 pt-8 border-t border-gray-100">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">More articles</p>
        <div className="space-y-2">
          {Object.entries(POSTS)
            .filter(([s]) => s !== slug)
            .slice(0, 4)
            .map(([s, p]) => (
              <Link key={s} href={`/blog/${s}`}
                className="block text-sm text-gray-600 hover:text-emerald-600 transition-colors py-1">
                → {p.title}
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}
