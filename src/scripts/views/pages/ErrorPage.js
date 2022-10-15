export default class ErrorPage extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = '';
    this.innerHTML = `<div class="container" id="error-page">
                        <img src="./images/error-page.png" alt="error-page" />
                      </div>
                      `;
  }
}

customElements.define('error-page', ErrorPage);
