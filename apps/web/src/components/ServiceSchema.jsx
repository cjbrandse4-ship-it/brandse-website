
import React from 'react';
import { Helmet } from 'react-helmet';

const ServiceSchema = ({ 
  serviceName, 
  serviceDescription, 
  priceRange = "$200-$3000", 
  availability = "Monday-Friday 8am-5pm, Saturday 9am-3pm",
  url,
  services = []
}) => {
  const baseProvider = {
    "@type": "LocalBusiness",
    "name": "Service d'Arbres Brandse Inc",
    "telephone": "(438) 365-5410",
    "image": "https://horizons-cdn.hostinger.com/e1153006-2afb-49ee-92e0-b73c646df449/25d59af3d94029142dba384beaa99200.jpg",
    "priceRange": priceRange
  };

  const areaServed = [
    { "@type": "City", "name": "West Island Montreal" },
    { "@type": "City", "name": "Saint-Lazare" },
    { "@type": "City", "name": "Pointe-Claire" },
    { "@type": "City", "name": "Hudson" },
    { "@type": "City", "name": "Beaconsfield" },
    { "@type": "City", "name": "Vaudreuil" },
    { "@type": "City", "name": "Kirkland" },
    { "@type": "City", "name": "Dorval" },
    { "@type": "City", "name": "Senneville" },
    { "@type": "City", "name": "Baie-D'Urfé" },
    { "@type": "City", "name": "Île-Perrot" },
    { "@type": "City", "name": "Pincourt" },
    { "@type": "City", "name": "Dollard-des-Ormeaux" }
  ];

  let schemaData;

  if (services && services.length > 0) {
    schemaData = services.map(svc => ({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": svc.name,
      "description": svc.description,
      "url": svc.url || url || "https://servicedarbresbrandse.com",
      "provider": baseProvider,
      "areaServed": areaServed,
      "offers": {
        "@type": "Offer",
        "priceRange": priceRange,
        "availability": "https://schema.org/InStock",
        "description": svc.availability || availability
      }
    }));
  } else {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": serviceName,
      "description": serviceDescription,
      "url": url || "https://servicedarbresbrandse.com",
      "provider": baseProvider,
      "areaServed": areaServed,
      "offers": {
        "@type": "Offer",
        "priceRange": priceRange,
        "availability": "https://schema.org/InStock",
        "description": availability
      }
    };
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default ServiceSchema;
