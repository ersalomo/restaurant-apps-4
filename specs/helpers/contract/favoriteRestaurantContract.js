const itActsAsFavoriteMovieModel = (favoriteMovie) => {
  const restaurantIdsOne = 'rqdv5juczeskfw1e867';
  const restaurantIdsTwo = 's1knt6za9kkfw1e867';
  const restaurantIdsThree = 'w9pga3s2tubkfw1e867';

  it('should return the movie that has been added', async () => {
    favoriteMovie.putRestaurant({ id: restaurantIdsOne });
    favoriteMovie.putRestaurant({ id: restaurantIdsTwo });

    expect(await favoriteMovie.getRestaurant(restaurantIdsOne)).toEqual({ id: restaurantIdsOne });
    expect(await favoriteMovie.getRestaurant(restaurantIdsTwo)).toEqual({ id: restaurantIdsTwo });
    expect(await favoriteMovie.getRestaurant(restaurantIdsThree)).toEqual(undefined);
  });

  it('should refuse a movie from being added if it does not have the correct property', async () => {
    favoriteMovie.putRestaurant({ aProperty: 'property' });
    expect(await favoriteMovie.getRestaurants()).toEqual([]);
  });

  it('can return all of the movies that have been added', async () => {
    favoriteMovie.putRestaurant({ id: restaurantIdsOne });
    favoriteMovie.putRestaurant({ id: restaurantIdsTwo });

    expect(await favoriteMovie.getRestaurants()).toEqual([{ id: restaurantIdsOne }, { id: restaurantIdsTwo }]);
  });

  it('should remove favorite movie', async () => {
    favoriteMovie.putRestaurant({ id: restaurantIdsOne });
    favoriteMovie.putRestaurant({ id: restaurantIdsTwo });
    favoriteMovie.putRestaurant({ id: restaurantIdsThree });

    await favoriteMovie.deleteRestaurant(restaurantIdsOne);

    expect(await favoriteMovie.getRestaurants()).toEqual([{ id: restaurantIdsTwo }, { id: restaurantIdsThree }]);
  });

  it('should handle request to remove a movie even though the movie has not been added', async () => {
    favoriteMovie.putRestaurant({ id: restaurantIdsOne });
    favoriteMovie.putRestaurant({ id: restaurantIdsTwo });
    favoriteMovie.putRestaurant({ id: restaurantIdsThree });

    await favoriteMovie.deleteRestaurant(4);

    expect(await favoriteMovie.getRestaurants()).toEqual([{ id: restaurantIdsOne }, { id: restaurantIdsTwo }, { id: restaurantIdsThree }]);
  });
};

export { itActsAsFavoriteMovieModel };

// https://www.dicoding.com/academies/219/tutorials/9879?from=9874
