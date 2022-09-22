const DrawerInitiator = {
  init({ button, drawer, window }) {
    const hamburger = button.textContent;
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    window.addEventListener('click', (e) => {
      button.innerHTML = hamburger;
      this._closeDrawer(e, drawer);
    });
    window.addEventListener('scroll', (e) => {
      button.innerHTML = hamburger;
      this._closeDrawer(e, drawer);
    });
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();

    drawer.classList.toggle('open');
  },
};

export default DrawerInitiator;
