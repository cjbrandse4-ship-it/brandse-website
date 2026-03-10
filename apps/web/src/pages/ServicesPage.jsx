
import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Disc, Scissors, Leaf, Sprout, AlertTriangle, ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import Breadcrumbs from '@/components/Breadcrumbs.jsx';
import SEOHead from '@/components/SEOHead.jsx';
import SchemaMarkup from '@/components/SchemaMarkup.jsx';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesPage = () => {
  const { t, getLocalizedPath, language } = useLanguage();
  const isFr = language === 'fr';

  const services = [
    { icon: Trash2, title: t('services.treeRemoval.title'), description: t('services.treeRemoval.desc'), path: '/tree-removal' },
    { icon: Disc, title: t('services.stumpGrinding.title'), description: t('services.stumpGrinding.desc'), path: '/stump-grinding' },
    { icon: Scissors, title: t('services.treeTrimming.title'), description: t('services.treeTrimming.desc'), path: '/tree-trimming' },
    { icon: Leaf, title: t('services.hedgeTrimming.title'), description: t('services.hedgeTrimming.desc'), path: '/hedge-trimming' },
    { icon: Sprout, title: t('services.treePlanting.title'), description: t('services.treePlanting.desc'), path: '/tree-planting' },
    { icon: AlertTriangle, title: t('services.emergency.title'), description: t('services.emergency.desc'), path: '/emergency-services' }
  ];

  const pageTitle = isFr ? "Services d'Arboriculture Complets | Service d'Arbres Brandse" : "Comprehensive Tree Care Services | Service d'Arbres Brandse";
  const pageDesc = isFr ? "Services complets d'arboriculture dans l'Ouest de l'Île : abattage, élagage, essouchage, taille de haies et urgences 24/7. Estimations gratuites!" : "Comprehensive tree care services in West Island Montreal: tree removal, pruning, stump grinding, hedge trimming & 24/7 emergency response. Free estimates!";

  return (
    <div className="overflow-x-hidden">
      <SEOHead 
        title={pageTitle}
        description={pageDesc}
      />
      
      <SchemaMarkup type="BreadcrumbList" data={{
        items: [
          { name: isFr ? 'Accueil' : 'Home', path: '/' },
          { name: isFr ? 'Services' : 'Services', path: '/services' }
        ]
      }} />

      <Header />

      <section className="bg-primary text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumbs items={[{label: isFr ? 'Services' : 'Services'}]} />
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 mt-4">{t('servicesPage.heroTitle')}</h1>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">{t('servicesPage.heroSubtitle')}</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 group flex flex-col border border-gray-100">
                <div className="bg-primary/10 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <service.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed flex-grow text-lg">{service.description}</p>
                <Button asChild variant="outline" className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white group mt-auto min-h-[56px] text-lg font-bold">
                  <Link to={getLocalizedPath(service.path)}>
                    {t('common.learnMore')}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">{t('servicesPage.ctaTitle')}</h2>
          <p className="text-xl text-gray-200 mb-10">{t('servicesPage.ctaDesc')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-10 py-6 min-h-[56px] shadow-xl">
              <Link to={getLocalizedPath('/contact')}>{t('common.getFreeQuote')}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-10 py-6 min-h-[56px]">
              <a href="tel:4383655410"><Phone className="mr-2 h-5 w-5" />(438) 365-5410</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
