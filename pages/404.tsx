import Link from 'next/link';
import Head from 'next/head';
import { TreePine, Home, Phone } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../lib/useLanguage';
import { siteConfig } from '../lib/seo';

export default function Custom404() {
  const { lang, getLocalizedPath } = useLanguage();

  const title = lang === 'fr' ? 'Page introuvable' : 'Page Not Found';
  const subtitle = lang === 'fr'
    ? "Oups! La page que vous cherchez n'existe pas ou a ete deplacee."
    : "Oops! The page you're looking for doesn't exist or has been moved.";
  const homeLabel = lang === 'fr' ? 'Retour a l\'accueil' : 'Back to Home';
  const contactLabel = lang === 'fr' ? 'Contactez-nous' : 'Contact Us';
  const callLabel = lang === 'fr' ? 'Appelez-nous' : 'Call Us';

  // Inline minimal head for 404 — intentionally not via SEOHead, which would
  // emit a self-canonical pointing at the missing URL. 404 pages should be
  // noindex; canonical/og are not appropriate.
  return (
    <>
      <Head>
        <title>{`${title} | ${siteConfig.name}`}</title>
        <meta name="robots" content="noindex, follow" />
      </Head>
      <Header />

      <main id="main-content" className="py-32 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <TreePine className="w-16 h-16 text-[#2D5016] mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">{title}</h2>
          <p className="text-gray-500 text-lg mb-10 max-w-lg mx-auto">{subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={getLocalizedPath('/')} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2D5016] text-white rounded-lg font-semibold hover:bg-[#3a6b1d] transition-colors">
              <Home className="w-5 h-5" /> {homeLabel}
            </Link>
            <Link href={getLocalizedPath('/contact')} className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#2D5016] text-[#2D5016] rounded-lg font-semibold hover:bg-[#2D5016] hover:text-white transition-colors">
              <Phone className="w-5 h-5" /> {contactLabel}
            </Link>
          </div>

          <p className="mt-8 text-gray-400 text-sm">
            {callLabel}: <a href={`tel:${siteConfig.contact.phone}`} className="text-[#2D5016] font-medium hover:underline">{siteConfig.contact.phoneDisplay}</a>
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
