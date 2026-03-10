
import React from 'react';
import { siteConfig } from '@/config/seo.js';

const SchemaMarkup = ({ type, data }) => {
  let schema = {};

  switch (type) {
    case 'Organization':
      schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": siteConfig.name,
        "url": siteConfig.domain,
        "logo": siteConfig.defaultImage,
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": siteConfig.contact.phone,
          "contactType": "customer service",
          "email": siteConfig.contact.email,
          "areaServed": "CA",
          "availableLanguage": ["en", "fr"]
        },
        "sameAs": siteConfig.social
      };
      break;

    case 'LocalBusiness':
      schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": siteConfig.name,
        "image": siteConfig.defaultImage,
        "@id": siteConfig.domain,
        "url": data.url || siteConfig.domain,
        "telephone": siteConfig.contact.phone,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": siteConfig.contact.address.streetAddress,
          "addressLocality": data.city || siteConfig.contact.address.addressLocality,
          "addressRegion": siteConfig.contact.address.addressRegion,
          "postalCode": siteConfig.contact.address.postalCode,
          "addressCountry": siteConfig.contact.address.addressCountry
        },
        "geo": data.geo || {
          "@type": "GeoCoordinates",
          "latitude": 45.4406,
          "longitude": -73.8257
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "09:00",
            "closes": "16:00"
          }
        ],
        "priceRange": "$$"
      };
      break;

    case 'Service':
      schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": data.name,
        "description": data.description,
        "provider": {
          "@type": "LocalBusiness",
          "name": siteConfig.name
        },
        "areaServed": {
          "@type": "City",
          "name": "West Island Montreal"
        },
        "url": data.url
      };
      break;

    case 'BreadcrumbList':
      schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": data.items.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.name,
          "item": `${siteConfig.domain}${item.path}`
        }))
      };
      break;

    case 'FAQPage':
      schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": data.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      };
      break;

    case 'BlogPosting':
      schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": data.url
        },
        "headline": data.title,
        "description": data.description,
        "image": data.image || siteConfig.defaultImage,
        "author": {
          "@type": "Organization",
          "name": siteConfig.name
        },
        "publisher": {
          "@type": "Organization",
          "name": siteConfig.name,
          "logo": {
            "@type": "ImageObject",
            "url": siteConfig.defaultImage
          }
        },
        "datePublished": data.datePublished,
        "dateModified": data.dateModified || data.datePublished
      };
      break;

    default:
      return null;
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
};

export default SchemaMarkup;
