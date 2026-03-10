
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

const SennevillePage = () => {
  const { t, getLocalizedPath, language } = useLanguage();
  const isFr = language === 'fr';
  const city = "Senneville";
  
  const replaceCity = (str) => str.replace(/{city}/g, city);
  const loc = {
    metaTitle: isFr ? `Services d'Arbres à ${city} | Service d'Arbres Brandse Inc` : `Tree Services in ${city} | Service d'Arbres Brandse Inc`,
    metaDesc: isFr ? `Services d'arbres professionnels à Senneville. Abattage, élagage et essouchage par des arboriculteurs certifiés. Urgence 24/7. Soumission gratuite.` : `Professional tree services in Senneville. Tree removal, trimming, and stump grinding by certified arborists. 24/7 emergency. Free quote.`,
    heroTitle: replaceCity(t('locationTemplate.heroTitle')),
    heroSubtitle: replaceCity(t('locationTemplate.heroSubtitle')),
  };
  const pageUrl = `https://servicedarbresbrandse.com${getLocalizedPath('/senneville')}`;

  return (
    <>
      <SEOHead 
        title={loc.metaTitle}
        description={loc.metaDesc}
        keywords={isFr ? `services arbres ${city}, abattage arbre ${city}, élagage ${city}, arboriculteur ${city}` : `tree services ${city}, tree removal ${city}, tree trimming ${city}, arborist ${city}`}
        canonicalUrl={getLocalizedPath('/senneville')}
        ogUrl={getLocalizedPath('/senneville')}
      />
      
      <LocalBusinessGeoSchema 
        city="Senneville" 
        address="Senneville, QC" 
        serviceArea="Senneville" 
        description={loc.metaDesc} 
        url={pageUrl} 
      />

      <BreadcrumbSchema breadcrumbs={[
        { label: isFr ? 'Accueil' : 'Home', url: '/' },
        { label: isFr ? 'Services' : 'Services', url: '/services' },
        { label: city, url: '/services/senneville' }
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
                  ? "Senneville est un joyau de l'Ouest de l'Île, reconnu pour ses vastes domaines, son parc agricole et ses arbres patrimoniaux. La préservation de cette forêt urbaine exceptionnelle est une priorité. Nous offrons des services d'arboriculture haut de gamme adaptés aux grandes propriétés et aux arbres centenaires." 
                  : "Senneville is a jewel of the West Island, known for its vast estates, agricultural park, and heritage trees. Preserving this exceptional urban forest is a priority. We offer high-end arboriculture services tailored to large properties and century-old trees."}
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                {isFr ? "Réglementations et Permis" : "Regulations & Permits"}
              </h3>
              <p>
                {isFr 
                  ? "Le village de Senneville possède l'une des réglementations les plus strictes en matière de protection des arbres. L'abattage est considéré comme un dernier recours absolu. Un permis est obligatoire et nécessite souvent une justification détaillée par un arboriculteur certifié. Nous vous accompagnons dans ce processus rigoureux." 
                  : "The village of Senneville has some of the strictest tree protection regulations. Removal is considered an absolute last resort. A permit is mandatory and often requires detailed justification by a certified arborist. We guide you through this rigorous process."}
              </p>
              <Link to={getLocalizedPath('/blog/when-to-trim-trees')} className="text-primary font-semibold hover:underline">
                {isFr ? "Lisez notre guide sur l'élagage de préservation" : "Read our guide on preservation pruning"}
              </Link>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                {isFr ? "Défis Spécifiques" : "Specific Challenges"}
              </h3>
              <p>
                {isFr 
                  ? "L'entretien des arbres matures sur de grands domaines nécessite un équipement spécialisé pour atteindre les hautes cimes sans endommager les pelouses immaculées. Nous utilisons des techniques d'ascension sur corde et des nacelles légères pour minimiser notre impact sur votre terrain." 
                  : "Maintaining mature trees on large estates requires specialized equipment to reach high canopies without damaging pristine lawns. We use rope climbing techniques and lightweight bucket trucks to minimize our impact on your property."}
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
            <Link to={getLocalizedPath('/baie-d-urfe')} className="px-6 py-2 rounded-full border border-gray-600 hover:bg-primary hover:border-primary transition-colors">Baie-D'Urfé</Link>
            <Link to={getLocalizedPath('/sainte-anne-de-bellevue')} className="px-6 py-2 rounded-full border border-gray-600 hover:bg-primary hover:border-primary transition-colors">Sainte-Anne-de-Bellevue</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default SennevillePage;
