
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

const CookieConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { language, getLocalizedPath } = useLanguage();
  const isFr = language === 'fr';

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = (value) => {
    localStorage.setItem('cookieConsent', value);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md text-white p-4 sm:p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.2)] border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="flex-1 pr-8 relative w-full">
          <button 
            onClick={() => setIsVisible(false)} 
            className="absolute -top-2 -right-2 lg:hidden text-gray-400 hover:text-white p-2"
            aria-label="Close banner"
          >
            <X className="h-5 w-5" />
          </button>
          <h3 className="text-lg font-bold mb-2">
            {isFr ? "Nous respectons votre vie privée" : "We value your privacy"}
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            {isFr 
              ? "Nous utilisons des cookies pour améliorer votre expérience de navigation, diffuser des publicités ou des contenus personnalisés et analyser notre trafic. En cliquant sur « Tout accepter », vous consentez à notre utilisation des cookies. " 
              : "We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking 'Accept All', you consent to our use of cookies. "}
            <Link to={getLocalizedPath('/cookie-policy')} className="text-primary hover:text-primary/80 underline font-medium ml-1">
              {isFr ? "Politique relative aux cookies" : "Cookie Policy"}
            </Link>
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 shrink-0 w-full lg:w-auto">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => handleConsent('preferences')} 
            className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white flex-1 lg:flex-none"
          >
            {isFr ? "Gérer les préférences" : "Manage Preferences"}
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => handleConsent('rejected')} 
            className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white flex-1 lg:flex-none"
          >
            {isFr ? "Tout refuser" : "Reject All"}
          </Button>
          <Button 
            size="sm" 
            onClick={() => handleConsent('accepted')} 
            className="bg-primary hover:bg-secondary text-white flex-1 lg:flex-none"
          >
            {isFr ? "Tout accepter" : "Accept All"}
          </Button>
          <button 
            onClick={() => setIsVisible(false)} 
            className="hidden lg:flex text-gray-400 hover:text-white ml-2 p-2"
            aria-label="Close banner"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
