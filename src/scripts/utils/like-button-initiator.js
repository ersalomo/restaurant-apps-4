<<<<<<< HEAD
import FavoriteMovieIdb from '../data/favorite-movieidb.js';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator.js';

const LikeButtonInitiator = {
  async init({ likeButtonInitiator, movie }) {
    this._likeButtonInitiator = likeButtonInitiator;
    this._movie = movie;
    await this._renderButton();
  },
  async _renderButton() {
    const { id } = this._movie;
    if (await _isMovieExist(id)) {
      this._renderButton();
    } else {
      this.renderLike();
=======
import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb.js';
import { createLikedButtonTemplate, createLikeButtonTemplate } from '../views/templates/template-creator.js';

const LikedButtonInitiator = {
  async init({ likedButtonContainer, restaurant }) {
    this._likeButtonContainer = likedButtonContainer;
    this._restaurant = restaurant;
    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;
    if (await this._isMovieExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
>>>>>>> e9b283177f0ea83f08a3609a56d11a57c9bc1694
    }
  },

  async _isMovieExist(id) {
<<<<<<< HEAD
    const movie = await FavoriteMovieIdb.getMovie(id);
    return !!movie;
  },
  _renderLike() {
    this._likeButtonInitiator.innerHTML = createLikedButtonTemplate;
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteMovieIdb.putMovie(this._movie);
=======
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },
  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async (e) => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
>>>>>>> e9b283177f0ea83f08a3609a56d11a57c9bc1694
      this._renderButton();
    });
  },
  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();
<<<<<<< HEAD

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteMovieIdb.deleteMovie(this._movie.id);
=======
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async (e) => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
>>>>>>> e9b283177f0ea83f08a3609a56d11a57c9bc1694
      this._renderButton();
    });
  },
};

<<<<<<< HEAD
export default LikeButtonInitiator;
=======
export default LikedButtonInitiator;
>>>>>>> e9b283177f0ea83f08a3609a56d11a57c9bc1694
