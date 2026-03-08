import Link from 'next/link';
import Head from 'next/head';
import { Phone, AlertTriangle, CheckCircle, ChevronRight, Leaf, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import { useLanguage } from '../lib/useLanguage';

export default function StumpGrindingPage() {
  const { lang, t, getLocalizedPath } = useLanguage();
  const isFr = lang === 'fr';

  const pageTitle = isFr
    ? "Services d'Essouchage | Service d'Arbres Brandse"
    : "Stump Grinding Services | Service d'Arbres Brandse";
  const pageDesc = isFr
    ? "Essouchage professionnel dans l'Ouest de l'Île de Montréal. Enlèvement complet des souches, nettoyage du site, prix compétitifs. Estimations gratuites."
    : "Professional stump grinding in West Island Montreal. Complete stump removal, site cleanup, competitive pricing. Free estimates.";

  const risks = [
    {
      titleEn: 'Pests:',
      titleFr: 'Parasites :',
      descEn: 'Rotting wood attracts termites, carpenter ants, and other insects that can migrate to your home.',
      descFr: 'Le bois pourri attire les termites, fourmis charpentières et autres insectes qui peuvent migrer vers votre maison.'
    },
    {
      titleEn: 'Safety:',
      titleFr: 'Sécurité :',
      descEn: 'Dangerous tripping hazard for children and while mowing the lawn.',
      descFr: 'Risque de trébuchement dangereux pour les enfants et lors de la tonte de la pelouse.'
    },
    {
      titleEn: 'Regrowth:',
      titleFr: 'Repousses :',
      descEn: 'Living roots can create unwanted new sprouts.',
      descFr: 'Les racines vivantes peuvent créer de nouvelles pousses indésirables.'
    }
  ];

  const processSteps = [
    {
      en: 'Underground utility check (Info-Excavation)',
      fr: 'Vérification des conduites souterraines (Info-Excavation)'
    },
    {
      en: 'Grinding of stump and surface roots',
      fr: 'Broyage de la souche et des racines de surface'
    },
    {
      en: 'Filling the hole with woodchips or topsoil',
      fr: 'Remplissage du trou avec les copeaux ou de la terre'
    }
  ];

  const relatedServices = [
    {
      href: '/tree-removal',
      titleEn: 'Tree Removal',
      titleFr: "Abattage d'arbres",
      descEn: 'Safe removal of hazardous, dead, or unwanted trees.',
      descFr: "Abattage sécuritaire d'arbres dangereux, morts ou indésirables."
    },
    {
      href: '/tree-planting',
      titleEn: 'Tree Planting',
      titleFr: "Plantation d'arbres",
      descEn: 'Expert tree selection and planting for your property.',
      descFr: "Sélection et plantation d'arbres experts pour votre propriété."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Stump Grinding",
    "provider": {
      "@type": "TreeService",
      "name": "Service d'Arbres Brandse Inc",
      "telephone": "+1-438-365-5410",
      "url": "https://www.servicedarbresbrandse.com"
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
    "description": "Complete stump grinding and removal with professional Vermeer equipment in West Island Montreal.",
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
        path={getLocalizedPath('/stump-grinding')}
        lang={lang}
      />
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      </Head>

      <Header />
      <Breadcrumbs items={[
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Stump Grinding' }
      ]} />

      <main>
        {/* Hero */}
        <section className="relative flex items-center justify-center min-h-[60vh]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/og-image.jpg)' }}
          >
            <div className="absolute inset-0 bg-gray-900/80" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
            <nav className="flex items-center justify-center gap-2 text-sm text-gray-300 mb-6">
              <Link href={getLocalizedPath('/')} className="hover:text-white">{isFr ? 'Accueil' : 'Home'}</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href={getLocalizedPath('/services')} className="hover:text-white">Services</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">{isFr ? 'Essouchage' : 'Stump Grinding'}</span>
            </nav>
            <div className="inline-flex items-center bg-[#2D5016]/30 text-white border border-[#2D5016]/60 px-4 py-1.5 rounded-full mb-6 font-semibold text-sm uppercase tracking-wider backdrop-blur-sm">
              <Leaf className="w-4 h-4 mr-2" />
              {isFr ? 'Nettoyage de Terrain' : 'Property Cleanup'}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              {isFr ? "Services d'Essouchage Professionnels" : 'Professional Stump Grinding'}
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              {isFr
                ? "Ne laissez pas une vieille souche gâcher votre aménagement paysager. Nous broyons les souches sous le niveau du sol pour un terrain impeccable."
                : "Don't let an old stump ruin your landscaping. We grind stumps below ground level for a flawless yard."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={getLocalizedPath('/contact')} className="inline-flex items-center justify-center bg-[#2D5016] hover:bg-[#3a6b1e] text-white text-lg px-8 py-4 rounded-lg font-semibold transition-colors shadow-xl">
                {t.common.getFreeQuote}
              </Link>
              <a href="tel:4383655410" className="inline-flex items-center justify-center bg-white/10 border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4 rounded-lg font-semibold transition-colors">
                <Phone className="mr-2 h-5 w-5" />(438) 365-5410
              </a>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {isFr ? "Pourquoi l'essouchage est-il crucial ?" : 'Why is Stump Grinding Crucial?'}
                </h2>
                <div className="text-lg text-gray-600 space-y-4">
                  <p>
                    {isFr
                      ? "Après un abattage d'arbre, la souche restante est souvent négligée. Cependant, laisser une souche pourrir naturellement peut prendre jusqu'à 10 ans et causer de nombreux problèmes."
                      : 'After a tree removal, the remaining stump is often overlooked. However, leaving a stump to rot naturally can take up to 10 years and cause numerous problems.'}
                  </p>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  {isFr ? 'Les risques de laisser une souche :' : 'Risks of leaving a stump:'}
                </h3>
                <ul className="space-y-4">
                  {risks.map((risk, i) => (
                    <li key={i} className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">
                        <strong>{isFr ? risk.titleFr : risk.titleEn}</strong>{' '}
                        {isFr ? risk.descFr : risk.descEn}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {isFr ? 'Notre Équipement et Processus' : 'Our Equipment & Process'}
                </h2>
                <p className="text-gray-600 mb-6">
                  {isFr
                    ? "Nous utilisons des essoucheuses professionnelles capables de broyer le bois jusqu'à 12 pouces sous la surface. Cela détruit le système racinaire central et permet de replanter ou de semer du gazon."
                    : 'We use professional stump grinders capable of grinding wood up to 12 inches below the surface. This destroys the central root system and allows for replanting or seeding grass.'}
                </p>
                <div className="space-y-4">
                  {processSteps.map((step, i) => (
                    <div key={i} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                      <CheckCircle className="h-6 w-6 text-[#2D5016] mr-3 flex-shrink-0" />
                      <span className="font-medium text-gray-900">{isFr ? step.fr : step.en}</span>
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
        <section className="py-20 bg-[#2D5016]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Leaf className="h-12 w-12 text-white/80 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {isFr ? "Prêt à vous débarrasser d'une souche ?" : 'Ready to Get Rid of That Stump?'}
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              {isFr
                ? "Contactez-nous pour une soumission gratuite. Prix basés sur le diamètre de la souche."
                : 'Contact us for a free quote. Pricing based on stump diameter.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={getLocalizedPath('/contact')} className="inline-flex items-center justify-center bg-white text-[#2D5016] hover:bg-gray-100 text-lg px-8 py-4 rounded-lg font-semibold transition-colors">
                {t.common.getFreeQuote}
              </Link>
              <a href="tel:4383655410" className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[#2D5016] text-lg px-8 py-4 rounded-lg font-semibold transition-colors">
                <Phone className="mr-2 h-5 w-5" />(438) 365-5410
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
