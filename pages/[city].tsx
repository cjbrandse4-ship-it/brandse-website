import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { MapPin, CheckCircle, TreePine, Shield, Scissors, Sprout, AlertTriangle, Phone, ArrowRight, ChevronDown, Wrench, HelpCircle, Leaf } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../lib/useLanguage';
import { siteConfig } from '../lib/seo';
import { locations, getLocation, getLocationSlug, Location } from '../data/locations';
import { useState } from 'react';

interface Props {
  location: Location;
}

const serviceLinks = [
  { key: 'treeRemoval', href: '/tree-removal', icon: TreePine },
  { key: 'stumpGrinding', href: '/stump-grinding', icon: CheckCircle },
  { key: 'treeTrimming', href: '/tree-trimming', icon: Scissors },
  { key: 'hedgeTrimming', href: '/hedge-trimming', icon: Sprout },
  { key: 'treePlanting', href: '/tree-planting', icon: Shield },
  { key: 'emergency', href: '/emergency-services', icon: AlertTriangle },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-900 pr-4">{q}</span>
        <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-6 pb-4">
          <p className="text-gray-600 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function CityPage({ location }: Props) {
  const { lang, t, getLocalizedPath } = useLanguage();
  const lt = t.locationTemplate;
  const city = location.name;
  const cityContent = location.content[lang];

  const r = (s: string) => s.replace(/\{city\}/g, city);

  const title = r(lt.title);
  const metaDesc = r(lt.metaDesc);
  const path = lang === 'fr' ? `/fr/${location.slug}` : `/${location.slug}`;

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: cityContent.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TreeService',
    name: siteConfig.name,
    description: metaDesc,
    url: `${siteConfig.domain}${path}`,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    image: siteConfig.defaultImage,
    address: {
      '@type': 'PostalAddress',
      addressLocality: city,
      addressRegion: 'QC',
      addressCountry: 'CA',
      postalCode: location.postalCodes[0],
    },
    areaServed: {
      '@type': 'City',
      name: city,
    },
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '16:00',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Tree Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tree Removal' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Stump Grinding' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tree Trimming' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hedge Trimming' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tree Planting' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Emergency Tree Service' } },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '18',
      bestRating: '5',
    },
  };

  return (
    <>
      <SEOHead title={title} description={metaDesc} path={path} lang={lang} />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </Head>
      <Header />

      {/* Hero */}
      <section className="relative bg-[#2D5016] text-white py-20 sm:py-28">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <MapPin className="h-8 w-8 sm:h-10 sm:w-10 mr-3 text-green-300" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">{r(lt.heroTitle)}</h1>
          </div>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-10">
            {r(lt.heroSubtitle)}
          </p>
          <Link
            href={getLocalizedPath('/contact')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#2D5016] rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-xl"
          >
            {t.common.getFreeQuote} <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Main Content: Two columns */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left column */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {r(lt.whyChooseTitle)}
              </h2>

              {/* Unique city paragraphs */}
              {cityContent.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-600 text-lg mb-6 leading-relaxed">{p}</p>
              ))}

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {lt.features.map((f: string) => (
                  <li key={f} className="flex items-center gap-3 text-gray-800">
                    <CheckCircle className="w-5 h-5 text-[#2D5016] flex-shrink-0" />
                    <span className="font-medium">{f}</span>
                  </li>
                ))}
              </ul>

              {/* Common Tree Species */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <Leaf className="w-5 h-5 text-[#2D5016]" />
                  <h3 className="font-bold text-gray-900">{r(lt.commonTreeSpecies)}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {location.treeSpecies.map(species => (
                    <span key={species} className="px-3 py-1 bg-white border border-green-300 rounded-full text-sm text-gray-700 font-medium">
                      {species}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <p className="text-gray-700">
                  <strong>{r(lt.footerStrong)}</strong>{' '}
                  {r(lt.footerText)}
                </p>
              </div>
            </div>

            {/* Right sidebar: Services */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 h-fit lg:sticky lg:top-32 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {r(lt.servicesTitle)}
              </h3>
              <div className="space-y-3">
                {serviceLinks.map(({ key, href, icon: Icon }) => (
                  <Link
                    key={key}
                    href={getLocalizedPath(href)}
                    className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md border border-transparent hover:border-[#2D5016] transition-all"
                  >
                    <Icon className="h-5 w-5 text-[#2D5016]" />
                    <span className="font-semibold text-gray-900">
                      {(t.services as Record<string, { title: string }>)[key].title}
                    </span>
                  </Link>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <Link
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center justify-center gap-2 w-full py-4 bg-red-600 text-white rounded-xl font-bold text-lg hover:bg-red-700 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {siteConfig.contact.phoneDisplay}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Work */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Wrench className="w-7 h-7 text-[#2D5016]" />
            <h2 className="text-3xl font-bold text-gray-900">{r(lt.recentWorkTitle)}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cityContent.recentWork.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2D5016] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 leading-relaxed">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="w-7 h-7 text-[#2D5016]" />
            <h2 className="text-3xl font-bold text-gray-900">{r(lt.faqTitle)}</h2>
          </div>
          <div className="space-y-3">
            {cityContent.faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Cities */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-8">{r(lt.otherAreasTitle)}</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {location.nearby.map((nearbyCity) => {
              const slug = getLocationSlug(nearbyCity);
              return (
                <Link
                  key={slug}
                  href={getLocalizedPath(`/${slug}`)}
                  className="px-6 py-3 rounded-full border border-gray-600 hover:bg-[#2D5016] hover:border-[#2D5016] transition-colors font-medium"
                >
                  {nearbyCity}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => ({
  paths: locations.map((l) => ({ params: { city: l.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = ({ params }) => {
  const location = getLocation(params?.city as string);
  if (!location) return { notFound: true };
  return { props: { location } };
};
