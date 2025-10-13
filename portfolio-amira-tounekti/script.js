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
});

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

  let boutonProjet = document.querySelector(".bouton.projet");
  let boutonAccueil = document.querySelector(".bouton.accueil");

  boutonProjet.addEventListener("click", () => {
    window.location.href = "projets.html";
  });

  boutonAccueil.addEventListener("click", () => {
    window.location.href = "accueil.html";
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