"use strict";


/* =========================================
   ELEMENT SELECTION
========================================= */

const menuButton =
    document.getElementById("menuButton");

const navigation =
    document.getElementById("navigation");

const themeButton =
    document.getElementById("themeButton");

const welcomeButton =
    document.getElementById("welcomeButton");

const welcomeMessage =
    document.getElementById("welcomeMessage");

const contactForm =
    document.getElementById("contactForm");

const nameInput =
    document.getElementById("name");

const emailInput =
    document.getElementById("email");

const messageInput =
    document.getElementById("message");

const nameError =
    document.getElementById("nameError");

const emailError =
    document.getElementById("emailError");

const messageError =
    document.getElementById("messageError");

const formSuccess =
    document.getElementById("formSuccess");

const characterCount =
    document.getElementById("characterCount");

const scrollTop =
    document.getElementById("scrollTop");

const navLinks =
    document.querySelectorAll(".navigation a");

const faqQuestions =
    document.querySelectorAll(".faq-question");

const counters =
    document.querySelectorAll(".counter");


/* =========================================
   MOBILE MENU
========================================= */

menuButton.addEventListener("click", () => {

    const isOpen =
        navigation.classList.toggle("active");

    menuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    menuButton.setAttribute(
        "aria-label",
        isOpen
            ? "Close navigation menu"
            : "Open navigation menu"
    );

    menuButton.textContent =
        isOpen ? "✕" : "☰";

});


navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navigation.classList.remove("active");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        menuButton.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

        menuButton.textContent = "☰";

    });

});


/* =========================================
   THEME SWITCHER
========================================= */

function updateThemeButton() {

    const isLight =
        document.body.classList.contains("light-mode");

    themeButton.textContent =
        isLight ? "☾" : "☀";

    themeButton.setAttribute(
        "aria-label",
        isLight
            ? "Switch to dark mode"
            : "Switch to light mode"
    );

}


themeButton.addEventListener("click", () => {

    const isLight =
        document.body.classList.toggle("light-mode");

    localStorage.setItem(
        "theme",
        isLight ? "light" : "dark"
    );

    updateThemeButton();

});


const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "light") {

    document.body.classList.add("light-mode");

}


updateThemeButton();


/* =========================================
   WELCOME BUTTON
========================================= */

welcomeButton.addEventListener("click", () => {

    welcomeMessage.textContent =
        "Hello! Thanks for exploring my Week 4 project.";

});


/* =========================================
   FAQ ACCORDION
========================================= */

faqQuestions.forEach((question) => {

    question.addEventListener("click", () => {

        const currentItem =
            question.closest(".faq-item");

        const currentAnswer =
            currentItem.querySelector(".faq-answer");

        const isOpen =
            currentItem.classList.contains("active");


        /* Close all other FAQ items */

        document
            .querySelectorAll(".faq-item")
            .forEach((item) => {

                if (item !== currentItem) {

                    item.classList.remove("active");

                    const otherQuestion =
                        item.querySelector(".faq-question");

                    const otherAnswer =
                        item.querySelector(".faq-answer");

                    otherQuestion.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    otherAnswer.style.maxHeight = null;

                }

            });


        /* Toggle current FAQ */

        if (isOpen) {

            currentItem.classList.remove("active");

            question.setAttribute(
                "aria-expanded",
                "false"
            );

            currentAnswer.style.maxHeight = null;

        } else {

            currentItem.classList.add("active");

            question.setAttribute(
                "aria-expanded",
                "true"
            );

            currentAnswer.style.maxHeight =
                `${currentAnswer.scrollHeight}px`;

        }

    });

});


/* =========================================
   FORM VALIDATION
========================================= */

contactForm.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();

        let valid = true;


        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";
        formSuccess.textContent = "";


        /* Name */

        if (nameInput.value.trim() === "") {

            nameError.textContent =
                "Please enter your name.";

            valid = false;

        }


        /* Email */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (emailInput.value.trim() === "") {

            emailError.textContent =
                "Please enter your email.";

            valid = false;

        } else if (
            !emailPattern.test(
                emailInput.value.trim()
            )
        ) {

            emailError.textContent =
                "Please enter a valid email.";

            valid = false;

        }


        /* Message */

        const message =
            messageInput.value.trim();


        if (message.length < 10) {

            messageError.textContent =
                "Message should contain at least 10 characters.";

            valid = false;

        }


        /* Success */

        if (valid) {

            formSuccess.textContent =
                "Message submitted successfully!";

            contactForm.reset();

            updateCharacterCount();

        }

    }
);


/* =========================================
   CHARACTER COUNTER
========================================= */

function updateCharacterCount() {

    const length =
        messageInput.value.length;

    characterCount.textContent =
        `${length} / 200`;

}


messageInput.addEventListener(
    "input",
    updateCharacterCount
);


/* =========================================
   ANIMATED COUNTERS
========================================= */

let countersStarted = false;


function startCounters() {

    if (countersStarted) {
        return;
    }


    const statsSection =
        document.querySelector(".stats");


    const sectionPosition =
        statsSection.getBoundingClientRect().top;


    const screenPosition =
        window.innerHeight * 0.85;


    if (sectionPosition < screenPosition) {

        countersStarted = true;


        counters.forEach((counter) => {

            const target =
                Number(
                    counter.dataset.target
                );


            let current = 0;

            const increment =
                target / 40;


            function updateCounter() {

                current += increment;


                if (current < target) {

                    counter.textContent =
                        Math.ceil(current);

                    requestAnimationFrame(
                        updateCounter
                    );

                } else {

                    counter.textContent =
                        target;

                }

            }


            updateCounter();

        });

    }

}


window.addEventListener(
    "scroll",
    startCounters,
    { passive: true }
);


/* =========================================
   SCROLL TO TOP
========================================= */

window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 400) {

            scrollTop.classList.add("show");

        } else {

            scrollTop.classList.remove("show");

        }

    },
    { passive: true }
);


scrollTop.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =========================================
   INITIALIZE
========================================= */

updateCharacterCount();

startCounters();