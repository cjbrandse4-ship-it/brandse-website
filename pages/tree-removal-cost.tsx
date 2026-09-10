import Link from 'next/link';
import Head from 'next/head';
import { Phone, DollarSign, CheckCircle, ChevronDown, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import LastUpdated from '../components/LastUpdated';
import { useLanguage } from '../lib/useLanguage';
import { siteConfig, ORG_ID } from '../lib/seo';
import { pageDates } from '../data/pageDates';

// Price figures mirror the published 2026 cost guide
// (/blog/tree-removal-cost-west-island-montreal). If prices change, update
// BOTH places — mismatched numbers across pages destroys AI-answer trust.

export default function TreeRemovalCostPage() {
  const { lang, getLocalizedPath } = useLanguage();
  const isFr = lang === 'fr';
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const pageTitle = isFr
    ? "Combien coûte l'abattage d'un arbre ? Prix 2026 Ouest-de-l'Île | Brandse"
    : 'How Much Does Tree Removal Cost? 2026 West Island Prices | Brandse';
  const pageDesc = isFr
    ? "Abattage d'arbre dans l'Ouest de l'Île : 500 $ à 5 500 $+ selon la taille. Tableau de prix 2026 par taille d'arbre, facteurs de coût et frais de permis par ville."
    : 'Tree removal in West Island Montreal costs $500 to $5,500+ depending on size. 2026 price table by tree size, cost factors, and permit fees by city.';

  // The direct answer — the passage AI engines extract. Number first.
  const directAnswer = isFr
    ? "L'abattage d'un arbre dans l'Ouest de l'Île de Montréal coûte généralement entre 500 $ et 5 500 $ et plus en 2026. La plupart des abattages résidentiels se situent entre 1 200 $ et 3 000 $, selon la taille de l'arbre, l'accès au terrain et la proximité des structures. L'essouchage ajoute généralement 200 $ à 500 $."
    : 'Tree removal in the West Island of Montreal typically costs between $500 and $5,500+ in 2026. Most residential removals land between $1,200 and $3,000, depending on tree size, property access, and proximity to structures. Stump grinding usually adds $200 to $500.';

  const priceRows = [
    {
      size: isFr ? 'Petit arbre (moins de 10 m)' : 'Small tree (under 10 m)',
      examples: isFr ? 'Pommetier, lilas japonais, jeune érable' : 'Crabapple, Japanese lilac, young maple',
      range: isFr ? '500 $ – 1 200 $' : '$500 – $1,200',
    },
    {
      size: isFr ? 'Arbre moyen (10 – 18 m)' : 'Medium tree (10 – 18 m)',
      examples: isFr ? 'Érable argenté mature, bouleau, frêne' : 'Mature silver maple, birch, ash',
      range: isFr ? '1 200 $ – 3 000 $' : '$1,200 – $3,000',
    },
    {
      size: isFr ? 'Grand arbre (plus de 18 m)' : 'Large tree (over 18 m)',
      examples: isFr ? 'Chêne, érable à sucre, grand pin' : 'Towering oak, sugar maple, mature pine',
      range: isFr ? '3 000 $ – 5 500 $ et plus' : '$3,000 – $5,500+',
    },
    {
      size: isFr ? 'Essouchage (en option)' : 'Stump grinding (optional add-on)',
      examples: isFr ? 'Selon le diamètre de la souche et les racines' : 'Depends on stump diameter and root spread',
      range: isFr ? '200 $ – 500 $' : '$200 – $500',
    },
  ];

  const factors = isFr
    ? [
        'Accès limité — cour arrière sans portail assez large pour l\'équipement (notre nacelle araignée compacte réduit souvent ce surcoût)',
        'Proximité des lignes électriques d\'Hydro-Québec — techniques spécialisées et coordination requises',
        'Proximité des structures — maison, piscine, clôture, cabanon : démontage par sections au gréage',
        'État de l\'arbre — un arbre mort ou instable est plus dangereux et plus long à démonter en sécurité',
        'Urgence vs planifié — une intervention d\'urgence 24/7 coûte plus cher qu\'un abattage planifié',
      ]
    : [
        'Limited access — a backyard with no gate wide enough for equipment (our compact spider lift often reduces this surcharge)',
        'Proximity to Hydro-Québec power lines — specialized techniques and coordination required',
        'Proximity to structures — house, pool, fence, shed: sectional dismantling with rigging',
        'Tree condition — a dead or unstable tree is more dangerous and slower to take down safely',
        'Emergency vs. scheduled — 24/7 emergency response costs more than a planned removal',
      ];

  const permitCities = [
    { name: 'Pointe-Claire', slug: 'pointe-claire', fee: isFr ? '50 $ – 100 $' : '$50 – $100' },
    { name: 'Dorval', slug: 'dorval', fee: isFr ? 'environ 50 $ – 100 $' : 'roughly $50 – $100' },
    { name: 'Beaconsfield', slug: 'beaconsfield', fee: isFr ? 'jusqu\'à 150 $' : 'up to $150' },
    { name: 'Kirkland', slug: 'kirkland', fee: isFr ? '75 $ – 125 $' : '$75 – $125' },
  ];

  const faqs = isFr
    ? [
        { q: 'Combien coûte l\'abattage d\'un arbre moyen dans l\'Ouest de l\'Île ?', a: 'Un arbre moyen de 10 à 18 mètres — érable argenté mature, bouleau ou frêne — coûte généralement entre 1 200 $ et 3 000 $ à abattre, incluant l\'ébranchage, le déchiquetage des branches et le tronçonnage du tronc.' },
        { q: 'L\'essouchage est-il inclus dans le prix ?', a: 'Habituellement non — l\'essouchage est un service distinct qui ajoute généralement 200 $ à 500 $ selon le diamètre de la souche. Nos soumissions écrites détaillent chaque élément pour qu\'il n\'y ait aucune surprise.' },
        { q: 'Ai-je besoin d\'un permis et combien coûte-t-il ?', a: 'La plupart des municipalités de l\'Ouest de l\'Île exigent un permis avant d\'abattre un arbre. Les frais varient de 50 $ à 150 $ selon la ville. Nous gérons la demande de permis dans le cadre de notre service.' },
        { q: 'Pourquoi la soumission la moins chère est-elle risquée ?', a: 'Des opérateurs sans licence ni assurance offrent parfois des prix très bas. Si un travailleur se blesse sur votre propriété ou si l\'arbre endommage votre maison, vous pourriez être tenu responsable. Exigez toujours une preuve d\'assurance responsabilité et CNESST.' },
        { q: 'L\'hiver est-il moins cher pour abattre un arbre ?', a: 'Souvent, oui. Le sol gelé protège la pelouse et facilite l\'accès de l\'équipement, les couronnes sans feuilles se démontent plus vite, et l\'horaire est plus flexible. C\'est l\'un des meilleurs moments de l\'année pour planifier un abattage non urgent.' },
      ]
    : [
        { q: 'How much does it cost to remove a medium tree in the West Island?', a: 'A medium tree of 10 to 18 metres — a mature silver maple, birch, or ash — typically costs $1,200 to $3,000 to remove, including limbing, chipping the brush, and cutting the trunk into sections.' },
        { q: 'Is stump grinding included in the price?', a: 'Usually not — stump grinding is a separate service that typically adds $200 to $500 depending on stump diameter. Our written quotes itemize everything so there are no surprises.' },
        { q: 'Do I need a permit, and how much does it cost?', a: 'Most West Island municipalities require a permit before removing a tree. Fees range from about $50 to $150 depending on the city. We handle the permit application as part of our service.' },
        { q: 'Why is the cheapest quote often the riskiest?', a: 'Unlicensed, uninsured operators sometimes offer very low prices. If a worker is injured on your property or the tree damages your home, you could be held liable. Always ask for proof of liability and CNESST workers\' compensation insurance.' },
        { q: 'Is winter cheaper for tree removal?', a: 'Often, yes. Frozen ground protects your lawn and improves equipment access, leafless crowns come down faster, and scheduling is more flexible. It\'s one of the best times of year to book a non-emergency removal.' },
      ];

  const path = getLocalizedPath('/tree-removal-cost');

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pageTitle,
    description: pageDesc,
    url: `${siteConfig.domain}${path}`,
    inLanguage: isFr ? 'fr-CA' : 'en-CA',
    dateModified: pageDates['/tree-removal-cost'],
    about: { '@id': ORG_ID },
  };

  return (
    <>
      <SEOHead title={pageTitle} description={pageDesc} path={path} lang={lang} />
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </Head>

      <Header />
      <Breadcrumbs items={[
        { name: isFr ? 'Accueil' : 'Home', href: getLocalizedPath('/') },
        { name: 'Services', href: getLocalizedPath('/services') },
        { name: isFr ? 'Coût d\'abattage' : 'Tree Removal Cost' }
      ]} />

      <main id="main-content">
        {/* Direct answer — number first, extraction-friendly */}
        <section className="py-14 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="inline-flex items-center gap-2 bg-[#2D5016]/10 text-[#2D5016] rounded-full px-4 py-1.5 text-sm font-bold mb-6">
              <DollarSign className="w-4 h-4" />
              {isFr ? 'Guide des prix 2026' : '2026 Price Guide'}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {isFr ? "Combien coûte l'abattage d'un arbre dans l'Ouest de l'Île ?" : 'How Much Does Tree Removal Cost in the West Island?'}
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed border-l-4 border-[#2D5016] pl-5">
              {directAnswer}
            </p>
          </div>
        </section>

        {/* Price table */}
        <section className="py-14 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              {isFr ? 'Prix par taille d\'arbre (2026)' : 'Price by Tree Size (2026)'}
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full text-left">
                <thead className="bg-[#2D5016] text-white text-sm">
                  <tr>
                    <th className="px-5 py-3.5 font-semibold">{isFr ? 'Taille' : 'Tree size'}</th>
                    <th className="px-5 py-3.5 font-semibold hidden sm:table-cell">{isFr ? 'Exemples' : 'Examples'}</th>
                    <th className="px-5 py-3.5 font-semibold">{isFr ? 'Prix typique' : 'Typical range'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {priceRows.map((r, i) => (
                    <tr key={i} className={i % 2 ? 'bg-gray-50/60' : ''}>
                      <td className="px-5 py-4 font-medium text-gray-900">{r.size}</td>
                      <td className="px-5 py-4 text-gray-600 hidden sm:table-cell">{r.examples}</td>
                      <td className="px-5 py-4 font-bold text-[#2D5016] whitespace-nowrap">{r.range}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              {isFr
                ? 'Les prix incluent l\'abattage, l\'ébranchage, le déchiquetage des branches et le tronçonnage du tronc. Soumission écrite gratuite pour un prix exact.'
                : 'Ranges include felling, limbing, chipping the brush, and cutting the trunk into sections. Get a free written quote for an exact price.'}
            </p>
          </div>
        </section>

        {/* Cost factors */}
        <section className="py-14 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              {isFr ? 'Ce qui fait varier le prix' : 'What Changes the Price'}
            </h2>
            <ul className="space-y-4">
              {factors.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2D5016] shrink-0 mt-1" />
                  <span className="text-gray-700 leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Permit fees */}
        <section className="py-14 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {isFr ? 'Frais de permis par ville' : 'Permit Fees by City'}
            </h2>
            <p className="text-gray-600 mb-8">
              {isFr
                ? 'La plupart des municipalités exigent un permis avant l\'abattage. Nous gérons la demande pour vous. Frais typiques :'
                : 'Most municipalities require a permit before removal. We handle the application for you. Typical fees:'}
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {permitCities.map((c) => (
                <Link
                  key={c.slug}
                  href={getLocalizedPath(`/${c.slug}`)}
                  className="group bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow flex items-center justify-between"
                >
                  <div>
                    <p className="font-semibold text-gray-900">{c.name}</p>
                    <p className="text-sm text-gray-500">{c.fee}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#2D5016] group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-4">
              {isFr
                ? 'Les autres villes ont leurs propres grilles tarifaires — consultez votre page de ville pour les règles locales.'
                : 'Other cities have their own fee schedules — see your city page for local rules.'}
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">FAQ</h2>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <div key={i} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left font-semibold text-gray-900"
                  >
                    {f.q}
                    <ChevronDown className={`w-5 h-5 text-gray-500 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {/* Answer stays in the DOM (schema/visible-content parity
                      for crawlers) — only its visibility toggles. */}
                  <p className={`px-5 pb-5 text-gray-600 leading-relaxed ${openFaq === i ? '' : 'hidden'}`}>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#2D5016]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {isFr ? 'Obtenez votre prix exact — gratuitement' : 'Get Your Exact Price — Free'}
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              {isFr
                ? 'Soumission écrite détaillée en 24 heures, sans frais cachés. Réponse en 2 heures durant les heures d\'ouverture.'
                : 'Detailed written quote within 24 hours, no hidden fees. We respond within 2 hours during business hours.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={isFr ? '/fr/devis-gratuit' : '/free-estimate'}
                className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-gray-900 text-lg font-bold px-8 py-4 rounded-xl transition-colors shadow-xl"
              >
                {isFr ? 'Obtenir mon devis gratuit' : 'Get My Free Quote'} <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:4383655410" className="inline-flex items-center justify-center bg-white/10 border-2 border-white text-white hover:bg-white hover:text-[#2D5016] text-lg px-8 py-4 rounded-xl font-semibold transition-colors">
                <Phone className="mr-2 h-5 w-5" />(438) 365-5410
              </a>
            </div>
          </div>
        </section>
      </main>

      <LastUpdated date={pageDates['/tree-removal-cost']} lang={lang} />
      <Footer />
    </>
  );
}
