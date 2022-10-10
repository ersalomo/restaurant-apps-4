import 'regenerator-runtime'; /* for async await transpile */
import '../styles/style.css';
import './components/AppBar.js';
import App from './views/app/App.js';
import swRegister from './utils/sw-register.js';

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
