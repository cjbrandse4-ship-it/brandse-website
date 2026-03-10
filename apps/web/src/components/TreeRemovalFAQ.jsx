
import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { useLanguage } from '@/contexts/LanguageContext';

const TreeRemovalFAQ = () => {
  const { language } = useLanguage();
  const isFr = language === 'fr';

  const faqs = isFr ? [
    {
      question: "Ai-je besoin d'un permis pour l'abattage d'arbres à Pointe-Claire ?",
      answer: "Oui, la ville de Pointe-Claire exige un certificat d'autorisation pour l'abattage de tout arbre dont le diamètre du tronc est de 10 cm ou plus, mesuré à 1,3 mètre du sol. Nous pouvons vous aider à naviguer dans le processus de demande de permis municipal."
    },
    {
      question: "Combien coûte l'abattage d'un arbre à Saint-Lazare ?",
      answer: "Le coût de l'abattage d'un arbre à Saint-Lazare varie en fonction de plusieurs facteurs : la taille et la hauteur de l'arbre, son emplacement (proximité des bâtiments ou des lignes électriques), l'état de l'arbre et la complexité du travail. Contactez-nous pour une estimation gratuite et précise."
    },
    {
      question: "Que se passe-t-il avec le bois après l'abattage de l'arbre ?",
      answer: "Nous offrons plusieurs options : nous pouvons déchiqueter les petites branches sur place, couper le bois en bûches pour votre usage personnel (bois de chauffage), ou retirer complètement tout le bois et les débris de votre propriété pour les recycler de manière responsable."
    }
  ] : [
    {
      question: "Do I need a permit for tree removal in Pointe-Claire?",
      answer: "Yes, the city of Pointe-Claire requires a certificate of authorization for the felling of any tree with a trunk diameter of 10 cm or more, measured at 1.3 meters from the ground. We can help you navigate the municipal permit application process."
    },
    {
      question: "How much does tree removal cost in Saint-Lazare?",
      answer: "The cost of tree removal in Saint-Lazare varies based on several factors: the size and height of the tree, its location (proximity to buildings or power lines), the condition of the tree, and the complexity of the job. Contact us for a free, accurate estimate."
    },
    {
      question: "What happens to the wood after you cut the tree?",
      answer: "We offer several options: we can chip small branches on-site, cut the wood into logs for your personal use (firewood), or completely remove all wood and debris from your property for responsible recycling."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {isFr ? "Questions Fréquemment Posées" : "Frequently Asked Questions"}
          </h2>
          <p className="text-lg text-gray-600">
            {isFr ? "Trouvez des réponses à vos questions sur l'abattage d'arbres." : "Find answers to your questions about tree removal."}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-100 rounded-xl px-6 py-2 bg-gray-50/50 hover:bg-gray-50 transition-colors data-[state=open]:bg-white data-[state=open]:shadow-md data-[state=open]:border-primary/20"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline hover:text-primary py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default TreeRemovalFAQ;
