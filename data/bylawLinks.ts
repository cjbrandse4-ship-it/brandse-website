// Official municipal tree-bylaw / permit page per city slug.
// Every URL here was found via web search and LIVE-VERIFIED (fetched, content
// confirmed to be that municipality's tree-permit/bylaw information) before
// being added. Citing the authoritative source on each city page is a top
// AEO/GEO signal. Do NOT add a URL here without verifying it resolves.
// Cities absent from this map simply render no citation line.

export interface BylawLink {
  url: string;
  // Language of the target page — shown as a hint when it's French-only.
  lang: 'fr' | 'en' | 'both';
}

export const bylawLinks: Record<string, BylawLink> = {
  // On-island (Montreal agglomeration / boroughs)
  'pointe-claire': { url: 'https://www.pointe-claire.ca/permis-et-certificats/permis-arbres-et-pesticides/abattage-darbre', lang: 'fr' },
  'beaconsfield': { url: 'https://www.beaconsfield.ca/fr/demande-d-abattage-reglementation', lang: 'fr' },
  'kirkland': { url: 'https://www.ville.kirkland.qc.ca/developpement-durable/arbres/abattage', lang: 'fr' },
  'dollard-des-ormeaux': { url: 'https://ville.ddo.qc.ca/en/live/environment/arboriculture/certificate-of-tree-felling/', lang: 'both' },
  'dorval': { url: 'https://www.ville.dorval.qc.ca/fr/environnement-et-voirie/environnement/arbres-et-vegetaux', lang: 'fr' },
  'senneville': { url: 'https://www.senneville.ca/urbanisme-et-environnement/arbres/abattage-darbres/', lang: 'fr' },
  'baie-d-urfe': { url: 'https://www.baie-durfe.qc.ca/fr/nos-departements/page/certificat-abattage-darbre', lang: 'fr' },
  'pierrefonds': { url: 'https://montreal.ca/demarches/demander-un-permis-dabattage-darbre-sur-un-terrain-prive?arrondissement=Pierrefonds-Roxboro', lang: 'fr' },
  'sainte-anne-de-bellevue': { url: 'https://ville.sainte-anne-de-bellevue.qc.ca/citoyens/permis-certificats-et-formulaires', lang: 'fr' },
  'ile-bizard': { url: 'https://montreal.ca/demarches/demander-un-permis-dabattage-darbre-sur-un-terrain-prive', lang: 'fr' },
  'lachine': { url: 'https://montreal.ca/demarches/demander-un-permis-dabattage-darbres-sur-un-terrain-prive?arrondissement=Lachine', lang: 'fr' },
  // Off-island (Vaudreuil-Soulanges)
  'hudson': { url: 'https://hudson.quebec/en/services/urban-planning/permits-and-certificates/', lang: 'both' },
  'saint-lazare': { url: 'https://ville.saint-lazare.qc.ca/abattage/', lang: 'fr' },
  'vaudreuil': { url: 'https://www.ville.vaudreuil-dorion.qc.ca/fr/environnement/protection-de-l-environnement/arbres', lang: 'fr' },
  'ile-perrot': { url: 'https://www.ile-perrot.qc.ca/services/environnement/arbres-et-vegetaux', lang: 'fr' },
  'notre-dame-de-l-ile-perrot': { url: 'https://www.ndip.org/demande-de-permis', lang: 'fr' },
  'terrasse-vaudreuil': { url: 'https://www.terrasse-vaudreuil.ca/services-aux-citoyens/urbanisme-permis/', lang: 'fr' },
  'pincourt': { url: 'https://villepincourt.qc.ca/fr/abattage-d-arbre', lang: 'fr' },
  'rigaud': { url: 'https://www.ville.rigaud.qc.ca/permis-certificats-et-urbanisme/arbres', lang: 'fr' },
  'les-cedres': { url: 'https://www.ville.lescedres.qc.ca/fr/services-en-lignes/permis-et-certificats', lang: 'fr' },
  'coteau-du-lac': { url: 'https://coteau-du-lac.com/services/urbanisme/permis-et-certificats', lang: 'fr' },
  'pointe-des-cascades': { url: 'https://www.pointe-des-cascades.com/services/services-aux-citoyens/urbanisme', lang: 'fr' },
  'saint-clet': { url: 'https://st-clet.com/fr/services/urbanisme', lang: 'fr' },
};
