<<<<<<< HEAD
import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app.js';

import swRegister from './utils/sw-register.js';

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
  swRegister();
});
=======
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/style.css';
import './components/AppBar.js';
import App from './views/app/App.js';
import swRegister from './utils/sw-register.js';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

export const load = () => {
  const app = new App({
    button: document.querySelector('#hamburger'),
    drawer: document.querySelector('#drawer'),
    objectWindow: window,
    mainContent: document.querySelector('#content'),
  });
  window.addEventListener('hashchange', () => {
    app.renderPage();
    loader();
  });
  window.addEventListener('load', () => {
    app.renderPage();
    loader();
    swRegister();
  });

  const loaderElement = document.querySelector('#loader');
  function loader() {
    loaderElement.style.display = 'block';
    const second = 1000;
    setTimeout(() => {
      loaderElement.style.display = 'none';
    }, second);
  }
};
>>>>>>> e9b283177f0ea83f08a3609a56d11a57c9bc1694
