document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector(".about-us-section");

  function handleScroll() {
    const sectionTop = aboutSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
      aboutSection.classList.add("is-visible");
    }
  }

  window.addEventListener("scroll", handleScroll);
});
