// Shared by the full quote form (pages/free-estimate.tsx) and the compact one
// on service pages (components/QuickQuoteForm.tsx), so both send the same
// service values, city list and consent wording to /api/contact.

export const SERVICE_OPTIONS = [
  { value: 'tree-removal',   en: 'Tree Removal',         fr: 'Abattage d\'arbres' },
  { value: 'stump-grinding', en: 'Stump Grinding',       fr: 'Essouchage' },
  { value: 'pruning',        en: 'Pruning & Trimming',   fr: 'Émondage et élagage' },
  { value: 'hedge-trimming', en: 'Hedge Trimming',       fr: 'Taille de haies' },
  { value: 'emergency',      en: 'Emergency',            fr: 'Urgence' },
  { value: 'christmas-lights', en: 'Christmas Lights',   fr: 'Lumières de Noël' },
  { value: 'other',          en: 'Other',                fr: 'Autre' },
] as const;

export type ServiceValue = typeof SERVICE_OPTIONS[number]['value'];

export const SERVICE_AREAS = [
  'Saint-Lazare', 'Pointe-Claire', 'Hudson', 'Beaconsfield',
  'Vaudreuil-Dorion', 'Kirkland', 'Dollard-des-Ormeaux', 'Dorval',
  'Senneville', "Baie-d'Urfé", 'Île-Perrot', 'Pincourt', 'Pierrefonds',
  'Sainte-Anne-de-Bellevue', "L'Île-Bizard", "Notre-Dame-de-l'Île-Perrot",
  'Terrasse-Vaudreuil', 'Rigaud', 'Les Cèdres', 'Coteau-du-Lac',
  'Pointe-des-Cascades', 'Saint-Clet', 'Lachine',
];

// Canadian phone: accepts any 10-digit North American number, with or
// without country code, spaces, dashes, parens, or dots.
export function isValidCanadianPhone(raw: string): boolean {
  const digits = raw.replace(/[^\d]/g, '');
  if (digits.length === 10) return /^[2-9]\d{9}$/.test(digits);
  if (digits.length === 11) return digits.startsWith('1') && /^1[2-9]\d{9}$/.test(digits);
  return false;
}

// Field labels, errors and the consent line. The consent wording covers the
// AI assistant that calls and texts leads — keep both forms on this copy.
export const quoteFormCopy = {
  en: {
    formTitle: 'Get your free quote',
    formIntro: 'Tell us about your tree — we\'ll call you back in under 2 hours.',
    nameLabel: 'Your name',
    namePlaceholder: 'First and last name',
    emailLabel: 'Email',
    emailPlaceholder: 'your.email@example.com',
    emailRequired: 'Please enter your email',
    emailInvalid: 'Please enter a valid email',
    phoneLabel: 'Phone number',
    phonePlaceholder: '(438) 555-0123',
    phoneInvalid: 'Please enter a valid Canadian phone number',
    cityLabel: 'City',
    cityPlaceholder: 'Select your city',
    cityRequired: 'Please pick a city',
    serviceLabel: 'Service needed',
    servicePlaceholder: 'Select a service',
    serviceRequired: 'Please pick a service',
    addDetails: 'Add details (optional)',
    hideDetails: 'Hide details',
    messagePlaceholder: 'Anything else we should know? (size of tree, access, urgency, photos can come by text)',
    nameRequired: 'Please enter your name',
    submit: 'Get My Free Quote',
    submitPromise: 'Reply in 2 hours',
    submitting: 'Sending…',
    callbackPromise: 'We\'ll call you back within 2 hours during business hours.',
    consent: 'By submitting, you agree that Service d\'Arbres Brandse may call or text you about your request, including with an AI assistant. Reply STOP to stop texts. See our',
    consentLink: 'Privacy Policy',
    orCall: 'Or call now:',
    errorTitle: 'Something went wrong',
    errorDesc: 'Please try calling us directly at (438) 365-5410.',
  },
  fr: {
    formTitle: 'Obtenez votre devis gratuit',
    formIntro: 'Parlez-nous de votre arbre — nous vous rappelons en moins de 2 heures.',
    nameLabel: 'Votre nom',
    namePlaceholder: 'Prénom et nom',
    emailLabel: 'Courriel',
    emailPlaceholder: 'votre.courriel@exemple.com',
    emailRequired: 'Veuillez entrer votre courriel',
    emailInvalid: 'Veuillez entrer un courriel valide',
    phoneLabel: 'Numéro de téléphone',
    phonePlaceholder: '(438) 555-0123',
    phoneInvalid: 'Veuillez entrer un numéro de téléphone canadien valide',
    cityLabel: 'Ville',
    cityPlaceholder: 'Sélectionnez votre ville',
    cityRequired: 'Veuillez choisir une ville',
    serviceLabel: 'Service requis',
    servicePlaceholder: 'Sélectionnez un service',
    serviceRequired: 'Veuillez choisir un service',
    addDetails: 'Ajouter des détails (optionnel)',
    hideDetails: 'Masquer les détails',
    messagePlaceholder: 'Autre chose à savoir? (taille de l\'arbre, accès, urgence — photos par texto possibles)',
    nameRequired: 'Veuillez entrer votre nom',
    submit: 'Obtenir mon devis gratuit',
    submitPromise: 'Réponse en 2 heures',
    submitting: 'Envoi en cours…',
    callbackPromise: 'Nous vous rappelons dans les 2 heures pendant les heures d\'ouverture.',
    consent: 'En soumettant ce formulaire, vous acceptez que Service d\'Arbres Brandse vous appelle ou vous texte au sujet de votre demande, y compris au moyen d\'un assistant IA. Répondez STOP pour ne plus recevoir de textos. Voir notre',
    consentLink: 'politique de confidentialité',
    orCall: 'Ou appelez maintenant :',
    errorTitle: 'Une erreur est survenue',
    errorDesc: 'Veuillez nous appeler directement au (438) 365-5410.',
  },
} as const;
