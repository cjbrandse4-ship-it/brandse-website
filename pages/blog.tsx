import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../lib/useLanguage';
import { blogPosts } from '../data/blogPosts';

export default function BlogPage() {
  const { lang, t, getLocalizedPath } = useLanguage();

  const title =
    lang === 'fr'
      ? "Blog | Service d'Arbres Brandse | Conseils d'entretien des arbres"
      : "Blog | Service d'Arbres Brandse | Tree Care Tips & Advice";
  const description =
    lang === 'fr'
      ? "Conseils d'experts en entretien des arbres, guides saisonniers et nouvelles locales de l'Ouest de l'Île de Montréal."
      : 'Expert tree care tips, seasonal guides, and local news from the West Island of Montreal.';

  return (
    <>
      <SEOHead
        title={title}
        description={description}
        path={lang === 'fr' ? '/fr/blog' : '/blog'}
        lang={lang}
      />
      <Header />

      {/* Hero */}
      <section className="bg-[#2D5016] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            {lang === 'fr' ? 'Blogue' : 'Blog'}
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            {lang === 'fr'
              ? "Conseils d'experts, guides saisonniers et nouvelles locales sur l'entretien des arbres"
              : 'Expert tips, seasonal guides, and local news about tree care'}
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => {
              const content = post[lang];
              return (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100 flex flex-col"
                >
                  <div className="relative h-48 w-full bg-gray-200">
                    <img
                      src={post.image}
                      alt={content.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute top-4 left-4 bg-[#2D5016] text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString(
                          lang === 'fr' ? 'fr-CA' : 'en-CA',
                          { year: 'numeric', month: 'long', day: 'numeric' }
                        )}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readingTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                      {content.title}
                    </h2>
                    <p className="text-gray-600 mb-4 flex-1">{content.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                      <span className="flex items-center gap-2 text-sm text-gray-500">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                      <Link
                        href={getLocalizedPath(`/blog/${post.slug}`)}
                        className="inline-flex items-center gap-1 text-[#2D5016] font-semibold hover:underline text-sm"
                      >
                        {t.common.readMore} <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2D5016] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            {lang === 'fr' ? 'Besoin de services professionnels ?' : 'Need Professional Tree Services?'}
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            {lang === 'fr'
              ? "Contactez nos arboriculteurs certifiés pour une soumission gratuite"
              : 'Contact our certified arborists for a free quote today'}
          </p>
          <Link
            href={getLocalizedPath('/contact')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#2D5016] rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            {t.common.getFreeQuote} <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
