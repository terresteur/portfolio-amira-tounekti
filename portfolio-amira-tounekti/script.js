/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


# Vue de la navigation project


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/ 

const app = Vue.createApp({
  data() {
    
    return {
      project: [],
      disponible: true,
      menuOuvert: false,
      imagePrincipalDefaut: "./img/projets/projet_resto3.png",
      titreDescritpionDefaut: "Resto",
      paragrapheDescriptionDefaut: `Resto est un projet de modélisation 3D réalisé dans un cadre académique. Pour ce projet, deux logiciels ont dû être utilisés : Maya pour la modélisation et Unity pour l’importation. J’ai réalisé ce projet en équipe de trois personnes composées de Kristy Moussally, Mégane Ranger et moi-même. Mon rôle dans ce projet était de modéliser trois modèles 3D (le pot de fleur, le drapeau italien et la porte du resto). Ces modèles ont ensuite été intégrés dans le restaurant.`,
      imageDescritpionDefaut: './img/projets/projet_resto1.png',
      titreConception: "Description",
      paragrapheConceptionDefaut: `Nous avons, en équipe, réalisé ce projet dans le cadre du cours de modélisation 3D. En effet, nous devions créer une modélisation 3D originale sur le thème de notre choix, qui démontrerait nos capacités de modélisation dans un temps imparti et en utilisant les outils appris jusqu’à présent. Dans ce projet, j’ai dû, avec mon équipe, réaliser un sketch qui permettrait de visualiser la modélisation que nous devions faire. Nous avons réalisé un restaurant italien qui devait, rien que par le visuel, transporter le spectateur dans l’ambiance du pays où se trouvait ce restaurant.`,
      imageConceptionDefaut: './img/projets/projet_resto2.png',
    };
  },
  mounted() {
    fetch('projects.json')
      .then(res => res.json())
      .then(data => {
          console.log(data);

          this.project = data;
      })
      .catch(error => {
          console.error("Erreur le fetch ne fonctionne pas:", error);
      });
  },
  methods: {
    menuEtats() {
      this.menuOuvert = !this.menuOuvert;
    },
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
    titreDescritpion(){
      //Un objet JavaScript qui te permet de facilement lire les paramètres passés dans l’URL
      const params = new URLSearchParams(window.location.search);
      const projet = params.get("projet");

      //Elle empêche que le code continue si le tableu project est vide
      if (!this.project || this.project.length === 0) {
        return this.titreDescritpionDefaut; 
      };

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
   lienProjet() {
      const params = new URLSearchParams(window.location.search);
      const projet = params.get("projet");

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
    paragrapheDescription(){
      const params = new URLSearchParams(window.location.search);
      const projet = params.get("projet");

      if (!this.project || this.project.length === 0) {
        return this.paragrapheDescriptionDefaut; 
      };


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
    imagePrincipal(){
      const params = new URLSearchParams(window.location.search);
      const projet = params.get("projet");


      if (!this.project || this.project.length === 0) {
        return this.imagePrincipalDefaut; 
      };


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
    imageDescritpion(){
      const params = new URLSearchParams(window.location.search);
      const projet = params.get("projet");

      if (!this.project || this.project.length === 0) {
        return this.imageDescritpionDefaut; 
      };


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
    paragrapheConception(){
      const params = new URLSearchParams(window.location.search);
      const projet = params.get("projet");

      if (!this.project || this.project.length === 0) {
        return this.paragrapheConceptionDefaut; 
      };


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
    imageConception(){
      const params = new URLSearchParams(window.location.search);
      const projet = params.get("projet");

      if (!this.project || this.project.length === 0) {
        return this.imageConceptionDefaut; 
      };


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
  }
});

app.mount('#app')

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


# Animation GSAP de la page Projets


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/ 

/*Recalcule toutes les positions et dimensions de tous tes ScrollTrigger sur la page.*/
window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
});

window.addEventListener("orientationchange", () => {
  ScrollTrigger.refresh();
});

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: "header",
  start: "top top",
  endTrigger: ".Portfolio",
  end: "bottom top",
  pin: true,
  pinSpacing: false,
});

ScrollTrigger.create({
  trigger: ".decoPresentation",
  start: "top-=11% top",
  pin: true,
  pinSpacing: false,
});

const deuxiemeSection = document.querySelector(".deuxiemeSection");
if (deuxiemeSection) {
ScrollTrigger.create({
  trigger: ".deuxiemeSection",
  start: "center center",
  end: "bottom+=50% top",
  pin: true,
  pinSpacing: false,
  onEnter: () => {
    gsap.to(".presentation", { 
      opacity: 1, 
      duration: 1, 
      ease: "power2.out",
      scale:1,
    });
  },
  onLeaveBack: () => {
    gsap.to(".presentation", { 
      opacity: 0, 
      duration: 1, 
      ease: "power2.out",
      scale: 0.95,
    });
  }
})};


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
      scale:1,
    });
  },
  onLeaveBack: () => {
    gsap.to(".competance", { 
      opacity: 0, 
      duration: 1, 
      ease: "power2.out",
      scale: 0.95,
    });
  }
})};

const premierSectionProjet = document.querySelector(".premierSectionProjet");
if (premierSectionProjet) {
ScrollTrigger.create({
  trigger: ".premierSectionProjet",
  start: "center-+=20% center",
  onEnter: () => {
    gsap
    .timeline()
    .to(".projetExplixation", { 
      opacity: 1, 
      duration: 0.8, 
      ease: "power2.out",
      scale:1,
    })
    .to(".projetDeveloppement", { 
      opacity: 1, 
      duration: 0.8, 
      ease: "power2.out",
      scale:1,
    })
  },
  onLeaveBack: () => {
    gsap
    .timeline()
    .to(".projetExplixation", { 
      opacity: 0, 
      duration: 0.8, 
      ease: "power2.out",
      scale: 0.95,
    }).to(".projetDeveloppement", { 
      opacity: 0, 
      duration: 0.8, 
      ease: "power2.out",
      scale: 0.95,
    })
  }
})};

function animeFlocon(selector, delay = 0) {
  const flocon = document.querySelector(selector);
  const windowWidth = window.innerWidth;

  gsap.set(flocon, { x: Math.random() * windowWidth, y: 0 });

  gsap.to(flocon, {
      y: window.innerHeight + 10, 
      x: `+=${Math.random() * 100 - 0}`, 
      duration: Math.random() * 5 + 5,
      repeat: -1, 
      ease: "linear",
      delay: delay
  });
}

// Lancer l'animation pour chaque flocon
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

let boutonAccueil = document.querySelector(".bouton.accueil");
let logoAccueil = document.querySelector(".logo");

  
boutonAccueil.addEventListener("click", () => {
  window.location.href = "accueil.html";
});
logoAccueil.addEventListener("click", () => {
  window.location.href = "accueil.html";
});


const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
});


