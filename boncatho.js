// boncatho.js

// ——————————————————
// Définition des questions
// ——————————————————
//
// pureIfYes = true  -> OUI est la réponse "dans le sens" de l'Église.
// pureIfYes = false -> NON est la réponse "dans le sens" de l'Église.
//
// - bonne réponse     -> +coef
// - mauvaise réponse  -> -coef
// Score final = 100 * somme(points) / somme(coef des questions posées).

const questions = [
  // FOI DE BASE & SACREMENTS
  { id: "bapt", text: "Êtes-vous baptisé(e) dans l'Église catholique (ou reçu en pleine communion) ?", coef: 10, pureIfYes: true },
  { id: "bapt_int", text: "Si vous n'êtes pas baptisé(e), désirez-vous vraiment recevoir le baptême (ou entrer dans l'Église) ?", coef: 8, pureIfYes: true, dependsOn: { id: "bapt", value: false } },
  { id: "messe_dim", text: "Allez-vous à la messe le dimanche (ou la veille au soir) presque chaque semaine ?", coef: 10, pureIfYes: true },
  { id: "messe_fetes", text: "Allez-vous à la messe aux grandes fêtes (Noël, Pâques, etc.) même si ce n'est pas dimanche ?", coef: 4, pureIfYes: true },
  { id: "manque_messe", text: "Vous arrive-t-il de manquer volontairement la messe du dimanche sans motif sérieux (maladie, obligation vraiment grave) ?", coef: 10, pureIfYes: false },
  { id: "messe_semaine", text: "Allez-vous parfois à la messe en semaine (en dehors du dimanche) ?", coef: 4, pureIfYes: true },
  { id: "communion_etat", text: "Vous arrive-t-il de communier en sachant clairement que vous n'êtes pas en état de grâce ?", coef: 14, pureIfYes: false },
  { id: "conf_1an", text: "Vous confessez-vous au moins une fois par an ?", coef: 6, pureIfYes: true },
  { id: "conf_reguliere", text: "Vous confessez-vous au moins tous les 3–4 mois ?", coef: 4, pureIfYes: true, dependsOn: { id: "conf_1an", value: true } },

  // LITURGIE & PRIÈRE
  { id: "messe_ordo", text: "Allez-vous habituellement à la messe dans la forme ordinaire (messe de Paul VI) ?", coef: 2, pureIfYes: true },
  { id: "messe_tlm", text: "Allez-vous parfois à la messe tridentine (forme extraordinaire) ?", coef: 3, pureIfYes: true },
  { id: "missel", text: "Savez-vous utiliser un Missel pour suivre la messe ?", coef: 3, pureIfYes: true },
  { id: "chant_faux", text: "Vous arrive-t-il de faire semblant de connaître les paroles en chantant sans vraiment suivre ?", coef: 2, pureIfYes: false },
  { id: "priere_quot", text: "Avez-vous un temps de prière personnelle quotidien (même bref) ?", coef: 7, pureIfYes: true },
  { id: "priere_mat_soir", text: "Priez-vous (au moins brièvement) le matin ET le soir ?", coef: 3, pureIfYes: true, dependsOn: { id: "priere_quot", value: true } },
  { id: "chapelet", text: "Récitez-vous le chapelet (ou une partie) au moins une fois par semaine ?", coef: 4, pureIfYes: true },
  { id: "bible", text: "Lisez-vous la Bible (en particulier l'Évangile) au moins une fois par semaine ?", coef: 5, pureIfYes: true },
  { id: "credo_coeur", text: "Connaissez-vous le Credo (au moins l'un des deux) par cœur ?", coef: 3, pureIfYes: true },
  { id: "adoration", text: "Prenez-vous un temps d'adoration ou de prière silencieuse devant le Saint-Sacrement au moins une fois par mois ?", coef: 3, pureIfYes: true },

  // FOI / DOGMES
  { id: "credo_trinite", text: "Croyez-vous en Dieu Père, Fils et Saint-Esprit, comme l'exprime le Credo ?", coef: 8, pureIfYes: true },
  { id: "credo_resurrection", text: "Croyez-vous à la résurrection réelle du Christ (pas seulement symbolique) ?", coef: 8, pureIfYes: true },
  { id: "presence_reelle", text: "Croyez-vous à la présence réelle du Christ dans l'Eucharistie ?", coef: 8, pureIfYes: true },
  { id: "lecture_spirituelle", text: "Lisez-vous parfois le Catéchisme ou des livres spirituels (saints, auteurs catholiques, etc.) ?", coef: 3, pureIfYes: true },

  // GESTES DE RESPECT À L'ÉGLISE
  { id: "agenouille", text: "Vous agenouillez-vous à l'église (consécration, prière, etc.) quand c'est possible ?", coef: 3, pureIfYes: true },
  { id: "attend_tab", text: "Après la communion, attendez-vous que le prêtre ait remis les hosties au tabernacle avant de vous asseoir ou de sortir ?", coef: 3, pureIfYes: true },

  // VIE AFFECTIVE / MORALE
  { id: "couple", text: "Êtes-vous ou avez-vous déjà été en couple de manière stable ?", coef: 0, pureIfYes: true },
  { id: "marie", text: "Êtes-vous actuellement marié(e) ?", coef: 2, pureIfYes: true, dependsOn: { id: "couple", value: true } },
  { id: "marie_eglise", text: "Si vous êtes marié(e), votre mariage a-t-il été célébré religieusement à l'Église ?", coef: 6, pureIfYes: true, dependsOn: { id: "marie", value: true } },
  { id: "concubinage", text: "Avez-vous déjà vécu en couple (ou vivez-vous) en cohabitation stable sans mariage religieux ?", coef: 10, pureIfYes: false, dependsOn: { id: "couple", value: true } },
  { id: "chastete", text: "Cherchez-vous réellement à vivre la chasteté selon l'enseignement de l'Église (dans votre état de vie) ?", coef: 7, pureIfYes: true },
  { id: "eloigner_foi", text: "Avez-vous déjà volontairement poussé quelqu'un à s'éloigner de la foi ou de l'Église ?", coef: 10, pureIfYes: false },

  // CHARITÉ, PÈLERINAGES, ROME, PIÉTÉ POPULAIRE
  { id: "service_temps", text: "Donnez-vous du temps gratuitement au service des autres (bénévolat, service paroissial, aumônerie, actions caritatives, etc.) ?", coef: 5, pureIfYes: true },
  { id: "service_argent", text: "Donnez-vous régulièrement un peu de votre argent (quête, dons, associations caritatives), selon vos moyens ?", coef: 4, pureIfYes: true },
  { id: "asso_catho", text: "Avez-vous déjà, ou souhaitez-vous, vous impliquer dans une association caritative de l'Église (Secours Catholique, missions, etc.) ?", coef: 4, pureIfYes: true },
  { id: "mendiant_eglise", text: "Vous est-il déjà arrivé de donner de l'argent (ou autre aide) à un mendiant à l'entrée d'une église ?", coef: 3, pureIfYes: true },
  { id: "pelerinage", text: "Avez-vous déjà fait un pèlerinage (Chartres, Lourdes, Saint-Jacques de Compostelle, etc.) ?", coef: 3, pureIfYes: true },
  { id: "rome", text: "Êtes-vous déjà allé à Rome pour y voir le Vatican ?", coef: 2, pureIfYes: true },
  { id: "visite_eglises", text: "Aimez-vous visiter des églises en dehors des cérémonies religieuses ?", coef: 3, pureIfYes: true },
  { id: "retraite_monastere", text: "Avez-vous déjà fait, ou pensez-vous faire, une retraite de quelques jours ou semaines dans un monastère ?", coef: 4, pureIfYes: true },

  { id: "ragots", text: "Avez-vous tendance à dire souvent du mal des autres (commérages, médisances, calomnies) ?", coef: 6, pureIfYes: false },
  { id: "pardon", text: "Cherchez-vous à pardonner quand on vous a blessé, même si c'est long et difficile ?", coef: 6, pureIfYes: true },
  { id: "rancune", text: "Gardez-vous souvent une forte rancune, au point de couper les liens sans chercher la réconciliation ?", coef: 8, pureIfYes: false },

  // ÉGLISE, OBÉISSANCE, UNITÉ
  { id: "priere_pape", text: "Priez-vous pour le Pape, les évêques et les prêtres (au moins de temps en temps) ?", coef: 3, pureIfYes: true },
  { id: "sedevacant", text: "Êtes-vous sédévacantiste (vous considérez qu'il n'y a plus de vrai pape depuis longtemps) ?", coef: 20, pureIfYes: false },
  { id: "docilete", text: "Quand vous n'êtes pas d'accord avec une position de l'Église, cherchez-vous à comprendre réellement son enseignement avant de la critiquer publiquement ?", coef: 4, pureIfYes: true },
  { id: "paroisse_vie", text: "Participez-vous parfois à la vie concrète de votre paroisse (service liturgique, chorale, groupes, événements, etc.) ?", coef: 3, pureIfYes: true },
  { id: "colere_eglise", text: "Vous est-il déjà arrivé de quitter volontairement une messe ou un sacrement par colère ou mépris, sans raison grave ?", coef: 8, pureIfYes: false },

  // TÉMOIGNAGE & COHÉRENCE
  { id: "assumer_catho", text: "Assumez-vous publiquement d'être catholique (amis, études, travail), au moins quand le sujet vient sur la table ?", coef: 5, pureIfYes: true },
  { id: "parler_foi", text: "Avez-vous déjà parlé de votre foi à quelqu'un qui ne croyait pas ou s'interrogeait ?", coef: 4, pureIfYes: true },
  { id: "foi_choix", text: "Votre foi influence-t-elle réellement certains de vos choix concrets (relations, travail/études, consommation, engagement) ?", coef: 5, pureIfYes: true },
  { id: "defense_eglise", text: "Vous arrive-t-il de défendre l'Église quand elle est attaquée de manière manifestement injuste ou caricaturale ?", coef: 3, pureIfYes: true },
  { id: "blasph", text: "Vous arrive-t-il de traiter à la légère ce qui est sacré (blasphèmes volontaires, moqueries du sacré, sacrilèges) ?", coef: 10, pureIfYes: false },
  { id: "se_relever", text: "Quand vous tombez clairement en contradiction avec votre foi, cherchez-vous à vous relever (prière, confession, accompagnement) plutôt que de banaliser systématiquement ?", coef: 6, pureIfYes: true },

  // ENGAGEMENT / RÉSEAUX
  { id: "groupe_priere", text: "Êtes-vous engagé(e) dans un groupe de prière, une aumônerie, un mouvement (scouts, communauté, etc.) ?", coef: 3, pureIfYes: true },
  { id: "reseaux_scandale", text: "Partagez-vous parfois sur les réseaux des contenus clairement contraires à la foi (insultes, moqueries du sacré, etc.) ?", coef: 8, pureIfYes: false }
];

// ——————————————————
// Logique du score
// ——————————————————

let currentIndex = 0;
const answers = {};
let rawScore = 0;
let maxPossible = 0;

const questionTextEl = document.getElementById("question-text");
const progressEl = document.getElementById("progress");
const boxEl = document.getElementById("question-box");
const resultEl = document.getElementById("resultat");
const scoreEl = document.getElementById("score");
const interpEl = document.getElementById("interpretation");

function interpretScore(score) {
  if (score >= 90) {
    return "Très bon pratiquant (sur le papier, mais si vous avez 100/100 vous êtes sûrement le Pape...) " +
           "Votre vie semble fortement structurée par la foi et les sacrements. " +
           "Si ce score est réaliste, bravo, et attention à rester humble et miséricordieux envers les autres.";
  } else if (score >= 75) {
    return "Catholique solide, avec des faiblesses normales. " +
           "Globalement, vous prenez votre foi au sérieux. Il y a des zones à consolider, " +
           "mais la trajectoire générale est clairement orientée vers Dieu.";
  } else if (score >= 60) {
    return "Catholique moyen, un pied dedans, un pied dehors. " +
           "Il y a de belles choses, mais aussi pas mal de compromis. " +
           "Ce test peut être une base pour repérer ce que vous voudriez changer en priorité.";
  } else if (score >= 40) {
    return "Catholique culturel ou en chantier. " +
           "Vous gardez des attaches à la foi, mais beaucoup d'aspects sont mis de côté. " +
           "Si le Christ compte pour vous, c’est peut-être le moment de reprendre un fil régulier : " +
           "prière, messe, confession, accompagnement.";
  } else if (score >= 0) {
    return "Score bas… mais la miséricorde de Dieu est plus grande que tout. " +
           "Ce test ne voit que des cases cochées. Dieu, lui, voit toute votre histoire. " +
           "Si certaines choses vous pèsent, n'en restez pas seul : parlez-en à un prêtre ou " +
           "à une personne de confiance, et laissez la grâce faire son travail.";
  } else {
    return "Ouch... ça fait mal ! Vous ne pouvez pas vraiment être catholique... " +
           "Mais pas d'inquiétude : tout peut commencer à s'arranger en retournant vers Dieu, " +
           "par la prière, la confession et la messe ce dimanche.";
  }
}

function loadQuestion() {
  // Sauter les questions conditionnelles si la condition n'est pas remplie
  while (currentIndex < questions.length) {
    const q = questions[currentIndex];
    if (!q.dependsOn) break;
    const depAns = answers[q.dependsOn.id];
    if (depAns === undefined) break;
    if (depAns === q.dependsOn.value) {
      break; // condition remplie -> on pose la question
    } else {
      currentIndex++; // condition non remplie -> on saute
    }
  }

  if (currentIndex >= questions.length) {
    showResult();
    return;
  }

  const q = questions[currentIndex];
  questionTextEl.textContent = q.text;
  progressEl.textContent = "Question " + (currentIndex + 1) + " sur " + questions.length;
}

function recordAnswer(value) {
  const q = questions[currentIndex];
  answers[q.id] = value;

  const coef = q.coef || 0;
  const pureIfYes = !!q.pureIfYes;

  maxPossible += coef;

  if (pureIfYes) {
    if (value === true) {
      rawScore += coef;
    } else {
      rawScore -= coef;
    }
  } else {
    if (value === false) {
      rawScore += coef;
    } else {
      rawScore -= coef;
    }
  }

  currentIndex++;
  loadQuestion();
}

function showResult() {
  let scorePourcent = 0;

  if (maxPossible > 0) {
    scorePourcent = 100 * rawScore / maxPossible;
  }

  const scoreArrondi = Math.round(scorePourcent);

  boxEl.style.display = "none";
  resultEl.style.display = "block";
  scoreEl.textContent = "Votre score « bon catholique » : " + scoreArrondi + " / 100";
  interpEl.textContent = interpretScore(scoreArrondi);
}

document.getElementById("btn-yes").addEventListener("click", () => recordAnswer(true));
document.getElementById("btn-no").addEventListener("click", () => recordAnswer(false));

// Première question
loadQuestion();
