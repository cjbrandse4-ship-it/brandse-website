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
    body?: string[];
  };
  fr: {
    title: string;
    excerpt: string;
    metaDescription: string;
    body?: string[];
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
      body: [
        'Spring is a critical time for tree care in the West Island of Montreal. After enduring months of freezing temperatures, ice storms, and heavy snowfall, your trees need attention to recover and thrive during the growing season.',
        '## Inspect for Winter Damage\n\nThe first step is a thorough inspection. Walk around your property and look for cracked branches, split trunks, and bark damage caused by frost. Pay special attention to mature trees like maples and oaks, which are common in Pointe-Claire, Beaconsfield, and Kirkland. If you notice large cracks or hanging branches, call a certified arborist — attempting to remove damaged limbs yourself can be dangerous.',
        '## Prune Before New Growth\n\nLate winter to early spring (before buds open) is the ideal pruning window for most deciduous trees in Quebec. Pruning during dormancy reduces stress on the tree and minimizes the risk of disease transmission. Focus on removing dead, crossing, or rubbing branches. Never remove more than 25% of the canopy in a single season.',
        '## Mulch Properly\n\nApply 2-4 inches of organic mulch around the base of your trees, keeping it 6 inches away from the trunk. This retains moisture, regulates soil temperature, and suppresses weeds. Avoid "volcano mulching" (piling mulch against the trunk), which can cause rot and attract pests.',
        '## Check for Emerald Ash Borer\n\nThe Emerald Ash Borer (EAB) continues to devastate ash trees across the Montreal area. Look for D-shaped exit holes, crown dieback, and bark splitting. If you suspect EAB, contact a professional immediately — early treatment can save the tree.',
        '## Schedule Professional Care\n\nWhile basic maintenance can be done yourself, tasks like crown thinning, structural pruning, and pest assessment should be handled by certified arborists. At Service d\'Arbres Brandse, we offer free spring assessments for homeowners across the West Island. Contact us at (438) 365-5410 to schedule yours.',
      ],
    },
    fr: {
      title: "Conseils essentiels d'entretien printanier des arbres",
      excerpt: "Préparez vos arbres pour la saison de croissance avec ces conseils d'entretien printanier adaptés au climat de l'Ouest de l'Île.",
      metaDescription: "Préparez vos arbres pour le printemps à Montréal. Apprenez les conseils d'entretien essentiels incluant l'élagage et l'inspection.",
      body: [
        "Le printemps est une période critique pour l'entretien des arbres dans l'Ouest de l'Île de Montréal. Après des mois de températures glaciales, de tempêtes de verglas et de fortes chutes de neige, vos arbres ont besoin d'attention pour se rétablir.",
        "## Inspectez les dommages hivernaux\n\nLa première étape est une inspection approfondie. Faites le tour de votre propriété et recherchez les branches fissurées, les troncs fendus et les dommages à l'écorce causés par le gel. Portez une attention particulière aux arbres matures comme les érables et les chênes, courants à Pointe-Claire, Beaconsfield et Kirkland.",
        "## Taillez avant la nouvelle croissance\n\nLa fin de l'hiver au début du printemps (avant l'ouverture des bourgeons) est la fenêtre d'élagage idéale pour la plupart des arbres feuillus au Québec. L'élagage pendant la dormance réduit le stress sur l'arbre. Concentrez-vous sur l'élimination des branches mortes ou entrecroisées. Ne retirez jamais plus de 25 % du couvert en une seule saison.",
        "## Paillez correctement\n\nAppliquez 5 à 10 cm de paillis organique autour de la base de vos arbres, en le gardant à 15 cm du tronc. Cela retient l'humidité, régule la température du sol et supprime les mauvaises herbes.",
        "## Vérifiez la présence de l'agrile du frêne\n\nL'agrile du frêne continue de dévaster les frênes dans la région de Montréal. Recherchez les trous de sortie en forme de D, le dépérissement de la cime et l'éclatement de l'écorce. Si vous soupçonnez sa présence, contactez un professionnel immédiatement.",
        "## Planifiez un entretien professionnel\n\nChez Service d'Arbres Brandse, nous offrons des évaluations printanières gratuites pour les propriétaires de l'Ouest de l'Île. Contactez-nous au (438) 365-5410 pour planifier la vôtre.",
      ],
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
      body: [
        'No homeowner wants to hear that a tree needs to come down. Trees add beauty, shade, and value to properties across the West Island of Montreal. But there are times when removal is the safest and most responsible option — for your family, your home, and your neighbours.',
        '## Visible Signs of Decay and Disease\n\nOne of the most obvious indicators is widespread decay. Look for large fungal growths (conks or shelf fungi) at the base of the trunk, soft or crumbling wood, and hollowed-out sections. In Pointe-Claire and Beaconsfield, aging silver maples are especially prone to internal rot that can go unnoticed until a major limb fails. If more than 50% of the trunk is hollow, the tree is structurally compromised and should be assessed by a certified arborist.',
        '## Leaning and Root Problems\n\nA tree that has suddenly started leaning — especially after a storm — may have root failure. Check the soil around the base for heaving or cracking. In Kirkland and Dorval, where clay soils are common, root systems can be undermined by poor drainage and freeze-thaw cycles. A tree leaning more than 15 degrees from vertical with exposed or broken roots is a serious hazard.',
        '## Dead Branches and Crown Dieback\n\nIf more than half the crown is dead or leafless during the growing season, the tree is in severe decline. Dead branches — sometimes called "widow makers" — can fall without warning. This is a particular concern for properties near sidewalks, driveways, and play areas. Homeowners in Hudson and Saint-Lazare with large rural lots should watch mature oaks and elms carefully for progressive crown thinning.',
        '## Proximity to Structures and Power Lines\n\nSometimes a healthy tree still needs removal because of where it is growing. Trees pressing against foundations, growing into roof lines, or entangled with Hydro-Québec power lines pose ongoing risks. Municipal bylaws in many West Island cities require permits before removal — your arborist can handle the paperwork for you.',
        '## When in Doubt, Get a Professional Assessment\n\nTree removal is irreversible, so it is important to get an expert opinion before making a decision. At Service d\'Arbres Brandse, we provide honest assessments and will always recommend preservation when it is safe to do so. If removal is necessary, we handle everything from permits to stump grinding. Call us at (438) 365-5410 for a free evaluation anywhere in the West Island.',
      ],
    },
    fr: {
      title: "Savoir quand il est temps d'abattre un arbre",
      excerpt: "L'abattage est un dernier recours, mais parfois nécessaire. Apprenez les signes critiques indiquant qu'un arbre doit être abattu.",
      metaDescription: "Apprenez les signes critiques indiquant qu'un arbre doit être abattu. Conseils d'experts sur l'évaluation de la santé des arbres.",
      body: [
        "Aucun propriétaire ne souhaite entendre qu'un arbre doit être abattu. Les arbres ajoutent de la beauté, de l'ombre et de la valeur aux propriétés de l'Ouest de l'Île de Montréal. Mais il y a des moments où l'abattage est l'option la plus sûre et la plus responsable — pour votre famille, votre maison et vos voisins.",
        "## Signes visibles de pourriture et de maladie\n\nL'un des indicateurs les plus évidents est la pourriture généralisée. Recherchez les excroissances fongiques à la base du tronc, le bois mou ou friable et les sections creuses. À Pointe-Claire et Beaconsfield, les érables argentés vieillissants sont particulièrement sujets à la pourriture interne qui peut passer inaperçue jusqu'à ce qu'une branche majeure cède. Si plus de 50 % du tronc est creux, l'arbre est structurellement compromis et devrait être évalué par un arboriculteur certifié.",
        "## Inclinaison et problèmes racinaires\n\nUn arbre qui commence soudainement à pencher — surtout après une tempête — peut avoir une défaillance racinaire. Vérifiez le sol autour de la base pour tout soulèvement ou fissuration. À Kirkland et Dorval, où les sols argileux sont courants, les systèmes racinaires peuvent être minés par un mauvais drainage et les cycles de gel-dégel. Un arbre incliné de plus de 15 degrés avec des racines exposées ou cassées est un danger sérieux.",
        "## Branches mortes et dépérissement de la cime\n\nSi plus de la moitié de la cime est morte ou sans feuilles pendant la saison de croissance, l'arbre est en déclin sévère. Les branches mortes peuvent tomber sans avertissement. C'est une préoccupation particulière pour les propriétés près des trottoirs, des entrées et des aires de jeux. Les propriétaires à Hudson et Saint-Lazare avec de grands terrains ruraux devraient surveiller attentivement les chênes et les ormes matures.",
        "## Proximité des structures et des lignes électriques\n\nParfois, un arbre en santé doit quand même être abattu en raison de son emplacement. Les arbres qui poussent contre les fondations, dans les toitures ou dans les lignes d'Hydro-Québec présentent des risques continus. Les règlements municipaux de nombreuses villes de l'Ouest de l'Île exigent des permis avant l'abattage — votre arboriculteur peut s'occuper de la paperasse pour vous.",
        "## En cas de doute, consultez un professionnel\n\nL'abattage d'un arbre est irréversible, il est donc important d'obtenir un avis d'expert avant de prendre une décision. Chez Service d'Arbres Brandse, nous fournissons des évaluations honnêtes et recommanderons toujours la préservation lorsque c'est sécuritaire. Si l'abattage est nécessaire, nous nous occupons de tout, des permis à l'essouchage. Appelez-nous au (438) 365-5410 pour une évaluation gratuite partout dans l'Ouest de l'Île.",
      ],
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
      body: [
        'After a tree is removed, you are left with a stump — and the decision of what to do with it. Homeowners across the West Island of Montreal often ask us whether stump grinding or complete stump removal is the better option. The answer depends on your property, your plans, and your budget.',
        '## What Is Stump Grinding?\n\nStump grinding uses a specialized machine to shred the stump down to 6-12 inches below ground level. The wood chips produced are typically used to fill the resulting hole. The root system is left in place and will decompose naturally over several years. This is the most popular option for homeowners in Pointe-Claire, Beaconsfield, and Kirkland because it is faster, less invasive, and more affordable. A typical residential stump can be ground in 30-60 minutes.',
        '## What Is Complete Stump Removal?\n\nComplete removal involves extracting the entire stump and root ball from the ground using heavy equipment such as an excavator. This leaves a large hole that needs to be filled with topsoil and graded. It is more disruptive to your yard but gives you a completely clean slate. Homeowners in Dorval and Île-Bizard sometimes prefer full removal when they plan to build a deck, install a pool, or lay a new driveway over the area.',
        '## Cost and Time Comparison\n\nStump grinding typically costs significantly less than full removal and can be done in a single visit. Complete removal requires more equipment, more labour, and often a second visit for backfilling and grading. For properties in Hudson and Saint-Lazare with multiple stumps from a land-clearing project, grinding is almost always the more practical choice.',
        '## Which Should You Choose?\n\nChoose stump grinding if you plan to cover the area with grass, garden beds, or mulch. Choose full removal if you need to build a structure over the spot or if the roots are causing damage to nearby foundations or underground pipes. In most residential situations across the West Island, stump grinding is the recommended solution.',
        '## Let Us Handle Your Stumps\n\nAt Service d\'Arbres Brandse, we operate professional-grade stump grinders that can handle stumps of any size. Whether you have one stump in your front yard or a dozen on a newly cleared lot, we will get the job done quickly and cleanly. Call us at (438) 365-5410 for a free quote on stump grinding or removal anywhere in the West Island.',
      ],
    },
    fr: {
      title: 'Essouchage vs Enlèvement complet : Lequel choisir ?',
      excerpt: "Comprenez les différences entre l'essouchage et l'enlèvement complet de la souche pour faire le meilleur choix pour votre terrain.",
      metaDescription: "Comparez les méthodes d'essouchage et d'enlèvement de souche. Découvrez quelle option convient le mieux à votre cour et votre budget.",
      body: [
        "Après l'abattage d'un arbre, il reste une souche — et la décision de quoi en faire. Les propriétaires de l'Ouest de l'Île de Montréal nous demandent souvent si l'essouchage ou l'enlèvement complet est la meilleure option. La réponse dépend de votre propriété, de vos plans et de votre budget.",
        "## Qu'est-ce que l'essouchage ?\n\nL'essouchage utilise une machine spécialisée pour broyer la souche jusqu'à 15-30 cm sous le niveau du sol. Les copeaux de bois produits servent généralement à remplir le trou résultant. Le système racinaire est laissé en place et se décomposera naturellement sur plusieurs années. C'est l'option la plus populaire pour les propriétaires de Pointe-Claire, Beaconsfield et Kirkland car elle est plus rapide, moins invasive et plus abordable. Une souche résidentielle typique peut être broyée en 30 à 60 minutes.",
        "## Qu'est-ce que l'enlèvement complet ?\n\nL'enlèvement complet consiste à extraire la souche entière et la motte racinaire du sol à l'aide d'équipement lourd comme une excavatrice. Cela laisse un grand trou qui doit être rempli de terre végétale et nivelé. C'est plus perturbant pour votre terrain, mais vous donne une surface complètement nette. Les propriétaires à Dorval et Île-Bizard préfèrent parfois l'enlèvement complet lorsqu'ils prévoient construire un patio, installer une piscine ou poser une nouvelle entrée.",
        "## Comparaison des coûts et du temps\n\nL'essouchage coûte généralement beaucoup moins cher que l'enlèvement complet et peut être effectué en une seule visite. L'enlèvement complet nécessite plus d'équipement, plus de main-d'œuvre et souvent une deuxième visite pour le remblayage et le nivellement. Pour les propriétés à Hudson et Saint-Lazare avec plusieurs souches d'un projet de défrichage, le broyage est presque toujours le choix le plus pratique.",
        "## Lequel choisir ?\n\nChoisissez l'essouchage si vous prévoyez couvrir la zone avec du gazon, des plates-bandes ou du paillis. Choisissez l'enlèvement complet si vous devez construire une structure à cet endroit ou si les racines endommagent les fondations ou les tuyaux souterrains. Dans la plupart des situations résidentielles de l'Ouest de l'Île, l'essouchage est la solution recommandée.",
        "## Laissez-nous nous occuper de vos souches\n\nChez Service d'Arbres Brandse, nous opérons des essoucheuses de calibre professionnel capables de traiter des souches de toute taille. Que vous ayez une souche dans votre cour avant ou une douzaine sur un terrain fraîchement défriché, nous ferons le travail rapidement et proprement. Appelez-nous au (438) 365-5410 pour une soumission gratuite d'essouchage ou d'enlèvement partout dans l'Ouest de l'Île.",
      ],
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
      body: [
        'When a tree falls on your property, the shock and stress can be overwhelming. Whether it is a summer microburst, an ice storm, or simply an aging tree that gives way, knowing what to do in those first critical hours can protect your family and minimize damage. Here is a step-by-step guide for West Island homeowners.',
        '## Step 1: Ensure Everyone Is Safe\n\nYour first priority is personal safety. If the tree has hit your house, evacuate immediately if there is any structural concern — cracked walls, sagging ceilings, or the smell of gas. Do not attempt to enter rooms directly beneath or beside the fallen tree. If power lines are involved, stay at least 10 metres away and call Hydro-Québec at 1-800-790-2424. Residents in Pointe-Claire, Dorval, and Kirkland should also call 911 if there is any risk of injury or fire.',
        '## Step 2: Document the Damage\n\nOnce everyone is safe, take photos and video from multiple angles before anything is moved. This documentation is essential for your insurance claim. Capture the tree, the point of impact, any damage to your roof, siding, fence, or vehicles, and the surrounding area. Note the date and time.',
        '## Step 3: Contact Your Insurance Company\n\nMost homeowner insurance policies in Quebec cover damage caused by fallen trees, including the cost of removal. Call your insurer as soon as possible to open a claim. They may send an adjuster or ask for your photos. Keep all receipts for emergency tarping, temporary repairs, and tree removal — these are typically reimbursable.',
        '## Step 4: Call a Professional Tree Service\n\nDo not attempt to remove a fallen tree yourself, especially if it involves your roof or power lines. A professional crew has the equipment, training, and insurance to handle the job safely. In Beaconsfield, Hudson, and Saint-Lazare, fallen trees often block driveways or lean against structures in ways that require careful rigging and sectional removal.',
        '## Step 5: Prevent Future Incidents\n\nAfter the immediate crisis is resolved, have an arborist inspect the remaining trees on your property. Storm-weakened trees, dead limbs, and root damage from the same event can cause additional failures. A proactive inspection is especially important in older neighbourhoods across the West Island where mature trees are abundant.',
        '## Service d\'Arbres Brandse Is Here When You Need Us\n\nWe understand that tree emergencies do not wait for business hours. Service d\'Arbres Brandse provides prompt emergency tree removal services across the entire West Island of Montreal. If a tree has fallen on your property, call us at (438) 365-5410 and we will be there as quickly as possible to secure the situation and begin removal.',
      ],
    },
    fr: {
      title: 'Que faire quand un arbre tombe sur votre propriété',
      excerpt: "Un arbre tombé est une urgence stressante. Suivez ce guide étape par étape pour assurer votre sécurité et gérer la situation.",
      metaDescription: "Guide étape par étape sur ce qu'il faut faire quand un arbre tombe sur votre maison. Apprenez comment rester en sécurité.",
      body: [
        "Quand un arbre tombe sur votre propriété, le choc et le stress peuvent être accablants. Qu'il s'agisse d'une microrafale estivale, d'une tempête de verglas ou simplement d'un arbre vieillissant qui cède, savoir quoi faire dans ces premières heures critiques peut protéger votre famille et minimiser les dommages. Voici un guide étape par étape pour les propriétaires de l'Ouest de l'Île.",
        "## Étape 1 : Assurez la sécurité de tous\n\nVotre première priorité est la sécurité personnelle. Si l'arbre a frappé votre maison, évacuez immédiatement s'il y a un doute structural — murs fissurés, plafonds affaissés ou odeur de gaz. N'essayez pas d'entrer dans les pièces directement sous ou à côté de l'arbre tombé. Si des lignes électriques sont impliquées, restez à au moins 10 mètres et appelez Hydro-Québec au 1-800-790-2424. Les résidents de Pointe-Claire, Dorval et Kirkland devraient aussi appeler le 911 en cas de risque de blessure ou d'incendie.",
        "## Étape 2 : Documentez les dommages\n\nUne fois que tout le monde est en sécurité, prenez des photos et des vidéos sous plusieurs angles avant que quoi que ce soit ne soit déplacé. Cette documentation est essentielle pour votre réclamation d'assurance. Capturez l'arbre, le point d'impact, tout dommage au toit, au revêtement, à la clôture ou aux véhicules. Notez la date et l'heure.",
        "## Étape 3 : Contactez votre compagnie d'assurance\n\nLa plupart des polices d'assurance habitation au Québec couvrent les dommages causés par les arbres tombés, y compris le coût de l'enlèvement. Appelez votre assureur dès que possible pour ouvrir une réclamation. Conservez tous les reçus pour le bâchage d'urgence, les réparations temporaires et l'enlèvement de l'arbre — ces frais sont généralement remboursables.",
        "## Étape 4 : Appelez un service d'arbres professionnel\n\nN'essayez pas d'enlever un arbre tombé vous-même, surtout s'il implique votre toit ou des lignes électriques. Une équipe professionnelle possède l'équipement, la formation et l'assurance pour effectuer le travail en toute sécurité. À Beaconsfield, Hudson et Saint-Lazare, les arbres tombés bloquent souvent les entrées ou s'appuient contre des structures de manière nécessitant un gréement minutieux.",
        "## Étape 5 : Prévenez les incidents futurs\n\nAprès la résolution de la crise immédiate, faites inspecter les arbres restants sur votre propriété par un arboriculteur. Les arbres affaiblis par la tempête, les branches mortes et les dommages racinaires du même événement peuvent causer des défaillances supplémentaires. Une inspection proactive est particulièrement importante dans les quartiers anciens de l'Ouest de l'Île.",
        "## Service d'Arbres Brandse est là quand vous avez besoin de nous\n\nNous comprenons que les urgences arboricoles n'attendent pas les heures de bureau. Service d'Arbres Brandse offre un service rapide d'enlèvement d'arbres d'urgence dans tout l'Ouest de l'Île de Montréal. Si un arbre est tombé sur votre propriété, appelez-nous au (438) 365-5410 et nous serons là aussi rapidement que possible pour sécuriser la situation et commencer l'enlèvement.",
      ],
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
      body: [
        'Pruning is one of the most important things you can do for the health and appearance of your trees. But done incorrectly, it can cause lasting damage, invite disease, and even kill a tree. Here are five common trimming mistakes we see regularly on properties across the West Island of Montreal — and how to avoid them.',
        '## Mistake 1: Topping the Tree\n\nTopping — cutting the main leader or large branches back to stubs — is the single most harmful pruning practice. It destroys the tree\'s natural form, triggers a flush of weak, fast-growing water sprouts, and creates large wounds that are slow to heal. We frequently see topped maples and lindens in Pointe-Claire and Dorval. A properly trained arborist will use crown reduction cuts instead, which maintain the tree\'s structure while reducing height.',
        '## Mistake 2: Cutting the Branch Collar\n\nEvery branch has a slightly swollen area where it meets the trunk called the branch collar. This collar contains specialized cells that help the tree compartmentalize and heal the wound. Cutting flush with the trunk removes the collar and leaves a large wound that is vulnerable to decay. Always cut just outside the branch collar at a slight angle.',
        '## Mistake 3: Pruning at the Wrong Time\n\nTiming matters. Pruning oaks during the growing season exposes them to oak wilt. Pruning maples in late winter causes heavy sap bleeding (though this is mostly cosmetic). Elms should never be pruned between April and October due to Dutch elm disease. In Beaconsfield and Kirkland, where these species are abundant, incorrect timing can have neighbourhood-wide consequences if disease spreads.',
        '## Mistake 4: Removing Too Much at Once\n\nNever remove more than 25% of a tree\'s canopy in a single season. Over-pruning shocks the tree, reduces its ability to photosynthesize, and triggers stress responses. This is a common mistake when homeowners in Hudson and Saint-Lazare try to "open up" a tree for more sunlight. Gradual thinning over two or three seasons is far healthier.',
        '## Mistake 5: Using Dull or Dirty Tools\n\nDull blades tear bark and create ragged wounds that heal slowly. Dirty tools can transfer fungal spores and bacteria from one tree to the next. Always use sharp, clean pruning tools and disinfect them with rubbing alcohol between trees. For branches over 5 cm in diameter, use a proper three-cut technique to prevent bark tearing.',
        '## Get It Done Right the First Time\n\nImproper pruning damage cannot be undone — the tree has to live with the consequences for years. Service d\'Arbres Brandse employs certified arborists who follow ISA (International Society of Arboriculture) pruning standards. Whether you need a single tree trimmed or an entire property maintained, call us at (438) 365-5410 for professional pruning across the West Island.',
      ],
    },
    fr: {
      title: "5 erreurs d'élagage d'arbres à éviter absolument",
      excerpt: "Un mauvais élagage peut endommager vos arbres de façon permanente. Apprenez les erreurs les plus courantes et comment les éviter.",
      metaDescription: "Évitez les erreurs courantes d'élagage qui peuvent nuire à vos arbres. Apprenez les bonnes techniques de taille.",
      body: [
        "L'élagage est l'une des choses les plus importantes que vous pouvez faire pour la santé et l'apparence de vos arbres. Mais mal exécuté, il peut causer des dommages durables, inviter les maladies et même tuer un arbre. Voici cinq erreurs courantes que nous observons régulièrement sur les propriétés de l'Ouest de l'Île de Montréal — et comment les éviter.",
        "## Erreur 1 : Étêter l'arbre\n\nL'étêtage — couper la flèche principale ou de grosses branches en laissant des moignons — est la pratique d'élagage la plus nuisible. Elle détruit la forme naturelle de l'arbre, déclenche une poussée de gourmands faibles et crée de grandes plaies lentes à cicatriser. Nous voyons fréquemment des érables et des tilleuls étêtés à Pointe-Claire et Dorval. Un arboriculteur qualifié utilisera plutôt des coupes de réduction de cime, qui maintiennent la structure de l'arbre tout en réduisant la hauteur.",
        "## Erreur 2 : Couper le collet de la branche\n\nChaque branche possède une zone légèrement renflée à sa jonction avec le tronc appelée le collet. Ce collet contient des cellules spécialisées qui aident l'arbre à compartimenter et cicatriser la plaie. Couper à ras du tronc enlève le collet et laisse une grande plaie vulnérable à la pourriture. Coupez toujours juste à l'extérieur du collet à un léger angle.",
        "## Erreur 3 : Élaguer au mauvais moment\n\nLe timing est important. Élaguer les chênes pendant la saison de croissance les expose au flétrissement du chêne. Élaguer les érables en fin d'hiver cause un saignement abondant de sève. Les ormes ne devraient jamais être élagués entre avril et octobre à cause de la maladie hollandaise de l'orme. À Beaconsfield et Kirkland, où ces espèces sont abondantes, un mauvais timing peut avoir des conséquences à l'échelle du quartier si la maladie se propage.",
        "## Erreur 4 : Enlever trop à la fois\n\nNe retirez jamais plus de 25 % du couvert d'un arbre en une seule saison. Un élagage excessif choque l'arbre et réduit sa capacité à faire la photosynthèse. C'est une erreur courante lorsque les propriétaires à Hudson et Saint-Lazare essaient d'\"ouvrir\" un arbre pour plus de lumière. Un éclaircissement graduel sur deux ou trois saisons est bien plus sain.",
        "## Erreur 5 : Utiliser des outils émoussés ou sales\n\nLes lames émoussées déchirent l'écorce et créent des plaies irrégulières qui cicatrisent lentement. Les outils sales peuvent transférer des spores fongiques et des bactéries d'un arbre à l'autre. Utilisez toujours des outils tranchants et propres, et désinfectez-les à l'alcool entre chaque arbre. Pour les branches de plus de 5 cm de diamètre, utilisez la technique des trois coupes pour éviter le déchirement de l'écorce.",
        "## Faites-le bien du premier coup\n\nLes dommages d'un mauvais élagage ne peuvent pas être défaits — l'arbre doit vivre avec les conséquences pendant des années. Service d'Arbres Brandse emploie des arboriculteurs certifiés qui suivent les normes d'élagage de l'ISA (International Society of Arboriculture). Que vous ayez besoin de tailler un seul arbre ou d'entretenir une propriété complète, appelez-nous au (438) 365-5410 pour un élagage professionnel dans tout l'Ouest de l'Île.",
      ],
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
