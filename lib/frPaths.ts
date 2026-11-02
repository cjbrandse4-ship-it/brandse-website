// French URL slugs for pages whose French address differs from the English
// one. Keys are English paths. Quebec searchers type "émondage", "abattage",
// "essouchement" — not "tree-trimming" — so the French pages carry those words
// in their URLs. Every link, language toggle, hreflang tag and sitemap entry
// maps through toFrPath/toEnPath so the two languages stay paired. Old
// /fr/<english-slug> URLs 301 to these in next.config.mjs.
export const frSlugs: Record<string, string> = {
  '/tree-removal': '/abattage-arbres',
  '/stump-grinding': '/essouchement',
  '/tree-trimming': '/emondage',
  '/hedge-trimming': '/taille-de-haies',
  '/tree-planting': '/plantation-arbres',
  '/emergency-services': '/urgence-arbres',
  '/hard-to-reach-tree-removal': '/abattage-arbres-difficiles-acces',
  '/tree-removal-cost': '/cout-abattage-arbre',
  '/free-estimate': '/devis-gratuit',
  '/thank-you': '/merci',
};

// '/tree-trimming' -> '/fr/emondage', '/kirkland' -> '/fr/kirkland', '/' -> '/fr'
export function toFrPath(enPath: string): string {
  if (enPath === '/') return '/fr';
  return `/fr${frSlugs[enPath] ?? enPath}`;
}

// '/fr/emondage' -> '/tree-trimming', '/fr/kirkland' -> '/kirkland', '/fr' -> '/'
export function toEnPath(frPath: string): string {
  const p = frPath.replace(/^\/fr(?=\/|$)/, '') || '/';
  return Object.keys(frSlugs).find((en) => frSlugs[en] === p) ?? p;
}
