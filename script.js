const toggleButton = document.querySelector(".toggle-button");
const mainMenu = document.querySelector(".main-menu");

toggleButton.addEventListener('click', function () {
    // Toggles the active class
    mainMenu.classList.toggle('active');
    if (mainMenu.classList.contains("active")) {
        // Adds the close (x) icon 
        toggleButton.innerHTML = "&#215;";
    } else {
        // Adds the hamburger icon 
        toggleButton.innerHTML = "&#9776;";
    }
});

function home() {
    window.location.href = "index.html";
}

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    slides.forEach(slide => slide.classList.remove("active"));

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    slides[slideIndex - 1].classList.add("active");

    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

showSlides();