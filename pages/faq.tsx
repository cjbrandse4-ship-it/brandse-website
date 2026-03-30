import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Search, ChevronDown, Phone, Mail, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../lib/useLanguage';
import { siteConfig } from '../lib/seo';

export default function FAQPage() {
  const { lang, t, getLocalizedPath } = useLanguage();
  const [search, setSearch] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const questions = t.faq.questions as { q: string; a: string }[];

  const filtered = questions.filter(
    (item) =>
      item.q.toLowerCase().includes(search.toLowerCase()) ||
      item.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <SEOHead
        title={t.faq.metaTitle}
        description={t.faq.metaDesc}
        path={lang === 'fr' ? '/fr/faq' : '/faq'}
        lang={lang}
      />
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": questions.map((item) => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.a
            }
          }))
        }) }} />
      </Head>
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#2D5016] to-[#1a3a0a] py-20">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.faq.heroTitle}</h1>
          <p className="text-lg text-green-100 max-w-3xl mx-auto">{t.faq.heroSubtitle}</p>
        </div>
      </section>

      {/* Search + Accordion */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          {/* Search */}
          <div className="relative mb-10">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setOpenIndex(null);
              }}
              placeholder={t.faq.searchPlaceholder}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2D5016] focus:border-transparent text-lg"
            />
          </div>

          {/* Questions */}
          {filtered.length === 0 ? (
            <p className="text-center text-gray-500 py-8">{t.faq.noResults}</p>
          ) : (
            <div className="space-y-3">
              {filtered.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                  <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900 pr-4">{item.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div className={`grid transition-all duration-200 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                      <div className="overflow-hidden">
                        <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                          {item.a}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.faq.ctaTitle}</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">{t.faq.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#2D5016] text-white rounded-lg font-semibold text-lg hover:bg-[#3a6b1d] transition-colors"
            >
              <Phone className="w-5 h-5" /> {siteConfig.contact.phoneDisplay}
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#2D5016] text-[#2D5016] rounded-lg font-semibold text-lg hover:bg-[#2D5016]/5 transition-colors"
            >
              <Mail className="w-5 h-5" /> {siteConfig.contact.email}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
