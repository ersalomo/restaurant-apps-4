class ItemRestaurant extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }
  render() {
    this.innerHTML = "";
    this.innerHTML = `
    <div class="card menu-content">
          <img src="${this._restaurant.pictureId}" alt="${this._restaurant.name}" />
          <div class="card-body">
            <span class="ribbon">${this._restaurant.city}</span>
            <span class="rating">Rating ${this._restaurant.rating}</span>
            <h5>${this._restaurant.name}</h5>
            <p>${this._restaurant.description.substring(0, 80)}...</p>
          </div>
     </div>
     `;
  }
}
customElements.define("item-restaurant", ItemRestaurant);
