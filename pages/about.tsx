import Link from 'next/link';
import Head from 'next/head';
import { Shield, Award, Timer, CheckCircle, Heart, Users, Target, Phone, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../lib/useLanguage';
import { siteConfig } from '../lib/seo';

export default function AboutPage() {
  const { lang, t, getLocalizedPath } = useLanguage();

  const valueIcons = [Shield, Heart, Users, Target];

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Service d'Arbres Brandse Inc",
    "url": "https://www.servicedarbresbrandse.com",
    "logo": "https://www.servicedarbresbrandse.com/logo-schema.png",
    "foundingDate": "2010",
    "founder": { "@type": "Person", "name": "John Brandse" },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Montreal",
      "addressRegion": "QC",
      "addressCountry": "CA"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-438-365-5410",
      "contactType": "customer service",
      "availableLanguage": ["en", "fr"]
    },
    "sameAs": [
      "https://www.facebook.com/brandsetreeservice",
      "https://www.instagram.com/brandsetreeservice"
    ]
  };

  return (
    <>
      <SEOHead
        title={t.about.metaTitle}
        description={t.about.metaDesc}
        path={lang === 'fr' ? '/fr/about' : '/about'}
        lang={lang}
      />
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </Head>
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#2D5016] to-[#1a3a0a] py-20">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.about.heroTitle}</h1>
          <p className="text-lg text-green-100 max-w-3xl mx-auto">{t.about.heroSubtitle}</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t.about.storyTitle}</h2>
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            <p>{t.about.story1}</p>
            <p>{t.about.story2}</p>
            <p>{t.about.story3}</p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.about.missionTitle}</h2>
          <p className="text-lg text-gray-600 leading-relaxed italic border-l-4 border-[#2D5016] pl-6 text-left">
            {t.about.missionDesc}
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">{t.about.valuesTitle}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.about.values.map((value: string, i: number) => {
              const Icon = valueIcons[i];
              return (
                <div key={i} className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 shrink-0 bg-[#2D5016]/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#2D5016]" />
                  </div>
                  <p className="text-gray-700 font-medium">{value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">{t.about.whyChooseTitle}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.about.whyChoose.map((item: { title: string; desc: string }, i: number) => {
              const icons = [Shield, Award, Timer];
              const Icon = icons[i];
              return (
                <div key={i} className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-[#2D5016]/10 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-[#2D5016]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.about.certTitle}</h2>
          <p className="text-gray-600 mb-10">{t.about.certDesc}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {t.about.certs.map((cert: string, i: number) => (
              <div key={i} className="flex items-center gap-2 px-5 py-3 bg-[#2D5016]/5 rounded-full border border-[#2D5016]/20">
                <CheckCircle className="w-4 h-4 text-[#2D5016]" />
                <span className="text-sm font-medium text-gray-700">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">{t.about.teamTitle}</h2>
          <p className="text-gray-600 mb-6 text-center max-w-2xl mx-auto">{t.about.teamDesc}</p>
          <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">{t.about.teamText}</p>
          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
            {t.about.teamStats.map((stat: { val: string; label: string }, i: number) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-[#2D5016]">{stat.val}</div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">{t.about.guaranteeTitle}</h2>
          <p className="text-gray-600 leading-relaxed text-lg text-center mb-12">{t.about.guaranteeDesc}</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: t.about.guarantee1Title, desc: t.about.guarantee1Desc },
              { title: t.about.guarantee2Title, desc: t.about.guarantee2Desc },
              { title: t.about.guarantee3Title, desc: t.about.guarantee3Desc },
            ].map((g, i) => (
              <div key={i} className="text-center p-6 bg-[#2D5016]/5 rounded-xl">
                <CheckCircle className="w-8 h-8 text-[#2D5016] mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-1">{g.title}</h3>
                <p className="text-sm text-gray-600">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#2D5016]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.about.ctaTitle}</h2>
          <p className="text-lg text-green-100 mb-8">{t.about.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={getLocalizedPath('/contact')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#2D5016] rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              {t.common.getFreeQuote} <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5" /> {siteConfig.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
