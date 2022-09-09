class AppBar extends HTMLElement {
  static githubAccount = "https://github.com/ersalomo";
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = "";
    this.innerHTML = `
    <div class="app-bar">
        <h2>Hunger Apps</h2>
        <nav class="navbar menu" id="drawer">
          <ul class="list-menu">
            <li class="list-item"><a href="#">Home</a></li>
            <li class="list-item"><a href="#content">Favorite</a></li>
            <li class="list-item"><a href="${AppBar.githubAccount}">About Us</a></li>
          </ul>
        </nav>
        <a id="hamburger" href="#">☰</a>
    </div>
    `;
  }
}

customElements.define("app-bar", AppBar);
