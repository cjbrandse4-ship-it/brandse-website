
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone, Shield, AlertTriangle, Clock } from 'lucide-react';
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

const EmergencyServicesPage = () => {
  const { language, t, getLocalizedPath } = useLanguage();
  const isFr = language === 'fr';

  const pageTitle = isFr ? "Services d'Urgence Arbres 24/7 Ouest de l'Île | Service d'Arbres Brandse" : "24/7 Emergency Tree Services West Island Montreal | Service d'Arbres Brandse";
  const pageDesc = isFr ? "Intervention rapide pour les arbres tombés ou dangereux suite aux tempêtes. Service d'urgence 24/7 dans l'Ouest de l'Île de Montréal. Appelez le (438) 365-5410." : "Rapid response for fallen or hazardous trees following storms. 24/7 emergency tree service in West Island Montreal. Call (438) 365-5410.";
  const keywords = isFr ? "urgence arbre Ouest de l'Île, arbre tombé Montréal, tempête arbre, urgence arboriculteur" : "emergency tree service West Island, fallen tree Montreal, storm damage tree, emergency arborist";
  const pageUrl = `https://servicedarbresbrandse.com${getLocalizedPath('/emergency-services')}`;
  const imageUrl = "https://images.unsplash.com/photo-1663634980758-1e3c0e475752";

  const features = [
    { title: isFr ? "Disponibilité 24/7" : "24/7 Availability", desc: isFr ? "Nous répondons aux appels d'urgence jour et nuit." : "We answer emergency calls day and night." },
    { title: isFr ? "Intervention rapide" : "Rapid Response", desc: isFr ? "Équipes déployées rapidement pour sécuriser les lieux." : "Crews deployed quickly to secure the area." },
    { title: isFr ? "Sécurisation temporaire" : "Tarping & Securing", desc: isFr ? "Protection des structures endommagées contre les intempéries." : "Protecting damaged structures from weather." },
    { title: isFr ? "Aide aux assurances" : "Insurance Assistance", desc: isFr ? "Documentation et photos pour vos réclamations." : "Documentation and photos for your claims." }
  ];

  const benefits = [
    { title: isFr ? "Sécurité immédiate" : "Immediate Safety", description: isFr ? "Élimination rapide des dangers pour votre famille." : "Quick elimination of hazards for your family." },
    { title: isFr ? "Prévenir les dommages" : "Prevent Damage", description: isFr ? "Évitez que la situation ne s'aggrave." : "Prevent the situation from getting worse." },
    { title: isFr ? "Expertise professionnelle" : "Professional Expertise", description: isFr ? "Manipulation sécuritaire des arbres sous tension." : "Safe handling of trees under tension." },
    { title: isFr ? "Réduction du stress" : "Stress Reduction", description: isFr ? "Laissez les experts gérer la crise pour vous." : "Let the experts handle the crisis for you." }
  ];

  return (
    <>
      <SEOHead 
        title={pageTitle}
        description={pageDesc}
        keywords={keywords}
        canonicalUrl={getLocalizedPath('/emergency-services')}
      />
      
      <LocalBusinessSchema 
        description={pageDesc} 
        url={pageUrl} 
      />
      
      <ServiceSchema 
        serviceName={isFr ? "Services d'Urgence Arbres" : "Emergency Tree Services"}
        serviceDescription={isFr ? "Intervention rapide 24/7 pour les arbres tombés ou dangereux suite aux tempêtes." : "24/7 rapid response for fallen or hazardous trees following storms."}
        url={pageUrl}
        availability="24/7"
      />

      <BreadcrumbSchema breadcrumbs={[
        { label: isFr ? 'Accueil' : 'Home', url: '/' },
        { label: isFr ? 'Services' : 'Services', url: '/services' },
        { label: isFr ? 'Services d\'Urgence' : 'Emergency Services', url: '/services/emergency' }
      ]} />

      <Header />

      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 flex items-center justify-center min-h-[60vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="absolute inset-0 bg-gray-900/80"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumbs items={[{label: isFr ? 'Services' : 'Services', path: '/services'}, {label: isFr ? "Urgence" : "Emergency"}]} />
          <div className="inline-flex items-center bg-red-600 text-white px-4 py-1.5 rounded-full mb-6 mt-4 font-semibold text-sm uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4 mr-2" />
            {isFr ? "Service d'Urgence 24/7" : "24/7 Emergency Service"}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            {isFr ? "Intervention Rapide pour Arbres Dangereux" : "Rapid Response for Hazardous Trees"}
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            {isFr ? "Arbre tombé sur votre maison ou bloquant l'accès ? Nous sommes prêts à intervenir immédiatement." : "Tree fallen on your home or blocking access? We are ready to respond immediately."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6 h-auto">
              <a href="tel:4383655410">
                <Phone className="mr-2 h-6 w-6" />
                {isFr ? "Appeler l'Urgence" : "Call Emergency Now"}
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
                {isFr ? "Prêts à Faire Face aux Tempêtes" : "Ready to Face the Storms"}
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {isFr 
                  ? "Les tempêtes violentes, les vents forts et l'accumulation de glace peuvent causer des dommages dévastateurs aux arbres. Lorsqu'un arbre menace votre maison, votre famille ou vos lignes électriques, chaque minute compte. Notre équipe d'intervention d'urgence est équipée pour gérer les situations les plus périlleuses en toute sécurité."
                  : "Severe storms, high winds, and ice accumulation can cause devastating damage to trees. When a tree threatens your home, family, or power lines, every minute counts. Our emergency response team is equipped to handle the most perilous situations safely."}
              </p>
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <Clock className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-red-600/10 rounded-2xl transform translate-x-4 translate-y-4"></div>
              <img 
                src={imageUrl} 
                alt="Emergency tree removal after storm damage"
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
              {isFr ? "Pourquoi Nous Appeler en Cas d'Urgence ?" : "Why Call Us in an Emergency?"}
            </h2>
            <p className="text-lg text-gray-600">
              {isFr ? "Ne prenez pas de risques avec des arbres endommagés. Laissez les professionnels s'en charger." : "Don't take risks with damaged trees. Let the professionals handle it."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-red-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices currentServiceId="emergency" />

      <Footer />
    </>
  );
};

export default EmergencyServicesPage;
