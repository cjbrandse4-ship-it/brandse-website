
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

const DollardDesOrmeauxPage = () => {
  const { t, getLocalizedPath, language } = useLanguage();
  const isFr = language === 'fr';
  const city = "Dollard-des-Ormeaux";
  
  const replaceCity = (str) => str.replace(/{city}/g, city);
  const loc = {
    metaTitle: isFr ? `Services d'Arbres à ${city} | Service d'Arbres Brandse Inc` : `Tree Services in ${city} | Service d'Arbres Brandse Inc`,
    metaDesc: isFr ? `Services d'arbres professionnels à Dollard-des-Ormeaux. Abattage, élagage et essouchage par des arboriculteurs certifiés. Urgence 24/7. Soumission gratuite.` : `Professional tree services in Dollard-des-Ormeaux. Tree removal, trimming, and stump grinding by certified arborists. 24/7 emergency. Free quote.`,
    heroTitle: replaceCity(t('locationTemplate.heroTitle')),
    heroSubtitle: replaceCity(t('locationTemplate.heroSubtitle')),
  };
  const pageUrl = `https://servicedarbresbrandse.com${getLocalizedPath('/dollard-des-ormeaux')}`;

  return (
    <>
      <SEOHead 
        title={loc.metaTitle}
        description={loc.metaDesc}
        keywords={isFr ? `services arbres ${city}, abattage arbre ${city}, élagage ${city}, arboriculteur ${city}` : `tree services ${city}, tree removal ${city}, tree trimming ${city}, arborist ${city}`}
        canonicalUrl={getLocalizedPath('/dollard-des-ormeaux')}
        ogUrl={getLocalizedPath('/dollard-des-ormeaux')}
      />
      
      <LocalBusinessGeoSchema 
        city="Dollard-des-Ormeaux" 
        address="Dollard-des-Ormeaux, QC" 
        serviceArea="Dollard-des-Ormeaux" 
        description={loc.metaDesc} 
        url={pageUrl} 
      />

      <BreadcrumbSchema breadcrumbs={[
        { label: isFr ? 'Accueil' : 'Home', url: '/' },
        { label: isFr ? 'Services' : 'Services', url: '/services' },
        { label: city, url: '/services/dollard-des-ormeaux' }
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
              <Link to={getLocalizedPath('/contact')}>{isFr ? `Obtenir une soumission à DDO` : `Get Your Free DDO Quote`}</Link>
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
                  ? "Dollard-des-Ormeaux (DDO) est une grande banlieue avec une forte densité résidentielle et de magnifiques parcs comme le parc du Centenaire. Les propriétés ont souvent des arbres matures plantés près des maisons, des piscines et des clôtures, ce qui nécessite une grande précision lors des travaux d'abattage ou d'élagage." 
                  : "Dollard-des-Ormeaux (DDO) is a large suburb with high residential density and beautiful parks like Centennial Park. Properties often have mature trees planted near homes, pools, and fences, requiring great precision during removal or trimming work."}
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                {isFr ? "Réglementations et Permis" : "Regulations & Permits"}
              </h3>
              <p>
                {isFr 
                  ? "À DDO, un permis est requis pour abattre tout arbre de plus de 10 cm de diamètre. La ville exige souvent un rapport d'arboriculteur justifiant l'abattage (maladie, danger, dommages aux fondations). Nous fournissons ces rapports et vous aidons à obtenir votre permis rapidement." 
                  : "In DDO, a permit is required to remove any tree over 10 cm in diameter. The city often requires an arborist report justifying the removal (disease, danger, foundation damage). We provide these reports and help you get your permit quickly."}
              </p>
              <Link to={getLocalizedPath('/blog/tree-removal-cost-guide')} className="text-primary font-semibold hover:underline">
                {isFr ? "Guide des coûts d'abattage" : "Tree removal cost guide"}
              </Link>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                {isFr ? "Défis Spécifiques" : "Specific Challenges"}
              </h3>
              <p>
                {isFr 
                  ? "L'accès aux cours arrière à DDO est souvent limité par des clôtures et des piscines. Nous utilisons des équipements compacts pour l'essouchage et des techniques de rétention par cordage pour descendre les branches en toute sécurité sans endommager vos aménagements paysagers." 
                  : "Backyard access in DDO is often limited by fences and pools. We use compact equipment for stump grinding and rope retention techniques to lower branches safely without damaging your landscaping."}
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
            <Link to={getLocalizedPath('/pointe-claire')} className="px-6 py-2 rounded-full border border-gray-600 hover:bg-primary hover:border-primary transition-colors">Pointe-Claire</Link>
            <Link to={getLocalizedPath('/kirkland')} className="px-6 py-2 rounded-full border border-gray-600 hover:bg-primary hover:border-primary transition-colors">Kirkland</Link>
            <Link to={getLocalizedPath('/dorval')} className="px-6 py-2 rounded-full border border-gray-600 hover:bg-primary hover:border-primary transition-colors">Dorval</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default DollardDesOrmeauxPage;
