export class CustomerReview extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set reviews(value) {
    this._reviews = value;
  }

  async render() {
    this.innerHTML = '';
    this.innerHTML = ``;
  }
}
customElements.define('customer-review', CustomerReview);
