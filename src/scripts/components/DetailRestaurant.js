class DetailResource extends HTMLElement {
  set restaurant(restaurant) {
    this.restaurant = restaurant;
  }
  render() {
    this.innerHTML = '';
    this.innerHTML = `
    `;
  }
}
customElements.define('detail-restaurant', DetailResource);
