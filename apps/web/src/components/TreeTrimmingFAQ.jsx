
import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { useLanguage } from '@/contexts/LanguageContext';

const TreeTrimmingFAQ = () => {
  const { language } = useLanguage();
  const isFr = language === 'fr';

  const faqs = isFr ? [
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
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {isFr ? "Questions Fréquemment Posées sur l'Élagage" : "Frequently Asked Questions About Tree Trimming"}
          </h2>
          <p className="text-lg text-gray-600">
            {isFr ? "Trouvez des réponses à vos questions sur l'entretien et la taille de vos arbres." : "Find answers to your questions about tree care and pruning."}
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

export default TreeTrimmingFAQ;
