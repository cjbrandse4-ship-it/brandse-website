import Link from 'next/link';
import Head from 'next/head';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../lib/useLanguage';
import { serviceGuides, ServiceKey } from '../data/serviceGuides';

// Renders the long-form guide + FAQ under a service page's summary section.
// Copy lives in data/serviceGuides.ts. Paragraphs may contain
// [link text](/english-path) — internal paths are localized (French slugs
// included) through getLocalizedPath.
function RichText({ text }: { text: string }) {
  const { getLocalizedPath } = useLanguage();
  const parts = text.split(/(\[[^\]]+\]\(\/[^)]*\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\((\/[^)]*)\)$/);
        if (!m) return part;
        return (
          <Link key={i} href={getLocalizedPath(m[2])} className="text-[#2D5016] font-semibold underline decoration-[#2D5016]/30 underline-offset-2 hover:decoration-[#2D5016]">
            {m[1]}
          </Link>
        );
      })}
    </>
  );
}

const stripLinks = (s: string) => s.replace(/\[([^\]]+)\]\(\/[^)]*\)/g, '$1');

export default function ServiceGuide({ service }: { service: ServiceKey }) {
  const { lang } = useLanguage();
  const guide = serviceGuides[service][lang];

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: guide.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: stripLinks(f.a) },
    })),
  };

  return (
    <>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </Head>

      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {guide.sections.map((s) => (
            <div key={s.h2} className="mb-12 last:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{s.h2}</h2>
              {s.paragraphs.map((p, i) => (
                <p key={i} className="text-lg text-gray-600 leading-relaxed mb-4">
                  <RichText text={p} />
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            {lang === 'fr' ? 'Questions fréquentes' : 'Frequently Asked Questions'}
          </h2>
          <div className="space-y-3">
            {guide.faqs.map((f) => (
              // Native <details>: the answer is in the HTML for crawlers
              // (schema/visible-content parity) and opens without JS.
              <details key={f.q} className="group border border-gray-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none font-semibold text-gray-900 hover:bg-gray-50">
                  {f.q}
                  <ChevronDown className="w-5 h-5 text-gray-400 shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <p className="px-6 pb-5 text-gray-600 leading-relaxed">
                  <RichText text={f.a} />
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
