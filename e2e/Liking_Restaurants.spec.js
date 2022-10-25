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

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#likeRestaurant');
  I.see('', '#likeRestaurant');
});

Scenario('Unlinked one restaurant', async ({ I }) => {
  I.seeElement('#likeRestaurant');
  I.see('', 'like-restaurant.wrapper.restaurant');
  I.amOnPage('/');
  pause();
  I.seeElement('item-restaurant');
  const firstRestaurant = locate('.card-body h3 a').first();
  // const firsNameRestaurant = await I.grabTextFrom('.card.menu-content h3 a');
  I.click(firstRestaurant);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.seeElement('item-restaurant');
  I.see('Medan', 'item-restaurant .ribbon');
  I.seeElement('.card.menu-content');
  I.click('.card.menu-content h3 a');

  // on halaman detail and see element button is unlike this => for unliking restaurant
  // still like
  I.seeElement('#likeButton');
  const unlikeThisRestaurantValueAttr = await I.grabAttributeFrom('#likeButton', 'aria-label');
  assert.strictEqual('unlike this restaurant', unlikeThisRestaurantValueAttr);
  I.click('#likeButton');
  // after unlike
  // for unliking restaurant like this restaurant
  const likeThisRestaurantValueAttr = await I.grabAttributeFrom('#likeButton', 'aria-label');
  assert.strictEqual('like this restaurant', likeThisRestaurantValueAttr);
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#likeRestaurant');
  I.see('', '#likeRestaurant');
});

Scenario('Do comment restaurant', ({ I }) => {
  I.seeElement('#likeRestaurant');
  I.see('', 'like-restaurant.wrapper.restaurant');
  I.amOnPage('/');
  pause();
  I.seeElement('.card.menu-content'); // item-restaurant
  const firstRestaurant = locate('.card.menu-content h3 a').first();
  I.click(firstRestaurant);
  I.seeElement('#review-input');
  I.see('Add New Review', '#review-input > h3');
  I.seeElement('#form-review-customers');
  const inputName = 'Ersalomo Str';
  I.fillField('input[name=name]', inputName);
  I.fillField('textarea[name=comment]', 'This course really awesome, teach me some stuff');
  const submitButton = 'button[type=submit]';
  I.seeElement(submitButton);
  I.click(submitButton);
});
