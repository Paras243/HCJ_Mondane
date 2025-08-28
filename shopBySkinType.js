// ShopBySkinType.js
document.addEventListener("DOMContentLoaded", () => {
  const skinTypes = [
    { img: "./assets/oilySkin.png", alt: "Oily Skin" },
    { img: "./assets/drySkin.png", alt: "Dry Skin" },
    { img: "./assets/sensitiveSkin.png", alt: "Sensitive Skin" },
    { img: "./assets/normalSkin.png", alt: "Normal Skin" }
  ];

  const container = document.getElementById("skin-type-grid");

  skinTypes.forEach(type => {
    const card = document.createElement("div");
    card.className = "skin-type-card";

    const img = document.createElement("img");
    img.src = type.img;
    img.alt = type.alt;

    card.appendChild(img);
    container.appendChild(card);
  });
});
