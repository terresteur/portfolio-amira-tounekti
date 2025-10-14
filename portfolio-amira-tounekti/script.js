/*-----------------------------------------------------------------------------------------------------------

# Vue de la navigation project

-------------------------------------------------------------------------------------------------------------*/ 

const app = Vue.createApp({
  data() {
    
    return {
      projets: 0,
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
      window.location.href = "projets.html?projet=jeux";
      this.projets = 1;
      this.titreDescritpion = "BaloBilou";
    },
    resto() {
      window.location.href = "projets.html";
      this.titreDescritpion = "Restorant";
      this.projets = 2;
      if(this.projets = 2) {
        this.titreDescritpion = "BaloBilou";
      }
    }
  }
});

app.mount('#app')

/*-----------------------------------------------------------------------------------------------------------

# Animation GSAP de la page Projets

-------------------------------------------------------------------------------------------------------------*/ 

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".decoPresentation",
  start: "top top",
  end: "bottom+=100% top",
  pin: true,
  pinSpacing: false,
  markers: true,
});

/*ScrollTrigger.create({
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
});*/

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

