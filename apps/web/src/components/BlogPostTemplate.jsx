
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import SocialShareButtons from './SocialShareButtons';
import RelatedPosts from './RelatedPosts';
import BlogSchema from './BlogSchema';

const BlogPostTemplate = ({ post }) => {
  const { language, getLocalizedPath } = useLanguage();
  const langData = post[language] || post.en;
  
  const currentUrl = typeof window !== 'undefined' ? window.location.href : `https://servicedarbresbrandse.com/blog/${post.slug}`;

  const formattedDate = new Date(post.date).toLocaleDateString(
    language === 'fr' ? 'fr-CA' : 'en-US', 
    { year: 'numeric', month: 'long', day: 'numeric' }
  );

  return (
    <article className="bg-white pb-20">
      <Helmet>
        <title>{langData.title} | Service d'Arbres Brandse</title>
        <meta name="description" content={langData.metaDescription} />
      </Helmet>

      <BlogSchema post={post} langData={langData} />

      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.image})` }}
        >
          <div className="absolute inset-0 bg-gray-900/60"></div>
        </div>
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
            <div className="inline-block bg-primary text-white text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wider mb-6">
              {post.category}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {langData.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center text-gray-200 text-sm sm:text-base space-x-6">
              <div className="flex items-center mb-2">
                <User className="h-4 w-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                {formattedDate}
              </div>
              <div className="flex items-center mb-2">
                <Clock className="h-4 w-4 mr-2" />
                {post.readingTime}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="bg-white rounded-xl shadow-lg p-8 sm:p-12">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
            <Link to={getLocalizedPath('/')} className="hover:text-primary flex items-center">
              <Home className="h-4 w-4" />
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link to={getLocalizedPath('/blog')} className="hover:text-primary">
              Blog
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-gray-900 truncate">{langData.title}</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-primary hover:prose-a:text-secondary prose-img:rounded-xl">
                {langData.sections.map((section, index) => (
                  <div key={index} id={section.id} className="mb-10 scroll-mt-24">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">{section.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: section.content }} />
                  </div>
                ))}
              </div>

              <SocialShareButtons url={currentUrl} title={langData.title} />
            </div>

            {/* Sidebar / Table of Contents */}
            <div className="lg:w-1/3">
              <div className="sticky top-24 bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wider text-sm">
                  {language === 'fr' ? 'Table des matières' : 'Table of Contents'}
                </h3>
                <ul className="space-y-3">
                  {langData.sections.map((section, index) => (
                    <li key={index}>
                      <a 
                        href={`#${section.id}`}
                        className="text-gray-600 hover:text-primary transition-colors text-sm block"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    {language === 'fr' ? 'Besoin d\'aide ?' : 'Need Professional Help?'}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {language === 'fr' 
                      ? 'Nos arboriculteurs certifiés sont prêts à vous aider avec tous vos besoins en matière d\'arbres.' 
                      : 'Our certified arborists are ready to assist with all your tree care needs.'}
                  </p>
                  <Link 
                    to={getLocalizedPath('/contact')}
                    className="block w-full text-center bg-primary text-white px-4 py-2 rounded-md font-semibold hover:bg-secondary transition-colors"
                  >
                    {language === 'fr' ? 'Obtenir une soumission' : 'Get a Free Quote'}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <RelatedPosts currentPostId={post.id} category={post.category} />
        </div>
      </div>
    </article>
  );
};

export default BlogPostTemplate;
