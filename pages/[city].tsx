import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { MapPin, CheckCircle, TreePine, Shield, Scissors, Sprout, AlertTriangle, Phone, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../lib/useLanguage';
import { siteConfig } from '../lib/seo';
import { locations, getLocation, getLocationSlug, Location } from '../data/locations';

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

export default function CityPage({ location }: Props) {
  const { lang, t, getLocalizedPath } = useLanguage();
  const lt = t.locationTemplate;
  const city = location.name;

  const r = (s: string) => s.replace(/\{city\}/g, city);

  const title = r(lt.title);
  const metaDesc = r(lt.metaDesc);
  const path = lang === 'fr' ? `/fr/${location.slug}` : `/${location.slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
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
        opens: '08:00',
        closes: '18:00',
      },
    ],
  };

  return (
    <>
      <SEOHead title={title} description={metaDesc} path={path} lang={lang} />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">{r(lt.desc1)}</p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">{r(lt.desc2)}</p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {lt.features.map((f: string) => (
                  <li key={f} className="flex items-center gap-3 text-gray-800">
                    <CheckCircle className="w-5 h-5 text-[#2D5016] flex-shrink-0" />
                    <span className="font-medium">{f}</span>
                  </li>
                ))}
              </ul>

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

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-[#2D5016] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{r(lt.ctaTitle)}</h2>
          <p className="text-lg text-gray-200 mb-8">{r(lt.ctaDesc)}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={getLocalizedPath('/contact')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#2D5016] rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              {t.common.getFreeQuote} <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href={`tel:${siteConfig.contact.phone}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5" /> {t.common.callNow}
            </Link>
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
