
import React from 'react';
import { Phone, AlertTriangle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const EmergencyBar = () => {
  const { language } = useLanguage();
  const isFr = language === 'fr';

  return (
    <div className="bg-red-600 text-white px-4 py-2 text-center flex flex-wrap items-center justify-center gap-2 text-sm sm:text-base font-bold z-50 relative w-full">
      <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 animate-pulse" />
      <span>{isFr ? 'Urgence 24/7 :' : '24/7 Emergency:'}</span>
      <a 
        href="tel:4383655410" 
        className="hover:underline flex items-center min-h-[44px] px-2 rounded-md hover:bg-red-700 transition-colors"
        aria-label={isFr ? "Appeler les urgences" : "Call emergency"}
      >
        <Phone className="h-4 w-4 mr-2" /> (438) 365-5410
      </a>
    </div>
  );
};

export default EmergencyBar;
