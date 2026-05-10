import { GetServerSideProps } from 'next';
import { locations } from '../data/locations';
import { blogPosts } from '../data/blogPosts';

// Static-page release date — bump when site structure or copy materially
// changes. Matters less than `lastmod` lying every request: Google discounts
// sitemaps where everything claims "modified today" but content is stale.
const STATIC_PAGES_RELEASE = '2026-04-15';

interface SitemapEntry {
  path: string;
  priority: string;
  changefreq: string;
  lastmod: string;
}

function generateSitemap(): string {
  const domain = 'https://www.servicedarbresbrandse.com';

  const staticPages: SitemapEntry[] = [
    { path: '/', priority: '1.0', changefreq: 'weekly', lastmod: STATIC_PAGES_RELEASE },
    { path: '/services', priority: '0.8', changefreq: 'monthly', lastmod: STATIC_PAGES_RELEASE },
    { path: '/tree-removal', priority: '0.8', changefreq: 'monthly', lastmod: STATIC_PAGES_RELEASE },
    { path: '/stump-grinding', priority: '0.8', changefreq: 'monthly', lastmod: STATIC_PAGES_RELEASE },
    { path: '/tree-trimming', priority: '0.8', changefreq: 'monthly', lastmod: STATIC_PAGES_RELEASE },
    { path: '/hedge-trimming', priority: '0.8', changefreq: 'monthly', lastmod: STATIC_PAGES_RELEASE },
    { path: '/tree-planting', priority: '0.8', changefreq: 'monthly', lastmod: STATIC_PAGES_RELEASE },
    { path: '/emergency-services', priority: '0.8', changefreq: 'monthly', lastmod: STATIC_PAGES_RELEASE },
    { path: '/about', priority: '0.8', changefreq: 'monthly', lastmod: STATIC_PAGES_RELEASE },
    { path: '/gallery', priority: '0.6', changefreq: 'monthly', lastmod: STATIC_PAGES_RELEASE },
    { path: '/blog', priority: '0.7', changefreq: 'weekly', lastmod: STATIC_PAGES_RELEASE },
    { path: '/faq', priority: '0.6', changefreq: 'monthly', lastmod: STATIC_PAGES_RELEASE },
    { path: '/contact', priority: '0.7', changefreq: 'monthly', lastmod: STATIC_PAGES_RELEASE },
  ];

  const locationPages: SitemapEntry[] = locations.map((l) => ({
    path: `/${l.slug}`,
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: STATIC_PAGES_RELEASE,
  }));

  // Blog `lastmod` reads from the post's own `date` — frozen at publication so
  // unchanged posts don't re-trigger crawls every deploy.
  const blogPages: SitemapEntry[] = blogPosts.map((p) => ({
    path: `/blog/${p.slug}`,
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: p.date,
  }));

  const allPages = [...staticPages, ...locationPages, ...blogPages];

  const urls = allPages.flatMap((page) => [
    `  <url>
    <loc>${domain}${page.path}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${domain}${page.path}" />
    <xhtml:link rel="alternate" hreflang="fr" href="${domain}/fr${page.path === '/' ? '' : page.path}" />
  </url>`,
    `  <url>
    <loc>${domain}/fr${page.path === '/' ? '' : page.path}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${domain}${page.path}" />
    <xhtml:link rel="alternate" hreflang="fr" href="${domain}/fr${page.path === '/' ? '' : page.path}" />
  </url>`,
  ]);

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = generateSitemap();

  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  res.write(sitemap);
  res.end();

  return { props: {} };
};

export default function Sitemap() {
  return null;
}
