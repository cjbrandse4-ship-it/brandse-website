export interface CityFaq {
  q: string;
  a: string;
}

export interface CityContent {
  en: {
    paragraphs: string[];
    recentWork: string[];
    faqs: CityFaq[];
  };
  fr: {
    paragraphs: string[];
    recentWork: string[];
    faqs: CityFaq[];
  };
}

export interface Location {
  slug: string;
  name: string;
  nearby: string[];
  postalCodes: string[];
  treeSpecies: string[];
  content: CityContent;
}

export const locations: Location[] = [
  {
    slug: 'pointe-claire',
    name: 'Pointe-Claire',
    nearby: ['Dorval', 'Beaconsfield', 'Kirkland'],
    postalCodes: ['H9R', 'H9S'],
    treeSpecies: ['Silver Maple', 'Norway Maple', 'White Ash'],
    content: {
      en: {
        paragraphs: [
          'Pointe-Claire\'s established neighborhoods along Lakeshore Road and around Cedar Park are home to some of the West Island\'s most impressive mature trees. Many Silver Maples and Norway Maples in the area are 60 to 80 years old, requiring regular structural pruning to manage deadwood and storm damage risk.',
          'The proximity to Lac Saint-Louis creates unique challenges — high winds off the lake stress exposed trees, and the clay-heavy soil near the waterfront can cause root instability in larger specimens. Our crew works frequently in the Valois, Cedar-Lakeview, and Oneida Park areas addressing these specific conditions.',
          'The City of Pointe-Claire requires a permit for removing any tree with a trunk diameter of 10 cm or more at chest height on private property. Our team handles the permit application process and ensures compliance with the municipal bylaw on tree protection.',
        ],
        recentWork: [
          'Removed a 70-foot Silver Maple with root rot threatening a home foundation near Cedar Park',
          'Emergency storm cleanup along Lakeshore Road after a July microburst',
          'Pruned 12 mature Norway Maples in the Valois Village neighborhood',
        ],
        faqs: [
          { q: 'Do I need a permit to remove a tree in Pointe-Claire?', a: 'Yes. Pointe-Claire requires a permit for removing any tree with a trunk diameter of 10 cm or more. We handle the permit application as part of our service.' },
          { q: 'What are the most common tree problems in Pointe-Claire?', a: 'Wind damage from Lac Saint-Louis exposure, Silver Maple root heaving on older streets, and Emerald Ash Borer damage in White Ash trees are the most common issues we see.' },
          { q: 'How quickly can you respond to a tree emergency in Pointe-Claire?', a: 'We\'re based locally and can typically arrive within 1-2 hours for emergencies in Pointe-Claire.' },
        ],
      },
      fr: {
        paragraphs: [
          'Les quartiers établis de Pointe-Claire le long du chemin Lakeshore et autour du parc Cedar abritent certains des arbres matures les plus impressionnants de l\'Ouest de l\'Île. De nombreux érables argentés et érables de Norvège de la région ont entre 60 et 80 ans et nécessitent un élagage structurel régulier pour gérer le bois mort et les risques de dommages causés par les tempêtes.',
          'La proximité du Lac Saint-Louis crée des défis uniques — les vents forts du lac stressent les arbres exposés, et le sol argileux près du bord de l\'eau peut causer une instabilité racinaire chez les plus gros spécimens. Notre équipe travaille fréquemment dans les secteurs Valois, Cedar-Lakeview et Oneida Park pour répondre à ces conditions spécifiques.',
          'La Ville de Pointe-Claire exige un permis pour abattre tout arbre dont le diamètre du tronc est de 10 cm ou plus à hauteur de poitrine sur une propriété privée. Notre équipe s\'occupe de la demande de permis et assure la conformité avec le règlement municipal sur la protection des arbres.',
        ],
        recentWork: [
          'Abattage d\'un érable argenté de 70 pieds avec pourriture racinaire menaçant une fondation près du parc Cedar',
          'Nettoyage d\'urgence après tempête le long du chemin Lakeshore suite à une rafale en juillet',
          'Élagage de 12 érables de Norvège matures dans le quartier Village Valois',
        ],
        faqs: [
          { q: 'Ai-je besoin d\'un permis pour abattre un arbre à Pointe-Claire?', a: 'Oui. Pointe-Claire exige un permis pour abattre tout arbre dont le diamètre du tronc est de 10 cm ou plus. Nous nous occupons de la demande de permis dans le cadre de notre service.' },
          { q: 'Quels sont les problèmes d\'arbres les plus courants à Pointe-Claire?', a: 'Les dommages causés par le vent du Lac Saint-Louis, le soulèvement des racines des érables argentés sur les rues plus anciennes et les dommages causés par l\'agrile du frêne sont les problèmes les plus courants.' },
          { q: 'Combien de temps pour intervenir en urgence à Pointe-Claire?', a: 'Nous sommes basés localement et pouvons généralement arriver en 1 à 2 heures pour les urgences à Pointe-Claire.' },
        ],
      },
    },
  },
  {
    slug: 'hudson',
    name: 'Hudson',
    nearby: ['Saint-Lazare', 'Vaudreuil', 'Île-Perrot'],
    postalCodes: ['J0P'],
    treeSpecies: ['Red Oak', 'Sugar Maple', 'White Pine'],
    content: {
      en: {
        paragraphs: [
          'Hudson\'s large rural lots and wooded properties along the Ottawa River make it one of the most tree-dense communities we serve. Properties on Main Road, Cameron, and Mount Victoria are surrounded by mature Red Oaks, Sugar Maples, and White Pines — many over 100 years old.',
          'The hilly terrain around Mount Victoria and Alstonvale creates access challenges that require specialized rigging techniques. Many Hudson properties have trees growing on slopes or near waterfront retaining walls where conventional removal methods won\'t work safely.',
          'Hudson\'s tree protection bylaw is one of the strictest in the region — permits are required for removal, and replacement planting is often mandatory. As certified arborists familiar with Hudson\'s regulations, we ensure full compliance and can advise on the best replacement species for your property.',
        ],
        recentWork: [
          'Removed a storm-damaged 90-foot White Pine on a steep slope near Mount Victoria',
          'Cabled and braced a heritage Red Oak with a split trunk on Main Road',
          'Cleared deadwood from 20+ Sugar Maples on a large Alstonvale lot',
        ],
        faqs: [
          { q: 'Do I need a permit to cut a tree in Hudson?', a: 'Yes. Hudson has strict tree protection bylaws requiring permits for removal. Replacement planting may also be required. We manage the entire permit process for you.' },
          { q: 'Can you work on steep or waterfront properties in Hudson?', a: 'Absolutely. We regularly work on Hudson\'s hilly terrain around Mount Victoria and along the Ottawa River using specialized rigging and crane-assisted removal when needed.' },
          { q: 'What trees grow best in Hudson?', a: 'Red Oak, Sugar Maple, and White Pine thrive in Hudson\'s well-drained soil and hilly terrain. We can recommend the best species based on your specific lot conditions.' },
        ],
      },
      fr: {
        paragraphs: [
          'Les grands terrains ruraux et les propriétés boisées de Hudson le long de la rivière des Outaouais en font l\'une des communautés les plus densément boisées que nous desservons. Les propriétés sur Main Road, Cameron et Mont Victoria sont entourées de chênes rouges, d\'érables à sucre et de pins blancs matures — dont beaucoup ont plus de 100 ans.',
          'Le terrain vallonné autour du Mont Victoria et d\'Alstonvale crée des défis d\'accès qui nécessitent des techniques de gréage spécialisées. De nombreuses propriétés de Hudson ont des arbres poussant sur des pentes ou près de murs de soutènement en bordure de l\'eau où les méthodes d\'abattage conventionnelles ne fonctionnent pas de manière sécuritaire.',
          'Le règlement de protection des arbres de Hudson est l\'un des plus stricts de la région — des permis sont requis pour l\'abattage et la plantation de remplacement est souvent obligatoire. En tant qu\'arboriculteurs certifiés connaissant les réglementations de Hudson, nous assurons une conformité totale et pouvons vous conseiller sur les meilleures espèces de remplacement.',
        ],
        recentWork: [
          'Abattage d\'un pin blanc de 90 pieds endommagé par une tempête sur une pente raide près du Mont Victoria',
          'Haubanage et contreventement d\'un chêne rouge patrimonial avec un tronc fendu sur Main Road',
          'Nettoyage du bois mort de plus de 20 érables à sucre sur un grand terrain à Alstonvale',
        ],
        faqs: [
          { q: 'Ai-je besoin d\'un permis pour couper un arbre à Hudson?', a: 'Oui. Hudson a des règlements stricts de protection des arbres exigeant des permis pour l\'abattage. La plantation de remplacement peut également être requise. Nous gérons tout le processus de permis pour vous.' },
          { q: 'Pouvez-vous travailler sur des terrains en pente ou en bord de l\'eau à Hudson?', a: 'Absolument. Nous travaillons régulièrement sur le terrain vallonné de Hudson autour du Mont Victoria et le long de la rivière des Outaouais en utilisant du gréage spécialisé et l\'abattage assisté par grue au besoin.' },
          { q: 'Quels arbres poussent le mieux à Hudson?', a: 'Le chêne rouge, l\'érable à sucre et le pin blanc prospèrent dans le sol bien drainé et le terrain vallonné de Hudson. Nous pouvons recommander les meilleures espèces selon les conditions de votre terrain.' },
        ],
      },
    },
  },
  {
    slug: 'beaconsfield',
    name: 'Beaconsfield',
    nearby: ['Pointe-Claire', 'Kirkland', "Baie-D'Urfé"],
    postalCodes: ['H9W'],
    treeSpecies: ['Norway Maple', 'White Birch', 'Blue Spruce'],
    content: {
      en: {
        paragraphs: [
          'Beaconsfield is known for its tree-lined streets and spacious residential lots, particularly in the Beaurepaire and Woodland areas. The mature Norway Maples, White Birches, and Blue Spruces that define the neighborhood canopy require careful, experienced arborist care — especially as many are reaching the end of their natural lifespan.',
          'The Emerald Ash Borer has significantly impacted Beaconsfield\'s Ash tree population over the past decade, and many homeowners are dealing with dead or dying Ash trees that need safe removal before they become a hazard. We\'ve removed hundreds of Ash trees across Beaconsfield and can assess whether your tree can be saved with treatment or needs to come down.',
          'Beaconsfield requires a permit before removing any tree on private property with a diameter of 10 cm or more. The city also has a tree replacement policy — when you remove a tree, you may be required to plant a new one. We handle the full permitting process and can supply and plant the replacement tree.',
        ],
        recentWork: [
          'Removed 8 dead Ash trees affected by Emerald Ash Borer on Woodland Avenue',
          'Crown reduction on a large Norway Maple overhanging a roof on Rue Beaurepaire',
          'Emergency removal of a split White Birch after an ice storm in the Beaurepaire area',
        ],
        faqs: [
          { q: 'Do I need a permit to remove a tree in Beaconsfield?', a: 'Yes. A permit is required for any tree with a trunk diameter of 10 cm or more. The city may also require you to plant a replacement tree. We take care of the entire permit process.' },
          { q: 'My Ash tree looks sick — is it the Emerald Ash Borer?', a: 'Very likely. Beaconsfield has been heavily affected by EAB. Signs include thinning canopy, D-shaped exit holes in bark, and bark splitting. We can assess your tree and recommend treatment or removal.' },
          { q: 'How much does tree removal cost in Beaconsfield?', a: 'Costs depend on tree size, location, and complexity. Most residential removals in Beaconsfield range from $500 to $3,000. We provide free on-site estimates.' },
        ],
      },
      fr: {
        paragraphs: [
          'Beaconsfield est reconnue pour ses rues bordées d\'arbres et ses terrains résidentiels spacieux, particulièrement dans les secteurs Beaurepaire et Woodland. Les érables de Norvège, les bouleaux blancs et les épinettes bleues matures qui définissent la canopée du quartier nécessitent des soins arboricoles attentifs et expérimentés — surtout que beaucoup atteignent la fin de leur durée de vie naturelle.',
          'L\'agrile du frêne a considérablement affecté la population de frênes de Beaconsfield au cours de la dernière décennie, et de nombreux propriétaires font face à des frênes morts ou mourants qui doivent être enlevés de manière sécuritaire avant qu\'ils ne deviennent un danger. Nous avons enlevé des centaines de frênes à travers Beaconsfield et pouvons évaluer si votre arbre peut être sauvé par traitement ou s\'il doit être abattu.',
          'Beaconsfield exige un permis avant d\'abattre tout arbre sur une propriété privée dont le diamètre est de 10 cm ou plus. La ville a également une politique de remplacement des arbres — lorsque vous enlevez un arbre, vous pouvez être tenu d\'en planter un nouveau. Nous gérons tout le processus de permis et pouvons fournir et planter l\'arbre de remplacement.',
        ],
        recentWork: [
          'Abattage de 8 frênes morts affectés par l\'agrile du frêne sur l\'avenue Woodland',
          'Réduction de couronne d\'un grand érable de Norvège surplombant un toit sur la rue Beaurepaire',
          'Enlèvement d\'urgence d\'un bouleau blanc fendu après une tempête de verglas dans le secteur Beaurepaire',
        ],
        faqs: [
          { q: 'Ai-je besoin d\'un permis pour abattre un arbre à Beaconsfield?', a: 'Oui. Un permis est requis pour tout arbre dont le diamètre du tronc est de 10 cm ou plus. La ville peut également exiger que vous plantiez un arbre de remplacement. Nous nous occupons de tout le processus de permis.' },
          { q: 'Mon frêne semble malade — est-ce l\'agrile du frêne?', a: 'Très probablement. Beaconsfield a été fortement touché par l\'agrile du frêne. Les signes incluent un amincissement de la canopée, des trous de sortie en forme de D dans l\'écorce et le fendillement de l\'écorce. Nous pouvons évaluer votre arbre et recommander un traitement ou l\'abattage.' },
          { q: 'Combien coûte l\'abattage d\'un arbre à Beaconsfield?', a: 'Les coûts dépendent de la taille de l\'arbre, de l\'emplacement et de la complexité. La plupart des abattages résidentiels à Beaconsfield varient de 500 $ à 3 000 $. Nous offrons des estimations gratuites sur place.' },
        ],
      },
    },
  },
  {
    slug: 'saint-lazare',
    name: 'Saint-Lazare',
    nearby: ['Hudson', 'Vaudreuil', 'Île-Perrot'],
    postalCodes: ['J7T'],
    treeSpecies: ['Red Maple', 'Trembling Aspen', 'White Cedar'],
    content: {
      en: {
        paragraphs: [
          'Saint-Lazare\'s large wooded lots and equestrian properties make it one of the most demanding areas for tree work in the region. Many homes in Saddlebrook, Chanterel, and Forêt are built within mature forests of Red Maple, Trembling Aspen, and White Cedar — meaning trees are close to structures, fences, and paddocks.',
          'The sandy soil common in Saint-Lazare drains quickly but provides less anchoring for shallow-rooted species like Trembling Aspen. After major storms, we see frequent windthrow and root plate failures on larger trees. Our crew understands these soil conditions and can identify at-risk trees before they become emergencies.',
          'Saint-Lazare requires permits for tree removal on private property. The town is particularly protective of wooded lots and may require environmental assessments for larger clearing projects. We work closely with the town\'s urban planning department to ensure smooth permitting.',
        ],
        recentWork: [
          'Cleared storm-damaged trees from a horse paddock in Saddlebrook after a derecho',
          'Removed 15 dead Trembling Aspens on a wooded lot in the Forêt area',
          'Installed a lightning protection system on a heritage Sugar Maple in Chanterel',
        ],
        faqs: [
          { q: 'Do I need a permit to remove trees on my Saint-Lazare property?', a: 'Yes. Saint-Lazare requires permits for tree removal, especially on wooded lots. For larger clearing projects, an environmental assessment may be needed. We handle the entire permitting process.' },
          { q: 'My Aspens keep falling over — why?', a: 'Saint-Lazare\'s sandy soil provides less root anchoring for shallow-rooted species like Trembling Aspen. We can assess which trees are at risk and recommend removal or cabling to prevent damage.' },
          { q: 'Can you work around horse paddocks and fencing?', a: 'Yes. We work on equestrian properties regularly in Saint-Lazare. Our crew takes precautions to protect fencing, paddocks, and livestock during tree work.' },
        ],
      },
      fr: {
        paragraphs: [
          'Les grands terrains boisés et les propriétés équestres de Saint-Lazare en font l\'une des zones les plus exigeantes pour les travaux d\'arbres dans la région. De nombreuses maisons à Saddlebrook, Chanterel et Forêt sont construites au sein de forêts matures d\'érables rouges, de peupliers faux-trembles et de cèdres blancs — ce qui signifie que les arbres sont proches des structures, des clôtures et des paddocks.',
          'Le sol sablonneux commun à Saint-Lazare draine rapidement mais offre moins d\'ancrage pour les espèces à racines peu profondes comme le peuplier faux-tremble. Après les grandes tempêtes, nous constatons fréquemment des renversements et des ruptures de plaques racinaires sur les plus gros arbres. Notre équipe comprend ces conditions de sol et peut identifier les arbres à risque avant qu\'ils ne deviennent des urgences.',
          'Saint-Lazare exige des permis pour l\'abattage d\'arbres sur les propriétés privées. La ville est particulièrement protectrice des terrains boisés et peut exiger des évaluations environnementales pour les projets de défrichage plus importants. Nous travaillons en étroite collaboration avec le service d\'urbanisme de la ville pour assurer un processus de permis sans heurts.',
        ],
        recentWork: [
          'Nettoyage d\'arbres endommagés par la tempête dans un paddock à Saddlebrook après un derecho',
          'Abattage de 15 peupliers faux-trembles morts sur un terrain boisé dans le secteur Forêt',
          'Installation d\'un système de protection contre la foudre sur un érable à sucre patrimonial à Chanterel',
        ],
        faqs: [
          { q: 'Ai-je besoin d\'un permis pour abattre des arbres sur ma propriété à Saint-Lazare?', a: 'Oui. Saint-Lazare exige des permis pour l\'abattage d\'arbres, surtout sur les terrains boisés. Pour les projets de défrichage plus importants, une évaluation environnementale peut être nécessaire. Nous gérons tout le processus de permis.' },
          { q: 'Mes peupliers tombent sans cesse — pourquoi?', a: 'Le sol sablonneux de Saint-Lazare offre moins d\'ancrage racinaire pour les espèces à racines peu profondes comme le peuplier faux-tremble. Nous pouvons évaluer quels arbres sont à risque et recommander l\'abattage ou le haubanage pour prévenir les dommages.' },
          { q: 'Pouvez-vous travailler autour des paddocks et des clôtures de chevaux?', a: 'Oui. Nous travaillons régulièrement sur des propriétés équestres à Saint-Lazare. Notre équipe prend des précautions pour protéger les clôtures, les paddocks et le bétail pendant les travaux.' },
        ],
      },
    },
  },
  {
    slug: 'vaudreuil',
    name: 'Vaudreuil',
    nearby: ['Saint-Lazare', 'Île-Perrot', 'Pincourt'],
    postalCodes: ['J7V'],
    treeSpecies: ['Silver Maple', 'Balsam Fir', 'White Elm'],
    content: {
      en: {
        paragraphs: [
          'Vaudreuil-Dorion is growing fast, and that growth brings tree challenges — from clearing wooded lots for new construction in the Dorion sector to managing mature Silver Maples and White Elms in the older Vaudreuil neighborhoods near the train station and along Rue Saint-Charles.',
          'The clay-heavy soil along the Ottawa River shoreline in Vaudreuil causes root compression issues in many older trees. We frequently see Silver Maples with girdling roots and White Elms with declining canopies due to Dutch Elm Disease. Early intervention through pruning and treatment can extend the life of these trees significantly.',
          'Vaudreuil-Dorion\'s urban forestry regulations require a permit for tree removal. The city has been investing heavily in its urban canopy and may require one-for-one replacement planting. Our team is familiar with the local permitting process and can manage it on your behalf.',
        ],
        recentWork: [
          'Removed a leaning Silver Maple threatening a garage foundation on Rue Saint-Charles',
          'Treated 6 White Elms for Dutch Elm Disease in the older Vaudreuil neighborhood',
          'Lot clearing for new construction in Dorion with stump grinding and debris removal',
        ],
        faqs: [
          { q: 'Is tree removal in Vaudreuil-Dorion regulated?', a: 'Yes. The city requires permits for tree removal and may require replacement planting. We handle the permit process as part of our service.' },
          { q: 'My Elm tree is losing leaves early — is it Dutch Elm Disease?', a: 'It could be. Dutch Elm Disease is present in Vaudreuil. Signs include wilting and yellowing of leaves on one side of the tree. We can diagnose the issue and recommend treatment or removal.' },
          { q: 'Do you do lot clearing for new construction in Vaudreuil?', a: 'Yes. We provide complete lot clearing services including tree removal, stump grinding, and debris hauling for residential and commercial construction projects.' },
        ],
      },
      fr: {
        paragraphs: [
          'Vaudreuil-Dorion connaît une croissance rapide, et cette croissance apporte des défis arboricoles — du défrichage de terrains boisés pour de nouvelles constructions dans le secteur Dorion à la gestion des érables argentés et des ormes blancs matures dans les quartiers plus anciens de Vaudreuil près de la gare et le long de la rue Saint-Charles.',
          'Le sol argileux le long de la rive de la rivière des Outaouais à Vaudreuil cause des problèmes de compression racinaire chez de nombreux arbres plus anciens. Nous constatons fréquemment des érables argentés avec des racines étranglantes et des ormes blancs avec des canopées en déclin en raison de la maladie hollandaise de l\'orme. Une intervention précoce par l\'élagage et le traitement peut prolonger considérablement la vie de ces arbres.',
          'Les réglementations de foresterie urbaine de Vaudreuil-Dorion exigent un permis pour l\'abattage d\'arbres. La ville investit massivement dans sa canopée urbaine et peut exiger une plantation de remplacement un pour un. Notre équipe connaît le processus de permis local et peut le gérer en votre nom.',
        ],
        recentWork: [
          'Abattage d\'un érable argenté penché menaçant une fondation de garage sur la rue Saint-Charles',
          'Traitement de 6 ormes blancs contre la maladie hollandaise de l\'orme dans le vieux quartier de Vaudreuil',
          'Défrichage de terrain pour nouvelle construction à Dorion avec essouchage et enlèvement de débris',
        ],
        faqs: [
          { q: 'L\'abattage d\'arbres est-il réglementé à Vaudreuil-Dorion?', a: 'Oui. La ville exige des permis pour l\'abattage d\'arbres et peut exiger une plantation de remplacement. Nous gérons le processus de permis dans le cadre de notre service.' },
          { q: 'Mon orme perd ses feuilles tôt — est-ce la maladie hollandaise de l\'orme?', a: 'C\'est possible. La maladie hollandaise de l\'orme est présente à Vaudreuil. Les signes incluent le flétrissement et le jaunissement des feuilles d\'un côté de l\'arbre. Nous pouvons diagnostiquer le problème et recommander un traitement ou l\'abattage.' },
          { q: 'Faites-vous le défrichage de terrains pour les nouvelles constructions à Vaudreuil?', a: 'Oui. Nous offrons des services complets de défrichage incluant l\'abattage d\'arbres, l\'essouchage et le transport de débris pour les projets de construction résidentielle et commerciale.' },
        ],
      },
    },
  },
  {
    slug: 'kirkland',
    name: 'Kirkland',
    nearby: ['Pointe-Claire', 'Beaconsfield', 'Dollard-des-Ormeaux'],
    postalCodes: ['H9J', 'H9H'],
    treeSpecies: ['Sugar Maple', 'Green Ash', 'Eastern White Cedar'],
    content: {
      en: {
        paragraphs: [
          'Kirkland\'s residential streets are defined by their dense tree canopy — particularly the Sugar Maples and Green Ash trees planted in the 1960s and 1970s when the city was developed. These trees are now mature and many require structural pruning, deadwood removal, or complete removal as they reach the end of their lifespan.',
          'The Emerald Ash Borer has devastated Kirkland\'s Green Ash population. The city has been proactive with its removal program, but many privately owned Ash trees remain standing dead or in decline. Dead Ash trees become brittle and dangerous quickly — if you have one, don\'t wait for it to fall.',
          'Kirkland requires a permit for any tree removal on private property. The city\'s Environmental Advisory Committee reviews applications and may conduct site visits. We\'ve worked with the committee on hundreds of permit applications and can guide you through the process efficiently.',
        ],
        recentWork: [
          'Removed 12 dead Green Ash trees on a single street in the Kirkland Heights area',
          'Crown cleaning on 8 mature Sugar Maples along a residential driveway',
          'Emergency removal of a hollow Sugar Maple that split during a windstorm',
        ],
        faqs: [
          { q: 'How bad is the Emerald Ash Borer problem in Kirkland?', a: 'Very significant. Most untreated Ash trees in Kirkland are dead or dying. If your Ash tree has a thinning canopy or bark damage, it likely needs to come down. We offer free assessments.' },
          { q: 'What is the permit process in Kirkland?', a: 'You need a permit for any tree removal on private property. The Environmental Advisory Committee reviews applications. We handle the paperwork and can typically get approval within 2-3 weeks.' },
          { q: 'Can you plant replacement trees in Kirkland?', a: 'Yes. We provide full planting services and can recommend species suited to Kirkland\'s soil and climate. Sugar Maple, Red Oak, and native Serviceberry are popular replacements.' },
        ],
      },
      fr: {
        paragraphs: [
          'Les rues résidentielles de Kirkland sont définies par leur canopée dense — particulièrement les érables à sucre et les frênes verts plantés dans les années 1960 et 1970 lors du développement de la ville. Ces arbres sont maintenant matures et beaucoup nécessitent un élagage structurel, un enlèvement du bois mort ou un abattage complet à mesure qu\'ils atteignent la fin de leur durée de vie.',
          'L\'agrile du frêne a dévasté la population de frênes verts de Kirkland. La ville a été proactive avec son programme d\'abattage, mais de nombreux frênes privés restent debout, morts ou en déclin. Les frênes morts deviennent cassants et dangereux rapidement — si vous en avez un, n\'attendez pas qu\'il tombe.',
          'Kirkland exige un permis pour tout abattage d\'arbre sur une propriété privée. Le Comité consultatif en environnement de la ville examine les demandes et peut effectuer des visites sur place. Nous avons travaillé avec le comité sur des centaines de demandes de permis et pouvons vous guider efficacement dans le processus.',
        ],
        recentWork: [
          'Abattage de 12 frênes verts morts sur une seule rue dans le secteur Kirkland Heights',
          'Nettoyage de couronne de 8 érables à sucre matures le long d\'une allée résidentielle',
          'Abattage d\'urgence d\'un érable à sucre creux qui s\'est fendu lors d\'une tempête de vent',
        ],
        faqs: [
          { q: 'L\'agrile du frêne est-il un problème grave à Kirkland?', a: 'Très important. La plupart des frênes non traités à Kirkland sont morts ou mourants. Si votre frêne a une canopée clairsemée ou des dommages à l\'écorce, il doit probablement être abattu. Nous offrons des évaluations gratuites.' },
          { q: 'Quel est le processus de permis à Kirkland?', a: 'Vous avez besoin d\'un permis pour tout abattage d\'arbre sur une propriété privée. Le Comité consultatif en environnement examine les demandes. Nous gérons la paperasse et pouvons généralement obtenir l\'approbation en 2 à 3 semaines.' },
          { q: 'Pouvez-vous planter des arbres de remplacement à Kirkland?', a: 'Oui. Nous offrons des services complets de plantation et pouvons recommander des espèces adaptées au sol et au climat de Kirkland. L\'érable à sucre, le chêne rouge et l\'amélanchier indigène sont des remplacements populaires.' },
        ],
      },
    },
  },
  {
    slug: 'dollard-des-ormeaux',
    name: 'Dollard-des-Ormeaux',
    nearby: ['Kirkland', 'Pointe-Claire', 'Dorval'],
    postalCodes: ['H9A', 'H9B'],
    treeSpecies: ['Norway Maple', 'Manitoba Maple', 'White Spruce'],
    content: {
      en: {
        paragraphs: [
          'Dollard-des-Ormeaux\'s dense suburban streets are lined with aging Norway Maples and Manitoba Maples, many of which were planted when the neighborhoods were built in the 1960s and 70s. These trees are now showing signs of decline — cracked trunks, lifting sidewalks, and large deadwood limbs over homes and driveways.',
          'Manitoba Maples are particularly problematic in DDO — they grow fast but have weak wood that splits easily in storms and ice events. We remove more Manitoba Maples in DDO than any other species. If yours has multiple trunks or leans toward your house, it\'s worth having it assessed.',
          'DDO falls under the Agglomeration of Montreal\'s tree protection bylaw. A permit is required before removing any tree with a diameter of 10 cm or more. The process typically takes 2-4 weeks, and we handle it entirely — from application to follow-up.',
        ],
        recentWork: [
          'Removed a multi-trunk Manitoba Maple that split and fell on a fence during an ice storm',
          'Pruned 20+ Norway Maples along residential streets to clear utility lines',
          'Stump grinding of 6 large stumps in a backyard to prepare for a new patio installation',
        ],
        faqs: [
          { q: 'Why do Manitoba Maples split so easily?', a: 'Manitoba Maples have weak, brittle wood and often grow with multiple trunks that form weak attachments. Ice and wind loading cause frequent failures. If your tree has co-dominant trunks, it\'s at higher risk.' },
          { q: 'Is DDO part of Montreal\'s tree bylaw?', a: 'Yes. DDO follows the Agglomeration of Montreal\'s tree protection regulations. You need a permit for any tree with a 10 cm+ diameter. We manage the full permit process.' },
          { q: 'Can you remove trees near power lines in DDO?', a: 'Yes. We are trained for working near utility lines and coordinate with Hydro-Québec when necessary. We handle the clearance process so you don\'t have to.' },
        ],
      },
      fr: {
        paragraphs: [
          'Les rues suburbaines denses de Dollard-des-Ormeaux sont bordées d\'érables de Norvège et d\'érables à Giguère vieillissants, dont beaucoup ont été plantés lors de la construction des quartiers dans les années 1960 et 70. Ces arbres montrent maintenant des signes de déclin — troncs fissurés, trottoirs soulevés et grosses branches mortes au-dessus des maisons et des allées.',
          'Les érables à Giguère sont particulièrement problématiques à DDO — ils poussent vite mais ont un bois faible qui se fend facilement lors des tempêtes et du verglas. Nous enlevons plus d\'érables à Giguère à DDO que toute autre espèce. Si le vôtre a plusieurs troncs ou penche vers votre maison, il vaut la peine de le faire évaluer.',
          'DDO relève du règlement de protection des arbres de l\'Agglomération de Montréal. Un permis est requis avant d\'abattre tout arbre d\'un diamètre de 10 cm ou plus. Le processus prend généralement de 2 à 4 semaines, et nous le gérons entièrement — de la demande au suivi.',
        ],
        recentWork: [
          'Abattage d\'un érable à Giguère à troncs multiples qui s\'est fendu et est tombé sur une clôture lors d\'une tempête de verglas',
          'Élagage de plus de 20 érables de Norvège le long des rues résidentielles pour dégager les lignes électriques',
          'Essouchage de 6 grosses souches dans une cour arrière pour préparer l\'installation d\'un nouveau patio',
        ],
        faqs: [
          { q: 'Pourquoi les érables à Giguère se fendent-ils si facilement?', a: 'Les érables à Giguère ont un bois faible et cassant et poussent souvent avec plusieurs troncs qui forment des attaches faibles. Le verglas et le vent causent des ruptures fréquentes. Si votre arbre a des troncs co-dominants, il est plus à risque.' },
          { q: 'DDO fait-il partie du règlement sur les arbres de Montréal?', a: 'Oui. DDO suit les réglementations de protection des arbres de l\'Agglomération de Montréal. Vous avez besoin d\'un permis pour tout arbre de 10 cm+ de diamètre. Nous gérons tout le processus de permis.' },
          { q: 'Pouvez-vous enlever des arbres près des lignes électriques à DDO?', a: 'Oui. Nous sommes formés pour travailler près des lignes de services publics et nous coordonnons avec Hydro-Québec lorsque nécessaire. Nous gérons le processus de dégagement pour vous.' },
        ],
      },
    },
  },
  {
    slug: 'dorval',
    name: 'Dorval',
    nearby: ['Pointe-Claire', 'Kirkland', 'Beaconsfield'],
    postalCodes: ['H9P', 'H9S'],
    treeSpecies: ['Silver Maple', 'American Elm', 'Colorado Blue Spruce'],
    content: {
      en: {
        paragraphs: [
          'Dorval\'s compact lots and proximity to the airport create a unique environment for tree work. The older neighborhoods around Dorval Avenue and near the waterfront are home to large Silver Maples and American Elms — trees that have adapted to the clay-heavy lake soil but now face age-related decline and disease pressure.',
          'Space is tight in many Dorval properties, which means tree removal often requires careful rigging and sectional takedown rather than felling. Our crew regularly works in constrained spaces between houses, over pools, and near garages where precision is critical.',
          'Dorval is part of the Agglomeration of Montreal and follows its tree protection regulations. A permit is required for tree removal. The city has been actively replanting and encourages homeowners to maintain and replace their trees.',
        ],
        recentWork: [
          'Sectional removal of a 60-foot Silver Maple between two houses with only 8 feet of clearance',
          'Treated a row of American Elms for Dutch Elm Disease along Dorval Avenue',
          'Removed a dead Colorado Blue Spruce leaning over a swimming pool',
        ],
        faqs: [
          { q: 'Can you remove a tree in a tight space in Dorval?', a: 'Yes. Many Dorval lots are compact, and we specialize in sectional removal — dismantling the tree piece by piece with rigging to avoid damage to homes, pools, and fences.' },
          { q: 'Does Dorval require a tree removal permit?', a: 'Yes. As part of the Montreal Agglomeration, Dorval follows Montreal\'s tree protection regulations. We handle the permit process for you.' },
          { q: 'Are there many Elm trees left in Dorval?', a: 'Some, but Dutch Elm Disease has taken many. If your Elm still looks healthy, treatment may be worthwhile to protect it. We can assess and recommend the best approach.' },
        ],
      },
      fr: {
        paragraphs: [
          'Les terrains compacts de Dorval et la proximité de l\'aéroport créent un environnement unique pour les travaux d\'arbres. Les quartiers plus anciens autour de l\'avenue Dorval et près du bord de l\'eau abritent de grands érables argentés et ormes d\'Amérique — des arbres qui se sont adaptés au sol argileux du lac mais font maintenant face au déclin lié à l\'âge et à la pression des maladies.',
          'L\'espace est restreint sur de nombreuses propriétés à Dorval, ce qui signifie que l\'abattage nécessite souvent un gréage minutieux et un démontage par sections plutôt qu\'un abattage simple. Notre équipe travaille régulièrement dans des espaces restreints entre les maisons, au-dessus des piscines et près des garages où la précision est essentielle.',
          'Dorval fait partie de l\'Agglomération de Montréal et suit ses réglementations de protection des arbres. Un permis est requis pour l\'abattage d\'arbres. La ville replante activement et encourage les propriétaires à entretenir et à remplacer leurs arbres.',
        ],
        recentWork: [
          'Abattage par sections d\'un érable argenté de 60 pieds entre deux maisons avec seulement 8 pieds de dégagement',
          'Traitement d\'une rangée d\'ormes d\'Amérique contre la maladie hollandaise de l\'orme le long de l\'avenue Dorval',
          'Abattage d\'une épinette bleue du Colorado morte penchant au-dessus d\'une piscine',
        ],
        faqs: [
          { q: 'Pouvez-vous abattre un arbre dans un espace restreint à Dorval?', a: 'Oui. Beaucoup de terrains à Dorval sont compacts, et nous sommes spécialisés dans l\'abattage par sections — en démontant l\'arbre pièce par pièce avec du gréage pour éviter les dommages aux maisons, piscines et clôtures.' },
          { q: 'Dorval exige-t-il un permis d\'abattage d\'arbres?', a: 'Oui. En tant que partie de l\'Agglomération de Montréal, Dorval suit les réglementations de protection des arbres de Montréal. Nous gérons le processus de permis pour vous.' },
          { q: 'Reste-t-il beaucoup d\'ormes à Dorval?', a: 'Quelques-uns, mais la maladie hollandaise de l\'orme en a pris beaucoup. Si votre orme semble encore en santé, un traitement peut valoir la peine pour le protéger. Nous pouvons évaluer et recommander la meilleure approche.' },
        ],
      },
    },
  },
  {
    slug: 'senneville',
    name: 'Senneville',
    nearby: ["Baie-D'Urfé", 'Beaconsfield', 'Kirkland'],
    postalCodes: ['H9X'],
    treeSpecies: ['Red Oak', 'White Pine', 'Sugar Maple'],
    content: {
      en: {
        paragraphs: [
          'Senneville is home to some of the most spectacular mature trees on the West Island — century-old Red Oaks, towering White Pines, and massive Sugar Maples on sprawling estate properties. Working on trees of this caliber requires advanced arborist skills, crane access, and a deep understanding of tree biology.',
          'Many Senneville properties border the Anse-à-l\'Orme nature park or sit along the waterfront, creating sensitive ecological zones where careless tree work can cause lasting damage. Our certified arborists assess each tree individually and use techniques that protect the surrounding ecosystem.',
          'Senneville has very strict regulations around tree removal given its commitment to preserving its natural character. Permits are required, and the village may deny removal requests for healthy trees. We can help you navigate the process and present a strong case when removal is genuinely necessary.',
        ],
        recentWork: [
          'Crane-assisted removal of a 100-foot White Pine with structural failure on an estate property',
          'Preservation pruning on a 150-year-old Red Oak to extend its lifespan',
          'Cleared hazardous deadwood from mature trees along a private waterfront',
        ],
        faqs: [
          { q: 'Can you work on very large trees in Senneville?', a: 'Yes. We have crane access and advanced rigging equipment for the large estate trees that Senneville is known for. Our arborists are experienced with trees over 80 feet tall.' },
          { q: 'Is it hard to get a tree removal permit in Senneville?', a: 'Senneville is strict about tree preservation. Permits can be denied for healthy trees. We help prepare your application with a professional arborist assessment to support your case.' },
          { q: 'Do you work near the Anse-à-l\'Orme nature park?', a: 'Yes. We use environmentally sensitive practices when working near protected natural areas and follow all applicable regulations.' },
        ],
      },
      fr: {
        paragraphs: [
          'Senneville abrite certains des arbres matures les plus spectaculaires de l\'Ouest de l\'Île — des chênes rouges centenaires, des pins blancs imposants et des érables à sucre massifs sur de vastes propriétés. Travailler sur des arbres de ce calibre exige des compétences arboricoles avancées, un accès par grue et une compréhension approfondie de la biologie des arbres.',
          'De nombreuses propriétés de Senneville bordent le parc nature de l\'Anse-à-l\'Orme ou se trouvent le long du bord de l\'eau, créant des zones écologiques sensibles où des travaux d\'arbres négligents peuvent causer des dommages durables. Nos arboriculteurs certifiés évaluent chaque arbre individuellement et utilisent des techniques qui protègent l\'écosystème environnant.',
          'Senneville a des réglementations très strictes concernant l\'abattage d\'arbres compte tenu de son engagement à préserver son caractère naturel. Des permis sont requis et le village peut refuser les demandes d\'abattage pour les arbres sains. Nous pouvons vous aider à naviguer le processus et présenter un dossier solide lorsque l\'abattage est véritablement nécessaire.',
        ],
        recentWork: [
          'Abattage assisté par grue d\'un pin blanc de 100 pieds avec défaillance structurelle sur une propriété de domaine',
          'Élagage de préservation d\'un chêne rouge de 150 ans pour prolonger sa durée de vie',
          'Nettoyage du bois mort dangereux des arbres matures le long d\'un bord de l\'eau privé',
        ],
        faqs: [
          { q: 'Pouvez-vous travailler sur de très grands arbres à Senneville?', a: 'Oui. Nous avons accès à une grue et à de l\'équipement de gréage avancé pour les grands arbres de domaine pour lesquels Senneville est reconnu. Nos arboriculteurs sont expérimentés avec des arbres de plus de 80 pieds.' },
          { q: 'Est-il difficile d\'obtenir un permis d\'abattage à Senneville?', a: 'Senneville est strict en matière de préservation des arbres. Les permis peuvent être refusés pour les arbres sains. Nous aidons à préparer votre demande avec une évaluation professionnelle d\'arboriculteur pour appuyer votre dossier.' },
          { q: 'Travaillez-vous près du parc nature de l\'Anse-à-l\'Orme?', a: 'Oui. Nous utilisons des pratiques respectueuses de l\'environnement lorsque nous travaillons près de zones naturelles protégées et suivons toutes les réglementations applicables.' },
        ],
      },
    },
  },
  {
    slug: 'baie-d-urfe',
    name: "Baie-D'Urfé",
    nearby: ['Senneville', 'Beaconsfield', 'Kirkland'],
    postalCodes: ['H9X'],
    treeSpecies: ['White Oak', 'Eastern Hemlock', 'Paper Birch'],
    content: {
      en: {
        paragraphs: [
          'Baie-D\'Urfé\'s large residential lots and natural wooded areas along the lakeshore make it a unique community for tree care. The town\'s commitment to preserving its green character means properties are home to impressive White Oaks, Eastern Hemlocks, and Paper Birches that require knowledgeable arborist attention.',
          'The Hemlock Woolly Adelgid is an emerging threat to Baie-D\'Urfé\'s Eastern Hemlock population. While not yet widespread, early detection and treatment are critical. Our team monitors for this pest and can apply targeted treatments to protect your Hemlocks before the infestation spreads.',
          'Baie-D\'Urfé\'s tree protection bylaw is rigorous. The town takes pride in its canopy and requires permits for removal along with replacement planting. Our arborists can provide the professional assessment documentation that the town requires with permit applications.',
        ],
        recentWork: [
          'Treated Eastern Hemlocks for Woolly Adelgid on a lakefront property',
          'Removed a wind-damaged White Oak that fell across a driveway after a storm',
          'Pruned mature Paper Birches to improve light penetration for a garden',
        ],
        faqs: [
          { q: 'What is the Hemlock Woolly Adelgid?', a: 'It\'s an invasive insect pest that feeds on Eastern Hemlocks and can kill them within a few years. It appears as small white cottony masses on the undersides of branches. We offer monitoring and treatment services.' },
          { q: 'Does Baie-D\'Urfé require a permit for tree removal?', a: 'Yes. The town has a rigorous tree protection bylaw and requires permits along with replacement planting plans. We provide the arborist assessment needed for the application.' },
          { q: 'Can you work on lakefront properties in Baie-D\'Urfé?', a: 'Yes. We regularly work on properties along the lakeshore and take extra precautions to protect waterfront areas and comply with environmental regulations.' },
        ],
      },
      fr: {
        paragraphs: [
          'Les grands terrains résidentiels de Baie-D\'Urfé et les zones boisées naturelles le long du bord du lac en font une communauté unique pour l\'entretien des arbres. L\'engagement de la ville à préserver son caractère verdoyant signifie que les propriétés abritent d\'impressionnants chênes blancs, pruches du Canada et bouleaux à papier qui nécessitent l\'attention d\'arboriculteurs compétents.',
          'Le puceron lanigère de la pruche est une menace émergente pour la population de pruches du Canada de Baie-D\'Urfé. Bien qu\'il ne soit pas encore répandu, la détection et le traitement précoces sont essentiels. Notre équipe surveille ce ravageur et peut appliquer des traitements ciblés pour protéger vos pruches avant que l\'infestation ne se propage.',
          'Le règlement de protection des arbres de Baie-D\'Urfé est rigoureux. La ville est fière de sa canopée et exige des permis pour l\'abattage ainsi que la plantation de remplacement. Nos arboriculteurs peuvent fournir la documentation d\'évaluation professionnelle que la ville exige avec les demandes de permis.',
        ],
        recentWork: [
          'Traitement de pruches du Canada contre le puceron lanigère sur une propriété en bord de lac',
          'Abattage d\'un chêne blanc endommagé par le vent qui est tombé en travers d\'une allée après une tempête',
          'Élagage de bouleaux à papier matures pour améliorer la pénétration de la lumière pour un jardin',
        ],
        faqs: [
          { q: 'Qu\'est-ce que le puceron lanigère de la pruche?', a: 'C\'est un insecte ravageur envahissant qui se nourrit des pruches du Canada et peut les tuer en quelques années. Il apparaît sous forme de petites masses cotonneuses blanches sous les branches. Nous offrons des services de surveillance et de traitement.' },
          { q: 'Baie-D\'Urfé exige-t-il un permis pour l\'abattage d\'arbres?', a: 'Oui. La ville a un règlement rigoureux de protection des arbres et exige des permis ainsi que des plans de plantation de remplacement. Nous fournissons l\'évaluation d\'arboriculteur nécessaire pour la demande.' },
          { q: 'Pouvez-vous travailler sur des propriétés en bord de lac à Baie-D\'Urfé?', a: 'Oui. Nous travaillons régulièrement sur des propriétés le long du bord du lac et prenons des précautions supplémentaires pour protéger les zones riveraines et respecter les réglementations environnementales.' },
        ],
      },
    },
  },
  {
    slug: 'ile-perrot',
    name: 'Île-Perrot',
    nearby: ['Pincourt', 'Vaudreuil', 'Saint-Lazare'],
    postalCodes: ['J7V'],
    treeSpecies: ['Silver Maple', 'Basswood', 'Black Walnut'],
    content: {
      en: {
        paragraphs: [
          'Île-Perrot\'s island geography creates specific tree care challenges. The water table is high, the soil is often saturated clay, and wind exposure from the surrounding river channels puts extra stress on trees — particularly the Silver Maples and Basswoods that dominate the island\'s canopy.',
          'Black Walnut trees are common in Île-Perrot and require special handling. Their roots produce juglone, a natural herbicide that kills many other plants. When removing or pruning Black Walnuts, proper cleanup of roots and sawdust is essential to protect your garden and lawn.',
          'Île-Perrot follows provincial regulations for tree removal. Depending on your specific location on the island, you may fall under different municipal jurisdictions (Notre-Dame-de-l\'Île-Perrot or L\'Île-Perrot). We know the requirements for both and handle the permitting accordingly.',
        ],
        recentWork: [
          'Removed a large Black Walnut that was killing surrounding garden plants with juglone toxicity',
          'Emergency removal of 3 Silver Maples uprooted by wind along the river channel',
          'Crown reduction on Basswood trees to reduce wind sail and prevent blowover',
        ],
        faqs: [
          { q: 'Why are my plants dying near my Black Walnut tree?', a: 'Black Walnuts produce juglone, a natural toxin that kills many plants including tomatoes, peppers, and certain flowers. We can remove the tree and remediate the soil so your garden thrives again.' },
          { q: 'Why do so many trees blow over in Île-Perrot?', a: 'The island\'s high water table and clay soil limit root depth, while wind exposure from the surrounding waterways adds extra load. Crown reduction and cabling can help reduce blowover risk.' },
          { q: 'Which municipality handles my tree permit on Île-Perrot?', a: 'It depends on your location — either Notre-Dame-de-l\'Île-Perrot or L\'Île-Perrot. We know the requirements for both and handle the correct permit for your property.' },
        ],
      },
      fr: {
        paragraphs: [
          'La géographie insulaire de l\'Île-Perrot crée des défis spécifiques pour l\'entretien des arbres. La nappe phréatique est élevée, le sol est souvent de l\'argile saturée, et l\'exposition au vent des chenaux fluviaux environnants met un stress supplémentaire sur les arbres — particulièrement les érables argentés et les tilleuls qui dominent la canopée de l\'île.',
          'Les noyers noirs sont communs à l\'Île-Perrot et nécessitent une manipulation spéciale. Leurs racines produisent de la juglone, un herbicide naturel qui tue de nombreuses autres plantes. Lors de l\'abattage ou de l\'élagage de noyers noirs, un nettoyage adéquat des racines et de la sciure est essentiel pour protéger votre jardin et votre pelouse.',
          'L\'Île-Perrot suit les réglementations provinciales pour l\'abattage d\'arbres. Selon votre emplacement spécifique sur l\'île, vous pouvez relever de différentes juridictions municipales (Notre-Dame-de-l\'Île-Perrot ou L\'Île-Perrot). Nous connaissons les exigences des deux et gérons les permis en conséquence.',
        ],
        recentWork: [
          'Abattage d\'un grand noyer noir qui tuait les plantes de jardin environnantes par toxicité de la juglone',
          'Abattage d\'urgence de 3 érables argentés déracinés par le vent le long du chenal fluvial',
          'Réduction de couronne de tilleuls pour réduire la prise au vent et prévenir le renversement',
        ],
        faqs: [
          { q: 'Pourquoi mes plantes meurent-elles près de mon noyer noir?', a: 'Les noyers noirs produisent de la juglone, une toxine naturelle qui tue de nombreuses plantes dont les tomates, les poivrons et certaines fleurs. Nous pouvons abattre l\'arbre et remédier au sol pour que votre jardin prospère à nouveau.' },
          { q: 'Pourquoi tant d\'arbres tombent-ils à l\'Île-Perrot?', a: 'La nappe phréatique élevée de l\'île et le sol argileux limitent la profondeur des racines, tandis que l\'exposition au vent des voies navigables environnantes ajoute une charge supplémentaire. La réduction de couronne et le haubanage peuvent aider à réduire le risque de renversement.' },
          { q: 'Quelle municipalité gère mon permis d\'arbre à l\'Île-Perrot?', a: 'Cela dépend de votre emplacement — soit Notre-Dame-de-l\'Île-Perrot soit L\'Île-Perrot. Nous connaissons les exigences des deux et gérons le bon permis pour votre propriété.' },
        ],
      },
    },
  },
  {
    slug: 'pincourt',
    name: 'Pincourt',
    nearby: ['Île-Perrot', 'Vaudreuil', 'Saint-Lazare'],
    postalCodes: ['J7W'],
    treeSpecies: ['Red Maple', 'White Cedar', 'Lombardy Poplar'],
    content: {
      en: {
        paragraphs: [
          'Pincourt\'s waterfront location between Lac des Deux Montagnes and Lac Saint-Louis gives it a lush tree canopy but also significant wind exposure. Red Maples and White Cedars line many residential streets, while Lombardy Poplars — once popular as windbreaks — are aging and becoming hazardous as their wood weakens.',
          'Lombardy Poplars are one of the most common problem trees we deal with in Pincourt. They grow tall and narrow but become hollow and brittle with age, dropping large limbs without warning. If your Lombardy Poplar is over 20 years old, it\'s likely time for a professional assessment.',
          'Pincourt\'s tree bylaws require a permit before removing trees on private property. The town encourages homeowners to replace removed trees and can provide recommendations on suitable species. We handle the full permit process and offer planting services.',
        ],
        recentWork: [
          'Removed 4 aging Lombardy Poplars that were dropping limbs onto a residential street',
          'Planted 10 Red Maples as replacement trees in a new Pincourt subdivision',
          'Emergency removal of a White Cedar hedge destroyed by heavy ice accumulation',
        ],
        faqs: [
          { q: 'Should I remove my Lombardy Poplar in Pincourt?', a: 'If it\'s over 20 years old, likely yes. Lombardy Poplars become hollow and brittle with age and are prone to dropping large limbs. We offer free assessments to determine the risk level.' },
          { q: 'Does Pincourt require a tree removal permit?', a: 'Yes. A permit is needed before removing trees on private property. The town may require replacement planting. We manage the entire process.' },
          { q: 'What trees do you recommend planting in Pincourt?', a: 'Red Maple, Bur Oak, and native White Cedar do well in Pincourt\'s soil and tolerate the wind exposure from the surrounding lakes. We provide full planting services with a 1-year guarantee.' },
        ],
      },
      fr: {
        paragraphs: [
          'L\'emplacement riverain de Pincourt entre le lac des Deux Montagnes et le lac Saint-Louis lui confère une canopée luxuriante mais aussi une exposition significative au vent. Les érables rouges et les cèdres blancs bordent de nombreuses rues résidentielles, tandis que les peupliers de Lombardie — autrefois populaires comme brise-vent — vieillissent et deviennent dangereux à mesure que leur bois s\'affaiblit.',
          'Les peupliers de Lombardie sont l\'un des arbres problématiques les plus courants que nous traitons à Pincourt. Ils poussent grands et étroits mais deviennent creux et cassants avec l\'âge, laissant tomber de grosses branches sans avertissement. Si votre peuplier de Lombardie a plus de 20 ans, il est probablement temps de faire une évaluation professionnelle.',
          'Les règlements sur les arbres de Pincourt exigent un permis avant d\'abattre des arbres sur une propriété privée. La ville encourage les propriétaires à remplacer les arbres abattus et peut fournir des recommandations sur les espèces appropriées. Nous gérons tout le processus de permis et offrons des services de plantation.',
        ],
        recentWork: [
          'Abattage de 4 peupliers de Lombardie vieillissants qui laissaient tomber des branches sur une rue résidentielle',
          'Plantation de 10 érables rouges comme arbres de remplacement dans un nouveau lotissement de Pincourt',
          'Abattage d\'urgence d\'une haie de cèdres blancs détruite par une forte accumulation de verglas',
        ],
        faqs: [
          { q: 'Devrais-je enlever mon peuplier de Lombardie à Pincourt?', a: 'S\'il a plus de 20 ans, probablement oui. Les peupliers de Lombardie deviennent creux et cassants avec l\'âge et sont sujets à laisser tomber de grosses branches. Nous offrons des évaluations gratuites pour déterminer le niveau de risque.' },
          { q: 'Pincourt exige-t-il un permis d\'abattage d\'arbres?', a: 'Oui. Un permis est nécessaire avant d\'abattre des arbres sur une propriété privée. La ville peut exiger une plantation de remplacement. Nous gérons l\'ensemble du processus.' },
          { q: 'Quels arbres recommandez-vous de planter à Pincourt?', a: 'L\'érable rouge, le chêne à gros fruits et le cèdre blanc indigène poussent bien dans le sol de Pincourt et tolèrent l\'exposition au vent des lacs environnants. Nous offrons des services complets de plantation avec une garantie d\'un an.' },
        ],
      },
    },
  },
  {
    slug: 'pierrefonds',
    name: 'Pierrefonds',
    nearby: ['Dollard-des-Ormeaux', 'Kirkland', 'Senneville'],
    postalCodes: ['H8Y', 'H8Z', 'H9K'],
    treeSpecies: ['Silver Maple', 'Green Ash', 'Eastern White Cedar'],
    content: {
      en: {
        paragraphs: [
          'Pierrefonds-Roxboro stretches along the Rivière des Prairies on the north side of the West Island, and its established neighborhoods along Gouin Boulevard and around the Cap-Saint-Jacques nature park hold a dense canopy of mature Silver Maples, Green Ash, and Eastern White Cedars. Many of these street and backyard trees were planted decades ago and now need structural pruning, deadwood removal, or full removal as they age.',
          'The riverfront exposure along the Rivière des Prairies means high winds and ice loading put extra stress on larger trees, and the clay-heavy soil common in the borough can cause root instability. Our crew works frequently in the Pierrefonds, Roxboro, and Gouin corridor areas, and often uses sectional takedown and rigging on the tighter suburban lots where felling isn\'t an option.',
          'Pierrefonds is part of the Agglomeration of Montreal and falls under its tree protection bylaw — a permit is required before removing any tree with a trunk diameter of 10 cm or more on private property. Our team handles the permit application and ensures full compliance with the municipal regulations.',
        ],
        recentWork: [
          'Removed a row of dead Green Ash trees killed by Emerald Ash Borer along Gouin Boulevard',
          'Sectional takedown of a 65-foot Silver Maple in a tight Roxboro backyard with limited access',
          'Storm cleanup near Cap-Saint-Jacques after high winds off the Rivière des Prairies',
        ],
        faqs: [
          { q: 'Do I need a permit to remove a tree in Pierrefonds?', a: 'Yes. As part of the Agglomeration of Montreal, Pierrefonds requires a permit for removing any tree with a trunk diameter of 10 cm or more. We handle the permit application as part of our service.' },
          { q: 'My Ash tree looks sick — is it the Emerald Ash Borer?', a: 'Very likely. Green Ash trees across Pierrefonds have been hit hard by EAB. Signs include a thinning canopy, D-shaped exit holes, and bark splitting. We can assess your tree and recommend treatment or removal.' },
          { q: 'Can you remove a tree in a tight backyard in Pierrefonds?', a: 'Yes. Many Pierrefonds and Roxboro lots have limited access, so we specialize in sectional removal — dismantling the tree piece by piece with rigging to protect homes, fences, and pools.' },
        ],
      },
      fr: {
        paragraphs: [
          'Pierrefonds-Roxboro s\'étend le long de la rivière des Prairies au nord de l\'Ouest de l\'Île, et ses quartiers établis le long du boulevard Gouin et autour du parc-nature du Cap-Saint-Jacques abritent une canopée dense d\'érables argentés, de frênes verts et de cèdres blancs matures. Beaucoup de ces arbres de rue et de cour arrière ont été plantés il y a des décennies et nécessitent maintenant un élagage structurel, un enlèvement du bois mort ou un abattage complet à mesure qu\'ils vieillissent.',
          'L\'exposition riveraine le long de la rivière des Prairies fait que les vents forts et le verglas mettent un stress supplémentaire sur les plus gros arbres, et le sol argileux commun dans l\'arrondissement peut causer une instabilité racinaire. Notre équipe travaille fréquemment dans les secteurs de Pierrefonds, Roxboro et le corridor Gouin, et utilise souvent le démontage par sections et le gréage sur les terrains suburbains plus restreints où l\'abattage simple n\'est pas possible.',
          'Pierrefonds fait partie de l\'Agglomération de Montréal et relève de son règlement de protection des arbres — un permis est requis avant d\'abattre tout arbre dont le diamètre du tronc est de 10 cm ou plus sur une propriété privée. Notre équipe s\'occupe de la demande de permis et assure la conformité totale avec les réglementations municipales.',
        ],
        recentWork: [
          'Abattage d\'une rangée de frênes verts morts tués par l\'agrile du frêne le long du boulevard Gouin',
          'Démontage par sections d\'un érable argenté de 65 pieds dans une cour arrière restreinte à Roxboro avec accès limité',
          'Nettoyage après tempête près du Cap-Saint-Jacques suite à des vents forts venant de la rivière des Prairies',
        ],
        faqs: [
          { q: 'Ai-je besoin d\'un permis pour abattre un arbre à Pierrefonds?', a: 'Oui. En tant que partie de l\'Agglomération de Montréal, Pierrefonds exige un permis pour abattre tout arbre dont le diamètre du tronc est de 10 cm ou plus. Nous nous occupons de la demande de permis dans le cadre de notre service.' },
          { q: 'Mon frêne semble malade — est-ce l\'agrile du frêne?', a: 'Très probablement. Les frênes verts partout à Pierrefonds ont été durement touchés par l\'agrile du frêne. Les signes incluent une canopée clairsemée, des trous de sortie en forme de D et le fendillement de l\'écorce. Nous pouvons évaluer votre arbre et recommander un traitement ou l\'abattage.' },
          { q: 'Pouvez-vous abattre un arbre dans une cour arrière restreinte à Pierrefonds?', a: 'Oui. Beaucoup de terrains à Pierrefonds et Roxboro ont un accès limité, alors nous sommes spécialisés dans l\'abattage par sections — en démontant l\'arbre pièce par pièce avec du gréage pour protéger les maisons, les clôtures et les piscines.' },
        ],
      },
    },
  },
  {
    slug: 'sainte-anne-de-bellevue',
    name: 'Sainte-Anne-de-Bellevue',
    nearby: ["Baie-D'Urfé", 'Senneville', 'Île-Perrot'],
    postalCodes: ['H9X'],
    treeSpecies: ['Sugar Maple', 'Silver Maple', 'White Pine'],
    content: {
      en: {
        paragraphs: [
          'Sainte-Anne-de-Bellevue sits at the very western tip of the island, where Lac Saint-Louis meets Lac des Deux Montagnes. The village core around the boardwalk and Sainte-Anne Street is one of the oldest settled areas in the West Island, and its compact lots hold mature Sugar and Silver Maples growing tight against century homes, restaurants, and hydro lines.',
          'With McGill\'s Macdonald Campus and the Morgan Arboretum next door, Sainte-Anne residents know good tree care when they see it. The double lake exposure funnels strong wind through the village, and older maples over narrow lots usually have to come down in sections — our crew works regularly in these tight quarters with rigging and our spider lift.',
          'Sainte-Anne-de-Bellevue is part of the Agglomeration of Montreal, so a permit is required before removing any tree with a trunk diameter of 10 cm or more on private property. We prepare and file the permit application as part of every removal.',
        ],
        recentWork: [
          'Sectional removal of a large Silver Maple behind a restaurant near the Sainte-Anne boardwalk',
          'Preservation pruning on century-old Sugar Maples on a village-core property',
          'Storm cleanup after high winds funneled off Lac Saint-Louis through the village',
        ],
        faqs: [
          { q: 'Do I need a permit to remove a tree in Sainte-Anne-de-Bellevue?', a: 'Yes. As part of the Agglomeration of Montreal, a permit is required for any tree with a trunk diameter of 10 cm or more. We handle the application for you.' },
          { q: 'Can you work on the small village lots near the boardwalk?', a: 'Yes. Tight access is our specialty — we dismantle trees in sections using rigging and our compact tracked spider lift, which fits through a standard garden gate.' },
          { q: 'How quickly can you get to Sainte-Anne-de-Bellevue?', a: 'We\'re based just across the bridge in the Saint-Lazare/Vaudreuil area, so we can typically be on site within the hour for emergencies.' },
        ],
      },
      fr: {
        paragraphs: [
          'Sainte-Anne-de-Bellevue se trouve à la pointe ouest de l\'île, là où le lac Saint-Louis rejoint le lac des Deux Montagnes. Le cœur du village autour de la promenade et de la rue Sainte-Anne est l\'un des plus anciens secteurs habités de l\'Ouest de l\'Île, et ses terrains compacts abritent des érables à sucre et argentés matures qui poussent tout contre les maisons centenaires, les restaurants et les lignes électriques.',
          'Avec le campus Macdonald de McGill et l\'Arboretum Morgan à côté, les résidents de Sainte-Anne reconnaissent un bon travail arboricole. La double exposition aux lacs canalise des vents forts à travers le village, et les vieux érables au-dessus des terrains étroits doivent généralement être démontés par sections — notre équipe travaille régulièrement dans ces espaces restreints avec du gréage et notre nacelle araignée.',
          'Sainte-Anne-de-Bellevue fait partie de l\'Agglomération de Montréal : un permis est requis avant d\'abattre tout arbre dont le diamètre du tronc est de 10 cm ou plus sur une propriété privée. Nous préparons et déposons la demande de permis pour chaque abattage.',
        ],
        recentWork: [
          'Démontage par sections d\'un grand érable argenté derrière un restaurant près de la promenade de Sainte-Anne',
          'Élagage de préservation d\'érables à sucre centenaires sur une propriété du cœur du village',
          'Nettoyage après tempête suite à des vents violents canalisés du lac Saint-Louis à travers le village',
        ],
        faqs: [
          { q: 'Ai-je besoin d\'un permis pour abattre un arbre à Sainte-Anne-de-Bellevue?', a: 'Oui. En tant que partie de l\'Agglomération de Montréal, un permis est requis pour tout arbre dont le diamètre du tronc est de 10 cm ou plus. Nous nous occupons de la demande pour vous.' },
          { q: 'Pouvez-vous travailler sur les petits terrains du village près de la promenade?', a: 'Oui. L\'accès restreint est notre spécialité — nous démontons les arbres par sections avec du gréage et notre nacelle araignée compacte sur chenilles, qui passe par un portail de jardin standard.' },
          { q: 'En combien de temps pouvez-vous arriver à Sainte-Anne-de-Bellevue?', a: 'Nous sommes basés juste de l\'autre côté du pont, dans le secteur Saint-Lazare/Vaudreuil, donc nous pouvons généralement être sur place en moins d\'une heure pour les urgences.' },
        ],
      },
    },
  },
  {
    slug: 'ile-bizard',
    name: "L'Île-Bizard",
    nearby: ['Pierrefonds', 'Senneville', 'Dollard-des-Ormeaux'],
    postalCodes: ['H9C', 'H9E'],
    treeSpecies: ['Red Maple', 'Bur Oak', 'Eastern Cottonwood'],
    content: {
      en: {
        paragraphs: [
          'The borough of L\'Île-Bizard–Sainte-Geneviève combines large wooded estate lots, golf-course properties, and long stretches of natural shoreline along Lac des Deux Montagnes and the Rivière des Prairies. Mature Red Maples, Bur Oaks, and towering Eastern Cottonwoods define the island\'s canopy, with the Bois-de-l\'Île-Bizard nature park at its heart.',
          'The island\'s shoreline neighborhoods have lived through major spring flooding, and years of saturated soil have left many waterfront trees with weakened root systems. Leaning cottonwoods and willows near the water are the most common hazard we address here — early assessment prevents an uprooting into a house or seawall.',
          'L\'Île-Bizard–Sainte-Geneviève falls under the Agglomeration of Montreal\'s tree protection bylaw: a permit is required to remove any tree with a trunk diameter of 10 cm or more. We manage the permit process from application to approval, including for Sainte-Geneviève properties on the mainland side of the bridge.',
        ],
        recentWork: [
          'Removed a row of flood-stressed Eastern Cottonwoods leaning over a shoreline home near the nature park',
          'Preservation pruning and cabling on a heritage Bur Oak on a golf-course estate property',
          'Cleared storm-downed Red Maples blocking a private road in Sainte-Geneviève',
        ],
        faqs: [
          { q: 'Do I need a permit to remove a tree on L\'Île-Bizard?', a: 'Yes. The borough follows the Agglomeration of Montreal\'s bylaw — any tree 10 cm or more in trunk diameter requires a permit. We handle the full application for you.' },
          { q: 'My waterfront tree is leaning after the floods — is it dangerous?', a: 'Possibly. Years of saturated soil have weakened root plates along the island\'s shoreline. We assess lean, root heave, and soil condition, and recommend removal or cabling before it fails.' },
          { q: 'Do you serve Sainte-Geneviève too?', a: 'Yes. We cover the entire borough of L\'Île-Bizard–Sainte-Geneviève, both the island and the mainland side.' },
        ],
      },
      fr: {
        paragraphs: [
          'L\'arrondissement de L\'Île-Bizard–Sainte-Geneviève combine de grands terrains boisés, des propriétés en bordure de golf et de longues rives naturelles le long du lac des Deux Montagnes et de la rivière des Prairies. Les érables rouges, chênes à gros fruits et grands peupliers deltoïdes matures définissent la canopée de l\'île, avec le parc-nature du Bois-de-l\'Île-Bizard en son cœur.',
          'Les quartiers riverains de l\'île ont vécu des inondations printanières majeures, et des années de sols saturés ont affaibli le système racinaire de nombreux arbres au bord de l\'eau. Les peupliers et saules penchés près de l\'eau sont le danger le plus fréquent que nous traitons ici — une évaluation précoce évite un déracinement sur une maison ou un muret.',
          'L\'Île-Bizard–Sainte-Geneviève relève du règlement de protection des arbres de l\'Agglomération de Montréal : un permis est requis pour abattre tout arbre dont le diamètre du tronc est de 10 cm ou plus. Nous gérons le processus de permis de la demande à l\'approbation, y compris pour les propriétés de Sainte-Geneviève du côté continental du pont.',
        ],
        recentWork: [
          'Abattage d\'une rangée de peupliers deltoïdes affaiblis par les inondations penchant au-dessus d\'une maison riveraine près du parc-nature',
          'Élagage de préservation et haubanage d\'un chêne à gros fruits patrimonial sur une propriété en bordure de golf',
          'Dégagement d\'érables rouges tombés lors d\'une tempête bloquant un chemin privé à Sainte-Geneviève',
        ],
        faqs: [
          { q: 'Ai-je besoin d\'un permis pour abattre un arbre à L\'Île-Bizard?', a: 'Oui. L\'arrondissement suit le règlement de l\'Agglomération de Montréal — tout arbre de 10 cm ou plus de diamètre de tronc nécessite un permis. Nous gérons la demande complète pour vous.' },
          { q: 'Mon arbre au bord de l\'eau penche depuis les inondations — est-il dangereux?', a: 'Possiblement. Des années de sols saturés ont affaibli les plaques racinaires le long des rives de l\'île. Nous évaluons l\'inclinaison, le soulèvement racinaire et l\'état du sol, puis recommandons l\'abattage ou le haubanage avant la rupture.' },
          { q: 'Desservez-vous aussi Sainte-Geneviève?', a: 'Oui. Nous couvrons tout l\'arrondissement de L\'Île-Bizard–Sainte-Geneviève, l\'île comme le côté continental.' },
        ],
      },
    },
  },
  {
    slug: 'notre-dame-de-l-ile-perrot',
    name: "Notre-Dame-de-l'Île-Perrot",
    nearby: ['Île-Perrot', 'Pincourt', 'Terrasse-Vaudreuil'],
    postalCodes: ['J7V', 'J7W'],
    treeSpecies: ['Silver Maple', 'Black Walnut', 'Eastern White Cedar'],
    content: {
      en: {
        paragraphs: [
          'Notre-Dame-de-l\'Île-Perrot covers the southern and eastern half of Île-Perrot, from the Pointe-du-Moulin windmill park to long stretches of Lac Saint-Louis waterfront. Its semi-rural character means larger lots, old farm-line Silver Maples, Black Walnuts, and kilometres of cedar hedging between properties.',
          'The high water table and clay soil common across the island limit rooting depth, so wind coming off Lac Saint-Louis regularly topples shallow-rooted trees. We also handle many Black Walnut issues here — their juglone-producing roots kill surrounding gardens, and their heavy limbs need experienced rigging to remove safely.',
          'Notre-Dame-de-l\'Île-Perrot has its own tree bylaw, separate from neighbouring L\'Île-Perrot — removals generally require municipal authorization. We know both municipalities\' requirements and file the correct paperwork for your side of the island.',
        ],
        recentWork: [
          'Removed a massive farm-line Silver Maple threatening a barn conversion near Pointe-du-Moulin',
          'Took down a Black Walnut whose roots were killing a vegetable garden on a waterfront lot',
          'Trimmed 80 metres of mature cedar hedge along a property line off Boulevard Perrot',
        ],
        faqs: [
          { q: 'Is the permit process different from L\'Île-Perrot?', a: 'Yes. Notre-Dame-de-l\'Île-Perrot is a separate municipality with its own tree bylaw. We know both sets of requirements and handle the correct permit for your address.' },
          { q: 'Why do trees blow over so often on the island?', a: 'The island\'s high water table and clay soil keep roots shallow, while open lake exposure adds wind load. Crown reduction and preventive assessment greatly reduce the risk.' },
          { q: 'Do you maintain cedar hedges?', a: 'Yes. Cedar hedging is everywhere in Notre-Dame-de-l\'Île-Perrot and we trim, shape, and rehabilitate hedges of any length.' },
        ],
      },
      fr: {
        paragraphs: [
          'Notre-Dame-de-l\'Île-Perrot couvre la moitié sud et est de l\'Île-Perrot, du parc historique de la Pointe-du-Moulin jusqu\'aux longues rives du lac Saint-Louis. Son caractère semi-rural signifie de plus grands terrains, de vieux érables argentés en ligne de ferme, des noyers noirs et des kilomètres de haies de cèdres entre les propriétés.',
          'La nappe phréatique élevée et le sol argileux communs sur l\'île limitent la profondeur d\'enracinement, alors le vent du lac Saint-Louis renverse régulièrement les arbres à racines peu profondes. Nous traitons aussi beaucoup de problèmes de noyers noirs ici — leurs racines produisant de la juglone tuent les jardins environnants, et leurs lourdes branches exigent un gréage expérimenté pour un abattage sécuritaire.',
          'Notre-Dame-de-l\'Île-Perrot a son propre règlement sur les arbres, distinct de celui de L\'Île-Perrot voisine — les abattages nécessitent généralement une autorisation municipale. Nous connaissons les exigences des deux municipalités et déposons les bons documents selon votre côté de l\'île.',
        ],
        recentWork: [
          'Abattage d\'un immense érable argenté de ligne de ferme menaçant une grange convertie près de la Pointe-du-Moulin',
          'Abattage d\'un noyer noir dont les racines tuaient un potager sur un terrain riverain',
          'Taille de 80 mètres de haie de cèdres mature le long d\'une limite de propriété près du boulevard Perrot',
        ],
        faqs: [
          { q: 'Le processus de permis est-il différent de celui de L\'Île-Perrot?', a: 'Oui. Notre-Dame-de-l\'Île-Perrot est une municipalité distincte avec son propre règlement sur les arbres. Nous connaissons les deux ensembles d\'exigences et gérons le bon permis pour votre adresse.' },
          { q: 'Pourquoi les arbres tombent-ils si souvent sur l\'île?', a: 'La nappe phréatique élevée et le sol argileux gardent les racines peu profondes, tandis que l\'exposition au lac ajoute une charge de vent. La réduction de couronne et l\'évaluation préventive réduisent grandement le risque.' },
          { q: 'Entretenez-vous les haies de cèdres?', a: 'Oui. Les haies de cèdres sont partout à Notre-Dame-de-l\'Île-Perrot et nous taillons, façonnons et réhabilitons des haies de toute longueur.' },
        ],
      },
    },
  },
  {
    slug: 'terrasse-vaudreuil',
    name: 'Terrasse-Vaudreuil',
    nearby: ['Pincourt', 'Île-Perrot', 'Vaudreuil'],
    postalCodes: ['J7V'],
    treeSpecies: ['Silver Maple', 'Norway Maple', 'Blue Spruce'],
    content: {
      en: {
        paragraphs: [
          'Terrasse-Vaudreuil is a tight-knit community on the northwest corner of Île-Perrot, facing Vaudreuil across the bay. Its compact grid of streets was planted decades ago with Silver and Norway Maples that now tower over small lots — beautiful canopy, but trees this size sitting a few metres from homes, garages, and pools leave no room for error when work is needed.',
          'Nearly every removal in Terrasse-Vaudreuil is a sectional takedown: climbing or lift work, rigging each piece down into a small yard. Our compact spider lift was practically made for these lots — it fits through a gate, sets up on a driveway, and reaches over the house to the back tree.',
          'Wind exposure off Lac des Deux Montagnes adds storm stress, and aging Blue Spruce rows planted as privacy screens are declining across the community. The municipality generally requires authorization before tree removal — we confirm requirements and handle any paperwork for you.',
        ],
        recentWork: [
          'Sectional removal of a 60-foot Silver Maple wedged between a house and garage with 3 metres of clearance',
          'Removed a declining Blue Spruce privacy row and ground the stumps for a new fence line',
          'Cleared a storm-split Norway Maple limb resting on a roof after an autumn windstorm',
        ],
        faqs: [
          { q: 'Can you remove a big tree from a small Terrasse-Vaudreuil lot?', a: 'Yes — that\'s most of our work here. We dismantle trees in sections with rigging and our tracked spider lift, which fits through a standard gate and protects your lawn.' },
          { q: 'Do I need a permit in Terrasse-Vaudreuil?', a: 'Tree removal generally requires municipal authorization. We verify the current requirements for your property and take care of the paperwork.' },
          { q: 'My spruce hedge is turning brown — can it be saved?', a: 'Aging Blue Spruce screens are declining across the region due to needle cast fungus and age. We assess whether pruning and treatment can help or whether replacement is the better investment.' },
        ],
      },
      fr: {
        paragraphs: [
          'Terrasse-Vaudreuil est une communauté tissée serrée au coin nord-ouest de l\'Île-Perrot, face à Vaudreuil de l\'autre côté de la baie. Son quadrillage compact de rues a été planté il y a des décennies d\'érables argentés et de Norvège qui dominent maintenant les petits terrains — une belle canopée, mais des arbres de cette taille à quelques mètres des maisons, garages et piscines ne laissent aucune marge d\'erreur quand des travaux s\'imposent.',
          'Presque chaque abattage à Terrasse-Vaudreuil est un démontage par sections : travail en grimpe ou en nacelle, chaque pièce descendue au gréage dans une petite cour. Notre nacelle araignée compacte est pratiquement faite pour ces terrains — elle passe par un portail, s\'installe dans l\'entrée et atteint l\'arbre de la cour arrière par-dessus la maison.',
          'L\'exposition au vent du lac des Deux Montagnes ajoute du stress lors des tempêtes, et les rangées d\'épinettes bleues vieillissantes plantées comme écrans d\'intimité déclinent partout dans la communauté. La municipalité exige généralement une autorisation avant l\'abattage — nous confirmons les exigences et gérons la paperasse pour vous.',
        ],
        recentWork: [
          'Démontage par sections d\'un érable argenté de 60 pieds coincé entre une maison et un garage avec 3 mètres de dégagement',
          'Enlèvement d\'une rangée d\'épinettes bleues en déclin et essouchage pour une nouvelle ligne de clôture',
          'Dégagement d\'une branche d\'érable de Norvège fendue par la tempête reposant sur un toit',
        ],
        faqs: [
          { q: 'Pouvez-vous enlever un gros arbre d\'un petit terrain à Terrasse-Vaudreuil?', a: 'Oui — c\'est l\'essentiel de notre travail ici. Nous démontons les arbres par sections avec du gréage et notre nacelle araignée sur chenilles, qui passe par un portail standard et protège votre pelouse.' },
          { q: 'Ai-je besoin d\'un permis à Terrasse-Vaudreuil?', a: 'L\'abattage d\'arbres nécessite généralement une autorisation municipale. Nous vérifions les exigences en vigueur pour votre propriété et nous occupons de la paperasse.' },
          { q: 'Ma haie d\'épinettes brunit — peut-elle être sauvée?', a: 'Les écrans d\'épinettes bleues vieillissants déclinent dans toute la région à cause de champignons et de l\'âge. Nous évaluons si l\'élagage et un traitement peuvent aider ou si le remplacement est le meilleur investissement.' },
        ],
      },
    },
  },
  {
    slug: 'rigaud',
    name: 'Rigaud',
    nearby: ['Hudson', 'Saint-Lazare', 'Vaudreuil'],
    postalCodes: ['J0P'],
    treeSpecies: ['Sugar Maple', 'American Beech', 'Eastern Hemlock'],
    content: {
      en: {
        paragraphs: [
          'Rigaud is defined by its mountain — Mont Rigaud\'s forested slopes hold some of the region\'s finest Sugar Maple and American Beech stands, along with dark Hemlock ravines. Properties here range from village lots to mountainside estates, cottages, and working sugar bushes, and much of our Rigaud work happens on terrain that flat-land tree companies simply can\'t handle.',
          'Steep slopes, limited machine access, and big hardwoods mean Rigaud removals often call for advanced rigging, winching, and careful drop-zone planning. Ice storms hit the mountain hard — freezing rain loads the canopy and brings down major limbs across driveways and hydro lines nearly every winter.',
          'Rigaud is protective of its forested character, and removals generally require municipal authorization — particularly near the mountain and in wooded zones. We confirm the requirements for your property and manage the process, and we can advise sugar bush owners on stand health and hazard-tree management.',
        ],
        recentWork: [
          'Winched out a storm-felled Sugar Maple across a steep private road on Mont Rigaud',
          'Removed hazardous Hemlocks overhanging a cottage on a ravine lot',
          'Deadwooded a mature sugar bush stand ahead of tapping season',
        ],
        faqs: [
          { q: 'Can you work on steep mountain lots in Rigaud?', a: 'Yes. Slope work is a specialty — we use advanced rigging, winching, and careful planning where equipment can\'t drive. Many of our Rigaud jobs are on terrain other companies decline.' },
          { q: 'Do I need a permit to cut trees in Rigaud?', a: 'Removals generally require municipal authorization, especially in wooded zones near the mountain. We verify what applies to your property and handle the paperwork.' },
          { q: 'Do you work in sugar bushes?', a: 'Yes. We deadwood, thin, and remove hazard trees in working sugar bushes, timed around tapping season to protect your production.' },
        ],
      },
      fr: {
        paragraphs: [
          'Rigaud est définie par sa montagne — les pentes boisées du mont Rigaud abritent certains des plus beaux peuplements d\'érables à sucre et de hêtres de la région, ainsi que de sombres ravins de pruches. Les propriétés vont des terrains de village aux domaines à flanc de montagne, chalets et érablières en exploitation, et une grande partie de notre travail à Rigaud se fait sur un terrain que les entreprises de plaine ne peuvent tout simplement pas gérer.',
          'Pentes raides, accès machine limité et gros feuillus : les abattages à Rigaud exigent souvent du gréage avancé, du treuillage et une planification minutieuse des zones de chute. Les tempêtes de verglas frappent durement la montagne — la pluie verglaçante charge la canopée et fait tomber des branches majeures sur les entrées et les lignes électriques presque chaque hiver.',
          'Rigaud protège son caractère forestier, et les abattages nécessitent généralement une autorisation municipale — particulièrement près de la montagne et dans les zones boisées. Nous confirmons les exigences pour votre propriété et gérons le processus, et nous pouvons conseiller les propriétaires d\'érablières sur la santé des peuplements et la gestion des arbres dangereux.',
        ],
        recentWork: [
          'Treuillage d\'un érable à sucre abattu par la tempête en travers d\'un chemin privé escarpé du mont Rigaud',
          'Abattage de pruches dangereuses surplombant un chalet sur un terrain en ravin',
          'Enlèvement du bois mort d\'une érablière mature avant la saison des entailles',
        ],
        faqs: [
          { q: 'Pouvez-vous travailler sur les terrains escarpés de la montagne à Rigaud?', a: 'Oui. Le travail en pente est une spécialité — nous utilisons du gréage avancé, du treuillage et une planification minutieuse là où l\'équipement ne peut pas rouler. Plusieurs de nos contrats à Rigaud sont sur des terrains que d\'autres refusent.' },
          { q: 'Ai-je besoin d\'un permis pour couper des arbres à Rigaud?', a: 'Les abattages nécessitent généralement une autorisation municipale, surtout dans les zones boisées près de la montagne. Nous vérifions ce qui s\'applique à votre propriété et gérons la paperasse.' },
          { q: 'Travaillez-vous dans les érablières?', a: 'Oui. Nous enlevons le bois mort, éclaircissons et abattons les arbres dangereux dans les érablières en exploitation, en planifiant autour de la saison des entailles pour protéger votre production.' },
        ],
      },
    },
  },
  {
    slug: 'les-cedres',
    name: 'Les Cèdres',
    nearby: ['Coteau-du-Lac', 'Pointe-des-Cascades', 'Saint-Lazare'],
    postalCodes: ['J7T'],
    treeSpecies: ['Eastern White Cedar', 'Silver Maple', 'Weeping Willow'],
    content: {
      en: {
        paragraphs: [
          'True to its name, Les Cèdres is cedar country — hedges, windbreaks, and natural stands of Eastern White Cedar line properties from the St. Lawrence waterfront up through the farmland. The town blends century farmhouses shaded by giant Silver Maples with fast-growing new residential neighbourhoods.',
          'Along the old Soulanges Canal and the river, Weeping Willows and Silver Maples grow huge in the wet soil — and drop equally huge limbs when storms roll up the St. Lawrence. Farm properties bring their own work: aging windbreak rows that need renewal, and massive yard trees planted generations ago now overhanging houses and equipment sheds.',
          'Tree removal in Les Cèdres generally requires municipal authorization. We confirm the current bylaw requirements for your property, handle the paperwork, and provide certified-arborist documentation when the town requests it.',
        ],
        recentWork: [
          'Removed a century-old Silver Maple overhanging a farmhouse roof on a Chemin Saint-Féréol property',
          'Renewed 100 metres of aging cedar windbreak on a working farm',
          'Crown-reduced a huge Weeping Willow dropping limbs near the old canal',
        ],
        faqs: [
          { q: 'Do you maintain cedar hedges and windbreaks in Les Cèdres?', a: 'Constantly — it\'s the town\'s signature tree. We trim, rehabilitate, and replace cedar hedging and farm windbreaks of any length.' },
          { q: 'Do I need a permit to remove a tree in Les Cèdres?', a: 'Removals generally require municipal authorization. We verify the current requirements and handle the process for you.' },
          { q: 'Can you handle large farm trees?', a: 'Yes. Century farmhouse maples and willows are among the biggest trees we work on — we have the rigging, lift equipment, and experience to take them down safely around buildings.' },
        ],
      },
      fr: {
        paragraphs: [
          'Fidèle à son nom, Les Cèdres est le pays du cèdre — haies, brise-vent et peuplements naturels de thuyas bordent les propriétés du bord du Saint-Laurent jusqu\'aux terres agricoles. La ville mélange des fermes centenaires ombragées par des érables argentés géants et de nouveaux quartiers résidentiels en pleine croissance.',
          'Le long de l\'ancien canal de Soulanges et du fleuve, les saules pleureurs et érables argentés deviennent énormes dans le sol humide — et laissent tomber des branches tout aussi énormes quand les tempêtes remontent le Saint-Laurent. Les propriétés agricoles apportent leur propre travail : des rangées de brise-vent vieillissantes à renouveler, et des arbres de cour massifs plantés il y a des générations qui surplombent maintenant les maisons et les hangars.',
          'L\'abattage d\'arbres aux Cèdres nécessite généralement une autorisation municipale. Nous confirmons les exigences du règlement en vigueur pour votre propriété, gérons la paperasse et fournissons la documentation d\'arboriculteur certifié lorsque la ville la demande.',
        ],
        recentWork: [
          'Abattage d\'un érable argenté centenaire surplombant le toit d\'une ferme sur le chemin Saint-Féréol',
          'Renouvellement de 100 mètres de brise-vent de cèdres vieillissant sur une ferme en exploitation',
          'Réduction de couronne d\'un immense saule pleureur perdant des branches près de l\'ancien canal',
        ],
        faqs: [
          { q: 'Entretenez-vous les haies de cèdres et brise-vent aux Cèdres?', a: 'Constamment — c\'est l\'arbre signature de la ville. Nous taillons, réhabilitons et remplaçons les haies de cèdres et brise-vent agricoles de toute longueur.' },
          { q: 'Ai-je besoin d\'un permis pour abattre un arbre aux Cèdres?', a: 'Les abattages nécessitent généralement une autorisation municipale. Nous vérifions les exigences en vigueur et gérons le processus pour vous.' },
          { q: 'Pouvez-vous gérer les grands arbres de ferme?', a: 'Oui. Les érables et saules centenaires des fermes comptent parmi les plus gros arbres sur lesquels nous travaillons — nous avons le gréage, la nacelle et l\'expérience pour les abattre en sécurité autour des bâtiments.' },
        ],
      },
    },
  },
  {
    slug: 'coteau-du-lac',
    name: 'Coteau-du-Lac',
    nearby: ['Les Cèdres', 'Saint-Clet', 'Pointe-des-Cascades'],
    postalCodes: ['J0P'],
    treeSpecies: ['Silver Maple', 'Basswood', 'White Spruce'],
    content: {
      en: {
        paragraphs: [
          'Coteau-du-Lac stretches along the St. Lawrence where the river narrows into historic rapids — the same waters that made it a fortified trade point centuries ago. Today it\'s one of Vaudreuil-Soulanges\' fastest-growing towns, with new subdivisions rising beside riverfront properties shaded by big Silver Maples and Basswoods.',
          'Riverfront lots here deal with bank erosion and exposed roots as the St. Lawrence works at the shoreline — leaning waterfront maples are a recurring hazard we assess and remove. In the newer neighbourhoods, fast-planted White Spruce rows are maturing into overcrowded screens that need thinning or replacement.',
          'Tree removal in Coteau-du-Lac generally requires municipal authorization, with particular care near the waterfront and the historic sector. We verify your property\'s requirements and manage the permit process end to end.',
        ],
        recentWork: [
          'Removed a leaning Silver Maple with eroded, exposed roots on a St. Lawrence waterfront lot',
          'Thinned an overcrowded White Spruce screen between two new subdivision properties',
          'Pruned mature Basswoods shading a property near the historic canal site',
        ],
        faqs: [
          { q: 'My riverfront tree is leaning — what should I do?', a: 'Bank erosion along the St. Lawrence exposes roots and destabilizes waterfront trees. Have it assessed promptly — we determine whether stabilization or removal is the safe call.' },
          { q: 'Do I need a permit in Coteau-du-Lac?', a: 'Removals generally require municipal authorization, especially near the water and the historic sector. We confirm the requirements and handle the paperwork.' },
          { q: 'How fast can you get to Coteau-du-Lac?', a: 'We\'re based in the Saint-Lazare/Vaudreuil area, about 15 minutes away — same-week assessments are the norm and emergency response is available 24/7.' },
        ],
      },
      fr: {
        paragraphs: [
          'Coteau-du-Lac s\'étend le long du Saint-Laurent là où le fleuve se resserre en rapides historiques — les mêmes eaux qui en ont fait un poste de traite fortifié il y a des siècles. C\'est aujourd\'hui l\'une des villes de Vaudreuil-Soulanges qui croît le plus vite, avec de nouveaux lotissements qui s\'élèvent à côté de propriétés riveraines ombragées par de grands érables argentés et tilleuls.',
          'Les terrains riverains composent ici avec l\'érosion des berges et les racines exposées à mesure que le Saint-Laurent gruge la rive — les érables riverains penchés sont un danger récurrent que nous évaluons et enlevons. Dans les quartiers plus récents, les rangées d\'épinettes blanches plantées rapidement deviennent des écrans surpeuplés à éclaircir ou remplacer.',
          'L\'abattage d\'arbres à Coteau-du-Lac nécessite généralement une autorisation municipale, avec une attention particulière près du bord de l\'eau et du secteur historique. Nous vérifions les exigences de votre propriété et gérons le processus de permis de bout en bout.',
        ],
        recentWork: [
          'Abattage d\'un érable argenté penché aux racines érodées et exposées sur un terrain riverain du Saint-Laurent',
          'Éclaircissage d\'un écran d\'épinettes blanches surpeuplé entre deux propriétés d\'un nouveau lotissement',
          'Élagage de tilleuls matures ombrageant une propriété près du lieu historique du canal',
        ],
        faqs: [
          { q: 'Mon arbre riverain penche — que faire?', a: 'L\'érosion des berges le long du Saint-Laurent expose les racines et déstabilise les arbres riverains. Faites-le évaluer rapidement — nous déterminons si la stabilisation ou l\'abattage est le choix sécuritaire.' },
          { q: 'Ai-je besoin d\'un permis à Coteau-du-Lac?', a: 'Les abattages nécessitent généralement une autorisation municipale, surtout près de l\'eau et du secteur historique. Nous confirmons les exigences et gérons la paperasse.' },
          { q: 'En combien de temps pouvez-vous arriver à Coteau-du-Lac?', a: 'Nous sommes basés dans le secteur Saint-Lazare/Vaudreuil, à environ 15 minutes — les évaluations dans la semaine sont la norme et l\'intervention d\'urgence est disponible 24/7.' },
        ],
      },
    },
  },
  {
    slug: 'pointe-des-cascades',
    name: 'Pointe-des-Cascades',
    nearby: ['Les Cèdres', 'Île-Perrot', 'Vaudreuil'],
    postalCodes: ['J0P'],
    treeSpecies: ['Eastern Cottonwood', 'Weeping Willow', 'Manitoba Maple'],
    content: {
      en: {
        paragraphs: [
          'Pointe-des-Cascades sits on the exposed point where the Ottawa River meets the St. Lawrence — a beautiful, windy place to be a tree. The village\'s fast-growing Cottonwoods, Willows, and Manitoba Maples thrived in the wet soil for decades, but these soft-wooded species are now aging into the most storm-vulnerable canopy in the region.',
          'Wind gets a running start across two rivers before it hits the point, and village streets are narrow with homes close together — when a 70-foot Cottonwood sheds a limb here, it usually lands on something. Preventive crown reduction and timely removal of declining soft-wood trees is most of what we do in Pointe-des-Cascades.',
          'The village generally requires authorization before removing trees. We confirm requirements with the municipality and handle the process — and being based minutes away, we\'re often the first crew on scene after a storm.',
        ],
        recentWork: [
          'Emergency removal of a Cottonwood limb that dropped onto a village street after a windstorm',
          'Crown reduction on a large Weeping Willow near the Parc des Ancres',
          'Removed a multi-trunk Manitoba Maple splitting apart beside a home',
        ],
        faqs: [
          { q: 'Why do trees break so often in Pointe-des-Cascades?', a: 'The village canopy is dominated by fast-growing, soft-wooded species — Cottonwood, Willow, Manitoba Maple — on one of the windiest points in the region. Aging soft wood plus wind exposure means frequent limb failures. Preventive reduction helps greatly.' },
          { q: 'Do I need a permit to remove a tree in the village?', a: 'Generally yes — we confirm the current requirements with the municipality and take care of the paperwork for you.' },
          { q: 'How quickly can you respond after a storm?', a: 'We\'re based minutes away in the Saint-Lazare/Vaudreuil area and offer 24/7 emergency response — Pointe-des-Cascades is one of our fastest response zones.' },
        ],
      },
      fr: {
        paragraphs: [
          'Pointe-des-Cascades se trouve sur la pointe exposée où la rivière des Outaouais rejoint le Saint-Laurent — un endroit magnifique mais venteux pour un arbre. Les peupliers, saules et érables à Giguère à croissance rapide du village ont prospéré dans le sol humide pendant des décennies, mais ces espèces au bois tendre vieillissent maintenant en la canopée la plus vulnérable aux tempêtes de la région.',
          'Le vent prend son élan sur deux rivières avant de frapper la pointe, et les rues du village sont étroites avec des maisons rapprochées — quand un peuplier de 70 pieds perd une branche ici, elle atterrit généralement sur quelque chose. La réduction préventive de couronne et l\'abattage opportun des arbres à bois tendre en déclin représentent l\'essentiel de notre travail à Pointe-des-Cascades.',
          'Le village exige généralement une autorisation avant d\'abattre des arbres. Nous confirmons les exigences auprès de la municipalité et gérons le processus — et étant basés à quelques minutes, nous sommes souvent la première équipe sur place après une tempête.',
        ],
        recentWork: [
          'Enlèvement d\'urgence d\'une branche de peuplier tombée sur une rue du village après une tempête de vent',
          'Réduction de couronne d\'un grand saule pleureur près du parc des Ancres',
          'Abattage d\'un érable à Giguère à troncs multiples qui se fendait à côté d\'une maison',
        ],
        faqs: [
          { q: 'Pourquoi les arbres cassent-ils si souvent à Pointe-des-Cascades?', a: 'La canopée du village est dominée par des espèces à croissance rapide et à bois tendre — peuplier, saule, érable à Giguère — sur l\'une des pointes les plus venteuses de la région. Bois tendre vieillissant plus exposition au vent égale ruptures fréquentes. La réduction préventive aide grandement.' },
          { q: 'Ai-je besoin d\'un permis pour abattre un arbre dans le village?', a: 'Généralement oui — nous confirmons les exigences en vigueur auprès de la municipalité et nous occupons de la paperasse pour vous.' },
          { q: 'En combien de temps intervenez-vous après une tempête?', a: 'Nous sommes basés à quelques minutes dans le secteur Saint-Lazare/Vaudreuil et offrons une intervention d\'urgence 24/7 — Pointe-des-Cascades est l\'une de nos zones d\'intervention les plus rapides.' },
        ],
      },
    },
  },
  {
    slug: 'saint-clet',
    name: 'Saint-Clet',
    nearby: ['Saint-Lazare', 'Les Cèdres', 'Coteau-du-Lac'],
    postalCodes: ['J0P'],
    treeSpecies: ['Silver Maple', 'White Spruce', 'Trembling Aspen'],
    content: {
      en: {
        paragraphs: [
          'Saint-Clet is open farm country — flat, fertile fields with full wind exposure in every direction. Trees here work for a living: spruce windbreak rows shelter farmhouses and fields, massive Silver Maples shade century farmyards, and Aspen lines follow the drainage ditches between properties.',
          'That wind exposure is exactly why Saint-Clet properties need serious tree care. Windbreak rows planted 50+ years ago are losing trees to age and storms, leaving gaps that funnel wind at buildings. Farmyard giants that stood for a century eventually decline, and when they overhang a house, barn, or grain equipment, removal is precision work.',
          'We work with Saint-Clet\'s farm owners on multi-tree projects — windbreak renewal, farmyard hazard removals, and ditch-line cleanup — and confirm any municipal authorization requirements before cutting.',
        ],
        recentWork: [
          'Removed a declining century Silver Maple overhanging a farmhouse and replaced it with a young Bur Oak',
          'Rebuilt a 60-metre section of storm-damaged White Spruce windbreak',
          'Cleared a line of storm-snapped Trembling Aspens along a drainage ditch',
        ],
        faqs: [
          { q: 'Can you renew an old farm windbreak?', a: 'Yes. We remove dead and failing trees, grind stumps, and replant hardy species in staged sections so your farmstead keeps its wind protection throughout the renewal.' },
          { q: 'Do you handle very large farmyard trees?', a: 'Yes. Century farm maples are among the largest trees in the region — we take them down in sections with rigging and lift equipment, protecting buildings and machinery.' },
          { q: 'Do I need a permit to cut trees in Saint-Clet?', a: 'Requirements vary by location and tree type — we confirm with the municipality before any work and handle whatever authorization is needed.' },
        ],
      },
      fr: {
        paragraphs: [
          'Saint-Clet, c\'est la campagne agricole ouverte — des champs plats et fertiles avec une exposition au vent dans toutes les directions. Ici, les arbres travaillent pour gagner leur vie : les rangées de brise-vent d\'épinettes abritent les fermes et les champs, des érables argentés massifs ombragent les cours de ferme centenaires, et les lignes de peupliers faux-trembles suivent les fossés de drainage entre les propriétés.',
          'Cette exposition au vent est exactement la raison pour laquelle les propriétés de Saint-Clet ont besoin de soins arboricoles sérieux. Les brise-vent plantés il y a plus de 50 ans perdent des arbres à cause de l\'âge et des tempêtes, laissant des trous qui canalisent le vent vers les bâtiments. Les géants de cour de ferme finissent par décliner, et quand ils surplombent une maison, une grange ou de l\'équipement, l\'abattage est un travail de précision.',
          'Nous travaillons avec les propriétaires agricoles de Saint-Clet sur des projets multi-arbres — renouvellement de brise-vent, abattages de sécurité en cour de ferme et nettoyage de lignes de fossés — et confirmons toute exigence d\'autorisation municipale avant de couper.',
        ],
        recentWork: [
          'Abattage d\'un érable argenté centenaire en déclin surplombant une ferme, remplacé par un jeune chêne à gros fruits',
          'Reconstruction d\'une section de 60 mètres de brise-vent d\'épinettes blanches endommagé par la tempête',
          'Dégagement d\'une ligne de peupliers faux-trembles cassés par la tempête le long d\'un fossé de drainage',
        ],
        faqs: [
          { q: 'Pouvez-vous renouveler un vieux brise-vent de ferme?', a: 'Oui. Nous enlevons les arbres morts et défaillants, essouchons et replantons des espèces rustiques par sections échelonnées pour que votre ferme garde sa protection contre le vent pendant tout le renouvellement.' },
          { q: 'Gérez-vous les très grands arbres de cour de ferme?', a: 'Oui. Les érables de ferme centenaires comptent parmi les plus grands arbres de la région — nous les démontons par sections avec du gréage et de l\'équipement de levage, en protégeant les bâtiments et la machinerie.' },
          { q: 'Ai-je besoin d\'un permis pour couper des arbres à Saint-Clet?', a: 'Les exigences varient selon l\'emplacement et le type d\'arbre — nous confirmons auprès de la municipalité avant tout travail et gérons toute autorisation nécessaire.' },
        ],
      },
    },
  },
  {
    slug: 'lachine',
    name: 'Lachine',
    nearby: ['Dorval', 'Pointe-Claire', 'Dollard-des-Ormeaux'],
    postalCodes: ['H8S', 'H8T'],
    treeSpecies: ['Norway Maple', 'Silver Maple', 'Green Ash'],
    content: {
      en: {
        paragraphs: [
          'Lachine\'s dense residential streets and waterfront parks hold one of the oldest urban canopies on the island. Norway and Silver Maples planted along its grid decades ago now arch completely over streets and duplexes, while the borough\'s Green Ash population has been devastated by the Emerald Ash Borer.',
          'Working in Lachine means working tight: back alleys, shared driveways, duplex courtyards, and trees wedged between buildings and fences. Sectional dismantling with rigging is standard here, and our compact spider lift reaches over buildings where a bucket truck can\'t park.',
          'Lachine is a borough of Montreal, so the agglomeration\'s tree bylaw applies — a permit is required to remove any tree with a trunk diameter of 10 cm or more. We handle the application and the borough\'s follow-up requirements as part of our service.',
        ],
        recentWork: [
          'Removed 6 dead Green Ash trees killed by Emerald Ash Borer on a residential street near the canal',
          'Alley-access sectional removal of a Silver Maple between two duplexes',
          'Pruned mature Norway Maples overhanging a waterfront property near the Lachine Canal',
        ],
        faqs: [
          { q: 'Do I need a permit to remove a tree in Lachine?', a: 'Yes. As a Montreal borough, Lachine requires a permit for any tree with a trunk diameter of 10 cm or more. We manage the full application for you.' },
          { q: 'Can you access a tree behind my duplex?', a: 'Yes. Alley and courtyard access is routine for us in Lachine — we dismantle trees in sections and our tracked spider lift fits through narrow gates and passages.' },
          { q: 'My Ash tree is dying — is that the Emerald Ash Borer?', a: 'Almost certainly. EAB has killed most untreated Ash in Lachine. Dead Ash becomes brittle and dangerous fast — have it assessed and removed before limbs start dropping.' },
        ],
      },
      fr: {
        paragraphs: [
          'Les rues résidentielles denses de Lachine et ses parcs riverains abritent l\'une des plus vieilles canopées urbaines de l\'île. Les érables de Norvège et argentés plantés le long de son quadrillage il y a des décennies forment maintenant des arches complètes au-dessus des rues et des duplex, tandis que la population de frênes verts de l\'arrondissement a été dévastée par l\'agrile du frêne.',
          'Travailler à Lachine, c\'est travailler serré : ruelles, entrées partagées, cours de duplex et arbres coincés entre bâtiments et clôtures. Le démontage par sections avec gréage est la norme ici, et notre nacelle araignée compacte atteint par-dessus les bâtiments là où un camion-nacelle ne peut pas se stationner.',
          'Lachine est un arrondissement de Montréal, donc le règlement sur les arbres de l\'agglomération s\'applique — un permis est requis pour abattre tout arbre dont le diamètre du tronc est de 10 cm ou plus. Nous gérons la demande et les exigences de suivi de l\'arrondissement dans le cadre de notre service.',
        ],
        recentWork: [
          'Abattage de 6 frênes verts morts tués par l\'agrile du frêne sur une rue résidentielle près du canal',
          'Démontage par sections avec accès par ruelle d\'un érable argenté entre deux duplex',
          'Élagage d\'érables de Norvège matures surplombant une propriété riveraine près du canal de Lachine',
        ],
        faqs: [
          { q: 'Ai-je besoin d\'un permis pour abattre un arbre à Lachine?', a: 'Oui. En tant qu\'arrondissement de Montréal, Lachine exige un permis pour tout arbre dont le diamètre du tronc est de 10 cm ou plus. Nous gérons la demande complète pour vous.' },
          { q: 'Pouvez-vous accéder à un arbre derrière mon duplex?', a: 'Oui. L\'accès par ruelle et cour intérieure est routinier pour nous à Lachine — nous démontons les arbres par sections et notre nacelle araignée sur chenilles passe par les portails et passages étroits.' },
          { q: 'Mon frêne dépérit — est-ce l\'agrile du frêne?', a: 'Presque certainement. L\'agrile a tué la plupart des frênes non traités à Lachine. Un frêne mort devient cassant et dangereux rapidement — faites-le évaluer et abattre avant que les branches ne tombent.' },
        ],
      },
    },
  },
];

// Per-city SEO overrides — unique <title> and meta description per location so
// city pages don't read as one duplicated template. Each leads with the city's
// real signature issue (species, pest, terrain, bylaw). [city].tsx falls back
// to the generic locationTemplate strings for any slug not listed here.
interface CitySeoCopy { title: string; description: string; }
export const citySeo: Record<string, { en: CitySeoCopy; fr: CitySeoCopy }> = {
  'pointe-claire': {
    en: { title: 'Tree Removal & Pruning in Pointe-Claire | Brandse', description: 'Certified arborists in Pointe-Claire — tree removal, pruning & stump grinding for mature lakeshore maples and Emerald Ash Borer trees. Free on-site quote.' },
    fr: { title: "Abattage et élagage d'arbres à Pointe-Claire | Brandse", description: "Arboriculteurs certifiés à Pointe-Claire — abattage, élagage et essouchage pour les érables matures et les frênes touchés par l'agrile. Estimation gratuite." },
  },
  'hudson': {
    en: { title: 'Tree Service in Hudson | Estate & Wooded-Lot Specialists', description: "Tree removal, crane work & pruning on Hudson's large wooded lots and waterfront. Certified arborists who know Hudson's strict tree bylaw. Free quote." },
    fr: { title: "Service d'arbres à Hudson | Spécialistes des grands terrains", description: "Abattage, travail à la grue et élagage sur les grands terrains boisés de Hudson. Arboriculteurs certifiés connaissant le règlement strict de Hudson." },
  },
  'beaconsfield': {
    en: { title: 'Tree Removal in Beaconsfield | Ash Borer & Permit Experts', description: 'Beaconsfield tree removal, pruning & stump grinding. We handle Emerald Ash Borer removals and full permit applications. Licensed, insured, free quote.' },
    fr: { title: "Abattage d'arbres à Beaconsfield | Agrile et permis", description: "Abattage, élagage et essouchage à Beaconsfield. Nous gérons les frênes touchés par l'agrile et les demandes de permis. Licencié et assuré. Estimation gratuite." },
  },
  'saint-lazare': {
    en: { title: 'Tree Service in Saint-Lazare | Wooded & Equestrian Lots', description: "Tree removal and storm cleanup on Saint-Lazare's wooded and equestrian properties. Experts in sandy-soil windthrow and permit handling. Free quote." },
    fr: { title: "Service d'arbres à Saint-Lazare | Terrains boisés", description: "Abattage et nettoyage après tempête sur les propriétés boisées et équestres de Saint-Lazare. Experts du sol sablonneux et des permis. Estimation gratuite." },
  },
  'vaudreuil': {
    en: { title: 'Tree Removal in Vaudreuil-Dorion | Lot Clearing & Elms', description: 'Vaudreuil-Dorion tree removal, Dutch Elm Disease treatment & lot clearing for new builds. Certified arborists, permit handling included. Free quote.' },
    fr: { title: "Abattage d'arbres à Vaudreuil-Dorion | Déboisement", description: "Abattage, traitement de la maladie hollandaise de l'orme et déboisement à Vaudreuil-Dorion. Arboriculteurs certifiés, permis inclus. Estimation gratuite." },
  },
  'kirkland': {
    en: { title: 'Tree Removal in Kirkland | Emerald Ash Borer Specialists', description: 'Kirkland tree removal & pruning for aging Sugar Maples and Ash Borer-killed trees. We manage Environmental Committee permits. Free on-site quote.' },
    fr: { title: "Abattage d'arbres à Kirkland | Agrile du frêne", description: "Abattage et élagage à Kirkland pour les érables vieillissants et les frênes tués par l'agrile. Nous gérons les permis du comité. Estimation gratuite." },
  },
  'dollard-des-ormeaux': {
    en: { title: 'Tree Removal in DDO (Dollard-des-Ormeaux) | Brandse', description: 'Dollard-des-Ormeaux tree removal & pruning — specialists in brittle Manitoba Maples and Montreal agglomeration permits. Licensed, insured. Free quote.' },
    fr: { title: "Abattage d'arbres à Dollard-des-Ormeaux (DDO) | Brandse", description: "Abattage et élagage à Dollard-des-Ormeaux — spécialistes des érables à Giguère cassants et des permis de l'agglomération. Licencié. Estimation gratuite." },
  },
  'dorval': {
    en: { title: 'Tree Removal in Dorval | Tight-Access & Rigging Experts', description: 'Dorval tree removal on compact lots using precise sectional rigging over pools and garages. Certified arborists, permit handling. Free quote.' },
    fr: { title: "Abattage d'arbres à Dorval | Accès restreint et gréage", description: "Abattage à Dorval sur terrains compacts avec gréage précis au-dessus des piscines et garages. Arboriculteurs certifiés, permis. Estimation gratuite." },
  },
  'senneville': {
    en: { title: 'Tree Service in Senneville | Estate & Heritage Trees', description: "Senneville tree care for century-old estate oaks and pines — crane-assisted removals and preservation pruning. Experts in Senneville's strict bylaw." },
    fr: { title: "Service d'arbres à Senneville | Arbres patrimoniaux", description: "Soins d'arbres à Senneville pour les chênes et pins centenaires — abattage à la grue et élagage de préservation. Experts du règlement strict de Senneville." },
  },
  'baie-d-urfe': {
    en: { title: "Tree Service in Baie-D'Urfé | Hemlock & Oak Care", description: "Baie-D'Urfé tree removal, pruning & Hemlock Woolly Adelgid treatment on wooded lakeshore lots. Certified arborists, permit documentation. Free quote." },
    fr: { title: "Service d'arbres à Baie-D'Urfé | Pruches et chênes", description: "Abattage, élagage et traitement du puceron lanigère à Baie-D'Urfé sur les terrains boisés. Arboriculteurs certifiés, documentation de permis fournie." },
  },
  'ile-perrot': {
    en: { title: 'Tree Removal on Île-Perrot | Windthrow & Walnut Experts', description: 'Île-Perrot tree removal & crown reduction — specialists in windthrow on high water-table soil and Black Walnut removals. Permit handling. Free quote.' },
    fr: { title: "Abattage d'arbres à l'Île-Perrot | Renversement et noyers", description: "Abattage et réduction de couronne à l'Île-Perrot — experts du renversement sur sol humide et des noyers noirs. Gestion des permis. Estimation gratuite." },
  },
  'pincourt': {
    en: { title: 'Tree Removal in Pincourt | Lombardy Poplar Specialists', description: 'Pincourt tree removal & pruning — specialists in hazardous aging Lombardy Poplars and waterfront wind exposure. Permit handling included. Free quote.' },
    fr: { title: "Abattage d'arbres à Pincourt | Peupliers de Lombardie", description: "Abattage et élagage à Pincourt — spécialistes des peupliers de Lombardie vieillissants et de l'exposition au vent. Permis inclus. Estimation gratuite." },
  },
  'pierrefonds': {
    en: { title: 'Tree Removal in Pierrefonds-Roxboro | Spider Lift Access', description: 'Pierrefonds tree removal, Ash Borer takedowns & hard-to-reach work with our CELA DT25 spider lift. Montreal agglomeration permits handled. Free quote.' },
    fr: { title: "Abattage d'arbres à Pierrefonds-Roxboro | Nacelle araignée", description: "Abattage à Pierrefonds, frênes touchés par l'agrile et travaux difficiles d'accès avec notre nacelle araignée CELA DT25. Permis gérés. Estimation gratuite." },
  },
  'sainte-anne-de-bellevue': {
    en: { title: 'Tree Service in Sainte-Anne-de-Bellevue | Village-Lot Experts', description: 'Tree removal & pruning on Sainte-Anne\'s compact village lots — sectional takedowns, spider lift access, Montreal agglomeration permits handled. Free quote.' },
    fr: { title: "Service d'arbres à Sainte-Anne-de-Bellevue | Brandse", description: "Abattage et élagage sur les terrains compacts du village de Sainte-Anne — démontage par sections, nacelle araignée, permis de l'agglomération gérés. Estimation gratuite." },
  },
  'ile-bizard': {
    en: { title: "Tree Removal on L'Île-Bizard | Waterfront & Estate Trees", description: "Tree removal on L'Île-Bizard & Sainte-Geneviève — flood-stressed shoreline trees, estate oaks, Montreal agglomeration permits handled. Free quote." },
    fr: { title: "Abattage d'arbres à L'Île-Bizard | Riverains et domaines", description: "Abattage à L'Île-Bizard et Sainte-Geneviève — arbres riverains affaiblis par les inondations, chênes de domaine, permis de l'agglomération gérés. Estimation gratuite." },
  },
  'notre-dame-de-l-ile-perrot': {
    en: { title: "Tree Service in Notre-Dame-de-l'Île-Perrot | Brandse", description: 'Tree removal, Black Walnut experts & cedar hedge care in Notre-Dame-de-l\'Île-Perrot. We handle NDIP\'s own permit process. Certified arborists, free quote.' },
    fr: { title: "Service d'arbres à Notre-Dame-de-l'Île-Perrot | Brandse", description: "Abattage, experts en noyers noirs et entretien de haies de cèdres à Notre-Dame-de-l'Île-Perrot. Nous gérons le processus de permis de NDIP. Estimation gratuite." },
  },
  'terrasse-vaudreuil': {
    en: { title: 'Tree Removal in Terrasse-Vaudreuil | Tight-Lot Specialists', description: 'Big-tree removal on Terrasse-Vaudreuil\'s compact lots — sectional dismantling and spider lift access that protects your yard. Free on-site quote.' },
    fr: { title: "Abattage d'arbres à Terrasse-Vaudreuil | Terrains restreints", description: "Abattage de grands arbres sur les terrains compacts de Terrasse-Vaudreuil — démontage par sections et nacelle araignée qui protège votre cour. Estimation gratuite." },
  },
  'rigaud': {
    en: { title: 'Tree Service in Rigaud | Mountain & Sugar Bush Experts', description: 'Steep-slope tree removal on Mont Rigaud, sugar bush management & ice-storm cleanup. Rigging and winching where machines can\'t go. Free quote.' },
    fr: { title: "Service d'arbres à Rigaud | Montagne et érablières", description: "Abattage en pente raide sur le mont Rigaud, gestion d'érablières et nettoyage après verglas. Gréage et treuillage là où les machines ne passent pas. Estimation gratuite." },
  },
  'les-cedres': {
    en: { title: 'Tree Service in Les Cèdres | Hedges, Windbreaks & Farm Trees', description: 'Cedar hedge care, farm windbreak renewal & century-maple removal in Les Cèdres. Certified arborists 15 minutes away. Free on-site quote.' },
    fr: { title: "Service d'arbres aux Cèdres | Haies, brise-vent et fermes", description: "Entretien de haies de cèdres, renouvellement de brise-vent agricoles et abattage d'érables centenaires aux Cèdres. Arboriculteurs certifiés à 15 minutes. Estimation gratuite." },
  },
  'coteau-du-lac': {
    en: { title: 'Tree Removal in Coteau-du-Lac | Riverfront Specialists', description: 'Leaning waterfront trees, spruce screens & subdivision tree care in Coteau-du-Lac. Bank-erosion assessments and permits handled. Free quote.' },
    fr: { title: "Abattage d'arbres à Coteau-du-Lac | Spécialistes riverains", description: "Arbres riverains penchés, écrans d'épinettes et entretien d'arbres de lotissement à Coteau-du-Lac. Évaluations d'érosion des berges et permis gérés. Estimation gratuite." },
  },
  'pointe-des-cascades': {
    en: { title: 'Tree Service in Pointe-des-Cascades | Storm-Tree Experts', description: 'Cottonwood, willow & Manitoba maple removal in wind-exposed Pointe-des-Cascades. Preventive crown reduction and 24/7 storm response, minutes away.' },
    fr: { title: "Service d'arbres à Pointe-des-Cascades | Experts tempêtes", description: "Abattage de peupliers, saules et érables à Giguère dans Pointe-des-Cascades exposée au vent. Réduction préventive et intervention 24/7, à quelques minutes." },
  },
  'saint-clet': {
    en: { title: 'Tree Service in Saint-Clet | Farm Windbreaks & Yard Giants', description: 'Windbreak renewal, century farmyard maple removal & ditch-line cleanup for Saint-Clet farm properties. Multi-tree project pricing. Free quote.' },
    fr: { title: "Service d'arbres à Saint-Clet | Brise-vent et arbres de ferme", description: "Renouvellement de brise-vent, abattage d'érables centenaires de cour de ferme et nettoyage de fossés pour les propriétés agricoles de Saint-Clet. Estimation gratuite." },
  },
  'lachine': {
    en: { title: 'Tree Removal in Lachine | Alley & Duplex Access Experts', description: 'Lachine tree removal in tight spots — alleys, duplex courtyards, canal-side maples, dead Ash takedowns. Montreal borough permits handled. Free quote.' },
    fr: { title: "Abattage d'arbres à Lachine | Accès ruelles et duplex", description: "Abattage à Lachine dans les espaces restreints — ruelles, cours de duplex, érables du canal, frênes morts. Permis d'arrondissement gérés. Estimation gratuite." },
  },
};

export function getLocation(slug: string) {
  return locations.find(l => l.slug === slug);
}

export function getLocationSlug(name: string) {
  return locations.find(l => l.name === name)?.slug || name.toLowerCase().replace(/[' ]/g, '-');
}
