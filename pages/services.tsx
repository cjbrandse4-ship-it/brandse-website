import Link from 'next/link';
import { Trash2, Disc, Scissors, Leaf, Sprout, AlertTriangle, Phone, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../lib/useLanguage';
import { siteConfig } from '../lib/seo';
import PageHero from '../components/PageHero';

export default function ServicesPage() {
  const { lang, t, getLocalizedPath } = useLanguage();

  const services = [
    { icon: Trash2, key: 'treeRemoval', href: '/tree-removal' },
    { icon: Disc, key: 'stumpGrinding', href: '/stump-grinding' },
    { icon: Scissors, key: 'treeTrimming', href: '/tree-trimming' },
    { icon: Leaf, key: 'hedgeTrimming', href: '/hedge-trimming' },
    { icon: Sprout, key: 'treePlanting', href: '/tree-planting' },
    { icon: AlertTriangle, key: 'emergency', href: '/emergency-services' },
  ];

  const stats = [
    { val: '15+', title: t.servicesPage.stat1Title, desc: t.servicesPage.stat1Desc },
    { val: '100%', title: t.servicesPage.stat2Title, desc: t.servicesPage.stat2Desc },
    { val: '24/7', title: t.servicesPage.stat3Title, desc: t.servicesPage.stat3Desc },
    { val: '12', title: t.servicesPage.stat4Title, desc: t.servicesPage.stat4Desc },
  ];

  return (
    <>
      <SEOHead
        title={t.servicesPage.metaTitle}
        description={t.servicesPage.metaDesc}
        path={lang === 'fr' ? '/fr/services' : '/services'}
        lang={lang}
      />
      <Header />

      <PageHero title={t.servicesPage.heroTitle} subtitle={t.servicesPage.heroSubtitle} />

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => {
              const svc = (t.services as any)[s.key];
              return (
                <div key={s.key} className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow group">
                  <div className="w-14 h-14 mb-6 bg-[#2D5016]/10 rounded-lg flex items-center justify-center">
                    <s.icon className="w-7 h-7 text-[#2D5016]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{svc?.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{svc?.desc}</p>
                  <Link
                    href={getLocalizedPath(s.href)}
                    className="inline-flex items-center gap-2 text-[#2D5016] font-medium hover:gap-3 transition-all"
                  >
                    {t.common.learnMore} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            {t.servicesPage.whyChooseTitle}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {t.servicesPage.whyChooseDesc}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="text-4xl font-bold text-[#2D5016] mb-2">{stat.val}</div>
                <div className="font-semibold text-gray-900 mb-1">{stat.title}</div>
                <div className="text-sm text-gray-500">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#2D5016]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.servicesPage.ctaTitle}</h2>
          <p className="text-lg text-green-100 mb-8">{t.servicesPage.ctaDesc}</p>
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
