document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".about-us-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.2 } // reveal when 20% is visible
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});
