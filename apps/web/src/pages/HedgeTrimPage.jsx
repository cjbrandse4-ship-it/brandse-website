
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import Breadcrumbs from '@/components/Breadcrumbs.jsx';
import SEOHead from '@/components/SEOHead.jsx';
import ServiceSchema from '@/components/ServiceSchema.jsx';
import RelatedServices from '@/components/RelatedServices.jsx';
import { useLanguage } from '@/contexts/LanguageContext';

const HedgeTrimPage = () => {
  const { language, t, getLocalizedPath } = useLanguage();
  const isFr = language === 'fr';

  const pageTitle = isFr ? "Taille de Haies et Arbustes Ouest de l'Île de Montréal | Service d'Arbres Brandse" : "Hedge Trimming & Shrub Pruning West Island Montreal | Service d'Arbres Brandse";
  const pageDesc = isFr ? "Taille de haies professionnelle, taille d'arbustes et entretien paysager dans l'Ouest de l'Île. Gardez votre propriété impeccable. Estimations gratuites." : "Professional hedge trimming, shrub pruning & landscape maintenance in West Island. Keep your property looking pristine. Free estimates.";
  const keywords = isFr ? "taille haie Pointe-Claire, taille arbuste Ouest de l'Île, entretien haie Hudson, taille paysagère Montréal" : "hedge trimming Pointe-Claire, shrub pruning West Island, hedge maintenance Hudson, landscape trimming Montreal";
  const pageUrl = `https://servicedarbresbrandse.com${getLocalizedPath('/hedge-trimming')}`;
  const imageUrl = "https://horizons-cdn.hostinger.com/e1153006-2afb-49ee-92e0-b73c646df449/d20383f84c651212349ae241efe3b241.jpg";

  const features = [
    { title: isFr ? "Taille de précision" : "Precision Shaping", desc: isFr ? "Lignes droites et formes parfaites pour un look soigné." : "Straight lines and perfect shapes for a manicured look." },
    { title: isFr ? "Réduction de hauteur" : "Height Reduction", desc: isFr ? "Rabattage des haies trop hautes pour un meilleur contrôle." : "Cutting back overgrown hedges for better control." },
    { title: isFr ? "Contrôle de la densité" : "Density Improvement", desc: isFr ? "Taille stratégique pour encourager un feuillage plus épais." : "Strategic trimming to encourage thicker foliage." },
    { title: isFr ? "Entretien saisonnier" : "Seasonal Maintenance", desc: isFr ? "Programmes réguliers pour maintenir la forme toute l'année." : "Regular programs to maintain shape year-round." }
  ];

  const benefits = [
    { title: isFr ? "Apparence soignée" : "Neat Appearance", description: isFr ? "Améliore instantanément l'attrait visuel de votre propriété." : "Instantly improves the curb appeal of your property." },
    { title: isFr ? "Croissance saine" : "Healthy Growth", description: isFr ? "Élimine les parties mortes et stimule les nouvelles pousses." : "Removes dead parts and stimulates new growth." },
    { title: isFr ? "Intimité optimale" : "Enhanced Privacy", description: isFr ? "Maintient une barrière visuelle dense et uniforme." : "Maintains a dense visual barrier for your yard." },
    { title: isFr ? "Contrôle des parasites" : "Pest Control", description: isFr ? "Réduit les zones où les insectes nuisibles peuvent se cacher." : "Reduces areas where harmful insects can hide." }
  ];

  return (
    <>
      <SEOHead 
        title={pageTitle}
        description={pageDesc}
        keywords={keywords}
        canonicalUrl={getLocalizedPath('/hedge-trimming')}
      />
      
      <ServiceSchema 
        serviceName={isFr ? "Taille de Haies" : "Hedge Trimming"}
        serviceDescription={pageDesc}
        url={pageUrl}
      />

      <Header />

      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 flex items-center justify-center min-h-[60vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumbs items={[{label: isFr ? 'Services' : 'Services', path: '/services'}, {label: isFr ? "Taille de Haies" : "Hedge Trimming"}]} />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 mt-4 tracking-tight">
            {isFr ? "Taille de Haies Professionnelle" : "Professional Hedge Trimming"}
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            {isFr ? "Gardez votre aménagement paysager impeccable avec nos services de taille de précision." : "Keep your landscaping looking pristine with our precision trimming services."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-secondary text-white">
              <Link to={getLocalizedPath('/contact')}>{t('common.getFreeQuote')}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-gray-900">
              <a href="tel:4383655410">
                <Phone className="mr-2 h-5 w-5" />
                (438) 365-5410
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {isFr ? "L'Expertise pour des Haies Parfaites" : "Expertise for Perfect Hedges"}
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {isFr 
                  ? "Une haie bien entretenue est la signature d'une belle propriété. Nos experts utilisent des équipements professionnels bien aiguisés pour garantir des coupes nettes qui n'endommagent pas le feuillage. Que ce soit pour des cèdres, des thuyas ou des arbustes décoratifs, nous maîtrisons les techniques appropriées."
                  : "A well-maintained hedge is the signature of a beautiful property. Our experts use sharp, professional equipment to ensure clean cuts that don't damage the foliage. Whether it's cedars, arborvitae, or decorative shrubs, we master the proper techniques."}
              </p>
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <Shield className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button asChild className="bg-gray-900 hover:bg-gray-800 text-white">
                <Link to={getLocalizedPath('/contact')} className="flex items-center">
                  {isFr ? "Réserver un entretien" : "Book Maintenance"} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl transform translate-x-4 translate-y-4"></div>
              <img 
                src={imageUrl} 
                alt="Professional hedge trimming and shaping in residential yard"
                loading="lazy"
                className="relative rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {isFr ? "Les Bienfaits d'une Taille Régulière" : "Benefits of Regular Trimming"}
            </h2>
            <p className="text-lg text-gray-600">
              {isFr ? "Ne laissez pas vos haies devenir hors de contrôle. L'entretien régulier est la clé." : "Don't let your hedges get out of control. Regular maintenance is key."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices currentServiceId="hedge-trimming" />

      <Footer />
    </>
  );
};

export default HedgeTrimPage;
