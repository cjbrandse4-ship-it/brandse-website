
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import LazyImage from '@/components/LazyImage.jsx';

const BlogPostCard = memo(({ post }) => {
  const { language, getLocalizedPath } = useLanguage();
  const isFr = language === 'fr';
  const content = post[language] || post.en;

  // Format date
  const formattedDate = new Date(post.date).toLocaleDateString(
    isFr ? 'fr-CA' : 'en-CA', 
    { year: 'numeric', month: 'long', day: 'numeric' }
  );

  // Translate category if needed
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

  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
      <Link to={getLocalizedPath(`/blog/${post.slug}`)} className="relative overflow-hidden aspect-[16/10] block">
        <LazyImage 
          src={post.image} 
          alt={content.title} 
          width={600}
          height={400}
          className="w-full h-full"
          imgClassName="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-md">
          {getCategoryName(post.category)}
        </div>
      </Link>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1.5 text-primary" />
            <time dateTime={post.date}>{formattedDate}</time>
          </div>
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1.5 text-primary" />
            <span>{post.author}</span>
          </div>
        </div>
        
        <Link to={getLocalizedPath(`/blog/${post.slug}`)} className="block mb-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
            {content.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
          {content.excerpt}
        </p>
        
        <Link 
          to={getLocalizedPath(`/blog/${post.slug}`)} 
          className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors mt-auto"
          title={content.title}
        >
          <span className="line-clamp-1">{content.title}</span>
          <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform shrink-0" />
        </Link>
      </div>
    </article>
  );
});

export default BlogPostCard;
