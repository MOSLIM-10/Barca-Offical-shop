// Carousel Functionality
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-item");

// Show the current slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? "1" : "0";
        slide.style.zIndex = i === index ? "1" : "0";
    });
}

// Move to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Automatically change slides every 5 seconds
setInterval(nextSlide, 5000);
showSlide(currentSlide);

// Form Submission
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    if (name.trim() && email.trim() && message.trim()) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        form.reset();
    } else {
        alert("Please fill in all fields.");
    }
});

// Add-to-cart Button Interaction
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert("Item added to cart!");
    });
});
