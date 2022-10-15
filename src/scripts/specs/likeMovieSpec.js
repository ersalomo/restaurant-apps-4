import LikedButtonInitiator from '../utils/like-button-initiator.js';
import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb.js';

describe('Liking A Movie', () => {
  it('should show the like button when the movie has not been liked before', async () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    await LikedButtonInitiator.init({
      likedButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="like this movie"]')).toBeTruthty();
    it('should be able to like the movie', async () => {
      const movie = await FavoriteMovieIdb.getMovie(1);
      expect(movie).toEqual({ id: 1 });
    });
  });
});
