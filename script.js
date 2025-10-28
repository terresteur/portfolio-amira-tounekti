/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


# Vue de la navigation project


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/ 

const app = Vue.createApp({
  data() {
    return {
      vide: '',
      //Le project est un tableau vide qui contiendra le data de fetch permettons ainsi d'acceder au information du projects.json.
      project: [],
      //Le disponible vas descider dans le HTML grace a un if et else de l'apparition de l'un des deux paragraphe.
      disponible: true,
      //Le menuOuvert vas descider de l'apparition ou non du sousMenu dans le HTML avec un if. Son etats d'apparition seras gerer pas un clique du menuEtats.
      menuOuvert: false,
      //Si il y a un probleme de chargement du fetch le projet resto avec c'est information sera montré par defaut dans le HTML.
      imagePrincipalDefaut: "./img/projets/projet_resto3.png",
      titreDescritpionDefaut: "Resto",
      paragrapheDescriptionDefaut: `Resto est un projet de modélisation 3D réalisé dans un cadre académique. Pour ce projet, deux logiciels ont dû être utilisés : Maya pour la modélisation et Unity pour l’importation. J’ai réalisé ce projet en équipe de trois personnes composées de Kristy Moussally, Mégane Ranger et moi-même. Mon rôle dans ce projet était de modéliser trois modèles 3D (le pot de fleur, le drapeau italien et la porte du resto). Ces modèles ont ensuite été intégrés dans le restaurant.`,
      imageDescritpionDefaut: './img/projets/projet_resto1.png',
      titreConception: "Description",
      paragrapheConceptionDefaut: `Nous avons, en équipe, réalisé ce projet dans le cadre du cours de modélisation 3D. En effet, nous devions créer une modélisation 3D originale sur le thème de notre choix, qui démontrerait nos capacités de modélisation dans un temps imparti et en utilisant les outils appris jusqu’à présent. Dans ce projet, j’ai dû, avec mon équipe, réaliser un sketch qui permettrait de visualiser la modélisation que nous devions faire. Nous avons réalisé un restaurant italien qui devait, rien que par le visuel, transporter le spectateur dans l’ambiance du pays où se trouvait ce restaurant.`,
      imageConceptionDefaut: './img/projets/projet_resto2.png',
    };
  },
  //Dans la fonction mounted en appel le projects.json avec un fetch qui convertiras le json en code pour que ensuite il soit chercher via le data. Le data sera appeler dans mon code avec le tableau vide du debut qui s'appel project.
  mounted() {
    fetch('projects.json')
      .then(res => res.json())
      .then(data => {
          console.log(data);

          this.project = data;
      })
      //Dans la console une erreur apparait si le data na pas etais correctement charger.
      .catch(error => {
          console.error("Erreur le fetch ne fonctionne pas:", error);
      });
  },
  //La methods gerer un changement qui est provoquer dans le code par un clique dans le HTML qui est appeler par une fonction dans methods.
  methods: {
    //Le menuEtats change en true et false le menuOuvert descide ainsi au clique dans le HTML avec un if de l'apparition du sousMenu.
    menuEtats() {
      this.menuOuvert = !this.menuOuvert;
    },
    //Les autres fonction dans methods change l'URL de la page projets pour ajouter le type de projets qui aurais etais provoque au prehalable pas un clique dans le html. C'est fonction ce trouve dans le swiper et dans le navigateur.
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
    estModele() {
      const params = new URLSearchParams(window.location.search);
      const projet = params.get("projet");
      return projet === "modele";
    },
    titreDescritpion(){
      //
      const params = new URLSearchParams(window.location.search);
      const projet = params.get("projet");

      //Ce if empêche que le code continue si le tableu projects est vide. En gros si le n'a pas le data il vas retourner une valeur par defaut du projet resto.
      if (!this.project || this.project.length === 0) {
        return this.titreDescritpionDefaut; 
      };

      
      //Ce if vas faire en sorte que si l'URL de la page projets a un projet = un type specifique de projet, change l'information par une autre recuperer dans le tableau du projects.json, sinon avois une donner du resto par defaut.
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
    creationTitre(){
      //
      const params = new URLSearchParams(window.location.search);
      const projet = params.get("projet");

      //Ce if empêche que le code continue si le tableu projects est vide. En gros si le n'a pas le data il vas retourner une valeur par defaut du projet resto.
      if (!this.project || this.project.length === 0) {
        return this.vide; 
      };

      //Ce if vas faire en sorte que si l'URL de la page projets a un projet = un type specifique de projet, change l'information par une autre recuperer dans le tableau du projects.json, sinon avois une donner du resto par defaut.
      if (projet === "modele") {
        return this.project[0].processusCreation;
      } else {
        return this.vide; 
      }
    },
    creationText(){
      //
      const params = new URLSearchParams(window.location.search);
      const projet = params.get("projet");

      //Ce if empêche que le code continue si le tableu projects est vide. En gros si le n'a pas le data il vas retourner une valeur par defaut du projet resto.
      if (!this.project || this.project.length === 0) {
        return this.vide; 
      };

      //Ce if vas faire en sorte que si l'URL de la page projets a un projet = un type specifique de projet, change l'information par une autre recuperer dans le tableau du projects.json, sinon avois une donner du resto par defaut.
      if (projet === "modele") {
        return this.project[0].processusCreationText;
      } else {
        return this.vide; 
      }
    },
   lienProjet() {
      const params = new URLSearchParams(window.location.search);
      const projet = params.get("projet");

    //Ce if empêche que le code continue si le tableu projects est vide. En gros si le n'a pas le data il vas retourner un URL vide car resto n'a pas de base d'URL.
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

/*Le window vas recalculer tout les position et la taille de la page pour reposition le scrollTrigger.*/
window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
});
window.addEventListener("orientationchange", () => {
  ScrollTrigger.refresh();
});

/*Cette partis de code appel la biblioteque ScrollTrigger du GSAP.*/
gsap.registerPlugin(ScrollTrigger);

//Ce scrollTrigger empeche le header de bouger au scroll de la page.
ScrollTrigger.create({
  trigger: "header",
  start: "top top",
  endTrigger: ".portfolio",
  end: "bottom top",
  pin: true,
  pinSpacing: false,
});

//Ce scrollTrigger empeche le div decoPresentation de bouger au scroll de la page.
ScrollTrigger.create({
  trigger: ".decoPresentation",
  start: "top-=11% top",
  pin: true,
  pinSpacing: false,
});

//La deuxieme section est appeler du html vers le javascript et est mis dans un const.
const deuxiemeSection = document.querySelector(".deuxiemeSection");
//Le const est ensuite utiliser dans un if pour empecher le scrollTrigger d'exister si le .deuxiemeSection n'est pas dans la page.
if (deuxiemeSection) {
  ScrollTrigger.create({
    trigger: ".deuxiemeSection",
    start: "center center",
    end: "bottom+=50% top",
    pin: true,
    pinSpacing: false,
    //Aprés le commenece du pin par le start cette animation gsap commence.
    onEnter: () => {
      gsap.to(".presentation", { 
        opacity: 1, 
        duration: 1, 
        ease: "power2.out",
        scale:1,
      });
    },
    //Aprés que le scroll sois repasser dans l'autre par le start cette animaion gsap commence.
    onLeaveBack: () => {
      gsap.to(".presentation", { 
        opacity: 0, 
        duration: 1, 
        ease: "power2.out",
        scale: 0.95,
      });
    }
  })
};


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
  })
};

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
        scale:1,
      })
      .to(".projetDeveloppement", { 
        opacity: 1, 
        duration: 0.8, 
        ease: "power2.out",
        scale:1,
      })
      .to(".projetCreation", { 
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
      .to(".projetCreation", { 
        opacity: 0, 
        duration: 0.8, 
        ease: "power2.out",
        scale:0.95,
      })
    }
  })
};

function animeFlocon(selector, delay = 0) {
  const flocon = document.querySelector(selector);
  const windowWidth = window.innerWidth;

  gsap.set(flocon, { x: Math.random() * windowWidth, y: 0 });

  gsap.to(flocon, {
      y: window.innerHeight + 500, 
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
  window.location.href = "./index.html";
});
logoAccueil.addEventListener("click", () => {
  window.location.href = "./index.html";
});


const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
});


