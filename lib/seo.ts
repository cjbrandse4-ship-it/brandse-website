// Single source of truth for the Google rating displayed in markup and copy.
// Update both `value` and `count` here when the live numbers change — every
// AggregateRating schema and every "Based on N reviews" line reads from this.
export const siteConfig = {
  name: "Service d'Arbres Brandse Inc",
  shortName: "Brandse Trees",
  domain: "https://www.servicedarbresbrandse.com",
  defaultImage: "https://www.servicedarbresbrandse.com/og-image.jpg",
  logo: "https://www.servicedarbresbrandse.com/logo.jpg",
  contact: {
    phone: "+1-438-365-5410",
    phoneDisplay: "(438) 365-5410",
    email: "info@brandses.com",
    // Service-area business — no streetAddress in schema. addressRegion +
    // postalCode area + areaServed cities cover local SEO without claiming a
    // physical storefront that doesn't match Google Business Profile.
    // Matches the Google Business Profile address for NAP consistency.
    address: { streetAddress: "2489 Rue Sandmere", addressLocality: "Saint-Lazare", addressRegion: "QC", postalCode: "J7T 0A7", addressCountry: "CA" }
  },
  social: {
    // Verified profile. TODO(Connor): add Instagram here + in Footer + in
    // the _document.tsx sameAs if an account exists.
    facebook: "https://www.facebook.com/brandseinc"
  },
  rating: {
    value: "5.0",
    count: 26
  },
  serviceAreas: [
    "Pointe-Claire", "Beaconsfield", "Kirkland", "Dorval", "Hudson",
    "Saint-Lazare", "Vaudreuil-Dorion", "Dollard-des-Ormeaux", "Senneville",
    "Baie-d'Urfe", "Ile-Perrot", "Pincourt", "Pierrefonds",
    "Sainte-Anne-de-Bellevue", "L'Ile-Bizard", "Notre-Dame-de-l'Ile-Perrot",
    "Terrasse-Vaudreuil", "Rigaud", "Les Cedres", "Coteau-du-Lac",
    "Pointe-des-Cascades", "Saint-Clet", "Lachine",
  ],
  ga: "G-FDDZP7VD44",
  gads: "AW-16516759047"
};

// Build schema.org Service JSON-LD for a service-page (tree-removal etc.).
// Service is the correct type for "this business offers this service" — keeps
// the global LocalBusiness schema in _document.tsx as the single business
// entity and links each service back via `provider`. Avoids the duplicate-
// LocalBusiness pattern that emerges when every service page declares its
// own TreeService entity.
// Stable identifier for the business entity declared in _document.tsx.
// Every other schema node references this instead of duplicating the org.
export const ORG_ID = `${siteConfig.domain}/#organization`;

export function buildServiceSchema(args: {
  name: string;
  description: string;
  slug: string;
  dateModified?: string; // YYYY-MM-DD — freshness signal for AI/answer engines
}) {
  const url = `${siteConfig.domain}${args.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "serviceType": args.name,
        "name": args.name,
        "description": args.description,
        "url": url,
        // Reference — not a copy — of the org entity (see ORG_ID note above).
        // No aggregateRating anywhere: self-serving review markup on our own
        // business entity is disallowed by Google (see note in _document.tsx).
        "provider": { "@id": ORG_ID },
        "areaServed": siteConfig.serviceAreas.map(name => ({ "@type": "City", name })),
        "offers": {
          "@type": "Offer",
          "priceCurrency": "CAD",
          "availability": "https://schema.org/InStock"
        }
      },
      // dateModified is a CreativeWork property — schema.org does not define
      // it on Service, so the freshness signal rides a companion WebPage node.
      ...(args.dateModified ? [{
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        "url": url,
        "dateModified": args.dateModified,
        "about": { "@id": ORG_ID }
      }] : []),
    ],
  };
}
