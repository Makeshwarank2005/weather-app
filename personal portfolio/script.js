// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// TYPING ANIMATION

const words = [
    "Web Developer",
    "Python Developer",
    "AI Enthusiast",
    "Problem Solver"
];

const typingText = document.getElementById("typingText");

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typingAnimation() {

    const currentWord = words[wordIndex];

    if (deleting === false) {

        typingText.textContent =
            currentWord.substring(0, letterIndex + 1);

        letterIndex++;

        if (letterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typingAnimation, 1300);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, letterIndex - 1);

        letterIndex--;

        if (letterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    if (deleting) {

        setTimeout(typingAnimation, 45);

    } else {

        setTimeout(typingAnimation, 85);

    }
}

typingAnimation();


// NAVBAR SHADOW WHEN SCROLLING

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 30) {

        header.style.boxShadow =
            "0 8px 30px rgba(30, 40, 70, 0.08)";

    } else {

        header.style.boxShadow = "none";

    }

});