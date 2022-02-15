const hamburger = document.getElementById("hamburger");
const navUL = document.querySelector(".nav-top-ul");

hamburger.addEventListener("click", () => {
    navUL.classList.toggle("show")
})