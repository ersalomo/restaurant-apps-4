import { itActsAsFavoriteMovieModel } from './helpers/contract/favoriteRestaurantContract.js';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb.js';

describe('Favorite Movie Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getRestaurants()).forEach(async (restaurant) => {
      await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteMovieModel(FavoriteRestaurantIdb);
});
