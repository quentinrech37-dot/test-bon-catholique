// apotre.js

// Profils d'apôtres (archétypes simplifiés)
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

// Questions : chaque réponse ajoute des points à un ou plusieurs profils
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
  }
];

// État du test
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

function renderQuestion() {
  if (currentQuestionIndex >= questionsApotres.length) {
    showResultApotre();
    return;
  }

  const q = questionsApotres[currentQuestionIndex];
  questionTextApEl.textContent = q.text;
  progressApEl.textContent = "Question " + (currentQuestionIndex + 1) + " sur " + questionsApotres.length;

  // Nettoyer les anciennes réponses
  answersApEl.innerHTML = "";

  q.answers.forEach((ans, idx) => {
    const btn = document.createElement("button");
    btn.textContent = ans.label;
    btn.style.display = "block";
    btn.style.width = "100%";
    btn.style.margin = "8px 0";
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
  const bestKeys = Object.keys(scores).filter(k => scores[k] === maxScore);

  // On prend le premier profil pour le texte principal
  const primaryKey = bestKeys[0];
  const profile = apostlesProfiles[primaryKey];

  if (!profile) {
    profilApEl.textContent = "Profil indéterminé";
    detailsApEl.textContent = "Les réponses ne permettent pas de dégager un profil clair. " +
      "Vous êtes peut-être un mélange harmonieux de plusieurs apôtres !";
    return;
  }

  // Titre
  if (bestKeys.length === 1) {
    profilApEl.textContent = profile.name + " – " + profile.title;
  } else {
    const names = bestKeys.map(k => apostlesProfiles[k]?.name || k);
    profilApEl.textContent = names.join(" / ") + " – profils combinés";
  }

  // Détails
  let details = profile.text;

  if (bestKeys.length > 1) {
    const secondary = bestKeys.slice(1).map(k => apostlesProfiles[k]?.name).filter(Boolean);
    if (secondary.length > 0) {
      details += "\n\nVous présentez aussi des traits de : " + secondary.join(", ") + ".";
    }
  }

  detailsApEl.textContent = details;
}

// Lancer le test
renderQuestion();
