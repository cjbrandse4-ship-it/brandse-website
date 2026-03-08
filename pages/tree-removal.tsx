import Link from 'next/link';
import Head from 'next/head';
import { Phone, Shield, AlertTriangle, ChevronRight, TreePine, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import { useLanguage } from '../lib/useLanguage';

export default function TreeRemovalPage() {
  const { lang, t, getLocalizedPath } = useLanguage();
  const isFr = lang === 'fr';

  const pageTitle = isFr
    ? "Services d'Abattage d'Arbres | Service d'Arbres Brandse"
    : "Professional Tree Removal Services | Service d'Arbres Brandse";
  const pageDesc = isFr
    ? "Services d'abattage d'arbres sécuritaires et efficaces dans l'Ouest de l'Île de Montréal. Arboriculteurs certifiés. Soumission gratuite!"
    : "Safe and efficient tree removal services in West Island Montreal. Certified arborists handle hazardous trees with precision. Free quote!";

  const signs = [
    {
      en: 'Severe infestation (e.g., Emerald Ash Borer) destroying the tree from within.',
      fr: "Infestation sévère (ex: Agrile du frêne) détruisant l'arbre de l'intérieur."
    },
    {
      en: 'Damage to foundations, plumbing, or driveway heaving.',
      fr: "Dommages aux fondations, à la plomberie ou soulèvement de l'allée."
    },
    {
      en: 'Dead, rotting, or rapidly declining tree with large dead branches.',
      fr: 'Arbre mort, pourri ou en déclin rapide avec de grandes branches mortes.'
    },
    {
      en: 'Sudden leaning or deep cracks in the main trunk.',
      fr: 'Inclinaison soudaine ou fissures profondes dans le tronc principal.'
    }
  ];

  const steps = [
    {
      titleEn: 'Assessment & Planning',
      titleFr: 'Évaluation et Planification',
      descEn: 'We inspect the tree, assess risks, and determine the safest dismantling method.',
      descFr: 'Nous inspectons l\'arbre, évaluons les risques et déterminons la méthode de démontage la plus sûre.'
    },
    {
      titleEn: 'Safe Dismantling',
      titleFr: 'Démontage Sécuritaire',
      descEn: 'Using rigging techniques to lower branches without damaging your property.',
      descFr: 'Utilisation de techniques de gréage pour abaisser les branches sans endommager votre terrain.'
    },
    {
      titleEn: 'Cleanup & Stump Grinding',
      titleFr: 'Nettoyage et Essouchage',
      descEn: 'We remove all debris and recommend our stump grinding service for a perfect finish.',
      descFr: "Nous ramassons tous les débris et recommandons notre service d'essouchage pour une finition parfaite."
    }
  ];

  const relatedServices = [
    {
      href: '/stump-grinding',
      titleEn: 'Stump Grinding',
      titleFr: 'Essouchage',
      descEn: 'Complete stump removal after tree cutting for a clean yard.',
      descFr: 'Enlèvement complet de la souche après abattage pour un terrain impeccable.'
    },
    {
      href: '/tree-trimming',
      titleEn: 'Tree Trimming',
      titleFr: 'Élagage',
      descEn: 'Expert pruning to maintain tree health and improve safety.',
      descFr: "Élagage expert pour maintenir la santé de l'arbre et assurer la sécurité."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Tree Removal",
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
    "description": "Professional tree removal services in West Island Montreal. Certified arborists handle hazardous trees safely.",
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
        path={getLocalizedPath('/tree-removal')}
        lang={lang}
      />
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      </Head>

      <Header />
      <Breadcrumbs items={[
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Tree Removal' }
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
            {/* Breadcrumbs */}
            <nav className="flex items-center justify-center gap-2 text-sm text-gray-300 mb-6">
              <Link href={getLocalizedPath('/')} className="hover:text-white">{isFr ? 'Accueil' : 'Home'}</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href={getLocalizedPath('/services')} className="hover:text-white">Services</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">{isFr ? "Abattage d'arbres" : 'Tree Removal'}</span>
            </nav>
            <div className="inline-flex items-center bg-[#2D5016]/30 text-white border border-[#2D5016]/60 px-4 py-1.5 rounded-full mb-6 font-semibold text-sm uppercase tracking-wider backdrop-blur-sm">
              <Shield className="w-4 h-4 mr-2" />
              {isFr ? 'Arboriculteurs Certifiés' : 'Certified Arborists'}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              {isFr ? "Services d'Abattage d'Arbres Professionnels" : 'Professional Tree Removal Services'}
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              {isFr
                ? "Des solutions sécuritaires, efficaces et fiables pour les arbres dangereux, morts ou indésirables. Nous gérons les situations les plus complexes avec un équipement de pointe."
                : 'Safe, efficient, and reliable solutions for hazardous, dead, or unwanted trees. We handle the most complex situations with state-of-the-art equipment.'}
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
              {/* Left: Why */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {isFr ? "Pourquoi l'abattage d'arbres est-il parfois nécessaire ?" : 'Why is Tree Removal Sometimes Necessary?'}
                </h2>
                <div className="text-lg text-gray-600 space-y-4">
                  <p>
                    {isFr
                      ? "Bien que nous fassions tout notre possible pour préserver les arbres grâce à l'élagage, l'abattage est parfois la seule option sécuritaire. Un arbre mort, malade ou structurellement compromis pose un risque majeur pour votre propriété, surtout lors des violentes tempêtes fréquentes au Québec."
                      : 'While we do everything possible to preserve trees through trimming, removal is sometimes the only safe option. A dead, diseased, or structurally compromised tree poses a major risk to your property, especially during Quebec\'s frequent severe storms.'}
                  </p>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  {isFr ? "Signes qu'un arbre doit être abattu :" : 'Signs a tree needs to be removed:'}
                </h3>
                <ul className="space-y-4">
                  {signs.map((sign, i) => (
                    <li key={i} className="flex items-start">
                      <AlertTriangle className="h-6 w-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{isFr ? sign.fr : sign.en}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Process */}
              <div className="bg-gray-50 p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  {isFr ? 'Notre Processus Étape par Étape' : 'Our Step-by-Step Process'}
                </h2>
                <div className="space-y-8">
                  {steps.map((step, i) => (
                    <div key={i} className="flex">
                      <div className="flex-shrink-0 h-12 w-12 rounded-full bg-[#2D5016] text-white flex items-center justify-center font-bold text-xl shadow-md">
                        {i + 1}
                      </div>
                      <div className="ml-5">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {isFr ? step.titleFr : step.titleEn}
                        </h3>
                        <p className="text-gray-600">
                          {isFr ? step.descFr : step.descEn}
                        </p>
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
            <TreePine className="h-12 w-12 text-white/80 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {isFr ? "Besoin d'un abattage d'arbre ?" : 'Need a Tree Removed?'}
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              {isFr
                ? "Contactez-nous pour une évaluation gratuite et une soumission détaillée."
                : 'Contact us for a free assessment and detailed quote.'}
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
