
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

const KirklandPage = () => {
  const { t, getLocalizedPath, language } = useLanguage();
  const isFr = language === 'fr';
  const city = "Kirkland";
  
  const loc = {
    metaTitle: isFr ? `Services d'Arbres à Kirkland | Abattage et Élagage | Brandse Inc` : `Tree Services in Kirkland | Tree Removal & Trimming | Brandse Inc`,
    metaDesc: isFr ? `Services d'arbres professionnels à Kirkland. Abattage d'arbres, élagage et essouchage par des arboriculteurs certifiés. Urgence 24/7. Soumission gratuite.` : `Professional tree services in Kirkland. Tree removal, trimming, and stump grinding by certified arborists. 24/7 emergency. Free quote.`,
    heroTitle: isFr ? `Services d'Arbres Professionnels à Kirkland` : `Professional Tree Services in Kirkland`,
    heroSubtitle: isFr ? `Vos experts locaux en entretien d'arbres desservant la communauté de Kirkland avec un service professionnel et fiable.` : `Your local tree care experts serving the Kirkland community with professional, reliable service.`,
  };
  const pageUrl = `https://servicedarbresbrandse.com${getLocalizedPath('/kirkland')}`;

  return (
    <div className="overflow-x-hidden">
      <SEOHead 
        title={loc.metaTitle}
        description={loc.metaDesc}
        keywords={isFr ? `services arbres Kirkland, abattage arbre Kirkland, élagage Kirkland, arboriculteur Kirkland, essouchage Kirkland` : `tree services Kirkland, tree removal Kirkland, tree trimming Kirkland, arborist Kirkland, stump grinding Kirkland`}
        canonicalUrl={getLocalizedPath('/kirkland')}
        ogUrl={getLocalizedPath('/kirkland')}
      />
      
      <LocalBusinessGeoSchema 
        city="Kirkland" 
        address="Kirkland, QC" 
        serviceArea="Kirkland" 
        description={loc.metaDesc} 
        url={pageUrl} 
      />

      <BreadcrumbSchema breadcrumbs={[
        { label: isFr ? 'Accueil' : 'Home', url: '/' },
        { label: isFr ? 'Services' : 'Services', url: '/services' },
        { label: city, url: '/services/kirkland' }
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
              <Link to={getLocalizedPath('/contact')}>{isFr ? `Obtenir une soumission à Kirkland` : `Get Your Free Kirkland Quote`}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 prose prose-lg text-gray-600 max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{isFr ? `Expertise Arboricole à Kirkland` : `Tree Care Expertise in Kirkland`}</h2>
              <p>{isFr ? "Kirkland est une banlieue résidentielle paisible reconnue pour ses terrains bien entretenus et ses rues bordées d'arbres. Les érables de Norvège, les frênes et les épinettes sont très communs. L'entretien régulier est essentiel pour maintenir la valeur des propriétés et l'esthétique des quartiers. Nous offrons des services d'" : "Kirkland is a peaceful residential suburb known for its well-maintained lots and tree-lined streets. Norway maples, ash trees, and spruces are very common. Regular maintenance is essential to maintain property values and neighborhood aesthetics. We offer expert "}
              <Link to={getLocalizedPath('/tree-removal')} className="text-primary font-semibold hover:underline">{isFr ? "abattage d'arbres" : "tree removal"}</Link>
              {isFr ? " et d'" : " and "}
              <Link to={getLocalizedPath('/tree-trimming')} className="text-primary font-semibold hover:underline">{isFr ? "élagage" : "tree trimming"}</Link>
              {isFr ? " adaptés à cette région." : " services tailored to this area."}</p>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">{isFr ? "Réglementations et Permis Locaux" : "Local Regulations & Permits"}</h3>
              <p>{isFr ? "La ville de Kirkland exige un permis pour l'abattage de tout arbre ayant un diamètre de 10 cm ou plus. La ville est très stricte sur la préservation de sa canopée et exige souvent la plantation d'un arbre de remplacement. Nous vous fournissons les rapports d'arboriculteur nécessaires pour vos demandes de permis." : "The city of Kirkland requires a permit for the removal of any tree with a diameter of 10 cm or more. The city is very strict about preserving its canopy and often requires planting a replacement tree. We provide the necessary arborist reports for your permit applications."}</p>
              <Link to={getLocalizedPath('/faq')} className="text-primary font-bold hover:underline min-h-[44px] inline-flex items-center">{isFr ? "Consultez notre FAQ sur les permis" : "Check our FAQ on permits"}</Link>

              <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">{isFr ? "Défis Spécifiques aux Quartiers" : "Neighborhood-Specific Challenges"}</h3>
              <p>{isFr ? "L'agrile du frêne a forcé l'abattage de nombreux arbres à Kirkland. De plus, les grands érables plantés près des maisons dans les années 70 et 80 nécessitent maintenant un élagage de dégagement pour éviter d'endommager les toitures et les gouttières. Nous offrons également un service d'" : "The Emerald Ash Borer has forced the removal of many trees in Kirkland. Additionally, large maples planted near homes in the 70s and 80s now require clearance pruning to avoid damaging roofs and gutters. We also offer a "}
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
            <Link to={getLocalizedPath('/beaconsfield')} className="px-6 py-2 rounded-full border border-gray-600 hover:bg-primary hover:border-primary transition-colors">Beaconsfield</Link>
            <Link to={getLocalizedPath('/dollard-des-ormeaux')} className="px-6 py-2 rounded-full border border-gray-600 hover:bg-primary hover:border-primary transition-colors">Dollard-des-ormeaux</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KirklandPage;
