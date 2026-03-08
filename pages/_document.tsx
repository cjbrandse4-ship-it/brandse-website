import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#2D5016" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://horizons-cdn.hostinger.com" crossOrigin="anonymous" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FDDZP7VD44" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-FDDZP7VD44');` }} />
        {/* Google Ads */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16516759047" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','AW-16516759047');` }} />
        {/* Organization Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Service d'Arbres Brandse Inc",
          "url": "https://servicedarbresbrandse.com",
          "logo": "https://horizons-cdn.hostinger.com/e1153006-2afb-49ee-92e0-b73c646df449/89f8c014b47a89e47a3f9a116ff52955.png",
          "contactPoint": { "@type": "ContactPoint", "telephone": "+1-438-365-5410", "contactType": "customer service", "email": "info@brandses.com", "areaServed": "CA", "availableLanguage": ["en", "fr"] },
          "sameAs": ["https://www.facebook.com/brandsetreeservice", "https://www.instagram.com/brandsetreeservice"]
        }) }} />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
