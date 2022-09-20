import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app.js';
import swRegister from './utils/sw-register.js';
import WebSocketInitiator from './utils/websocket-initiator.js';
import CONFIG from './globals/config.js';

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
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
