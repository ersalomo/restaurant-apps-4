import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb.js';
import '../components/ItemRestaurant.js';

export class LikeRestaurant extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }
  async render() {
    this.setAttribute('id', 'likeRestaurant');
    this.setAttribute('class', 'wrapper restaurant');
  }

  async afterRender() {
    this._restaurants = await FavoriteRestaurantIdb.getRestaurants();
    this._restaurants.forEach((restaurant) => {
      const itemRestaurantElement = document.createElement('item-restaurant');
      itemRestaurantElement.restaurant = restaurant;
      this.appendChild(itemRestaurantElement);
    });
  }
}
customElements.define('like-restaurant', LikeRestaurant);
