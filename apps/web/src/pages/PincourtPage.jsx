
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

const PincourtPage = () => {
  const { t, getLocalizedPath, language } = useLanguage();
  const isFr = language === 'fr';
  const city = "Pincourt";
  
  const replaceCity = (str) => str.replace(/{city}/g, city);
  const loc = {
    metaTitle: isFr ? `Services d'Arbres à ${city} | Service d'Arbres Brandse Inc` : `Tree Services in ${city} | Service d'Arbres Brandse Inc`,
    metaDesc: isFr ? `Services d'arbres professionnels à Pincourt. Abattage, élagage et essouchage par des arboriculteurs certifiés. Urgence 24/7. Soumission gratuite.` : `Professional tree services in Pincourt. Tree removal, trimming, and stump grinding by certified arborists. 24/7 emergency. Free quote.`,
    heroTitle: replaceCity(t('locationTemplate.heroTitle')),
    heroSubtitle: replaceCity(t('locationTemplate.heroSubtitle')),
  };
  const pageUrl = `https://servicedarbresbrandse.com${getLocalizedPath('/pincourt')}`;

  return (
    <>
      <SEOHead 
        title={loc.metaTitle}
        description={loc.metaDesc}
        keywords={isFr ? `services arbres ${city}, abattage arbre ${city}, élagage ${city}, arboriculteur ${city}` : `tree services ${city}, tree removal ${city}, tree trimming ${city}, arborist ${city}`}
        canonicalUrl={getLocalizedPath('/pincourt')}
        ogUrl={getLocalizedPath('/pincourt')}
      />
      
      <LocalBusinessGeoSchema 
        city="Pincourt" 
        address="Pincourt, QC" 
        serviceArea="Pincourt" 
        description={loc.metaDesc} 
        url={pageUrl} 
      />

      <BreadcrumbSchema breadcrumbs={[
        { label: isFr ? 'Accueil' : 'Home', url: '/' },
        { label: isFr ? 'Services' : 'Services', url: '/services' },
        { label: city, url: '/services/pincourt' }
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
                  ? "Pincourt est une municipalité densément peuplée où les arbres jouent un rôle crucial pour l'intimité et la qualité de vie. Les terrains plus petits signifient que les arbres sont souvent très près des maisons, des clôtures et des piscines, ce qui exige une grande précision lors des travaux d'arboriculture." 
                  : "Pincourt is a densely populated municipality where trees play a crucial role in privacy and quality of life. Smaller lots mean trees are often very close to homes, fences, and pools, requiring great precision during arboriculture work."}
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                {isFr ? "Réglementations et Permis" : "Regulations & Permits"}
              </h3>
              <p>
                {isFr 
                  ? "La ville de Pincourt exige un permis pour l'abattage d'arbres. La ville encourage l'entretien préventif pour éviter les abattages inutiles. Nous pouvons évaluer la santé de vos arbres et vous conseiller sur les meilleures options, qu'il s'agisse d'élagage ou d'abattage si l'arbre est dangereux." 
                  : "The city of Pincourt requires a permit for tree removal. The city encourages preventive maintenance to avoid unnecessary removals. We can assess the health of your trees and advise you on the best options, whether it's trimming or removal if the tree is hazardous."}
              </p>
              <Link to={getLocalizedPath('/blog/signs-of-a-healthy-tree')} className="text-primary font-semibold hover:underline">
                {isFr ? "Signes qu'un arbre est dangereux" : "Signs that a tree is hazardous"}
              </Link>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                {isFr ? "Défis Spécifiques" : "Specific Challenges"}
              </h3>
              <p>
                {isFr 
                  ? "L'espace restreint entre les propriétés à Pincourt rend l'abattage d'arbres matures complexe. Nous utilisons des techniques de rétention par cordage pour descendre chaque branche en toute sécurité, garantissant qu'aucun dommage n'est causé à votre propriété ou à celle de vos voisins." 
                  : "The restricted space between properties in Pincourt makes removing mature trees complex. We use rope retention techniques to lower each branch safely, ensuring no damage is caused to your property or your neighbors'."}
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 h-fit sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{isFr ? "Nos Services Principaux" : "Our Core Services"}</h3>
              <div className="space-y-4">
                <Link to={getLocalizedPath('/tree-removal')} className="block bg-white p-4 rounded-lg shadow-sm hover:shadow-md hover:border-primary border border-transparent transition-all">
                  <div className="flexitems-center font-bold text-gray-900 mb-1">
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
            <Link to={getLocalizedPath('/ile-perrot')} className="px-6 py-2 rounded-full border border-gray-600 hover:bg-primary hover:border-primary transition-colors">L'Île-Perrot</Link>
            <Link to={getLocalizedPath('/vaudreuil')} className="px-6 py-2 rounded-full border border-gray-600 hover:bg-primary hover:border-primary transition-colors">Vaudreuil</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PincourtPage;
