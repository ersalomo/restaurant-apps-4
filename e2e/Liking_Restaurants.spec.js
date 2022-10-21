const { pause } = require('codeceptjs');
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#likeRestaurant');
  I.see('', '#likeRestaurant');
});

Scenario('Liking one restaurant', async ({ I }) => {
  I.seeElement('#likeRestaurant');
  I.see('', 'like-restaurant.wrapper.restaurant');
  I.amOnPage('/');
  pause();
  I.seeElement('.card.menu-content'); // item-restaurant
  const firstRestaurant = locate('.card.menu-content h3 a').first();
  const firsNameRestaurant = await I.grabTextFrom('.card.menu-content h3 a');
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card.menu-content');

  const likedRestaurantJudul = await I.grabTextFrom('.card.menu-content h3');

  assert.strictEqual(firsNameRestaurant, likedRestaurantJudul);
});
