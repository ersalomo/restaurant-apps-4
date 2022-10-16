import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurant-idb.js';

const createLikeButtonPresenterWithrestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likedButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: FavoriteRestaurantIdb,
    restaurant: restaurant,
  });
};

export { createLikeButtonPresenterWithrestaurant };
