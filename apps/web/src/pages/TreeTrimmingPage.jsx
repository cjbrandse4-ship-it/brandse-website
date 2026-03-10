
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone, BookOpen, Scissors } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import Breadcrumbs from '@/components/Breadcrumbs.jsx';
import LocalBusinessSchema from '@/components/LocalBusinessSchema.jsx';
import ServiceSchema from '@/components/ServiceSchema.jsx';
import BreadcrumbSchema from '@/components/BreadcrumbSchema.jsx';
import SEOHead from '@/components/SEOHead.jsx';
import RelatedServices from '@/components/RelatedServices.jsx';
import TreeTrimmingFAQ from '@/components/TreeTrimmingFAQ.jsx';
import TreeTrimmingFAQSchema from '@/components/TreeTrimmingFAQSchema.jsx';
import { useLanguage } from '@/contexts/LanguageContext';

const TreeTrimmingPage = () => {
  const { language, t, getLocalizedPath } = useLanguage();
  const isFr = language === 'fr';

  const pageTitle = isFr ? "Services d'Élagage et Taille d'Arbres Ouest de l'Île de Montréal | Service d'Arbres Brandse" : "Tree Trimming & Pruning Services West Island Montreal | Service d'Arbres Brandse";
  const pageDesc = isFr ? "Élagage expert, taille et réduction de cime à Pointe-Claire, Hudson, Kirkland. Améliorez la santé, la sécurité et l'esthétique de vos arbres. Arboriculteurs certifiés." : "Expert tree trimming, pruning & crown reduction in Pointe-Claire, Hudson, Kirkland. Improve tree health, safety & aesthetics. Licensed arborists.";
  const keywords = isFr ? "élagage arbre Pointe-Claire, taille arbre Ouest de l'Île, réduction cime Hudson, élagage professionnel Montréal" : "tree trimming Pointe-Claire, tree pruning West Island, crown reduction Hudson, professional tree trimming Montreal";
  const pageUrl = `https://servicedarbresbrandse.com${getLocalizedPath('/tree-trimming')}`;
  const imageUrl = "https://images.unsplash.com/photo-1597069787525-716e99359f4c";

  const schemaFaqs = isFr ? [
    {
      question: "Comment savoir si mon arbre a besoin d'un élagage professionnel ?",
      answer: "Recherchez des branches mortes, malades ou cassées, des branches qui se frottent, une densité excessive de la cime bloquant la lumière et le vent, ou des branches interférant avec les structures ou les lignes électriques. Si vous remarquez l'un de ces signes, il est temps de faire appel à un professionnel."
    },
    {
      question: "L'étêtage (Tree Topping) est-il une pratique de taille sécuritaire ?",
      answer: "Non, l'étêtage est une pratique dépassée et nuisible qui endommage gravement la structure de l'arbre, favorise une croissance rapide et faible (gourmands), et augmente considérablement le risque de maladies et de pourriture. Nous utilisons plutôt des techniques appropriées de réduction de cime."
    },
    {
      question: "Quel est le meilleur moment pour l'élagage dans l'Ouest de l'Île et Vaudreuil ?",
      answer: "Bien que les branches mortes ou dangereuses doivent être enlevées immédiatement toute l'année, le meilleur moment pour la taille structurelle de la plupart des feuillus est la fin de l'hiver (période de dormance). Le printemps et l'été conviennent pour une taille corrective mineure."
    },
    {
      question: "Pourquoi devrais-je engager un arboriculteur certifié pour mon élagage ?",
      answer: "Les arboriculteurs certifiés ont la formation nécessaire pour tailler les arbres sans endommager leur santé ou leur structure. Nous possédons également l'équipement spécialisé, les assurances complètes et les protocoles de sécurité stricts pour effectuer des travaux dangereux en hauteur en toute sécurité."
    }
  ] : [
    {
      question: "How can I tell if my tree needs professional pruning?",
      answer: "Look for dead, diseased, or broken branches, branches rubbing together, excessive canopy density blocking light and wind, or branches interfering with structures or power lines. If you notice any of these signs, it's time to call a professional."
    },
    {
      question: "Is Tree Topping a safe pruning practice?",
      answer: "No, tree topping is an outdated and harmful practice that severely damages the tree's structure, promotes weak rapid growth (water sprouts), and significantly increases the risk of disease and decay. We use proper crown reduction techniques instead."
    },
    {
      question: "When is the best time for tree pruning in the West Island and Vaudreuil?",
      answer: "While dead or hazardous branches should be removed immediately year-round, the best time for structural pruning of most hardwoods is during late winter dormancy. Spring and summer are fine for minor corrective pruning."
    },
    {
      question: "Why should I hire a Certified Arborist for my trimming?",
      answer: "Certified Arborists have the training to prune trees without damaging their health or structure. We also have the specialized equipment, comprehensive insurance, and strict safety protocols to handle dangerous work at heights safely."
    }
  ];

  return (
    <>
      <SEOHead 
        title={pageTitle}
        description={pageDesc}
        keywords={keywords}
        canonicalUrl={getLocalizedPath('/tree-trimming')}
      />
      
      <LocalBusinessSchema 
        description={pageDesc} 
        url={pageUrl} 
      />
      
      <ServiceSchema 
        serviceName={isFr ? "Élagage d'arbres" : "Tree Trimming"}
        serviceDescription={isFr ? "Services professionnels d'élagage, de taille et de réduction de cime pour améliorer la santé et l'esthétique de vos arbres." : "Professional tree trimming, pruning, and crown reduction services to improve the health and aesthetics of your trees."}
        url={pageUrl}
        availability="Monday-Friday 8am-5pm, Saturday 9am-3pm"
      />

      <BreadcrumbSchema breadcrumbs={[
        { label: isFr ? 'Accueil' : 'Home', url: '/' },
        { label: isFr ? 'Services' : 'Services', url: '/services' },
        { label: isFr ? 'Élagage' : 'Tree Trimming', url: '/services/tree-trimming' }
      ]} />

      <TreeTrimmingFAQSchema faqs={schemaFaqs} />

      <Header />

      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 flex items-center justify-center min-h-[60vh]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}>
          <div className="absolute inset-0 bg-gray-900/80"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumbs items={[{label: isFr ? 'Services' : 'Services', path: '/services'}, {label: isFr ? "Élagage" : "Tree Trimming"}]} />
          <div className="inline-flex items-center bg-primary/20 text-primary-foreground border border-primary/50 px-4 py-1.5 rounded-full mb-6 mt-4 font-semibold text-sm uppercase tracking-wider backdrop-blur-sm">
            <Scissors className="w-4 h-4 mr-2" />
            {isFr ? "Soins Arboricoles" : "Arboricultural Care"}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            {isFr ? "Élagage et Taille d'Arbres" : "Professional Tree Trimming"}
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            {isFr ? "Améliorez la santé, la structure et la beauté de vos arbres grâce à des techniques d'élagage approuvées par l'industrie." : "Improve the health, structure, and beauty of your trees with industry-approved pruning techniques."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-secondary text-white text-lg px-8 py-6">
              <Link to={getLocalizedPath('/contact')}>{t('common.getFreeQuote')}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6">
              <a href="tel:4383655410"><Phone className="mr-2 h-5 w-5" />(438) 365-5410</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {isFr ? "La Science de l'Élagage" : "The Science of Pruning"}
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  {isFr ? "L'élagage est bien plus qu'une simple coupe de branches. C'est une intervention chirurgicale sur un organisme vivant. Une mauvaise taille (comme l'étêtage) peut causer des dommages irréversibles, affaiblir l'arbre et éventuellement nécessiter un " : "Pruning is much more than just cutting branches. It's a surgical intervention on a living organism. Improper pruning (like topping) can cause irreversible damage, weaken the tree, and eventually require "}
                  <Link to={getLocalizedPath('/tree-removal')} className="text-primary hover:underline">{isFr ? "abattage complet" : "complete removal"}</Link>.
                </p>
                <p>
                  {isFr ? "Nos arboriculteurs certifiés utilisent des techniques spécifiques :" : "Our certified arborists use specific techniques:"}
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" /><span><strong>{isFr ? "Bois mort :" : "Deadwooding:"}</strong> {isFr ? "Élimination des branches mortes ou malades pour prévenir la pourriture." : "Removal of dead or diseased branches to prevent decay."}</span></li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" /><span><strong>{isFr ? "Éclaircissage :" : "Thinning:"}</strong> {isFr ? "Réduction de la densité de la cime pour laisser passer le vent et la lumière." : "Reducing crown density to allow wind and light to pass through."}</span></li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" /><span><strong>{isFr ? "Rehaussement :" : "Raising:"}</strong> {isFr ? "Coupe des branches basses pour dégager les toits, rues ou trottoirs." : "Cutting lower branches to clear roofs, streets, or sidewalks."}</span></li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{isFr ? "Considérations Saisonnières au Québec" : "Seasonal Considerations in Quebec"}</h3>
              <p className="text-gray-600 mb-6">
                {isFr ? "Le climat québécois dicte le moment idéal pour tailler différentes espèces :" : "The Quebec climate dictates the ideal time to trim different species:"}
              </p>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                  <h4 className="font-bold text-gray-900">{isFr ? "Hiver (Dormance)" : "Winter (Dormancy)"}</h4>
                  <p className="text-sm text-gray-600">{isFr ? "Le meilleur moment pour la plupart des feuillus (chênes, érables). Les coupes guérissent plus vite au printemps." : "The best time for most hardwoods (oaks, maples). Cuts heal faster in spring."}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                  <h4 className="font-bold text-gray-900">{isFr ? "Printemps / Été" : "Spring / Summer"}</h4>
                  <p className="text-sm text-gray-600">{isFr ? "Idéal pour enlever le bois mort visible ou pour une taille corrective mineure." : "Ideal for removing visible deadwood or minor corrective pruning."}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500">
                  <h4 className="font-bold text-gray-900">{isFr ? "Toute l'année" : "Year-Round"}</h4>
                  <p className="text-sm text-gray-600">{isFr ? "Les branches dangereuses, cassées ou menaçant des structures doivent être enlevées immédiatement." : "Hazardous, broken, or structure-threatening branches must be removed immediately."}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">{isFr ? "Apprenez-en plus sur l'élagage" : "Learn More About Trimming"}</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to={getLocalizedPath('/blog/tree-trimming-tips')} className="inline-flex items-center bg-white/10 hover:bg-white/20 px-6 py-4 rounded-lg transition-colors font-semibold">
              <BookOpen className="h-5 w-5 mr-3 text-primary" />
              {isFr ? "Guide : 5 erreurs d'élagage à éviter" : "Guide: 5 Tree Trimming Mistakes to Avoid"}
            </Link>
          </div>
        </div>
      </section>

      <RelatedServices currentServiceId="tree-trimming" />

      <TreeTrimmingFAQ />

      <Footer />
    </>
  );
};

export default TreeTrimmingPage;
