import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#2D5016" />
<link rel="icon" href="/favicon.ico" sizes="16x16 32x32 48x48" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        {/* Google Analytics + Ads (single gtag load) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FDDZP7VD44" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-FDDZP7VD44');gtag('config','AW-16516759047');` }} />
        {/* LocalBusiness Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TreeService",
          "name": "Service d'Arbres Brandse Inc",
          "url": "https://www.servicedarbresbrandse.com",
          "logo": "https://www.servicedarbresbrandse.com/logo-schema.png",
          "image": "https://www.servicedarbresbrandse.com/og-image.jpg",
          "telephone": "+1-438-365-5410",
          "email": "info@brandses.com",
          "address": { "@type": "PostalAddress", "streetAddress": "West Island", "addressLocality": "Montreal", "addressRegion": "QC", "postalCode": "H9W 1K1", "addressCountry": "CA" },
          "geo": { "@type": "GeoCoordinates", "latitude": 45.4715, "longitude": -73.8103 },
          "areaServed": [
            { "@type": "City", "name": "Pointe-Claire" }, { "@type": "City", "name": "Beaconsfield" },
            { "@type": "City", "name": "Kirkland" }, { "@type": "City", "name": "Dorval" },
            { "@type": "City", "name": "Hudson" }, { "@type": "City", "name": "Saint-Lazare" },
            { "@type": "City", "name": "Vaudreuil-Dorion" }, { "@type": "City", "name": "Dollard-des-Ormeaux" },
            { "@type": "City", "name": "Senneville" }, { "@type": "City", "name": "Baie-d'Urfé" },
            { "@type": "City", "name": "Île-Perrot" }, { "@type": "City", "name": "Pincourt" }
          ],
          "openingHoursSpecification": [
            { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "07:00", "closes": "18:00" },
            { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "08:00", "closes": "16:00" }
          ],
          "priceRange": "$$",
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
