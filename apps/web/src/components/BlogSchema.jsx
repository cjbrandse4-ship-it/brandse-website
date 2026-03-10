
import React from 'react';
import { Helmet } from 'react-helmet';

const BlogSchema = ({ post, langData }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://servicedarbresbrandse.com/blog/${post.slug}`
    },
    "headline": langData.title,
    "description": langData.metaDescription,
    "image": post.image,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Service d'Arbres Brandse",
      "logo": {
        "@type": "ImageObject",
        "url": "https://horizons-cdn.hostinger.com/e1153006-2afb-49ee-92e0-b73c646df449/25d59af3d94029142dba384beaa99200.jpg"
      }
    },
    "datePublished": post.date,
    "dateModified": post.date
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default BlogSchema;
