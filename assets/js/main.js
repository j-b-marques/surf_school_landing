/* Mostrar menu */
const menuToggle = document.querySelector(".menu_toggle");
const showcase = document.querySelector(".toggle");

menuToggle.addEventListener("click", () => {
  showcase.classList.add("active");
});

/* Fechar menu
 */
const menuToggleClose = document.querySelector(".menu_close");
const showcaseClose = document.querySelector(".toggle");

menuToggleClose.addEventListener("click", () => {
  showcaseClose.classList.remove("active");
});

/*Scroll Reveal**/
ScrollReveal().reveal(".nav_bar", {
  delay: 600,
  easing: "ease-in",
});
ScrollReveal().reveal(".content_lead", {
  delay: 600,
  easing: "ease-in",
});
ScrollReveal().reveal(".card", {
  rotate: {
    y: 180,
  },
  duration: 1600,
});
ScrollReveal().reveal(".blog_ct", {
  delay: 300,
  distance: "200px",
  origin: "left",
  duration: 600,
  easing: "ease-in",
});

ScrollReveal().reveal(".first_page_ct", {
  delay: 300,
  duration: 600,
  origin: "center",
  easing: "ease-in",
});
