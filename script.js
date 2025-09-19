// -------------------------
// NAVBAR TOGGLE (Mobile Menu)
// -------------------------
const navToggleBtn = document.createElement("button");
navToggleBtn.classList.add("nav-toggle");
navToggleBtn.innerHTML = "&#9776;"; // hamburger icon
document.querySelector(".navbar").prepend(navToggleBtn);

const navLinks = document.querySelector(".nav-links");

navToggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// -------------------------
// SLIDER FUNCTIONALITY
// -------------------------
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlideFunc() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

// Auto play slider every 5 seconds
setInterval(nextSlide, 5000);

if (nextBtn) nextBtn.addEventListener("click", nextSlide);
if (prevBtn) prevBtn.addEventListener("click", prevSlideFunc);

// -------------------------
// CONTACT FORM VALIDATION
// -------------------------
const contactForm = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      formMsg.textContent = "⚠️ Please fill in all fields.";
      formMsg.style.color = "red";
      return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      formMsg.textContent = "⚠️ Please enter a valid email address.";
      formMsg.style.color = "red";
      return;
    }

    formMsg.textContent = "✅ Thank you! Your message has been sent.";
    formMsg.style.color = "green";
    contactForm.reset();
  });
}

// -------------------------
// DYNAMIC CONTENT (Services Expand/Collapse)
// -------------------------
const serviceCards = document.querySelectorAll(".service-cards .card");

serviceCards.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("expanded");
    const para = card.querySelector("p");
    if (card.classList.contains("expanded")) {
      para.style.maxHeight = "200px";
    } else {
      para.style.maxHeight = "60px";
    }
  });
});
