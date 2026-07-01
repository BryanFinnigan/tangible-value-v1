import Link from "next/link";

export default function WikiBreadcrumbs({ items }: { items: Array<{ href: string; label: string }> }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Link href="/">Home</Link>
      <span>/</span>
      <Link href="/wiki">Wiki</Link>
      {items.map((item) => (
        <span key={item.href}>
          <span>/</span> <Link href={item.href}>{item.label}</Link>
        </span>
      ))}
    </nav>
  );
}
