const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// Update ScrollReveal for Nav
ScrollReveal().reveal("nav", {
  ...scrollRevealOption,
  origin: "top",
  delay: 0,
});


const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
// Text entrance from left
ScrollReveal().reveal(".header__content", {
  ...scrollRevealOption,
  origin: "left",
  distance: "80px",
});

// Image entrance from right
ScrollReveal().reveal(".header__image", {
  ...scrollRevealOption,
  origin: "right",
  distance: "100px",
  delay: 600,
});

// Shape entrance with a slight delay
ScrollReveal().reveal(".image__shape", {
  ...scrollRevealOption,
  origin: "bottom",
  delay: 900,
  scale: 0.8,
});

//  About section
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  origin: "top", // Header drops down
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 600,
  scale: 0.9, // Adds a slight zoom-in effect
});

ScrollReveal().reveal(".about__content .about__btn", {
  ...scrollRevealOption,
  delay: 1100,
  origin: "bottom", // Button slides up
});

// skills container
ScrollReveal().reveal(".skill__card", {
  ...scrollRevealOption,
  origin: "bottom",
  distance: "30px",
  interval: 150, // Rapid succession "one by one" feel
  afterReveal: function (el) {
    const bar = el.querySelector(".progress");
    const targetWidth = bar.style.width;
    bar.style.width = "0px";
    setTimeout(() => {
      bar.style.width = targetWidth;
    }, 100);
  }
});

// Register the one-by-one project reveal
ScrollReveal().reveal(".project__card", {
  ...scrollRevealOption,
  interval: 400, // Time between each card appearing
  origin: "bottom",
  distance: "100px",
  opacity: 0,
  scale: 0.98,
  easing: "cubic-bezier(0.5, 0, 0, 1)"
});

ScrollReveal().reveal(".gallery__item", {
  ...scrollRevealOption,
  interval: 200,
  scale: 0.9,
});

// New Roadmap Animation
ScrollReveal().reveal(".roadmap-card", {
  ...scrollRevealOption,
  interval: 200,
  origin: "bottom",
  distance: "50px",
  scale: 0.95,
  easing: "ease-out"
});