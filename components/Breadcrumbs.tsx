import Head from 'next/head';
import Link from 'next/link';

interface Crumb {
  name: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.name,
      ...(item.href ? { "item": `https://servicedarbresbrandse.com${item.href}` } : {})
    }))
  };

  return (
    <>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </Head>
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 py-3">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              {i > 0 && <span>/</span>}
              {item.href ? (
                <Link href={item.href} className="hover:text-[#2D5016] transition-colors">{item.name}</Link>
              ) : (
                <span className="text-gray-900 font-medium">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
