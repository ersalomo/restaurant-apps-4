import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import './components/AppBar.js';
import { Restaurant } from '../scripts/data/Restaurant.js';
import './components/ListItemRestaurant.js';
import { App } from './views/app/App.js';
import swRegister from './utils/sw-register.js';

export const load = () => {
  const app = new App({
    button: document.querySelector('#hamburger'),
    drawer: document.querySelector('#drawer'),
    content: window,
  });
  window.addEventListener('hashchange', () => {
    app.renderPage();
  });
  window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
  });

  const listRestaurantElements = document.querySelector('list-item-restaurant');
  const renderResult = async () => {
    try {
      listRestaurantElements.restaurants = await Restaurant.getRestaurants();
    } catch (err) {
      console.log(err);
    }
    // console.log(await Restaurant.getRestaurants());
  };
  renderResult();
};
