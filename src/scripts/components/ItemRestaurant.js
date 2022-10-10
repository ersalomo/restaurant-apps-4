import API_ENDPOINT from '../globals/api-endpoint.js';
class ItemRestaurant extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }
  render() {
    this.innerHTML = '';
    const { id, pictureId, name, city, rating, description } = this._restaurant;
    this.innerHTML = `
    <div class="card menu-content">
          <img class="lazyload" src="${API_ENDPOINT.gambar(pictureId, 'small')}" alt="${name}" />
          <div class="card-body">
            <span class="ribbon">${city}</span>
            <span class="rating">Rating ⭐️${rating}</span>
            <h5><a href="#/detail/${id}">${name}</a> </h5>
            <p>${description}</p>
          </div>
     </div>
     `;
  }
}
customElements.define('item-restaurant', ItemRestaurant);
