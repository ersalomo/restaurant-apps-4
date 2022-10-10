import Restaurant from '../data/Restaurant.js';
import UrlParser from '../routes/Url-parser.js';
import LikedButtonInitiator from '../utils/like-button-initiator.js';
import { createInputReviewTemplate } from '../views/templates/template-creator.js';
import API_ENDPOINT from '../globals/api-endpoint.js';
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
  }

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    this.restaurant = await Restaurant.detailRestaurant(url.id);
    const customers = await this._restaurant.customerReviews;
    const { pictureId, name, city, rating, description } = this._restaurant;
    this.innerHTML = '';
    this.innerHTML = `
    <div class="restaurant-header">
      <img class="restaurant_poster" src="${API_ENDPOINT.gambar(pictureId)}" alt="${name}" />
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

    <div id="likeButtonContainer" class="button-container button-group"></div>

    <div class="" id="menu-restaurant">
    <div class="menu" id="menu-drinks"></div>
    <div class="menu" id="menu-foods"></div>
    </div>

    <div class="review" id="reviews-container"></div>
    <div class="" id="review-input"></div>
    `;
    const reviewInputContainer = document.querySelector('#review-input');
    reviewInputContainer.innerHTML = createInputReviewTemplate.templateReview();
    const formInputReview = reviewInputContainer.querySelector('#form-review-customers');
    formInputReview.addEventListener('submit', async (e) => {
      e.preventDefault();
      const review = {
        id: url.id,
        name: e.target.name.value,
        review: e.target.comment.value,
      };
      const responseJson = await Restaurant.addReview(review);
      console.log(responseJson);
      await _renderCustomerReviews();
      this.afterRender();
    });
    const customerReviews = document.querySelector('#reviews-container');
    const _renderCustomerReviews = async () => {
      customerReviews.innerHTML = '';
      for (const { name, review, date } of customers) {
        const templateCustomerReview = `
        <div class="customer-review">
        <h4>${name}</h4>
        <p>${review}</p>
        <p>${date}</p>
        </div>
        `;
        customerReviews.innerHTML += templateCustomerReview;
      }
    };
    await _renderCustomerReviews();
    const menus = await this._restaurant['menus'];
    const restaurantMenuFoods = document.querySelector('#menu-foods');
    const restaurantMenuDrinks = document.querySelector('#menu-drinks');
    menus.foods.forEach((food) => (restaurantMenuFoods.innerHTML += `<p>${food.name}</p>`));
    menus.drinks.forEach((drink) => (restaurantMenuDrinks.innerHTML += `<p>${drink.name}</p>`));

    LikedButtonInitiator.init({
      likedButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: this._restaurant,
    });
  }
}
customElements.define('detail-restaurant', DetailResource);
