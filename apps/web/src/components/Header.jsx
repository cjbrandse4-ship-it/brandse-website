
import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import EmergencyBar from './EmergencyBar.jsx';

const Header = memo(() => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const { language, toggleLanguage, t, getLocalizedPath } = useLanguage();

  const servicesRef = useRef(null);
  const areasRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) setServicesOpen(false);
      if (areasRef.current && !areasRef.current.contains(event.target)) setAreasOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMobileMenu = useCallback(() => setMobileMenuOpen(prev => !prev), []);
  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);
  const toggleServices = useCallback(() => { setServicesOpen(prev => !prev); setAreasOpen(false); }, []);
  const toggleAreas = useCallback(() => { setAreasOpen(prev => !prev); setServicesOpen(false); }, []);

  const services = [
    { name: t('services.treeRemoval.title', 'Tree Removal'), path: '/tree-removal' },
    { name: t('services.stumpGrinding.title', 'Stump Grinding'), path: '/stump-grinding' },
    { name: t('services.treeTrimming.title', 'Tree Trimming'), path: '/tree-trimming' },
    { name: t('services.hedgeTrimming.title', 'Hedge Trimming'), path: '/hedge-trimming' },
    { name: t('services.treePlanting.title', 'Tree Planting'), path: '/tree-planting' },
    { name: t('services.emergency.title', 'Emergency Services'), path: '/emergency-services' }
  ];

  const serviceAreas = [
    { name: 'Saint-Lazare', path: '/saint-lazare' }, { name: 'Pointe-Claire', path: '/pointe-claire' },
    { name: 'Hudson', path: '/hudson' }, { name: 'Beaconsfield', path: '/beaconsfield' },
    { name: 'Vaudreuil', path: '/vaudreuil' }, { name: 'Kirkland', path: '/kirkland' },
    { name: 'Dollard-des-Ormeaux', path: '/dollard-des-ormeaux' }, { name: 'Dorval', path: '/dorval' },
    { name: 'Senneville', path: '/senneville' }, { name: "Baie-D'Urfé", path: '/baie-d-urfe' },
    { name: 'Île-Perrot', path: '/ile-perrot' }, { name: 'Pincourt', path: '/pincourt' }
  ];

  return (
    <>
      <EmergencyBar />
      <header className="bg-white shadow-md sticky top-0 z-40 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            <Link to={getLocalizedPath('/')} className="flex items-center space-x-3 min-h-[44px] rounded-md focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Home - Service d'Arbres Brandse">
              <img src="https://horizons-cdn.hostinger.com/e1153006-2afb-49ee-92e0-b73c646df449/25d59af3d94029142dba384beaa99200.jpg" alt="Service d'Arbres Brandse Logo" width={60} height={60} className="h-[40px] sm:h-[50px] md:h-[60px] w-auto object-contain" />
              <div className="hidden sm:block">
                <span className="text-lg sm:text-xl font-bold text-gray-900 leading-tight block">Service d'Arbres Brandse Inc</span>
                <span className="text-xs text-gray-600 block">Professional Tree Services</span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-2 xl:space-x-4" aria-label="Main Navigation">
              <Link to={getLocalizedPath('/')} className="text-gray-700 hover:text-primary font-medium transition-colors px-3 py-2 min-h-[44px] flex items-center rounded-md">{t('nav.home')}</Link>
              
              <div className="relative group" ref={servicesRef}>
                <button 
                  className="text-gray-700 hover:text-primary font-medium transition-colors flex items-center px-3 py-2 min-h-[44px] rounded-md" 
                  onClick={toggleServices}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  {t('nav.services')} <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-xl rounded-lg py-2 border border-gray-100">
                    <Link to={getLocalizedPath('/services')} className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 font-semibold min-h-[44px]" onClick={() => setServicesOpen(false)}>{t('common.allServices')}</Link>
                    <div className="border-t my-1"></div>
                    {services.map((service) => (
                      <Link key={service.path} to={getLocalizedPath(service.path)} className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 min-h-[44px]" onClick={() => setServicesOpen(false)}>{service.name}</Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to={getLocalizedPath('/about')} className="text-gray-700 hover:text-primary font-medium transition-colors px-3 py-2 min-h-[44px] flex items-center rounded-md">{t('nav.about')}</Link>
              <Link to={getLocalizedPath('/gallery')} className="text-gray-700 hover:text-primary font-medium transition-colors px-3 py-2 min-h-[44px] flex items-center rounded-md">{language === 'fr' ? 'Galerie' : 'Gallery'}</Link>
              <Link to={getLocalizedPath('/blog')} className="text-gray-700 hover:text-primary font-medium transition-colors px-3 py-2 min-h-[44px] flex items-center rounded-md">Blog</Link>
              <Link to={getLocalizedPath('/faq')} className="text-gray-700 hover:text-primary font-medium transition-colors px-3 py-2 min-h-[44px] flex items-center rounded-md">{t('nav.faq')}</Link>
              
              <div className="relative group" ref={areasRef}>
                <button 
                  className="text-gray-700 hover:text-primary font-medium transition-colors flex items-center px-3 py-2 min-h-[44px] rounded-md" 
                  onClick={toggleAreas}
                  aria-expanded={areasOpen}
                  aria-haspopup="true"
                >
                  {t('common.serviceAreas')} <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
                </button>
                {areasOpen && (
                  <div className="absolute top-full right-0 mt-1 w-56 bg-white shadow-xl rounded-lg py-2 max-h-[70vh] overflow-y-auto border border-gray-100">
                    {serviceAreas.map((area) => (
                      <Link key={area.path} to={getLocalizedPath(area.path)} className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 min-h-[44px]" onClick={() => setAreasOpen(false)}>{area.name}</Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            <div className="hidden lg:flex items-center space-x-3">
              <button 
                onClick={toggleLanguage} 
                className="flex items-center text-sm font-semibold text-gray-600 hover:text-primary transition-colors px-3 py-2 min-h-[44px] rounded-md border border-gray-200 hover:border-primary"
                aria-label={`Switch to ${language === 'en' ? 'French' : 'English'}`}
              >
                <Globe className="h-4 w-4 mr-2" aria-hidden="true" /> {language === 'en' ? 'FR' : 'EN'}
              </button>
              <a href="tel:4383655410" className="flex items-center text-gray-900 font-bold hover:text-primary transition-colors px-3 py-2 min-h-[44px] rounded-md" aria-label="Call us at (438) 365-5410">
                <Phone className="h-5 w-5 mr-2 text-primary" aria-hidden="true" /> <span className="hidden xl:inline">(438) 365-5410</span>
              </a>
              <Button asChild className="bg-primary hover:bg-secondary min-h-[44px] px-6">
                <Link to={getLocalizedPath('/contact')}>{t('common.getFreeQuote')}</Link>
              </Button>
            </div>

            <div className="lg:hidden flex items-center space-x-2">
              <button 
                onClick={toggleLanguage} 
                className="flex items-center text-sm font-semibold text-gray-600 hover:text-primary transition-colors px-3 py-2 min-h-[44px] min-w-[44px] justify-center rounded-md border border-gray-200"
                aria-label={`Switch to ${language === 'en' ? 'French' : 'English'}`}
              >
                <Globe className="h-4 w-4" aria-hidden="true" />
              </button>
              <button 
                className="text-gray-700 p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-md hover:bg-gray-100" 
                onClick={toggleMobileMenu} 
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t max-h-[80vh] overflow-y-auto">
              <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
                <Link to={getLocalizedPath('/')} className="text-gray-700 hover:text-primary font-medium px-4 py-3 min-h-[44px] rounded-md hover:bg-gray-50" onClick={closeMobileMenu}>{t('nav.home')}</Link>
                <Link to={getLocalizedPath('/services')} className="text-gray-700 hover:text-primary font-medium px-4 py-3 min-h-[44px] rounded-md hover:bg-gray-50" onClick={closeMobileMenu}>{t('common.allServices')}</Link>
                <div className="pl-4 border-l-2 border-gray-100 ml-4 my-2 space-y-1">
                  {services.map((service) => (
                    <Link key={service.path} to={getLocalizedPath(service.path)} className="block text-gray-600 hover:text-primary py-3 px-4 text-sm min-h-[44px] rounded-md hover:bg-gray-50" onClick={closeMobileMenu}>{service.name}</Link>
                  ))}
                </div>
                <Link to={getLocalizedPath('/about')} className="text-gray-700 hover:text-primary font-medium px-4 py-3 min-h-[44px] rounded-md hover:bg-gray-50" onClick={closeMobileMenu}>{t('nav.about')}</Link>
                <Link to={getLocalizedPath('/gallery')} className="text-gray-700 hover:text-primary font-medium px-4 py-3 min-h-[44px] rounded-md hover:bg-gray-50" onClick={closeMobileMenu}>{language === 'fr' ? 'Galerie' : 'Gallery'}</Link>
                <Link to={getLocalizedPath('/blog')} className="text-gray-700 hover:text-primary font-medium px-4 py-3 min-h-[44px] rounded-md hover:bg-gray-50" onClick={closeMobileMenu}>Blog</Link>
                <Link to={getLocalizedPath('/faq')} className="text-gray-700 hover:text-primary font-medium px-4 py-3 min-h-[44px] rounded-md hover:bg-gray-50" onClick={closeMobileMenu}>{t('nav.faq')}</Link>
                <Link to={getLocalizedPath('/contact')} className="text-gray-700 hover:text-primary font-medium px-4 py-3 min-h-[44px] rounded-md hover:bg-gray-50" onClick={closeMobileMenu}>{t('nav.contact')}</Link>
                
                <div className="pt-4 mt-2 border-t border-gray-100">
                  <p className="text-sm text-gray-500 font-semibold px-4 mb-2 uppercase tracking-wider">{t('common.serviceAreas')}</p>
                  <div className="grid grid-cols-2 gap-1 px-2">
                    {serviceAreas.map((area) => (
                      <Link key={area.path} to={getLocalizedPath(area.path)} className="block text-gray-600 hover:text-primary px-3 py-3 text-sm min-h-[44px] rounded-md hover:bg-gray-50" onClick={closeMobileMenu}>{area.name}</Link>
                    ))}
                  </div>
                </div>
                
                <div className="pt-6 mt-4 border-t border-gray-100 px-4 flex flex-col gap-4">
                  <a href="tel:4383655410" className="flex items-center justify-center text-gray-900 hover:text-primary font-bold py-3 min-h-[44px] bg-gray-50 rounded-lg border border-gray-200">
                    <Phone className="h-5 w-5 mr-2 text-primary" aria-hidden="true" /> (438) 365-5410
                  </a>
                  <Button asChild className="bg-primary hover:bg-secondary w-full min-h-[48px] text-lg">
                    <Link to={getLocalizedPath('/contact')} onClick={closeMobileMenu}>{t('common.getFreeQuote')}</Link>
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
});

export default Header;
