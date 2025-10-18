/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


# Vue de la navigation project


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/ 

const app = Vue.createApp({
  data() {
    
    return {
      project: [],
      imagePrincipalDefaut: "./img/projets/projet_resto3.jpg",
      titreDescritpionDefaut: "Resto",
      paragrapheDescriptionDefaut: `Resto est un projet à mention académique, réalisé dans le cadre du cours Modélisation 3D. Ce travail a été effectué en équipe de trois, avec Kristy Moussally et Mégane Ranger.
                              Mon rôle principal dans ce projet consistait à la modélisation de trois objets. Le projet a été conçu à l’aide du logiciel Maya et appartient à la catégorie des scènes 3D.`,
      imageDescritpionDefaut: '',
      titreConception: "Description",
      paragrapheConceptionDefaut: `Le projet consistait à réaliser une modélisation originale en 3D. Le professeur nous a demandé de dessiner un environnement sur le thème de notre choix et de réaliser en équipe une modélisation 3D originale de cet environnement, en intégrant les méthodes apprises en cours.
                             Pour ma part, j’ai participé au sketch en dessinant l’environnement et j’ai également réalisé trois modèles 3D : un pot de fleurs, une porte et un drapeau italien.`,
      imageConceptionDefaut: '',
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
          console.error("Erreur fetch RandomUser :", error);
      });
  },
  methods: {
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
    }
  },
  computed: {
    titreDescritpion(){
      const params = new URLSearchParams(window.location.search);
      const projet = params.get("projet");

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
    paragrapheDescription(){
      const params = new URLSearchParams(window.location.search);
      const projet = params.get("projet");

      if (!this.project || this.project.length === 0) {
        return this.titreDescritpionDefaut; 
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
        return this.titreDescritpionDefaut; 
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
        return this.paragrapheDescriptionDefaut; 
      }
    },
    imageDescritpion(){
      const params = new URLSearchParams(window.location.search);
      const projet = params.get("projet");

      if (!this.project || this.project.length === 0) {
        return this.titreDescritpionDefaut; 
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
        return this.paragrapheDescriptionDefaut; 
      }
    },
    paragrapheConception(){
      const params = new URLSearchParams(window.location.search);
      const projet = params.get("projet");

      if (!this.project || this.project.length === 0) {
        return this.titreDescritpionDefaut; 
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
        return this.paragrapheDescriptionDefaut; 
      }
    },
    imageConception(){
      const params = new URLSearchParams(window.location.search);
      const projet = params.get("projet");

      if (!this.project || this.project.length === 0) {
        return this.titreDescritpionDefaut; 
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
        return this.paragrapheDescriptionDefaut; 
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

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".decoPresentation",
  start: "top top",
  end: "bottom+=100% top",
  pin: true,
  pinSpacing: false,
  markers: true,
});

const deuxiemeSection = document.querySelector(".deuxiemeSection");
if (deuxiemeSection) {
ScrollTrigger.create({
  trigger: ".deuxiemeSection",
  start: "center center",
  end: "bottom+=50% top",
  pin: true,
  pinSpacing: false,
  markers: true,
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
  markers: true,
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
  markers: true,
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
      y: window.innerHeight + 20, 
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


const images = document.querySelectorAll(".carousel-img");
let currentIndex = 0; 

function showSlide(index) {
  if (index >= images.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = images.length - 1;
  } else {
    currentIndex = index;
  }

  images.forEach(img => img.classList.remove("active"));

  images[currentIndex].classList.add("active");
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

let boutonAccueil = document.querySelector(".bouton.accueil");

  
boutonAccueil.addEventListener("click", () => {
  window.location.href = "accueil.html";
});

