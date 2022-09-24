import API_ENDPOINT from '../globals/api-endpoint.js';

export class Restaurant {
  static async getRestaurants() {
    const response = await fetch(API_ENDPOINT.list);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }
  static async detailRestaurant(id) {
    const response = fetch(`${API_ENDPOINT.detail(id)}`);
    return response.json();
  }

  static async search() {}

  static async addReview({}) {}
}
