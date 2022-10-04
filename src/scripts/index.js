import 'regenerator-runtime'; /* for async await transpile */
import '../styles/style.css';
import './components/AppBar.js';
import { App } from './views/app/App.js';
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
  });

  window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
  });
};
