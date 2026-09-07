// Seasonal promotion config — the site reads the active campaign by date and
// renders it automatically (announcement bar, homepage section, free-estimate
// badge + form integration). When no campaign window matches, nothing shows.
//
// 2026-27 plan (two-act sequence):
//   Act 1  Storm-Ready       now  -> Nov 30   fall: free hazard check + 25% off hazard work
//   Act 2  Stump Goes Free   Dec 1 -> Mar 15  winter: free stump grinding with removals
//
// To retire or tweak a campaign, edit its dates/copy here — no other file
// needs touching. Offers must stay in sync with what quotes actually honor.

export interface PromoCopy {
  bar: string;            // slim announcement bar text (keep short)
  heroBadge: string;      // badge beside the free-estimate hero headline
  homeTitle: string;
  homeSub: string;
  homeBullets: string[];
  homeCta: string;
  formNote: string;       // line inside the quote form, always visible during promo
  formUnlock: string;     // appears when a qualifying service is selected
  faqQ: string;
  faqA: string;
  deadlineLabel: string;  // e.g. "Ends Nov 30"
  imageAlt: string;       // alt text for the homepage promo photo
  photoBadge: string;     // floating value badge on the promo photo
}

export interface Promotion {
  id: string;
  code: string;           // tag written into lead messages + GA4 events
  start: string;          // YYYY-MM-DD inclusive (local time)
  end: string;            // YYYY-MM-DD inclusive (local time)
  unlockServices: string[]; // free-estimate service dropdown values that trigger formUnlock
  image: string;          // homepage promo photo (a real job photo, not stock)
  en: PromoCopy;
  fr: PromoCopy;
}

export const promotions: Promotion[] = [
  {
    id: 'storm-ready',
    code: 'STORMREADY',
    start: '2026-09-01',
    end: '2026-11-30',
    unlockServices: ['tree-removal', 'pruning', 'emergency'],
    image: '/gallery/pine-removal-before.jpg',
    en: {
      bar: 'Storm-Ready: FREE hazard check + 25% off hazard trees',
      heroBadge: 'FREE hazard check + 25% off hazard trees',
      homeTitle: "Ice Storms Don't Give Warnings. Your Trees Do.",
      homeSub: 'Before the first ice hits, get a certified arborist\'s eyes on your trees — free, in writing, no purchase required.',
      homeBullets: [
        'FREE 15-point written hazard assessment with photos ($150 value) — yours to keep for your insurance file',
        '25% off hazard-tree removal or storm-proof pruning booked by Nov 30 (up to $750 off)',
        'Priority Storm List: front-of-queue 24/7 emergency response all winter for Storm-Ready clients',
      ],
      homeCta: 'Book My Free Hazard Check',
      formNote: 'Storm-Ready Special: your quote includes a free written hazard assessment ($150 value).',
      formUnlock: 'This job may qualify for 25% off hazard work (up to $750) — we\'ll confirm at your free hazard check.',
      faqQ: 'How do I know if my tree is a hazard?',
      faqA: 'Warning signs include large dead limbs, cracks in the trunk, a sudden lean, mushrooms at the base, and branches over your roof or hydro line. Our free 15-point assessment reads these signs the way an engineer reads a structure — factually, in writing, with photos. If your tree is healthy, we\'ll tell you that too.',
      deadlineLabel: 'Ends Nov 30',
      imageAlt: 'A towering pine looming over a home — the kind of tree our free hazard check catches before winter',
      photoBadge: '$150 value — FREE',
    },
    fr: {
      bar: 'Storm-Ready : inspection GRATUITE + 25 % de rabais — arbres dangereux',
      heroBadge: 'Inspection GRATUITE + 25 % — arbres dangereux',
      homeTitle: 'Le verglas n\'avertit pas. Vos arbres, oui.',
      homeSub: 'Avant le premier verglas, faites examiner vos arbres par un arboriculteur certifié — gratuitement, par écrit, sans obligation d\'achat.',
      homeBullets: [
        'Évaluation de risque écrite en 15 points avec photos GRATUITE (valeur de 150 $) — à conserver pour votre dossier d\'assurance',
        '25 % de rabais sur l\'abattage d\'arbres dangereux ou l\'élagage préventif réservé d\'ici le 30 novembre (jusqu\'à 750 $)',
        'Liste prioritaire tempête : intervention d\'urgence 24/7 en tête de file tout l\'hiver pour les clients Storm-Ready',
      ],
      homeCta: 'Réserver mon inspection gratuite',
      formNote: 'Spécial Storm-Ready : votre devis inclut une évaluation de risque écrite gratuite (valeur de 150 $).',
      formUnlock: 'Ce travail pourrait être admissible à 25 % de rabais (max 750 $) — nous le confirmerons lors de votre inspection gratuite.',
      faqQ: 'Comment savoir si mon arbre est dangereux ?',
      faqA: 'Les signes avant-coureurs incluent de grosses branches mortes, des fissures dans le tronc, une inclinaison soudaine, des champignons à la base et des branches au-dessus de votre toit ou des fils électriques. Notre évaluation gratuite en 15 points lit ces signes de façon factuelle, par écrit, avec photos. Si votre arbre est en santé, nous vous le dirons aussi.',
      deadlineLabel: 'Se termine le 30 nov.',
      imageAlt: 'Un pin imposant surplombant une maison — le genre d\'arbre que notre inspection gratuite détecte avant l\'hiver',
      photoBadge: 'Valeur de 150 $ — GRATUIT',
    },
  },
  {
    id: 'stump-free',
    code: 'FREESTUMP',
    start: '2026-12-01',
    end: '2027-03-15',
    unlockServices: ['tree-removal'],
    image: '/gallery/pine-removal-after.jpg',
    en: {
      bar: 'Winter Special: FREE stump grinding with removals of $1,200+',
      heroBadge: 'FREE stump grinding with removals of $1,200+',
      homeTitle: 'This Winter, the Stump Comes Out Free.',
      homeSub: 'Book any tree removal of $1,200+ by March 15 and the stump grinding is on us — ground to 6 inches below grade.',
      homeBullets: [
        'FREE stump grinding (up to $450 value) with every tree removal of $1,200+',
        'Additional stumps on the same visit: 25% off',
        'Frozen ground = zero lawn damage — our spider lift and tracked loader roll right in',
      ],
      homeCta: 'Get My Winter Quote',
      formNote: 'Winter Special: stump grinding is FREE (up to $450 value) with tree removals of $1,200+ until March 15.',
      formUnlock: 'Stump grinding: FREE with removals of $1,200+ (up to $450 value) — confirmed on your written quote.',
      faqQ: 'Is winter really a good time to remove a tree?',
      faqA: 'It\'s often the best time. Frozen ground protects your lawn and lets our equipment reach the tree without mats or repairs, leafless canopies mean better visibility and precision, and winter scheduling is the fastest of the year. Trees are dormant, so the yard heals invisibly by spring.',
      deadlineLabel: 'Ends March 15',
      imageAlt: 'A stump ground flush after a tree removal — included free this winter',
      photoBadge: 'Up to $450 — FREE',
    },
    fr: {
      bar: 'Spécial hiver : essouchage GRATUIT avec tout abattage de 1 200 $+',
      heroBadge: 'Essouchage GRATUIT — abattages de 1 200 $+',
      homeTitle: 'Cet hiver, la souche part gratis.',
      homeSub: 'Réservez un abattage de 1 200 $ et plus d\'ici le 15 mars et l\'essouchage est offert — meulé à 6 pouces sous le niveau du sol.',
      homeBullets: [
        'Essouchage GRATUIT (valeur jusqu\'à 450 $) avec chaque abattage de 1 200 $ et plus',
        'Souches additionnelles lors de la même visite : 25 % de rabais',
        'Sol gelé = zéro dommage à la pelouse — notre nacelle araignée et notre chargeur sur chenilles passent partout',
      ],
      homeCta: 'Obtenir mon devis d\'hiver',
      formNote: 'Spécial hiver : l\'essouchage est GRATUIT (valeur jusqu\'à 450 $) avec les abattages de 1 200 $ et plus jusqu\'au 15 mars.',
      formUnlock: 'Essouchage : GRATUIT avec les abattages de 1 200 $ et plus (valeur jusqu\'à 450 $) — confirmé sur votre devis écrit.',
      faqQ: 'L\'hiver est-il vraiment un bon moment pour abattre un arbre ?',
      faqA: 'C\'est souvent le meilleur moment. Le sol gelé protège votre pelouse et permet à notre équipement d\'atteindre l\'arbre sans plaques ni réparations, les canopées sans feuilles offrent une meilleure visibilité et précision, et l\'horaire d\'hiver est le plus rapide de l\'année. Les arbres sont en dormance, alors le terrain se rétablit invisiblement d\'ici le printemps.',
      deadlineLabel: 'Se termine le 15 mars',
      imageAlt: 'Une souche rabotée au ras du sol après un abattage — incluse gratuitement cet hiver',
      photoBadge: 'Jusqu\'à 450 $ — GRATUIT',
    },
  },
];

// Local-time YYYY-MM-DD comparison, inclusive on both ends.
export function getActivePromotion(now: Date): Promotion | null {
  const d = now.toLocaleDateString('en-CA'); // YYYY-MM-DD
  return promotions.find(p => d >= p.start && d <= p.end) ?? null;
}
