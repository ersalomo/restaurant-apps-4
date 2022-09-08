import { load } from "./index.js";

const hamburgerButtonElement = document.querySelector("#hamburger");
const drawerElement = document.querySelector("#drawer");
hamburgerButtonElement.addEventListener("click", (event) => {
  drawerElement.classList.toggle("open");
  event.stopPropagation();
});
window.addEventListener("click", (e) => {
  drawerElement.classList.remove("open");
  e.stopPropagation();
});
window.addEventListener("scroll", (e) => {
  drawerElement.classList.remove("open");
  e.stopPropagation();
});

window.addEventListener("DOMContentLoaded", load);
