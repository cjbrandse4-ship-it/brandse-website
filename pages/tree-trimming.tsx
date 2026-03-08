import Link from 'next/link';
import { Phone, CheckCircle, ChevronRight, Scissors, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../lib/useLanguage';

export default function TreeTrimmingPage() {
  const { lang, t, getLocalizedPath } = useLanguage();
  const isFr = lang === 'fr';

  const pageTitle = isFr
    ? "Élagage et Taille d'Arbres | Service d'Arbres Brandse"
    : "Tree Trimming & Pruning Services | Service d'Arbres Brandse";
  const pageDesc = isFr
    ? "Élagage expert, taille et réduction de cime dans l'Ouest de l'Île de Montréal. Améliorez la santé, la sécurité et l'esthétique de vos arbres. Arboriculteurs certifiés."
    : "Expert tree trimming, pruning & crown reduction in West Island Montreal. Improve tree health, safety & aesthetics. Certified arborists.";

  const techniques = [
    {
      titleEn: 'Deadwooding:',
      titleFr: 'Bois mort :',
      descEn: 'Removal of dead or diseased branches to prevent decay.',
      descFr: 'Élimination des branches mortes ou malades pour prévenir la pourriture.'
    },
    {
      titleEn: 'Thinning:',
      titleFr: 'Éclaircissage :',
      descEn: 'Reducing crown density to allow wind and light to pass through.',
      descFr: 'Réduction de la densité de la cime pour laisser passer le vent et la lumière.'
    },
    {
      titleEn: 'Raising:',
      titleFr: 'Rehaussement :',
      descEn: 'Cutting lower branches to clear roofs, streets, or sidewalks.',
      descFr: 'Coupe des branches basses pour dégager les toits, rues ou trottoirs.'
    }
  ];

  const seasons = [
    {
      titleEn: 'Winter (Dormancy)',
      titleFr: 'Hiver (Dormance)',
      descEn: 'The best time for most hardwoods (oaks, maples). Cuts heal faster in spring.',
      descFr: 'Le meilleur moment pour la plupart des feuillus (chênes, érables). Les coupes guérissent plus vite au printemps.',
      color: 'border-blue-500'
    },
    {
      titleEn: 'Spring / Summer',
      titleFr: 'Printemps / Été',
      descEn: 'Ideal for removing visible deadwood or minor corrective pruning.',
      descFr: 'Idéal pour enlever le bois mort visible ou pour une taille corrective mineure.',
      color: 'border-green-500'
    },
    {
      titleEn: 'Year-Round',
      titleFr: "Toute l'année",
      descEn: 'Hazardous, broken, or structure-threatening branches must be removed immediately.',
      descFr: 'Les branches dangereuses, cassées ou menaçant des structures doivent être enlevées immédiatement.',
      color: 'border-red-500'
    }
  ];

  const relatedServices = [
    {
      href: '/tree-removal',
      titleEn: 'Tree Removal',
      titleFr: "Abattage d'arbres",
      descEn: 'When pruning is not enough, safe and efficient tree removal.',
      descFr: "Quand l'élagage ne suffit pas, abattage sécuritaire et efficace."
    },
    {
      href: '/hedge-trimming',
      titleEn: 'Hedge Trimming',
      titleFr: 'Taille de haies',
      descEn: 'Professional hedge shaping and maintenance for a manicured yard.',
      descFr: 'Taille et entretien professionnels de haies pour un terrain soigné.'
    }
  ];

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDesc}
        path={getLocalizedPath('/tree-trimming')}
        lang={lang}
      />

      <Header />

      <main>
        {/* Hero */}
        <section className="relative flex items-center justify-center min-h-[60vh]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://horizons-cdn.hostinger.com/e1153006-2afb-49ee-92e0-b73c646df449/7d7b8c44f72d161152e6520f3e3e292b.jpg)' }}
          >
            <div className="absolute inset-0 bg-gray-900/80" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
            <nav className="flex items-center justify-center gap-2 text-sm text-gray-300 mb-6">
              <Link href={getLocalizedPath('/')} className="hover:text-white">{isFr ? 'Accueil' : 'Home'}</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href={getLocalizedPath('/services')} className="hover:text-white">Services</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">{isFr ? 'Élagage' : 'Tree Trimming'}</span>
            </nav>
            <div className="inline-flex items-center bg-[#2D5016]/30 text-white border border-[#2D5016]/60 px-4 py-1.5 rounded-full mb-6 font-semibold text-sm uppercase tracking-wider backdrop-blur-sm">
              <Scissors className="w-4 h-4 mr-2" />
              {isFr ? 'Soins Arboricoles' : 'Arboricultural Care'}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              {isFr ? "Élagage et Taille d'Arbres" : 'Professional Tree Trimming'}
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              {isFr
                ? "Améliorez la santé, la structure et la beauté de vos arbres grâce à des techniques d'élagage approuvées par l'industrie."
                : 'Improve the health, structure, and beauty of your trees with industry-approved pruning techniques.'}
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
                  {isFr ? "La Science de l'Élagage" : 'The Science of Pruning'}
                </h2>
                <div className="text-lg text-gray-600 space-y-4">
                  <p>
                    {isFr
                      ? "L'élagage est bien plus qu'une simple coupe de branches. C'est une intervention chirurgicale sur un organisme vivant. Une mauvaise taille (comme l'étêtage) peut causer des dommages irréversibles, affaiblir l'arbre et éventuellement nécessiter un abattage complet."
                      : 'Pruning is much more than just cutting branches. It\'s a surgical intervention on a living organism. Improper pruning (like topping) can cause irreversible damage, weaken the tree, and eventually require complete removal.'}
                  </p>
                  <p>
                    {isFr
                      ? 'Nos arboriculteurs certifiés utilisent des techniques spécifiques :'
                      : 'Our certified arborists use specific techniques:'}
                  </p>
                </div>
                <ul className="space-y-4 mt-4">
                  {techniques.map((tech, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#2D5016] mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">
                        <strong>{isFr ? tech.titleFr : tech.titleEn}</strong>{' '}
                        {isFr ? tech.descFr : tech.descEn}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {isFr ? 'Considérations Saisonnières au Québec' : 'Seasonal Considerations in Quebec'}
                </h2>
                <p className="text-gray-600 mb-6">
                  {isFr
                    ? 'Le climat québécois dicte le moment idéal pour tailler différentes espèces :'
                    : 'The Quebec climate dictates the ideal time to trim different species:'}
                </p>
                <div className="space-y-4">
                  {seasons.map((season, i) => (
                    <div key={i} className={`bg-white p-4 rounded-lg shadow-sm border-l-4 ${season.color}`}>
                      <h4 className="font-bold text-gray-900">{isFr ? season.titleFr : season.titleEn}</h4>
                      <p className="text-sm text-gray-600">{isFr ? season.descFr : season.descEn}</p>
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
            <Scissors className="h-12 w-12 text-white/80 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {isFr ? "Vos arbres ont besoin d'un élagage ?" : 'Do Your Trees Need Trimming?'}
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              {isFr
                ? "Contactez-nous pour une évaluation gratuite par nos arboriculteurs certifiés."
                : 'Contact us for a free assessment by our certified arborists.'}
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
