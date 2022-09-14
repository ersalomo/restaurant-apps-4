import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';

import App from './views/app.js';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', (e) => {
  app.renderPage();
});
window.addEventListener('load', (e) => {
  app.renderPage();
});
