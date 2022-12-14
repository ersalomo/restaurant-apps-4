import API_ENDPOINT from '../globals/api-endpoint.js';

export default class Restaurant {
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
  static async addReview({ id, name, review }) {
    const options = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, name, review }),
    };
    const response = await fetch(`${API_ENDPOINT.addReview}`, options);
    const responseJson = await response.json();
    return responseJson;
  }
}
