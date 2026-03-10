
import React from 'react';
import { Helmet } from 'react-helmet';

const FAQSchema = ({ categories, faqs }) => {
  // Handle both categorized format and legacy flat format
  let allFaqs = [];
  
  if (categories && categories.length > 0) {
    allFaqs = categories.flatMap(category => category.items);
  } else if (faqs && faqs.length > 0) {
    allFaqs = faqs;
  }

  if (allFaqs.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.q || faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a || faq.answer
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default FAQSchema;
