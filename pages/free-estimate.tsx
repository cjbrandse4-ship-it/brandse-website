import { useState, FormEvent } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  Phone, Star, ShieldCheck, TreeDeciduous, Home as HomeIcon, Zap,
  CheckCircle, XCircle, ArrowRight, Clock, ChevronDown, MapPin, Mail,
} from 'lucide-react';
import { useLanguage } from '../lib/useLanguage';
import { siteConfig } from '../lib/seo';

// ──────────────────────────────────────────────────────────────────────────
// Google Ads conversion tracking
// ──────────────────────────────────────────────────────────────────────────
// The site-wide gtag is loaded in pages/_document.tsx with AW-16516759047.
// TODO: Connor — create dedicated Google Ads conversion actions for the
// free-estimate landing page (one for form submissions, one for phone clicks)
// so paid-traffic leads can be distinguished from organic. Paste the labels
// below. Until then we fall back to the existing form-conversion label
// (mXt_CJjNyaMZEIf85sM9) for form submissions, and phone clicks are
// log-only.
const GADS_ID = siteConfig.gads; // 'AW-16516759047'
const FORM_CONVERSION_LABEL: string | null = 'mXt_CJjNyaMZEIf85sM9'; // TODO: Connor swap to a landing-page-specific label
const PHONE_CONVERSION_LABEL: string | null = null;                   // TODO: Connor paste phone-call conversion label
// Estimated revenue per lead: average job $2,500 × ~65% close rate ≈ $1,625 CAD.
const CONVERSION_VALUE = 1625.0;
const CONVERSION_CURRENCY = 'CAD';

function fireConversion(label: string | null, eventName: string, extra: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return;
  const payload = { event: eventName, label, value: CONVERSION_VALUE, currency: CONVERSION_CURRENCY, ...extra };
  // eslint-disable-next-line no-console
  console.log('[Ads conversion]', payload);
  const gtag = (window as any).gtag;
  if (!gtag) return;
  if (label) {
    gtag('event', 'conversion', {
      send_to: `${GADS_ID}/${label}`,
      value: CONVERSION_VALUE,
      currency: CONVERSION_CURRENCY,
    });
  }
  // Also fire a GA4 event so the conversion is visible in Analytics regardless
  // of whether the Ads label is wired up yet.
  gtag('event', eventName, extra);
}

// ──────────────────────────────────────────────────────────────────────────
// Copy — kept inline (not in data/translations.ts) so this paid-traffic
// landing page can be iterated on for CRO without touching shared site copy.
// ──────────────────────────────────────────────────────────────────────────
const SERVICE_OPTIONS = [
  { value: 'tree-removal',   en: 'Tree Removal',         fr: 'Abattage d\'arbres' },
  { value: 'stump-grinding', en: 'Stump Grinding',       fr: 'Essouchage' },
  { value: 'pruning',        en: 'Pruning & Trimming',   fr: 'Émondage et élagage' },
  { value: 'hedge-trimming', en: 'Hedge Trimming',       fr: 'Taille de haies' },
  { value: 'emergency',      en: 'Emergency',            fr: 'Urgence' },
  { value: 'other',          en: 'Other',                fr: 'Autre' },
];

const SERVICE_AREAS = [
  'Saint-Lazare', 'Pointe-Claire', 'Hudson', 'Beaconsfield',
  'Vaudreuil-Dorion', 'Kirkland', 'Dollard-des-Ormeaux', 'Dorval',
  'Senneville', "Baie-d'Urfé", 'Île-Perrot', 'Pincourt',
];

const copy = {
  en: {
    metaTitle: 'Free Tree Service Quote | West Island & Vaudreuil | Brandse',
    metaDesc: 'Free quote in 24 hours. Tree removal, stump grinding, pruning. Family-owned, fully insured. Serving West Island Montreal & Vaudreuil-Soulanges. Call (438) 365-5410.',
    langToggle: 'FR',
    skipToForm: 'Skip to quote form',
    heroHeadline: 'Tree Removal in West Island & Vaudreuil-Soulanges',
    heroSub: 'Free quote in 24 hours · Family-owned · Fully insured',
    formTitle: 'Get your free quote',
    formIntro: 'Tell us about your tree — we\'ll call you back in under 2 hours.',
    nameLabel: 'Your name',
    namePlaceholder: 'First and last name',
    emailLabel: 'Email',
    emailPlaceholder: 'your.email@example.com',
    emailRequired: 'Please enter your email',
    emailInvalid: 'Please enter a valid email',
    phoneLabel: 'Phone number',
    phonePlaceholder: '(438) 555-0123',
    phoneInvalid: 'Please enter a valid Canadian phone number',
    cityLabel: 'City',
    cityPlaceholder: 'Select your city',
    cityRequired: 'Please pick a city',
    serviceLabel: 'Service needed',
    servicePlaceholder: 'Select a service',
    serviceRequired: 'Please pick a service',
    addDetails: 'Add details (optional)',
    hideDetails: 'Hide details',
    messagePlaceholder: 'Anything else we should know? (size of tree, access, urgency, photos can come by text)',
    nameRequired: 'Please enter your name',
    submit: 'Get My Free Quote',
    submitting: 'Sending…',
    callbackPromise: 'We\'ll call you back within 2 hours during business hours.',
    orCall: 'Or call now:',
    successTitle: 'Sent!',
    successDesc: 'Redirecting to confirmation…',
    errorTitle: 'Something went wrong',
    errorDesc: 'Please try calling us directly at (438) 365-5410.',
    // Trust row
    trustGoogle: `${siteConfig.rating.value} on Google`,
    trustGoogleSub: `${siteConfig.rating.count} reviews`,
    trustInsured: 'Fully Insured & CNESST',
    trustCertified: 'Certified Arborists',
    trustLocal: 'Local & Family-Owned',
    trustEmergency: '24/7 Emergency Service',
    // Services snapshot
    servicesHeading: 'What we do',
    services: [
      { title: 'Tree Removal',       desc: 'Safe removal of trees of any size, including hazardous and tight-access jobs.' },
      { title: 'Stump Grinding',     desc: 'Complete stump removal below grade — leaves your yard ready to landscape.' },
      { title: 'Pruning & Trimming', desc: 'Healthier trees, better shape, less risk in a storm. Crown raising, thinning, deadwood.' },
    ],
    servicesCta: 'Get a quote',
    // Gallery
    galleryHeading: 'Recent work in the neighbourhood',
    // Testimonials
    testimonialsHeading: 'What your neighbours are saying',
    testimonials: [
      { quote: 'Excellent service. They removed a large oak from the back yard quickly and safely. Crew was professional and cleaned up perfectly.', name: 'Marie D.', city: 'Pointe-Claire' },
      { quote: 'Called them after a storm took down a tree on the driveway. They were there within 2 hours and had it cleared the same day.', name: 'John S.', city: 'Hudson' },
      { quote: 'Punctual, efficient, and the price came in exactly where they quoted. Already booked them again for the front yard cedars.', name: 'Sophie T.', city: 'Beaconsfield' },
    ],
    // Service area
    areasHeading: 'Areas we serve',
    areasIntro: 'Family-owned and based in the West Island.',
    areasFallback: 'Don\'t see your city? Call us anyway — if we can get there, we\'ll help.',
    // FAQ
    faqHeading: 'Common questions',
    faqs: [
      { q: 'How fast can you come out?',
        a: 'We respond to quote requests within 2 hours during business hours, and can often book service within the same week. For emergencies (storm damage, fallen trees), we\'re available 24/7.' },
      { q: 'Are you insured?',
        a: 'Yes — we carry full liability and CNESST workers\' compensation insurance. We\'ll provide proof on request before any work begins.' },
      { q: 'Do you handle emergencies?',
        a: 'Yes, 24/7. Call (438) 365-5410 anytime — storm damage, fallen trees, hazardous limbs.' },
      { q: 'How much does tree removal cost?',
        a: 'Most residential tree removals fall in the $800-$3,500 range depending on size, access, and complexity. We always provide a free, no-obligation written quote before starting.' },
      { q: 'Do you grind the stump too?',
        a: 'Stump grinding is a separate service but we can bundle it with removal. We\'ll quote both so you can decide.' },
    ],
    // Final CTA
    finalHeading: 'Ready for a free quote?',
    finalSub: 'Two ways to get started:',
    finalCall: 'Call (438) 365-5410',
    finalForm: 'Get Quote Online',
    // Sticky mobile bar
    barCall: 'Call',
    barForm: 'Get Quote',
    // Footer
    footerCopyright: '© 2026 Service d\'Arbres Brandse Inc.',
    footerCookies: 'Cookie Policy',
  },
  fr: {
    metaTitle: 'Devis Gratuit pour Services d\'Arbres | Ouest de l\'Île & Vaudreuil | Brandse',
    metaDesc: 'Devis gratuit en 24h. Abattage, essouchage, élagage. Entreprise familiale, entièrement assurée. Ouest de l\'Île et Vaudreuil-Soulanges. Appelez le (438) 365-5410.',
    langToggle: 'EN',
    skipToForm: 'Passer au formulaire',
    heroHeadline: 'Abattage d\'arbres dans l\'Ouest de l\'Île et Vaudreuil-Soulanges',
    heroSub: 'Devis gratuit en 24h · Entreprise familiale · Entièrement assuré',
    formTitle: 'Obtenez votre devis gratuit',
    formIntro: 'Parlez-nous de votre arbre — nous vous rappelons en moins de 2 heures.',
    nameLabel: 'Votre nom',
    namePlaceholder: 'Prénom et nom',
    emailLabel: 'Courriel',
    emailPlaceholder: 'votre.courriel@exemple.com',
    emailRequired: 'Veuillez entrer votre courriel',
    emailInvalid: 'Veuillez entrer un courriel valide',
    phoneLabel: 'Numéro de téléphone',
    phonePlaceholder: '(438) 555-0123',
    phoneInvalid: 'Veuillez entrer un numéro de téléphone canadien valide',
    cityLabel: 'Ville',
    cityPlaceholder: 'Sélectionnez votre ville',
    cityRequired: 'Veuillez choisir une ville',
    serviceLabel: 'Service requis',
    servicePlaceholder: 'Sélectionnez un service',
    serviceRequired: 'Veuillez choisir un service',
    addDetails: 'Ajouter des détails (optionnel)',
    hideDetails: 'Masquer les détails',
    messagePlaceholder: 'Autre chose à savoir? (taille de l\'arbre, accès, urgence — photos par texto possibles)',
    nameRequired: 'Veuillez entrer votre nom',
    submit: 'Obtenir mon devis gratuit',
    submitting: 'Envoi en cours…',
    callbackPromise: 'Nous vous rappelons dans les 2 heures pendant les heures d\'ouverture.',
    orCall: 'Ou appelez maintenant :',
    successTitle: 'Envoyé !',
    successDesc: 'Redirection vers la confirmation…',
    errorTitle: 'Une erreur est survenue',
    errorDesc: 'Veuillez nous appeler directement au (438) 365-5410.',
    trustGoogle: `${siteConfig.rating.value.replace('.', ',')} sur Google`,
    trustGoogleSub: `${siteConfig.rating.count} avis`,
    trustInsured: 'Entièrement assuré CNESST',
    trustCertified: 'Arboriculteurs certifiés',
    trustLocal: 'Entreprise locale et familiale',
    trustEmergency: 'Service d\'urgence 24/7',
    servicesHeading: 'Ce que nous faisons',
    services: [
      { title: 'Abattage d\'arbres',       desc: 'Abattage sécuritaire d\'arbres de toute taille, incluant les cas dangereux et accès difficiles.' },
      { title: 'Essouchage',               desc: 'Enlèvement complet des souches sous le niveau du sol — votre cour est prête à aménager.' },
      { title: 'Émondage et élagage',      desc: 'Des arbres en santé, mieux formés et plus résistants aux tempêtes. Éclaircissage, bois mort, levée de couronne.' },
    ],
    servicesCta: 'Demander un devis',
    galleryHeading: 'Travaux récents dans le quartier',
    testimonialsHeading: 'Ce que disent vos voisins',
    testimonials: [
      { quote: 'Excellent service. Ils ont enlevé un grand chêne dans la cour arrière rapidement et en toute sécurité. Équipe professionnelle et nettoyage impeccable.', name: 'Marie D.', city: 'Pointe-Claire' },
      { quote: 'Appelés après qu\'une tempête a fait tomber un arbre sur l\'entrée. Sur place en 2 heures et nettoyé la même journée.', name: 'John S.', city: 'Hudson' },
      { quote: 'Ponctuels, efficaces et le prix correspondait exactement au devis. Déjà rebookés pour les cèdres en avant.', name: 'Sophie T.', city: 'Beaconsfield' },
    ],
    areasHeading: 'Zones que nous desservons',
    areasIntro: 'Entreprise familiale basée dans l\'Ouest de l\'Île.',
    areasFallback: 'Votre ville n\'est pas listée ? Appelez quand même — si on peut s\'y rendre, on vous aide.',
    faqHeading: 'Questions fréquentes',
    faqs: [
      { q: 'À quelle vitesse pouvez-vous venir ?',
        a: 'Nous répondons aux demandes de devis en moins de 2 heures pendant les heures d\'ouverture, et pouvons souvent planifier le service la même semaine. Pour les urgences (dégâts de tempête, arbres tombés), nous sommes disponibles 24/7.' },
      { q: 'Êtes-vous assurés ?',
        a: 'Oui — nous avons une assurance responsabilité civile complète et une couverture CNESST. Sur demande, nous fournissons des preuves avant tout début de travaux.' },
      { q: 'Gérez-vous les urgences ?',
        a: 'Oui, 24/7. Appelez le (438) 365-5410 en tout temps — dommages de tempête, arbres tombés, branches dangereuses.' },
      { q: 'Combien coûte un abattage ?',
        a: 'La plupart des abattages résidentiels se situent entre 800 $ et 3 500 $ selon la taille, l\'accès et la complexité. Nous fournissons toujours un devis écrit gratuit et sans engagement avant de commencer.' },
      { q: 'Broyez-vous aussi la souche ?',
        a: 'L\'essouchage est un service séparé mais nous pouvons le combiner à l\'abattage. Nous chiffrons les deux pour vous laisser décider.' },
    ],
    finalHeading: 'Prêt pour un devis gratuit ?',
    finalSub: 'Deux façons de commencer :',
    finalCall: 'Appeler le (438) 365-5410',
    finalForm: 'Devis en ligne',
    barCall: 'Appeler',
    barForm: 'Devis',
    footerCopyright: '© 2026 Service d\'Arbres Brandse Inc.',
    footerCookies: 'Politique de cookies',
  },
} as const;

// ──────────────────────────────────────────────────────────────────────────
// Validation
// ──────────────────────────────────────────────────────────────────────────
// Canadian phone: accepts any 10-digit North American number, with or
// without country code, spaces, dashes, parens, or dots.
function isValidCanadianPhone(raw: string): boolean {
  const digits = raw.replace(/[^\d]/g, '');
  if (digits.length === 10) return /^[2-9]\d{9}$/.test(digits);
  if (digits.length === 11) return digits.startsWith('1') && /^1[2-9]\d{9}$/.test(digits);
  return false;
}

// ──────────────────────────────────────────────────────────────────────────
// Page
// ──────────────────────────────────────────────────────────────────────────
export default function FreeEstimatePage() {
  const router = useRouter();
  const { lang, toggleLangPath } = useLanguage();
  const c = copy[lang];
  const isFr = lang === 'fr';

  const path = isFr ? '/fr/devis-gratuit' : '/free-estimate';
  const altPath = isFr ? '/free-estimate' : '/fr/devis-gratuit';
  const canonical = `${siteConfig.domain}${path}`;
  const altUrl = `${siteConfig.domain}${altPath}`;

  const [form, setForm] = useState({ name: '', email: '', phone: '', city: '', service: '', message: '' });
  const [showMessage, setShowMessage] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string; city?: string; service?: string }>({});
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  function validate(): boolean {
    const next: typeof errors = {};
    if (!form.name.trim()) next.name = c.nameRequired;
    if (!form.email.trim()) next.email = c.emailRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = c.emailInvalid;
    if (!form.phone.trim() || !isValidCanadianPhone(form.phone)) next.phone = c.phoneInvalid;
    if (!form.city) next.city = c.cityRequired;
    if (!form.service) next.service = c.serviceRequired;
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    setStatus('idle');
    try {
      // Existing /api/contact (and the CRM lead-form endpoint behind it)
      // expects: name, email, phone, area, message. We send the same shape as
      // the main /contact form — service and a marketing source tag are
      // folded into `message` so we don't have to change the API or CRM.
      const serviceLabel = SERVICE_OPTIONS.find(s => s.value === form.service)?.[lang] || form.service;
      const composedMessage = [
        `Service: ${serviceLabel}`,
        `Source: free-estimate-page`,
        form.message.trim() ? `\nNotes from customer:\n${form.message.trim()}` : '',
      ].filter(Boolean).join('\n');

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          area: form.city,
          message: composedMessage,
        }),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      fireConversion(FORM_CONVERSION_LABEL, 'form_submit', {
        source: 'free-estimate-page',
        service: form.service,
        city: form.city,
      });
      const dest = isFr ? '/fr/merci' : '/thank-you';
      router.push(dest);
    } catch {
      setStatus('error');
    } finally {
      setSending(false);
    }
  }

  function handlePhoneClick(location: string) {
    fireConversion(PHONE_CONVERSION_LABEL, 'phone_call', { source: 'free-estimate-page', location });
  }

  // Clear inline error on the field when user starts typing/changing.
  function clearError(field: keyof typeof errors) {
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  }

  return (
    <>
      <Head>
        <title>{c.metaTitle}</title>
        <meta name="description" content={c.metaDesc} />
        {/* noindex — paid-traffic landing page only. */}
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="en-CA" href={`${siteConfig.domain}/free-estimate`} />
        <link rel="alternate" hrefLang="fr-CA" href={`${siteConfig.domain}/fr/devis-gratuit`} />
        <link rel="alternate" hrefLang="x-default" href={`${siteConfig.domain}/free-estimate`} />
        {/* Preload the hero image so LCP fires fast. Same hero asset as the
            main homepage so the LP feels visually continuous with the site. */}
        <link rel="preload" as="image" href="/og-image.jpg" />
      </Head>

      <a href="#quote-form" className="skip-link">{c.skipToForm}</a>

      {/* ─────────────────────────── Sticky Header ─────────────────────────── */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-3">
          {/* Logo — intentionally NOT a link (no exit paths on this LP). */}
          <div className="flex items-center gap-2 shrink-0">
            <Image src="/logo.jpg" alt="Brandse" width={40} height={40} priority className="h-10 w-10 rounded-full object-cover" />
            <span className="hidden sm:block font-bold text-gray-900 text-sm leading-tight">
              Service d&apos;Arbres<br/>Brandse Inc
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href={toggleLangPath()}
              className="text-gray-500 hover:text-gray-900 text-sm font-semibold min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label={isFr ? 'Switch to English' : 'Passer au français'}
            >
              {c.langToggle}
            </Link>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              onClick={() => handlePhoneClick('header')}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2.5 bg-[#2D5016] text-white rounded-lg font-semibold text-sm sm:text-base hover:bg-[#3a6b1d] transition-colors min-h-[44px]"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xs:inline sm:inline">{siteConfig.contact.phoneDisplay}</span>
              <span className="xs:hidden sm:hidden">{c.barCall}</span>
            </a>
          </div>
        </div>
      </header>

      <main id="main-content" className="pb-24 md:pb-0">

        {/* ─────────────────────────── Hero ─────────────────────────── */}
        <section className="relative isolate">
          {/* Background image + overlay (matches /index.tsx hero) */}
          <div className="absolute inset-0 -z-10">
            <Image
              src="/og-image.jpg"
              alt=""
              aria-hidden="true"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="max-w-7xl mx-auto px-4 pt-10 pb-12 md:pt-16 md:pb-20 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Headline */}
            <div className="text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                {c.heroHeadline}
              </h1>
              <p className="mt-4 text-lg md:text-xl text-white/90">
                {c.heroSub}
              </p>
              <div className="mt-6 hidden md:flex items-center gap-3 text-white/90">
                <div className="flex items-center gap-1">
                  {[0,1,2,3,4].map(i => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
                </div>
                <span className="text-sm">{c.trustGoogle} · {c.trustGoogleSub}</span>
              </div>
            </div>

            {/* Quote form */}
            <div id="quote-form" className="scroll-mt-24 bg-white rounded-2xl shadow-2xl p-5 sm:p-7">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{c.formTitle}</h2>
              <p className="text-sm text-gray-600 mt-1 mb-5">{c.formIntro}</p>

              {status === 'error' && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2" role="alert">
                  <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-red-800 text-sm">{c.errorTitle}</p>
                    <p className="text-red-700 text-sm">{c.errorDesc}</p>
                  </div>
                </div>
              )}

              {status === 'success' && (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-start gap-2" role="alert">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-green-800 text-sm">{c.successTitle}</p>
                    <p className="text-green-700 text-sm">{c.successDesc}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <FormField label={c.nameLabel} error={errors.name}>
                  <input
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => { setForm({ ...form, name: e.target.value }); clearError('name'); }}
                    placeholder={c.namePlaceholder}
                    className={inputClasses(!!errors.name)}
                  />
                </FormField>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField label={c.emailLabel} error={errors.email}>
                    <input
                      type="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => { setForm({ ...form, email: e.target.value }); clearError('email'); }}
                      placeholder={c.emailPlaceholder}
                      className={inputClasses(!!errors.email)}
                    />
                  </FormField>

                  <FormField label={c.phoneLabel} error={errors.phone}>
                    <input
                      type="tel"
                      required
                      inputMode="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) => { setForm({ ...form, phone: e.target.value }); clearError('phone'); }}
                      placeholder={c.phonePlaceholder}
                      className={inputClasses(!!errors.phone)}
                    />
                  </FormField>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField label={c.cityLabel} error={errors.city}>
                    <select
                      required
                      value={form.city}
                      onChange={(e) => { setForm({ ...form, city: e.target.value }); clearError('city'); }}
                      className={inputClasses(!!errors.city)}
                    >
                      <option value="">{c.cityPlaceholder}</option>
                      {SERVICE_AREAS.map(a => <option key={a} value={a}>{a}</option>)}
                    </select>
                  </FormField>

                  <FormField label={c.serviceLabel} error={errors.service}>
                    <select
                      required
                      value={form.service}
                      onChange={(e) => { setForm({ ...form, service: e.target.value }); clearError('service'); }}
                      className={inputClasses(!!errors.service)}
                    >
                      <option value="">{c.servicePlaceholder}</option>
                      {SERVICE_OPTIONS.map(o => <option key={o.value} value={o.value}>{o[lang]}</option>)}
                    </select>
                  </FormField>
                </div>

                {!showMessage ? (
                  <button
                    type="button"
                    onClick={() => setShowMessage(true)}
                    className="text-sm text-[#2D5016] font-medium hover:underline inline-flex items-center gap-1"
                  >
                    + {c.addDetails}
                  </button>
                ) : (
                  <div>
                    <button
                      type="button"
                      onClick={() => setShowMessage(false)}
                      className="text-xs text-gray-500 hover:underline mb-1"
                    >
                      − {c.hideDetails}
                    </button>
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder={c.messagePlaceholder}
                      className={inputClasses(false) + ' resize-none'}
                    />
                  </div>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#2D5016] text-white rounded-lg font-bold text-lg hover:bg-[#3a6b1d] transition-colors disabled:opacity-60 disabled:cursor-not-allowed min-h-[52px]"
                >
                  {sending ? c.submitting : <>{c.submit} <ArrowRight className="w-5 h-5" /></>}
                </button>

                <p className="flex items-center justify-center gap-1.5 text-xs text-gray-500">
                  <Clock className="w-3.5 h-3.5" /> {c.callbackPromise}
                </p>
              </form>

              <div className="mt-4 pt-4 border-t border-gray-100 text-center text-sm">
                <span className="text-gray-600">{c.orCall} </span>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  onClick={() => handlePhoneClick('hero-fallback')}
                  className="font-semibold text-[#2D5016] hover:underline"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────── Trust Row ─────────────────────────── */}
        <section className="bg-[#f5f3ed] border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-2">
              <TrustItem icon={<div className="flex"><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /></div>} title={c.trustGoogle} sub={c.trustGoogleSub} />
              <TrustItem icon={<ShieldCheck className="w-6 h-6 text-[#2D5016]" />} title={c.trustInsured} />
              <TrustItem icon={<TreeDeciduous className="w-6 h-6 text-[#2D5016]" />} title={c.trustCertified} />
              <TrustItem icon={<HomeIcon className="w-6 h-6 text-[#2D5016]" />} title={c.trustLocal} />
              <TrustItem icon={<Zap className="w-6 h-6 text-[#2D5016]" />} title={c.trustEmergency} />
            </div>
          </div>
        </section>

        {/* ─────────────────────────── Services Snapshot ─────────────────────────── */}
        <section className="py-14 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">{c.servicesHeading}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {c.services.map((s, i) => {
                const icons = [TreeDeciduous, ShieldCheck, TreeDeciduous];
                const Icon = icons[i];
                return (
                  <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-[#2D5016]/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#2D5016]" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                    <p className="text-sm text-gray-600 flex-1 mb-4">{s.desc}</p>
                    <a
                      href="#quote-form"
                      className="text-[#2D5016] font-semibold text-sm hover:underline inline-flex items-center gap-1"
                    >
                      {c.servicesCta} <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─────────────────────────── Recent Work / Gallery ─────────────────────────── */}
        <section className="py-14 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">{c.galleryHeading}</h2>
            {/* TODO: Connor — replace with real before/after photo pairs.
                Using single shots from /public/gallery as placeholders. */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GalleryCard
                src="/gallery/tree-removal-stone-house.jpg"
                alt={isFr ? 'Abattage d\'arbre — Vaudreuil-Dorion' : 'Tree removal — Vaudreuil-Dorion'}
                caption={isFr ? 'Abattage d\'arbre — Vaudreuil-Dorion, mai 2026' : 'Tree removal — Vaudreuil-Dorion, May 2026'}
              />
              <GalleryCard
                src="/gallery/stump-grinding.jpg"
                alt={isFr ? 'Essouchage — Hudson' : 'Stump grinding — Hudson'}
                caption={isFr ? 'Essouchage — Hudson, avril 2026' : 'Stump grinding — Hudson, April 2026'}
              />
              <GalleryCard
                src="/gallery/hedge-trimming.jpg"
                alt={isFr ? 'Élagage — Pointe-Claire' : 'Pruning — Pointe-Claire'}
                caption={isFr ? 'Émondage — Pointe-Claire, mars 2026' : 'Pruning — Pointe-Claire, March 2026'}
              />
            </div>
          </div>
        </section>

        {/* ─────────────────────────── Testimonials ─────────────────────────── */}
        <section className="py-14 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">{c.testimonialsHeading}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {c.testimonials.map((t, i) => (
                <figure key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <div className="flex gap-0.5 mb-3">
                    {[0,1,2,3,4].map(s => <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <blockquote className="text-gray-700 text-sm leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</blockquote>
                  <figcaption className="text-sm font-semibold text-gray-900">— {t.name}, {t.city}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────── Service Area ─────────────────────────── */}
        <section className="py-14 md:py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{c.areasHeading}</h2>
              <p className="text-gray-600 mt-2 text-sm">{c.areasIntro}</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-start gap-3 mb-5">
                <MapPin className="w-5 h-5 text-[#2D5016] shrink-0 mt-1" />
                <div className="flex flex-wrap gap-2">
                  {SERVICE_AREAS.map(a => (
                    <span key={a} className="inline-flex items-center px-3 py-1.5 bg-[#2D5016]/8 text-[#2D5016] rounded-full text-sm font-medium">
                      {a}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-600 italic">{c.areasFallback}</p>
            </div>
          </div>
        </section>

        {/* ─────────────────────────── FAQ ─────────────────────────── */}
        <section className="py-14 md:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">{c.faqHeading}</h2>
            <div className="space-y-3">
              {c.faqs.map((f, i) => (
                <div key={i} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-gray-100 transition-colors min-h-[56px]"
                  >
                    <span className="font-semibold text-gray-900 text-base">{f.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-gray-700 text-sm leading-relaxed">{f.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────── Final CTA ─────────────────────────── */}
        <section className="bg-[#f5f3ed] py-14 md:py-20">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">{c.finalHeading}</h2>
            <p className="text-gray-600 mt-3 mb-8">{c.finalSub}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                onClick={() => handlePhoneClick('final-cta')}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#2D5016] text-white rounded-lg font-bold text-base hover:bg-[#3a6b1d] transition-colors min-h-[52px] shadow-sm"
              >
                <Phone className="w-5 h-5" /> {c.finalCall}
              </a>
              <a
                href="#quote-form"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 border-2 border-[#2D5016] text-[#2D5016] rounded-lg font-bold text-base hover:bg-[#2D5016] hover:text-white transition-colors min-h-[52px]"
              >
                {c.finalForm} <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* ─────────────────────────── Minimal Footer ─────────────────────────── */}
        <footer className="bg-gray-900 text-gray-400 py-8 text-sm">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 justify-center sm:justify-start">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                onClick={() => handlePhoneClick('footer')}
                className="inline-flex items-center gap-1.5 text-white hover:text-[#7cb342] transition-colors"
              >
                <Phone className="w-4 h-4" /> {siteConfig.contact.phoneDisplay}
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" /> {siteConfig.contact.email}
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs justify-center sm:justify-end">
              <span>{c.footerCopyright}</span>
              <Link href={isFr ? '/fr/cookie-policy' : '/cookie-policy'} className="hover:text-white">{c.footerCookies}</Link>
            </div>
          </div>
        </footer>
      </main>

      {/* ─────────────────────────── Sticky Mobile Bottom Bar ─────────────────────────── */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 grid grid-cols-2 border-t border-gray-200 shadow-2xl">
        <a
          href={`tel:${siteConfig.contact.phone}`}
          onClick={() => handlePhoneClick('mobile-sticky')}
          className="flex items-center justify-center gap-2 py-3.5 bg-[#2D5016] text-white font-semibold min-h-[52px]"
        >
          <Phone className="w-5 h-5" /> {c.barCall}
        </a>
        <a
          href="#quote-form"
          className="flex items-center justify-center gap-2 py-3.5 bg-white text-[#2D5016] font-semibold border-l border-gray-200 min-h-[52px]"
        >
          {c.barForm} <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// Small inline components — kept in the same file because they are coupled
// to this LP's form and won't be reused elsewhere.
// ──────────────────────────────────────────────────────────────────────────
function FormField({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}

function inputClasses(hasError: boolean) {
  return [
    'w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-400 bg-white',
    'focus:outline-none focus:ring-2 focus:ring-[#2D5016] focus:border-transparent',
    'border',
    hasError ? 'border-red-400' : 'border-gray-300',
    'min-h-[48px]',
  ].join(' ');
}

function TrustItem({ icon, title, sub }: { icon: React.ReactNode; title: string; sub?: string }) {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3 text-center sm:text-left py-2">
      <div className="shrink-0">{icon}</div>
      <div className="leading-tight">
        <div className="font-bold text-gray-900 text-sm">{title}</div>
        {sub && <div className="text-xs text-gray-500">{sub}</div>}
      </div>
    </div>
  );
}

function GalleryCard({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm">
      <div className="relative aspect-[4/3]">
        <Image
          src={src}
          alt={alt}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <figcaption className="p-4 text-sm text-gray-700">{caption}</figcaption>
    </figure>
  );
}
