import Link from "next/link";

interface BreadcrumbsProps {
  items: { name: string; url: string }[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center gap-2 text-xs font-medium text-subtle mb-4 animate-fade-up">
      <Link href="/" className="hover:text-brand transition-colors">
        Home
      </Link>
      {items.map((item, idx) => (
        <div key={item.url} className="flex items-center gap-2">
          <span className="opacity-40">/</span>
          {idx === items.length - 1 ? (
            <span className="text-muted cursor-default">{item.name}</span>
          ) : (
            <Link href={item.url} className="hover:text-brand transition-colors">
              {item.name}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
