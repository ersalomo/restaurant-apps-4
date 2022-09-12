// import "regenerator-runtime"; /* for async await transpile */
import '../styles/main.scss';
import data from '../DATA.json';
import './components/AppBar.js';
import './components/ListItem.js';

export const load = () => {
  const restaurants = data.restaurants;
  const itemItemElement = document.querySelector('list-item');
  itemItemElement.restaurants = restaurants;
};
