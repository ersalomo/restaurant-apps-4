import DrawerInitiator from '../../utils/drawer-initiator.js';

export class App {
  constructor({ button, drawer, objectWindow, mainContent }) {
    this._button = button;
    this._drawer = drawer;
    this._objectWindow = objectWindow;
    this._mainContent = mainContent;
    this._initialAppShell();
  }
  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      objectWindow: this._objectWindow,
    });
  }

  // render url yang aktif
  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url]; // get key with value
    this._mainContent.innerHTML = await page.render();
    await page.afterRender();
  }
}
