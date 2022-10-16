import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories.js';

describe('Liking A Restaurant', () => {
  const id = 'rqdv5juczeskfw1e867';
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithrestaurant({ id: id });
    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithrestaurant({ id: id });
    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithrestaurant({ id: id });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);

    expect(restaurant).toEqual({ id: id });
    FavoriteRestaurantIdb.deleteRestaurant(id);
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithrestaurant({ id: id });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);

    expect(restaurant).toEqual({ id: id });
    FavoriteRestaurantIdb.deleteRestaurant(id);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithrestaurant({ id: id });

    // Tambahkan film dengan ID rqdv5juczeskfw1e867 ke daftar film yang disukai
    await FavoriteRestaurantIdb.putRestaurant({ id: id });

    // Simulasikan pengguna menekan tombol suka film
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // tidak ada film yang ganda
    expect(await FavoriteRestaurantIdb.getRestaurants()).toEqual([{ id: id }]);

    FavoriteRestaurantIdb.deleteRestaurant(id);
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithrestaurant({});
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getRestaurant()).toEqual(undefined);
  });
});
