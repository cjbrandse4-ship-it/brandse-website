
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Tag, Home, ChevronRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import BlogPostCard from '@/components/BlogPostCard.jsx';
import SEOHead from '@/components/SEOHead.jsx';
import Breadcrumbs from '@/components/Breadcrumbs.jsx';
import BreadcrumbSchema from '@/components/BreadcrumbSchema.jsx';
import { blogPosts } from '@/data/blogPosts.js';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

const BlogPage = () => {
  const { language, getLocalizedPath } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const isFr = language === 'fr';
  const pageTitle = isFr ? "Blogue & Conseils d'Arboriculture | Service d'Arbres Brandse" : "Tree Care Blog & Tips | Service d'Arbres Brandse";
  const pageDesc = isFr ? "Lisez nos derniers articles sur l'entretien des arbres, l'abattage, l'élagage et plus encore. Conseils d'experts pour l'Ouest de l'Île de Montréal." : "Read our latest articles on tree care, removal, trimming, and more from certified arborists. Expert tips for West Island Montreal homeowners.";
  const keywords = isFr ? "blogue arboriculture, conseils arbres, entretien arbre Montréal, abattage arbre blogue" : "tree care blog, arborist tips, tree maintenance Montreal, tree removal blog";
  const pageUrl = `https://servicedarbresbrandse.com${getLocalizedPath('/blog')}`;

  const categories = ['All', 'Tree Care', 'Seasonal Tips', 'Emergency Services', 'Local News'];

  const getCategoryName = (cat) => {
    if (!isFr) return cat;
    if (cat === 'All') return 'Tous';
    const translations = {
      'Tree Care': 'Entretien d\'arbres',
      'Seasonal Tips': 'Conseils saisonniers',
      'Emergency Services': 'Services d\'urgence',
      'Local News': 'Actualités locales'
    };
    return translations[cat] || cat;
  };

  const filteredPosts = blogPosts.filter(post => {
    const content = post[language] || post.en;
    const matchesSearch = content.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          content.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    let postCat = post.category;
    if (postCat === 'Stump Grinding' || postCat === 'Tree Planting' || postCat === 'Pest Control') postCat = 'Tree Care';
    if (postCat === 'Emergency') postCat = 'Emergency Services';

    const matchesCategory = selectedCategory === 'All' || postCat === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="overflow-x-hidden">
      <SEOHead 
        title={pageTitle}
        description={pageDesc}
        keywords={keywords}
        canonicalUrl={getLocalizedPath('/blog')}
      />

      <BreadcrumbSchema breadcrumbs={[
        { label: isFr ? 'Accueil' : 'Home', url: '/' },
        { label: isFr ? 'Blogue' : 'Blog', url: '/blog' }
      ]} />

      <Header />

      <section className="bg-primary text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumbs items={[{label: 'Blog'}]} />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 mt-4 tracking-tight">
            {isFr ? "Blogue d'Arboriculture et Conseils" : "Tree Care Blog & Expert Tips"}
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
            {isFr 
              ? "Conseils d'experts, guides et actualités sur l'arboriculture pour vous aider à maintenir des arbres sains et sécuritaires." 
              : "Expert tips, guides, and tree care news to help you maintain healthy, safe, and beautiful trees."}
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-12 flex flex-col lg:flex-row gap-6 items-center justify-between border border-gray-100">
            <div className="relative w-full lg:w-96">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder={isFr ? "Rechercher des articles..." : "Search articles..."}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 hide-scrollbar">
              <Tag className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0 hidden sm:block" />
              <div className="flex space-x-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                      selectedCategory === category 
                        ? 'bg-primary text-white shadow-md' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {getCategoryName(category)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {isFr ? "Aucun article trouvé" : "No articles found"}
              </h2>
              <p className="text-gray-600 mb-6">
                {isFr ? "Essayez d'ajuster votre recherche ou vos filtres." : "Try adjusting your search or category filters."}
              </p>
              <button 
                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                className="text-primary font-bold hover:text-secondary transition-colors"
              >
                {isFr ? "Effacer les filtres" : "Clear all filters"}
              </button>
            </div>
          )}

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
