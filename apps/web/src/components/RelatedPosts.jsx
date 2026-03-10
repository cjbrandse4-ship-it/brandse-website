
import React from 'react';
import { blogPosts } from '@/data/blogPosts';
import BlogPostCard from './BlogPostCard';
import { useLanguage } from '@/contexts/LanguageContext';

const RelatedPosts = ({ currentPostId, category }) => {
  const { language } = useLanguage();
  
  // Find posts in same category, exclude current, limit to 3
  const related = blogPosts
    .filter(post => post.category === category && post.id !== currentPostId)
    .slice(0, 3);

  // If not enough in category, fill with recent posts
  if (related.length < 3) {
    const additional = blogPosts
      .filter(post => post.id !== currentPostId && !related.find(r => r.id === post.id))
      .slice(0, 3 - related.length);
    related.push(...additional);
  }

  if (related.length === 0) return null;

  return (
    <div className="mt-16 pt-12 border-t border-gray-200">
      <h3 className="text-2xl font-bold text-gray-900 mb-8">
        {language === 'fr' ? 'Articles Connexes' : 'Related Articles'}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {related.map(post => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
