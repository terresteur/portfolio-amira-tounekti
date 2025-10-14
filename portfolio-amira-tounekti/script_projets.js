/*-----------------------------------------------------------------------------------------------------------

# Vue de la navigation project

-------------------------------------------------------------------------------------------------------------*/ 
  let boutonProjet = document.querySelector(".bouton.projet");



  boutonProjet.addEventListener("click", () => {
    window.location.href = "projets.html";
  });

const app = Vue.createApp({
  data() {
    return {
      imagePrincipal: "./img/projets/projet_resto3.jpg",
      titreDescritpion: "Resto",
      paragrapheDescription: `Resto est un projet à mention académique, réalisé dans le cadre du cours Modélisation 3D. Ce travail a été effectué en équipe de trois, avec Kristy Moussally et Mégane Ranger.
                              Mon rôle principal dans ce projet consistait à la modélisation de trois objets. Le projet a été conçu à l’aide du logiciel Maya et appartient à la catégorie des scènes 3D.`,
      imageDescritpion: '',
      titreConception: "Description",
      paragrapheConception: `Le projet consistait à réaliser une modélisation originale en 3D. Le professeur nous a demandé de dessiner un environnement sur le thème de notre choix et de réaliser en équipe une modélisation 3D originale de cet environnement, en intégrant les méthodes apprises en cours.
                             Pour ma part, j’ai participé au sketch en dessinant l’environnement et j’ai également réalisé trois modèles 3D : un pot de fleurs, une porte et un drapeau italien.`,
      imageConception: '',
    };
  },
  methods: {
    jeux() {
      this.titreDescritpion = "BaloBilou";
    },
    resto() {
      this.titreDescritpion = "Restorant";
    }
  }
});

app.mount('#app')

/*-----------------------------------------------------------------------------------------------------------

# Animation GSAP de la page Projets

-------------------------------------------------------------------------------------------------------------*/ 

  let boutonAccueil = document.querySelector(".bouton.accueil");

  
  boutonAccueil.addEventListener("click", () => {
    window.location.href = "accueil.html";
  });

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".decoPresentation",
  start: "top top",
  end: "bottom+=100% top",
  pin: true,
  pinSpacing: false,
  markers: true,
});

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
});



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


