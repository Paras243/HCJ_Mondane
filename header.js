document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const menuToggler = document.querySelector(".menu-toggler");
  const navLinksContainer = document.querySelector(".nav-links-container");

  // Scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Mobile menu toggle
  menuToggler.addEventListener("click", () => {
    menuToggler.classList.toggle("active");
    navLinksContainer.classList.toggle("open");
  });

  // Close menu when clicking a link
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      menuToggler.classList.remove("active");
      navLinksContainer.classList.remove("open");
    });
  });
});
