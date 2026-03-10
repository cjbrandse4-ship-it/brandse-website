
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Shield, Award, Clock, Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = memo(() => {
  const currentYear = new Date().getFullYear();
  const {
    t,
    getLocalizedPath,
    language
  } = useLanguage();
  const isFr = language === 'fr';
  
  const serviceAreas = [{
    name: 'Saint-Lazare',
    path: '/saint-lazare'
  }, {
    name: 'Pointe-Claire',
    path: '/pointe-claire'
  }, {
    name: 'Hudson',
    path: '/hudson'
  }, {
    name: 'Beaconsfield',
    path: '/beaconsfield'
  }, {
    name: 'Vaudreuil',
    path: '/vaudreuil'
  }, {
    name: 'Kirkland',
    path: '/kirkland'
  }, {
    name: 'Dollard-des-Ormeaux',
    path: '/dollard-des-ormeaux'
  }, {
    name: 'Dorval',
    path: '/dorval'
  }, {
    name: 'Senneville',
    path: '/senneville'
  }, {
    name: "Baie-D'Urfé",
    path: '/baie-d-urfe'
  }, {
    name: 'Île-Perrot',
    path: '/ile-perrot'
  }, {
    name: 'Pincourt',
    path: '/pincourt'
  }];
  
  const services = [{
    name: t('services.treeRemoval.title'),
    path: '/tree-removal'
  }, {
    name: t('services.stumpGrinding.title'),
    path: '/stump-grinding'
  }, {
    name: t('services.treeTrimming.title'),
    path: '/tree-trimming'
  }, {
    name: t('services.hedgeTrimming.title'),
    path: '/hedge-trimming'
  }, {
    name: t('services.treePlanting.title'),
    path: '/tree-planting'
  }, {
    name: t('services.emergency.title'),
    path: '/emergency-services'
  }];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* Company Info */}
          <div className="flex flex-col space-y-6">
            <Link to={getLocalizedPath('/')} className="flex items-center space-x-3 min-h-[44px]" aria-label="Home - Service d'Arbres Brandse">
              <img src="https://horizons-cdn.hostinger.com/e1153006-2afb-49ee-92e0-b73c646df449/25d59af3d94029142dba384beaa99200.jpg" alt="Service d'Arbres Brandse Logo" width={50} height={50} className="h-[50px] w-auto object-contain rounded-md bg-white p-1" loading="lazy" />
              <span className="text-white font-bold text-xl leading-tight">Service d'Arbres Brandse Inc</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              {isFr ? "Experts en arboriculture desservant l'Ouest de l'Île de Montréal. Sécurité, professionnalisme et respect de l'environnement." : "Expert arboriculture serving the West Island of Montreal. Safety, professionalism, and environmental respect."}
            </p>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center text-sm">
                <Shield className="h-5 w-5 text-primary mr-3 flex-shrink-0" aria-hidden="true" />
                <span className="text-gray-300">{t('common.licensedInsured')}</span>
              </div>
              <div className="flex items-center text-sm">
                <Award className="h-5 w-5 text-primary mr-3 flex-shrink-0" aria-hidden="true" />
                <span className="text-gray-300">{t('common.certifiedArborists')}</span>
              </div>
            </div>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.facebook.com/brandseinc/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary" aria-label="Visit our Facebook page"><Facebook className="h-5 w-5" aria-hidden="true" /></a>
              <a href="https://www.instagram.com/servicedarbresbrandse/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary" aria-label="Visit our Instagram page"><Instagram className="h-5 w-5" aria-hidden="true" /></a>
            </div>
          </div>

          {/* Services & Company */}
          <div className="grid grid-cols-2 gap-4 sm:gap-8">
            <div className="flex flex-col">
              <h2 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">{t('nav.services')}</h2>
              <ul className="flex flex-col space-y-3">
                {services.map((service, idx) => (
                  <li key={idx}>
                    <Link to={getLocalizedPath(service.path)} className="text-gray-400 hover:text-primary transition-colors flex items-center min-h-[44px] text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 flex-shrink-0" aria-hidden="true"></span>
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col">
              <h2 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">{isFr ? "Entreprise" : "Company"}</h2>
              <ul className="flex flex-col space-y-3">
                <li><Link to={getLocalizedPath('/about')} className="text-gray-400 hover:text-primary transition-colors min-h-[44px] inline-flex items-center text-sm">{t('nav.about')}</Link></li>
                <li><Link to={getLocalizedPath('/blog')} className="text-gray-400 hover:text-primary transition-colors min-h-[44px] inline-flex items-center text-sm">Blog</Link></li>
                <li><Link to={getLocalizedPath('/faq')} className="text-gray-400 hover:text-primary transition-colors min-h-[44px] inline-flex items-center text-sm">{t('nav.faq')}</Link></li>
                <li><Link to={getLocalizedPath('/contact')} className="text-gray-400 hover:text-primary transition-colors min-h-[44px] inline-flex items-center text-sm">{t('nav.contact')}</Link></li>
              </ul>
            </div>
          </div>

          {/* Locations */}
          <div className="flex flex-col">
            <h2 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">{t('common.serviceAreas')}</h2>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {serviceAreas.map((area, idx) => (
                <li key={idx}>
                  <Link to={getLocalizedPath(area.path)} className="text-gray-400 hover:text-primary transition-colors text-sm min-h-[44px] inline-flex items-center">
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col">
            <h2 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">{t('common.contactUs')}</h2>
            <ul className="flex flex-col space-y-5">
              <li>
                <a href="tel:4383655410" className="flex items-start group min-h-[44px]" aria-label="Call us at (438) 365-5410">
                  <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-primary transition-colors mr-3 flex-shrink-0">
                    <Phone className="h-4 w-4 text-white" aria-hidden="true" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-xs text-gray-500 mb-0.5">{isFr ? "Appelez-nous" : "Call Us"}</span>
                    <span className="text-white font-bold text-sm group-hover:text-primary transition-colors">(438) 365-5410</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:info@brandses.com" className="flex items-start group min-h-[44px]" aria-label="Email us at info@brandses.com">
                  <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-primary transition-colors mr-3 flex-shrink-0">
                    <Mail className="h-4 w-4 text-white" aria-hidden="true" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-xs text-gray-500 mb-0.5">{isFr ? "Écrivez-nous" : "Email Us"}</span>
                    <span className="text-white font-medium text-sm group-hover:text-primary transition-colors break-all">info@brandses.com</span>
                  </div>
                </a>
              </li>
              <li className="flex items-start min-h-[44px]">
                <div className="bg-gray-800 p-2 rounded-lg mr-3 flex-shrink-0">
                  <Clock className="h-4 w-4 text-white" aria-hidden="true" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-xs text-gray-500 mb-0.5">{t('common.hours')}</span>
                  <span className="text-gray-300 text-xs leading-snug whitespace-nowrap">
                    {isFr ? "Lundi-Vendredi 8h-18h, 24/7 urgences" : "Monday-Friday 8am-6pm, 24/7 for emergencies"}
                  </span>
                </div>
              </li>
              <li className="flex items-start min-h-[44px]">
                <div className="bg-gray-800 p-2 rounded-lg mr-3 flex-shrink-0">
                  <MapPin className="h-4 w-4 text-white" aria-hidden="true" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-xs text-gray-500 mb-0.5">{isFr ? "Siège Social" : "Headquarters"}</span>
                  <span className="text-white font-medium text-xs">Saint-Lazare, QC</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 text-center md:text-left">
            &copy; {currentYear} Service d'Arbres Brandse Inc. {t('common.rights')}
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
            <Link to={getLocalizedPath('/')} className="hover:text-white transition-colors min-h-[44px] flex items-center">{isFr ? "Politique de confidentialité" : "Privacy Policy"}</Link>
            <Link to={getLocalizedPath('/')} className="hover:text-white transition-colors min-h-[44px] flex items-center">{isFr ? "Conditions d'utilisation" : "Terms of Service"}</Link>
            <Link to={getLocalizedPath('/cookie-policy')} className="hover:text-white transition-colors min-h-[44px] flex items-center">{isFr ? "Politique relative aux cookies" : "Cookie Policy"}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
