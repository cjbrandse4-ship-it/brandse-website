import Link from 'next/link';
import { Phone, Mail, Clock, MapPin, Facebook, Instagram, ArrowRight } from 'lucide-react';
import { useLanguage } from '../lib/useLanguage';
import { locations } from '../data/locations';
import { siteConfig } from '../lib/seo';

export default function Footer() {
  const { lang, t, getLocalizedPath } = useLanguage();
  const isFr = lang === 'fr';

  const services = [
    { key: 'treeRemoval', href: '/tree-removal' },
    { key: 'stumpGrinding', href: '/stump-grinding' },
    { key: 'treeTrimming', href: '/tree-trimming' },
    { key: 'hedgeTrimming', href: '/hedge-trimming' },
    { key: 'treePlanting', href: '/tree-planting' },
    { key: 'emergency', href: '/emergency-services' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* CTA Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-14 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            {isFr ? 'Pret a commencer?' : 'Ready to get started?'}
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            {isFr
              ? 'Obtenez une soumission gratuite de nos arboriculteurs certifies'
              : 'Get a free quote from our certified arborists today'}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={getLocalizedPath('/contact')}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#2D5016] text-white rounded-lg font-semibold hover:bg-[#3a6b1d] transition-colors"
            >
              {isFr ? 'Soumission Gratuite' : 'Get Free Quote'} <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-gray-600 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              <Phone className="w-4 h-4" /> {siteConfig.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={siteConfig.logo} alt="Brandse" className="h-10 w-10 rounded-full object-cover" />
            <span className="font-bold text-white text-sm leading-tight">Service d&apos;Arbres<br/>Brandse Inc</span>
          </div>
          <p className="text-sm text-gray-400 mb-4">{t.common.tagline}</p>
          <div className="flex gap-3">
            <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-white mb-4">{t.nav.services}</h3>
          <ul className="space-y-2 text-sm">
            {services.map(s => (
              <li key={s.key}>
                <Link href={getLocalizedPath(s.href)} className="hover:text-[#7cb342] transition-colors">
                  {(t.services as any)[s.key]?.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Locations */}
        <div>
          <h3 className="font-semibold text-white mb-4">{t.common.serviceAreas}</h3>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {locations.map(loc => (
              <li key={loc.slug}>
                <Link href={getLocalizedPath(`/${loc.slug}`)} className="hover:text-[#7cb342] transition-colors">{loc.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-white mb-4">{t.nav.contact}</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#7cb342] shrink-0" />
              <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors">{siteConfig.contact.phoneDisplay}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#7cb342] shrink-0" />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">{siteConfig.contact.email}</a>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#7cb342] shrink-0" />
              <span>{t.common.hours}</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#7cb342] shrink-0" />
              <span>Saint-Lazare, QC</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Service d&apos;Arbres Brandse Inc. {t.common.rights}</p>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <Link href={getLocalizedPath('/cookie-policy')} className="hover:text-gray-300 transition-colors">{isFr ? 'Politique de cookies' : 'Cookie Policy'}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
