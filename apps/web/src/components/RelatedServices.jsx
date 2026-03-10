
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Trash2, Disc, Scissors, Leaf, Sprout, AlertTriangle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const allServices = [
  { id: 'tree-removal', icon: Trash2, path: '/tree-removal', en: 'Tree Removal', fr: "Abattage d'arbres", descEn: 'Safe and efficient tree removal.', descFr: 'Abattage sécuritaire et efficace.' },
  { id: 'stump-grinding', icon: Disc, path: '/stump-grinding', en: 'Stump Grinding', fr: 'Essouchage', descEn: 'Complete stump removal.', descFr: 'Enlèvement complet des souches.' },
  { id: 'tree-trimming', icon: Scissors, path: '/tree-trimming', en: 'Tree Trimming', fr: 'Élagage', descEn: 'Professional pruning and trimming.', descFr: 'Taille et élagage professionnels.' },
  { id: 'hedge-trimming', icon: Leaf, path: '/hedge-trimming', en: 'Hedge Trimming', fr: 'Taille de Haies', descEn: 'Precision hedge shaping.', descFr: 'Taille de précision pour vos haies.' },
  { id: 'tree-planting', icon: Sprout, path: '/tree-planting', en: 'Tree Planting', fr: "Plantation d'arbres", descEn: 'Expert tree planting services.', descFr: 'Services experts de plantation.' },
  { id: 'emergency', icon: AlertTriangle, path: '/emergency-services', en: 'Emergency Services', fr: "Services d'urgence", descEn: '24/7 rapid response.', descFr: 'Intervention rapide 24/7.' }
];

const RelatedServices = ({ currentServiceId }) => {
  const { language, getLocalizedPath } = useLanguage();
  const isFr = language === 'fr';

  const related = allServices.filter(s => s.id !== currentServiceId).slice(0, 3);

  return (
    <section className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          {isFr ? "Services Connexes" : "Related Services"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {related.map((service) => (
            <Link 
              key={service.id} 
              to={getLocalizedPath(service.path)}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 group flex flex-col"
            >
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <service.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                {isFr ? service.fr : service.en}
              </h3>
              <p className="text-gray-600 mb-4 flex-grow">
                {isFr ? service.descFr : service.descEn}
              </p>
              <span className="inline-flex items-center text-primary font-semibold mt-auto">
                {isFr ? "En savoir plus" : "Learn more"} <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
