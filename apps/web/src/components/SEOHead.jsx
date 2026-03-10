
import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '@/config/seo.js';

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  ogImage, 
  ogType = 'website',
  robots = 'index, follow',
  schema,
  canonicalUrl
}) => {
  const location = useLocation();
  
  // Ensure absolute URLs
  const currentPath = location.pathname;
  const fullCanonicalUrl = canonicalUrl || `${siteConfig.domain}${currentPath}`;
  const fullOgUrl = fullCanonicalUrl;
  const finalImage = ogImage || siteConfig.defaultImage;

  // Format title with site name suffix if not already present
  const finalTitle = title.includes(siteConfig.name) || title.includes(siteConfig.shortName)
    ? title 
    : `${title} | ${siteConfig.name}`;

  // Hreflang generation for multi-language
  const isFr = currentPath.startsWith('/fr');
  const basePath = isFr ? currentPath.replace(/^\/fr/, '') || '/' : currentPath;
  const enUrl = `${siteConfig.domain}${basePath === '/' ? '' : basePath}`;
  const frUrl = `${siteConfig.domain}/fr${basePath === '/' ? '' : basePath}`;

  return (
    <Helmet>
      {/* Language Attribute */}
      <html lang={isFr ? 'fr' : 'en'} />
      
      {/* Standard Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robots} />
      
      {/* Canonical Tag */}
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Hreflang Tags for Multi-language SEO */}
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="fr" href={frUrl} />
      <link rel="alternate" hrefLang="x-default" href={enUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullOgUrl} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={finalImage} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullOgUrl} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={finalImage} />

      {/* Legacy Schema Support (if passed directly) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
