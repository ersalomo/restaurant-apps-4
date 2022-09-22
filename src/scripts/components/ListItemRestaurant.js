import './ItemRestaurant.js';
// import { Restaurant } from '../data/Restaurant.js';
class ListItemRestaurant extends HTMLElement {
  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }
  render() {
    this.setAttribute('class', 'wrapper restaurant');
    this.innerHtml = '';
    this._restaurants.forEach((restaurant) => {
      const itemRestaurantElement = document.createElement('item-restaurant');
      itemRestaurantElement.restaurant = restaurant;
      this.appendChild(itemRestaurantElement);
    });
  }
}

customElements.define('list-item-restaurant', ListItemRestaurant);
