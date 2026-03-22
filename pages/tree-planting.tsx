import Link from 'next/link';
import Head from 'next/head';
import { Phone, Shield, CheckCircle, ChevronRight, Sprout, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import { useLanguage } from '../lib/useLanguage';

export default function TreePlantingPage() {
  const { lang, t, getLocalizedPath } = useLanguage();
  const isFr = lang === 'fr';

  const pageTitle = isFr
    ? "Plantation d'Arbres | Ouest de l'Île de Montréal | Brandse"
    : "Tree Planting Services | West Island Montreal | Brandse";
  const pageDesc = isFr
    ? "Services experts de sélection et de plantation d'arbres pour embellir votre propriété. Arboriculteurs certifiés dans l'Ouest de l'Île de Montréal."
    : 'Expert tree selection and planting services to beautify your property. Certified arborists in West Island Montreal.';

  const features = [
    {
      titleEn: 'Species Selection',
      titleFr: "Sélection d'espèces",
      descEn: 'Advice on choosing the right tree for your soil and climate.',
      descFr: 'Conseils pour choisir le bon arbre pour votre sol et climat.'
    },
    {
      titleEn: 'Soil Assessment',
      titleFr: 'Analyse du sol',
      descEn: 'Checking conditions to ensure proper growth.',
      descFr: 'Vérification des conditions pour assurer une bonne croissance.'
    },
    {
      titleEn: 'Proper Planting',
      titleFr: 'Plantation adéquate',
      descEn: 'Correct depth and techniques to avoid future problems.',
      descFr: 'Profondeur et techniques correctes pour éviter les problèmes futurs.'
    },
    {
      titleEn: 'Staking & Mulching',
      titleFr: 'Tuteurage et paillis',
      descEn: 'Initial support and root protection for young trees.',
      descFr: 'Soutien initial et protection des racines pour les jeunes arbres.'
    }
  ];

  const benefits = [
    {
      titleEn: 'Property Value',
      titleFr: 'Valeur de la propriété',
      descEn: 'Mature trees significantly increase the value of your home.',
      descFr: 'Des arbres matures augmentent considérablement la valeur de votre maison.'
    },
    {
      titleEn: 'Environmental Impact',
      titleFr: 'Impact environnemental',
      descEn: 'Improves air quality and provides natural shade.',
      descFr: "Améliore la qualité de l'air et fournit de l'ombre naturelle."
    },
    {
      titleEn: 'Guaranteed Survival',
      titleFr: 'Survie garantie',
      descEn: 'Professional planting ensures a much higher success rate.',
      descFr: 'Une plantation professionnelle assure un meilleur taux de réussite.'
    },
    {
      titleEn: 'Instant Aesthetics',
      titleFr: 'Esthétique immédiate',
      descEn: 'Instantly transform the look of your landscaping.',
      descFr: "Transformez instantanément l'apparence de votre aménagement paysager."
    }
  ];

  const relatedServices = [
    {
      href: '/tree-removal',
      titleEn: 'Tree Removal',
      titleFr: "Abattage d'arbres",
      descEn: 'Remove old trees to make room for new healthy ones.',
      descFr: 'Enlevez les vieux arbres pour faire place à de nouveaux arbres sains.'
    },
    {
      href: '/stump-grinding',
      titleEn: 'Stump Grinding',
      titleFr: 'Essouchage',
      descEn: 'Clear old stumps before planting new trees.',
      descFr: 'Éliminez les vieilles souches avant de planter de nouveaux arbres.'
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "TreeService",
    "name": "Service d'Arbres Brandse Inc",
    "telephone": "+1-438-365-5410",
    "url": "https://www.servicedarbresbrandse.com",
    "image": "https://www.servicedarbresbrandse.com/og-image.jpg",
    "address": { "@type": "PostalAddress", "addressLocality": "Montreal", "addressRegion": "QC", "addressCountry": "CA" },
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
    "description": "Tree planting services with species selection guidance for West Island Montreal properties.",
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": { "@type": "Service", "name": "Tree Planting", "description": "Expert tree species selection, soil assessment, and professional planting." },
      "priceCurrency": "CAD",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDesc}
        path={getLocalizedPath('/tree-planting')}
        lang={lang}
      />
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      </Head>

      <Header />
      <Breadcrumbs items={[
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Tree Planting' }
      ]} />

      <main>
        {/* Hero */}
        <section className="relative flex items-center justify-center min-h-[60vh]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/og-image.jpg)' }}
          >
            <div className="absolute inset-0 bg-gray-900/75" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
            <nav className="flex items-center justify-center gap-2 text-sm text-gray-300 mb-6">
              <Link href={getLocalizedPath('/')} className="hover:text-white">{isFr ? 'Accueil' : 'Home'}</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href={getLocalizedPath('/services')} className="hover:text-white">Services</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">{isFr ? 'Plantation' : 'Tree Planting'}</span>
            </nav>
            <div className="inline-flex items-center bg-[#2D5016]/30 text-white border border-[#2D5016]/60 px-4 py-1.5 rounded-full mb-6 font-semibold text-sm uppercase tracking-wider backdrop-blur-sm">
              <Sprout className="w-4 h-4 mr-2" />
              {isFr ? 'Investissez dans l\'Avenir' : 'Invest in the Future'}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              {isFr ? "Services de Plantation d'Arbres" : 'Professional Tree Planting'}
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              {isFr
                ? "Investissez dans l'avenir de votre propriété avec nos services de plantation experts."
                : 'Invest in the future of your property with our expert planting services.'}
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
                  {isFr ? 'Le Bon Arbre au Bon Endroit' : 'The Right Tree in the Right Place'}
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {isFr
                    ? "Planter un arbre est un investissement à long terme. Une mauvaise sélection ou une plantation inadéquate peut entraîner des problèmes coûteux des années plus tard. Nos arboriculteurs vous guident pour choisir l'espèce idéale en fonction de l'espace disponible, du type de sol et de vos objectifs esthétiques."
                    : 'Planting a tree is a long-term investment. Poor selection or improper planting can lead to costly problems years later. Our arborists guide you in choosing the ideal species based on available space, soil type, and your aesthetic goals.'}
                </p>
                <div className="space-y-4 mb-8">
                  {features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Shield className="h-6 w-6 text-[#2D5016] mr-3 flex-shrink-0 mt-1" />
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
                  {isFr ? 'Pourquoi Faire Planter par des Pros ?' : 'Why Hire Pros for Planting?'}
                </h2>
                <div className="space-y-6">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start">
                      <div className="bg-[#2D5016]/10 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                        <CheckCircle className="h-5 w-5 text-[#2D5016]" />
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
        <section className="py-20 bg-[#2D5016]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Sprout className="h-12 w-12 text-white/80 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {isFr ? 'Prêt à planter un arbre ?' : 'Ready to Plant a Tree?'}
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              {isFr
                ? "Planifiez une consultation gratuite avec nos arboriculteurs pour choisir l'arbre parfait."
                : 'Schedule a free consultation with our arborists to choose the perfect tree.'}
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
