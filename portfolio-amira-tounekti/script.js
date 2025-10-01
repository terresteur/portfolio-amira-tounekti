gsap.registerPlugin(ScrollTrigger);

  let currentIndex = 0;
  const images = document.querySelectorAll('.carousel-img');

  function showSlide(index) {
    images.forEach((img, i) => {
      img.classList.remove('active');
      if (i === index) img.classList.add('active');
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
  }

  showSlide(currentIndex);