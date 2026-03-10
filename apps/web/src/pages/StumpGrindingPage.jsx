
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone, AlertTriangle, BookOpen, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import Breadcrumbs from '@/components/Breadcrumbs.jsx';
import LocalBusinessSchema from '@/components/LocalBusinessSchema.jsx';
import ServiceSchema from '@/components/ServiceSchema.jsx';
import BreadcrumbSchema from '@/components/BreadcrumbSchema.jsx';
import SEOHead from '@/components/SEOHead.jsx';
import RelatedServices from '@/components/RelatedServices.jsx';
import { useLanguage } from '@/contexts/LanguageContext';

const StumpGrindingPage = () => {
  const { language, t, getLocalizedPath } = useLanguage();
  const isFr = language === 'fr';

  const pageTitle = isFr ? "Services d'Essouchage Ouest de l'Île de Montréal | Service d'Arbres Brandse" : "Stump Grinding Services West Island Montreal | Service d'Arbres Brandse";
  const pageDesc = isFr ? "Essouchage professionnel à Pointe-Claire, Hudson, Kirkland et l'Ouest de l'Île. Enlèvement complet des souches, nettoyage du site, prix compétitifs. Estimations gratuites." : "Professional stump grinding in Pointe-Claire, Hudson, Kirkland & West Island. Complete stump removal, site cleanup, competitive pricing. Free estimates.";
  const keywords = isFr ? "essouchage Pointe-Claire, enlèvement souche Ouest de l'Île, essouchage Hudson, enlèvement souche arbre Montréal" : "stump grinding Pointe-Claire, stump removal West Island, stump grinding Hudson, tree stump removal Montreal";
  const pageUrl = `https://servicedarbresbrandse.com${getLocalizedPath('/stump-grinding')}`;
  const imageUrl = "https://images.unsplash.com/photo-1631784805829-e160ec74dad8";

  return (
    <>
      <SEOHead 
        title={pageTitle}
        description={pageDesc}
        keywords={keywords}
        canonicalUrl={getLocalizedPath('/stump-grinding')}
      />
      
      <LocalBusinessSchema 
        description={pageDesc} 
        url={pageUrl} 
      />
      
      <ServiceSchema 
        serviceName={isFr ? "Essouchage" : "Stump Grinding"}
        serviceDescription={isFr ? "Services professionnels d'essouchage pour éliminer complètement les souches d'arbres sous le niveau du sol." : "Professional stump grinding services to completely remove tree stumps below ground level."}
        url={pageUrl}
        availability="Monday-Friday 8am-5pm, Saturday 9am-3pm"
      />

      <BreadcrumbSchema breadcrumbs={[
        { label: isFr ? 'Accueil' : 'Home', url: '/' },
        { label: isFr ? 'Services' : 'Services', url: '/services' },
        { label: isFr ? 'Essouchage' : 'Stump Grinding', url: '/services/stump-grinding' }
      ]} />

      <Header />

      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 flex items-center justify-center min-h-[60vh]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}>
          <div className="absolute inset-0 bg-gray-900/80"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumbs items={[{label: isFr ? 'Services' : 'Services', path: '/services'}, {label: isFr ? "Essouchage" : "Stump Grinding"}]} />
          <div className="inline-flex items-center bg-primary/20 text-primary-foreground border border-primary/50 px-4 py-1.5 rounded-full mb-6 mt-4 font-semibold text-sm uppercase tracking-wider backdrop-blur-sm">
            <Leaf className="w-4 h-4 mr-2" />
            {isFr ? "Nettoyage de Terrain" : "Property Cleanup"}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            {isFr ? "Services d'Essouchage" : "Professional Stump Grinding"}
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            {isFr ? "Ne laissez pas une vieille souche gâcher votre aménagement paysager. Nous broyons les souches sous le niveau du sol pour un terrain impeccable." : "Don't let an old stump ruin your landscaping. We grind stumps below ground level for a flawless yard."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-secondary text-white text-lg px-8 py-6">
              <Link to={getLocalizedPath('/contact')}>{t('common.getFreeQuote')}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6">
              <a href="tel:4383655410"><Phone className="mr-2 h-5 w-5" />(438) 365-5410</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {isFr ? "Pourquoi l'essouchage est-il crucial ?" : "Why is Stump Grinding Crucial?"}
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  {isFr ? "Après un " : "After a "}
                  <Link to={getLocalizedPath('/tree-removal')} className="text-primary hover:underline">{isFr ? "abattage d'arbre" : "tree removal"}</Link>
                  {isFr ? ", la souche restante est souvent négligée. Cependant, laisser une souche pourrir naturellement peut prendre jusqu'à 10 ans et causer de nombreux problèmes." : ", the remaining stump is often overlooked. However, leaving a stump to rot naturally can take up to 10 years and cause numerous problems."}
                </p>
                <p>
                  {isFr ? "Les risques de laisser une souche :" : "Risks of leaving a stump:"}
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start"><AlertTriangle className="h-5 w-5 text-amber-500 mr-2 mt-1 flex-shrink-0" /><span><strong>{isFr ? "Parasites :" : "Pests:"}</strong> {isFr ? "Le bois pourri attire les termites, fourmis charpentières et autres insectes qui peuvent migrer vers votre maison." : "Rotting wood attracts termites, carpenter ants, and other insects that can migrate to your home."}</span></li>
                  <li className="flex items-start"><AlertTriangle className="h-5 w-5 text-amber-500 mr-2 mt-1 flex-shrink-0" /><span><strong>{isFr ? "Sécurité :" : "Safety:"}</strong> {isFr ? "Risque de trébuchement dangereux pour les enfants et lors de la tonte de la pelouse." : "Dangerous tripping hazard for children and while mowing the lawn."}</span></li>
                  <li className="flex items-start"><AlertTriangle className="h-5 w-5 text-amber-500 mr-2 mt-1 flex-shrink-0" /><span><strong>{isFr ? "Repousses :" : "Regrowth:"}</strong> {isFr ? "Les racines vivantes peuvent créer de nouvelles pousses indésirables." : "Living roots can create unwanted new sprouts."}</span></li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{isFr ? "Notre Équipement et Processus" : "Our Equipment & Process"}</h3>
              <p className="text-gray-600 mb-6">
                {isFr ? "Nous utilisons des essoucheuses professionnelles capables de broyer le bois jusqu'à 12 pouces sous la surface. Cela détruit le système racinaire central et permet de replanter ou de semer du gazon." : "We use professional stump grinders capable of grinding wood up to 12 inches below the surface. This destroys the central root system and allows for replanting or seeding grass."}
              </p>
              <div className="space-y-4">
                <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                  <CheckCircle className="h-6 w-6 text-primary mr-3" />
                  <span className="font-medium text-gray-900">{isFr ? "Vérification des conduites souterraines (Info-Excavation)" : "Underground utility check (Info-Excavation)"}</span>
                </div>
                <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                  <CheckCircle className="h-6 w-6 text-primary mr-3" />
                  <span className="font-medium text-gray-900">{isFr ? "Broyage de la souche et des racines de surface" : "Grinding of stump and surface roots"}</span>
                </div>
                <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                  <CheckCircle className="h-6 w-6 text-primary mr-3" />
                  <span className="font-medium text-gray-900">{isFr ? "Remplissage du trou avec les copeaux ou de la terre" : "Filling the hole with woodchips or topsoil"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">{isFr ? "Combien coûte l'essouchage ?" : "How Much Does Stump Grinding Cost?"}</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {isFr ? "Le prix est généralement calculé en fonction du diamètre de la souche (mesuré au niveau du sol). Les prix varient de 150$ pour une petite souche à 600$+ pour les souches massives ou difficiles d'accès." : "Pricing is generally calculated based on the diameter of the stump (measured at ground level). Prices range from $150 for a small stump to $600+ for massive or hard-to-reach stumps."}
          </p>
          <Link to={getLocalizedPath('/blog/stump-grinding-vs-removal')} className="inline-flex items-center text-primary hover:text-white transition-colors font-semibold text-lg">
            <BookOpen className="h-6 w-6 mr-2" />
            {isFr ? "Lire notre article : Essouchage vs Enlèvement" : "Read our article: Stump Grinding vs Removal"}
          </Link>
        </div>
      </section>

      <RelatedServices currentServiceId="stump-grinding" />

      <Footer />
    </>
  );
};

export default StumpGrindingPage;
