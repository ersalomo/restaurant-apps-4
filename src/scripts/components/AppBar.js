class AppBar extends HTMLElement {
  static githubAccount = 'https://github.com/ersalomo';
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = '';
    this.innerHTML = `
    <div class="app-bar">
    <a id="hamburger" href="#">☰</a>
        <h2>Hunger Apps</h2>
        <nav class="navbar menu" id="drawer">
          <ul class="list-menu">
            <li class="list-item"><a href="#/list">Home</a></li>
            <li class="list-item"><a href="#/favorite">Favorite</a></li>
            <li class="list-item"><a href="${AppBar.githubAccount}">About us</a></li>
          </ul>
        </nav>
    </div>
    `;
  }
}
customElements.define('app-bar', AppBar);
