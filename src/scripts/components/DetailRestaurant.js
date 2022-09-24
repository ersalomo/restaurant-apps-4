class DetailResource extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
  }
  render() {
    this.innerHTML = '';
    this.setAttribute('id', 'detail-restaurant');
    this.setAttribute('class', 'restaurant-item');
    this.innerHTML = `
    <div class="restaurant-header">
      <img class="restaurant_poster" src="https://restaurant-api.dicoding.dev/images/medium/12" alt="" />
    </div>
    <div class="restaurant_info">
      <h3 class="restaurant_title">Restorant Kamu</h3>
      <h4>City</h4>
      <p>Medan</p>
      <h4>Rating</h4>
      <p>4.5</p>
      <h4>Description</h4>
      <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi Lorem ipsum dolor sit amet.</p>
    </div>

    `;
  }
}
customElements.define('detail-restaurant', DetailResource);
