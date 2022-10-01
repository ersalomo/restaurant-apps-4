import API_ENDPOINT from '../globals/api-endpoint.js';

export class Restaurant {
  static async getRestaurants() {
    const response = await fetch(API_ENDPOINT.list);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }
  static async detailRestaurant(id) {
    const response = await fetch(`${API_ENDPOINT.detail(id)}`);
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async search() {}

  static async addReview({}) {}
}
