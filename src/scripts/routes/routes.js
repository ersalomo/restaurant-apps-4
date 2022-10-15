<<<<<<< HEAD
import NowPlaying from '../views/pages/now-playing.js';
import Upcoming from '../views/pages/upcoming.js';
import Detail from '../views/pages/detail.js';

const routes = {
  '/': NowPlaying,
  '/now-playing': NowPlaying,
  '/upcoming': Upcoming,
  '/detail/:id': Detail,
=======
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
>>>>>>> e9b283177f0ea83f08a3609a56d11a57c9bc1694
};

export default routes;
