import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from "next/document";

interface MyDocumentProps extends DocumentInitialProps {
  lang: 'en' | 'fr';
}

class MyDocument extends Document<MyDocumentProps> {
  static async getInitialProps(ctx: DocumentContext): Promise<MyDocumentProps> {
    const initialProps = await Document.getInitialProps(ctx);
    const url = ctx.req?.url || ctx.asPath || '';
    const lang: 'en' | 'fr' = url.startsWith('/fr') ? 'fr' : 'en';
    return { ...initialProps, lang };
  }

  render() {
    const { lang } = this.props;
    return (
    <Html lang={lang}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#2D5016" />
<link rel="icon" href="/favicon.ico" sizes="16x16 32x32 48x48" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* Google Analytics + Ads (single gtag load) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FDDZP7VD44" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-FDDZP7VD44');gtag('config','AW-16516759047');` }} />
        {/* LocalBusiness Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          // Address matches the Google Business Profile (2489 Rue Sandmere,
          // Saint-Lazare) for NAP consistency. Keep the two in sync — a
          // mismatch between site schema and GBP hurts local rankings.
          "@type": "TreeService",
          // Stable entity id — every Service/city schema references this node
          // instead of embedding its own copy of the organization.
          "@id": "https://www.servicedarbresbrandse.com/#organization",
          "name": "Service d'Arbres Brandse Inc",
          "alternateName": "Brandse Tree Service",
          "url": "https://www.servicedarbresbrandse.com",
          "logo": "https://www.servicedarbresbrandse.com/logo-schema.png",
          "image": "https://www.servicedarbresbrandse.com/og-image.jpg",
          "telephone": "+1-438-365-5410",
          "email": "info@brandses.com",
          "address": { "@type": "PostalAddress", "streetAddress": "2489 Rue Sandmere", "addressLocality": "Saint-Lazare", "addressRegion": "QC", "postalCode": "J7T 0A7", "addressCountry": "CA" },
          "areaServed": [
            { "@type": "City", "name": "Pointe-Claire" }, { "@type": "City", "name": "Beaconsfield" },
            { "@type": "City", "name": "Kirkland" }, { "@type": "City", "name": "Dorval" },
            { "@type": "City", "name": "Hudson" }, { "@type": "City", "name": "Saint-Lazare" },
            { "@type": "City", "name": "Vaudreuil-Dorion" }, { "@type": "City", "name": "Dollard-des-Ormeaux" },
            { "@type": "City", "name": "Senneville" }, { "@type": "City", "name": "Baie-d'Urfé" },
            { "@type": "City", "name": "Île-Perrot" }, { "@type": "City", "name": "Pincourt" },
            { "@type": "City", "name": "Pierrefonds" }, { "@type": "City", "name": "Sainte-Anne-de-Bellevue" },
            { "@type": "City", "name": "L'Île-Bizard" }, { "@type": "City", "name": "Notre-Dame-de-l'Île-Perrot" },
            { "@type": "City", "name": "Terrasse-Vaudreuil" }, { "@type": "City", "name": "Rigaud" },
            { "@type": "City", "name": "Les Cèdres" }, { "@type": "City", "name": "Coteau-du-Lac" },
            { "@type": "City", "name": "Pointe-des-Cascades" }, { "@type": "City", "name": "Saint-Clet" },
            { "@type": "City", "name": "Lachine" }
          ],
          // Matches the visible hours copy site-wide (Footer/contact:
          // "Monday-Friday 8am-6pm, 24/7 for emergencies"). 24/7 emergency
          // availability is deliberately NOT encoded as opening hours.
          // TODO(Connor): confirm — if you also work Saturdays, add it here
          // AND in data/translations.ts + public/llms.txt so all three agree.
          "openingHoursSpecification": [
            { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "18:00" }
          ],
          "priceRange": "$$",
          // No aggregateRating/review here — Google disallows "self-serving"
          // review markup on a business's own LocalBusiness/Organization entity
          // (GSC flags it as: Invalid object type for field "<parent_node>").
          // Star ratings for the business come from Google Business Profile.
          "contactPoint": { "@type": "ContactPoint", "telephone": "+1-438-365-5410", "contactType": "customer service", "email": "info@brandses.com", "availableLanguage": ["en", "fr"] },
          // Verified profiles only: real Facebook page + the Maps listing URL
          // Connor confirmed resolves to the Google Business Profile. No
          // business Instagram exists (searched Sept 2026) — add here + in
          // siteConfig.social + Footer if one is ever created.
          "sameAs": [
            "https://www.facebook.com/brandseinc",
            "https://www.google.com/maps/search/?api=1&query=Service%20d%27Arbres%20Brandse%20Inc%2C%20Saint-Lazare%2C%20QC"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Tree Services",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tree Removal", "url": "https://www.servicedarbresbrandse.com/tree-removal" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Stump Grinding & Removal", "url": "https://www.servicedarbresbrandse.com/stump-grinding" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tree Trimming & Pruning", "url": "https://www.servicedarbresbrandse.com/tree-trimming" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hedge Trimming", "url": "https://www.servicedarbresbrandse.com/hedge-trimming" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tree Planting", "url": "https://www.servicedarbresbrandse.com/tree-planting" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Tree Services", "url": "https://www.servicedarbresbrandse.com/emergency-services" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hard-to-Reach Tree Removal", "url": "https://www.servicedarbresbrandse.com/hard-to-reach-tree-removal" } }
            ]
          }
        }) }} />
        {/* WebSite Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": "https://www.servicedarbresbrandse.com/#website",
          "name": "Service d'Arbres Brandse Inc",
          "url": "https://www.servicedarbresbrandse.com",
          "inLanguage": ["en-CA", "fr-CA"],
          "publisher": { "@id": "https://www.servicedarbresbrandse.com/#organization" }
        }) }} />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
    );
  }
}

export default MyDocument;
