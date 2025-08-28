document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("✅ Thank you! We’ll get back to you shortly.");
      form.reset();
    });
  }
});
