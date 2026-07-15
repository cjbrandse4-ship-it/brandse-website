import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { Phone, Shield, CheckCircle2, ChevronRight, ArrowRight, MoveUp } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import { useLanguage } from '../lib/useLanguage';
import { buildServiceSchema } from '../lib/seo';

export default function HardToReachPage() {
  const { lang, t, getLocalizedPath } = useLanguage();
  const isFr = lang === 'fr';

  const pageTitle = isFr
    ? "Abattage d'Arbres Difficiles d'Accès | Nacelle Araignée | Brandse"
    : "Hard-to-Reach Tree Removal | Spider Lift Access | Brandse";
  const pageDesc = isFr
    ? "Abattage et élagage d'arbres hauts ou difficiles d'accès grâce à notre nacelle araignée CELA DT25 (25 m). Accès par portail, chenilles à faible impact au sol. Soumission gratuite!"
    : "High and hard-to-reach tree removal and pruning with our CELA DT25 spider lift (25 m / 82 ft). Fits through garden gates, tracked for low ground impact. Free quote!";

  // Reasons a job needs the spider lift instead of climbing or a crane.
  const scenarios = [
    {
      en: 'Tall trees in tight backyards a bucket truck or crane cannot reach.',
      fr: "Grands arbres dans des cours arrière étroites qu'un camion-nacelle ou une grue ne peut atteindre."
    },
    {
      en: 'Dead or brittle trees that are unsafe to climb.',
      fr: 'Arbres morts ou cassants qu\'il est dangereux de grimper.'
    },
    {
      en: 'Work over pools, patios, fences, or delicate landscaping.',
      fr: 'Travail au-dessus de piscines, patios, clôtures ou aménagements délicats.'
    },
    {
      en: 'Limbs overhanging roofs, neighbours, or power lines.',
      fr: 'Branches surplombant les toits, les voisins ou les lignes électriques.'
    }
  ];

  // DT25 selling points — kept benefit-first, specs confirmed from the machine.
  const liftFeatures = [
    {
      titleEn: '82 ft (25 m) working height',
      titleFr: 'Hauteur de travail de 25 m (82 pi)',
      descEn: 'Access the crown of even the tallest West Island trees safely from the platform.',
      descFr: 'Accédez à la cime des plus grands arbres de l\'Ouest de l\'Île en toute sécurité depuis la plateforme.'
    },
    {
      titleEn: '40 ft (12 m) horizontal outreach',
      titleFr: 'Portée horizontale de 12 m (40 pi)',
      descEn: 'Work out over pools, roofs, and fences without repositioning the machine.',
      descFr: 'Travaillez au-dessus des piscines, toits et clôtures sans repositionner la machine.'
    },
    {
      titleEn: 'Fits through a garden gate',
      titleFr: 'Passe par un portail de jardin',
      descEn: 'The compact tracked base squeezes through narrow side accesses to reach the backyard.',
      descFr: 'La base compacte sur chenilles se faufile dans les accès étroits pour atteindre la cour arrière.'
    },
    {
      titleEn: 'Low ground pressure tracks',
      titleFr: 'Chenilles à faible pression au sol',
      descEn: 'Rubber crawler tracks protect your lawn, pavers, and soil — no heavy truck ruts.',
      descFr: 'Les chenilles en caoutchouc protègent votre pelouse, vos pavés et votre sol — aucune ornière de camion lourd.'
    },
  ];

  const relatedServices = [
    {
      href: '/tree-removal',
      titleEn: 'Tree Removal',
      titleFr: "Abattage d'arbres",
      descEn: 'Safe removal of hazardous, dead, or unwanted trees of any size.',
      descFr: "Abattage sécuritaire d'arbres dangereux, morts ou indésirables de toute taille."
    },
    {
      href: '/emergency-services',
      titleEn: 'Emergency Services',
      titleFr: "Service d'urgence",
      descEn: '24/7 response for storm-damaged and fallen trees.',
      descFr: 'Intervention 24/7 pour les arbres endommagés par les tempêtes et tombés.'
    }
  ];

  const serviceSchema = buildServiceSchema({
    name: isFr ? "Abattage d'arbres difficiles d'accès" : "Hard-to-Reach Tree Removal",
    description: isFr
      ? "Abattage et élagage d'arbres hauts ou difficiles d'accès avec une nacelle araignée CELA DT25 (25 m) dans l'Ouest de l'Île de Montréal."
      : "High and hard-to-reach tree removal and pruning using a CELA DT25 spider lift (25 m) in West Island Montreal.",
    slug: getLocalizedPath('/hard-to-reach-tree-removal'),
  });

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDesc}
        path={getLocalizedPath('/hard-to-reach-tree-removal')}
        lang={lang}
      />
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      </Head>

      <Header />
      <Breadcrumbs items={[
        { name: isFr ? 'Accueil' : 'Home', href: getLocalizedPath('/') },
        { name: 'Services', href: getLocalizedPath('/services') },
        { name: isFr ? "Arbres difficiles d'accès" : 'Hard-to-Reach Tree Removal' }
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
              <span className="text-white">{isFr ? "Arbres difficiles d'accès" : 'Hard-to-Reach'}</span>
            </nav>
            <div className="inline-flex items-center bg-[#2D5016]/30 text-white border border-[#2D5016]/60 px-4 py-1.5 rounded-full mb-6 font-semibold text-sm uppercase tracking-wider backdrop-blur-sm">
              <MoveUp className="w-4 h-4 mr-2" />
              {isFr ? 'Nacelle araignée CELA DT25' : 'CELA DT25 Spider Lift'}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              {isFr ? "Abattage d'Arbres Difficiles d'Accès" : 'Hard-to-Reach Tree Removal'}
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              {isFr
                ? "Arbres hauts, dangereux ou coincés dans une cour étroite ? Notre nacelle araignée atteint jusqu'à 25 m (82 pi), passe par un portail de jardin et protège votre terrain."
                : 'Tall, hazardous, or boxed into a tight backyard? Our spider lift reaches up to 25 m (82 ft), fits through a garden gate, and protects your property.'}
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
                  {isFr ? "Quand la nacelle araignée fait la différence" : 'When a Spider Lift Makes the Difference'}
                </h2>
                <div className="text-lg text-gray-600 space-y-4">
                  <p>
                    {isFr
                      ? "Certains arbres sont tout simplement trop hauts, trop fragiles ou trop enclavés pour être grimpés en toute sécurité — et une grue conventionnelle ne peut pas franchir un portail ni rouler sur une pelouse sans la détruire. C'est là qu'intervient notre nacelle araignée CELA DT25."
                      : 'Some trees are simply too tall, too brittle, or too boxed-in to climb safely — and a conventional crane can\'t fit through a gate or drive across a lawn without tearing it up. That\'s exactly where our CELA DT25 spider lift comes in.'}
                  </p>
                  <p>
                    {isFr
                      ? "Elle nous permet d'intervenir là où d'autres entreprises doivent refuser le travail, avec plus de sécurité pour nos arboriculteurs et moins de risques pour votre propriété."
                      : 'It lets us take on jobs other companies have to turn down — with more safety for our arborists and less risk to your property.'}
                  </p>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  {isFr ? 'Idéale pour :' : 'Ideal for:'}
                </h3>
                <ul className="space-y-4">
                  {scenarios.map((s, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-[#2D5016] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{isFr ? s.fr : s.en}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: The machine */}
              <div className="bg-gray-50 p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  {isFr ? 'Notre nacelle araignée CELA DT25' : 'Our CELA DT25 Spider Lift'}
                </h2>
                <div className="space-y-6">
                  {liftFeatures.map((f, i) => (
                    <div key={i} className="flex items-start">
                      <div className="bg-[#2D5016]/10 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                        <MoveUp className="h-5 w-5 text-[#2D5016]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{isFr ? f.titleFr : f.titleEn}</h3>
                        <p className="text-gray-600 text-sm">{isFr ? f.descFr : f.descEn}</p>
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
            <Shield className="h-12 w-12 text-white/80 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {isFr ? 'Un arbre que personne ne veut toucher ?' : 'Got a Tree No One Else Will Touch?'}
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              {isFr
                ? "Envoyez-nous une photo et nous vous dirons si notre nacelle araignée est la bonne solution — soumission gratuite."
                : 'Send us a photo and we\'ll tell you if our spider lift is the right solution — free quote.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={getLocalizedPath('/contact')} className="inline-flex items-center justify-center bg-white text-[#2D5016] hover:bg-gray-100 text-lg px-8 py-4 rounded-lg font-bold transition-colors shadow-xl">
                {t.common.getFreeQuote}
              </Link>
              <a href="tel:4383655410" className="inline-flex items-center justify-center bg-white/10 border-2 border-white text-white hover:bg-white hover:text-[#2D5016] text-lg px-8 py-4 rounded-lg font-semibold transition-colors">
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
