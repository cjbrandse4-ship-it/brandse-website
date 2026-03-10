
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Search, Mail, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import Breadcrumbs from '@/components/Breadcrumbs.jsx';
import BreadcrumbSchema from '@/components/BreadcrumbSchema.jsx';
import SEOHead from '@/components/SEOHead.jsx';
import FAQSchema from '@/components/FAQSchema.jsx';
import { useLanguage } from '@/contexts/LanguageContext';

const FAQPage = () => {
  const { t, getLocalizedPath, language } = useLanguage();
  const isFr = language === 'fr';
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategoriesFr = [
    {
      category: "Général et Tarification",
      items: [
        {
          q: "Ai-je besoin d'un permis pour abattre un arbre sur ma propriété ?",
          a: "Dans la grande majorité des municipalités de l'Ouest de l'Île de Montréal et de Vaudreuil-Soulanges, un permis ou un certificat d'autorisation est strictement obligatoire pour l'abattage de tout arbre dont le diamètre du tronc dépasse 10 centimètres (mesuré à 1,3 mètre du sol). Les villes comme Pointe-Claire, Beaconsfield et Saint-Lazare ont des réglementations très rigoureuses pour protéger leur canopée urbaine. L'abattage sans permis peut entraîner des amendes sévères. Notre équipe d'arboriculteurs certifiés peut évaluer votre arbre, fournir le rapport d'expertise souvent exigé par la ville, et vous guider dans le processus de demande de permis."
        },
        {
          q: "Combien coûte l'abattage d'un arbre ?",
          a: "Le coût de l'abattage d'un arbre varie considérablement, allant généralement de 500 $ à plus de 3 000 $, car chaque situation est unique. Plusieurs facteurs influencent le prix : la hauteur et le diamètre de l'arbre, son emplacement (une cour arrière clôturée sans accès coûtera plus cher), la proximité de structures comme votre maison ou des lignes électriques, et l'état de l'arbre. Des services supplémentaires comme l'essouchage sont facturés séparément."
        },
        {
          q: "Offrez-vous des estimations gratuites ?",
          a: "Oui, nous offrons des estimations gratuites et sans engagement sur place dans tout l'Ouest de l'Île de Montréal et la région de Vaudreuil-Soulanges. Un de nos experts se rendra sur votre propriété pour évaluer le travail et vous fournir une soumission détaillée et transparente."
        },
        {
          q: "Êtes-vous entièrement assuré et certifié ?",
          a: "Absolument. Nous possédons une assurance responsabilité civile complète pour protéger votre propriété pendant toute la durée des travaux. De plus, notre équipe est composée d'arboriculteurs certifiés et formés selon les normes de sécurité les plus strictes de l'industrie (CNESST)."
        }
      ]
    },
    {
      category: "Élagage, Taille de Haies et Plantation",
      items: [
        {
          q: "Quel est le meilleur moment de l'année pour tailler ou élaguer mes arbres ?",
          a: "Le moment idéal dépend de l'espèce. En règle générale, la fin de l'hiver (février-mars), pendant la dormance, est la meilleure période pour la plupart des feuillus comme les chênes et les érables. La taille en dormance favorise une guérison rapide au printemps. Cependant, la taille corrective mineure ou l'enlèvement de branches mortes ou dangereuses doit être effectué à tout moment de l'année."
        },
        {
          q: "À quelle fréquence les haies de cèdres doivent-elles être taillées ?",
          a: "Dans la région de Montréal, les haies de cèdres devraient idéalement être taillées une fois par an, généralement entre la mi-juin et septembre. Une taille annuelle régulière permet de maintenir leur forme, d'encourager un feuillage dense et d'éviter qu'elles ne deviennent trop larges ou dégarnies à la base."
        },
        {
          q: "Quels sont les meilleurs arbres à planter dans l'Ouest de l'Île ?",
          a: "Les espèces indigènes sont toujours un excellent choix car elles sont adaptées à notre climat et à notre sol. L'érable à sucre, le chêne rouge, le tilleul d'Amérique et le pin blanc prospèrent très bien. Nous recommandons d'éviter les frênes (à cause de l'agrile) et de faire attention aux érables argentés près des fondations."
        },
        {
          q: "Offrez-vous des services de plantation d'arbres ?",
          a: "Oui, nous offrons des services complets de plantation. Nous vous aidons à sélectionner la bonne espèce pour votre type de sol et l'espace disponible, nous préparons le site, et nous utilisons des techniques de plantation professionnelles (incluant le tuteurage et le paillis) pour assurer la survie et la croissance optimale de votre nouvel arbre."
        }
      ]
    },
    {
      category: "Essouchage et Nettoyage",
      items: [
        {
          q: "Que faites-vous avec le bois et les branches après l'abattage ?",
          a: "Nous offrons un service clé en main. Les petites branches sont passées dans notre déchiqueteuse pour être transformées en copeaux écologiques. Pour le tronc et les grosses branches, nous pouvons soit retirer entièrement le bois de votre terrain, soit le couper en bûches de 16 pouces que nous laissons sur place pour votre usage personnel (bois de chauffage)."
        },
        {
          q: "L'essouchage laisse-t-il un trou énorme dans mon terrain ?",
          a: "Nous broyons la souche et les racines de surface de 6 à 12 pouces sous le niveau du sol. Le trou résultant est généralement rempli avec les copeaux de bois mélangés à la terre existante, laissant une surface plane et sécuritaire que vous pouvez recouvrir de terre végétale et de gazon."
        },
        {
          q: "Puis-je planter un nouvel arbre exactement où se trouvait l'ancienne souche ?",
          a: "Il n'est généralement pas recommandé de planter un nouvel arbre exactement au même endroit. Les anciennes racines profondes prennent des années à se décomposer et le sol à cet endroit est souvent appauvri en nutriments. Nous suggérons de planter le nouvel arbre à au moins 3 ou 4 pieds de l'ancien emplacement."
        },
        {
          q: "Votre équipement lourd endommagera-t-il ma pelouse ?",
          a: "La protection de votre propriété est notre priorité. Nous utilisons des équipements spécialisés conçus pour minimiser l'impact sur le gazon. Lorsque le sol est mou ou que nous devons utiliser de la machinerie plus lourde, nous installons des tapis de protection robustes pour préserver votre aménagement paysager."
        }
      ]
    },
    {
      category: "Urgence et Sécurité",
      items: [
        {
          q: "Intervenez-vous en cas d'urgence (arbre tombé sur la maison, tempête) ?",
          a: "Absolument. Nous offrons un service d'intervention d'urgence 24 heures sur 24, 7 jours sur 7. Si une tempête ou des vents forts font tomber un arbre sur votre maison ou bloquent un accès, notre équipe se déploiera rapidement pour sécuriser les lieux et prévenir des dommages structurels supplémentaires."
        },
        {
          q: "Que dois-je faire si un arbre tombe sur des lignes électriques ?",
          a: "Restez à au moins 10 mètres de distance et appelez Hydro-Québec immédiatement au 911 ou au 1-800-790-2424. N'essayez jamais de toucher ou de déplacer l'arbre vous-même, car les lignes pourraient être sous tension. Une fois qu'Hydro-Québec aura sécurisé le courant, notre équipe pourra intervenir pour retirer l'arbre en toute sécurité."
        },
        {
          q: "À quelle vitesse pouvez-vous répondre à une urgence ?",
          a: "Lors de situations d'urgence critiques (arbre sur une maison ou bloquant une rue), nous priorisons ces appels. Dans la plupart des cas dans l'Ouest de l'Île, nous pouvons avoir une équipe d'évaluation et de sécurisation sur place en quelques heures, de jour comme de nuit."
        }
      ]
    }
  ];

  const faqCategoriesEn = [
    {
      category: "General & Pricing",
      items: [
        {
          q: "Do I need a permit to remove a tree on my property?",
          a: "In the vast majority of municipalities in the West Island of Montreal and Vaudreuil-Soulanges, a permit or certificate of authorization is strictly mandatory for the removal of any tree with a trunk diameter exceeding 10 centimeters (measured at 1.3 meters from the ground). Cities like Pointe-Claire, Beaconsfield, and Saint-Lazare have very rigorous regulations. Removing a tree without a permit can result in severe fines. Our certified arborists can assess your tree, provide the required expert report, and guide you through the permit application process."
        },
        {
          q: "How much does tree removal cost?",
          a: "The cost of tree removal varies considerably, generally ranging from $500 to over $3,000, as every situation is unique. Several factors influence the price: the height and diameter of the tree, its location (a fenced backyard with no access will cost more), proximity to structures like your home or power lines, and the condition of the tree. Additional services like stump grinding are billed separately."
        },
        {
          q: "Do you offer free estimates?",
          a: "Yes, we offer free, no-obligation on-site estimates across the West Island of Montreal and the Vaudreuil-Soulanges region. One of our experts will visit your property to assess the job and provide you with a detailed, transparent quote."
        },
        {
          q: "Are you fully insured and licensed?",
          a: "Absolutely. We carry comprehensive liability insurance to protect your property throughout the duration of the work. Furthermore, our team consists of certified arborists trained according to the strictest industry safety standards (CNESST)."
        }
      ]
    },
    {
      category: "Trimming, Hedge Pruning & Planting",
      items: [
        {
          q: "When is the best time of year to trim or prune my trees?",
          a: "The ideal time depends on the species. As a general rule, late winter (February-March), during dormancy, is the best time for most hardwoods like oaks and maples. Dormant pruning promotes rapid healing in the spring. However, minor corrective pruning or the removal of dead or hazardous branches should be done at any time of the year."
        },
        {
          q: "How often should cedar hedges be trimmed?",
          a: "In the Montreal area, cedar hedges should ideally be trimmed once a year, usually between mid-June and September. Regular annual trimming helps maintain their shape, encourages dense foliage, and prevents them from becoming too wide or bare at the base."
        },
        {
          q: "What are the best trees to plant in the West Island?",
          a: "Native species are always an excellent choice as they are adapted to our climate and soil. Sugar Maple, Red Oak, American Linden, and White Pine thrive very well. We recommend avoiding Ash trees (due to the Emerald Ash Borer) and being careful with Silver Maples near foundations."
        },
        {
          q: "Do you provide tree planting services?",
          a: "Yes, we offer complete tree planting services. We help you select the right species for your soil type and available space, prepare the site, and use professional planting techniques (including staking and mulching) to ensure the survival and optimal growth of your new tree."
        }
      ]
    },
    {
      category: "Stump Grinding & Cleanup",
      items: [
        {
          q: "What do you do with the wood and branches after removal?",
          a: "We offer a turnkey service. Small branches are run through our chipper to be transformed into eco-friendly wood chips. For the main trunk and large branches, we can either completely remove the wood from your property or cut it into 16-inch logs left on-site for your personal use (firewood)."
        },
        {
          q: "Does stump grinding leave a huge hole in my yard?",
          a: "We grind the stump and surface roots 6 to 12 inches below ground level. The resulting hole is typically filled with the wood chips mixed with the existing soil, leaving a flat, safe surface that you can cover with topsoil and grass seed."
        },
        {
          q: "Can I plant a new tree exactly where the old stump was?",
          a: "It is generally not recommended to plant a new tree in the exact same spot. The old deep roots take years to decompose, and the soil in that area is often depleted of nutrients. We suggest planting the new tree at least 3 to 4 feet away from the old location."
        },
        {
          q: "Will your heavy equipment damage my lawn?",
          a: "Protecting your property is our priority. We use specialized equipment designed to minimize impact on turf. When the ground is soft or we need to use heavier machinery, we install heavy-duty protective ground mats to preserve your landscaping."
        }
      ]
    },
    {
      category: "Emergency & Safety",
      items: [
        {
          q: "Do you provide emergency services (tree fallen on house, storm damage)?",
          a: "Absolutely. We offer a 24/7 emergency response service. If a storm or high winds cause a tree to fall on your home or block access, our team will deploy quickly to secure the area and prevent further structural damage."
        },
        {
          q: "What should I do if a tree falls on power lines?",
          a: "Stay at least 10 meters away and call Hydro-Québec immediately at 911 or 1-800-790-2424. Never attempt to touch or move the tree yourself, as the lines could be live. Once Hydro-Québec has secured the power, our team can safely step in to remove the tree."
        },
        {
          q: "How quickly can you respond to an emergency?",
          a: "During critical emergencies (tree on a house or blocking a street), we prioritize those calls. In most cases within the West Island, we can have an assessment and securing crew on-site within a few hours, day or night."
        }
      ]
    }
  ];

  const activeCategories = isFr ? faqCategoriesFr : faqCategoriesEn;

  // Filter categories based on search term
  const filteredCategories = activeCategories.map(category => {
    const filteredItems = category.items.filter(faq => 
      faq.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
      faq.a.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return { ...category, items: filteredItems };
  }).filter(category => category.items.length > 0);

  const pageTitle = isFr ? "Foire Aux Questions (FAQ) | Service d'Arbres Brandse" : "Frequently Asked Questions (FAQ) | Service d'Arbres Brandse";
  const pageDesc = isFr ? "Trouvez des réponses détaillées à vos questions sur l'abattage d'arbres, les permis municipaux, les coûts, l'élagage et nos services d'urgence dans le Grand Montréal." : "Find detailed answers to your questions about tree removal, municipal permits, costs, trimming, and our emergency services in Greater Montreal.";
  const keywords = isFr ? "faq arbre, permis abattage, prix abattage arbre, questions arboriculteur, urgence arbre" : "tree faq, tree removal permit, tree removal cost, arborist questions, emergency tree service";
  const pageUrl = `https://servicedarbresbrandse.com${getLocalizedPath('/faq')}`;

  return (
    <div className="overflow-x-hidden">
      <SEOHead 
        title={pageTitle}
        description={pageDesc}
        keywords={keywords}
        canonicalUrl={getLocalizedPath('/faq')}
      />
      <FAQSchema categories={activeCategories} />

      <BreadcrumbSchema breadcrumbs={[
        { label: isFr ? 'Accueil' : 'Home', url: '/' },
        { label: 'FAQ', url: '/faq' }
      ]} />

      <Header />

      <section className="bg-primary text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumbs items={[{label: 'FAQ'}]} />
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 mt-4">
            {isFr ? "Foire Aux Questions" : "Frequently Asked Questions"}
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            {isFr ? "Tout ce que vous devez savoir sur l'entretien des arbres et nos services." : "Everything you need to know about tree care and our services."}
          </p>
          
          <div className="max-w-xl mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-12 pr-4 py-4 border border-transparent rounded-xl leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary shadow-lg sm:text-lg transition-all min-h-[56px]"
              placeholder={isFr ? "Rechercher une question..." : "Search for a question..."}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gray-50 min-h-[400px]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="sr-only">{isFr ? "Questions Fréquentes" : "Common Questions"}</h2>
          
          {filteredCategories.length > 0 ? (
            <div className="space-y-12">
              {filteredCategories.map((category, catIndex) => (
                <div key={catIndex} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="bg-gray-100/50 px-6 py-4 border-b border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
                  </div>
                  <div className="p-6">
                    <Accordion type="single" collapsible className="space-y-4">
                      {category.items.map((faq, index) => (
                        <AccordionItem key={index} value={`faq-${catIndex}-${index}`} className="border border-gray-200 rounded-xl px-6 bg-white hover:border-primary/30 transition-colors">
                          <AccordionTrigger className="text-left font-bold text-lg text-gray-900 hover:text-primary py-5 min-h-[60px]">
                            {faq.q}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-700 leading-relaxed pb-6 text-base">
                            {faq.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-xl border border-gray-200 shadow-sm">
              <p className="text-xl text-gray-600 mb-4">{isFr ? "Aucun résultat trouvé." : "No results found."}</p>
              <Button 
                variant="outline" 
                onClick={() => setSearchTerm('')}
                className="min-h-[44px]"
              >
                {isFr ? "Effacer la recherche" : "Clear search"}
              </Button>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {isFr ? "Vous avez d'autres questions ?" : "Still Have Questions?"}
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            {isFr ? "Notre équipe d'experts est là pour vous aider avec tous vos besoins en arboriculture." : "Our team of experts is here to help with all your tree care needs."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button asChild size="lg" className="bg-primary hover:bg-secondary min-h-[56px] px-8 text-lg">
              <Link to={getLocalizedPath('/contact')}>{t('common.getFreeQuote')}</Link>
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 text-gray-700">
            <a href="tel:4383655410" className="flex items-center hover:text-primary font-bold text-lg transition-colors min-h-[44px] px-4 rounded-md hover:bg-gray-50">
              <Phone className="h-6 w-6 mr-3 text-primary" />
              (438) 365-5410
            </a>
            <a href="mailto:info@brandses.com" className="flex items-center hover:text-primary font-bold text-lg transition-colors min-h-[44px] px-4 rounded-md hover:bg-gray-50">
              <Mail className="h-6 w-6 mr-3 text-primary" />
              info@brandses.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQPage;
