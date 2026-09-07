import Link from 'next/link';
import Image from 'next/image';
import { Shield, Award, Clock, MapPin, Star, Phone, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../lib/useLanguage';
import { siteConfig } from '../lib/seo';
import { testimonials } from '../data/testimonials';
import { locations } from '../data/locations';
import { useActivePromotion } from '../lib/usePromotion';
import { CheckCircle } from 'lucide-react';

export default function HomePage() {
  const { lang, t, getLocalizedPath } = useLanguage();
  const activePromo = useActivePromotion(lang);

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
      <section id="main-content" className="relative min-h-[600px] flex items-center">
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

      {/* Seasonal promotion (auto-shows while a campaign window is active) */}
      {activePromo && (
        <section className="relative overflow-hidden py-16 md:py-20 bg-gradient-to-br from-[#1c330d] via-[#2D5016] to-[#3a6b1e]">
          {/* Soft depth accents (decorative) */}
          <div aria-hidden="true" className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-amber-400/10 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-white/5 blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            {/* Left: offer */}
            <div className="text-center md:text-left">
              <span className="inline-flex items-center gap-2 bg-amber-400 text-gray-900 text-xs font-bold uppercase tracking-wider rounded-full px-3.5 py-1.5 mb-6 shadow-md">
                <span aria-hidden="true" className="w-2 h-2 rounded-full bg-red-600 motion-safe:animate-pulse" />
                {activePromo.copy.deadlineLabel} · {activePromo.daysLeft}{' '}
                {activePromo.daysLeft === 1
                  ? (lang === 'fr' ? 'jour restant' : 'day left')
                  : (lang === 'fr' ? 'jours restants' : 'days left')}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight [text-wrap:balance]">
                {activePromo.copy.homeTitle}
              </h2>
              <p className="text-lg text-white/85 mb-8 max-w-xl mx-auto md:mx-0">{activePromo.copy.homeSub}</p>
              <ul className="text-left space-y-4 mb-9 max-w-xl mx-auto md:mx-0">
                {activePromo.copy.homeBullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3.5">
                    <span className="shrink-0 w-9 h-9 rounded-full bg-amber-400/15 border border-amber-400/40 flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-5 h-5 text-amber-300" />
                    </span>
                    <span className="text-white/95 leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 sm:gap-5 justify-center md:justify-start">
                <Link
                  href={lang === 'fr' ? '/fr/devis-gratuit' : '/free-estimate'}
                  className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-gray-900 text-lg font-bold px-8 py-4 rounded-xl transition-all shadow-xl shadow-black/25 motion-safe:hover:scale-[1.02]"
                >
                  {activePromo.copy.homeCta} <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:4383655410"
                  className="inline-flex items-center gap-2 text-white/90 hover:text-white font-semibold py-4 transition-colors"
                >
                  <Phone className="w-5 h-5 text-amber-300" /> (438) 365-5410
                </a>
              </div>
            </div>

            {/* Right: real job photo with floating value badge */}
            <div className="relative max-w-md w-full mx-auto md:max-w-none">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-white/25 shadow-2xl shadow-black/40">
                <Image
                  src={activePromo.promo.image}
                  alt={activePromo.copy.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                  className="object-cover"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              </div>
              <span className="absolute -top-3 -right-2 md:-right-4 bg-amber-400 text-gray-900 text-sm font-extrabold rounded-full px-4 py-2 shadow-xl rotate-2">
                {activePromo.copy.photoBadge}
              </span>
            </div>
          </div>
        </section>
      )}

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

      {/* Google Reviews */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg viewBox="0 0 24 24" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {lang === 'fr' ? 'Avis Google' : 'Google Reviews'}
              </h2>
            </div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-4xl font-bold text-gray-900">{siteConfig.rating.value}</span>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
            <p className="text-gray-500">
              {lang === 'fr' ? `Basé sur ${siteConfig.rating.count} avis Google` : `Based on ${siteConfig.rating.count} Google reviews`}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((item) => (
              <div key={item.id} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <svg viewBox="0 0 24 24" className="w-5 h-5 opacity-40" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <p className="text-gray-700 mb-4 italic">&ldquo;{item.text[lang]}&rdquo;</p>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-[#2D5016]/10 flex items-center justify-center text-[#2D5016] font-bold">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
                    <p className="text-gray-500 text-xs">Google Review</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Service%20d%27Arbres%20Brandse%20Inc%2C%20Saint-Lazare%2C%20QC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#2D5016] font-semibold hover:underline"
            >
              {lang === 'fr' ? 'Voir tous les avis sur Google' : 'See all reviews on Google'} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
