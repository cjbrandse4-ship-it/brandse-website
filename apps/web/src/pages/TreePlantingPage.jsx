
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import Breadcrumbs from '@/components/Breadcrumbs.jsx';
import SEOHead from '@/components/SEOHead.jsx';
import RelatedServices from '@/components/RelatedServices.jsx';
import { useLanguage } from '@/contexts/LanguageContext';

const TreePlantingPage = () => {
  const { language, t, getLocalizedPath } = useLanguage();
  const isFr = language === 'fr';
  
  const pageTitle = isFr ? "Services de Plantation d'Arbres Ouest de l'Île | Service d'Arbres Brandse" : "Tree Planting Services West Island Montreal | Service d'Arbres Brandse";
  const pageDesc = isFr ? "Services experts de sélection et de plantation d'arbres pour embellir votre propriété. Arboriculteurs certifiés dans l'Ouest de l'Île de Montréal." : "Expert tree selection and planting services to beautify your property. Certified arborists in West Island Montreal.";
  const keywords = isFr ? "plantation arbre Ouest de l'Île, planter arbre Montréal, arboriculteur plantation, remplacement arbre" : "tree planting West Island, plant tree Montreal, arborist planting, tree replacement";
  const pageUrl = `https://servicedarbresbrandse.com${getLocalizedPath('/tree-planting')}`;
  const imageUrl = "https://horizons-cdn.hostinger.com/e1153006-2afb-49ee-92e0-b73c646df449/a817b32156bd950f63c1602e7afde7dc.webp";
  
  const features = [{
    title: isFr ? "Sélection d'espèces" : "Species Selection",
    desc: isFr ? "Conseils pour choisir le bon arbre pour votre sol et climat." : "Advice on choosing the right tree for your soil and climate."
  }, {
    title: isFr ? "Analyse du sol" : "Soil Assessment",
    desc: isFr ? "Vérification des conditions pour assurer une bonne croissance." : "Checking conditions to ensure proper growth."
  }, {
    title: isFr ? "Plantation adéquate" : "Proper Planting",
    desc: isFr ? "Profondeur et techniques correctes pour éviter les problèmes futurs." : "Correct depth and techniques to avoid future problems."
  }, {
    title: isFr ? "Tuteurage et paillis" : "Staking & Mulching",
    desc: isFr ? "Soutien initial et protection des racines pour les jeunes arbres." : "Initial support and root protection for young trees."
  }];
  
  const benefits = [{
    title: isFr ? "Valeur de la propriété" : "Property Value",
    description: isFr ? "Des arbres matures augmentent considérablement la valeur de votre maison." : "Mature trees significantly increase the value of your home."
  }, {
    title: isFr ? "Impact environnemental" : "Environmental Impact",
    description: isFr ? "Améliore la qualité de l'air et fournit de l'ombre naturelle." : "Improves air quality and provides natural shade."
  }, {
    title: isFr ? "Survie garantie" : "Guaranteed Survival",
    description: isFr ? "Une plantation professionnelle assure un meilleur taux de réussite." : "Professional planting ensures a much higher success rate."
  }, {
    title: isFr ? "Esthétique immédiate" : "Instant Aesthetics",
    description: isFr ? "Transformez instantanément l'apparence de votre aménagement paysager." : "Instantly transform the look of your landscaping."
  }];
  
  return <>
      <SEOHead 
        title={pageTitle}
        description={pageDesc}
        keywords={keywords}
        canonicalUrl={getLocalizedPath('/tree-planting')}
      />

      <Header />

      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 flex items-center justify-center min-h-[60vh]">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${imageUrl})`
      }}>
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumbs items={[{label: isFr ? 'Services' : 'Services', path: '/services'}, {label: isFr ? "Plantation" : "Tree Planting"}]} />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 mt-4 tracking-tight">
            {isFr ? "Services de Plantation d'Arbres" : "Professional Tree Planting"}
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            {isFr ? "Investissez dans l'avenir de votre propriété avec nos services de plantation experts." : "Invest in the future of your property with our expert planting services."}
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
                {isFr ? "Le Bon Arbre au Bon Endroit" : "The Right Tree in the Right Place"}
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {isFr ? "Planter un arbre est un investissement à long terme. Une mauvaise sélection ou une plantation inadéquate peut entraîner des problèmes coûteux des années plus tard. Nos arboriculteurs vous guident pour choisir l'espèce idéale en fonction de l'espace disponible, du type de sol et de vos objectifs esthétiques." : "Planting a tree is a long-term investment. Poor selection or improper planting can lead to costly problems years later. Our arborists guide you in choosing the ideal species based on available space, soil type, and your aesthetic goals."}
              </p>
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => <div key={index} className="flex items-start">
                    <Shield className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600">{feature.desc}</p>
                    </div>
                  </div>)}
              </div>
              <Button asChild className="bg-gray-900 hover:bg-gray-800 text-white">
                <Link to={getLocalizedPath('/contact')} className="flex items-center">
                  {isFr ? "Planifier une consultation" : "Schedule a Consultation"} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl transform translate-x-4 translate-y-4"></div>
              <img 
                src={imageUrl} 
                alt="Young pine/evergreen tree with support stakes in residential backyard" 
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
              {isFr ? "Pourquoi Faire Planter par des Pros ?" : "Why Hire Pros for Planting?"}
            </h2>
            <p className="text-lg text-gray-600">
              {isFr ? "Assurez-vous que vos nouveaux arbres ont le meilleur départ possible dans la vie." : "Ensure your new trees get the best possible start in life."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => <div key={index} className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      <RelatedServices currentServiceId="tree-planting" />

      <Footer />
    </>;
};
export default TreePlantingPage;
