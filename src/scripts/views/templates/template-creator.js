<<<<<<< HEAD
import CONFIG from '../../globals/config.js';

const createMovieDetailTemplate = (movie) => `
  <h2 class="movie__title">${movie.title}</h2>
  <img class="movie__poster" src="${CONFIG.BASE_IMAGE_URL + movie.poster_path}" alt="${movie.title}" />
  <div class="movie__info">
    <h3>Information</h3>
    <h4>Tagline</h4>
    <p>${movie.tagline}</p>
    <h4>Release Date</h4>
    <p>${movie.release_date}</p>
    <h4>Duration</h4>
    <p>${movie.runtime} minutes</p>
    <h4>Rating</h4>
    <p>${movie.vote_average}</p>
  </div>
  <div class="movie__overview">
    <h3>Overview</h3>
    <p>${movie.overview}</p>
  </div>
`;

const createMovieItemTemplate = (movie) => `
  <div class="movie-item">
    <div class="movie-item__header">
      <img class="movie-item__header__poster" alt="${movie.title}"
           src="${movie.backdrop_path ? CONFIG.BASE_IMAGE_URL + movie.backdrop_path : 'https://picsum.photos/id/666/800/450?grayscale'}">
      <div class="movie-item__header__rating">
        <p>⭐️<span class="movie-item__header__rating__score">${movie.vote_average}</span></p>
      </div>
    </div>
    <div class="movie-item__content">
      <h3><a href="/#/detail/${movie.id}">${movie.title}</a></h3>
      <p>${movie.overview}</p>
    </div>
  </div>
`;
const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;
const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export { createMovieItemTemplate, createMovieDetailTemplate, createLikeButtonTemplate, createLikedButtonTemplate };
=======
const createLikeButtonTemplate = () => `<button aria-label="like this restaurant" id="likeButton" class="like">
<i class="fa fa-heart-o" aria-hidden="true"></i>
</button>`;
const createLikedButtonTemplate = () => `<button aria-label="unlike this restaurant" id="likeButton" class="like">
<i class="fa fa-heart" aria-hidden="true"></i>
</button>`;
const createInputReviewTemplate = {
  templateReview: () => `<h3>Add New Review</h3>
    <form id="form-review-customers">
    <label for="name">Your name
    <input type="text" name="name" class="form-control input-review" id="name" />
    </label>
    <label for="comment">Comment
    <textarea name="comment" class="form-control input-review" cols="50" rows="3" id="comment"></textarea>
    </label>
    <button class="btn btn-primary" type="submit" id="send-review">Submit</button>
    </form>`,
};

export { createLikedButtonTemplate, createLikeButtonTemplate, createInputReviewTemplate };
>>>>>>> e9b283177f0ea83f08a3609a56d11a57c9bc1694
