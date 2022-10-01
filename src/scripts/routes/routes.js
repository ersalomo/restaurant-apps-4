import '../components/ListItemRestaurant.js';
import '../components/DetailRestaurant.js';
import '../components/LikeRestaurant.js';

const listItemRestaurant = document.createElement('list-item-restaurant');
const detailRestaurant = document.createElement('detail-restaurant');
const likeRestaurant = document.createElement('like-restaurant');

const routes = {
  '/': listItemRestaurant,
  '/list': listItemRestaurant,
  '/favorite': likeRestaurant,
  '/detail/:id': detailRestaurant,
  '/search': '',
};

export default routes;
