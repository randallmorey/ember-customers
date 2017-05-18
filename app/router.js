import Ember from 'ember';
import config from './config/environment';

/**
 * The Ember router.
 *
 * @module
 * @augments ember/Router
 */
const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('customers', function () {
    this.route('customer', {path: ':customer_id'}, function () {
      this.route('edit');
    });
  });
});

export default Router;
