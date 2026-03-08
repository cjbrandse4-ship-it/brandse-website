import Link from 'next/link';
import Head from 'next/head';
import { Phone, Shield, AlertTriangle, Clock, ChevronRight, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import { useLanguage } from '../lib/useLanguage';

export default function EmergencyServicesPage() {
  const { lang, t, getLocalizedPath } = useLanguage();
  const isFr = lang === 'fr';

  const pageTitle = isFr
    ? "Services d'Urgence Arbres 24/7 | Service d'Arbres Brandse"
    : "24/7 Emergency Tree Services | Service d'Arbres Brandse";
  const pageDesc = isFr
    ? "Intervention rapide pour les arbres tombés ou dangereux suite aux tempêtes. Service d'urgence 24/7 dans l'Ouest de l'Île de Montréal. Appelez le (438) 365-5410."
    : 'Rapid response for fallen or hazardous trees following storms. 24/7 emergency tree service in West Island Montreal. Call (438) 365-5410.';

  const features = [
    {
      titleEn: '24/7 Availability',
      titleFr: 'Disponibilité 24/7',
      descEn: 'We answer emergency calls day and night.',
      descFr: "Nous répondons aux appels d'urgence jour et nuit."
    },
    {
      titleEn: 'Rapid Response',
      titleFr: 'Intervention rapide',
      descEn: 'Crews deployed quickly to secure the area.',
      descFr: 'Équipes déployées rapidement pour sécuriser les lieux.'
    },
    {
      titleEn: 'Tarping & Securing',
      titleFr: 'Sécurisation temporaire',
      descEn: 'Protecting damaged structures from weather.',
      descFr: 'Protection des structures endommagées contre les intempéries.'
    },
    {
      titleEn: 'Insurance Assistance',
      titleFr: 'Aide aux assurances',
      descEn: 'Documentation and photos for your claims.',
      descFr: 'Documentation et photos pour vos réclamations.'
    }
  ];

  const benefits = [
    {
      titleEn: 'Immediate Safety',
      titleFr: 'Sécurité immédiate',
      descEn: 'Quick elimination of hazards for your family.',
      descFr: 'Élimination rapide des dangers pour votre famille.'
    },
    {
      titleEn: 'Prevent Damage',
      titleFr: 'Prévenir les dommages',
      descEn: 'Prevent the situation from getting worse.',
      descFr: "Évitez que la situation ne s'aggrave."
    },
    {
      titleEn: 'Professional Expertise',
      titleFr: 'Expertise professionnelle',
      descEn: 'Safe handling of trees under tension.',
      descFr: 'Manipulation sécuritaire des arbres sous tension.'
    },
    {
      titleEn: 'Stress Reduction',
      titleFr: 'Réduction du stress',
      descEn: 'Let the experts handle the crisis for you.',
      descFr: 'Laissez les experts gérer la crise pour vous.'
    }
  ];

  const relatedServices = [
    {
      href: '/tree-removal',
      titleEn: 'Tree Removal',
      titleFr: "Abattage d'arbres",
      descEn: 'Scheduled removal of hazardous or unwanted trees.',
      descFr: "Abattage planifié d'arbres dangereux ou indésirables."
    },
    {
      href: '/tree-trimming',
      titleEn: 'Tree Trimming',
      titleFr: 'Élagage',
      descEn: 'Preventive pruning to reduce storm damage risk.',
      descFr: 'Élagage préventif pour réduire les risques de dommages par la tempête.'
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Emergency Tree Service",
    "provider": {
      "@type": "TreeService",
      "name": "Service d'Arbres Brandse Inc",
      "telephone": "+1-438-365-5410",
      "url": "https://servicedarbresbrandse.com"
    },
    "areaServed": [
      { "@type": "City", "name": "Pointe-Claire" },
      { "@type": "City", "name": "Beaconsfield" },
      { "@type": "City", "name": "Kirkland" },
      { "@type": "City", "name": "Dorval" },
      { "@type": "City", "name": "Hudson" },
      { "@type": "City", "name": "Saint-Lazare" },
      { "@type": "City", "name": "Vaudreuil-Dorion" },
      { "@type": "City", "name": "Dollard-des-Ormeaux" },
      { "@type": "City", "name": "Senneville" },
      { "@type": "City", "name": "Baie-d'Urfe" },
      { "@type": "City", "name": "Ile-Perrot" },
      { "@type": "City", "name": "Pincourt" }
    ],
    "description": "24/7 emergency tree removal for storm damage and hazardous situations in West Island Montreal.",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "CAD",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDesc}
        path={getLocalizedPath('/emergency-services')}
        lang={lang}
      />
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      </Head>

      <Header />
      <Breadcrumbs items={[
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Emergency Services' }
      ]} />

      <main>
        {/* Hero */}
        <section className="relative flex items-center justify-center min-h-[60vh]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/og-image.jpg)' }}
          >
            <div className="absolute inset-0 bg-gray-900/85" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
            <nav className="flex items-center justify-center gap-2 text-sm text-gray-300 mb-6">
              <Link href={getLocalizedPath('/')} className="hover:text-white">{isFr ? 'Accueil' : 'Home'}</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href={getLocalizedPath('/services')} className="hover:text-white">Services</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">{isFr ? 'Urgence' : 'Emergency'}</span>
            </nav>
            <div className="inline-flex items-center bg-red-600 text-white px-4 py-1.5 rounded-full mb-6 font-semibold text-sm uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4 mr-2" />
              {isFr ? "Service d'Urgence 24/7" : '24/7 Emergency Service'}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              {isFr ? 'Intervention Rapide pour Arbres Dangereux' : 'Rapid Response for Hazardous Trees'}
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              {isFr
                ? "Arbre tombé sur votre maison ou bloquant l'accès ? Nous sommes prêts à intervenir immédiatement."
                : 'Tree fallen on your home or blocking access? We are ready to respond immediately.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:4383655410" className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-4 rounded-lg font-semibold transition-colors shadow-xl">
                <Phone className="mr-2 h-6 w-6" />
                {isFr ? "Appeler l'Urgence" : 'Call Emergency Now'}
              </a>
              <Link href={getLocalizedPath('/contact')} className="inline-flex items-center justify-center bg-white/10 border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4 rounded-lg font-semibold transition-colors">
                {t.common.getFreeQuote}
              </Link>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {isFr ? 'Prêts à Faire Face aux Tempêtes' : 'Ready to Face the Storms'}
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {isFr
                    ? "Les tempêtes violentes, les vents forts et l'accumulation de glace peuvent causer des dommages dévastateurs aux arbres. Lorsqu'un arbre menace votre maison, votre famille ou vos lignes électriques, chaque minute compte. Notre équipe d'intervention d'urgence est équipée pour gérer les situations les plus périlleuses en toute sécurité."
                    : "Severe storms, high winds, and ice accumulation can cause devastating damage to trees. When a tree threatens your home, family, or power lines, every minute counts. Our emergency response team is equipped to handle the most perilous situations safely."}
                </p>
                <div className="space-y-4 mb-8">
                  {features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Clock className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">{isFr ? feature.titleFr : feature.titleEn}</h3>
                        <p className="text-gray-600">{isFr ? feature.descFr : feature.descEn}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  {isFr ? "Pourquoi Nous Appeler en Cas d'Urgence ?" : 'Why Call Us in an Emergency?'}
                </h2>
                <div className="space-y-6">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start">
                      <div className="bg-red-50 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                        <Shield className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{isFr ? benefit.titleFr : benefit.titleEn}</h3>
                        <p className="text-gray-600 text-sm">{isFr ? benefit.descFr : benefit.descEn}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              {isFr ? 'Services Connexes' : 'Related Services'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedServices.map((svc, i) => (
                <Link key={i} href={getLocalizedPath(svc.href)} className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{isFr ? svc.titleFr : svc.titleEn}</h3>
                    <ArrowRight className="h-5 w-5 text-[#2D5016] group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-gray-600">{isFr ? svc.descFr : svc.descEn}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-red-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AlertTriangle className="h-12 w-12 text-white/80 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {isFr ? "Urgence Arbre ? Appelez Maintenant !" : 'Tree Emergency? Call Now!'}
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              {isFr
                ? "Ne prenez pas de risques avec des arbres endommagés. Notre équipe est disponible 24/7."
                : "Don't take risks with damaged trees. Our team is available 24/7."}
            </p>
            <a href="tel:4383655410" className="inline-flex items-center justify-center bg-white text-red-700 hover:bg-gray-100 text-xl px-10 py-5 rounded-lg font-bold transition-colors shadow-xl">
              <Phone className="mr-3 h-6 w-6" />(438) 365-5410
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
