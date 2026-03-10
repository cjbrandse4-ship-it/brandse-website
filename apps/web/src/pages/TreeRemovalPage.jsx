
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Shield, AlertTriangle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import Breadcrumbs from '@/components/Breadcrumbs.jsx';
import SchemaMarkup from '@/components/SchemaMarkup.jsx';
import SEOHead from '@/components/SEOHead.jsx';
import RelatedServices from '@/components/RelatedServices.jsx';
import TreeRemovalFAQ from '@/components/TreeRemovalFAQ.jsx';
import { useLanguage } from '@/contexts/LanguageContext';

const TreeRemovalPage = () => {
  const { language, t, getLocalizedPath } = useLanguage();
  const isFr = language === 'fr';

  const pageTitle = isFr ? "Services d'Abattage d'Arbres Ouest de l'Île de Montréal" : "Professional Tree Removal Services West Island Montreal";
  const pageDesc = isFr ? "Services d'abattage d'arbres sécuritaires et efficaces dans l'Ouest de l'Île. Nos arboriculteurs certifiés gèrent les arbres dangereux avec précision. Soumission gratuite!" : "Safe and efficient tree removal services in West Island Montreal. Our certified arborists handle hazardous trees with precision. Get your free quote today!";
  const keywords = isFr ? "abattage arbre Pointe-Claire, abattage arbre Hudson, abattage arbre Ouest de l'Île, urgence abattage arbre Montréal, arboriculteur professionnel" : "tree removal Pointe-Claire, tree removal Hudson, tree removal West Island, emergency tree removal Montreal, professional arborist";
  const imageUrl = "https://images.unsplash.com/photo-1663436295919-aca728934fa8";

  return (
    <div className="overflow-x-hidden">
      <SEOHead 
        title={pageTitle}
        description={pageDesc}
        keywords={keywords}
        canonicalUrl={getLocalizedPath('/tree-removal')}
      />
      
      <SchemaMarkup type="Service" data={{
        name: isFr ? "Abattage d'arbres" : "Tree Removal",
        description: pageDesc,
        url: `https://servicedarbresbrandse.com${getLocalizedPath('/tree-removal')}`
      }} />

      <SchemaMarkup type="BreadcrumbList" data={{
        items: [
          { name: isFr ? 'Accueil' : 'Home', path: '/' },
          { name: isFr ? 'Services' : 'Services', path: '/services' },
          { name: isFr ? "Abattage d'arbres" : 'Tree Removal', path: '/tree-removal' }
        ]
      }} />

      <Header />

      <main>
        <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 flex items-center justify-center min-h-[60vh]">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }} role="img" aria-label="Professional arborist safely removing a large tree">
            <div className="absolute inset-0 bg-gray-900/80"></div>
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Breadcrumbs items={[{label: isFr ? 'Services' : 'Services', path: '/services'}, {label: isFr ? "Abattage d'arbres" : "Tree Removal"}]} />
            <div className="inline-flex items-center bg-primary/20 text-primary-foreground border border-primary/50 px-4 py-1.5 rounded-full mb-6 mt-4 font-semibold text-sm uppercase tracking-wider backdrop-blur-sm">
              <Shield className="w-4 h-4 mr-2" aria-hidden="true" />
              {isFr ? "Arboriculteurs Certifiés" : "Certified Arborists"}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              {isFr ? "Services d'Abattage d'Arbres Professionnels" : "Professional Tree Removal Services"}
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              {isFr ? "Des solutions sécuritaires, efficaces et fiables pour les arbres dangereux, morts ou indésirables. Nous gérons les situations les plus complexes avec un équipement de pointe." : "Safe, efficient, and reliable solutions for hazardous, dead, or unwanted trees. We handle the most complex situations with state-of-the-art equipment."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-secondary text-white text-lg px-8 py-6 min-h-[56px] shadow-xl">
                <Link to={getLocalizedPath('/contact')}>{t('common.getFreeQuote')}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6 min-h-[56px]">
                <a href="tel:4383655410"><Phone className="mr-2 h-5 w-5" aria-hidden="true" />(438) 365-5410</a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {isFr ? "Pourquoi l'abattage d'arbres est-il parfois nécessaire ?" : "Why is Tree Removal Sometimes Necessary?"}
                </h2>
                <div className="prose prose-lg text-gray-600 max-w-none">
                  <p>
                    {isFr ? "Bien que nous fassions tout notre possible pour préserver les arbres grâce à l'" : "While we do everything possible to preserve trees through "}
                    <Link to={getLocalizedPath('/tree-trimming')} className="text-primary font-bold hover:underline min-h-[44px] inline-flex items-center">{isFr ? "élagage" : "tree trimming"}</Link>
                    {isFr ? ", l'abattage est parfois la seule option sécuritaire. Un arbre mort, malade ou structurellement compromis pose un risque majeur pour votre propriété, surtout lors des violentes tempêtes fréquentes au Québec. Notre équipe d'arboriculteurs certifiés évalue chaque situation avec soin pour garantir la sécurité de votre maison et de votre famille." : ", removal is sometimes the only safe option. A dead, diseased, or structurally compromised tree poses a major risk to your property, especially during Quebec's frequent severe storms. Our team of certified arborists carefully evaluates each situation to ensure the safety of your home and family."}
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{isFr ? "Signes qu'un arbre doit être abattu :" : "Signs a tree needs to be removed:"}</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start"><AlertTriangle className="h-6 w-6 text-amber-500 mr-3 mt-1 flex-shrink-0" aria-hidden="true" /><span>{isFr ? "Infestation sévère (ex: Agrile du frêne) détruisant l'arbre de l'intérieur." : "Severe infestation (e.g., Emerald Ash Borer) destroying the tree from within."}</span></li>
                    <li className="flex items-start"><AlertTriangle className="h-6 w-6 text-amber-500 mr-3 mt-1 flex-shrink-0" aria-hidden="true" /><span>{isFr ? "Dommages aux fondations, à la plomberie ou soulèvement de l'allée." : "Damage to foundations, plumbing, or driveway heaving."}</span></li>
                    <li className="flex items-start"><AlertTriangle className="h-6 w-6 text-amber-500 mr-3 mt-1 flex-shrink-0" aria-hidden="true" /><span>{isFr ? "Arbre mort, pourri ou en déclin rapide avec de grandes branches mortes." : "Dead, rotting, or rapidly declining tree with large dead branches."}</span></li>
                    <li className="flex items-start"><AlertTriangle className="h-6 w-6 text-amber-500 mr-3 mt-1 flex-shrink-0" aria-hidden="true" /><span>{isFr ? "Inclinaison soudaine ou fissures profondes dans le tronc principal." : "Sudden leaning or deep cracks in the main trunk."}</span></li>
                  </ul>
                  <p className="mt-6">
                    {isFr ? "Nous desservons fièrement " : "We proudly serve "}
                    <Link to={getLocalizedPath('/pointe-claire')} className="text-primary hover:underline">Pointe-Claire</Link>, 
                    <Link to={getLocalizedPath('/kirkland')} className="text-primary hover:underline"> Kirkland</Link>, 
                    <Link to={getLocalizedPath('/beaconsfield')} className="text-primary hover:underline"> Beaconsfield</Link>
                    {isFr ? " et tout l'Ouest de l'Île." : " and the entire West Island."}
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">{isFr ? "Notre Processus Étape par Étape" : "Our Step-by-Step Process"}</h2>
                <div className="space-y-8">
                  <div className="flex">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl shadow-md">1</div>
                    <div className="ml-5">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{isFr ? "Évaluation et Planification" : "Assessment & Planning"}</h3>
                      <p className="text-gray-600">{isFr ? "Nous inspectons l'arbre, évaluons les risques et déterminons la méthode de démontage la plus sûre." : "We inspect the tree, assess risks, and determine the safest dismantling method."}</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl shadow-md">2</div>
                    <div className="ml-5">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{isFr ? "Démontage Sécuritaire" : "Safe Dismantling"}</h3>
                      <p className="text-gray-600">{isFr ? "Utilisation de techniques de gréage pour abaisser les branches sans endommager votre terrain." : "Using rigging techniques to lower branches without damaging your property."}</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl shadow-md">3</div>
                    <div className="ml-5">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{isFr ? "Nettoyage et Essouchage" : "Cleanup & Stump Grinding"}</h3>
                      <p className="text-gray-600">
                        {isFr ? "Nous ramassons tous les débris. Nous recommandons notre service d'" : "We remove all debris. We highly recommend our "}
                        <Link to={getLocalizedPath('/stump-grinding')} className="text-primary font-bold hover:underline min-h-[44px] inline-flex items-center">{isFr ? "essouchage" : "stump grinding"}</Link>
                        {isFr ? " pour une finition parfaite." : " service for a perfect finish."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <RelatedServices currentServiceId="tree-removal" />
        
        <TreeRemovalFAQ />
      </main>

      <Footer />
    </div>
  );
};

export default TreeRemovalPage;
