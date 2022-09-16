import NowPlaying from '../views/pages/now-playing.js';
import Upcoming from '../views/pages/upcoming.js';
import Detail from '../views/pages/detail.js';

const routes = {
  '/': NowPlaying,
  '/now-playing': NowPlaying,
  '/upcoming': Upcoming,
  '/detail/:id': Detail,
};

export default routes;
