const menuToggle = document.querySelector(".menu_toggle");
const showcase = document.querySelector(".toggle");

menuToggle.addEventListener("click", () => {
  showcase.classList.add("active");
});

const menuToggleClose = document.querySelector(".menu_close");
const showcaseClose = document.querySelector(".toggle");

menuToggleClose.addEventListener("click", () => {
  showcaseClose.classList.remove("active");
});
