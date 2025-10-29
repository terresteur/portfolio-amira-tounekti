/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


# Vue de la navigation project


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

const app = Vue.createApp({
  data() {
    return {
      //Le vide sera utilisé pour ne rien retourner si les créations ne fonctionnent pas.
      vide: "",
      //Le project est un tableau vide qui contiendra le data du fetch, permettant ainsi d’accéder aux informations du projects.json.
      project: [],
      //Le disponible va décider dans le HTML, grâce à un if et else, de l’apparition de l’un des deux paragraphes
      disponible: true,
      //Le menuOuvert va décider de l’apparition ou non du sousMenu dans le HTML avec un if. Son état d’apparition sera géré par un clic sur menuEtats.
      menuOuvert: false,
      //S’il y a un problème de chargement du fetch, le projet Resto avec ses informations sera affiché par défaut dans le HTML.
      imagePrincipalDefaut: "./img/projets/projet_resto3.png",
      titreDescritpionDefaut: "Resto",
      paragrapheDescriptionDefaut: `Resto est un projet de modélisation 3D réalisé dans un cadre académique. Pour ce projet, deux logiciels ont dû être utilisés : Maya pour la modélisation et Unity pour l’importation. J’ai réalisé ce projet en équipe de trois personnes composées de Kristy Moussally, Mégane Ranger et moi-même. Mon rôle dans ce projet était de modéliser trois modèles 3D (le pot de fleur, le drapeau italien et la porte du resto). Ces modèles ont ensuite été intégrés dans le restaurant.`,
      imageDescritpionDefaut: "./img/projets/projet_resto1.png",
      titreConception: "Description",
      paragrapheConceptionDefaut: `Nous avons, en équipe, réalisé ce projet dans le cadre du cours de modélisation 3D. En effet, nous devions créer une modélisation 3D originale sur le thème de notre choix, qui démontrerait nos capacités de modélisation dans un temps imparti et en utilisant les outils appris jusqu’à présent. Dans ce projet, j’ai dû, avec mon équipe, réaliser un sketch qui permettrait de visualiser la modélisation que nous devions faire. Nous avons réalisé un restaurant italien qui devait, rien que par le visuel, transporter le spectateur dans l’ambiance du pays où se trouvait ce restaurant.`,
      imageConceptionDefaut: "./img/projets/projet_resto2.png",
    };
  },
  //Dans la fonction mounted, on appelle le projects.json avec un fetch qui convertira le JSON en code pour qu’ensuite il soit accessible via le data. Le data sera appelé dans mon code avec le tableau vide du début qui s’appelle project.
  mounted() {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        this.project = data;
      })
      //Dans la console, une erreur apparaît si le data n’a pas été correctement chargé.
      .catch((error) => {
        console.error("Erreur le fetch ne fonctionne pas:", error);
      });
  },
  //La method gère un changement qui est provoqué dans le code par un clic dans le HTML, appelé par une fonction dans methods.
  methods: {
    //Le menuEtats change en true et false, et menuOuvert décide ainsi au clic dans le HTML, avec un if pour l’apparition du sousMenu.
    menuEtats() {
      this.menuOuvert = !this.menuOuvert;
    },
    //Les autres fonctions dans methods changent l’URL de la page projets pour ajouter le type de projet qui aurait été provoqué préalablement par un clic dans le HTML. Ces fonctions se trouvent dans le Swiper et dans le navigateur.
    jeux() {
      window.location.href = "projets.html?projet=jeux";
    },
    resto() {
      window.location.href = "projets.html?projet=modele";
    },
    courtMetrage() {
      window.location.href = "projets.html?projet=montage";
    },
    animation3d() {
      window.location.href = "projets.html?projet=animation";
    },
  },
  computed: {
    //Le estModele() fait en sorte qu’il n’apparaisse que dans le projet modele.
    estModele() {
      //Dans params, toute information qui se trouve après le point d’interrogation est récupérée, et ensuite dans projet, la valeur projet est récupérée dans cette URL.
      const params = new URLSearchParams(window.location.search);
      const projet = params.get("projet");
      return projet === "modele";
    },
    titreDescritpion() {
      const params = new URLSearchParams(window.location.search);
      const projet = params.get("projet");

      //Ce if empêche que le code continue si le tableau projects est vide. En gros, s’il n’y a pas de data, il va retourner une valeur par défaut du projet Resto.
      if (!this.project || this.project.length === 0) {
        return this.titreDescritpionDefaut;
      }

      //Ce if va faire en sorte que si l’URL de la page projets a un projet = un type spécifique de projet, il change l’information par une autre récupérée dans le tableau du projects.json, sinon il a une donnée du Resto par défaut.
      if (projet === "jeux") {
        return this.project[1].titreProjet;
      } else if (projet === "modele") {
        return this.project[0].titreProjet;
      } else if (projet === "montage") {
        return this.project[3].titreProjet;
      } else if (projet === "animation") {
        return this.project[2].titreProjet;
      } else {
        return this.titreDescritpionDefaut;
      }
    },
    //Le estModele() fait en sorte qu’il n’apparaisse que dans le projet Modèle.
    creationTitre() {
      const params = new URLSearchParams(window.location.search);
      const projet = params.get("projet");

      //Ce if empêche que le code continue si le tableau projects est vide. En gros, s’il n’y a pas de data, il va retourner une valeur par défaut.
      if (!this.project || this.project.length === 0) {
        return this.vide;
      }

      if (projet === "modele") {
        return this.project[0].processusCreation;
      } else {
        return this.vide;
      }
    },
    creationText() {
      //
      const params = new URLSearchParams(window.location.search);
      const projet = params.get("projet");

      if (!this.project || this.project.length === 0) {
        return this.vide;
      }

      if (projet === "modele") {
        return this.project[0].processusCreationText;
      } else {
        return this.vide;
      }
    },
    lienProjet() {
      const params = new URLSearchParams(window.location.search);
      const projet = params.get("projet");

      //Ce if empêche que le code continue si le tableau projects est vide. En gros, s’il n’y a pas de data, il va retourner une URL vide car Resto n’a pas de base d’URL.
      if (!this.project || this.project.length === 0) return "#";

      if (projet === "jeux") {
        return "https://amiratounekt.itch.io/balobilou";
      } else if (projet === "montage") {
        return "https://youtu.be/fH8j3C7BZWk";
      } else if (projet === "animation") {
        return "https://youtu.be/UIA_zOXrovo";
      } else {
        return "#";
      }
    },
    paragrapheDescription() {
      const params = new URLSearchParams(window.location.search);
      const projet = params.get("projet");

      if (!this.project || this.project.length === 0) {
        return this.paragrapheDescriptionDefaut;
      }

      if (projet === "jeux") {
        return this.project[1].projetPresentation;
      } else if (projet === "modele") {
        return this.project[0].projetPresentation;
      } else if (projet === "montage") {
        return this.project[3].projetPresentation;
      } else if (projet === "animation") {
        return this.project[2].projetPresentation;
      } else {
        return this.paragrapheDescriptionDefaut;
      }
    },
    imagePrincipal() {
      const params = new URLSearchParams(window.location.search);
      const projet = params.get("projet");

      if (!this.project || this.project.length === 0) {
        return this.imagePrincipalDefaut;
      }

      if (projet === "jeux") {
        return this.project[1].imageProjet;
      } else if (projet === "modele") {
        return this.project[0].imageProjet;
      } else if (projet === "montage") {
        return this.project[3].imageProjet;
      } else if (projet === "animation") {
        return this.project[2].imageProjet;
      } else {
        return this.imagePrincipalDefaut;
      }
    },
    imageDescritpion() {
      const params = new URLSearchParams(window.location.search);
      const projet = params.get("projet");

      if (!this.project || this.project.length === 0) {
        return this.imageDescritpionDefaut;
      }

      if (projet === "jeux") {
        return this.project[1].imagePresentation;
      } else if (projet === "modele") {
        return this.project[0].imagePresentation;
      } else if (projet === "montage") {
        return this.project[3].imagePresentation;
      } else if (projet === "animation") {
        return this.project[2].imagePresentation;
      } else {
        return this.imageDescritpionDefaut;
      }
    },
    paragrapheConception() {
      const params = new URLSearchParams(window.location.search);
      const projet = params.get("projet");

      if (!this.project || this.project.length === 0) {
        return this.paragrapheConceptionDefaut;
      }

      if (projet === "jeux") {
        return this.project[1].projetDescritpion;
      } else if (projet === "modele") {
        return this.project[0].projetDescritpion;
      } else if (projet === "montage") {
        return this.project[3].projetDescritpion;
      } else if (projet === "animation") {
        return this.project[2].projetDescritpion;
      } else {
        return this.paragrapheConceptionDefaut;
      }
    },
    imageConception() {
      const params = new URLSearchParams(window.location.search);
      const projet = params.get("projet");

      if (!this.project || this.project.length === 0) {
        return this.imageConceptionDefaut;
      }

      if (projet === "jeux") {
        return this.project[1].imageDescritpion;
      } else if (projet === "modele") {
        return this.project[0].imageDescritpion;
      } else if (projet === "montage") {
        return this.project[3].imageDescritpion;
      } else if (projet === "animation") {
        return this.project[2].imageDescritpion;
      } else {
        return this.imageConceptionDefaut;
      }
    },
  },
});

app.mount("#app");

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


# Animation GSAP de la page Projets


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*Le window va recalculer toutes les positions et la taille de la page pour repositionner le ScrollTrigger.*/
window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
});
window.addEventListener("orientationchange", () => {
  ScrollTrigger.refresh();
});

/*Cette partie de code appelle la bibliothèque ScrollTrigger de GSAP.*/
gsap.registerPlugin(ScrollTrigger);

//Ce ScrollTrigger empêche le header de bouger au scroll de la page.
ScrollTrigger.create({
  trigger: "header",
  start: "top top",
  endTrigger: ".portfolio",
  end: "bottom top",
  pin: true,
  pinSpacing: false,
});

//Ce ScrollTrigger empêche le div decoPresentation de bouger au scroll de la page.
ScrollTrigger.create({
  trigger: ".decoPresentation",
  start: "top-=11% top",
  pin: true,
  pinSpacing: false,
});

//Cette section est appelée du HTML vers le JavaScript et est mise dans un const.
const deuxiemeSection = document.querySelector(".deuxiemeSection");
//Le const est ensuite utilisé dans un if pour empêcher le ScrollTrigger d’exister si .deuxiemeSection n’est pas dans la page.
if (deuxiemeSection) {
  ScrollTrigger.create({
    trigger: ".deuxiemeSection",
    start: "center center",
    end: "bottom+=20% top",
    pin: true,
    pinSpacing: false,
    markers: false,
    //Après le commencement du pin par le start, cette animation GSAP commence.
    onEnter: () => {
      gsap.to(".presentation", {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scale: 1,
      });
    },
    //Après que le scroll soit repassé dans l’autre par le start, cette animation GSAP commence.
    onLeaveBack: () => {
      gsap.to(".presentation", {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scale: 0.95,
      });
    },
  });
}

const troisiemeSection = document.querySelector(".troisiemeSection");
if (troisiemeSection) {
  ScrollTrigger.create({
    trigger: ".troisiemeSection",
    start: "center-=15% center",
    end: "bottom top",
    onEnter: () => {
      gsap.to(".competance", {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scale: 1,
      });
    },
    onLeaveBack: () => {
      gsap.to(".competance", {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scale: 0.95,
      });
    },
  });
}

const premierSectionProjet = document.querySelector(".premierSectionProjet");
if (premierSectionProjet) {
  ScrollTrigger.create({
    trigger: ".premierSectionProjet",
    start: "center-+=25% center",
    onEnter: () => {
      gsap
        .timeline()
        .to(".projetExplixation", {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scale: 1,
        })
        .to(".projetDeveloppement", {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scale: 1,
        })
        .to(".projetCreation", {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scale: 1,
        });
    },
    onLeaveBack: () => {
      gsap
        .timeline()
        .to(".projetExplixation", {
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scale: 0.95,
        })
        .to(".projetDeveloppement", {
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scale: 0.95,
        })
        .to(".projetCreation", {
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scale: 0.95,
        });
    },
  });
}

//Une fonction animeFlocon est créée pour ensuite lui passer le sélecteur qui ira chercher les divs et un délai.
function animeFlocon(selector, delay = 0) {
  //Ensuite, dans la fonction, la largeur de la fenêtre est prise et le sélecteur est défini dans une variable.
  const flocon = document.querySelector(selector);
  const windowWidth = window.innerWidth;

  //Cette animation donne au div sélectionné une position de départ qui se situe en haut de la fenêtre, avec une largeur aléatoire.
  gsap.set(flocon, { x: Math.random() * windowWidth, y: 0 });

  //Pour finir, les flocons descendent plus bas que la fenêtre de 500 avec une animation.
  gsap.to(flocon, {
    y: window.innerHeight + 500,
    x: `+=${Math.random() * 100 - 0}`,
    duration: Math.random() * 5 + 5,
    repeat: -1,
    ease: "linear",
    delay: delay,
  });
}

// Lancer l’animation à différents endroits pour chaque flocon.
animeFlocon(".neige1", 0);
animeFlocon(".neige2", 0.5);
animeFlocon(".neige3", 1);
animeFlocon(".neige4", 1.5);
animeFlocon(".neige5", 2);
animeFlocon(".neige6", 2.5);

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


#   JAVASCRIPT PURE AVEC SWIPER


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

// Dans cette partie de code, le bouton Accueil et le logo sont cherchés dans le HTML pour les mettre dans une variable, qui est utilisée pour que, au clic sur ces éléments, l’utilisateur soit ramené à la page Accueil, donc index.
let boutonAccueil = document.querySelector(".bouton.accueil");
let logoAccueil = document.querySelector(".logo");

boutonAccueil.addEventListener("click", () => {
  window.location.href = "./index.html";
});
logoAccueil.addEventListener("click", () => {
  window.location.href = "./index.html";
});

// La bibliothèque Swiper dans le HTML est utilisée pour définir deux carrousels interactifs. Le premier a des flèches pour naviguer et le deuxième a juste des points de pagination.
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
});

const swiperResto = new Swiper(".swiperResto", {
  direction: "horizontal",
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
