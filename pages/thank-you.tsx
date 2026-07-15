import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, Phone, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../lib/useLanguage';
import { siteConfig } from '../lib/seo';

// Conversion-confirmation page for the /free-estimate landing page. The URL
// hit IS the conversion signal — Google Ads should be configured to track
// `/thank-you` as a destination conversion in addition to the form-submit
// gtag event fired client-side.
const COPY = {
  en: {
    metaTitle: 'Thanks! We got your quote request | Brandse',
    metaDesc: 'Your free quote request has been received. We will call you back within 2 hours during business hours.',
    heading: 'Thanks! We got your quote request.',
    body: 'We\'ll call you back at the number you provided within 2 hours during business hours (Monday–Friday, 8am–6pm). Outside those hours we\'ll get back to you first thing in the morning.',
    urgentTitle: 'Need something urgently?',
    urgentBody: 'Call us now — we answer 24/7 for emergencies (storm damage, fallen trees, hazardous limbs).',
    callButton: 'Call (438) 365-5410',
    backHome: 'Back to home',
  },
  fr: {
    metaTitle: 'Merci ! Demande de devis reçue | Brandse',
    metaDesc: 'Votre demande de devis a été reçue. Nous vous rappelons en moins de 2 heures pendant les heures d\'ouverture.',
    heading: 'Merci ! Nous avons reçu votre demande.',
    body: 'Nous vous rappelons au numéro fourni en moins de 2 heures pendant les heures d\'ouverture (lundi–vendredi, 8h–18h). En dehors de ces heures, nous vous contactons dès le lendemain matin.',
    urgentTitle: 'Besoin urgent ?',
    urgentBody: 'Appelez-nous maintenant — nous répondons 24/7 pour les urgences (dommages de tempête, arbres tombés, branches dangereuses).',
    callButton: 'Appeler le (438) 365-5410',
    backHome: 'Retour à l\'accueil',
  },
} as const;

export default function ThankYouPage() {
  const { lang, getLocalizedPath } = useLanguage();
  const isFr = lang === 'fr';
  const c = COPY[lang];
  const path = isFr ? '/fr/merci' : '/thank-you';
  const canonical = `${siteConfig.domain}${path}`;

  // Phone taps are tracked site-wide by the tel: listener in pages/_app.tsx.

  return (
    <>
      <Head>
        <title>{c.metaTitle}</title>
        <meta name="description" content={c.metaDesc} />
        {/* noindex — this is a post-conversion confirmation page, not a public destination. */}
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href={canonical} />
      </Head>

      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center">
          <div className="flex items-center gap-2">
            <Image src="/logo.jpg" alt="Brandse" width={40} height={40} priority className="h-10 w-10 rounded-full object-cover" />
            <span className="font-bold text-gray-900 text-sm leading-tight">
              Service d&apos;Arbres<br />Brandse Inc
            </span>
          </div>
        </div>
      </header>

      <main className="min-h-[70vh] bg-gray-50 py-14 md:py-20">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{c.heading}</h1>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">{c.body}</p>

            <div className="mt-8 p-5 bg-[#f5f3ed] rounded-xl text-left">
              <h2 className="text-base font-bold text-gray-900 mb-1">{c.urgentTitle}</h2>
              <p className="text-sm text-gray-700 mb-4">{c.urgentBody}</p>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#2D5016] text-white rounded-lg font-bold hover:bg-[#3a6b1d] transition-colors min-h-[48px]"
              >
                <Phone className="w-5 h-5" /> {c.callButton}
              </a>
            </div>

            <div className="mt-8">
              <Link
                href={getLocalizedPath('/')}
                className="inline-flex items-center gap-1.5 text-gray-600 hover:text-[#2D5016] text-sm"
              >
                <ArrowLeft className="w-4 h-4" /> {c.backHome}
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
