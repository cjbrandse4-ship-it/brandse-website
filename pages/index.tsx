import Link from 'next/link';
import { Shield, Award, Clock, MapPin, Star, Phone, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../lib/useLanguage';
import { siteConfig } from '../lib/seo';
import { testimonials } from '../data/testimonials';
import { locations } from '../data/locations';

export default function HomePage() {
  const { lang, t, getLocalizedPath } = useLanguage();

  const whyChoose = [
    { icon: Shield, title: t.home.whyChoose1Title, desc: t.home.whyChoose1Desc },
    { icon: Award, title: t.home.whyChoose2Title, desc: t.home.whyChoose2Desc },
    { icon: Clock, title: t.home.whyChoose3Title, desc: t.home.whyChoose3Desc },
  ];

  return (
    <>
      <SEOHead
        title={t.home.metaTitle}
        description={t.home.metaDesc}
        path={lang === 'fr' ? '/fr' : '/'}
        lang={lang}
      />
      <Header />

      {/* Hero */}
      <section className="relative min-h-[600px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${siteConfig.defaultImage})` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 py-24 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {t.home.heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10">
            {t.home.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={getLocalizedPath('/contact')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#2D5016] text-white rounded-lg font-semibold text-lg hover:bg-[#3a6b1d] transition-colors"
            >
              {t.common.getFreeQuote} <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#2D5016] rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" /> {t.common.callNow}
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            {t.home.whyChooseTitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {whyChoose.map((item, i) => (
              <div key={i} className="text-center p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 mx-auto mb-6 bg-[#2D5016]/10 rounded-full flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-[#2D5016]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            {t.home.servingTitle}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {t.home.servingDesc}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={getLocalizedPath(`/${loc.slug}`)}
                className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-[#2D5016] hover:shadow-md transition-all group"
              >
                <MapPin className="w-5 h-5 text-[#2D5016] shrink-0" />
                <span className="text-gray-700 font-medium group-hover:text-[#2D5016] transition-colors">
                  {loc.name}
                </span>
              </Link>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">{t.home.servingFooter}</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            {t.home.testimonialsTitle}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {t.home.testimonialsDesc}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((item) => (
              <div key={item.id} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&ldquo;{item.text[lang]}&rdquo;</p>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-[#2D5016]/10 flex items-center justify-center text-[#2D5016] font-bold">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
                    <p className="text-gray-500 text-xs">{item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#2D5016]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.home.ctaTitle}</h2>
          <p className="text-lg text-green-100 mb-8">{t.home.ctaDesc}</p>
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
