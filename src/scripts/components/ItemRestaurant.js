import API_ENDPOINT from '../globals/api-endpoint.js';
class ItemRestaurant extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }
  render() {
    this.innerHTML = '';
    const { pictureId, name, city, rating, description } = this._restaurant;
    this.innerHTML = `
    <div class="card menu-content">
          <img src="${API_ENDPOINT.gambar(pictureId, 'small')}" alt="${name}" />
          <div class="card-body">
            <span class="ribbon">${city}</span>
            <span class="rating">Rating ⭐️${rating}</span>
            <h5><a href="">${name}</a> </h5>
            <p>${description.substring(0, 80)}...</p>
          </div>
     </div>
     `;
  }
}
customElements.define('item-restaurant', ItemRestaurant);
