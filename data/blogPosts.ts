export interface BlogPost {
  id: number;
  slug: string;
  image: string;
  author: string;
  date: string;
  readingTime: string;
  category: string;
  en: {
    title: string;
    excerpt: string;
    metaDescription: string;
  };
  fr: {
    title: string;
    excerpt: string;
    metaDescription: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'spring-tree-maintenance',
    image: 'https://images.unsplash.com/photo-1691483720561-bf62eb4b7d00?w=800&h=500&fit=crop',
    author: 'John Brandse',
    date: '2024-03-10',
    readingTime: '5 min',
    category: 'Seasonal Tips',
    en: {
      title: 'Essential Spring Tree Maintenance Tips for Montreal Homeowners',
      excerpt: 'Get your trees ready for the growing season with these essential spring maintenance tips tailored for the West Island climate.',
      metaDescription: 'Prepare your trees for spring in Montreal. Learn essential maintenance tips including pruning, mulching, and inspecting for winter damage.',
    },
    fr: {
      title: "Conseils essentiels d'entretien printanier des arbres",
      excerpt: "Préparez vos arbres pour la saison de croissance avec ces conseils d'entretien printanier adaptés au climat de l'Ouest de l'Île.",
      metaDescription: "Préparez vos arbres pour le printemps à Montréal. Apprenez les conseils d'entretien essentiels incluant l'élagage et l'inspection.",
    },
  },
  {
    id: 2,
    slug: 'when-to-remove-a-tree',
    image: 'https://images.unsplash.com/photo-1550002079-5b59db6b6df9?w=800&h=500&fit=crop',
    author: 'Sarah Brandse',
    date: '2024-04-05',
    readingTime: '6 min',
    category: 'Tree Care',
    en: {
      title: "Knowing When It's Time to Remove a Tree",
      excerpt: 'Tree removal is a last resort, but sometimes necessary. Learn the critical signs that indicate a tree needs to be removed for safety.',
      metaDescription: 'Learn the critical signs that indicate a tree needs to be removed. Expert advice on assessing tree health and structural integrity.',
    },
    fr: {
      title: "Savoir quand il est temps d'abattre un arbre",
      excerpt: "L'abattage est un dernier recours, mais parfois nécessaire. Apprenez les signes critiques indiquant qu'un arbre doit être abattu.",
      metaDescription: "Apprenez les signes critiques indiquant qu'un arbre doit être abattu. Conseils d'experts sur l'évaluation de la santé des arbres.",
    },
  },
  {
    id: 3,
    slug: 'stump-grinding-vs-removal',
    image: 'https://images.unsplash.com/photo-1588878129387-e37104f9a87d?w=800&h=500&fit=crop',
    author: 'John Brandse',
    date: '2024-05-12',
    readingTime: '4 min',
    category: 'Tree Care',
    en: {
      title: 'Stump Grinding vs. Stump Removal: Which is Better?',
      excerpt: 'Understand the differences between stump grinding and complete stump removal to make the best choice for your landscaping project.',
      metaDescription: 'Compare stump grinding and stump removal methods. Find out which option is best for your yard, budget, and future landscaping plans.',
    },
    fr: {
      title: 'Essouchage vs Enlèvement complet : Lequel choisir ?',
      excerpt: "Comprenez les différences entre l'essouchage et l'enlèvement complet de la souche pour faire le meilleur choix pour votre terrain.",
      metaDescription: "Comparez les méthodes d'essouchage et d'enlèvement de souche. Découvrez quelle option convient le mieux à votre cour et votre budget.",
    },
  },
  {
    id: 4,
    slug: 'emergency-tree-services-guide',
    image: 'https://images.unsplash.com/photo-1663634980758-1e3c0e475752?w=800&h=500&fit=crop',
    author: 'Sarah Brandse',
    date: '2024-06-20',
    readingTime: '5 min',
    category: 'Emergency Services',
    en: {
      title: 'What to Do When a Tree Falls on Your Property',
      excerpt: 'A fallen tree is a stressful emergency. Follow this step-by-step guide to ensure your safety and handle the situation effectively.',
      metaDescription: 'Step-by-step guide on what to do when a tree falls on your house or property. Learn how to stay safe and contact emergency tree services.',
    },
    fr: {
      title: 'Que faire quand un arbre tombe sur votre propriété',
      excerpt: "Un arbre tombé est une urgence stressante. Suivez ce guide étape par étape pour assurer votre sécurité et gérer la situation.",
      metaDescription: "Guide étape par étape sur ce qu'il faut faire quand un arbre tombe sur votre maison. Apprenez comment rester en sécurité.",
    },
  },
  {
    id: 5,
    slug: 'tree-trimming-tips',
    image: 'https://images.unsplash.com/photo-1674915621696-400feb364e5f?w=800&h=500&fit=crop',
    author: 'John Brandse',
    date: '2024-07-15',
    readingTime: '6 min',
    category: 'Tree Care',
    en: {
      title: '5 Tree Trimming Mistakes You Need to Avoid',
      excerpt: 'Improper pruning can permanently damage your trees. Learn the most common tree trimming mistakes and how to avoid them.',
      metaDescription: 'Avoid common tree trimming mistakes that can harm your trees. Learn proper pruning techniques from certified arborists in Montreal.',
    },
    fr: {
      title: "5 erreurs d'élagage d'arbres à éviter absolument",
      excerpt: "Un mauvais élagage peut endommager vos arbres de façon permanente. Apprenez les erreurs les plus courantes et comment les éviter.",
      metaDescription: "Évitez les erreurs courantes d'élagage qui peuvent nuire à vos arbres. Apprenez les bonnes techniques de taille.",
    },
  },
  {
    id: 6,
    slug: 'best-trees-to-plant',
    image: 'https://images.unsplash.com/photo-1597069787525-716e99359f4c?w=800&h=500&fit=crop',
    author: 'Sarah Brandse',
    date: '2024-08-22',
    readingTime: '7 min',
    category: 'Tree Care',
    en: {
      title: 'The Best Native Trees to Plant in the West Island',
      excerpt: 'Looking to add a new tree to your property? Discover the best native species that thrive in the Montreal climate.',
      metaDescription: 'Discover the best native trees to plant in the West Island of Montreal. Improve your landscaping with species that thrive in the local climate.',
    },
    fr: {
      title: "Les meilleurs arbres indigènes à planter dans l'Ouest de l'Île",
      excerpt: "Vous cherchez à ajouter un nouvel arbre à votre propriété ? Découvrez les meilleures espèces indigènes pour le climat de Montréal.",
      metaDescription: "Découvrez les meilleurs arbres indigènes à planter dans l'Ouest de l'Île de Montréal. Améliorez votre aménagement paysager.",
    },
  },
  {
    id: 7,
    slug: 'fall-tree-care',
    image: 'https://images.unsplash.com/photo-1702309301069-c42775bd71be?w=800&h=500&fit=crop',
    author: 'John Brandse',
    date: '2024-09-30',
    readingTime: '5 min',
    category: 'Seasonal Tips',
    en: {
      title: 'Fall Tree Care Checklist: Preparing for the Quebec Winter',
      excerpt: 'Winter is tough on trees. Follow this fall checklist to ensure your trees survive the freezing temperatures and heavy snow.',
      metaDescription: 'Prepare your trees for the harsh Quebec winter with our comprehensive fall tree care checklist. Tips on watering, mulching, and protection.',
    },
    fr: {
      title: "Liste de vérification d'automne : Préparer l'hiver québécois",
      excerpt: "L'hiver est dur pour les arbres. Suivez cette liste pour vous assurer que vos arbres survivent aux températures glaciales.",
      metaDescription: "Préparez vos arbres pour le rude hiver québécois avec notre liste de vérification d'automne. Conseils sur l'arrosage et la protection.",
    },
  },
  {
    id: 8,
    slug: 'why-professional-services-matter',
    image: 'https://images.unsplash.com/photo-1553492300-e644077f7cc3?w=800&h=500&fit=crop',
    author: 'Sarah Brandse',
    date: '2024-10-15',
    readingTime: '4 min',
    category: 'Local News',
    en: {
      title: 'Why Hiring a Certified Arborist Matters in the West Island',
      excerpt: 'Not all tree cutters are arborists. Learn why certification, insurance, and expertise are crucial when hiring tree services.',
      metaDescription: 'Understand the importance of hiring a certified arborist in Montreal. Protect your property and ensure safe, professional tree care.',
    },
    fr: {
      title: 'Pourquoi embaucher un arboriculteur certifié est crucial',
      excerpt: "Tous les coupeurs d'arbres ne sont pas des arboriculteurs. Apprenez pourquoi la certification et l'assurance sont cruciales.",
      metaDescription: "Comprenez l'importance d'embaucher un arboriculteur certifié à Montréal. Protégez votre propriété et assurez des soins professionnels.",
    },
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
