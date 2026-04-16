import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center gap-2 mb-6 text-[11px] font-bold uppercase tracking-wider text-muted-foreground/60 overflow-x-auto whitespace-nowrap scrollbar-hide py-1">
      <Link href="/" className="hover:text-brand transition-colors no-underline flex items-center gap-1.5 shrink-0">
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M2.5 7.5l5.5-5 5.5 5M4 6.5v6.5h8V6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        Home
      </Link>
      
      {items.map((item, index) => (
        <div key={item.label} className="flex items-center gap-2 shrink-0">
          <span className="text-muted-foreground/30">/</span>
          {item.href ? (
            <Link href={item.href} className="hover:text-brand transition-colors no-underline">
              {item.label}
            </Link>
          ) : (
            <span className="text-muted-foreground/80">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
