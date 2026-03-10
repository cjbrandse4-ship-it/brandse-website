
import React from 'react';
import { Helmet } from 'react-helmet';
import { testimonials } from '@/data/testimonials.js';

const LocalBusinessSchema = ({ city = "West Island Montreal", description, url }) => {
  const allServiceAreas = [
    "West Island Montreal", "Saint-Lazare", "Pointe-Claire", "Hudson", 
    "Beaconsfield", "Vaudreuil", "Kirkland", "Dorval", "Senneville", 
    "Baie-D'Urfé", "Île-Perrot", "Pincourt", "Dollard-des-Ormeaux"
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Service d'Arbres Brandse Inc",
    "image": "https://horizons-cdn.hostinger.com/e1153006-2afb-49ee-92e0-b73c646df449/25d59af3d94029142dba384beaa99200.jpg",
    "telephone": "(438) 365-5410",
    "email": "info@brandses.com",
    "url": url || "https://servicedarbresbrandse.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": "QC",
      "addressCountry": "CA"
    },
    "areaServed": allServiceAreas.map(area => ({
      "@type": "City",
      "name": area
    })),
    "description": description || "Professional tree removal, trimming, stump grinding, and emergency services in the West Island of Montreal.",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "09:00",
        "closes": "15:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59",
        "description": "24/7 Emergency Services"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 4.9,
      "reviewCount": testimonials.length > 0 ? testimonials.length : 6,
      "bestRating": 5
    },
    "review": testimonials.map(t => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": t.name
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": t.rating,
        "bestRating": 5
      },
      "reviewBody": t.text.en
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default LocalBusinessSchema;
