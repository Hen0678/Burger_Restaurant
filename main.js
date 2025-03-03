document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");
    const menuBtnIcon = menuBtn.querySelector("i");

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("open");

        const isOpen = navLinks.classList.contains("open");
        menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
    });

    navLinks.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuBtnIcon.setAttribute("class", "ri-menu-line");
    });

    // ScrollReveal Animations
    const ScrollRevealOption = {
        distance: "50px",
        origin: "bottom",
        duration: 1000,
    };

    ScrollReveal().reveal(".header__image img", {
        ...ScrollRevealOption,
        origin: "right",
    });

    ScrollReveal().reveal(".header__content h2", {
        ...ScrollRevealOption,
        delay: 500,
    });

    ScrollReveal().reveal(".header__content h1", {
        ...ScrollRevealOption,
        delay: 1000,
    });

    ScrollReveal().reveal(".order__card", {
        ...ScrollRevealOption,
        interval: 500,
    });

    ScrollReveal().reveal(".event__content", {
        duration: 1000,
    });

    // Modal Form Submission
    const reservationForm = document.getElementById("reservationForm");
    const modalElement = document.getElementById("reservationModal");

    if (reservationForm && modalElement) {
        reservationForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form submission

            // Get values from form fields
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const date = document.getElementById("date").value.trim();
            const time = document.getElementById("time").value.trim();
            const people = document.getElementById("people").value.trim();

            if (name && email && date && time && people) {
                console.log("All fields are filled. Showing modal...");
                var myModal = new bootstrap.Modal(modalElement);
                myModal.show(); // Show modal
                reservationForm.reset(); // Reset form after submission
            } else {
                console.warn("Form validation failed.");
                alert("Please fill in all fields before submitting.");
            }
        });
    } else {
        console.error("Form or modal not found. Check your HTML.");
    }
});
