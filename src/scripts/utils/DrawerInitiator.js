export default class DrawerInitiator {
  init({ button, drawer, content }) {
    button.addEventListener('click', (e) => {
      this._toggleDrawer(e, drawer);
    });

    drawer.addEventListener('click', (e) => {
      this._closeDrawer(e, drawer);
    });
  }
  _toggleDrawer(e, drawer) {
    e.stopPropagation();
    drawer.classList.toggle('open');
  }
  _closeDrawer(e, drawer) {
    e.stopPropagation();
    drawer.classList.remove('open');
  }
}
