const hamburgerButtonElement = document.querySelector('#hamburger');
const drawerElement = document.querySelector('#drawer');
const hamburger = hamburgerButtonElement.textContent;

hamburgerButtonElement.addEventListener('click', (event) => {
  drawerElement.classList.toggle('open') ? (hamburgerButtonElement.innerHTML = 'X') : (hamburgerButtonElement.innerHTML = hamburger);
  event.stopPropagation();
});
window.addEventListener('click', (e) => {
  hamburgerButtonElement.innerHTML = hamburger;
  drawerElement.classList.remove('open');
  e.stopPropagation();
});
window.addEventListener('scroll', (e) => {
  hamburgerButtonElement.innerHTML = hamburger;
  drawerElement.classList.remove('open');
  e.stopPropagation();
});
drawerElement.querySelectorAll('.list-item a').forEach((elementA) => {
  elementA.style.fontSize = '18px';
  elementA.style.padding = '10px 2px';
});
