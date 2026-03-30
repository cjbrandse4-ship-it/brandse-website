import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { Calendar, Clock, User, ArrowLeft, Phone, ArrowRight } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useLanguage } from '../../lib/useLanguage';
import { blogPosts, BlogPost } from '../../data/blogPosts';
import CtaBanner from '../../components/CtaBanner';

interface Props {
  post: BlogPost;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogPosts.map((post) => ({ params: { slug: post.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const post = blogPosts.find((p) => p.slug === params?.slug);
  if (!post) return { notFound: true };
  return { props: { post } };
};

export default function BlogPostPage({ post }: Props) {
  const { lang, t, getLocalizedPath } = useLanguage();
  const isFr = lang === 'fr';
  const content = post[lang];
  const body = content.body || [content.excerpt];

  const pageTitle = `${content.title} | Service d'Arbres Brandse`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": content.title,
    "description": content.metaDescription,
    "image": post.image,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Service d'Arbres Brandse Inc",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.servicedarbresbrandse.com/logo-schema.png",
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.servicedarbresbrandse.com/blog/${post.slug}`,
    },
  };

  // Find adjacent posts for navigation
  const idx = blogPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = idx > 0 ? blogPosts[idx - 1] : null;
  const nextPost = idx < blogPosts.length - 1 ? blogPosts[idx + 1] : null;

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={content.metaDescription}
        path={getLocalizedPath(`/blog/${post.slug}`)}
        image={post.image}
        lang={lang}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      </Head>

      <Header />
      <Breadcrumbs
        items={[
          { name: isFr ? 'Accueil' : 'Home', href: '/' },
          { name: isFr ? 'Blogue' : 'Blog', href: '/blog' },
          { name: content.title },
        ]}
      />

      <main>
        {/* Hero */}
        <section className="relative">
          <div className="h-64 sm:h-80 w-full bg-gray-200 relative">
            <img
              src={post.image}
              alt={content.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div className="max-w-3xl mx-auto px-4 -mt-20 relative z-10">
            <span className="inline-block bg-[#2D5016] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
              {content.title}
            </h1>
          </div>
        </section>

        {/* Meta */}
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-3xl mx-auto px-4 py-4 flex flex-wrap items-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString(
                isFr ? 'fr-CA' : 'en-CA',
                { year: 'numeric', month: 'long', day: 'numeric' }
              )}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readingTime}
            </span>
          </div>
        </section>

        {/* Article Body */}
        <article className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed">
              {body.map((paragraph, i) => {
                // Split on markdown headings
                const parts = paragraph.split(/^(## .+)$/m);
                return parts.map((part, j) => {
                  if (part.startsWith('## ')) {
                    return (
                      <h2
                        key={`${i}-${j}`}
                        className="text-2xl font-bold text-gray-900 mt-10 mb-4"
                      >
                        {part.replace('## ', '')}
                      </h2>
                    );
                  }
                  if (part.trim()) {
                    return (
                      <p
                        key={`${i}-${j}`}
                        className="text-gray-600 leading-relaxed mb-6 text-lg"
                      >
                        {part.trim()}
                      </p>
                    );
                  }
                  return null;
                });
              })}
            </div>
          </div>
        </article>

        {/* Post Navigation */}
        <section className="bg-gray-50 py-12 border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-4">
            <div className="flex justify-between items-start gap-4">
              {prevPost ? (
                <Link
                  href={getLocalizedPath(`/blog/${prevPost.slug}`)}
                  className="group flex-1"
                >
                  <span className="text-sm text-gray-500 flex items-center gap-1 mb-1">
                    <ArrowLeft className="w-4 h-4" />
                    {isFr ? 'Article précédent' : 'Previous'}
                  </span>
                  <span className="text-[#2D5016] font-semibold group-hover:underline">
                    {prevPost[lang].title}
                  </span>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
              {nextPost ? (
                <Link
                  href={getLocalizedPath(`/blog/${nextPost.slug}`)}
                  className="group flex-1 text-right"
                >
                  <span className="text-sm text-gray-500 flex items-center justify-end gap-1 mb-1">
                    {isFr ? 'Article suivant' : 'Next'}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                  <span className="text-[#2D5016] font-semibold group-hover:underline">
                    {nextPost[lang].title}
                  </span>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
            </div>
          </div>
        </section>

        <CtaBanner />
      </main>

      <Footer />
    </>
  );
}
