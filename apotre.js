// apotre.js

// ---------- Profils d'apôtres (archétypes simplifiés) ----------
// On propose 12 profils symboliques : ce sont des caricatures bienveillantes,
// pas des diagnostics spirituels réels.

const apostlesProfiles = {
  pierre: {
    name: "Saint Pierre",
    title: "Le fougueux pasteur",
    text:
      "Vous ressemblez à Pierre : spontané, capable de magnifiques élans autant que de belles gamelles…\n\n" +
      "Vous avez un vrai tempérament de leader : vous aimez prendre la parole, décider, entraîner les autres. " +
      "Votre défi : laisser le Christ purifier votre zèle, apprendre l’humilité et la fidélité dans la durée.\n\n" +
      "Verset possible : « Seigneur, tu sais tout, tu sais bien que je t’aime. » (Jn 21, 17)"
  },
  jean: {
    name: "Saint Jean",
    title: "Le disciple bien-aimé",
    text:
      "Vous ressemblez à Jean : contemplatif, sensible, attaché au cœur du Christ.\n\n" +
      "Vous êtes à l’aise dans la prière silencieuse, l’écoute, la profondeur. Vous aimez l’intimité avec Dieu " +
      "et les relations personnelles authentiques. Votre défi : ne pas vous enfermer dans un cocon spirituel, " +
      "mais laisser cet amour se traduire en actes concrets et en mission.\n\n" +
      "Verset possible : « Il posa sa tête sur la poitrine de Jésus. » (cf. Jn 13, 25)"
  },
  jacquesMajeur: {
    name: "Saint Jacques le Majeur",
    title: "Le zélé pèlerin",
    text:
      "Vous ressemblez à Jacques le Majeur : ardent, exigeant, prêt à marcher loin pour le Christ.\n\n" +
      "Vous aimez les grands élans, les engagements forts, les pèlerinages, les défis. " +
      "Votre défi : laisser la charité adoucir votre ardeur pour que votre zèle ne blesse pas.\n\n" +
      "Verset possible : « Ils laissèrent aussitôt la barque et leur père, et le suivirent. » (Mt 4, 22)"
  },
  andre: {
    name: "Saint André",
    title: "Le discret qui amène les autres à Jésus",
    text:
      "Vous ressemblez à André : discret, fraternel, rarement sur le devant de la scène, " +
      "mais très bon pour relier les personnes au Christ.\n\n" +
      "Vous aimez le service humble, les petites choses fidèles, les relations de proximité. " +
      "Votre défi : ne pas vous dévaloriser, et reconnaître combien votre manière tranquille de servir construit l’Église.\n\n" +
      "Verset possible : « André, le frère de Simon-Pierre, était l’un des deux qui avaient entendu les paroles de Jean " +
      "et qui avaient suivi Jésus. » (Jn 1, 40)"
  },
  thomas: {
    name: "Saint Thomas",
    title: "Le réaliste qui veut voir clair",
    text:
      "Vous ressemblez à Thomas : rationnel, cartésien, vous avez besoin de comprendre pour adhérer.\n\n" +
      "Vous posez volontiers des questions, vous n’aimez pas les formules toutes faites. La foi n’est pas pour vous " +
      "un vague sentiment, mais une adhésion réfléchie. Votre défi : accepter que Dieu dépasse vos catégories " +
      "et que la confiance va parfois plus loin que la preuve.\n\n" +
      "Verset possible : « Mon Seigneur et mon Dieu ! » (Jn 20, 28)"
  },
  matthieu: {
    name: "Saint Matthieu",
    title: "Le converti organisé",
    text:
      "Vous ressemblez à Matthieu : vous savez ce que c’est que de changer de vie, de réorienter votre histoire.\n\n" +
      "Vous avez une vraie capacité d’organisation, de gestion, de structuration (au service d’un projet, d’une paroisse, d’une œuvre). " +
      "Votre défi : ne pas tout contrôler et accepter que la grâce passe aussi par l’imprévu.\n\n" +
      "Verset possible : « Jésus lui dit : “Suis-moi.” Et, se levant, Matthieu le suivit. » (Mt 9, 9)"
  },
  philippe: {
    name: "Saint Philippe",
    title: "Le médiateur pragmatique",
    text:
      "Vous ressemblez à Philippe : vous aimez poser des questions concrètes, faire le lien entre ceux qui cherchent et Jésus.\n\n" +
      "Vous êtes à l’aise à la frontière entre l’Église et le monde, vous facilitez les rencontres. " +
      "Votre défi : ne pas rester seulement dans le calcul humain, mais laisser la foi élargir vos horizons.\n\n" +
      "Verset possible : « Seigneur, montre-nous le Père ; cela nous suffit. » (Jn 14, 8)"
  },
  barthelemy: {
    name: "Saint Barthélemy",
    title: "Le franc amoureux de la vérité",
    text:
      "Vous ressemblez à Barthélemy (Nathanaël) : franc, parfois un peu cash, mais profondément droit.\n\n" +
      "Vous n’aimez pas l’hypocrisie, vous cherchez la vérité, même si vos premières réactions peuvent être abruptes. " +
      "Votre défi : laisser la rencontre avec le Christ purifier vos jugements rapides.\n\n" +
      "Verset possible : « Peut-il sortir quelque chose de bon de Nazareth ? » (Jn 1, 46)"
  },
  jacquesMineur: {
    name: "Saint Jacques le Mineur",
    title: "Le pasteur solide et fidèle",
    text:
      "Vous ressemblez à Jacques le Mineur : stable, enraciné, soucieux de cohérence dans la durée.\n\n" +
      "Vous tenez la maison, vous aimez que l’Église soit structurée, fidèle, solide. " +
      "Votre défi : éviter de devenir rigide et laisser la miséricorde habiter vos exigences.\n\n" +
      "Verset possible : « Montre-moi ta foi sans les œuvres, moi, c’est par mes œuvres que je te montrerai ma foi. » (Jc 2, 18)"
  },
  jude: {
    name: "Saint Jude",
    title: "L’apôtre des causes désespérées",
    text:
      "Vous ressemblez à Jude : vous gardez l’espérance même quand tout semble perdu.\n\n" +
      "Vous êtes souvent celui ou celle qu’on vient voir quand une situation paraît sans issue. " +
      "Votre défi : ne pas porter tout seul le poids du monde et confier vraiment à Dieu ce que vous ne maîtrisez pas.\n\n" +
      "Verset possible : « Gardez-vous dans l’amour de Dieu, en attendant la miséricorde de notre Seigneur Jésus Christ. » (Jude 21)"
  },
  simonZelote: {
    name: "Saint Simon le Zélote",
    title: "Le passionné de la justice",
    text:
      "Vous ressemblez à Simon le Zélote : passionné, engagé, parfois un peu militant.\n\n" +
      "Vous ne supportez pas l’injustice, vous aimez les causes, l’action, le combat pour le bien. " +
      "Votre défi : laisser le Christ convertir votre zèle pour qu’il reste au service de l’amour, et non de la violence ou de la rancœur.\n\n" +
      "Verset possible : « Heureux ceux qui ont faim et soif de la justice. » (Mt 5, 6)"
  },
  judas: {
    name: "Judas Iscariote",
    title: "Le profil en danger",
    text:
      "Certaines de vos réponses évoquent des traits que la tradition attribue à Judas : distance intérieure, " +
      "cynisme, importance excessive donnée à l’argent ou à l’image, tentation du double jeu.\n\n" +
      "Cela ne veut évidemment pas dire que « vous êtes Judas » : il y a en chacun de nous une part de fragilité " +
      "qui peut trahir l’amour si elle n’est pas confiée au Christ.\n\n" +
      "Si ce profil ressort souvent, le test vous invite à une vraie relecture : parler à Dieu franchement, " +
      "éventuellement à un prêtre, et vous laisser rejoindre par la miséricorde au lieu de rester à distance."
  }
};

// ---------- Questions : chaque réponse pondère plusieurs profils ----------
// On reste à 20 questions pour ne pas épuiser l’utilisateur, mais avec un test
// déjà bien fourni.

const questionsApotres = [
  {
    text: "Quand il faut prendre une décision risquée (foi, projet, engagement paroissial), vous avez plutôt tendance à…",
    answers: [
      {
        label: "Foncer, quitte à me tromper, mais au moins on avance.",
        weights: { pierre: 2, jacquesMajeur: 1, simonZelote: 1 }
      },
      {
        label: "Prendre un temps de prière silencieuse avant de décider.",
        weights: { jean: 2, jude: 1, andre: 1 }
      },
      {
        label: "Lister les arguments, demander des avis, peser le pour et le contre.",
        weights: { thomas: 2, philippe: 1 }
      },
      {
        label: "Voir comment on peut organiser les choses concrètement, qui fait quoi, quand, comment.",
        weights: { matthieu: 2, jacquesMineur: 1 }
      }
    ]
  },
  {
    text: "Dans un groupe ou une aumônerie, on vous retrouvera le plus souvent…",
    answers: [
      {
        label: "En train de proposer des idées, d’animer, de parler.",
        weights: { pierre: 2, jacquesMajeur: 1 }
      },
      {
        label: "À l’écoute des uns et des autres, dans les discussions à deux.",
        weights: { andre: 2, jean: 1 }
      },
      {
        label: "À veiller à ce que ce qui est dit soit cohérent avec la foi de l’Église.",
        weights: { jacquesMineur: 2, thomas: 1 }
      },
      {
        label: "À gérer l’intendance : plannings, budget, inscriptions, logistique.",
        weights: { matthieu: 2, philippe: 1 }
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
        weights: { jean: 2, jude: 1 }
      },
      {
        label: "Chercher, lire, débattre, creuser intellectuellement la question.",
        weights: { thomas: 2, barthelemy: 1 }
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
        weights: { jacquesMajeur: 2, simonZelote: 1 }
      },
      {
        label: "Elles sont là pour nous conduire à l’amour : l’Esprit compte plus que la lettre.",
        weights: { jean: 2, jude: 1 }
      },
      {
        label: "Elles structurent la vie de la communauté : sans cadre, tout se délite.",
        weights: { jacquesMineur: 2, matthieu: 1 }
      },
      {
        label: "Je veux comprendre le pourquoi avant d’adhérer, sinon j’ai du mal.",
        weights: { thomas: 2, philippe: 1 }
      }
    ]
  },
  {
    text: "Devant quelqu’un en marge de l’Église (loin, blessé, en rupture), vous êtes plutôt du genre à…",
    answers: [
      {
        label: "Aller le chercher en direct, lui proposer une parole claire sur le Christ.",
        weights: { pierre: 2, jacquesMajeur: 1 }
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
        weights: { matthieu: 2, philippe: 1 }
      }
    ]
  },
  {
    text: "Votre manière de prier qui vous parle le plus…",
    answers: [
      {
        label: "Les grandes liturgies, la louange, les moments forts de communauté.",
        weights: { pierre: 2, jacquesMajeur: 1 }
      },
      {
        label: "L’adoration, le silence, la lectio divina, le cœur à cœur.",
        weights: { jean: 2, jude: 1 }
      },
      {
        label: "Une prière nourrie d’intelligence de la foi : études bibliques, théologie, catéchisme.",
        weights: { thomas: 2, barthelemy: 1 }
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
        weights: { pierre: 2, simonZelote: 1 }
      },
      {
        label: "Rester proche des personnes blessées et les écouter.",
        weights: { jean: 2, andre: 1 }
      },
      {
        label: "Essayer de comprendre les causes profondes et de trouver une solution rationnelle.",
        weights: { thomas: 2, philippe: 1 }
      },
      {
        label: "Chercher un compromis réaliste que tout le monde peut accepter.",
        weights: { matthieu: 2, jacquesMineur: 1 }
      }
    ]
  },
  {
    text: "Si vous aviez une journée libre idéale pour nourrir votre foi, vous la passeriez plutôt…",
    answers: [
      {
        label: "En pèlerinage ou en grande marche avec d’autres, avec un beau temps de messe au milieu.",
        weights: { jacquesMajeur: 2, simonZelote: 1 }
      },
      {
        label: "En retraite silencieuse dans un monastère, avec beaucoup de temps d’oraison.",
        weights: { jean: 2, jude: 1 }
      },
      {
        label: "À lire, étudier, prendre des notes pour mieux comprendre la foi.",
        weights: { thomas: 2, barthelemy: 1 }
      },
      {
        label: "À servir une œuvre concrète (maraude, chantier paroissial…).",
        weights: { andre: 2, matthieu: 1 }
      }
    ]
  },
  {
    text: "Devant un projet missionnaire un peu fou proposé par votre paroisse, vous réagissez…",
    answers: [
      {
        label: "« Allons-y, le Seigneur pourvoira ! »",
        weights: { pierre: 2, jacquesMajeur: 1 }
      },
      {
        label: "« Vérifions que ce projet reste vraiment centré sur le Christ. »",
        weights: { jacquesMineur: 2, jean: 1 }
      },
      {
        label: "« Qui sont les personnes concrètes qu’on va rejoindre et aimer ? »",
        weights: { andre: 2, philippe: 1 }
      },
      {
        label: "« Ok, mais il faut un budget, un planning, des rôles clairs. »",
        weights: { matthieu: 2, judas: 1 } // judas : risque de tout ramener à l'argent/efficacité
      }
    ]
  },
  {
    text: "On dit de vous que vous êtes plutôt…",
    answers: [
      {
        label: "Cash, parfois un peu brut de décoffrage.",
        weights: { barthelemy: 2, pierre: 1 }
      },
      {
        label: "Doux, attentif, sensible aux personnes.",
        weights: { jean: 2, andre: 1 }
      },
      {
        label: "Cérébral, aimant les débats et les nuances.",
        weights: { thomas: 2, philippe: 1 }
      },
      {
        label: "Organisé, fiable, sur qui on peut compter.",
        weights: { matthieu: 2, jacquesMineur: 1 }
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
        weights: { jean: 2, jude: 1 }
      },
      {
        label: "Un cheminement long, avec des questions, des essais, des remises en cause.",
        weights: { thomas: 2 }
      },
      {
        label: "Des choix concrets qui réorientent ma manière de travailler, de consommer, de m’engager.",
        weights: { jacquesMineur: 2, simonZelote: 1 }
      }
    ]
  },
  {
    text: "Quand vous voyez des injustices dans l’Église ou dans la société, vous êtes plutôt porté à…",
    answers: [
      {
        label: "Réagir fort, dénoncer, prendre la parole.",
        weights: { jacquesMajeur: 2, simonZelote: 1 }
      },
      {
        label: "Prier pour les personnes concernées et porter cela dans le secret.",
        weights: { jean: 2, jude: 1 }
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
    text: "Après une homélie qui vous a profondément déplu, vous…",
    answers: [
      {
        label: "Râlez franchement, éventuellement à voix haute en sortant.",
        weights: { pierre: 2, judas: 1 }
      },
      {
        label: "Portez cela dans la prière et essayez de garder la paix.",
        weights: { jean: 2 }
      },
      {
        label: "Reprenez le texte de la Bible ou du Magistère pour vérifier ce qui vous a gêné.",
        weights: { thomas: 2, jacquesMineur: 1 }
      },
      {
        label: "Cherchez éventuellement à en parler calmement avec le prêtre, dans un cadre posé.",
        weights: { andre: 2, philippe: 1 }
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
        weights: { andre: 2, jude: 1 }
      },
      {
        label: "Vous réfléchissez à l’usage juste, à la doctrine sociale de l’Église.",
        weights: { thomas: 2, jacquesMineur: 1 }
      },
      {
        label: "Vous aimez que les ressources soient bien gérées… et ça vous agace quand ça ne l’est pas.",
        weights: { matthieu: 2, judas: 1 }
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
        weights: { jean: 2, jude: 1 }
      },
      {
        label: "D’un bon livre, d’enseignements nourrissants.",
        weights: { thomas: 2, barthelemy: 1 }
      },
      {
        label: "D’un équilibre entre prière et action concrète.",
        weights: { matthieu: 2, jacquesMineur: 1 }
      }
    ]
  },
  {
    text: "Sur les réseaux sociaux, votre manière d’évangéliser serait plutôt…",
    answers: [
      {
        label: "Des posts assez francs, clairs, assumés sur la foi.",
        weights: { pierre: 2, jacquesMajeur: 1 }
      },
      {
        label: "Des partages de textes spirituels, de belles images, de citations de saints.",
        weights: { jean: 2 }
      },
      {
        label: "Des threads d’explication, des liens vers des ressources solides.",
        weights: { thomas: 2, philippe: 1 }
      },
      {
        label: "Des annonces concrètes : missions, événements, collectes.",
        weights: { matthieu: 2, andre: 1 }
      }
    ]
  },
  {
    text: "Quand quelqu’un critique l’Église de manière injuste devant vous, vous…",
    answers: [
      {
        label: "Réagissez assez vivement pour défendre la foi.",
        weights: { jacquesMajeur: 2, simonZelote: 1 }
      },
      {
        label: "Essayez de comprendre d’abord son histoire et ses blessures.",
        weights: { jean: 2, andre: 1 }
      },
      {
        label: "Expliquez patiemment ce que dit réellement l’Église.",
        weights: { thomas: 2, barthelemy: 1 }
      },
      {
        label: "Invitez à un événement concret pour découvrir l’Église « de l’intérieur ».",
        weights: { philippe: 2, matthieu: 1 }
      }
    ]
  },
  {
    text: "Dans un groupe de jeunes, la mission qu’on vous donnerait naturellement serait…",
    answers: [
      {
        label: "Responsable d’équipe, animateur principal.",
        weights: { pierre: 2, jacquesMajeur: 1 }
      },
      {
        label: "Référent accueil/écoute, attention aux plus fragiles.",
        weights: { andre: 2, jean: 1 }
      },
      {
        label: "Responsable enseignement/formation.",
        weights: { thomas: 2, barthelemy: 1 }
      },
      {
        label: "Responsable logistique, trésorerie, organisation.",
        weights: { matthieu: 2, jacquesMineur: 1 }
      }
    ]
  },
  {
    text: "Devant un ami qui traverse une grosse crise morale ou spirituelle, vous…",
    answers: [
      {
        label: "Lui parlez franchement, quitte à le secouer un peu.",
        weights: { pierre: 2, barthelemy: 1 }
      },
      {
        label: "Restez présent, disponible, surtout dans l’écoute et la prière.",
        weights: { jean: 2, jude: 1 }
      },
      {
        label: "Cherchez des réponses, des lectures, des arguments pour l’aider à y voir clair.",
        weights: { thomas: 2 }
      },
      {
        label: "Proposez un accompagnement concret : groupe, retraite, démarche de foi.",
        weights: { philippe: 2, andre: 1 }
      }
    ]
  },
  {
    text: "Si vous deviez choisir ce que vous voulez le plus laisser comme trace dans l’Église…",
    answers: [
      {
        label: "Un témoignage de foi courageux, qui aura entraîné d’autres à suivre le Christ.",
          weights: { pierre: 2, jacquesMajeur: 1 }
      },
      {
        label: "Une trace d’amour, de miséricorde, de relations profondes et pacifiées.",
        weights: { jean: 2, andre: 1 }
      },
      {
        label: "Une parole de vérité, une lumière pour l’intelligence de la foi.",
          weights: { thomas: 2, barthelemy: 1 }
      },
      {
        label: "Une œuvre durable (groupe, projet, institution) mise au service de l’Évangile.",
        weights: { matthieu: 2, jacquesMineur: 1 }
        }
      ]
    },
  {
    text: "Quand une responsabilité imprévue vous tombe dessus, vous réagissez plutôt…",
    answers: [
      { label: "J’accepte et je fonce, quitte à ajuster en route.", weights: { pierre: 2, jacquesMajeur: 1 } },
      { label: "Je prends un temps intérieur pour discerner calmement.", weights: { jean: 2, jude: 1 } },
      { label: "J’analyse rapidement les implications avant de répondre.", weights: { thomas: 2, philippe: 1 } },
      { label: "Je vérifie les aspects pratiques : horaires, logistique, disponibilité.", weights: { matthieu: 2, jacquesMineur: 1 } }
    ]
  },
  {
    text: "Quand on vous confie quelqu’un de fragile à accompagner…",
    answers: [
      { label: "Je parle franchement pour l’aider à réagir.", weights: { barthelemy: 2, pierre: 1 } },
      { label: "Je privilégie l'écoute et la douceur.", weights: { jean: 2, andre: 1 } },
      { label: "J’essaie de comprendre les causes profondes de sa situation.", weights: { thomas: 2 } },
      { label: "Je trouve des solutions concrètes : un groupe, une retraite, un accompagnement.", weights: { philippe: 2, andre: 1 } }
    ]
  },
  {
    text: "Dans une discussion théologique animée, vous êtes plutôt…",
    answers: [
      { label: "Celui qui parle avec passion et conviction.", weights: { pierre: 2, jacquesMajeur: 1 } },
      { label: "Celui qui ramène le débat au Christ et à la charité.", weights: { jean: 2, jude: 1 } },
      { label: "Celui qui cite des textes, des arguments, des sources.", weights: { thomas: 2, barthelemy: 1 } },
      { label: "Celui qui essaie d’organiser les idées et de conclure proprement.", weights: { matthieu: 2, philippe: 1 } }
    ]
  },
  {
    text: "Quelle est votre première réaction quand un projet échoue ?",
    answers: [
      { label: "Rebondir : on en lance un autre tout de suite.", weights: { pierre: 2 } },
      { label: "Prier dans le silence pour retrouver la paix.", weights: { jean: 2 } },
      { label: "Chercher rationnellement ce qui n’a pas fonctionné.", weights: { thomas: 2 } },
      { label: "Revoir la logistique, l’équipe, les moyens.", weights: { matthieu: 2 } }
    ]
  },
  {
    text: "Si un ami vous pose une question difficile sur la foi…",
    answers: [
      { label: "Je réponds directement, sans tourner autour du pot.", weights: { pierre: 2, barthelemy: 1 } },
      { label: "Je témoigne d’abord de ma relation personnelle au Christ.", weights: { jean: 2 } },
      { label: "Je propose une explication structurée, argumentée.", weights: { thomas: 2, philippe: 1 } },
      { label: "Je l’invite à un événement, une messe, un groupe.", weights: { andre: 2, philippe: 1 } }
    ]
  },
  {
    text: "Dans un pèlerinage, on vous retrouve souvent…",
    answers: [
      { label: "En tête du groupe, motivant tout le monde.", weights: { jacquesMajeur: 2, pierre: 1 } },
      { label: "En retrait pour prier et méditer.", weights: { jean: 2 } },
      { label: "En train de discuter, poser des questions, approfondir.", weights: { thomas: 2 } },
      { label: "À gérer sacs, pauses, organisation pratique.", weights: { matthieu: 2 } }
    ]
  },
  {
    text: "Quand quelqu’un vous déçoit profondément…",
    answers: [
      { label: "Je peux être brusque, mais je reviens vite.", weights: { pierre: 2 } },
      { label: "Je prie pour lui et je reste fidèle en amitié.", weights: { jean: 2 } },
      { label: "Je réfléchis à ce qui a causé la situation.", weights: { thomas: 2 } },
      { label: "J’essaie de reconstruire quelque chose de concret.", weights: { andre: 2, matthieu: 1 } }
    ]
  },
  {
    text: "Face à une grande injustice…",
    answers: [
      { label: "Je monte au créneau pour défendre la vérité.", weights: { simonZelote: 2, jacquesMajeur: 1 } },
      { label: "Je porte cela dans la prière.", weights: { jude: 2, jean: 1 } },
      { label: "J’analyse structurellement la situation.", weights: { thomas: 2 } },
      { label: "Je m’engage dans une action concrète.", weights: { andre: 1, matthieu: 2 } }
    ]
  },
  {
    text: "Comment évangélisez-vous le plus naturellement ?",
    answers: [
      { label: "Par un témoignage courageux et direct.", weights: { pierre: 2, jacquesMajeur: 1 } },
      { label: "Par la douceur, l’amitié, l’écoute.", weights: { jean: 2, andre: 1 } },
      { label: "Par l’enseignement, les explications claires.", weights: { thomas: 2, philippe: 1 } },
      { label: "Par des projets concrets : paroisse, événements, structures.", weights: { matthieu: 2, jacquesMineur: 1 } }
    ]
  },
  {
    text: "Votre relation à la prière ressemble plutôt à…",
    answers: [
      { label: "Un dialogue spontané, vivant, parfois orageux.", weights: { pierre: 2 } },
      { label: "Une présence silencieuse, intime, fidèle.", weights: { jean: 2 } },
      { label: "Une recherche de lumière et de vérité.", weights: { thomas: 2 } },
      { label: "Un mélange de prière et d’action concrète.", weights: { matthieu: 2, andre: 1 } }
    ]
  },
  {
    text: "Devant une homélie que vous trouvez bancale…",
    answers: [
      { label: "Je bouillonne intérieurement (ou extérieurement).", weights: { pierre: 2, judas: 1 } },
      { label: "Je confie cela à Dieu sans perdre la paix.", weights: { jean: 2 } },
      { label: "Je vais relire le texte biblique pour vérifier.", weights: { thomas: 2, jacquesMineur: 1 } },
      { label: "Je parle calmement au prêtre si besoin.", weights: { andre: 2, philippe: 1 } }
    ]
  },
  {
    text: "Quand vous découvrez une nouvelle mission dans l’Église…",
    answers: [
      { label: "Je me réjouis et je veux y aller tout de suite.", weights: { pierre: 2 } },
      { label: "J’en parle dans la prière pour discerner.", weights: { jean: 2 } },
      { label: "Je réfléchis à la cohérence théologique.", weights: { thomas: 2 } },
      { label: "Je regarde l’organisation nécessaire.", weights: { matthieu: 2 } }
    ]
  },
  {
    text: "On dit de vous que vous êtes quelqu’un de…",
    answers: [
      { label: "Courageux, un peu impulsif.", weights: { pierre: 2 } },
      { label: "Profond, aimant la communion.", weights: { jean: 2 } },
      { label: "Logique, critique, rationnel.", weights: { thomas: 2 } },
      { label: "Fiable, structuré, constant.", weights: { jacquesMineur: 2, matthieu: 1 } }
    ]
  },
  {
    text: "Dans un groupe chrétien, vous aimez surtout…",
    answers: [
      { label: "Animer, prendre la parole.", weights: { pierre: 2, jacquesMajeur: 1 } },
      { label: "Créer des liens profonds.", weights: { jean: 2, andre: 1 } },
      { label: "Approfondir les enseignements.", weights: { thomas: 2 } },
      { label: "Faire en sorte que tout soit bien organisé.", weights: { matthieu: 2, philippe: 1 } }
    ]
  },
  {
    text: "Lorsqu’un proche traverse une grande épreuve…",
    answers: [
      { label: "Vous essayez de le secouer avec franchise.", weights: { barthelemy: 2, pierre: 1 } },
      { label: "Vous offrez écoute et présence fidèle.", weights: { jean: 2, jude: 1 } },
      { label: "Vous explorez intellectuellement ce qui l’aide le plus.", weights: { thomas: 2 } },
      { label: "Vous organisez quelque chose pour l’aider concrètement.", weights: { andre: 1, philippe: 2 } }
    ]
  },
  {
    text: "Votre sensibilité liturgique est plutôt…",
    answers: [
      { label: "Les célébrations vibrantes et missionnaires.", weights: { pierre: 2, jacquesMajeur: 1 } },
      { label: "Le silence, l’adoration, la contemplation.", weights: { jean: 2 } },
      { label: "La liturgie comme source d’enseignement.", weights: { thomas: 2 } },
      { label: "La cohérence et la beauté concrète de la célébration.", weights: { jacquesMineur: 2, matthieu: 1 } }
    ]
  },
  {
    text: "Quand vous voyez un conflit dans votre paroisse…",
    answers: [
      { label: "Vous intervenez vigoureusement pour rétablir la vérité.", weights: { pierre: 2, simonZelote: 1 } },
      { label: "Vous apaisez, écoutez, ramenez à la charité.", weights: { jean: 2, andre: 1 } },
      { label: "Vous analysez les causes profondes.", weights: { thomas: 2 } },
      { label: "Vous proposez une solution concrète acceptable.", weights: { matthieu: 2, philippe: 1 } }
    ]
  },
  {
    text: "Face à une critique publique de l’Église…",
    answers: [
      { label: "Vous la corrigez fermement.", weights: { jacquesMajeur: 2, simonZelote: 1 } },
      { label: "Vous cherchez la blessure qui se cache derrière.", weights: { jean: 2, andre: 1 } },
      { label: "Vous expliquez calmement la doctrine réelle.", weights: { thomas: 2, barthelemy: 1 } },
      { label: "Vous invitez à découvrir la paroisse de l’intérieur.", weights: { philippe: 2, matthieu: 1 } }
    ]
  },
  {
    text: "Lorsque vous servez l’Église, vous aimez que…",
    answers: [
      { label: "Cela avance, quitte à bousculer un peu.", weights: { pierre: 2 } },
      { label: "Cela fasse grandir la communion et la paix.", weights: { jean: 2 } },
      { label: "Cela soit cohérent, vrai, solide en doctrine.", weights: { thomas: 2 } },
      { label: "Cela soit bien organisé et durable.", weights: { matthieu: 2, jacquesMineur: 1 } }
    ]
  },

  {
    text: "Quand quelque chose vous déçoit vraiment dans l’Église (scandale, décision, ambiance), votre tentation la plus forte est…",
    answers: [
      {
        label: "Vous durcir intérieurement et critiquer beaucoup, tout en faisant bonne figure.",
        weights: { judas: 2, barthelemy: 1 }
      },
      {
        label: "Vous éloigner un peu, mais en continuant à prier et à chercher la paix.",
        weights: { jean: 2, jude: 1 }
      },
      {
        label: "Vous plonger dans la réflexion pour comprendre ce qui se passe vraiment.",
        weights: { thomas: 2 }
      },
      {
        label: "Redoubler de service concret pour réparer à votre manière.",
        weights: { andre: 2, simonZelote: 1 }
      }
    ]
  }
];

// ---------- État du test ----------

let currentQuestionIndex = 0;
const scores = {
  pierre: 0,
  jean: 0,
  jacquesMajeur: 0,
  andre: 0,
  thomas: 0,
  matthieu: 0,
  philippe: 0,
  barthelemy: 0,
  jacquesMineur: 0,
  jude: 0,
  simonZelote: 0,
  judas: 0
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

  let maxScore = -Infinity;
  for (const key in scores) {
    if (scores[key] > maxScore) {
      maxScore = scores[key];
    }
  }

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
