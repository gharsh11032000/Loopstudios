const btn = document.getElementById("menu-btn");
const nav = document.getElementById("mobile-nav");

function navToggle() {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
}

btn.addEventListener("click", navToggle);
