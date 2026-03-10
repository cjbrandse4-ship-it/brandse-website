
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, CheckCircle, Shield, ArrowRight, TreePine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import LocalBusinessGeoSchema from '@/components/LocalBusinessGeoSchema.jsx';
import BreadcrumbSchema from '@/components/BreadcrumbSchema.jsx';
import SEOHead from '@/components/SEOHead.jsx';
import { useLanguage } from '@/contexts/LanguageContext';

const VaureuilPage = () => {
  const { t, getLocalizedPath, language } = useLanguage();
  const isFr = language === 'fr';
  const city = "Vaudreuil-Dorion";
  
  const replaceCity = (str) => str.replace(/{city}/g, city);
  const loc = {
    metaTitle: isFr ? `Services d'Arbres à ${city} | Service d'Arbres Brandse Inc` : `Tree Services in ${city} | Service d'Arbres Brandse Inc`,
    metaDesc: isFr ? `Services d'arbres professionnels à Vaudreuil-Dorion. Abattage, élagage et essouchage par des arboriculteurs certifiés. Urgence 24/7. Soumission gratuite.` : `Professional tree services in Vaudreuil-Dorion. Tree removal, trimming, and stump grinding by certified arborists. 24/7 emergency. Free quote.`,
    heroTitle: replaceCity(t('locationTemplate.heroTitle')),
    heroSubtitle: replaceCity(t('locationTemplate.heroSubtitle')),
  };
  const pageUrl = `https://servicedarbresbrandse.com${getLocalizedPath('/vaudreuil')}`;

  return (
    <>
      <SEOHead 
        title={loc.metaTitle}
        description={loc.metaDesc}
        keywords={isFr ? `services arbres ${city}, abattage arbre ${city}, élagage ${city}, arboriculteur ${city}` : `tree services ${city}, tree removal ${city}, tree trimming ${city}, arborist ${city}`}
        canonicalUrl={getLocalizedPath('/vaudreuil')}
        ogUrl={getLocalizedPath('/vaudreuil')}
      />
      
      <LocalBusinessGeoSchema 
        city="Vaudreuil" 
        address="Vaudreuil, QC" 
        serviceArea="Vaudreuil" 
        description={loc.metaDesc} 
        url={pageUrl} 
      />

      <BreadcrumbSchema breadcrumbs={[
        { label: isFr ? 'Accueil' : 'Home', url: '/' },
        { label: isFr ? 'Services' : 'Services', url: '/services' },
        { label: city, url: '/services/vaudreuil' }
      ]} />

      <Header />

      <section className="bg-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <MapPin className="h-10 w-10 mr-3 text-secondary" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center">
              {loc.heroTitle}
            </h1>
          </div>
          <p className="text-xl text-gray-200 text-center max-w-3xl mx-auto mb-10">
            {loc.heroSubtitle}
          </p>
          <div className="flex justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6">
              <Link to={getLocalizedPath('/contact')}>{isFr ? `Obtenir une soumission à ${city}` : `Get Your Free ${city} Quote`}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 prose prose-lg text-gray-600">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {isFr ? `Expertise Arboricole à ${city}` : `Tree Care Expertise in ${city}`}
              </h2>
              <p>
                {isFr 
                  ? "Vaudreuil-Dorion est une ville en pleine croissance qui combine des quartiers historiques avec de nouveaux développements résidentiels. Cette diversité signifie que nous traitons à la fois de vieux arbres matures nécessitant un élagage de préservation, et de jeunes arbres nécessitant une taille de formation dans les nouveaux quartiers." 
                  : "Vaudreuil-Dorion is a rapidly growing city that combines historic neighborhoods with new residential developments. This diversity means we handle both old mature trees requiring preservation pruning, and young trees needing structural pruning in new neighborhoods."}
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                {isFr ? "Réglementations et Permis" : "Regulations & Permits"}
              </h3>
              <p>
                {isFr 
                  ? "La ville de Vaudreuil-Dorion exige un certificat d'autorisation pour l'abattage d'arbres. La ville est particulièrement vigilante concernant la maladie hollandaise de l'orme et l'agrile du frêne. Nous vous aidons à identifier ces maladies et à obtenir les permis nécessaires rapidement." 
                  : "The city of Vaudreuil-Dorion requires a certificate of authorization for tree removal. The city is particularly vigilant regarding Dutch elm disease and the Emerald Ash Borer. We help you identify these diseases and obtain the necessary permits quickly."}
              </p>
              <Link to={getLocalizedPath('/blog/emerald-ash-borer-treatment')} className="text-primary font-semibold hover:underline">
                {isFr ? "En savoir plus sur l'agrile du frêne" : "Learn more about the Emerald Ash Borer"}
              </Link>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                {isFr ? "Défis Spécifiques" : "Specific Challenges"}
              </h3>
              <p>
                {isFr 
                  ? "Dans les nouveaux développements denses, l'accès pour l'équipement lourd peut être limité. Notre équipe est spécialisée dans le démontage manuel sécuritaire et l'utilisation d'équipement compact pour l'essouchage dans les cours arrière clôturées." 
                  : "In dense new developments, access for heavy equipment can be limited. Our team specializes in safe manual dismantling and using compact equipment for stump grinding in fenced backyards."}
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 h-fit sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{isFr ? "Nos Services Principaux" : "Our Core Services"}</h3>
              <div className="space-y-4">
                <Link to={getLocalizedPath('/tree-removal')} className="block bg-white p-4 rounded-lg shadow-sm hover:shadow-md hover:border-primary border border-transparent transition-all">
                  <div className="flex items-center font-bold text-gray-900 mb-1">
                    <TreePine className="h-5 w-5 text-primary mr-2" />
                    {isFr ? "Abattage d'arbres" : "Tree Removal"}
                  </div>
                </Link>
                <Link to={getLocalizedPath('/stump-grinding')} className="block bg-white p-4 rounded-lg shadow-sm hover:shadow-md hover:border-primary border border-transparent transition-all">
                  <div className="flex items-center font-bold text-gray-900 mb-1">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    {isFr ? "Essouchage" : "Stump Grinding"}
                  </div>
                </Link>
                <Link to={getLocalizedPath('/tree-trimming')} className="block bg-white p-4 rounded-lg shadow-sm hover:shadow-md hover:border-primary border border-transparent transition-all">
                  <div className="flex items-center font-bold text-gray-900 mb-1">
                    <Shield className="h-5 w-5 text-primary mr-2" />
                    {isFr ? "Élagage" : "Tree Trimming"}
                  </div>
                </Link>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <Button asChild variant="destructive" className="w-full">
                  <Link to={getLocalizedPath('/emergency-services')}>{isFr ? "Urgence 24/7" : "24/7 Emergency"}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-8">{isFr ? "Villes Voisines Desservies" : "Nearby Cities We Serve"}</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to={getLocalizedPath('/saint-lazare')} className="px-6 py-2 rounded-full border border-gray-600 hover:bg-primary hover:border-primary transition-colors">Saint-Lazare</Link>
            <Link to={getLocalizedPath('/hudson')} className="px-6 py-2 rounded-full border border-gray-600 hover:bg-primary hover:border-primary transition-colors">Hudson</Link>
            <Link to={getLocalizedPath('/ile-perrot')} className="px-6 py-2 rounded-full border border-gray-600 hover:bg-primary hover:border-primary transition-colors">Île-Perrot</Link>
            <Link to={getLocalizedPath('/pincourt')} className="px-6 py-2 rounded-full border border-gray-600 hover:bg-primary hover:border-primary transition-colors">Pincourt</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default VaureuilPage;
