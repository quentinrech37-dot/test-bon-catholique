// apotre.js

// ---------- Profils d'apôtres (archétypes simplifiés) ----------

const apostlesProfiles = {
  pierre: {
    name: "Saint Pierre",
    title: "Le fougueux pasteur",
    text:
      "Vous ressemblez à Pierre : spontané, parfois impulsif, capable de beaux élans autant que de belles gamelles…\n\n" +
      "Vous avez un vrai tempérament de leader : vous aimez prendre la parole, décider, entraîner les autres. " +
      "Votre défi : laisser le Christ purifier votre zèle, apprendre l'humilité et la fidélité dans la durée.\n\n" +
      "Verset possible : « Seigneur, tu sais tout, tu sais bien que je t'aime. » (Jn 21, 17)"
  },
  jean: {
    name: "Saint Jean",
    title: "Le disciple bien-aimé",
    text:
      "Vous ressemblez à Jean : contemplatif, sensible, attaché au cœur du Christ.\n\n" +
      "Vous êtes à l'aise dans la prière silencieuse, l'écoute, la profondeur. Vous aimez l'intimité avec Dieu " +
      "et les relations personnelles authentiques. Votre défi : ne pas vous enfermer dans un cocon spirituel, " +
      "mais laisser cet amour se traduire en actes concrets et en mission.\n\n" +
      "Verset possible : « Il posa sa tête sur la poitrine de Jésus. » (cf. Jn 13, 25)"
  },
  thomas: {
    name: "Saint Thomas",
    title: "Le réaliste qui veut voir clair",
    text:
      "Vous ressemblez à Thomas : rationnel, cartésien, vous avez besoin de comprendre pour adhérer.\n\n" +
      "Vous posez volontiers des questions, vous n'aimez pas les formules toutes faites. La foi n'est pas pour vous " +
      "un vague sentiment, mais une adhésion réfléchie. Votre défi : accepter que Dieu dépasse toujours vos catégories " +
      "et que la confiance va parfois plus loin que la preuve.\n\n" +
      "Verset possible : « Mon Seigneur et mon Dieu ! » (Jn 20, 28)"
  },
  andre: {
    name: "Saint André",
    title: "Le discret qui amène les autres à Jésus",
    text:
      "Vous ressemblez à André : discret, fraternel, vous n'êtes pas forcément sur le devant de la scène, " +
      "mais vous savez relier les personnes au Christ.\n\n" +
      "Vous aimez le service, les petites choses fidèles, les relations de proximité. " +
      "Votre défi : ne pas vous dévaloriser, et reconnaître combien votre manière tranquille de servir construit l'Église.\n\n" +
      "Verset possible : « André, le frère de Simon-Pierre, était l’un des deux qui avaient entendu les paroles de Jean " +
      "et qui avaient suivi Jésus. » (Jn 1, 40)"
  },
  jacques: {
    name: "Saint Jacques le Majeur",
    title: "Le zélé de la cohérence",
    text:
      "Vous ressemblez à Jacques : exigeant pour vous-même, soucieux de cohérence, parfois un peu tranchant.\n\n" +
      "La justice, la clarté de la doctrine, la fidélité au Christ comptent beaucoup pour vous. " +
      "Votre défi : laisser la miséricorde adoucir votre zèle, pour que la vérité soit toujours portée par la charité.\n\n" +
      "Verset possible : « Montre-moi ta foi sans les œuvres, moi c’est par mes œuvres que je te montrerai ma foi. » (Jc 2, 18)"
  },
  matthieu: {
    name: "Saint Matthieu",
    title: "Le converti organisé",
    text:
      "Vous ressemblez à Matthieu : vous savez ce que c’est que de changer de vie, de réorienter votre histoire.\n\n" +
      "Vous avez une vraie capacité d'organisation, de gestion, de structuration (au service d’un projet, d’une paroisse, d’une œuvre). " +
      "Votre défi : ne pas tout contrôler et accepter que la grâce passe aussi par l’imprévu.\n\n" +
      "Verset possible : « Jésus lui dit : “Suis-moi.” Et, se levant, Matthieu le suivit. » (Mt 9, 9)"
  }
};

// ---------- Questions : chaque réponse pondère plusieurs profils ----------

const questionsApotres = [
  {
    text: "Quand il faut prendre une décision risquée (foi, projet, engagement paroissial), vous avez plutôt tendance à…",
    answers: [
      {
        label: "Foncer, quitte à me tromper, mais au moins on avance.",
        weights: { pierre: 2, jacques: 1 }
      },
      {
        label: "Prendre un temps de prière silencieuse avant de décider.",
        weights: { jean: 2, andre: 1 }
      },
      {
        label: "Lister les arguments, demander des avis, peser le pour et le contre.",
        weights: { thomas: 2, matthieu: 1 }
      },
      {
        label: "Voir comment on peut organiser les choses concrètement, qui fait quoi, quand, comment.",
        weights: { matthieu: 2, andre: 1 }
      }
    ]
  },
  {
    text: "Dans un groupe ou une aumônerie, on vous retrouvera le plus souvent…",
    answers: [
      {
        label: "En train de proposer des idées, d’animer, de parler.",
        weights: { pierre: 2, jacques: 1 }
      },
      {
        label: "À l’écoute des uns et des autres, dans les discussions à deux.",
        weights: { jean: 2, andre: 1 }
      },
      {
        label: "À veiller à ce que ce qui est dit soit cohérent avec la foi de l’Église.",
        weights: { jacques: 2, thomas: 1 }
      },
      {
        label: "À gérer l’intendance : plannings, budget, inscriptions, logistique.",
        weights: { matthieu: 2, andre: 1 }
      }
    ]
  },
  {
    text: "Face à une période de doute ou de sécheresse spirituelle, votre réflexe le plus spontané est…",
    answers: [
      {
        label: "En parler franchement à un prêtre ou à un ami de confiance.",
        weights: { pierre: 2, jean: 1 }
      },
      {
        label: "Revenir à la prière silencieuse, à l’adoration, à l’Évangile.",
        weights: { jean: 2 }
      },
      {
        label: "Chercher, lire, débattre, creuser intellectuellement la question.",
        weights: { thomas: 2, jacques: 1 }
      },
      {
        label: "Continuer à servir concrètement, en attendant que ça passe.",
        weights: { andre: 2, matthieu: 1 }
      }
    ]
  },
  {
    text: "Votre rapport aux règles et à la Tradition de l’Église est plutôt…",
    answers: [
      {
        label: "Les règles sont importantes et il faut les défendre clairement.",
        weights: { jacques: 2, pierre: 1 }
      },
      {
        label: "Elles sont là pour nous conduire à l’amour : l’Esprit compte plus que la lettre.",
        weights: { jean: 2 }
      },
      {
        label: "Elles structurent la vie de la communauté : sans cadre, tout se délite.",
        weights: { matthieu: 2, andre: 1 }
      },
      {
        label: "Je veux comprendre le pourquoi avant d’adhérer, sinon j’ai du mal.",
        weights: { thomas: 2 }
      }
    ]
  },
  {
    text: "Devant quelqu’un en marge de l’Église (loin, blessé, en rupture), vous êtes plutôt du genre à…",
    answers: [
      {
        label: "Aller le chercher en direct, lui proposer une parole claire sur le Christ.",
        weights: { pierre: 2, jacques: 1 }
      },
      {
        label: "L’accueillir sans le brusquer, créer un climat de confiance.",
        weights: { andre: 2, jean: 1 }
      },
      {
        label: "Écouter longuement son histoire, avant d’oser dire quelque chose de la foi.",
        weights: { jean: 2, thomas: 1 }
      },
      {
        label: "Chercher comment adapter concrètement la pastorale, les horaires, les moyens, pour qu’il puisse revenir.",
        weights: { matthieu: 2, andre: 1 }
      }
    ]
  },
  {
    text: "Votre manière de prier qui vous parle le plus…",
    answers: [
      {
        label: "Les grandes liturgies, la louange, les moments forts de communauté.",
        weights: { pierre: 2, jacques: 1 }
      },
      {
        label: "L’adoration, le silence, la lectio divina, le cœur à cœur.",
        weights: { jean: 2 }
      },
      {
        label: "Une prière nourrie d’intelligence de la foi : études bibliques, théologie, catéchisme.",
        weights: { thomas: 2, jacques: 1 }
      },
      {
        label: "Le service concret vécu comme prière : donner du temps, se rendre utile.",
        weights: { andre: 2, matthieu: 1 }
      }
    ]
  },
  {
    text: "Quand un conflit éclate dans un groupe, vous avez tendance à…",
    answers: [
      {
        label: "Intervenir frontalement pour remettre les choses au clair.",
        weights: { pierre: 2, jacques: 1 }
      },
      {
        label: "Rester proche des personnes blessées et les écouter.",
        weights: { jean: 2, andre: 1 }
      },
      {
        label: "Essayer de comprendre les causes profondes et de trouver une solution rationnelle.",
        weights: { thomas: 2 }
      },
      {
        label: "Chercher un compromis réaliste que tout le monde peut accepter.",
        weights: { matthieu: 2, andre: 1 }
      }
    ]
  },
  {
    text: "Si vous aviez une journée libre idéale pour nourrir votre foi, vous la passeriez plutôt…",
    answers: [
      {
        label: "En pèlerinage ou en grande marche avec d’autres, avec un beau temps de messe au milieu.",
        weights: { jacques: 2, pierre: 1 }
      },
      {
        label: "En retraite silencieuse dans un monastère, avec beaucoup de temps d’oraison.",
        weights: { jean: 2 }
      },
      {
        label: "À lire, étudier, prendre des notes pour mieux comprendre la foi.",
        weights: { thomas: 2 }
      },
      {
        label: "À servir une œuvre concrète (resto du cœur, maraude, chantier paroissial).",
        weights: { andre: 2, matthieu: 1 }
      }
    ]
  },
  {
    text: "Devant un projet missionnaire un peu fou proposé par votre paroisse, vous réagissez…",
    answers: [
      {
        label: "« Allons-y, le Seigneur pourvoira ! »",
        weights: { pierre: 2 }
      },
      {
        label: "« Comment s’assurer qu’on reste fidèle à l’Évangile dans ce projet ? »",
        weights: { jacques: 2, thomas: 1 }
      },
      {
        label: "« Qui sont les personnes concrètes qu’on va rejoindre et aimer ? »",
        weights: { andre: 2, jean: 1 }
      },
      {
        label: "« Ok, mais il faut un budget, un planning, des rôles clairs. »",
        weights: { matthieu: 2 }
      }
    ]
  },
  {
    text: "On dit de vous que vous êtes plutôt…",
    answers: [
      {
        label: "Cash, parfois un peu brut de décoffrage.",
        weights: { pierre: 2, jacques: 1 }
      },
      {
        label: "Doux, attentif, sensible aux personnes.",
        weights: { jean: 2, andre: 1 }
      },
      {
        label: "Cérébral, aimant les débats et les nuances.",
        weights: { thomas: 2 }
      },
      {
        label: "Organisé, fiable, sur qui on peut compter pour la logistique.",
        weights: { matthieu: 2, andre: 1 }
      }
    ]
  },
  {
    text: "Dans votre vie, la notion de « conversion » évoque surtout…",
    answers: [
      {
        label: "Un retournement parfois brutal, une décision forte pour le Christ.",
        weights: { pierre: 2, matthieu: 1 }
      },
      {
        label: "Une histoire d’amour qui approfondit peu à peu le lien avec Jésus.",
        weights: { jean: 2 }
      },
      {
        label: "Un cheminement long, avec des questions, des essais, des remises en cause.",
        weights: { thomas: 2 }
      },
      {
        label: "Des choix concrets qui réorientent ma manière de travailler, de consommer, de m’engager.",
        weights: { matthieu: 2, jacques: 1 }
      }
    ]
  },
  {
    text: "Quand vous voyez des injustices dans l’Église ou dans la société, vous êtes plutôt porté à…",
    answers: [
      {
        label: "Réagir fort, dénoncer, prendre la parole.",
        weights: { jacques: 2, pierre: 1 }
      },
      {
        label: "Prier pour les personnes concernées et porter cela dans le secret.",
        weights: { jean: 2 }
      },
      {
        label: "Comprendre les mécanismes, les causes, les systèmes qui produisent ces injustices.",
        weights: { thomas: 2 }
      },
      {
        label: "Chercher une réponse concrète (asso, projet, réseau) pour agir à mon échelle.",
        weights: { matthieu: 2, andre: 1 }
      }
    ]
  },
  {
    text: "Si vous deviez résumer ce que vous voudriez le plus entendre du Christ à la fin de votre vie…",
    answers: [
      {
        label: "« Tu as combattu le bon combat, tu as gardé la foi. »",
        weights: { jacques: 2, pierre: 1 }
      },
      {
        label: "« C’est bien, bon et fidèle serviteur, tu as beaucoup aimé. »",
        weights: { jean: 2, andre: 1 }
      },
      {
        label: "« Tu as cherché la vérité et tu t’es laissé surprendre par ma miséricorde. »",
        weights: { thomas: 2 }
      },
      {
        label: "« Tu as mis tes talents et ton histoire au service de mon Royaume. »",
        weights: { matthieu: 2 }
      }
    ]
  },

  // ---------- Nouvelles questions (13 à 30) ----------

  {
    text: "Quand on vous félicite pour un service rendu à l’Église, vous…",
    answers: [
      {
        label: "Répondez spontanément, un peu gêné mais content : « Merci, Deo gratias ! »",
        weights: { pierre: 2, andre: 1 }
      },
      {
        label: "Minimisez et ramenez plutôt à ce que le Seigneur a fait.",
        weights: { jean: 2 }
      },
      {
        label: "Analysez intérieurement ce qui a bien fonctionné pour refaire mieux la prochaine fois.",
        weights: { matthieu: 2, thomas: 1 }
      },
      {
        label: "Vous questionnez surtout sur votre sincérité et vos motivations.",
        weights: { jacques: 2 }
      }
    ]
  },
  {
    text: "Sur les réseaux sociaux, votre manière d’évangéliser serait plutôt…",
    answers: [
      {
        label: "Des posts assez francs, clairs, assumés sur la foi.",
        weights: { pierre: 2, jacques: 1 }
      },
      {
        label: "Des partages de textes spirituels, de belles images, de citations de saints.",
        weights: { jean: 2 }
      },
      {
        label: "Des threads d’explication, des liens vers des ressources solides.",
        weights: { thomas: 2 }
      },
      {
        label: "Des annonces concrètes : missions, maraudes, événements, collectes.",
        weights: { matthieu: 2, andre: 1 }
      }
    ]
  },
  {
    text: "Votre rapport au temps et à l’organisation est plutôt…",
    answers: [
      {
        label: "Je vis beaucoup à l’intuition, au jour le jour.",
        weights: { pierre: 2 }
      },
      {
        label: "Je structure un minimum pour dégager de vrais temps de prière.",
        weights: { jean: 2, andre: 1 }
      },
      {
        label: "Je planifie beaucoup, j’aime les agendas, les to-do listes.",
        weights: { matthieu: 2 }
      },
      {
        label: "Je gère surtout en fonction des priorités intellectuelles ou des échéances.",
        weights: { thomas: 2, jacques: 1 }
      }
    ]
  },
  {
    text: "Dans la liturgie, le service qui vous attirerait le plus…",
    answers: [
      {
        label: "Lecteur, prédication, prise de parole.",
        weights: { pierre: 2, jacques: 1 }
      },
      {
        label: "Chorale, chant, animation de la prière.",
        weights: { jean: 2 }
      },
      {
        label: "Catéchèse, formation, accompagnement intellectuel.",
        weights: { thomas: 2 }
      },
      {
        label: "Accueil, service de sacristie, logistique discrète.",
        weights: { andre: 2, matthieu: 1 }
      }
    ]
  },
  {
    text: "Quand vous réalisez que vous vous êtes clairement trompé…",
    answers: [
      {
        label: "Vous pouvez vous emporter, mais vous revenez ensuite demander pardon.",
        weights: { pierre: 2 }
      },
      {
        label: "Vous portez cela dans la prière et cherchez la réconciliation en douceur.",
        weights: { jean: 2, andre: 1 }
      },
      {
        label: "Vous analysez en détail ce qui vous a conduit à l’erreur.",
        weights: { thomas: 2 }
      },
      {
        label: "Vous prenez des résolutions concrètes pour ne plus reproduire la même faute.",
        weights: { jacques: 2, matthieu: 1 }
      }
    ]
  },
  {
    text: "Face aux questions d’argent et de biens matériels…",
    answers: [
      {
        label: "Vous pouvez être généreux de manière impulsive.",
        weights: { pierre: 2 }
      },
      {
        label: "Vous voyez surtout l’occasion d’aider les plus pauvres.",
        weights: { andre: 2, jean: 1 }
      },
      {
        label: "Vous réfléchissez à l’usage juste, à la doctrine sociale de l’Église.",
        weights: { thomas: 2, jacques: 1 }
      },
      {
        label: "Vous aimez que les ressources soient bien gérées pour servir la mission.",
        weights: { matthieu: 2 }
      }
    ]
  },
  {
    text: "Après une homélie qui vous a profondément déplu, vous…",
    answers: [
      {
        label: "Râlez franchement, éventuellement à voix haute en sortant.",
        weights: { pierre: 2 }
      },
      {
        label: "Portez cela dans la prière et essayez de garder la paix.",
        weights: { jean: 2 }
      },
      {
        label: "Reprenez le texte du Magistère ou de la Bible pour vérifier ce qui vous a gêné.",
        weights: { thomas: 2, jacques: 1 }
      },
      {
        label: "Cherchez éventuellement à en parler calmement avec le prêtre, dans un cadre posé.",
        weights: { andre: 2, matthieu: 1 }
      }
    ]
  },
  {
    text: "Pour vous ressourcer spirituellement, vous avez besoin avant tout…",
    answers: [
      {
        label: "D’une communauté vivante, de fraternité, d’amitiés fortes.",
        weights: { pierre: 2, andre: 1 }
      },
      {
        label: "De silence, de nature, d’un coin de chapelle.",
        weights: { jean: 2 }
      },
      {
        label: "D’un bon livre, d’enseignements nourrissants.",
        weights: { thomas: 2 }
      },
      {
        label: "D’un équilibre entre prière et action concrète.",
        weights: { matthieu: 2, jacques: 1 }
      }
    ]
  },
  {
    text: "Quand vous apprenez une nouvelle compétence pour la mission (musique, catéchèse, outils web…), vous…",
    answers: [
      {
        label: "Vous lancez et apprenez en faisant, quitte à improviser.",
        weights: { pierre: 2 }
      },
      {
        label: "Cherchez un mentor, quelqu’un qui vous accompagne.",
        weights: { andre: 2, jean: 1 }
      },
      {
        label: "Suivez des tutos, des cours, lisez la doc pour bien comprendre.",
        weights: { thomas: 2 }
      },
      {
        label: "Structurez le projet, planifiez les étapes d’apprentissage.",
        weights: { matthieu: 2, jacques: 1 }
      }
    ]
  },
  {
    text: "Votre rapport au sacrement de réconciliation est plutôt…",
    answers: [
      {
        label: "J’y vais quand quelque chose me travaille fort.",
        weights: { pierre: 2 }
      },
      {
        label: "C’est un lieu privilégié de miséricorde que je fréquente volontiers.",
        weights: { jean: 2 }
      },
      {
        label: "J’aime comprendre la dimension théologique et morale de ce sacrement.",
        weights: { thomas: 2, jacques: 1 }
      },
      {
        label: "Je vois aussi comment l’intégrer dans un rythme de vie structuré.",
        weights: { matthieu: 2, andre: 1 }
      }
    ]
  },
  {
    text: "Dans une assemblée diocésaine ou un synode local, vous seriez plutôt…",
    answers: [
      {
        label: "Une voix forte qui exprime clairement ce que beaucoup pensent tout bas.",
        weights: { pierre: 2, jacques: 1 }
      },
      {
        label: "Celui/celle qui écoute, relit et cherche les mouvements de l’Esprit.",
        weights: { jean: 2 }
      },
      {
        label: "Celui/celle qui précise les concepts, les formulations, les nuances.",
        weights: { thomas: 2 }
      },
      {
        label: "Celui/celle qui veille au concret : calendrier, moyens, réalisme des décisions.",
        weights: { matthieu: 2, andre: 1 }
      }
    ]
  },
  {
    text: "Lors d’un grand pèlerinage, on vous trouverait le plus volontiers…",
    answers: [
      {
        label: "En tête du groupe, à donner le rythme et encourager.",
        weights: { pierre: 2, jacques: 1 }
      },
      {
        label: "Auprès des personnes fatiguées, à rester avec le dernier.",
        weights: { andre: 2, jean: 1 }
      },
      {
        label: "À discuter en profondeur avec ceux qui se posent des questions de foi.",
        weights: { thomas: 2 }
      },
      {
        label: "À gérer les inscriptions, les hébergements, les repas.",
        weights: { matthieu: 2 }
      }
    ]
  },
  {
    text: "Face à un ami très proche qui traverse une grosse crise morale ou spirituelle, vous…",
    answers: [
      {
        label: "Lui parlez franchement, quitte à lui secouer un peu les puces.",
        weights: { pierre: 2, jacques: 1 }
      },
      {
        label: "Restez présent, disponible, surtout dans l’écoute et la prière.",
        weights: { jean: 2, andre: 1 }
      },
      {
        label: "Cherchez des réponses, des lectures, des arguments pour l’aider à y voir clair.",
        weights: { thomas: 2 }
      },
      {
        label: "Proposez un accompagnement concret : groupe, retraite, démarche de foi.",
        weights: { matthieu: 2 }
      }
    ]
  },
  {
    text: "Quand quelqu’un critique l’Église de manière injuste devant vous, vous…",
    answers: [
      {
        label: "Réagissez assez vivement pour défendre la foi.",
        weights: { pierre: 2, jacques: 1 }
      },
      {
        label: "Essayez de comprendre d’abord son histoire et ses blessures.",
        weights: { jean: 2, andre: 1 }
      },
      {
        label: "Expliquez patiemment ce que dit réellement l’Église.",
        weights: { thomas: 2 }
      },
      {
        label: "Invitez à un événement concret pour découvrir l’Église « de l’intérieur ».",
        weights: { matthieu: 2 }
      }
    ]
  },
  {
    text: "Dans un groupe de jeunes, la mission qu’on vous donnerait naturellement serait…",
    answers: [
      {
        label: "Responsable d’équipe, animateur principal.",
        weights: { pierre: 2 }
      },
      {
        label: "Référent accueil/écoute, attention aux plus fragiles.",
        weights: { andre: 2, jean: 1 }
      },
      {
        label: "Responsable enseignement/formation.",
        weights: { thomas: 2, jacques: 1 }
      },
      {
        label: "Responsable logistique, trésorerie, organisation.",
        weights: { matthieu: 2 }
      }
    ]
  },
  {
    text: "Parmi les grandes figures spirituelles (hors Jésus), celle qui vous attire le plus serait plutôt…",
    answers: [
      {
        label: "Un grand prédicateur ou évangélisateur (Dominique, François Xavier…).",
        weights: { pierre: 2, jacques: 1 }
      },
      {
        label: "Un contemplatif ou mystique (Jean de la Croix, Thérèse d’Avila…).",
        weights: { jean: 2 }
      },
      {
        label: "Un docteur de l’Église, théologien, intellectuel.",
        weights: { thomas: 2 }
      },
      {
        label: "Un fondateur/fondatrice très concret(e), organisateur d’œuvres.",
        weights: { matthieu: 2, andre: 1 }
      }
    ]
  },
  {
    text: "Devant un passage difficile de l’Écriture que vous ne comprenez pas…",
    answers: [
      {
        label: "Vous pouvez être un peu choqué, mais vous continuez à faire confiance.",
        weights: { pierre: 2 }
      },
      {
        label: "Vous le méditez longuement, cherchant ce que Dieu veut vous dire.",
        weights: { jean: 2 }
      },
      {
        label: "Vous cherchez des commentaires, la Tradition, les exégètes.",
        weights: { thomas: 2, jacques: 1 }
      },
      {
        label: "Vous regardez comment ce texte se vit concrètement dans la vie de l’Église.",
        weights: { matthieu: 2, andre: 1 }
      }
    ]
  },
  {
    text: "Si vous deviez choisir ce que vous voulez le plus laisser comme trace dans l’Église…",
    answers: [
      {
        label: "Un témoignage de foi courageux, qui aura entraîné d’autres à suivre le Christ.",
        weights: { pierre: 2, jacques: 1 }
      },
      {
        label: "Une trace d’amour, de miséricorde, de relations profondes et pacifiées.",
        weights: { jean: 2, andre: 1 }
      },
      {
        label: "Une parole de vérité, une lumière pour l’intelligence de la foi.",
        weights: { thomas: 2 }
      },
      {
        label: "Une œuvre durable (groupe, projet, institution) mise au service de l’Évangile.",
        weights: { matthieu: 2 }
      }
    ]
  }
];

// ---------- État du test ----------

let currentQuestionIndex = 0;
const scores = {
  pierre: 0,
  jean: 0,
  thomas: 0,
  andre: 0,
  jacques: 0,
  matthieu: 0
};

const questionTextApEl = document.getElementById("question-text-apotre");
const progressApEl = document.getElementById("progress-apotre");
const answersApEl = document.getElementById("answers-apotre");
const boxApEl = document.getElementById("question-box-apotre");
const resultApEl = document.getElementById("resultat-apotre");
const profilApEl = document.getElementById("profil-apotre");
const detailsApEl = document.getElementById("details-apotre");

// ---------- Affichage des questions ----------

function renderQuestion() {
  if (currentQuestionIndex >= questionsApotres.length) {
    showResultApotre();
    return;
  }

  const q = questionsApotres[currentQuestionIndex];
  questionTextApEl.textContent = q.text;
  progressApEl.textContent =
    "Question " + (currentQuestionIndex + 1) + " sur " + questionsApotres.length;

  // Nettoyer les anciennes réponses
  answersApEl.innerHTML = "";

  q.answers.forEach((ans, idx) => {
    const btn = document.createElement("button");
    btn.textContent = ans.label;
    btn.addEventListener("click", () => handleAnswer(idx));
    answersApEl.appendChild(btn);
  });
}

function handleAnswer(answerIndex) {
  const q = questionsApotres[currentQuestionIndex];
  const ans = q.answers[answerIndex];

  // Ajouter les poids au score de chaque apôtre concerné
  for (const key in ans.weights) {
    if (Object.prototype.hasOwnProperty.call(ans.weights, key)) {
      scores[key] += ans.weights[key];
    }
  }

  currentQuestionIndex++;
  renderQuestion();
}

// ---------- Résultat ----------

function showResultApotre() {
  boxApEl.style.display = "none";
  resultApEl.style.display = "block";

  // Trouver le score maximum
  let maxScore = -Infinity;
  for (const key in scores) {
    if (scores[key] > maxScore) {
      maxScore = scores[key];
    }
  }

  // Récupérer tous les apôtres ayant ce score max (en cas d'ex æquo)
  const bestKeys = Object.keys(scores).filter((k) => scores[k] === maxScore);

  const primaryKey = bestKeys[0];
  const profile = apostlesProfiles[primaryKey];

  if (!profile) {
    profilApEl.textContent = "Profil indéterminé";
    detailsApEl.textContent =
      "Les réponses ne permettent pas de dégager un profil clair. " +
      "Vous êtes peut-être un mélange harmonieux de plusieurs apôtres !";
    return;
  }

  if (bestKeys.length === 1) {
    profilApEl.textContent = profile.name + " – " + profile.title;
  } else {
    const names = bestKeys
      .map((k) => apostlesProfiles[k]?.name || k)
      .filter(Boolean);
    profilApEl.textContent = names.join(" / ") + " – profils combinés";
  }

  let details = profile.text;

  if (bestKeys.length > 1) {
    const secondary = bestKeys
      .slice(1)
      .map((k) => apostlesProfiles[k]?.name)
      .filter(Boolean);
    if (secondary.length > 0) {
      details += "\n\nVous présentez aussi des traits de : " + secondary.join(", ") + ".";
    }
  }

  detailsApEl.textContent = details;
}

// Lancer le test
renderQuestion();
