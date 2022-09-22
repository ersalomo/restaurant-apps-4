import CONFIG from './config.js';

const API_ENDPOINT = {
  list: `${CONFIG.BASE_URL}/list`,
  detail: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  search: `${CONFIG.BASE_URL}/search`,
  add: `${CONFIG.BASE_URL}/`,
  gambar: (id, size = 'medium') => `${CONFIG.BASE_URL}/images/${size}/${id}`,
};
export default API_ENDPOINT;
