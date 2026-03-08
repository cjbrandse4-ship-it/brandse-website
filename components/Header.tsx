import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, ChevronDown, MapPin } from 'lucide-react';
import { useLanguage } from '../lib/useLanguage';
import { locations } from '../data/locations';
import { siteConfig } from '../lib/seo';

const serviceLinks = [
  { key: 'treeRemoval', href: '/tree-removal' },
  { key: 'stumpGrinding', href: '/stump-grinding' },
  { key: 'treeTrimming', href: '/tree-trimming' },
  { key: 'hedgeTrimming', href: '/hedge-trimming' },
  { key: 'treePlanting', href: '/tree-planting' },
  { key: 'emergency', href: '/emergency-services' },
];

export default function Header() {
  const { lang, t, getLocalizedPath, toggleLangPath } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.about, href: '/about' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Blog', href: '/blog' },
    { label: t.nav.faq, href: '/faq' },
    { label: t.nav.contact, href: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 bg-white transition-shadow ${scrolled ? 'shadow-md' : ''}`}>
      {/* Emergency bar */}
      <div className="bg-red-700 text-white text-center text-sm py-1.5 px-4">
        <a href={`tel:${siteConfig.contact.phone}`} className="hover:underline">
          {lang === 'fr' ? 'Service d\'urgence 24/7 — Appelez' : '24/7 Emergency Service — Call'} {siteConfig.contact.phoneDisplay}
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href={getLocalizedPath('/')} className="flex items-center gap-2 shrink-0">
          <img src={siteConfig.logo} alt="Brandse Trees" className="h-10 w-10 rounded-full object-cover" />
          <span className="hidden sm:block font-bold text-gray-900 text-sm leading-tight">Service d&apos;Arbres<br/>Brandse Inc</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1 text-sm">
          <Link href={getLocalizedPath('/')} className="px-3 py-2 text-gray-700 hover:text-[#2D5016] rounded-lg hover:bg-gray-50">{t.nav.home}</Link>

          {/* Services dropdown */}
          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button className="px-3 py-2 text-gray-700 hover:text-[#2D5016] rounded-lg hover:bg-gray-50 flex items-center gap-1">
              {t.nav.services} <ChevronDown className="w-3.5 h-3.5" />
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full bg-white border rounded-lg shadow-xl py-2 w-56">
                {serviceLinks.map(s => (
                  <Link key={s.key} href={getLocalizedPath(s.href)} className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#2D5016]">
                    {(t.services as any)[s.key]?.title}
                  </Link>
                ))}
                <hr className="my-1" />
                <Link href={getLocalizedPath('/services')} className="block px-4 py-2 text-[#2D5016] font-medium hover:bg-gray-50">{t.common.allServices}</Link>
              </div>
            )}
          </div>

          <Link href={getLocalizedPath('/about')} className="px-3 py-2 text-gray-700 hover:text-[#2D5016] rounded-lg hover:bg-gray-50">{t.nav.about}</Link>
          <Link href={getLocalizedPath('/gallery')} className="px-3 py-2 text-gray-700 hover:text-[#2D5016] rounded-lg hover:bg-gray-50">{lang === 'fr' ? 'Galerie' : 'Gallery'}</Link>
          <Link href={getLocalizedPath('/blog')} className="px-3 py-2 text-gray-700 hover:text-[#2D5016] rounded-lg hover:bg-gray-50">Blog</Link>
          <Link href={getLocalizedPath('/faq')} className="px-3 py-2 text-gray-700 hover:text-[#2D5016] rounded-lg hover:bg-gray-50">{t.nav.faq}</Link>
          <Link href={getLocalizedPath('/contact')} className="px-3 py-2 text-gray-700 hover:text-[#2D5016] rounded-lg hover:bg-gray-50">{t.nav.contact}</Link>

          {/* Areas dropdown */}
          <div className="relative" onMouseEnter={() => setAreasOpen(true)} onMouseLeave={() => setAreasOpen(false)}>
            <button className="px-3 py-2 text-gray-700 hover:text-[#2D5016] rounded-lg hover:bg-gray-50 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" /> {t.common.serviceAreas} <ChevronDown className="w-3.5 h-3.5" />
            </button>
            {areasOpen && (
              <div className="absolute right-0 top-full bg-white border rounded-lg shadow-xl py-2 w-56 max-h-80 overflow-y-auto">
                {locations.map(loc => (
                  <Link key={loc.slug} href={getLocalizedPath(`/${loc.slug}`)} className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#2D5016]">
                    {loc.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href={toggleLangPath()} className="px-3 py-2 text-gray-500 hover:text-gray-900 font-semibold">{lang === 'en' ? 'FR' : 'EN'}</Link>
          <a href={`tel:${siteConfig.contact.phone}`} className="px-3 py-2 text-gray-700 hover:text-[#2D5016] flex items-center gap-1"><Phone className="w-4 h-4" /></a>
          <Link href={getLocalizedPath('/contact')} className="ml-2 px-5 py-2.5 bg-[#2D5016] text-white rounded-lg font-medium hover:bg-[#3a6b1d] transition-colors">
            {t.common.getFreeQuote}
          </Link>
        </nav>

        {/* Mobile toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <Link href={toggleLangPath()} className="text-gray-500 font-semibold text-sm">{lang === 'en' ? 'FR' : 'EN'}</Link>
          <a href={`tel:${siteConfig.contact.phone}`} className="text-[#2D5016]"><Phone className="w-5 h-5" /></a>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-gray-700">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map(l => (
              <Link key={l.href} href={getLocalizedPath(l.href)} onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">{l.label}</Link>
            ))}
            <div className="border-t my-2 pt-2">
              <p className="px-4 py-2 text-xs text-gray-500 uppercase tracking-wider">{t.nav.services}</p>
              {serviceLinks.map(s => (
                <Link key={s.key} href={getLocalizedPath(s.href)} onClick={() => setMobileOpen(false)} className="block px-6 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm">
                  {(t.services as any)[s.key]?.title}
                </Link>
              ))}
            </div>
            <div className="border-t my-2 pt-2">
              <p className="px-4 py-2 text-xs text-gray-500 uppercase tracking-wider">{t.common.serviceAreas}</p>
              <div className="grid grid-cols-2 gap-1 px-4">
                {locations.map(loc => (
                  <Link key={loc.slug} href={getLocalizedPath(`/${loc.slug}`)} onClick={() => setMobileOpen(false)} className="py-1.5 text-gray-600 hover:text-[#2D5016] text-sm">{loc.name}</Link>
                ))}
              </div>
            </div>
            <div className="pt-3">
              <Link href={getLocalizedPath('/contact')} onClick={() => setMobileOpen(false)} className="block w-full text-center px-5 py-3 bg-[#2D5016] text-white rounded-lg font-medium">
                {t.common.getFreeQuote}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
