
import React from 'react';
import { Helmet } from 'react-helmet';

const SEOMetaTags = ({ 
  title = "Service d'Arbres Brandse Inc - Professional Tree Care in West Island Montreal", 
  description = "Expert tree trimming, removal, stump grinding, and emergency services in West Island Montreal since 2010", 
  imageUrl = "https://horizons-cdn.hostinger.com/e1153006-2afb-49ee-92e0-b73c646df449/7d7b8c44f72d161152e6520f3e3e292b.jpg", 
  pageUrl = "https://servicedarbresbrandse.com" 
}) => {
  return (
    <Helmet>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content="Service d'Arbres Brandse Inc" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

export default SEOMetaTags;
