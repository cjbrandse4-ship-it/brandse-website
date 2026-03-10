
import React from 'react';
import { Helmet } from 'react-helmet';

const LocalBusinessGeoSchema = ({ city, address, serviceArea, description, url }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Service d'Arbres Brandse Inc",
    "image": "https://servicedarbresbrandse.com/logo.png",
    "@id": url,
    "url": url,
    "telephone": "438-365-5410",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address,
      "addressLocality": city,
      "addressRegion": "QC",
      "addressCountry": "CA"
    },
    "areaServed": {
      "@type": "City",
      "name": serviceArea
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "07:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "16:00"
      }
    ],
    "description": description || `Professional tree services in ${city}.`
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default LocalBusinessGeoSchema;
