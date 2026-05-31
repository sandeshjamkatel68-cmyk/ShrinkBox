import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'

const POSTS: Record<string, { title: string; date: string; category: string; content: string }> = {
  'free-alternatives-to-notion': {
    title: 'Best Free Alternatives to Notion in 2025',
    date: '2025-06-01',
    category: 'Project Management',
    content: `Notion is a great product — but at $8–16/month per user, it adds up fast for small teams. The good news: several free tools cover everything most people actually use Notion for.

## Obsidian (Free)

Obsidian stores everything locally as plain Markdown files. It works offline, has no subscription, and a powerful plugin ecosystem. If you use Notion mainly for personal notes and knowledge management, Obsidian is the best replacement.

The tradeoff: no real-time collaboration. But for solo use, it's unbeatable.

## Anytype (Free)

Anytype looks and feels like Notion — databases, linked pages, kanban boards. It's end-to-end encrypted and syncs across devices for free. The project is open source and the team is committed to keeping the core free.

## AppFlowy (Free, open source)

AppFlowy is the most Notion-like of the alternatives. It's open source, self-hostable, and has a desktop app. If you want to own your data completely, this is the one.

## Which should you pick?

- Personal notes only → Obsidian
- Need sync + privacy → Anytype
- Team use, self-hosted → AppFlowy`,
  },
  'free-alternatives-to-figma': {
    title: 'Best Free Alternatives to Figma',
    date: '2025-05-28',
    category: 'Design',
    content: `Since Adobe acquired Figma and raised prices, many designers have been looking for alternatives. The good news is that free options have improved dramatically.

## Penpot (Free)

Penpot is the closest thing to Figma that's completely free. It's open source, browser-based, and supports real-time collaboration. The interface will feel familiar if you're coming from Figma.

It's built on SVG (not a proprietary format), so your files aren't locked in.

## Lunacy (Free)

Lunacy by Icons8 is a full-featured design tool that's 100% free. It works offline, has built-in icons and illustrations, and even opens Sketch files. The built-in asset library alone saves hours.

## Which should you pick?

- Need browser-based collaboration → Penpot
- Solo designer, want offline app → Lunacy`,
  },
  'how-to-shrink-your-saas-bill': {
    title: 'How to Cut Your SaaS Bill in Half This Month',
    date: '2025-05-20',
    category: 'Savings Guide',
    content: `The average startup spends $4,000+/month on software. Most of that spend is on tools that have perfectly good free alternatives. Here's how to audit and cut it.

## Step 1: List everything you pay for

Go through your credit card and bank statements for the last 3 months. Write down every recurring SaaS charge. Include tools team members expense themselves.

## Step 2: Categorize by usage

For each tool, ask: is this used daily, weekly, or rarely? Be honest. Tools used rarely are the easiest to cut.

## Step 3: Find free alternatives

For every tool, search "[tool name] free alternative". Use ShrinkBox to find curated alternatives instantly. Focus on tools that cost $20+/month first — that's where the biggest savings are.

## Step 4: Run parallel for 2 weeks

Don't cancel immediately. Run the free alternative alongside the paid tool for 2 weeks. If the free version works, cancel the paid one.

## Common swaps that save money

- Notion → Obsidian or Anytype (save $8–16/month per user)
- Figma → Penpot (save $12/month per editor)
- Ahrefs → Google Search Console + Ubersuggest free tier (save $99/month)
- Slack → Discord (save $7.25/month per user)
- Zoom → Google Meet (save $15.99/month)
- Hotjar → Microsoft Clarity (save $32/month)

That's $170+/month from 6 swaps alone.`,
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
    description: post.content.slice(0, 160),
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
    <div className="max-w-2xl mx-auto px-4 py-12">
      <nav className="flex items-center gap-2 text-sm text-[var(--color-text-tertiary)] mb-8">
        <Link href="/" className="hover:text-emerald-500 transition-colors">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-emerald-500 transition-colors">Blog</Link>
        <span>/</span>
        <span className="text-[var(--color-text-primary)] truncate">{post.title}</span>
      </nav>

      <div className="mb-4 flex items-center gap-2">
        <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">{post.category}</span>
        <span className="text-xs text-[var(--color-text-tertiary)]">{post.date}</span>
      </div>

      <h1 className="text-3xl font-bold text-[var(--color-text-primary)] mb-8">{post.title}</h1>

      <div className="prose prose-sm max-w-none">
        {paragraphs.map((p, i) => {
          if (p.startsWith('## ')) {
            return <h2 key={i} className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-3">{p.slice(3)}</h2>
          }
          return <p key={i} className="text-[var(--color-text-secondary)] leading-relaxed mb-4">{p}</p>
        })}
      </div>

      <div className="mt-12 p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
        <p className="text-sm font-semibold text-[var(--color-text-primary)] mb-1">Find alternatives instantly</p>
        <p className="text-sm text-[var(--color-text-secondary)] mb-3">Search any tool you pay for and find free alternatives in seconds.</p>
        <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium transition-colors">
          Search ShrinkBox
        </Link>
      </div>
    </div>
  )
}
