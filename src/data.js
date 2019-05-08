export default {
  categories: [
    {
      type: "about",
      title: "Présentation",
      content: "Pourquoi une reconversion professionnelle dans le numérique ? Attirée depuis plusieurs années par ce domaine en constante évolution, j'ai envisagé de travailler dans la communication digitale et le marketing numérique. Aujourd'hui, je souhaite m'orienter vers la gestion de projet ou vers un emploi plus technique dans le développement.",
      labels: ["Javascript", "React", "Vue.js", "HTML", "CSS", "SCSS", "Wordpress", "Photoshop"],
      buttons: [
        {
          title: "Voir mon profil LinkedIn",
          url: "https://www.linkedin.com/in/nelly-martin-1a3bb8b1/",
        },
        {
          title: "Voir mon profil Github",
          url: "https://github.com/Lililalilou",
        },
      ],
    },
    {
      type: "works",
      title: "Projets personnels",
      sections: [
        {
          title: "Expérience en milieu associatif",
          picture: {
            src: "./images/fitness.png",
            alt: "Page d'accueil du site de l'association.",
          },
          content: "Pour l’association sportive Teamfitness (95), l’objectif était de proposer plusieurs conventions sportives (série de plusieurs sessions de cours collectifs) dans l’année, accessibles au plus grand nombre de passionnés et avec des cours/prestations de qualité. La communication autour de chaque événement était essentielle. Il fallait également assurer pour le jour J toute la logistique et l’accueil des participants. Après chaque convention, l'équipe réalisait un feedback, avec remerciements et publications de photos et vidéos. Le nombre de participants n’a jamais cessé de grandir durant les trois ans de cette aventure. Au cours de cette expérience, j’ai acquis la connaissance d'outils comme Photoshop. Ce que j’ai su faire : créer un logo pour l’association, une maquette pour un site, réaliser des flyers, diffuser sur les réseaux sociaux des montages photos/vidéos.",
          labels: ["HTML", "CSS"],
        },
        {
          title: "Adaptation d'un player en flash",
          picture: {
            src: "./images/player.png",
            alt: "Capture d'écran du player source (VIP).",
          },
          content: "Objectif : récupérer les données d'une playlist, les afficher et pouvoir jouer un morceau lorsqu'on clique dessus. Projet réalisé en JavaScript (ES6) avec ReactJS, Webpack, Axios",
          labels: ["ES6", "Axios", "Webpack"],
        },
        {
          title: "Création d'un puzzle game",
          picture: {
            src: "./images/puzzle-game.png",
            alt: "Zoom sur la grille du jeu.",
          },
          content: "Objectif : afficher et mettre à jour une grille d'éléments de couleurs différentes, pouvoir réaliser des combinaisons d'éléments avec des échanges de cases, délimités par des règles simples de jeu et pouvoir comptabiliser des points en fonction des types de combinaisons. Projet réalisé en JavaScript (ES6) avec Vue.js . Application créée avec create-vue-app.",
        },
        {
          title: "Développement d'une application de lettering",
          picture: {
            src: "./images/lettering.png",
            alt: "Capture d'écran de l'application.",
          },
          content: "Objectif : afficher une liste de polices de caractères sélectionnables et pour chacune les différents types de graisse disponibles, proposer des templates de texte et un rendu imprimable. Projet réalisé en JavaScript (ES6) avec Vue.js, Axios, SASS. Application créée avec create-vue-app.",
        },
      ],
    },
    {
      type: "works",
      title: "Projets académiques",
      sections: [
        {
          title: "Intégrer un thème Wordpress pour un client",
          picture: {
            src: "./images/agence.png",
            alt: "Page d'accueil du site.",
          },
          button: {
            title: "Voir le site",
            url: "nelly-martin.com/chaletsetcaviar",
          },
          content: "Adapter un thème Wordpress pour respecter les exigences du client. Rédiger une documentation à l'intention d'utilisateurs non spécialistes. Sélectionner un thème Wordpress adapté aux besoins du client.",
        },
        {
          title: "Analyser les besoins d'un client",
          picture: {
            src: "./images/festival.png",
            alt: "Page d'accueil du site.",
          },
          button: {
            title: "Voir le site",
            url: "nelly-martin.com/site_lesfilmsdepleinair",
          },
          content: "Lister les fonctionnalités demandées par un client. Analyser un cahier des charges. Rédiger les spécifications détaillées du projet. Choisir une solution technique adaptée parmi les solutions existantes si cela est pertinent.",
        },
        {
          title: "Concevoir la solution technique d'une application de restauration en ligne",
          picture: {
            src: "./images/express-food.png",
            alt: "Exemples de schémas et digrammes réalisés.",
          },
          content: "Réaliser des schémas UML cohérents et en accord avec les besoins énoncés. Concevoir l’architecture technique d’une application à l’aide de diagrammes UML. Implémenter le schéma de données dans la base. Réaliser un schéma de conception de la base de données de l’application.",
          labels: ["Javascript", "React"],
        },
        {
          title: "Imaginer un générateur de citations",
          picture: {
            src: "./images/generateur.png",
            alt: "Partie de code Javascript.",
          },
          content: "Concevoir un algorithme pour répondre à un cahier des charges. Mettre en oeuvre la syntaxe de JavaScript dans un programme.",
        },
        {
          title: "Créez un jeu de plateau tour par tour en JS",
          picture: {
            src: "./images/jeu.png",
            alt: "Zoom sur le plateau de jeu.",
          },
          button: {
            title: "Voir la demo",
            url: "nelly-martin.com/jeu_plateau",
          },
          content: "Concevoir une architecture d'application JavaScript réutilisable. Développer une application JavaScript orientée objet. Mettre en oeuvre la bibliothèque jQuery dans une application web.",
        },
        {
          title: "Lancer mon propre site d'avis de restaurants",
          picture: {
            src: "./images/app-resto.png",
            alt: "Capture d'écran de l'application.",
          },
          content: "Développer une application JavaScript complète en respectant un cahier des charges. Utiliser une API externe en JavaScript.",
        },
        {
          title: "Reprendre et améliorer un projet existant",
          picture: {
            src: "./images/app-todo.png",
            alt: "Schéma des classes de l'application TodoList.",
          },
          content: "Mettre en oeuvre des tests unitaires et fonctionnels dans une application web. Optimiser les performances d'un projet à l'aide des DevTools. Reprendre en main un projet JavaScript existant.",
        },
        {
          title: "Construire une veille technologique",
          picture: {
            src: "./images/dashboard.png",
            alt: "Capture d'écran de tableau de bord.",
          },
          content: "Mettre en place un tableau de bord de veille technologique. Sélectionner des sources d’information pertinentes pour un certain ensemble de technologies.",
        },
      ],
    },
    {
      type: "learning",
      title: "MOOCs",
      subtitle: "Ici sont regroupées les plateformes d'apprentissage en ligne fréquentées. Pour chaque thème, je dresse une liste des principaux centres d'intérêt.",
      sections: [
        {
          picture: {
            src: "./images/code-cademy.png",
            alt: "Logo du site code-cademy.",
          },
          button: {
            title: "Voir mon profil",
            url: "codecademy.com/Lililalilou",
          },
          subsections: [
            {
              title: "Intégration",
              content: ["Intégration responsive de maquettes.", ],
            },
            {
              title: "Développement Front-end",
              content: [
                "Initiation à la ligne de commande et Git.",
                "Développement d’applications et d’outils javascript.",
                "Initiation aux frameworks Javascript (React) et CSS (Bootstrap).",
              ],
            },
          ],
        },
        {
          picture: {
            src: "./images/google-ateliers.png",
            alt: "Logo de Google Ateliers numériques.",
          },
          button: {
            title: "Voir la certification",
            url: "docs.google.com/document/d/1cdmogyCQQWOyBnAScXewZBt4f9fl3luKVb44UDj9rbw/edit",
          },
          subsections: [
            {
              title: "Marketing numérique",
              content: [
                "La publicité display.",
                "Le marketing par mail.",
                "Les médias sociaux.",
                "Le marketing de contenu.",
                "Le développement de la présence en ligne.",
                "L'analyse d'audience et de comportement des utilisateurs.",
              ], 
            },
            {
              title: "SEO",
              content: ["Les moteurs de recherche et le SEO.", ],
            },
          ],
        },
        {
          picture: {
            src: "./images/openclassrooms.png",
            alt: "Logo du site Openclassrooms.",
          },
          button: {
            title: "Voir les certificats",
            url: "docs.google.com/presentation/d/1VsFuYaLp0CkLlMp_6wIErgo1L-gH72RA6MKniIGSNZQ/edit#slide=id.g4f2f056954_0_0",
          },
          subsections: [
            {
              title: "Gestion de projet",
              content: [
              "Méthodologies en cascade et agile.",
              "Bien cadrer un projet multimédia.",
              "Réaliser un cahier des charges.",
              ],
            },
            {
              title: "Développement",
              content: [
                "Conception de site web avec HTML5 et CSS3, avec PHP et MySQL.",
                "Les solutions CMS, notamment WordPress.",
                "Intégration de maquettes.",
                "Le Responsive Web Design.",
                "Gestion du code avec Git et GitHub.",
                "Analyse logicielle avec UML.",
              ], 
            },
            {
              title: "Marketing et communication",
              content: [
                "Veille informationnelle.",
                "Référencement naturel.",
              ],
            },
          ],
        },
        {
          picture: {
            src: "./images/trailhead.png",
            alt: "Logo de la plateforme Trailhead.",
          },
          button: {
            title: "Voir mon profil",
            url: "trailhead.salesforce.com/fr/me/0052J000008ahBlQAI",
          },
          subsections: [
            {
              title: "Général",
              content: ["Réaliser un cahier des charges.", ],
            },
            {
              title: "Apex",
              content: [
                "Gestion du code avec Git et GitHub.",
                "Analyse logicielle avec UML.",
              ], 
            },
            {
              title: "Intégration",
              content: [
                "Conception de site web avec HTML5 et CSS3, avec PHP et MySQL.",
                "Les solutions CMS, notamment WordPress.",
                "Intégration de maquettes.",
              ], 
            },
          ],
        },
      ],
    },
    {
      type: "contact",
      title: "Contactez-moi!",
      personalData: {
        site: "Portfolio",
        name: "Nelly Martin",
        email: "nelly.m@rtin.tech",
        phone: "06 62 79 82 68",
      },
    },
  ],
};
