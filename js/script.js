document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  let currentSlide = 0;
  let slideInterval = setInterval(showNextSlide, 1000); // Auto slide every 1 second

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  function showNextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function showPrevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  next.addEventListener("click", () => {
    clearInterval(slideInterval); // Clear interval on manual navigation
    showNextSlide();
    slideInterval = setInterval(showNextSlide, 1000); // Restart auto slide
  });

  prev.addEventListener("click", () => {
    clearInterval(slideInterval); // Clear interval on manual navigation
    showPrevSlide();
    slideInterval = setInterval(showNextSlide, 1000); // Restart auto slide
  });

  showSlide(currentSlide);
});
