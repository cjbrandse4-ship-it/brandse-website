// Last substantive content update per route (YYYY-MM-DD).
// Baked from git history at authoring time — bump a date whenever a page's
// content changes materially. Three consumers read this and stay in sync:
// the visible "Last updated" line, schema dateModified, and sitemap lastmod.
export const pageDates: Record<string, string> = {
  '/tree-removal': '2026-09-09',
  '/stump-grinding': '2026-05-10',
  '/tree-trimming': '2026-05-10',
  '/hedge-trimming': '2026-05-10',
  '/tree-planting': '2026-05-10',
  '/emergency-services': '2026-07-14',
  '/hard-to-reach-tree-removal': '2026-07-14',
  '/tree-removal-cost': '2026-09-09',
};

// All 23 city pages share locations.ts as their content source; its last
// substantive change dates them all.
export const cityPagesDate = '2026-08-30';

export function formatUpdated(iso: string, lang: 'en' | 'fr'): string {
  // SSG-safe: deterministic input, same output server + client.
  const d = new Date(iso + 'T00:00:00');
  const month = d.toLocaleDateString(lang === 'fr' ? 'fr-CA' : 'en-CA', { month: 'long', year: 'numeric' });
  return lang === 'fr' ? `Mis à jour : ${month}` : `Last updated: ${month}`;
}
