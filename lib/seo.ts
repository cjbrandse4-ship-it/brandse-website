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
    address: { addressLocality: "Montreal", addressRegion: "QC", postalCode: "H9W 1K1", addressCountry: "CA" }
  },
  social: {
    facebook: "https://www.facebook.com/brandsetreeservice",
    instagram: "https://www.instagram.com/brandsetreeservice"
  },
  rating: {
    value: "5.0",
    count: 26
  },
  serviceAreas: [
    "Pointe-Claire", "Beaconsfield", "Kirkland", "Dorval", "Hudson",
    "Saint-Lazare", "Vaudreuil-Dorion", "Dollard-des-Ormeaux", "Senneville",
    "Baie-d'Urfe", "Ile-Perrot", "Pincourt", "Pierrefonds",
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
export function buildServiceSchema(args: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": args.name,
    "name": args.name,
    "description": args.description,
    "url": `${siteConfig.domain}${args.slug}`,
    "provider": {
      "@type": "TreeService",
      "name": siteConfig.name,
      "url": siteConfig.domain,
      "telephone": siteConfig.contact.phone,
      "image": siteConfig.defaultImage,
      "address": { "@type": "PostalAddress", ...siteConfig.contact.address }
      // No aggregateRating — self-serving review markup on our own business
      // entity is disallowed by Google (see note in _document.tsx).
    },
    "areaServed": siteConfig.serviceAreas.map(name => ({ "@type": "City", name })),
    "offers": {
      "@type": "Offer",
      "priceCurrency": "CAD",
      "availability": "https://schema.org/InStock"
    }
  };
}
