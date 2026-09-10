/* =========================================
   MOBILE MENU
========================================= */

const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", function () {

    navigation.classList.toggle("active");

    if (navigation.classList.contains("active")) {
        menuButton.textContent = "✕";
    } else {
        menuButton.textContent = "☰";
    }

});


/* Close mobile menu when a link is clicked */

const navLinks = document.querySelectorAll(".navigation a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigation.classList.remove("active");

        menuButton.textContent = "☰";

    });

});


/* =========================================
   THEME SWITCHER
========================================= */

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        themeButton.textContent = "☾";

        localStorage.setItem("theme", "light");

    } else {

        themeButton.textContent = "☀";

        localStorage.setItem("theme", "dark");

    }

});


/* Remember selected theme */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    themeButton.textContent = "☾";

}


/* =========================================
   WELCOME BUTTON
========================================= */

const welcomeButton = document.getElementById("welcomeButton");
const welcomeMessage = document.getElementById("welcomeMessage");

welcomeButton.addEventListener("click", function () {

    welcomeMessage.textContent =
        "Hello! Thanks for exploring my Week 3 project.";

});


/* =========================================
   ANIMATED COUNTERS
========================================= */

const counters = document.querySelectorAll(".counter");

let countersStarted = false;

function startCounters() {

    if (countersStarted) {
        return;
    }

    const statsSection = document.querySelector(".stats");

    const sectionPosition =
        statsSection.getBoundingClientRect().top;

    const screenPosition =
        window.innerHeight * 0.85;

    if (sectionPosition < screenPosition) {

        countersStarted = true;

        counters.forEach(function (counter) {

            const target =
                Number(counter.getAttribute("data-target"));

            let current = 0;

            const increment = target / 40;

            function updateCounter() {

                current += increment;

                if (current < target) {

                    counter.textContent =
                        Math.ceil(current);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.textContent = target;

                }

            }

            updateCounter();

        });

    }

}

window.addEventListener("scroll", startCounters);


/* =========================================
   FAQ ACCORDION
========================================= */

const faqQuestions =
    document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {

        const currentItem =
            question.parentElement;

        const currentAnswer =
            currentItem.querySelector(".faq-answer");


        /* Close other FAQ items */

        document.querySelectorAll(".faq-item").forEach(function (item) {

            if (item !== currentItem) {

                item.classList.remove("active");

                item.querySelector(".faq-answer").style.maxHeight = null;

            }

        });


        /* Toggle selected item */

        currentItem.classList.toggle("active");

        if (currentItem.classList.contains("active")) {

            currentAnswer.style.maxHeight =
                currentAnswer.scrollHeight + "px";

        } else {

            currentAnswer.style.maxHeight = null;

        }

    });

});


/* =========================================
   FORM VALIDATION
========================================= */

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


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    let valid = true;

    /* Clear previous messages */

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    formSuccess.textContent = "";


    /* Name validation */

    if (nameInput.value.trim() === "") {

        nameError.textContent =
            "Please enter your name.";

        valid = false;

    }


    /* Email validation */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value.trim() === "") {

        emailError.textContent =
            "Please enter your email.";

        valid = false;

    } else if (!emailPattern.test(emailInput.value.trim())) {

        emailError.textContent =
            "Please enter a valid email.";

        valid = false;

    }


    /* Message validation */

    if (messageInput.value.trim().length < 10) {

        messageError.textContent =
            "Message should contain at least 10 characters.";

        valid = false;

    }


    /* Successful submission */

    if (valid) {

        formSuccess.textContent =
            "Message submitted successfully!";

        contactForm.reset();

        updateCharacterCount();

    }

});


/* =========================================
   CHARACTER COUNTER
========================================= */

const characterCount =
    document.getElementById("characterCount");

function updateCharacterCount() {

    const length =
        messageInput.value.length;

    characterCount.textContent =
        length + " / 200";

}

messageInput.addEventListener(
    "input",
    updateCharacterCount
);


/* =========================================
   SCROLL TO TOP
========================================= */

const scrollTop =
    document.getElementById("scrollTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        scrollTop.classList.add("show");

    } else {

        scrollTop.classList.remove("show");

    }

});


scrollTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});