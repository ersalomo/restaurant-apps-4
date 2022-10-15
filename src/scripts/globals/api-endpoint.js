import CONFIG from './config.js';

const API_ENDPOINT = {
<<<<<<< HEAD
  NOW_PLAYING: '',
  UPCOMING: '',
  DETAIL: '',
};

=======
  list: `${CONFIG.BASE_URL}/list`,
  detail: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  search: `${CONFIG.BASE_URL}/search`,
  addReview: `${CONFIG.BASE_URL}/review`,
  gambar: (id, size = 'medium') => `${CONFIG.BASE_URL}/images/${size}/${id}`,
};
>>>>>>> e9b283177f0ea83f08a3609a56d11a57c9bc1694
export default API_ENDPOINT;
