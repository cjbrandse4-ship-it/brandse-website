import Link from 'next/link';
import Head from 'next/head';
import { Phone, Shield, CheckCircle, ChevronRight, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import { useLanguage } from '../lib/useLanguage';

export default function HedgeTrimmingPage() {
  const { lang, t, getLocalizedPath } = useLanguage();
  const isFr = lang === 'fr';

  const pageTitle = isFr
    ? "Taille de Haies et Arbustes | Ouest de l'Île de Montréal | Brandse"
    : "Hedge Trimming & Shrub Pruning | West Island Montreal | Brandse";
  const pageDesc = isFr
    ? "Taille de haies professionnelle, taille d'arbustes et entretien paysager dans l'Ouest de l'Île de Montréal. Estimations gratuites."
    : 'Professional hedge trimming, shrub pruning & landscape maintenance in West Island Montreal. Free estimates.';

  const features = [
    {
      titleEn: 'Precision Shaping',
      titleFr: 'Taille de précision',
      descEn: 'Straight lines and perfect shapes for a manicured look.',
      descFr: 'Lignes droites et formes parfaites pour un look soigné.'
    },
    {
      titleEn: 'Height Reduction',
      titleFr: 'Réduction de hauteur',
      descEn: 'Cutting back overgrown hedges for better control.',
      descFr: 'Rabattage des haies trop hautes pour un meilleur contrôle.'
    },
    {
      titleEn: 'Density Improvement',
      titleFr: 'Contrôle de la densité',
      descEn: 'Strategic trimming to encourage thicker foliage.',
      descFr: 'Taille stratégique pour encourager un feuillage plus épais.'
    },
    {
      titleEn: 'Seasonal Maintenance',
      titleFr: 'Entretien saisonnier',
      descEn: 'Regular programs to maintain shape year-round.',
      descFr: 'Programmes réguliers pour maintenir la forme toute l\'année.'
    }
  ];

  const benefits = [
    {
      titleEn: 'Neat Appearance',
      titleFr: 'Apparence soignée',
      descEn: 'Instantly improves the curb appeal of your property.',
      descFr: "Améliore instantanément l'attrait visuel de votre propriété."
    },
    {
      titleEn: 'Healthy Growth',
      titleFr: 'Croissance saine',
      descEn: 'Removes dead parts and stimulates new growth.',
      descFr: 'Élimine les parties mortes et stimule les nouvelles pousses.'
    },
    {
      titleEn: 'Enhanced Privacy',
      titleFr: 'Intimité optimale',
      descEn: 'Maintains a dense visual barrier for your yard.',
      descFr: 'Maintient une barrière visuelle dense et uniforme.'
    },
    {
      titleEn: 'Pest Control',
      titleFr: 'Contrôle des parasites',
      descEn: 'Reduces areas where harmful insects can hide.',
      descFr: 'Réduit les zones où les insectes nuisibles peuvent se cacher.'
    }
  ];

  const relatedServices = [
    {
      href: '/tree-trimming',
      titleEn: 'Tree Trimming',
      titleFr: 'Élagage',
      descEn: 'Expert pruning for trees of all sizes.',
      descFr: 'Élagage expert pour arbres de toutes tailles.'
    },
    {
      href: '/tree-planting',
      titleEn: 'Tree Planting',
      titleFr: "Plantation d'arbres",
      descEn: 'Add new trees or hedges to your property.',
      descFr: 'Ajoutez de nouveaux arbres ou haies à votre propriété.'
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
    "description": "Professional cedar hedge trimming and maintenance services across West Island Montreal.",
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": { "@type": "Service", "name": "Hedge Trimming", "description": "Precision hedge shaping, height reduction, and seasonal maintenance." },
      "priceCurrency": "CAD",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDesc}
        path={getLocalizedPath('/hedge-trimming')}
        lang={lang}
      />
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      </Head>

      <Header />
      <Breadcrumbs items={[
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Hedge Trimming' }
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
              <span className="text-white">{isFr ? 'Taille de haies' : 'Hedge Trimming'}</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              {isFr ? 'Taille de Haies Professionnelle' : 'Professional Hedge Trimming'}
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              {isFr
                ? "Gardez votre aménagement paysager impeccable avec nos services de taille de précision."
                : 'Keep your landscaping looking pristine with our precision trimming services.'}
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
                  {isFr ? "L'Expertise pour des Haies Parfaites" : 'Expertise for Perfect Hedges'}
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {isFr
                    ? "Une haie bien entretenue est la signature d'une belle propriété. Nos experts utilisent des équipements professionnels bien aiguisés pour garantir des coupes nettes qui n'endommagent pas le feuillage. Que ce soit pour des cèdres, des thuyas ou des arbustes décoratifs, nous maîtrisons les techniques appropriées."
                    : "A well-maintained hedge is the signature of a beautiful property. Our experts use sharp, professional equipment to ensure clean cuts that don't damage the foliage. Whether it's cedars, arborvitae, or decorative shrubs, we master the proper techniques."}
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

              {/* Right: Benefits as process-like cards */}
              <div className="bg-gray-50 p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  {isFr ? 'Les Bienfaits d\'une Taille Régulière' : 'Benefits of Regular Trimming'}
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
</main>

      <Footer />
    </>
  );
}
