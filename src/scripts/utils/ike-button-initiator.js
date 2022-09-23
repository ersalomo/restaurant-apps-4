import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb.js';

import { createLikedButtonTemplate, createLikeButtonTemplate } from '../views/templates/template-creator.js';

const LikedButtonInitiator = {
  async init({ likedButtonContainer, movie }) {
    this._likeButtonContainer = likedButtonContainer;
    this._movie = movie;

    await this._renderButton();
  },
  async _renderButton() {
    const { id } = this._movie;
    if (await this._isMovieExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isMovieExist(id) {
    const movie = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!movie;
  },
  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate;
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async (e) => {
      await FavoriteMovieIdb.putMovie(this._movie);
      this._renderButton();
    });
  },
  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate;
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async (e) => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._movie.id);
      this._renderButton();
    });
  },
};

export default LikedButtonInitiator;
