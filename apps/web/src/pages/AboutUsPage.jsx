
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Award, Users, CheckCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import Breadcrumbs from '@/components/Breadcrumbs.jsx';
import SchemaMarkup from '@/components/SchemaMarkup.jsx';
import SEOHead from '@/components/SEOHead.jsx';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutUsPage = () => {
  const { t, getLocalizedPath, language } = useLanguage();
  const isFr = language === 'fr';

  const values = t('about.values');

  const pageTitle = isFr ? "À Propos de Nous | Arboriculteurs Certifiés" : "About Us | Certified Arborists";
  const pageDesc = isFr ? "Découvrez Service d'Arbres Brandse. Nous sommes des arboriculteurs certifiés dédiés à l'entretien professionnel et sécuritaire des arbres dans l'Ouest de l'Île de Montréal." : "Discover Service d'Arbres Brandse. We are certified arborists dedicated to safe, professional tree care in West Island Montreal. Fully insured & experienced.";
  const keywords = isFr ? "à propos arboriculteur, entreprise arbre Montréal, équipe arboriculture Ouest de l'Île" : "about arborist, tree company Montreal, tree care team West Island";
  const imageUrl = "https://images.unsplash.com/photo-1550002079-5b59db6b6df9";

  return (
    <div className="overflow-x-hidden">
      <SEOHead 
        title={pageTitle}
        description={pageDesc}
        keywords={keywords}
      />

      <SchemaMarkup type="BreadcrumbList" data={{
        items: [
          { name: isFr ? 'Accueil' : 'Home', path: '/' },
          { name: isFr ? 'À Propos' : 'About', path: '/about' }
        ]
      }} />

      <Header />

      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="bg-white/10 backdrop-blur-sm inline-block rounded-lg px-4 py-2 mb-6">
            <Breadcrumbs items={[{label: isFr ? 'À Propos' : 'About Us'}]} />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 mt-4 tracking-tight drop-shadow-lg">
            {t('about.heroTitle')}
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto drop-shadow-md">
            {t('about.heroSubtitle')}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{t('about.storyTitle')}</h2>
              <div className="prose prose-lg text-gray-700 max-w-none">
                <p className="mb-6">{t('about.story1')}</p>
                <p className="mb-6">{t('about.story2')}</p>
                <p className="mb-8">{t('about.story3')}</p>
                <p className="mb-8">
                  {isFr 
                    ? "Notre équipe est composée d'arboriculteurs passionnés et certifiés, formés aux dernières techniques de l'industrie. Nous croyons fermement que l'éducation continue est la clé pour offrir les meilleurs soins possibles à vos arbres tout en garantissant la sécurité absolue sur chaque chantier." 
                    : "Our team consists of passionate, certified arborists trained in the latest industry techniques. We firmly believe that continuous education is the key to providing the best possible care for your trees while ensuring absolute safety on every job site."}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button asChild className="bg-primary hover:bg-secondary min-h-[56px] text-lg px-8">
                  <Link to={getLocalizedPath('/contact')}>{t('common.contactUs')}</Link>
                </Button>
              </div>
            </div>
            <div className="bg-gray-50 rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('about.missionTitle')}</h3>
              <p className="text-gray-700 mb-10 text-lg leading-relaxed">{t('about.missionDesc')}</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('about.valuesTitle')}</h3>
              <ul className="space-y-4">
                {values.map((value, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-4 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
