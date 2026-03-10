
import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2, Facebook, Twitter, Mail } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SEOHead from '@/components/SEOHead.jsx';
import Breadcrumbs from '@/components/Breadcrumbs.jsx';
import BreadcrumbSchema from '@/components/BreadcrumbSchema.jsx';
import BlogSchema from '@/components/BlogSchema.jsx';
import BlogPostCard from '@/components/BlogPostCard.jsx';
import NewsletterSignup from '@/components/NewsletterSignup.jsx';
import RelatedServices from '@/components/RelatedServices.jsx';
import { blogPosts } from '@/data/blogPosts.js';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

const BlogPostPage = () => {
  const { slug } = useParams();
  const { language, getLocalizedPath } = useLanguage();
  const isFr = language === 'fr';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to={getLocalizedPath('/blog')} replace />;
  }

  const content = post[language] || post.en;
  
  const formattedDate = new Date(post.date).toLocaleDateString(
    isFr ? 'fr-CA' : 'en-CA', 
    { year: 'numeric', month: 'long', day: 'numeric' }
  );

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && (p.category === post.category || p.category === 'Tree Care'))
    .slice(0, 3);

  const getCategoryName = (cat) => {
    if (!isFr) return cat;
    const translations = {
      'Tree Care': 'Entretien d\'arbres',
      'Seasonal Tips': 'Conseils saisonniers',
      'Emergency Services': 'Services d\'urgence',
      'Local News': 'Actualités locales',
      'Pest Control': 'Contrôle des parasites',
      'Stump Grinding': 'Essouchage',
      'Tree Planting': 'Plantation d\'arbres',
      'Emergency': 'Urgence'
    };
    return translations[cat] || cat;
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  // Determine related service based on category
  let relatedServiceId = 'tree-removal';
  if (post.category === 'Emergency Services') relatedServiceId = 'emergency';
  if (post.slug.includes('stump')) relatedServiceId = 'stump-grinding';
  if (post.slug.includes('trimming')) relatedServiceId = 'tree-trimming';
  if (post.slug.includes('plant')) relatedServiceId = 'tree-planting';

  const pageTitle = `${content.title} | Service d'Arbres Brandse`;
  const pageDesc = content.metaDescription || content.excerpt;
  const pageUrl = `https://servicedarbresbrandse.com${getLocalizedPath(`/blog/${post.slug}`)}`;

  return (
    <div className="overflow-x-hidden bg-white">
      <SEOHead 
        title={pageTitle}
        description={pageDesc}
        ogImage={post.image}
        canonicalUrl={getLocalizedPath(`/blog/${post.slug}`)}
      />
      <BlogSchema post={post} langData={content} />

      <BreadcrumbSchema breadcrumbs={[
        { label: isFr ? 'Accueil' : 'Home', url: '/' },
        { label: isFr ? 'Blogue' : 'Blog', url: '/blog' },
        { label: content.title, url: `/blog/${post.slug}` }
      ]} />

      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8">
        <Breadcrumbs items={[
          {label: 'Blog', path: '/blog'},
          {label: content.title}
        ]} />

        <div className="mb-6 mt-6">
          <span className="inline-block bg-primary/10 text-primary font-bold px-4 py-1.5 rounded-full text-sm uppercase tracking-wider mb-4">
            {getCategoryName(post.category)}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {content.title}
          </h1>
          
          <div className="flex flex-wrap items-center text-gray-600 gap-y-3 gap-x-6 text-sm sm:text-base">
            <div className="flex items-center font-medium">
              <User className="h-5 w-5 mr-2 text-primary" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-primary" />
              <time dateTime={post.date}>{formattedDate}</time>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2 text-primary" />
              {post.readingTime} {isFr ? "de lecture" : "read"}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <img 
          src={post.image} 
          alt={content.title} 
          loading="lazy"
          className="w-full h-[400px] sm:h-[500px] object-cover rounded-3xl shadow-lg"
        />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="prose prose-lg sm:prose-xl prose-primary max-w-none text-gray-700">
          {content.sections.map((section, index) => (
            <div key={index} className="mb-10">
              {section.title && <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-10 mb-6">{section.title}</h2>}
              <div dangerouslySetInnerHTML={{ __html: section.content }} className="space-y-4 leading-relaxed" />
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link to={getLocalizedPath('/blog')} className="inline-flex items-center text-primary font-bold hover:text-secondary transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" />
            {isFr ? "Retour au blogue" : "Back to Blog"}
          </Link>
          
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 font-medium flex items-center">
              <Share2 className="h-5 w-5 mr-2" /> {isFr ? "Partager :" : "Share:"}
            </span>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#1877F2] hover:text-white transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(content.title)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#1DA1F2] hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href={`mailto:?subject=${encodeURIComponent(content.title)}&body=${encodeURIComponent(shareUrl)}`} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <RelatedServices currentServiceId={relatedServiceId} />

      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSignup />
        </div>
      </div>

      {relatedPosts.length > 0 && (
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              {isFr ? "Articles Connexes" : "Related Articles"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map(relatedPost => (
                <BlogPostCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default BlogPostPage;
