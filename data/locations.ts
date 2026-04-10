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
];

export function getLocation(slug: string) {
  return locations.find(l => l.slug === slug);
}

export function getLocationSlug(name: string) {
  return locations.find(l => l.name === name)?.slug || name.toLowerCase().replace(/[' ]/g, '-');
}
