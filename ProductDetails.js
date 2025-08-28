// Get product ID from URL
const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));

const product = window.productsData.find(p => p.id === productId);

if (product) {
  document.getElementById("product-image").src = product.imageUrl;
  document.getElementById("product-name").textContent = product.name;
  document.getElementById("product-title").textContent = product.subtitle;
  document.getElementById("product-price").textContent = `₹${product.mrp} / ${product.size}`;
  document.getElementById("product-description").textContent = product.description;
  document.getElementById("modal-title").textContent = `Enquire about ${product.name}`;
}

// Modal logic
const enquiryModal = document.getElementById("enquiryModal");
const messageModal = document.getElementById("messageModal");
const closeEnquiryBtn = enquiryModal.querySelector(".close-btn");
const closeMessageBtn = document.getElementById("closeMessage");
const enquireBtn = document.getElementById("enquireBtn");

enquireBtn.onclick = () => enquiryModal.classList.remove("hidden");
closeEnquiryBtn.onclick = () => enquiryModal.classList.add("hidden");
closeMessageBtn.onclick = () => messageModal.classList.add("hidden");


// Form submission
const enquiryForm = document.getElementById("enquiryForm");
const messageText = document.getElementById("messageText");

enquiryForm.addEventListener("submit", e => {
  e.preventDefault();

  // Get form values
  const formData = new FormData(enquiryForm);
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const message = formData.get("message");

  console.log("Enquiry submitted:", { name, email, phone, message });

  enquiryModal.classList.remove("active");
  messageText.textContent = "✅ Thank you! We’ll contact you soon.";
  messageModal.classList.add("active");
  enquiryForm.reset();
});

