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
    }
  },

  async _isMovieExist(id) {
    const movie = await FavoriteMovieIdb.getMovie(id);
    return !!movie;
  },
  _renderLike() {
    this._likeButtonInitiator.innerHTML = createLikedButtonTemplate;
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteMovieIdb.putMovie(this._movie);
      this._renderButton();
    });
  },
  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteMovieIdb.deleteMovie(this._movie.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
