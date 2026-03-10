
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, CheckCircle, Shield, TreePine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import Breadcrumbs from '@/components/Breadcrumbs.jsx';
import LocalBusinessGeoSchema from '@/components/LocalBusinessGeoSchema.jsx';
import BreadcrumbSchema from '@/components/BreadcrumbSchema.jsx';
import SEOHead from '@/components/SEOHead.jsx';
import { useLanguage } from '@/contexts/LanguageContext';

const PointeClairePage = () => {
  const { t, getLocalizedPath, language } = useLanguage();
  const isFr = language === 'fr';
  const city = "Pointe-Claire";
  
  const loc = {
    metaTitle: isFr ? `Services d'Arbres à Pointe-Claire | Abattage et Élagage | Brandse Inc` : `Tree Services in Pointe-Claire | Tree Removal & Trimming | Brandse Inc`,
    metaDesc: isFr ? `Services d'arbres professionnels à Pointe-Claire. Abattage d'arbres, élagage et essouchage par des arboriculteurs certifiés. Urgence 24/7. Soumission gratuite.` : `Professional tree services in Pointe-Claire. Tree removal, trimming, and stump grinding by certified arborists. 24/7 emergency. Free quote.`,
    heroTitle: isFr ? `Services d'Arbres Professionnels à Pointe-Claire` : `Professional Tree Services in Pointe-Claire`,
    heroSubtitle: isFr ? `Vos experts locaux en entretien d'arbres desservant la communauté de Pointe-Claire avec un service professionnel et fiable.` : `Your local tree care experts serving the Pointe-Claire community with professional, reliable service.`,
  };
  const pageUrl = `https://servicedarbresbrandse.com${getLocalizedPath('/pointe-claire')}`;

  return (
    <div className="overflow-x-hidden">
      <SEOHead 
        title={loc.metaTitle}
        description={loc.metaDesc}
        keywords={isFr ? `services arbres Pointe-Claire, abattage arbre Pointe-Claire, élagage Pointe-Claire, arboriculteur Pointe-Claire, essouchage Pointe-Claire` : `tree services Pointe-Claire, tree removal Pointe-Claire, tree trimming Pointe-Claire, arborist Pointe-Claire, stump grinding Pointe-Claire`}
        canonicalUrl={getLocalizedPath('/pointe-claire')}
        ogUrl={getLocalizedPath('/pointe-claire')}
      />
      
      <LocalBusinessGeoSchema 
        city="Pointe-Claire" 
        address="Pointe-Claire, QC" 
        serviceArea="Pointe-Claire" 
        description={loc.metaDesc} 
        url={pageUrl} 
      />

      <BreadcrumbSchema breadcrumbs={[
        { label: isFr ? 'Accueil' : 'Home', url: '/' },
        { label: isFr ? 'Services' : 'Services', url: '/services' },
        { label: city, url: '/services/pointe-claire' }
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
              <Link to={getLocalizedPath('/contact')}>{isFr ? `Obtenir une soumission à Pointe-Claire` : `Get Your Free Pointe-Claire Quote`}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 prose prose-lg text-gray-600 max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{isFr ? `Expertise Arboricole à Pointe-Claire` : `Tree Care Expertise in Pointe-Claire`}</h2>
              <p>{isFr ? "Pointe-Claire est reconnue pour son magnifique village historique, ses propriétés riveraines le long du lac Saint-Louis et sa canopée mature. Les grands chênes, érables et frênes centenaires qui bordent des rues comme le chemin du Bord-du-Lac nécessitent des soins spécialisés pour assurer leur longévité et la sécurité des résidents. Notre équipe d'arboriculteurs certifiés offre des services complets d'" : "Pointe-Claire is renowned for its beautiful historic village, waterfront properties along Lake Saint-Louis, and mature canopy. The large century-old oaks, maples, and ash trees lining streets like Lakeshore Road require specialized care to ensure their longevity and resident safety. Our team of certified arborists offers comprehensive "}
              <Link to={getLocalizedPath('/tree-removal')} className="text-primary font-semibold hover:underline">{isFr ? "abattage d'arbres" : "tree removal"}</Link>
              {isFr ? " et d'" : " and "}
              <Link to={getLocalizedPath('/tree-trimming')} className="text-primary font-semibold hover:underline">{isFr ? "élagage" : "tree trimming"}</Link>
              {isFr ? " adaptés à cette région unique." : " services tailored to this unique area."}</p>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">{isFr ? "Réglementations et Permis Locaux" : "Local Regulations & Permits"}</h3>
              <p>{isFr ? "La ville de Pointe-Claire possède des règlements stricts concernant la protection des arbres. Un certificat d'autorisation est obligatoire pour l'abattage de tout arbre de plus de 10 cm de diamètre. Notre équipe vous accompagne dans ces démarches administratives pour assurer une intervention conforme. Nous fournissons les rapports d'arboriculteur nécessaires pour justifier l'abattage d'arbres malades ou dangereux." : "The city of Pointe-Claire has strict bylaws regarding tree protection. A certificate of authorization is mandatory for the removal of any tree over 10 cm in diameter. Our team assists you with these administrative steps to ensure compliant intervention. We provide the necessary arborist reports to justify the removal of diseased or hazardous trees."}</p>
              <Link to={getLocalizedPath('/blog/tree-removal-cost-guide')} className="text-primary font-bold hover:underline min-h-[44px] inline-flex items-center">{isFr ? "En savoir plus sur les coûts et permis d'abattage" : "Learn more about tree removal costs and permits"}</Link>

              <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">{isFr ? "Défis Spécifiques aux Quartiers" : "Neighborhood-Specific Challenges"}</h3>
              <p>{isFr ? "Dans les quartiers denses au sud de l'autoroute 20, l'espace restreint entre les maisons rend l'abattage complexe. Nous utilisons des techniques de gréage avancées pour démonter les arbres en toute sécurité sans endommager les structures adjacentes ou les lignes électriques d'Hydro-Québec. Après l'abattage, notre service d'" : "In the dense neighborhoods south of Highway 20, tight spaces between homes make tree removal complex. We use advanced rigging techniques to safely dismantle trees without damaging adjacent structures or Hydro-Quebec power lines. After removal, our "}
              <Link to={getLocalizedPath('/stump-grinding')} className="text-primary font-semibold hover:underline">{isFr ? "essouchage" : "stump grinding"}</Link>
              {isFr ? " permet de préparer votre terrain pour de nouveaux aménagements." : " service prepares your yard for new landscaping."}</p>
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
            <Link to={getLocalizedPath('/dorval')} className="px-6 py-2 rounded-full border border-gray-600 hover:bg-primary hover:border-primary transition-colors">Dorval</Link>
            <Link to={getLocalizedPath('/beaconsfield')} className="px-6 py-2 rounded-full border border-gray-600 hover:bg-primary hover:border-primary transition-colors">Beaconsfield</Link>
            <Link to={getLocalizedPath('/kirkland')} className="px-6 py-2 rounded-full border border-gray-600 hover:bg-primary hover:border-primary transition-colors">Kirkland</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PointeClairePage;
