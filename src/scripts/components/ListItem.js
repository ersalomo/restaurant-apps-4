// cros // harus menggunakn domain yang sama / using http-server
import "./ItemRestaurant.js";

class ListItem extends HTMLElement {
  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  render() {
    this.setAttribute("class", "wrapper restaurant");
    this.innerHtml = "";
    this._restaurants.forEach((restaurant) => {
      const itemRestaurantElement = document.createElement("item-restaurant");
      itemRestaurantElement.restaurant = restaurant;
      this.appendChild(itemRestaurantElement);
    });
  }
}
customElements.define("list-item", ListItem);
