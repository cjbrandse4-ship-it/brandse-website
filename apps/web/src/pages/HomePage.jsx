
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Shield, Award, Clock, MapPin, ArrowRight, Leaf, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SEOHead from '@/components/SEOHead.jsx';
import SchemaMarkup from '@/components/SchemaMarkup.jsx';
import NewsletterSignup from '@/components/NewsletterSignup.jsx';
import BlogPostCard from '@/components/BlogPostCard.jsx';
import TestimonialsCarousel from '@/components/TestimonialsCarousel.jsx';
import LazyImage from '@/components/LazyImage.jsx';
import { blogPosts } from '@/data/blogPosts.js';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import { markStart, markEnd } from '@/hooks/usePerformanceMetrics.js';

const HomePage = () => {
  const { t, getLocalizedPath, language } = useLanguage();
  const isFr = language === 'fr';

  useEffect(() => {
    markStart('homepage-render');
    return () => markEnd('homepage-render');
  }, []);

  const trustSignals = [
    { icon: Shield, text: t('common.licensedInsured') },
    { icon: Award, text: t('common.certifiedArborists') },
    { icon: Clock, text: t('common.emergency247') }
  ];
  
  const serviceAreas = [
    { name: 'Saint-Lazare', path: '/saint-lazare' }, { name: 'Pointe-Claire', path: '/pointe-claire' },
    { name: 'Hudson', path: '/hudson' }, { name: 'Beaconsfield', path: '/beaconsfield' },
    { name: 'Vaudreuil', path: '/vaudreuil' }, { name: 'Kirkland', path: '/kirkland' },
    { name: 'Dollard-des-Ormeaux', path: '/dollard-des-ormeaux' }, { name: 'Dorval', path: '/dorval' },
    { name: 'Senneville', path: '/senneville' }, { name: "Baie-D'Urfé", path: '/baie-d-urfe' },
    { name: 'Île-Perrot', path: '/ile-perrot' }, { name: 'Pincourt', path: '/pincourt' }
  ];

  const whyChooseUs = [
    { icon: Award, title: isFr ? "Arboriculteurs Certifiés" : "Certified Arborists", desc: isFr ? "Experts formés garantissant la santé de vos arbres." : "Trained experts ensuring the health of your trees." },
    { icon: Shield, title: isFr ? "Assurance Complète" : "Fully Insured", desc: isFr ? "Couverture CNESST et responsabilité civile pour votre tranquillité." : "CNESST and liability coverage for your peace of mind." },
    { icon: Clock, title: isFr ? "Urgence 24/7" : "24/7 Emergency", desc: isFr ? "Intervention rapide lors de tempêtes ou situations dangereuses." : "Rapid response during storms or hazardous situations." },
    { icon: ThumbsUp, title: isFr ? "Satisfaction Garantie" : "Satisfaction Guaranteed", desc: isFr ? "Nettoyage impeccable et respect de votre propriété." : "Impeccable cleanup and respect for your property." }
  ];

  const recentPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);

  const pageTitle = isFr ? "Services d'Arbres Professionnels Ouest de l'Île de Montréal" : "Professional Tree Services West Island Montreal";
  const pageDesc = isFr ? "Abattage d'arbres expert, élagage, essouchage et urgences dans l'Ouest de l'Île de Montréal. Arboriculteurs certifiés, assurés. Demandez une soumission gratuite!" : "Expert tree removal, trimming, stump grinding & emergency services in West Island Montreal. Certified arborists, fully insured. Call for a free quote today!";
  const imageUrl = "https://horizons-cdn.hostinger.com/e1153006-2afb-49ee-92e0-b73c646df449/7d7b8c44f72d161152e6520f3e3e292b.jpg";

  return (
    <div className="overflow-x-hidden">
      <SEOHead 
        title={pageTitle}
        description={pageDesc}
        keywords={isFr ? "abattage arbre Ouest de l'Île, essouchage Montréal, élagage Pointe-Claire, urgence arbre, arboriculteur Montréal" : "tree removal West Island, stump grinding Montreal, tree trimming Pointe-Claire, emergency tree services, arborist Montreal"}
        canonicalUrl={getLocalizedPath('/')}
      />
      
      <SchemaMarkup type="LocalBusiness" data={{ city: "West Island Montreal" }} />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-10 pb-20">
          <div className="absolute inset-0">
            <LazyImage 
              priority={true} 
              src={imageUrl} 
              alt="Professional tree removal and trimming services in West Island Montreal by certified arborists" 
              width={1920} 
              height={1080} 
              className="w-full h-full"
              imgClassName="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gray-900/70"></div>
          </div>
          
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10">
            <div className="inline-flex items-center bg-primary/80 text-white px-4 py-2 rounded-full mb-6 font-semibold text-sm sm:text-base backdrop-blur-sm border border-primary/50">
              <Leaf className="w-4 h-4 mr-2" aria-hidden="true" />
              {isFr ? "Qualité Garantie & Assuré" : "Quality Assured & Insured"}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              {language === 'fr' ? "Services d'Arbres Professionnels Ouest de l'Île" : "Professional Tree Services in the West Island of Montreal, & Surrounding Areas"}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              {t('home.heroSubtitle')}
            </p>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-12">
              {trustSignals.map((signal, index) => (
                <div key={index} className="flex items-center bg-white/10 backdrop-blur-md px-4 sm:px-6 py-3 rounded-full border border-white/20">
                  <signal.icon className="h-5 w-5 text-primary mr-2" aria-hidden="true" />
                  <span className="text-white font-medium text-sm sm:text-base">{signal.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-primary hover:bg-secondary text-white text-lg px-8 py-6 w-full sm:w-auto min-h-[56px] shadow-lg shadow-primary/30">
                <Link to={getLocalizedPath('/contact')}>{t('common.getFreeQuote')}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6 w-full sm:w-auto min-h-[56px]">
                <a href="tel:4383655410">
                  <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                  (438) 365-5410
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Main Content Section for SEO */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {isFr ? "Experts en Abattage, Élagage et Essouchage à Montréal" : "Experts in Tree Removal, Trimming, and Stump Grinding in Montreal"}
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {isFr ? "Service d'Arbres Brandse Inc. est votre partenaire de confiance pour tous vos besoins en arboriculture. Que vous ayez besoin d'un " : "Service d'Arbres Brandse Inc. is your trusted partner for all your arboriculture needs. Whether you need a "}
                <Link to={getLocalizedPath('/tree-removal')} className="text-primary font-semibold hover:underline">{isFr ? "abattage d'arbre complexe" : "complex tree removal"}</Link>
                {isFr ? ", d'un " : ", a "}
                <Link to={getLocalizedPath('/tree-trimming')} className="text-primary font-semibold hover:underline">{isFr ? "élagage de précision" : "tree trimming"}</Link>
                {isFr ? ", ou d'un " : ", or "}
                <Link to={getLocalizedPath('/stump-grinding')} className="text-primary font-semibold hover:underline">{isFr ? "essouchage complet" : "complete stump grinding"}</Link>
                {isFr ? ", nos arboriculteurs certifiés sont équipés pour gérer chaque projet en toute sécurité. Nous intervenons rapidement lors d'urgences 24/7." : ", our certified arborists are equipped to handle every project safely. We respond quickly to 24/7 emergencies."}
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Carousel Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {isFr ? "Ce Que Disent Nos Clients" : "Customer Testimonials"}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {isFr ? "La satisfaction de nos clients est notre meilleure publicité. Découvrez leurs expériences." : "Our clients' satisfaction is our best advertisement. Discover their experiences."}
              </p>
            </div>
            <TestimonialsCarousel />
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{isFr ? "Pourquoi Nous Choisir ?" : "Why Choose Us?"}</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">{isFr ? "L'excellence en arboriculture, soutenue par des années d'expérience et un engagement envers la sécurité." : "Excellence in arboriculture, backed by years of experience and a commitment to safety."}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, idx) => (
                <article key={idx} className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100 hover:shadow-lg transition-shadow group">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <item.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas Grid */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{isFr ? "Zones Desservies" : "Areas We Serve"}</h2>
                <p className="text-lg text-gray-400">{isFr ? "Nous offrons nos services d'experts dans tout l'Ouest de l'Île et Vaudreuil-Soulanges." : "We offer our expert services throughout the West Island and Vaudreuil-Soulanges."}</p>
              </div>
              <Button asChild className="bg-primary hover:bg-secondary text-white min-h-[44px]">
                <Link to={getLocalizedPath('/contact')}>{isFr ? "Vérifier ma zone" : "Check My Area"}</Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {serviceAreas.map((area, index) => (
                <Link 
                  key={index} 
                  to={getLocalizedPath(area.path)}
                  className="bg-gray-800 rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center group border border-gray-700 hover:border-primary hover:bg-gray-800/80 transition-all min-h-[100px]"
                >
                  <MapPin className="h-6 w-6 text-primary mb-3 group-hover:scale-110 transition-transform" aria-hidden="true" />
                  <span className="font-semibold text-center group-hover:text-primary transition-colors">{area.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Blog Posts */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {isFr ? "Derniers Articles & Conseils" : "Latest Articles & Tips"}
                </h2>
                <p className="text-lg text-gray-600">
                  {isFr ? "Restez informé avec nos conseils d'experts sur l'entretien des arbres." : "Stay informed with our expert tips on tree care and maintenance."}
                </p>
              </div>
              <Button asChild variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 min-h-[44px]">
                <Link to={getLocalizedPath('/blog')}>
                  {isFr ? "Voir tout le blogue" : "View All Posts"} <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recentPosts.map(post => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <NewsletterSignup />
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <LazyImage 
              src="https://horizons-cdn.hostinger.com/e1153006-2afb-49ee-92e0-b73c646df449/a817b32156bd950f63c1602e7afde7dc.webp" 
              alt="Beautiful healthy trees in a residential neighborhood" 
              width={1920} 
              height={1080} 
              className="w-full h-full"
              imgClassName="w-full h-full object-cover mix-blend-overlay"
            />
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              {isFr ? "Prêt à transformer votre propriété ?" : "Ready to transform your property?"}
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
              {isFr ? "Contactez-nous dès aujourd'hui pour une évaluation gratuite et sans engagement de vos arbres." : "Contact us today for a free, no-obligation assessment of your trees."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-10 py-6 min-h-[56px] shadow-xl">
                <Link to={getLocalizedPath('/contact')}>{t('common.getFreeQuote')}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-10 py-6 min-h-[56px]">
                <a href="tel:4383655410">
                  <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                  (438) 365-5410
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
