export interface FAQItem {
  q: string
  a: string
}

// ── General site FAQs (homepage) ─────────────────────────────────────
export const GENERAL_FAQS: FAQItem[] = [
  {
    q: 'Are free alternatives as good as paid SaaS tools?',
    a: 'For most everyday use cases, yes. Free alternatives like Obsidian (vs Notion), Penpot (vs Figma), and Discord (vs Slack) cover 80-90% of what paid tools offer. The main differences are usually advanced automation, priority support, or enterprise features most individuals and small teams never use.',
  },
  {
    q: 'How much can I save by switching to free alternatives?',
    a: 'The average startup pays $300-500/month on SaaS tools. By switching the most common tools to free alternatives, most small teams save $100-300/month. Replacing Ahrefs ($99), Figma ($12/editor), Slack ($7.25/user), and Hotjar ($32) alone saves over $150/month.',
  },
  {
    q: 'Is it hard to switch from a paid tool to a free alternative?',
    a: 'Most switches take 1-2 hours. The best approach is to run both tools in parallel for 1-2 weeks, migrate your data, then cancel the paid subscription. Most free alternatives support importing data from popular paid tools.',
  },
  {
    q: 'Are open source alternatives safe to use?',
    a: 'Yes — open source tools are often more secure than closed-source paid software because the code is publicly reviewed by thousands of developers. Tools like Bitwarden, AppFlowy, and Penpot are used by millions of people worldwide.',
  },
  {
    q: 'What is the best free project management tool?',
    a: 'ClickUp and Trello are the most popular free project management tools. ClickUp has the most features on its free plan including unlimited tasks, members, and multiple views. Trello is simpler and better for small teams who just need a kanban board.',
  },
  {
    q: 'Is there a completely free alternative to Notion?',
    a: 'Yes — Obsidian and Anytype are both completely free for personal use. Obsidian stores notes locally as Markdown files. Anytype is end-to-end encrypted and syncs across devices for free. AppFlowy is open source and free to self-host.',
  },
  {
    q: 'What free tool can replace Figma?',
    a: 'Penpot is the best free Figma alternative. It is open source, browser-based, and supports real-time collaboration just like Figma. Lunacy is another great option that works offline and includes built-in icons and illustrations.',
  },
  {
    q: 'Is there a free alternative to Ahrefs?',
    a: 'Google Search Console is the best free SEO tool — it gives you direct keyword data from Google at no cost. Ubersuggest offers free daily searches for keyword research. Together they cover most of what solo founders and small teams need from Ahrefs.',
  },
  {
    q: 'What can I use instead of Slack for free?',
    a: 'Discord is the most popular free Slack alternative. It has unlimited message history, voice channels, video calls, and threads — all for free. Mattermost is a good option if you want to self-host for complete data control.',
  },
  {
    q: 'How do I find the right free alternative for my needs?',
    a: 'Search for the tool you currently pay for on ShrinkBox. Each page shows free alternatives ranked by best value, with key highlights so you can compare quickly. Click through to try any alternative directly — no account needed on ShrinkBox.',
  },
]

// ── Tool-specific FAQs ────────────────────────────────────────────────
export const TOOL_FAQS: Record<string, FAQItem[]> = {
  notion: [
    {
      q: 'What is the best free alternative to Notion?',
      a: 'Obsidian is the best free Notion alternative for personal use — it is completely free, works offline, and stores your notes as plain Markdown files you own forever. Anytype is the best free alternative if you need sync across devices with end-to-end encryption.',
    },
    {
      q: 'Is Obsidian really free?',
      a: 'Yes. Obsidian is completely free for personal use with no limits on notes or features. The only paid option is Obsidian Sync ($4/month) if you want official cloud sync, but you can sync for free using iCloud, Google Drive, or Dropbox.',
    },
    {
      q: 'Can I import my Notion data to a free alternative?',
      a: 'Yes. Notion lets you export all your data as Markdown files. AppFlowy and Obsidian both support importing Markdown. Anytype also has an import tool. The migration usually takes 30-60 minutes depending on how much content you have.',
    },
    {
      q: 'Why is Notion so expensive?',
      a: 'Notion charges $8-16/month per user. For a team of 5 that is $40-80/month or $480-960/year. Free alternatives like AppFlowy give you the same core features — databases, pages, kanban boards — without the subscription.',
    },
  ],
  figma: [
    {
      q: 'What is the best free alternative to Figma?',
      a: 'Penpot is the best free Figma alternative. It is open source, browser-based, supports real-time collaboration, and has no limits on projects or team members. It feels very similar to Figma and is used by thousands of designers worldwide.',
    },
    {
      q: 'Can I open Figma files in a free alternative?',
      a: 'Penpot does not directly import Figma files, but you can export components from Figma as SVG and import them into Penpot. Lunacy opens Sketch files natively. For full Figma file compatibility, Adobe XD (now free) is your best option.',
    },
    {
      q: 'Is Figma still free?',
      a: 'Figma has a free starter plan but limits you to 3 projects and 1 team. For professional work with unlimited projects and collaboration, Figma charges $12/month per editor. Penpot has no such limits and is completely free.',
    },
    {
      q: 'What do professional designers use instead of Figma?',
      a: 'Many independent designers use Penpot as a free Figma alternative. Lunacy is popular for solo designers who want an offline-first tool. Some designers also use Framer for its advanced prototyping capabilities.',
    },
  ],
  slack: [
    {
      q: 'What is the best free Slack alternative?',
      a: 'Discord is the most popular free Slack alternative. Unlike Slack\'s free plan which deletes messages after 90 days, Discord keeps all message history forever for free. It also includes voice channels and video calls at no cost.',
    },
    {
      q: 'Why is Slack so expensive for small teams?',
      a: 'Slack charges $7.25 per user per month on the Pro plan. For a team of 10 that is $72.50/month or $870/year. Discord and Google Chat offer the same core messaging and calling features completely free.',
    },
    {
      q: 'Does Discord work for business teams?',
      a: 'Yes. Many startups and remote teams use Discord for business communication. It supports organized channels, threads, voice calls, screen sharing, and integrations with tools like GitHub, Trello, and Linear.',
    },
    {
      q: 'What is Mattermost and is it really free?',
      a: 'Mattermost is an open source team messaging platform you can self-host for free. It looks and works like Slack, supports unlimited message history, and gives you complete control over your data. Self-hosting requires a server but can be set up on a $5/month VPS.',
    },
  ],
  ahrefs: [
    {
      q: 'What is the best free alternative to Ahrefs?',
      a: 'Google Search Console is the best free SEO tool for most websites — it provides direct keyword data, click-through rates, and indexing reports straight from Google. Ubersuggest offers free daily keyword searches. Together they cover the core use cases of Ahrefs at zero cost.',
    },
    {
      q: 'Is Google Search Console as good as Ahrefs?',
      a: 'For tracking your own site\'s performance, Google Search Console is actually better than Ahrefs because it uses real Google data. Ahrefs is stronger for competitor analysis and backlink research. For solo founders and small teams, Search Console covers 80% of needs.',
    },
    {
      q: 'Why does Ahrefs cost so much?',
      a: 'Ahrefs starts at $99/month because it crawls and indexes the entire web to provide backlink data, keyword volumes, and competitor research. This infrastructure is expensive to maintain. Most small websites and startups do not need this level of data.',
    },
    {
      q: 'Can I do keyword research for free?',
      a: 'Yes. Google Search Console shows you which keywords your site already ranks for. Ubersuggest offers free keyword suggestions and volume data. Google\'s own autocomplete and "People also ask" sections are also free keyword research tools.',
    },
  ],
  zoom: [
    {
      q: 'What is the best free Zoom alternative?',
      a: 'Google Meet is the best free Zoom alternative. It has no time limit on 1-on-1 calls, allows up to 100 participants, requires no app installation, and is completely free with a Google account. Jitsi Meet is the best option if you want no account required at all.',
    },
    {
      q: 'Does Google Meet have a time limit?',
      a: 'Google Meet allows unlimited 1-on-1 calls with no time limit. Group calls (3+ people) on the free plan are limited to 60 minutes. This is compared to Zoom\'s free plan which limits all group calls to 40 minutes.',
    },
    {
      q: 'Is Jitsi Meet really free with no account?',
      a: 'Yes. Jitsi Meet at meet.jit.si is completely free, requires no account or download, and has no time limits on any calls. You simply create a room, share the link, and anyone can join instantly in their browser.',
    },
  ],
  canva: [
    {
      q: 'What is the best free Canva alternative?',
      a: 'Adobe Express is the best free Canva alternative — it offers thousands of templates, Adobe-quality assets, and a generous free plan. Pixlr is a great free option for photo editing combined with design. Both work directly in your browser.',
    },
    {
      q: 'Is Canva free or paid?',
      a: 'Canva has a free plan but many templates and elements require Canva Pro at $12.99/month. Adobe Express and Pixlr offer comparable design tools completely free without watermarks or premium paywalls.',
    },
  ],
  mailchimp: [
    {
      q: 'What is the best free Mailchimp alternative?',
      a: 'Brevo (formerly Sendinblue) is the best free Mailchimp alternative — it allows up to 300 emails per day for free with unlimited contacts. MailerLite offers a free plan up to 1,000 subscribers with 12,000 emails per month.',
    },
    {
      q: 'Why did Mailchimp remove its free plan?',
      a: 'Mailchimp significantly reduced its free tier in 2023, removing automation and limiting contacts to 500. Brevo and MailerLite both offer more generous free plans with automation included, making them better choices for small businesses and startups.',
    },
    {
      q: 'Can I migrate my Mailchimp list to a free alternative?',
      a: 'Yes. Export your Mailchimp subscribers as a CSV file, then import it into Brevo or MailerLite. Both platforms have step-by-step import guides and the process takes about 15 minutes.',
    },
  ],
  grammarly: [
    {
      q: 'What is the best free Grammarly alternative?',
      a: 'LanguageTool is the best free Grammarly alternative — it supports 30+ languages, has a free browser extension, and catches grammar and spelling errors in any text field. The free version covers most of what Grammarly Premium charges $12/month for.',
    },
    {
      q: 'Is LanguageTool really free?',
      a: 'Yes. LanguageTool has a completely free browser extension that checks grammar and spelling. The free version supports over 30 languages and works across all websites and text editors. A premium version exists but is not required for basic writing assistance.',
    },
  ],
  'github-copilot': [
    {
      q: 'What is the best free GitHub Copilot alternative?',
      a: 'Codeium is the best free GitHub Copilot alternative for individual developers. It is completely free, supports 70+ programming languages, works in VS Code and JetBrains, and provides fast AI code completions. Cursor also offers a free tier with powerful AI coding features.',
    },
    {
      q: 'Is Codeium really free forever?',
      a: 'Yes. Codeium is free for individual developers with no usage limits. It supports autocomplete, search, and chat across 70+ languages. The company monetizes through enterprise plans for teams, keeping the individual tier permanently free.',
    },
    {
      q: 'How does Codeium compare to GitHub Copilot?',
      a: 'Codeium and Copilot offer similar code autocomplete quality for most languages. Copilot has slightly better context awareness in large codebases. But Codeium is free vs $10/month for Copilot, making it the obvious choice for individual developers.',
    },
  ],
  hotjar: [
    {
      q: 'What is the best free Hotjar alternative?',
      a: 'Microsoft Clarity is the best free Hotjar alternative — it is completely free forever with no session or data limits. It includes heatmaps, session recordings, and AI-powered insights. Clarity is used by millions of websites and is backed by Microsoft.',
    },
    {
      q: 'Is Microsoft Clarity really free?',
      a: 'Yes. Microsoft Clarity is 100% free with no limits on sessions, recordings, or heatmaps. There is no paid tier — Microsoft offers it free as a way to promote Azure and their ecosystem. It is one of the best deals in analytics.',
    },
  ],
  dropbox: [
    {
      q: 'What is the best free Dropbox alternative?',
      a: 'Google Drive is the best free Dropbox alternative — it gives you 15GB of free storage, real-time collaboration on documents, and works seamlessly across all devices. OneDrive is the best option if you use Windows, as it is built directly into the operating system.',
    },
    {
      q: 'How much free storage does Google Drive give?',
      a: 'Google Drive gives every Google account 15GB of free storage shared across Gmail, Drive, and Photos. This is significantly more than Dropbox\'s 2GB free tier. For most personal and small business use cases, 15GB is more than enough.',
    },
  ],
  '1password': [
    {
      q: 'What is the best free 1Password alternative?',
      a: 'Bitwarden is the best free 1Password alternative. It is open source, end-to-end encrypted, completely free for individuals, and syncs across unlimited devices. Bitwarden is trusted by millions of users and has been independently audited for security.',
    },
    {
      q: 'Is Bitwarden as secure as 1Password?',
      a: 'Yes. Bitwarden uses the same AES-256 bit encryption as 1Password and has passed independent security audits. Being open source means the encryption code is publicly reviewed by security researchers worldwide, which many consider more trustworthy than closed-source alternatives.',
    },
  ],
}

// ── Get FAQs for a specific tool (falls back to general) ─────────────
export function getToolFAQs(toolSlug: string): FAQItem[] {
  return TOOL_FAQS[toolSlug] ?? GENERAL_FAQS.slice(0, 5)
}
