gsap.registerPlugin(ScrollTrigger);

gsap.to(".deuxiemeSection", {
    scrollTrigger: {
      trigger: ".decoPresentation",
      start: "top top",
      end: "bottom top",
      scrub: true,
      pin: true,
    },
    y: "-100vh", 
  });
  

  