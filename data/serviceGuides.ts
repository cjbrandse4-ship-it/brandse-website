// Long-form copy for the six core service pages, rendered by
// components/ServiceGuide.tsx under each page's summary section.
//
// Facts here must match the rest of the site: prices come from
// pages/tree-removal-cost.tsx, equipment (CELA DT25 spider lift, Vermeer
// grinder) and credentials from data/translations.ts, hedge timing and
// pruning seasons from the blog. Links use English paths — they are
// localized at render time, so [text](/tree-trimming) becomes /fr/emondage
// on the French site.

export type ServiceKey =
  | 'treeRemoval'
  | 'stumpGrinding'
  | 'treeTrimming'
  | 'hedgeTrimming'
  | 'treePlanting'
  | 'emergency';

interface GuideContent {
  sections: { h2: string; paragraphs: string[] }[];
  faqs: { q: string; a: string }[];
}

export const serviceGuides: Record<ServiceKey, { en: GuideContent; fr: GuideContent }> = {
  treeRemoval: {
    en: {
      sections: [
        {
          h2: 'Tree Removal Across the West Island and Vaudreuil-Soulanges',
          paragraphs: [
            "We remove trees of every size in 23 communities, from Lachine to Rigaud: ash trees killed by the emerald ash borer, silver maples that have outgrown their yards, storm-damaged spruces leaning toward a roof. Most removals here involve mature trees close to houses, pools, fences and Hydro-Québec lines, so very few are a simple cut at the base. Our crew takes the tree down in sections and lowers each piece with ropes, so nothing drops onto your property.",
            "Every removal starts with a free visit. We look at the tree's size and condition, what is underneath it and how our equipment will reach it, then send you a written, itemized quote within 24 hours.",
          ],
        },
        {
          h2: 'Permits: We Handle the Paperwork',
          paragraphs: [
            "Most municipalities in our service area require a permit before a tree comes down, and some require one or two replacement trees afterwards. The rules and fees differ from city to city. We file the permit application with your city as part of the job, at no extra charge, and tell you up front whether replanting will be required. For the details in three of the strictest cities, read [tree removal permits in Pointe-Claire, Dorval and Beaconsfield](/blog/tree-removal-permits-pointe-claire-dorval-beaconsfield).",
          ],
        },
        {
          h2: 'Tight Backyards, Power Lines and Very Large Trees',
          paragraphs: [
            "Many West Island backyards were laid out for young subdivision trees that now stand 20 metres tall. When there is no room to fell a tree, we dismantle it piece by piece. For tall or boxed-in trees, our CELA DT25 spider lift reaches 25 metres, fits through a garden gate and rides on tracks that protect your lawn; see [hard-to-reach tree removal](/hard-to-reach-tree-removal). When a tree is too big or too close to the house even for that, a crane lifts the sections over the roof to the street. Here is [when a crane is the right call](/blog/crane-tree-removal-kirkland-ddo).",
            "Trees growing into Hydro-Québec lines need extra precautions. Work near energized lines follows strict safety rules, and in some cases we coordinate with Hydro-Québec to have the line temporarily disconnected. We will tell you during the visit if your tree is one of them.",
          ],
        },
        {
          h2: 'What Happens on Removal Day',
          paragraphs: [
            "Routine removals are usually scheduled within one to two weeks. On the day, the crew sets up a safe work zone, takes the tree down in sections, chips all the brush and cuts the trunk into pieces we haul away. We finish by cleaning up the whole work area. If you also want the stump gone, add [stump grinding](/stump-grinding) to your quote.",
          ],
        },
        {
          h2: 'How Much Does Tree Removal Cost?',
          paragraphs: [
            "In 2026, removing a tree in the West Island typically costs $500 to $1,200 for a small tree, $1,200 to $3,000 for a medium tree, and $3,000 to $5,500 or more for a large one. Access, nearby structures, power lines and the tree's condition decide where your job lands in those ranges. Our [tree removal cost guide](/tree-removal-cost) breaks prices down by tree size and lists permit fees by city.",
            "Winter is often the best time to book a removal that isn't urgent: frozen ground protects your lawn, leafless crowns come down faster, and scheduling is more flexible.",
          ],
        },
      ],
      faqs: [
        { q: 'Do I need a permit to remove a tree?', a: "In most of our service area, yes, especially for larger trees. Fees range from about $50 to $150 depending on the city. We apply for the permit for you as part of the job." },
        { q: 'Can you remove a tree that is very close to my house?', a: "Yes. We take it down in small sections and lower each one with ropes, or lift the sections out with our spider lift or a crane when there is no room to lower them." },
        { q: 'Should I remove a dead ash tree right away?', a: "It's best not to wait. Ash trees killed by the emerald ash borer turn brittle quickly, drop limbs, and become more dangerous to take down the longer they stand. See our [emerald ash borer guide](/blog/emerald-ash-borer-kirkland-baie-durfe)." },
        { q: 'Are you licensed and insured?', a: "Yes. We are licensed, insured with the CNESST for workers' compensation, and carry liability insurance. Ask any company you're considering, including us, for proof before work begins." },
        { q: 'How quickly can you remove a tree?', a: "Routine removals are usually scheduled within one to two weeks. For a tree that is dangerous right now, call our 24/7 line at (438) 365-5410; see [emergency tree services](/emergency-services)." },
      ],
    },
    fr: {
      sections: [
        {
          h2: "Abattage d'arbres dans l'Ouest-de-l'Île et Vaudreuil-Soulanges",
          paragraphs: [
            "Nous abattons des arbres de toutes tailles dans 23 municipalités, de Lachine à Rigaud : frênes tués par l'agrile du frêne, érables argentés devenus trop gros pour leur terrain, épinettes endommagées par une tempête et penchées vers un toit. Ici, la plupart des abattages visent des arbres matures près d'une maison, d'une piscine, d'une clôture ou des lignes d'Hydro-Québec, donc très peu se résument à une coupe à la base. Notre équipe démonte l'arbre par sections et descend chaque morceau au câble pour que rien ne tombe sur votre terrain.",
            "Chaque abattage commence par une visite gratuite. Nous évaluons la taille et l'état de l'arbre, ce qui se trouve dessous et l'accès pour notre équipement, puis nous vous envoyons une soumission écrite et détaillée en 24 heures.",
          ],
        },
        {
          h2: "Permis d'abattage : nous nous occupons des démarches",
          paragraphs: [
            "La plupart des municipalités de notre territoire exigent un permis avant d'abattre un arbre, et certaines exigent un ou deux arbres de remplacement par la suite. Les règles et les frais varient d'une ville à l'autre. Nous déposons la demande de permis auprès de votre ville dans le cadre du contrat, sans frais supplémentaires, et nous vous disons d'avance si une replantation sera exigée. Pour le détail dans trois des villes les plus strictes, lisez [les permis d'abattage à Pointe-Claire, Dorval et Beaconsfield](/blog/tree-removal-permits-pointe-claire-dorval-beaconsfield).",
          ],
        },
        {
          h2: 'Cours étroites, lignes électriques et très grands arbres',
          paragraphs: [
            "Bien des cours de l'Ouest-de-l'Île ont été conçues pour de jeunes arbres de développement résidentiel qui mesurent aujourd'hui 20 mètres. Quand il n'y a pas d'espace pour abattre un arbre d'un seul coup, nous le démontons morceau par morceau. Pour les arbres hauts ou enclavés, notre nacelle araignée CELA DT25 atteint 25 mètres, passe par un portail de jardin et roule sur chenilles pour protéger votre pelouse; voyez [l'abattage d'arbres difficiles d'accès](/hard-to-reach-tree-removal). Quand l'arbre est trop gros ou trop près de la maison même pour la nacelle, une grue soulève les sections par-dessus le toit jusqu'à la rue. Voici [quand la grue est le bon choix](/blog/crane-tree-removal-kirkland-ddo).",
            "Les arbres qui poussent dans les lignes d'Hydro-Québec exigent des précautions particulières. Le travail près de lignes sous tension obéit à des règles de sécurité strictes et, dans certains cas, nous coordonnons avec Hydro-Québec la mise hors tension temporaire de la ligne. Nous vous le dirons lors de la visite si votre arbre est dans cette situation.",
          ],
        },
        {
          h2: "Le jour de l'abattage",
          paragraphs: [
            "Les abattages courants sont habituellement planifiés d'ici une à deux semaines. Le jour venu, l'équipe délimite une zone de travail sécuritaire, démonte l'arbre par sections, déchiquette toutes les branches et tronçonne le tronc, que nous emportons. Nous terminons par le nettoyage complet de la zone de travail. Si vous voulez aussi vous débarrasser de la souche, ajoutez [l'essouchement](/stump-grinding) à votre soumission.",
          ],
        },
        {
          h2: "Combien coûte l'abattage d'un arbre ?",
          paragraphs: [
            "En 2026, abattre un arbre dans l'Ouest-de-l'Île coûte généralement de 500 $ à 1 200 $ pour un petit arbre, de 1 200 $ à 3 000 $ pour un arbre moyen et de 3 000 $ à 5 500 $ et plus pour un grand arbre. L'accès, les structures à proximité, les lignes électriques et l'état de l'arbre déterminent où se situe votre projet dans ces fourchettes. Notre [guide des prix d'abattage](/tree-removal-cost) détaille les prix par taille d'arbre et les frais de permis par ville.",
            "L'hiver est souvent le meilleur moment pour un abattage non urgent : le sol gelé protège la pelouse, les cimes sans feuilles se démontent plus vite et l'horaire est plus flexible.",
          ],
        },
      ],
      faqs: [
        { q: "Ai-je besoin d'un permis pour abattre un arbre ?", a: "Dans la plupart des villes de notre territoire, oui, surtout pour les gros arbres. Les frais varient d'environ 50 $ à 150 $ selon la ville. Nous faisons la demande de permis pour vous dans le cadre du contrat." },
        { q: 'Pouvez-vous abattre un arbre très près de ma maison ?', a: "Oui. Nous le démontons en petites sections que nous descendons au câble, ou nous sortons les sections avec notre nacelle araignée ou une grue quand il n'y a pas d'espace pour les descendre." },
        { q: 'Dois-je faire abattre un frêne mort tout de suite ?', a: "Mieux vaut ne pas attendre. Les frênes tués par l'agrile deviennent vite cassants, perdent des branches et sont plus dangereux à abattre à mesure que le temps passe. Lisez notre [guide sur l'agrile du frêne](/blog/emerald-ash-borer-kirkland-baie-durfe)." },
        { q: 'Êtes-vous licenciés et assurés ?', a: "Oui. Nous sommes licenciés, assurés auprès de la CNESST et nous détenons une assurance responsabilité. Demandez une preuve à toute entreprise que vous envisagez, y compris nous, avant le début des travaux." },
        { q: 'En combien de temps pouvez-vous abattre un arbre ?', a: "Les abattages courants sont habituellement planifiés d'ici une à deux semaines. Pour un arbre dangereux en ce moment, appelez notre ligne 24/7 au (438) 365-5410; voyez [le service d'urgence](/emergency-services)." },
      ],
    },
  },

  stumpGrinding: {
    en: {
      sections: [
        {
          h2: 'Stump Grinding or Full Stump Removal?',
          paragraphs: [
            "Grinding is what we recommend for most yards. The grinder chews the stump and its surface roots into wood chips, 6 to 12 inches below ground level, so you can lay sod, plant a garden bed or spread mulch over the spot. Full stump removal digs out the whole root ball with an excavator. It leaves a large hole to fill and grade, and is only worth it when you plan to build a deck, pool or driveway over the area, or when roots are damaging a foundation or pipes. More in [stump grinding vs. stump removal](/blog/stump-grinding-vs-removal).",
          ],
        },
        {
          h2: 'How We Grind a Stump',
          paragraphs: [
            "Before we grind, we request a utility locate through Info-Excavation so we know where gas, water and electrical lines run. Our Vermeer grinder then works the stump down below grade and follows the main surface roots. When we're done, we fill the hole with the wood chips or with topsoil and leave the area level.",
            "We grind stumps from trees we remove and stumps left behind from older removals, whoever cut the tree.",
          ],
        },
        {
          h2: 'Why Not Just Leave the Stump?',
          paragraphs: [
            "A stump takes years to rot on its own. In the meantime it gets in the way of the mower, can send up new shoots from living roots, and as it decays it becomes a home for carpenter ants and other insects that may move toward your house. Grinding gives you the space back right away.",
          ],
        },
        {
          h2: 'What Stump Grinding Costs',
          paragraphs: [
            "Stump grinding is priced by the stump's diameter and how easy it is to reach. Added to a tree removal, it usually costs $200 to $500. Our [tree removal cost guide](/tree-removal-cost) has the full price table, or ask for a free quote.",
          ],
        },
        {
          h2: 'After Grinding: Replanting the Spot',
          paragraphs: [
            "Wood chips settle as they break down, so a ground-out spot sinks a little over the first season; top it up with soil before seeding. If you want a new tree, plant it a short distance from the old stump, where the soil isn't full of decaying roots. We can help you choose and plant one; see [tree planting](/tree-planting).",
          ],
        },
      ],
      faqs: [
        { q: 'How deep do you grind a stump?', a: "Typically 6 to 12 inches below ground level, which is enough to grow grass or plant a garden bed over it." },
        { q: 'Will the roots grow back after grinding?', a: "Grinding removes the stump and main surface roots; the roots left underground decay naturally. Some species send up a few shoots afterward. Mow or pull them and they stop." },
        { q: 'What happens to the wood chips?', a: "We use them to fill the hole, or fill it with topsoil instead if you prefer." },
        { q: 'Do you check for underground lines first?', a: "Yes. We request an Info-Excavation utility locate before grinding." },
        { q: 'Can you grind a stump from a tree another company cut?', a: "Yes. We grind old stumps as well as stumps from our own removals." },
      ],
    },
    fr: {
      sections: [
        {
          h2: 'Essouchement ou extraction complète de la souche ?',
          paragraphs: [
            "Pour la plupart des terrains, nous recommandons l'essouchement par broyage. La déchiqueteuse réduit la souche et ses racines de surface en copeaux, de 6 à 12 pouces sous le niveau du sol, pour que vous puissiez poser de la tourbe, aménager une plate-bande ou étendre du paillis. L'extraction complète retire toute la motte de racines à la pelle mécanique. Elle laisse un grand trou à remplir et à niveler, et ne vaut la peine que si vous prévoyez construire une terrasse, une piscine ou une entrée à cet endroit, ou si des racines endommagent une fondation ou des tuyaux. Pour en savoir plus : [essouchage ou enlèvement complet](/blog/stump-grinding-vs-removal).",
          ],
        },
        {
          h2: 'Comment nous faisons l’essouchement',
          paragraphs: [
            "Avant de broyer, nous demandons une localisation des infrastructures souterraines à Info-Excavation pour savoir où passent les conduites de gaz, d'eau et d'électricité. Notre déchiqueteuse Vermeer descend ensuite la souche sous le niveau du sol et suit les principales racines de surface. À la fin, nous remplissons le trou avec les copeaux ou avec de la terre et laissons la surface de niveau.",
            "Nous broyons les souches des arbres que nous abattons, comme les vieilles souches laissées après un abattage antérieur, peu importe qui a coupé l'arbre.",
          ],
        },
        {
          h2: 'Pourquoi ne pas simplement laisser la souche ?',
          paragraphs: [
            "Une souche met des années à pourrir d'elle-même. Entre-temps, elle nuit à la tonte, peut produire de nouvelles pousses à partir des racines vivantes et, en se décomposant, attire les fourmis charpentières et d'autres insectes qui peuvent migrer vers la maison. L'essouchement vous redonne l'espace tout de suite.",
          ],
        },
        {
          h2: "Combien coûte l'essouchement ?",
          paragraphs: [
            "Le prix dépend du diamètre de la souche et de son accès. Ajouté à un abattage, l'essouchement coûte généralement de 200 $ à 500 $. Notre [guide des prix d'abattage](/tree-removal-cost) présente le tableau complet, ou demandez une soumission gratuite.",
          ],
        },
        {
          h2: "Après l'essouchement : replanter",
          paragraphs: [
            "Les copeaux se tassent en se décomposant, donc l'emplacement s'affaisse un peu durant la première saison; ajoutez de la terre avant de semer. Si vous voulez un nouvel arbre, plantez-le à une certaine distance de l'ancienne souche, là où le sol n'est pas rempli de racines en décomposition. Nous pouvons vous aider à le choisir et à le planter; voyez [la plantation d'arbres](/tree-planting).",
          ],
        },
      ],
      faqs: [
        { q: 'À quelle profondeur broyez-vous la souche ?', a: "Généralement de 6 à 12 pouces sous le niveau du sol, ce qui suffit pour faire pousser du gazon ou aménager une plate-bande." },
        { q: "Les racines vont-elles repousser après l'essouchement ?", a: "Le broyage enlève la souche et les principales racines de surface; les racines restées dans le sol se décomposent naturellement. Certaines essences produisent quelques pousses par la suite. Tondez-les ou arrachez-les et elles cessent." },
        { q: 'Que faites-vous des copeaux ?', a: "Nous nous en servons pour remplir le trou, ou nous le remplissons plutôt de terre si vous préférez." },
        { q: "Vérifiez-vous les conduites souterraines avant ?", a: "Oui. Nous demandons une localisation à Info-Excavation avant le broyage." },
        { q: "Pouvez-vous broyer la souche d'un arbre coupé par une autre entreprise ?", a: "Oui. Nous broyons les vieilles souches comme celles de nos propres abattages." },
      ],
    },
  },

  treeTrimming: {
    en: {
      sections: [
        {
          h2: 'Pruning That Keeps Trees Healthy and Safe',
          paragraphs: [
            "Good pruning removes the right branches, not the most branches. Our ISA certified arborists cut dead and diseased wood, branches that rub or cross, and limbs hanging over your roof, driveway or your neighbour's yard, while keeping the tree's natural shape. As a rule, no more than a quarter of the canopy comes off in one season. We don't top trees: cutting main stems back to stubs weakens the tree and triggers a mass of fast, poorly attached regrowth.",
          ],
        },
        {
          h2: 'The Pruning We Do',
          paragraphs: [
            "Crown thinning takes out selected interior branches so light and air get through and the tree catches less wind and ice. Beyond deadwooding, thinning and crown raising, we do crown reduction, which shortens long limbs to take weight and wind load off a large tree, a common need for silver maples on West Island lots. Structural pruning on young trees sets up one strong trunk and well-spaced branches, which prevents splits decades later. Clearance pruning lifts branches off roofs, chimneys and driveways.",
          ],
        },
        {
          h2: 'Pruning Mistakes That Do Lasting Damage',
          paragraphs: [
            "Topping, cutting the trunk or big limbs back to stubs, is the worst of them. The tree answers with a flush of fast, weakly attached shoots that break easily in storms, so a topped tree ends up more dangerous than one that was never pruned. Flush cuts that remove the branch collar wound the trunk, long stubs left behind invite decay, and taking more than a quarter of the canopy in one season starves the tree. Our arborists follow ISA pruning standards and make each cut just outside the branch collar, where the tree can close it.",
          ],
        },
        {
          h2: 'When to Prune in Quebec',
          paragraphs: [
            "Late winter, from February to early April before buds open, is the best time for most deciduous trees: the tree is dormant, its structure is easy to see, and cuts close quickly once growth starts. Maples may drip sap when pruned in late winter. It looks alarming but does not harm the tree. Oaks are pruned only while dormant, as a precaution against oak wilt. Dead, broken or hazardous branches come off at any time of year. For the rest of the year's tree care, see our [seasonal tree care calendar](/blog/seasonal-tree-care-west-island).",
          ],
        },
        {
          h2: 'Emerald Ash Borer and Ice Storms',
          paragraphs: [
            "In Kirkland, Baie-D'Urfé and across the West Island, the emerald ash borer has killed or weakened a large share of untreated ash trees. A dying ash sheds limbs quickly, so pruning one is usually a short-term fix before removal; see [emerald ash borer in Kirkland and Baie-D'Urfé](/blog/emerald-ash-borer-kirkland-baie-durfe). Ice storms are the other big local risk: long, heavy limbs are the first to fail under ice, and thinning or reducing them before winter lowers the odds of a branch coming through the roof.",
          ],
        },
        {
          h2: 'How Often Should Trees Be Pruned?',
          paragraphs: [
            "Most mature trees need professional pruning every three to five years. Young trees benefit from lighter work more often in their first years, and trees over a house, pool or driveway may need attention sooner. We'll look at your trees during a free visit and send a written quote. When a tree can't be saved, see [tree removal](/tree-removal).",
          ],
        },
      ],
      faqs: [
        { q: "What's the difference between tree trimming and pruning?", a: "Trimming usually means cutting back overgrown branches for looks or clearance. Pruning is more targeted and focuses on the tree's health: removing dead, diseased or structurally weak branches. We do both." },
        { q: 'When is the best time to prune trees in Quebec?', a: "Late winter, from February to early April, for most species. Oaks only while dormant. Dead or dangerous branches can be removed any time." },
        { q: 'Does pruning hurt the tree?', a: "Not when it's done right. Cuts made just outside the branch collar close over on their own. Damage comes from bad cuts: flush cuts, stubs, topping, or removing too much at once." },
        { q: 'Can you prune branches near power lines?', a: "It depends on the line. Work near Hydro-Québec lines has strict safety rules, and some jobs require Hydro-Québec to clear or disconnect the line first. We'll tell you which applies during the free visit." },
        { q: 'Do I need a permit to prune a tree?', a: "Normal pruning usually doesn't need one, but some municipalities regulate severe pruning of large trees. If your job could fall under those rules, we'll tell you before we start." },
      ],
    },
    fr: {
      sections: [
        {
          h2: "Un émondage qui garde vos arbres sains et sécuritaires",
          paragraphs: [
            "Un bon émondage enlève les bonnes branches, pas le plus de branches possible. Nos arboriculteurs certifiés ISA retirent le bois mort et malade, les branches qui frottent ou se croisent et celles qui surplombent le toit, l'entrée ou le terrain du voisin, tout en respectant la forme naturelle de l'arbre. En règle générale, on ne retire pas plus du quart de la cime en une saison. Nous n'étêtons pas les arbres : couper les tiges principales en moignons affaiblit l'arbre et provoque une repousse rapide et mal attachée.",
          ],
        },
        {
          h2: "Les types d'émondage et d'élagage que nous faisons",
          paragraphs: [
            "L'éclaircissage de la cime retire des branches intérieures choisies pour laisser passer la lumière et l'air, et l'arbre offre moins de prise au vent et au verglas. En plus de l'enlèvement du bois mort, de l'éclaircissage et du rehaussement de la cime, nous faisons la réduction de cime, qui raccourcit les longues branches pour alléger un gros arbre et réduire sa prise au vent, un besoin fréquent pour les érables argentés des terrains de l'Ouest-de-l'Île. La taille de formation des jeunes arbres établit un tronc unique et solide et des branches bien espacées, ce qui évite des fentes des décennies plus tard. La taille de dégagement éloigne les branches du toit, de la cheminée et de l'entrée.",
          ],
        },
        {
          h2: "Les erreurs d'émondage qui font des dommages durables",
          paragraphs: [
            "L'étêtage, qui consiste à couper le tronc ou les grosses branches en moignons, est la pire. L'arbre répond par une poussée de rejets rapides et mal attachés qui cassent facilement pendant les tempêtes : un arbre étêté devient plus dangereux qu'un arbre jamais émondé. Les coupes rases qui enlèvent le col de la branche blessent le tronc, les longs chicots laissés en place invitent la pourriture, et retirer plus du quart de la cime en une saison affame l'arbre. Nos arboriculteurs suivent les normes d'élagage de l'ISA et coupent juste à l'extérieur du col de la branche, là où l'arbre peut refermer la plaie.",
          ],
        },
        {
          h2: "Quand émonder au Québec",
          paragraphs: [
            "La fin de l'hiver, de février au début d'avril avant l'ouverture des bourgeons, est le meilleur moment pour la plupart des feuillus : l'arbre est en dormance, sa structure est facile à voir et les coupes se referment vite au retour de la croissance. Les érables peuvent couler de la sève s'ils sont émondés à la fin de l'hiver. C'est impressionnant, mais sans danger pour l'arbre. Les chênes ne sont émondés qu'en dormance, par précaution contre le flétrissement du chêne. Les branches mortes, cassées ou dangereuses s'enlèvent en toute saison. Pour l'entretien du reste de l'année, voyez notre [calendrier d'entretien des arbres saison par saison](/blog/seasonal-tree-care-west-island).",
          ],
        },
        {
          h2: "L'agrile du frêne et le verglas",
          paragraphs: [
            "À Kirkland, à Baie-D'Urfé et partout dans l'Ouest-de-l'Île, l'agrile du frêne a tué ou affaibli une grande part des frênes non traités. Un frêne mourant perd vite ses branches, donc l'émonder n'est souvent qu'une solution temporaire avant l'abattage; voyez [l'agrile du frêne à Kirkland et Baie-D'Urfé](/blog/emerald-ash-borer-kirkland-baie-durfe). Le verglas est l'autre grand risque local : les longues branches lourdes cèdent les premières sous la glace, et les éclaircir ou les réduire avant l'hiver diminue le risque qu'une branche traverse le toit.",
          ],
        },
        {
          h2: 'À quelle fréquence faut-il émonder ?',
          paragraphs: [
            "La plupart des arbres matures ont besoin d'un émondage professionnel aux trois à cinq ans. Les jeunes arbres profitent de tailles plus légères et plus fréquentes durant leurs premières années, et les arbres au-dessus d'une maison, d'une piscine ou d'une entrée peuvent demander de l'attention plus tôt. Nous examinons vos arbres lors d'une visite gratuite et vous envoyons une soumission écrite. Quand un arbre ne peut pas être sauvé, voyez [l'abattage d'arbres](/tree-removal).",
          ],
        },
      ],
      faqs: [
        { q: "Quelle est la différence entre l'émondage et l'élagage ?", a: "Au Québec, les deux mots désignent la coupe de branches sur un arbre vivant. On parle souvent d'émondage pour l'entretien et le dégagement, et d'élagage pour une taille plus ciblée sur la santé et la structure de l'arbre. Nous faisons les deux." },
        { q: "Quel est le meilleur moment pour émonder au Québec ?", a: "La fin de l'hiver, de février au début d'avril, pour la plupart des essences. Les chênes seulement en dormance. Les branches mortes ou dangereuses peuvent être enlevées en tout temps." },
        { q: "L'émondage fait-il mal à l'arbre ?", a: "Pas s'il est bien fait. Une coupe juste à l'extérieur du col de la branche se referme d'elle-même. Les dommages viennent des mauvaises coupes : coupes rases, moignons, étêtage ou trop de branches enlevées à la fois." },
        { q: 'Pouvez-vous émonder des branches près des fils électriques ?', a: "Cela dépend de la ligne. Le travail près des lignes d'Hydro-Québec obéit à des règles de sécurité strictes, et certains travaux exigent qu'Hydro-Québec dégage ou mette d'abord la ligne hors tension. Nous vous le dirons lors de la visite gratuite." },
        { q: "Faut-il un permis pour émonder un arbre ?", a: "Un émondage normal n'en exige généralement pas, mais certaines municipalités encadrent la taille sévère des gros arbres. Si vos travaux peuvent être visés, nous vous le dirons avant de commencer." },
      ],
    },
  },

  hedgeTrimming: {
    en: {
      sections: [
        {
          h2: 'Hedge Trimming for Cedar, Spruce and Ornamental Hedges',
          paragraphs: [
            "Cedar hedges line the streets of Pointe-Claire, Dorval, Beaconsfield and most of the West Island. Kept in shape, they give privacy and wind protection all year. Left alone for a few seasons, they grow too tall to reach, thin out at the bottom and turn brown inside. We trim cedar, spruce and ornamental hedges of any length, from a short front-yard border to a full property line.",
          ],
        },
        {
          h2: 'When to Trim Hedges',
          paragraphs: [
            "The best window for most hedges here is late June to mid-August, after the spring growth flush and early enough for new growth to harden before winter. A second light trim in early September keeps fast growers tidy into the fall. Avoid heavy cuts late in the season.",
          ],
        },
        {
          h2: "The Cedar Rule: Don't Cut Into Brown Wood",
          paragraphs: [
            "Cedars don't regrow from old, brown wood. Cut past the green layer and you get a bare patch that stays bare. That's why regular, light trims beat a hard cut every few years. Shaping the hedge slightly narrower at the top than at the bottom lets sunlight reach the lower branches, so the hedge stays full down to the ground.",
          ],
        },
        {
          h2: 'Height Limits and Neighbours',
          paragraphs: [
            "Many municipalities, Pointe-Claire and Dorval among them, limit hedge height, especially in front yards and near corners where a hedge can block drivers' view, and a city can send a notice with a deadline to trim. Rules differ by city and by zone, so check your city's bylaw, or ask us during the estimate and we'll look it up. If the hedge sits on the property line, talk with your neighbour before reducing its height.",
          ],
        },
        {
          h2: 'Doing It Yourself or Hiring a Crew',
          paragraphs: [
            "A hedge under two metres is a reasonable job with hand shears or an electric trimmer. Tall hedges, long property lines and hedges along fences or near wires are another matter: holding a powered trimmer above shoulder height for hours is tiring and risky, and an uneven cut shows for a whole season. A crew with commercial equipment finishes in a fraction of the time and leaves an even face that grows back dense.",
          ],
        },
        {
          h2: 'Overgrown Hedges and Seasonal Maintenance',
          paragraphs: [
            "An overgrown hedge can often be brought back to a manageable height in one visit, as long as the sides are cut back only into green growth. Hedges that are bare at the bottom or brown inside may need a few seasons of gradual work, or some sections replaced; we'll tell you honestly which makes more sense. To keep hedges in shape without having to think about it, ask about seasonal maintenance, where we come back at the right time each year. For trees in the same yard, see [tree trimming](/tree-trimming).",
          ],
        },
      ],
      faqs: [
        { q: 'How often should a cedar hedge be trimmed?', a: "At least once a year, ideally between late June and mid-August. Fast-growing hedges look best with a second light trim in early September." },
        { q: 'Can you fix a hedge that has brown or bare patches?', a: "Patches caused by cutting into old wood rarely fill in on cedars. Thin spots from shade or winter damage can recover with good care. We'll tell you whether trimming or replacing sections makes more sense." },
        { q: 'Do you trim hedges other than cedar?', a: "Yes: cedar, spruce and ornamental hedges." },
        { q: 'Is there a height limit for hedges?', a: "In many municipalities, yes, especially for front-yard hedges and near intersections. Limits vary by city and zone; we can check yours during the estimate." },
        { q: 'How much does hedge trimming cost?', a: "It depends on the hedge's length, height and access. We give free written quotes." },
      ],
    },
    fr: {
      sections: [
        {
          h2: 'Taille de haies de cèdres, d’épinettes et ornementales',
          paragraphs: [
            "Les haies de cèdres bordent les rues de Pointe-Claire, Dorval, Beaconsfield et de la majeure partie de l'Ouest-de-l'Île. Bien entretenues, elles offrent intimité et protection contre le vent toute l'année. Laissées à elles-mêmes quelques saisons, elles deviennent trop hautes pour être atteintes, se dégarnissent à la base et brunissent à l'intérieur. Nous taillons les haies de cèdres, d'épinettes et ornementales de toutes longueurs, de la petite bordure en façade à la ligne de terrain complète.",
          ],
        },
        {
          h2: 'Quand tailler une haie',
          paragraphs: [
            "Le meilleur moment pour la plupart des haies d'ici va de la fin juin à la mi-août, après la poussée de croissance du printemps et assez tôt pour que la nouvelle pousse s'endurcisse avant l'hiver. Une deuxième taille légère au début de septembre garde les haies à croissance rapide nettes jusqu'à l'automne. Évitez les tailles sévères en fin de saison.",
          ],
        },
        {
          h2: 'La règle du cèdre : ne pas couper dans le bois brun',
          paragraphs: [
            "Les cèdres ne repoussent pas à partir du vieux bois brun. Coupez au-delà de la couche verte et vous obtenez un trou qui restera dégarni. C'est pourquoi des tailles régulières et légères valent mieux qu'une coupe sévère aux quelques années. Une haie un peu plus étroite en haut qu'en bas laisse la lumière atteindre les branches basses, et elle reste fournie jusqu'au sol.",
          ],
        },
        {
          h2: 'Hauteur maximale et voisins',
          paragraphs: [
            "Bien des municipalités, dont Pointe-Claire et Dorval, limitent la hauteur des haies, surtout en cour avant et près des coins de rue, où une haie peut nuire à la visibilité des automobilistes, et une ville peut envoyer un avis avec un délai pour tailler. Les règles varient selon la ville et la zone : consultez le règlement de votre ville, ou demandez-nous lors de la soumission et nous vérifierons pour vous. Si la haie est sur la ligne de terrain, parlez-en avec votre voisin avant d'en réduire la hauteur.",
          ],
        },
        {
          h2: 'Tailler soi-même ou engager une équipe',
          paragraphs: [
            "Une haie de moins de deux mètres se taille raisonnablement aux cisailles ou au taille-haie électrique. Les haies hautes, les longues lignes de terrain et les haies le long d'une clôture ou près des fils sont une autre histoire : tenir un taille-haie motorisé au-dessus des épaules pendant des heures est épuisant et risqué, et une coupe inégale se voit toute la saison. Une équipe avec de l'équipement commercial finit en une fraction du temps et laisse une face égale qui repousse bien fournie.",
          ],
        },
        {
          h2: 'Haies trop grandes et entretien saisonnier',
          paragraphs: [
            "Une haie trop grande peut souvent être ramenée à une hauteur raisonnable en une visite, tant que les côtés ne sont taillés que dans le vert. Une haie dégarnie à la base ou brune à l'intérieur peut demander quelques saisons de travail graduel, ou le remplacement de certaines sections; nous vous dirons franchement ce qui a le plus de sens. Pour garder vos haies en forme sans y penser, demandez l'entretien saisonnier : nous revenons au bon moment chaque année. Pour les arbres du même terrain, voyez [l'émondage d'arbres](/tree-trimming).",
          ],
        },
      ],
      faqs: [
        { q: 'À quelle fréquence tailler une haie de cèdres ?', a: "Au moins une fois par année, idéalement entre la fin juin et la mi-août. Les haies à croissance rapide sont plus belles avec une deuxième taille légère au début de septembre." },
        { q: 'Pouvez-vous réparer une haie brune ou dégarnie ?', a: "Les trous causés par une coupe dans le vieux bois se remplissent rarement sur les cèdres. Les zones clairsemées dues à l'ombre ou aux dommages hivernaux peuvent se rétablir avec de bons soins. Nous vous dirons s'il vaut mieux tailler ou remplacer certaines sections." },
        { q: "Taillez-vous d'autres haies que les cèdres ?", a: "Oui : haies de cèdres, d'épinettes et ornementales." },
        { q: 'Y a-t-il une hauteur maximale pour les haies ?', a: "Dans bien des municipalités, oui, surtout pour les haies en cour avant et près des intersections. Les limites varient selon la ville et la zone; nous pouvons vérifier les vôtres lors de la soumission." },
        { q: 'Combien coûte la taille de haies ?', a: "Cela dépend de la longueur, de la hauteur et de l'accès. Nous offrons des soumissions écrites gratuites." },
      ],
    },
  },

  treePlanting: {
    en: {
      sections: [
        {
          h2: 'The Right Tree in the Right Place',
          paragraphs: [
            "A well-chosen tree lasts for decades; the wrong one ends up on a removal quote. Before planting, we look at how much space the tree will need when it's full grown, sun exposure, soil and drainage, and what is overhead and underground: power lines, the house foundation, a pool or a septic field. In the West Island and Vaudreuil-Soulanges, native species are usually the safest choice, since they handle our winters and local pests with less care.",
          ],
        },
        {
          h2: 'Trees That Do Well Here',
          paragraphs: [
            "Red oak, sugar maple and red maple make long-lived shade trees; white birch adds year-round interest; serviceberry suits small yards; white pine and white spruce give a year-round screen. We steer clear of ash, because of the emerald ash borer, and of Norway maple, which spreads aggressively into local woods. Our picks, species by species: [the best native trees to plant in the West Island](/blog/best-trees-to-plant) and [the best trees for Dollard-des-Ormeaux and Pierrefonds](/blog/best-trees-to-plant-ddo-pierrefonds).",
          ],
        },
        {
          h2: 'How We Plant',
          paragraphs: [
            "We dig a hole two to three times wider than the root ball but no deeper, so the root flare sits at or slightly above ground level; trees planted too deep are one of the most common causes of early decline. We loosen circling roots, backfill with the native soil, water thoroughly, stake only when the tree needs it, and spread a ring of mulch kept clear of the trunk.",
          ],
        },
        {
          h2: 'When to Plant in Quebec',
          paragraphs: [
            "Spring after the ground thaws, and early fall from late August to early October, are the best planting windows. Cool weather and regular rain let roots settle in before summer heat or winter frost. After planting, water deeply about once a week through the first two growing seasons, more often during heat waves and dry spells.",
          ],
        },
        {
          h2: 'Replacement Trees After a Removal',
          paragraphs: [
            "Several cities require one or two replacement trees for every tree removed. We can plant them for you and help you choose species your city accepts. Replacement planting usually adds $200 to $600; see the [tree removal cost guide](/tree-removal-cost). Clearing an old stump first? See [stump grinding](/stump-grinding).",
          ],
        },
      ],
      faqs: [
        { q: 'When is the best time to plant a tree?', a: "Spring after the thaw, or early fall from late August to early October. Cool, moist weather helps the roots establish." },
        { q: 'How far from the house should I plant a tree?', a: "Far enough that the mature canopy clears the roof. For a large shade tree, that usually means at least 6 metres (20 feet) from the house." },
        { q: 'How much water does a new tree need?', a: "A deep watering about once a week through its first two growing seasons, more during heat waves and dry spells." },
        { q: 'Which trees should I avoid planting?', a: "Ash, because of the emerald ash borer, and Norway maple, which is invasive in our region. Also avoid large species under power lines or close to foundations." },
        { q: 'Can you plant the replacement trees my city requires?', a: "Yes. We can plant them after a removal and help you pick species your city accepts." },
      ],
    },
    fr: {
      sections: [
        {
          h2: 'Le bon arbre au bon endroit',
          paragraphs: [
            "Un arbre bien choisi dure des décennies; le mauvais finit dans une soumission d'abattage. Avant de planter, nous examinons l'espace dont l'arbre aura besoin à maturité, l'ensoleillement, le sol et le drainage, et ce qui se trouve au-dessus et sous terre : fils électriques, fondation de la maison, piscine ou champ d'épuration. Dans l'Ouest-de-l'Île et Vaudreuil-Soulanges, les essences indigènes sont généralement le choix le plus sûr, car elles supportent nos hivers et les ravageurs locaux avec moins de soins.",
          ],
        },
        {
          h2: 'Les arbres qui réussissent bien ici',
          paragraphs: [
            "Le chêne rouge, l'érable à sucre et l'érable rouge font d'excellents arbres d'ombrage durables; le bouleau à papier offre de l'intérêt toute l'année; l'amélanchier convient aux petits terrains; le pin blanc et l'épinette blanche forment un écran persistant. Nous évitons le frêne, à cause de l'agrile, et l'érable de Norvège, qui envahit les boisés locaux. Nos choix, essence par essence : [les meilleurs arbres indigènes à planter dans l'Ouest-de-l'Île](/blog/best-trees-to-plant) et [les meilleurs arbres pour Dollard-des-Ormeaux et Pierrefonds](/blog/best-trees-to-plant-ddo-pierrefonds).",
          ],
        },
        {
          h2: 'Comment nous plantons',
          paragraphs: [
            "Nous creusons un trou deux à trois fois plus large que la motte, mais pas plus profond, pour que le collet des racines soit au niveau du sol ou légèrement au-dessus; un arbre planté trop creux est l'une des causes les plus fréquentes de dépérissement précoce. Nous démêlons les racines qui tournent en rond, remblayons avec la terre d'origine, arrosons abondamment, tuteurons seulement si l'arbre en a besoin et étendons un anneau de paillis dégagé du tronc.",
          ],
        },
        {
          h2: 'Quand planter au Québec',
          paragraphs: [
            "Le printemps après le dégel et le début de l'automne, de la fin août au début d'octobre, sont les meilleures périodes. La fraîcheur et la pluie régulière permettent aux racines de s'installer avant la chaleur de l'été ou le gel de l'hiver. Après la plantation, arrosez en profondeur environ une fois par semaine durant les deux premières saisons de croissance, plus souvent pendant les canicules et les sécheresses.",
          ],
        },
        {
          h2: 'Arbres de remplacement après un abattage',
          paragraphs: [
            "Plusieurs villes exigent un ou deux arbres de remplacement pour chaque arbre abattu. Nous pouvons les planter pour vous et vous aider à choisir des essences acceptées par votre ville. La plantation de remplacement ajoute généralement de 200 $ à 600 $; voyez le [guide des prix d'abattage](/tree-removal-cost). Une vieille souche à enlever d'abord ? Voyez [l'essouchement](/stump-grinding).",
          ],
        },
      ],
      faqs: [
        { q: 'Quel est le meilleur moment pour planter un arbre ?', a: "Au printemps après le dégel, ou au début de l'automne, de la fin août au début d'octobre. Le temps frais et humide aide les racines à s'établir." },
        { q: 'À quelle distance de la maison planter un arbre ?', a: "Assez loin pour que la cime adulte dégage le toit. Pour un grand arbre d'ombrage, cela veut généralement dire au moins 6 mètres (20 pieds) de la maison." },
        { q: "De combien d'eau un nouvel arbre a-t-il besoin ?", a: "Un arrosage en profondeur environ une fois par semaine durant ses deux premières saisons de croissance, plus souvent pendant les canicules et les sécheresses." },
        { q: 'Quels arbres éviter de planter ?', a: "Le frêne, à cause de l'agrile, et l'érable de Norvège, envahissant dans notre région. Évitez aussi les grandes essences sous les fils électriques ou près des fondations." },
        { q: 'Pouvez-vous planter les arbres de remplacement exigés par ma ville ?', a: "Oui. Nous pouvons les planter après un abattage et vous aider à choisir des essences acceptées par votre ville." },
      ],
    },
  },

  emergency: {
    en: {
      sections: [
        {
          h2: 'What Counts as a Tree Emergency',
          paragraphs: [
            "A tree or large limb on your house, car or driveway. A tree leaning further after a storm, with cracked soil or roots lifting at its base. A split trunk or a hanging branch over a door, walkway or street. Branches tangled in power lines. If someone could get hurt, or the damage could get worse before morning, call us at (438) 365-5410, day or night.",
          ],
        },
        {
          h2: 'What to Do While You Wait',
          paragraphs: [
            "Get everyone away from the tree and anything it is touching. If it hit the house and you see cracked walls or a sagging ceiling, or you smell gas, get out and stay out of the rooms under or beside the tree. If wires are involved, stay at least 10 metres away, treat every line as live, and call Hydro-Québec first at 1 800 790-2424. Call 911 if anyone is hurt or there is a risk of fire. Don't try to cut a fallen tree yourself: trunks and limbs under tension can spring back with deadly force. Once everyone is safe, take photos and video from several angles before anything is moved; your insurer will want them.",
          ],
        },
        {
          h2: 'After a Storm: What Is Urgent and What Can Wait',
          paragraphs: [
            "Before you go outside, look from your windows for downed trees, hanging branches and anything resting on the house or on wires. A fallen line can energize the ground around it, so stay out of that area completely until Hydro-Québec says the line is dead. Don't shake or knock ice off branches: it breaks more of them and brings ice and wood down on you.",
            "Call us right away for a tree or large limb on the house, a tree against a power line, a tree blocking your driveway or street, or a large broken branch hanging over a door or walkway. Scattered small branches, a tree that lost part of its canopy but still stands straight, bark damage, or a broken limb lying on the ground away from anything can wait a day or two for a scheduled visit. After a big storm, have the trees that are still standing checked too: cracked limbs and loosened roots from the same storm can fail later.",
          ],
        },
        {
          h2: 'How We Respond',
          paragraphs: [
            "We answer emergency calls day and night, and for dangerous situations a crew can often be on site within hours. We make the scene safe first, then take the weight off your roof or vehicle in controlled sections, and tarp damaged areas to keep the weather out until repairs can be made. Our spider lift lets us reach storm-damaged trees in tight backyards without heavy machinery on your lawn; see [hard-to-reach tree removal](/hard-to-reach-tree-removal).",
          ],
        },
        {
          h2: 'Insurance Claims',
          paragraphs: [
            "Home insurance often covers removal when a tree damages an insured structure such as your house, garage or fence; a tree that falls without hitting anything is often not covered. Policies vary, so call your insurer early, and keep every receipt: emergency tarping, temporary repairs and the removal itself. We document the job with photos and an itemized invoice you can submit with your claim.",
          ],
        },
        {
          h2: 'Ice Storms: Which Trees Break First',
          paragraphs: [
            "Freezing rain is the biggest storm risk for trees here. Silver maples break first: their wood is weak, and their wide branch angles catch and hold ice. Willows, poplars and Manitoba maples are close behind. Even red oaks and sugar maples can lose large limbs once ice builds past 15 to 20 millimetres, while cedars and spruces usually bend and shed the load. The western tip of the island, [Sainte-Anne-de-Bellevue](/sainte-anne-de-bellevue) and [Senneville](/senneville), sits between Lac des Deux Montagnes and Lac Saint-Louis and is especially exposed; long-time residents still remember 1998.",
          ],
        },
        {
          h2: 'Preventing the Next Emergency',
          paragraphs: [
            "Most trees that fail in storms gave warning signs first: dead limbs, cracks, fungus at the base, a new lean, or an ash killed by the emerald ash borer. Thinning the crown removes interior branches so there is less surface to collect ice, and taking out dead wood, weak forks with bark pinched between the stems, and narrow-angled limbs removes the parts most likely to fail. For a valuable tree close to the house, steel cables between the main limbs help it carry the load during an ice storm. An inspection or a [pruning](/tree-trimming) before ice storm season costs far less than an emergency call.",
          ],
        },
      ],
      faqs: [
        { q: 'Do you really answer at night and on weekends?', a: "Yes. Emergency calls to (438) 365-5410 are answered 24/7." },
        { q: 'A tree is on a power line. What should I do?', a: "Stay at least 10 metres away, keep others away, and call Hydro-Québec at 1 800 790-2424. Then call us: once Hydro-Québec has made the line safe, we can remove the tree." },
        { q: 'Does an emergency removal cost more?', a: "Yes. A 24/7 emergency response costs more than a planned removal. See our [tree removal cost guide](/tree-removal-cost) for planned-removal prices." },
        { q: 'Will my insurance pay for the removal?', a: "Often, when the tree damaged an insured structure like your house, garage or fence. Check with your insurer; we provide photos and an itemized invoice for your claim." },
        { q: 'How fast can you get here?', a: "For dangerous situations, a crew can often be on site within hours. Call (438) 365-5410 and we'll tell you when to expect us." },
        { q: 'Can storm damage wait until morning?', a: "Often, yes. If nothing is resting on the house, a wire, the driveway or a path people use, small branches, a broken limb lying away from everything, or a tree that lost part of its crown but stands straight can wait for a scheduled visit. If you're not sure, call and describe it." },
        { q: 'Should I knock the ice off my branches?', a: "No. Shaking or hitting iced branches breaks more of them and brings ice and wood down on you. Let it melt, and stay out from under heavily loaded trees." },
      ],
    },
    fr: {
      sections: [
        {
          h2: "Qu'est-ce qu'une urgence d'arbre ?",
          paragraphs: [
            "Un arbre ou une grosse branche sur votre maison, votre voiture ou votre entrée. Un arbre qui penche davantage après une tempête, avec le sol fissuré ou les racines soulevées à sa base. Un tronc fendu ou une branche suspendue au-dessus d'une porte, d'un trottoir ou de la rue. Des branches emmêlées dans les fils électriques. Si quelqu'un risque d'être blessé ou si les dommages peuvent s'aggraver d'ici le matin, appelez-nous au (438) 365-5410, jour et nuit.",
          ],
        },
        {
          h2: 'Quoi faire en attendant',
          paragraphs: [
            "Éloignez tout le monde de l'arbre et de tout ce qu'il touche. S'il a frappé la maison et que vous voyez des murs fissurés ou un plafond affaissé, ou que vous sentez une odeur de gaz, sortez et n'entrez plus dans les pièces sous l'arbre ou à côté. S'il y a des fils, restez à au moins 10 mètres, considérez chaque fil comme sous tension et appelez d'abord Hydro-Québec au 1 800 790-2424. Appelez le 911 si quelqu'un est blessé ou s'il y a un risque d'incendie. N'essayez pas de couper vous-même un arbre tombé : un tronc ou une branche sous tension peut se détendre avec une force mortelle. Une fois tout le monde en sécurité, prenez des photos et des vidéos sous plusieurs angles avant que quoi que ce soit soit déplacé; votre assureur les demandera.",
          ],
        },
        {
          h2: "Après une tempête : ce qui est urgent et ce qui peut attendre",
          paragraphs: [
            "Avant de sortir, regardez par les fenêtres : arbres tombés, branches suspendues, tout ce qui repose sur la maison ou sur des fils. Un fil tombé peut électrifier le sol autour de lui; restez complètement à l'écart de cette zone jusqu'à ce qu'Hydro-Québec confirme que la ligne est hors tension. Ne secouez pas et ne frappez pas les branches pour enlever la glace : vous en casserez d'autres et ferez tomber glace et bois sur vous.",
            "Appelez-nous tout de suite pour un arbre ou une grosse branche sur la maison, un arbre appuyé sur un fil électrique, un arbre qui bloque l'entrée ou la rue, ou une grosse branche cassée suspendue au-dessus d'une porte ou d'un passage. Des petites branches éparpillées, un arbre qui a perdu une partie de sa cime mais reste bien droit, de l'écorce abîmée ou une branche cassée au sol loin de tout peuvent attendre un jour ou deux une visite planifiée. Après une grosse tempête, faites aussi vérifier les arbres restés debout : des branches fissurées et des racines ébranlées par la même tempête peuvent céder plus tard.",
          ],
        },
        {
          h2: 'Comment nous intervenons',
          paragraphs: [
            "Nous répondons aux appels d'urgence jour et nuit et, pour les situations dangereuses, une équipe peut souvent être sur place en quelques heures. Nous sécurisons d'abord les lieux, puis nous retirons le poids de votre toit ou de votre véhicule par sections contrôlées et bâchons les zones endommagées pour les protéger des intempéries jusqu'aux réparations. Notre nacelle araignée nous permet d'atteindre les arbres endommagés dans les cours étroites sans machinerie lourde sur votre pelouse; voyez [l'abattage d'arbres difficiles d'accès](/hard-to-reach-tree-removal).",
          ],
        },
        {
          h2: "Réclamations d'assurance",
          paragraphs: [
            "L'assurance habitation couvre souvent l'enlèvement quand un arbre endommage une structure assurée comme la maison, le garage ou la clôture; un arbre qui tombe sans rien toucher n'est souvent pas couvert. Les polices varient, alors appelez votre assureur rapidement et gardez tous vos reçus : bâchage d'urgence, réparations temporaires et enlèvement de l'arbre. Nous documentons les travaux avec des photos et une facture détaillée à joindre à votre réclamation.",
          ],
        },
        {
          h2: 'Verglas : les arbres qui cassent en premier',
          paragraphs: [
            "La pluie verglaçante est le plus grand risque de tempête pour les arbres d'ici. Les érables argentés cassent en premier : leur bois est faible et leurs branches très ouvertes captent et retiennent la glace. Les saules, les peupliers et les érables à Giguère suivent de près. Même les chênes rouges et les érables à sucre peuvent perdre de grosses branches quand la glace dépasse 15 à 20 millimètres, alors que les cèdres et les épinettes plient et se délestent habituellement. La pointe ouest de l'île, [Sainte-Anne-de-Bellevue](/sainte-anne-de-bellevue) et [Senneville](/senneville), entre le lac des Deux Montagnes et le lac Saint-Louis, est particulièrement exposée; les résidents de longue date se souviennent encore de 1998.",
          ],
        },
        {
          h2: 'Prévenir la prochaine urgence',
          paragraphs: [
            "La plupart des arbres qui cèdent pendant une tempête montraient des signes avant-coureurs : branches mortes, fissures, champignons à la base, nouvelle inclinaison ou frêne tué par l'agrile. L'éclaircissage de la cime retire des branches intérieures pour laisser moins de surface où la glace s'accumule, et l'enlèvement du bois mort, des fourches faibles avec écorce incluse et des branches à angle étroit retire les parties les plus susceptibles de céder. Pour un arbre de valeur près de la maison, des câbles d'acier entre les branches principales (haubanage) l'aident à porter la charge pendant le verglas. Une inspection ou un [émondage](/tree-trimming) avant la saison du verglas coûte bien moins cher qu'un appel d'urgence.",
          ],
        },
      ],
      faqs: [
        { q: 'Répondez-vous vraiment la nuit et la fin de semaine ?', a: "Oui. Les appels d'urgence au (438) 365-5410 sont pris 24/7." },
        { q: 'Un arbre est tombé sur un fil électrique. Que faire ?', a: "Restez à au moins 10 mètres, éloignez les autres et appelez Hydro-Québec au 1 800 790-2424. Appelez-nous ensuite : une fois la ligne sécurisée par Hydro-Québec, nous pouvons enlever l'arbre." },
        { q: "Une intervention d'urgence coûte-t-elle plus cher ?", a: "Oui. Une intervention d'urgence 24/7 coûte plus cher qu'un abattage planifié. Voyez notre [guide des prix d'abattage](/tree-removal-cost) pour les prix d'un abattage planifié." },
        { q: "Mon assurance paiera-t-elle l'enlèvement ?", a: "Souvent, quand l'arbre a endommagé une structure assurée comme la maison, le garage ou la clôture. Vérifiez auprès de votre assureur; nous fournissons photos et facture détaillée pour votre réclamation." },
        { q: 'En combien de temps pouvez-vous arriver ?', a: "Pour les situations dangereuses, une équipe peut souvent être sur place en quelques heures. Appelez le (438) 365-5410 et nous vous dirons quand nous attendre." },
        { q: 'Les dommages de tempête peuvent-ils attendre au matin ?', a: "Souvent, oui. Si rien ne repose sur la maison, un fil, l'entrée ou un passage, les petites branches, une branche cassée au sol loin de tout ou un arbre qui a perdu une partie de sa cime mais reste droit peuvent attendre une visite planifiée. En cas de doute, appelez-nous et décrivez la situation." },
        { q: 'Dois-je enlever la glace de mes branches ?', a: "Non. Secouer ou frapper des branches glacées en casse d'autres et fait tomber glace et bois sur vous. Laissez fondre et restez à l'écart des arbres très chargés." },
      ],
    },
  },
};
