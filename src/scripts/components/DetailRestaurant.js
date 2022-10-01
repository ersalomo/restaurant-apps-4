import { Restaurant } from '../data/Restaurant.js';
import UrlParser from '../routes/Url-parser.js';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../../scripts/views/templates/template-creator.js';
import LikedButtonInitiator from '../utils/like-button-initiator.js';
class DetailResource extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.setAttribute('id', 'detail-restaurant');
    this.setAttribute('class', 'restaurant-item');
    this.innerHTML = '';
  }

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    this.restaurant = await Restaurant.detailRestaurant(url.id);
    const { pictureId, name, city, rating, description } = this._restaurant;
    this.innerHTML = `
    <div class="restaurant-header">
      <img class="restaurant_poster" src="https://restaurant-api.dicoding.dev/images/medium/${pictureId}" alt="" />
    </div>
    <div class="restaurant_info">
      <h3 class="restaurant_title">${name}</h3>
      <h4>City</h4>
      <p>${city}</p>
      <h4>Rating</h4>
      <p>${rating}</p>
      <h4>Description</h4>
      <p>${description}</p>
    </div>

    <div class="restaurant-favorite ">
    <button type="button" class="btn btn-primary">Tambah ke favorite</button>
    </div>
    <div id="likeButtonContainer" class="button-container button-group">
    </div>

    <div class="customers-review" id="review"></div>
    `;

    const customerReviews = document.querySelector('#review');
    const customers = await this._restaurant['customerReviews'];
    const menus = await this._restaurant['menus'];
    for (const { name, review, date } of customers) {
      const templateCustomerReview = `
      <h4>${name}</h4>
      <p>${review}</p>
      <p>${date}</p>
      <hr>
      `;
      customerReviews.innerHTML += templateCustomerReview;
    }

    console.log(menus.foods);
    console.log(menus.drinks);

    LikedButtonInitiator.init({
      likedButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: this._restaurant,
    });
  }
}
customElements.define('detail-restaurant', DetailResource);
