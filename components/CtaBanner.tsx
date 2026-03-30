import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';
import { useLanguage } from '../lib/useLanguage';
import { siteConfig } from '../lib/seo';

interface CtaBannerProps {
  title?: string;
  subtitle?: string;
}

export default function CtaBanner({ title, subtitle }: CtaBannerProps) {
  const { lang, t, getLocalizedPath } = useLanguage();
  const isFr = lang === 'fr';

  const heading = title || (isFr ? 'Vivez la Difference Brandse' : 'Experience the Brandse Difference');
  const sub = subtitle || (isFr
    ? 'Rejoignez des centaines de clients satisfaits a travers l\'Ouest de l\'Ile de Montreal'
    : 'Join hundreds of satisfied customers across West Island Montreal');

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/og-image.jpg)' }} />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">{sub}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={getLocalizedPath('/contact')}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#2D5016] rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            {isFr ? 'Soumission Gratuite' : 'Get Free Quote'} <ArrowRight className="w-5 h-5" />
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
  );
}
