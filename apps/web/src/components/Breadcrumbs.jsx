
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet';

const Breadcrumbs = ({ items }) => {
  const { getLocalizedPath } = useLanguage();
  
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `https://servicedarbresbrandse.com${getLocalizedPath('/')}`
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": item.path ? `https://servicedarbresbrandse.com${getLocalizedPath(item.path)}` : undefined
      }))
    ]
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      <nav className="flex items-center text-sm text-gray-500 py-4 px-4 max-w-7xl mx-auto overflow-x-auto whitespace-nowrap hide-scrollbar">
        <Link 
          to={getLocalizedPath('/')} 
          className="hover:text-primary flex items-center min-h-[44px] min-w-[44px] justify-center rounded-md transition-colors"
          aria-label="Home"
        >
          <Home className="h-4 w-4" />
        </Link>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <ChevronRight className="h-4 w-4 mx-1 sm:mx-2 flex-shrink-0 text-gray-400" />
            {item.path ? (
              <Link 
                to={getLocalizedPath(item.path)} 
                className="hover:text-primary min-h-[44px] flex items-center px-2 rounded-md transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-900 font-medium px-2">{item.label}</span>
            )}
          </React.Fragment>
        ))}
      </nav>
    </>
  );
};

export default Breadcrumbs;
