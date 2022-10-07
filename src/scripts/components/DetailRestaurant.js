import { Restaurant } from '../data/Restaurant.js';
import UrlParser from '../routes/Url-parser.js';
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

    <div id="likeButtonContainer" class="button-container button-group"></div>

    <div class="" id="menu-restaurant">
    <div class="menu" id="menu-drinks"></div>
    <div class="menu" id="menu-foods"></div>
    </div>
    <div class="review" id="reviews-container"></div>
    <div class="" id="review-input">
      <h3>Add New Review</h3>
      <form id="form-review-customers">
      <label for="name"
        >Your name
        <input type="text" name="name" class="form-control input-review" id="name" />
      </label>
      <label for="comment"
        >Comment
        <textarea name="comment" class="form-control input-review" cols="50" rows="3" id="comment"> </textarea>
      </label>
      <button class="btn btn-primary" id="send-review">Submit</button>
      </form>
    </div>
  
    `;

    const customerReviews = document.querySelector('#reviews-container');
    const customers = await this._restaurant['customerReviews'];
    const menus = await this._restaurant['menus'];
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
