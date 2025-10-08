gsap.registerPlugin(ScrollTrigger);

gsap.to(".deuxiemeSection", {
  pin: false,
    scrollTrigger: {
      trigger: ".decoPresentation",
      start: "top top",
      end: "bottom top",
      scrub: true,
      pin: true,
      markers: true,   
    },
    y: "-100vh", 
    markers: true,
    pin: true,  
  });

 /* gsap.to(".troisiemeSection", {
    scrollTrigger: {
      trigger: ".deuxiemeSection",
      start: "center top",
      end: "bottom top",
      scrub: true,
      pin: true,
      y: "-200vh",
      markers: true,   
    },
    y: "-100vh", 
    markers: true,  
  });
  */

  