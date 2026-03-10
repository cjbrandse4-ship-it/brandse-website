
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, CheckCircle, Shield, TreePine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import LocalBusinessGeoSchema from '@/components/LocalBusinessGeoSchema.jsx';
import BreadcrumbSchema from '@/components/BreadcrumbSchema.jsx';
import Breadcrumbs from '@/components/Breadcrumbs.jsx';
import SEOHead from '@/components/SEOHead.jsx';
import { useLanguage } from '@/contexts/LanguageContext';

const DorvalPage = () => {
  const { t, getLocalizedPath, language } = useLanguage();
  const isFr = language === 'fr';
  const city = "Dorval";
  
  const loc = {
    metaTitle: isFr ? `Services d'Arbres à Dorval | Abattage et Élagage | Brandse Inc` : `Tree Services in Dorval | Tree Removal & Trimming | Brandse Inc`,
    metaDesc: isFr ? `Services d'arbres professionnels à Dorval. Abattage d'arbres, élagage et essouchage par des arboriculteurs certifiés. Urgence 24/7. Soumission gratuite.` : `Professional tree services in Dorval. Tree removal, trimming, and stump grinding by certified arborists. 24/7 emergency. Free quote.`,
    heroTitle: isFr ? `Services d'Arbres Professionnels à Dorval` : `Professional Tree Services in Dorval`,
    heroSubtitle: isFr ? `Vos experts locaux en entretien d'arbres desservant la communauté de Dorval avec un service professionnel et fiable.` : `Your local tree care experts serving the Dorval community with professional, reliable service.`,
  };
  const pageUrl = `https://servicedarbresbrandse.com${getLocalizedPath('/dorval')}`;

  return (
    <div className="overflow-x-hidden">
      <SEOHead 
        title={loc.metaTitle}
        description={loc.metaDesc}
        keywords={isFr ? `services arbres Dorval, abattage arbre Dorval, élagage Dorval, arboriculteur Dorval, essouchage Dorval` : `tree services Dorval, tree removal Dorval, tree trimming Dorval, arborist Dorval, stump grinding Dorval`}
        canonicalUrl={getLocalizedPath('/dorval')}
        ogUrl={getLocalizedPath('/dorval')}
      />
      
      <LocalBusinessGeoSchema 
        city="Dorval" 
        address="Dorval, QC" 
        serviceArea="Dorval" 
        description={loc.metaDesc} 
        url={pageUrl} 
      />

      <BreadcrumbSchema breadcrumbs={[
        { label: isFr ? 'Accueil' : 'Home', url: '/' },
        { label: isFr ? 'Services' : 'Services', url: '/services' },
        { label: city, url: '/services/dorval' }
      ]} />

      <Header />

      <section className="bg-primary text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{label: isFr ? 'Emplacements' : 'Locations', path: '/services'}, {label: city}]} />
          <div className="flex items-center justify-center mb-6 mt-4">
            <MapPin className="h-8 w-8 sm:h-10 sm:w-10 mr-3 text-secondary" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center">{loc.heroTitle}</h1>
          </div>
          <p className="text-lg sm:text-xl text-gray-200 text-center max-w-3xl mx-auto mb-10">{loc.heroSubtitle}</p>
          <div className="flex justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 min-h-[56px] shadow-xl">
              <Link to={getLocalizedPath('/contact')}>{isFr ? `Obtenir une soumission à Dorval` : `Get Your Free Dorval Quote`}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 prose prose-lg text-gray-600 max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{isFr ? `Expertise Arboricole à Dorval` : `Tree Care Expertise in Dorval`}</h2>
              <p>{isFr ? "Dorval est l'une des plus anciennes villes de l'Ouest de l'Île, caractérisée par ses arbres centenaires majestueux le long du lac Saint-Louis et dans ses quartiers historiques. L'entretien de ces arbres matures nécessite une expertise particulière pour préserver leur santé tout en assurant la sécurité des résidents. Nous offrons des services d'" : "Dorval is one of the oldest cities in the West Island, characterized by its majestic century-old trees along Lake Saint-Louis and in its historic neighborhoods. Maintaining these mature trees requires special expertise to preserve their health while ensuring resident safety. We offer expert "}
              <Link to={getLocalizedPath('/tree-removal')} className="text-primary font-semibold hover:underline">{isFr ? "abattage d'arbres" : "tree removal"}</Link>
              {isFr ? " et d'" : " and "}
              <Link to={getLocalizedPath('/tree-trimming')} className="text-primary font-semibold hover:underline">{isFr ? "élagage" : "tree trimming"}</Link>
              {isFr ? " adaptés à cette région." : " services tailored to this area."}</p>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">{isFr ? "Réglementations et Permis Locaux" : "Local Regulations & Permits"}</h3>
              <p>{isFr ? "La Cité de Dorval protège farouchement son patrimoine arboricole. Un certificat d'autorisation est requis pour l'abattage de tout arbre de plus de 10 cm de diamètre. Nous connaissons bien les exigences de la ville et pouvons vous fournir les rapports d'arboriculteur nécessaires pour accélérer votre demande." : "The City of Dorval fiercely protects its arboreal heritage. A certificate of authorization is required for the removal of any tree over 10 cm in diameter. We are familiar with the city's requirements and can provide the necessary arborist reports to expedite your application."}</p>
              <Link to={getLocalizedPath('/blog/signs-of-a-healthy-tree')} className="text-primary font-bold hover:underline min-h-[44px] inline-flex items-center">{isFr ? "Comment évaluer la santé de vos arbres" : "How to assess your trees' health"}</Link>

              <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">{isFr ? "Défis Spécifiques aux Quartiers" : "Neighborhood-Specific Challenges"}</h3>
              <p>{isFr ? "La proximité de l'aéroport et les vents forts du lac rendent les arbres de Dorval vulnérables aux intempéries. L'élagage préventif est crucial ici pour réduire la prise au vent des grands arbres et éviter les bris de branches lors des tempêtes. Nous offrons également un service d'" : "Proximity to the airport and strong lake winds make Dorval's trees vulnerable to severe weather. Preventive trimming is crucial here to reduce the wind resistance of large trees and avoid branch breakage during storms. We also offer a "}
              <Link to={getLocalizedPath('/stump-grinding')} className="text-primary font-semibold hover:underline">{isFr ? "essouchage" : "stump grinding"}</Link>
              {isFr ? " complet." : " service."}</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 h-fit sticky top-32 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{isFr ? "Nos Services Principaux" : "Our Core Services"}</h3>
              <div className="space-y-4">
                <Link to={getLocalizedPath('/tree-removal')} className="block bg-white p-5 rounded-xl shadow-sm hover:shadow-md hover:border-primary border border-transparent transition-all min-h-[44px]">
                  <div className="flex items-center font-bold text-gray-900 mb-1"><TreePine className="h-5 w-5 text-primary mr-3" />{isFr ? "Abattage d'arbres" : "Tree Removal"}</div>
                </Link>
                <Link to={getLocalizedPath('/stump-grinding')} className="block bg-white p-5 rounded-xl shadow-sm hover:shadow-md hover:border-primary border border-transparent transition-all min-h-[44px]">
                  <div className="flex items-center font-bold text-gray-900 mb-1"><CheckCircle className="h-5 w-5 text-primary mr-3" />{isFr ? "Essouchage" : "Stump Grinding"}</div>
                </Link>
                <Link to={getLocalizedPath('/tree-trimming')} className="block bg-white p-5 rounded-xl shadow-sm hover:shadow-md hover:border-primary border border-transparent transition-all min-h-[44px]">
                  <div className="flex items-center font-bold text-gray-900 mb-1"><Shield className="h-5 w-5 text-primary mr-3" />{isFr ? "Élagage" : "Tree Trimming"}</div>
                </Link>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <Button asChild variant="destructive" className="w-full min-h-[56px] text-lg font-bold">
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
            <Link to={getLocalizedPath('/dollard-des-ormeaux')} className="px-6 py-2 rounded-full border border-gray-600 hover:bg-primary hover:border-primary transition-colors">Dollard-des-Ormeaux</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DorvalPage;
