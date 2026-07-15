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
          // Service-area business: no streetAddress, no precise geo. Google's
          // local model handles SABs via areaServed alone — adding a synthetic
          // street address mismatches Google Business Profile and risks
          // incorrect map pins / suspended listings.
          "@type": "TreeService",
          "name": "Service d'Arbres Brandse Inc",
          "url": "https://www.servicedarbresbrandse.com",
          "logo": "https://www.servicedarbresbrandse.com/logo-schema.png",
          "image": "https://www.servicedarbresbrandse.com/og-image.jpg",
          "telephone": "+1-438-365-5410",
          "email": "info@brandses.com",
          "address": { "@type": "PostalAddress", "addressLocality": "Montreal", "addressRegion": "QC", "postalCode": "H9W 1K1", "addressCountry": "CA" },
          "areaServed": [
            { "@type": "City", "name": "Pointe-Claire" }, { "@type": "City", "name": "Beaconsfield" },
            { "@type": "City", "name": "Kirkland" }, { "@type": "City", "name": "Dorval" },
            { "@type": "City", "name": "Hudson" }, { "@type": "City", "name": "Saint-Lazare" },
            { "@type": "City", "name": "Vaudreuil-Dorion" }, { "@type": "City", "name": "Dollard-des-Ormeaux" },
            { "@type": "City", "name": "Senneville" }, { "@type": "City", "name": "Baie-d'Urfé" },
            { "@type": "City", "name": "Île-Perrot" }, { "@type": "City", "name": "Pincourt" },
            { "@type": "City", "name": "Pierrefonds" }
          ],
          "openingHoursSpecification": [
            { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "07:00", "closes": "18:00" },
            { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "08:00", "closes": "16:00" }
          ],
          "priceRange": "$$",
          // No aggregateRating/review here — Google disallows "self-serving"
          // review markup on a business's own LocalBusiness/Organization entity
          // (GSC flags it as: Invalid object type for field "<parent_node>").
          // Star ratings for the business come from Google Business Profile.
          "contactPoint": { "@type": "ContactPoint", "telephone": "+1-438-365-5410", "contactType": "customer service", "email": "info@brandses.com", "availableLanguage": ["en", "fr"] },
          "sameAs": ["https://www.facebook.com/brandsetreeservice", "https://www.instagram.com/brandsetreeservice"]
        }) }} />
        {/* WebSite Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Service d'Arbres Brandse Inc",
          "url": "https://www.servicedarbresbrandse.com",
          "inLanguage": ["en", "fr"]
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
