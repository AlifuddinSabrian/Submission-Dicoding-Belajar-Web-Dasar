// NAV-BAR RESPONSIVE
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav-content");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});