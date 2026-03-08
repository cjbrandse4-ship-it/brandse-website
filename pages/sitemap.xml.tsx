import { GetServerSideProps } from 'next';
import { locations } from '../data/locations';
import { blogPosts } from '../data/blogPosts';

function generateSitemap(): string {
  const domain = 'https://www.servicedarbresbrandse.com';
  const now = new Date().toISOString().split('T')[0];

  interface SitemapEntry {
    path: string;
    priority: string;
    changefreq: string;
  }

  const staticPages: SitemapEntry[] = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/services', priority: '0.8', changefreq: 'monthly' },
    { path: '/tree-removal', priority: '0.8', changefreq: 'monthly' },
    { path: '/stump-grinding', priority: '0.8', changefreq: 'monthly' },
    { path: '/tree-trimming', priority: '0.8', changefreq: 'monthly' },
    { path: '/hedge-trimming', priority: '0.8', changefreq: 'monthly' },
    { path: '/tree-planting', priority: '0.8', changefreq: 'monthly' },
    { path: '/emergency-services', priority: '0.8', changefreq: 'monthly' },
    { path: '/about', priority: '0.8', changefreq: 'monthly' },
    { path: '/gallery', priority: '0.6', changefreq: 'monthly' },
    { path: '/blog', priority: '0.7', changefreq: 'weekly' },
    { path: '/faq', priority: '0.6', changefreq: 'monthly' },
    { path: '/contact', priority: '0.7', changefreq: 'monthly' },
    { path: '/cookie-policy', priority: '0.3', changefreq: 'yearly' },
  ];

  const locationPages: SitemapEntry[] = locations.map((l) => ({
    path: `/${l.slug}`,
    priority: '0.7',
    changefreq: 'monthly',
  }));

  const blogPages: SitemapEntry[] = blogPosts.map((p) => ({
    path: `/blog/${p.slug}`,
    priority: '0.6',
    changefreq: 'monthly',
  }));

  const allPages = [...staticPages, ...locationPages, ...blogPages];

  const urls = allPages.flatMap((page) => [
    `  <url>
    <loc>${domain}${page.path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${domain}${page.path}" />
    <xhtml:link rel="alternate" hreflang="fr" href="${domain}/fr${page.path === '/' ? '' : page.path}" />
  </url>`,
    `  <url>
    <loc>${domain}/fr${page.path === '/' ? '' : page.path}</loc>
    <lastmod>${now}</lastmod>
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
