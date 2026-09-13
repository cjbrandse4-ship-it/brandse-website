import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { Phone, Sparkles, CheckCircle, ChevronDown, ChevronRight, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import LastUpdated from '../components/LastUpdated';
import { useLanguage } from '../lib/useLanguage';
import { buildServiceSchema } from '../lib/seo';
import { pageDates } from '../data/pageDates';

// Seasonal service line: tree lighting only (no rooflines — deliberate
// positioning: the spider lift lets us light trees ladder crews can't).
// Offer decisions (Connor, Sept 2026): trees only; customer lights OR
// our commercial-grade supply; from $349; January takedown + in-season
// maintenance included in every install.

export default function ChristmasLightsPage() {
  const { lang, t, getLocalizedPath } = useLanguage();
  const isFr = lang === 'fr';
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const pageTitle = isFr
    ? 'Installation de Lumières de Noël dans les Arbres | Brandse'
    : 'Christmas Light Installation on Trees | West Island | Brandse';
  const pageDesc = isFr
    ? "Installation professionnelle de lumières de Noël dans les arbres jusqu'à 80 pi grâce à notre nacelle araignée. À partir de 349 $ — pose, entretien et enlèvement en janvier inclus. Ouest-de-l'Île et Vaudreuil-Soulanges."
    : 'Professional Christmas light installation on trees up to 80 ft with our spider lift. From $349 — install, in-season maintenance & January takedown included. West Island & Vaudreuil-Soulanges.';

  const included = [
    {
      en: 'Design consult from a photo of your tree — we recommend wrap style and light count',
      fr: 'Consultation design à partir d\'une photo de votre arbre — nous recommandons le style d\'enroulement et la quantité de lumières'
    },
    {
      en: 'Professional install by our tree crew — no damaged branches, no bark-cutting zip ties',
      fr: 'Installation professionnelle par notre équipe d\'arboriculture — aucune branche endommagée, aucune attache qui coupe l\'écorce'
    },
    {
      en: 'In-season maintenance — a section goes dark, we come fix it',
      fr: 'Entretien en saison — une section s\'éteint, nous venons la réparer'
    },
    {
      en: 'January takedown included in every install — no lights stuck in your tree until spring',
      fr: 'Enlèvement en janvier inclus dans chaque installation — pas de lumières coincées dans votre arbre jusqu\'au printemps'
    },
    {
      en: 'Your lights or ours — we install customer-supplied strings, or supply commercial-grade LEDs built for Quebec winters (quoted per tree)',
      fr: 'Vos lumières ou les nôtres — nous installons vos guirlandes, ou fournissons des DEL de qualité commerciale conçues pour les hivers québécois (soumission par arbre)'
    },
  ];

  const steps = [
    {
      titleEn: 'Send a photo, get a quote',
      titleFr: 'Envoyez une photo, recevez une soumission',
      descEn: 'Snap your tree from the street, tell us roughly how tall it is, and we quote within 24 hours.',
      descFr: 'Photographiez votre arbre depuis la rue, indiquez sa hauteur approximative, et nous vous soumettons un prix en 24 heures.'
    },
    {
      titleEn: 'Install day (late Oct – early Dec)',
      titleFr: 'Installation (fin oct. – début déc.)',
      descEn: 'The spider lift sets up on your driveway or lawn — tracked, gate-friendly, zero lawn damage on frozen ground.',
      descFr: 'La nacelle araignée s\'installe dans votre entrée ou sur votre terrain — sur chenilles, passe par le portail, aucun dommage à la pelouse sur sol gelé.'
    },
    {
      titleEn: 'January takedown',
      titleFr: 'Enlèvement en janvier',
      descEn: 'We return, remove everything cleanly, and coil your lights for storage. Included, always.',
      descFr: 'Nous revenons, enlevons tout proprement et enroulons vos lumières pour l\'entreposage. Toujours inclus.'
    },
  ];

  const faqs = isFr
    ? [
        { q: 'Quand devrais-je réserver mon installation de lumières de Noël ?', a: 'Réservez en octobre. Les installations se déroulent de la fin octobre au début décembre, et le calendrier se remplit rapidement — les premiers réservés choisissent leurs dates.' },
        { q: 'Jusqu\'à quelle hauteur pouvez-vous illuminer un arbre ?', a: 'Jusqu\'à environ 80 pieds grâce à notre nacelle araignée CELA DT25 — des arbres qu\'aucune équipe avec échelle ne peut atteindre. C\'est notre spécialité : les grands épinettes, érables et pins de façade.' },
        { q: 'Fournissez-vous les lumières ?', a: 'Les deux options sont possibles. Nous installons vos guirlandes, ou nous fournissons des DEL de qualité commerciale conçues pour les hivers québécois — plus durables et couvertes par notre entretien en saison. La fourniture est soumissionnée par arbre.' },
        { q: 'L\'enlèvement est-il inclus ?', a: 'Oui. Chaque installation inclut l\'enlèvement en janvier et les réparations en saison. Vos lumières ne resteront jamais coincées dans un arbre de 60 pieds en février.' },
        { q: 'Combien ça coûte ?', a: 'À partir de 349 $ pour un petit arbre avec vos lumières, incluant l\'installation, l\'entretien en saison et l\'enlèvement en janvier. Les grands arbres nécessitant la nacelle et la fourniture de lumières commerciales sont soumissionnés par arbre — soumission gratuite à partir d\'une photo.' },
      ]
    : [
        { q: 'When should I book my Christmas light installation?', a: 'Book in October. Installs run from late October to early December, and the calendar fills fast — early bookings pick their dates.' },
        { q: 'How tall a tree can you light?', a: 'Up to about 80 feet with our CELA DT25 spider lift — trees no ladder crew can reach. That\'s our specialty: the big front-yard spruces, maples, and pines.' },
        { q: 'Do you supply the lights?', a: 'Both options work. We install your own strings, or we supply commercial-grade LEDs built for Quebec winters — longer-lasting and covered by our in-season maintenance. Supplied lights are quoted per tree.' },
        { q: 'Is takedown included?', a: 'Yes. Every install includes January takedown and in-season fixes. Your lights will never be stuck in a 60-foot tree in February.' },
        { q: 'How much does it cost?', a: 'From $349 for a small tree using your lights, including install, in-season maintenance, and January takedown. Larger spider-lift trees and commercial-grade light supply are quoted per tree — free quote from a photo.' },
      ];

  const path = getLocalizedPath('/christmas-lights');

  const serviceSchema = buildServiceSchema({
    name: isFr ? 'Installation de lumières de Noël dans les arbres' : 'Christmas Light Installation on Trees',
    description: pageDesc,
    slug: path,
    dateModified: pageDates['/christmas-lights'],
  });

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <SEOHead title={pageTitle} description={pageDesc} path={path} lang={lang} />
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </Head>

      <Header />
      <Breadcrumbs items={[
        { name: isFr ? 'Accueil' : 'Home', href: getLocalizedPath('/') },
        { name: 'Services', href: getLocalizedPath('/services') },
        { name: isFr ? 'Lumières de Noël' : 'Christmas Lights' }
      ]} />

      <main>
        {/* Hero */}
        <section className="relative flex items-center justify-center min-h-[60vh]">
          <Image
            src="/gallery/spider-lift.jpg"
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gray-900/80" />
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
            <nav className="flex items-center justify-center gap-2 text-sm text-gray-300 mb-6">
              <Link href={getLocalizedPath('/')} className="hover:text-white">{isFr ? 'Accueil' : 'Home'}</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href={getLocalizedPath('/services')} className="hover:text-white">Services</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">{isFr ? 'Lumières de Noël' : 'Christmas Lights'}</span>
            </nav>
            <div className="inline-flex items-center bg-amber-400 text-gray-900 px-4 py-1.5 rounded-full mb-6 font-bold text-sm uppercase tracking-wider">
              <Sparkles className="w-4 h-4 mr-2" />
              {isFr ? 'Nouveau pour 2026 · À partir de 349 $' : 'New for 2026 · From $349'}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              {isFr ? 'On illumine les arbres que personne d\'autre ne peut atteindre' : 'We Light the Trees Nobody Else Can Reach'}
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              {isFr
                ? 'Installation professionnelle de lumières de Noël dans les arbres jusqu\'à 80 pieds grâce à notre nacelle araignée — pose, entretien en saison et enlèvement en janvier inclus.'
                : 'Professional Christmas light installation on trees up to 80 feet with our spider lift — install, in-season maintenance, and January takedown all included.'}
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
              {/* Left: why a tree company */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {isFr ? 'Pourquoi une entreprise d\'arboriculture ?' : 'Why Hire a Tree Company for This?'}
                </h2>
                <div className="text-lg text-gray-600 space-y-4">
                  <p>
                    {isFr
                      ? 'La plupart des installateurs de lumières travaillent avec des échelles — ils décorent des corniches et de petits arbustes. Le grand épinette ou l\'érable majestueux devant votre maison ? Hors de leur portée.'
                      : 'Most light installers work off ladders — they decorate rooflines and small shrubs. The towering spruce or majestic maple in your front yard? Out of their reach.'}
                  </p>
                  <p>
                    {isFr
                      ? 'Notre nacelle araignée CELA DT25 atteint 80 pieds, passe par un portail de jardin et roule sur votre pelouse gelée sans laisser de trace. Et parce que nous sommes arboriculteurs, nous enroulons les lumières sans endommager les branches ni l\'écorce — votre arbre reste en santé au printemps.'
                      : 'Our CELA DT25 spider lift reaches 80 feet, fits through a garden gate, and rolls over your frozen lawn without a trace. And because we\'re arborists, we wrap lights without damaging branches or bark — your tree comes out of winter healthy.'}
                  </p>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  {isFr ? 'Chaque installation comprend :' : 'Every install includes:'}
                </h3>
                <ul className="space-y-4">
                  {included.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-[#2D5016] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{isFr ? item.fr : item.en}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: process */}
              <div className="bg-gray-50 p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  {isFr ? 'Comment ça fonctionne' : 'How It Works'}
                </h2>
                <div className="space-y-8">
                  {steps.map((step, i) => (
                    <div key={i} className="flex">
                      <div className="flex-shrink-0 h-12 w-12 rounded-full bg-[#2D5016] text-white flex items-center justify-center font-bold text-xl shadow-md">
                        {i + 1}
                      </div>
                      <div className="ml-5">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{isFr ? step.titleFr : step.titleEn}</h3>
                        <p className="text-gray-600">{isFr ? step.descFr : step.descEn}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-8 text-sm font-semibold text-[#2D5016] bg-green-50 border border-green-200 rounded-lg px-4 py-3">
                  {isFr
                    ? 'À partir de 349 $ — petit arbre, vos lumières, enlèvement inclus. Grands arbres et lumières fournies : soumission par arbre.'
                    : 'From $349 — small tree, your lights, takedown included. Big trees and supplied lights: quoted per tree.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">FAQ</h2>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left font-semibold text-gray-900"
                  >
                    {f.q}
                    <ChevronDown className={`w-5 h-5 text-gray-500 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {/* Answer stays in the DOM (schema/visible-content parity). */}
                  <p className={`px-5 pb-5 text-gray-600 leading-relaxed ${openFaq === i ? '' : 'hidden'}`}>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#2D5016]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Sparkles className="h-12 w-12 text-amber-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {isFr ? 'Octobre se remplit vite — réservez votre date' : 'October Books Out Fast — Claim Your Install Date'}
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              {isFr
                ? 'Envoyez-nous une photo de votre arbre et recevez votre soumission en 24 heures.'
                : 'Send us a photo of your tree and get your quote within 24 hours.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={isFr ? '/fr/devis-gratuit' : '/free-estimate'} className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-gray-900 text-lg font-bold px-8 py-4 rounded-xl transition-colors shadow-xl">
                {t.common.getFreeQuote} <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:4383655410" className="inline-flex items-center justify-center bg-white/10 border-2 border-white text-white hover:bg-white hover:text-[#2D5016] text-lg px-8 py-4 rounded-xl font-semibold transition-colors">
                <Phone className="mr-2 h-5 w-5" />(438) 365-5410
              </a>
            </div>
          </div>
        </section>
      </main>

      <LastUpdated date={pageDates['/christmas-lights']} lang={lang} />
      <Footer />
    </>
  );
}
