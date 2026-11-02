// French pages moved from English slugs to French ones (lib/frPaths.ts) —
// keep the old addresses answering with a permanent redirect.
const oldFrSlugs = {
  '/fr/tree-removal': '/fr/abattage-arbres',
  '/fr/stump-grinding': '/fr/essouchement',
  '/fr/tree-trimming': '/fr/emondage',
  '/fr/hedge-trimming': '/fr/taille-de-haies',
  '/fr/tree-planting': '/fr/plantation-arbres',
  '/fr/emergency-services': '/fr/urgence-arbres',
  '/fr/hard-to-reach-tree-removal': '/fr/abattage-arbres-difficiles-acces',
  '/fr/tree-removal-cost': '/fr/cout-abattage-arbre',
};

// Thin blog posts merged into stronger pages (2026-11-02): slug -> [EN page,
// FR page]. Each post's EN and FR address 301s to the page that absorbed it.
const mergedPosts = {
  'emergency-tree-services-guide': ['/emergency-services', '/fr/urgence-arbres'],
  'after-storm-tree-inspection-west-island': ['/emergency-services', '/fr/urgence-arbres'],
  'ice-storm-tree-damage-sainte-anne-senneville': ['/emergency-services', '/fr/urgence-arbres'],
  'hedge-trimming-pointe-claire-dorval': ['/hedge-trimming', '/fr/taille-de-haies'],
  'tree-pruning-guide-west-island': ['/tree-trimming', '/fr/emondage'],
  'spring-tree-maintenance': ['/blog/seasonal-tree-care-west-island', '/fr/blog/seasonal-tree-care-west-island'],
  'summer-tree-care-ile-bizard-ile-perrot': ['/blog/seasonal-tree-care-west-island', '/fr/blog/seasonal-tree-care-west-island'],
  'fall-tree-care': ['/blog/seasonal-tree-care-west-island', '/fr/blog/seasonal-tree-care-west-island'],
  'fall-tree-maintenance-beaconsfield-baie-durfe': ['/blog/seasonal-tree-care-west-island', '/fr/blog/seasonal-tree-care-west-island'],
  'why-professional-services-matter': ['/blog/choosing-arborist-west-island-montreal', '/fr/blog/choosing-arborist-west-island-montreal'],
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'servicedarbresbrandse.com' }],
        destination: 'https://www.servicedarbresbrandse.com/:path*',
        permanent: true,
      },
      // brandses.com (the email domain) belongs to this site, not ArbreCRM.
      // Takes effect once the domain is attached to this Vercel project.
      ...['brandses.com', 'www.brandses.com'].map((host) => ({
        source: '/:path*',
        has: [{ type: 'host', value: host }],
        destination: 'https://www.servicedarbresbrandse.com/:path*',
        permanent: true,
      })),
      ...Object.entries(oldFrSlugs).map(([source, destination]) => ({
        source,
        destination,
        permanent: true,
      })),
      // The 2026 cost guide blog post was merged into the cost page.
      {
        source: '/blog/tree-removal-cost-west-island-montreal',
        destination: '/tree-removal-cost',
        permanent: true,
      },
      {
        source: '/fr/blog/tree-removal-cost-west-island-montreal',
        destination: '/fr/cout-abattage-arbre',
        permanent: true,
      },
      ...Object.entries(mergedPosts).flatMap(([slug, [en, fr]]) => [
        { source: `/blog/${slug}`, destination: en, permanent: true },
        { source: `/fr/blog/${slug}`, destination: fr, permanent: true },
      ]),
    ];
  },
};

export default nextConfig;
