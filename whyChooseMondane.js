document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    reveals.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.style.animationPlayState = "running";
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});
