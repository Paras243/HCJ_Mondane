let currentSlide = 0;
let slides = document.querySelectorAll(".slide");
let dotsContainer = document.getElementById("pagination");
let autoPlayInterval;

// Generate dots dynamically
slides.forEach((_, i) => {
  let dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => goToSlide(i));
  dotsContainer.appendChild(dot);
});

let dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
  });
  slides[index].classList.add("active");
  dots[index].classList.add("active");
  currentSlide = index;
}

function nextSlide() {
  let next = (currentSlide + 1) % slides.length;
  showSlide(next);
}

function prevSlide() {
  let prev = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(prev);
}

function goToSlide(index) {
  showSlide(index);
  resetAutoPlay();
}

function autoPlay() {
  autoPlayInterval = setInterval(nextSlide, 5000); // 5s
}

function resetAutoPlay() {
  clearInterval(autoPlayInterval);
  autoPlay();
}

// Scroll to products
function scrollToProducts() {
  let section = document.getElementById("our-products");
  if (section) section.scrollIntoView({ behavior: "smooth" });
}

// Start autoplay
document.addEventListener("DOMContentLoaded", autoPlay);
