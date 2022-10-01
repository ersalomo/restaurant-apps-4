import './ItemRestaurant.js';
import { Restaurant } from '../data/Restaurant.js';
class ListItemRestaurant extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  async render() {
    this.setAttribute('class', 'wrapper restaurant');
    // this.innerHtml = '';
    // this._restaurants.forEach((restaurant) => {
    //   const itemRestaurantElement = document.createElement('item-restaurant');
    //   itemRestaurantElement.restaurant = restaurant;
    //   this.appendChild(itemRestaurantElement);
    // });
  }

  async afterRender() {
    this.restaurants = await Restaurant.getRestaurants();
    this._restaurants.forEach((restaurant) => {
      const itemRestaurantElement = document.createElement('item-restaurant');
      itemRestaurantElement.restaurant = restaurant;
      this.appendChild(itemRestaurantElement);
    });
  }
}

customElements.define('list-item-restaurant', ListItemRestaurant);
