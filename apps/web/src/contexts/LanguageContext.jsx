
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { translations } from '../utils/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [language, setLanguage] = useState(() => {
    if (location.pathname.startsWith('/fr')) return 'fr';
    const saved = localStorage.getItem('language');
    if (saved) return saved;
    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'fr' ? 'fr' : 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    if (location.pathname.startsWith('/fr') && language !== 'fr') {
      setLanguage('fr');
    } else if (!location.pathname.startsWith('/fr') && language !== 'en') {
      setLanguage('en');
    }
  }, [location.pathname, language]);

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'fr' : 'en';
    setLanguage(newLang);
    
    let newPath = location.pathname;
    if (newLang === 'fr') {
      newPath = `/fr${newPath === '/' ? '' : newPath}`;
    } else {
      newPath = newPath.replace(/^\/fr/, '') || '/';
    }
    navigate(newPath);
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      if (value === undefined) return key;
      value = value[k];
    }
    return value || key;
  };

  const getLocalizedPath = (path) => {
    if (language === 'fr') {
      return `/fr${path === '/' ? '' : path}`;
    }
    return path;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, getLocalizedPath }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
