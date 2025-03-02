const toggleButton = document.querySelector(".toggle-button");
const mainMenu = document.querySelector(".main-menu");
const menuItems = document.querySelectorAll(".has-submenu");

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

/* Activate Submenu */
function toggleItem(event) {
    event.preventDefault(); // Prevents the default link action

    if (this.classList.contains("submenu-active")) {
        this.classList.remove("submenu-active");
    } else {
        let activeItem = mainMenu.querySelector(".submenu-active");
        if (activeItem) {
            activeItem.classList.remove("submenu-active");
        }
        this.classList.add("submenu-active");
    }
}

/* Event Listeners */
menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", toggleItem);
    menuItem.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            toggleItem.call(this, e);
        }
    });
});


function home() {
    window.location.href = "index.html";
}

function who() {
    window.location.href = "Whoweare.html";
}

function leader() {
    window.location.href = "Leadership.html";
}

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    slides.forEach(slide => slide.classList.remove("active"));

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    slides[slideIndex - 1].classList.add("active");

    setTimeout(showSlides, 3500); // Change slide every 3.5 seconds
}

showSlides();