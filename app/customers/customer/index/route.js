import Ember from 'ember';

/**
 * The index route redirects to the edit route.
 *
 * @module
 * @augments ember/Route
 */
export default Ember.Route.extend({
  // =methods

  /**
   * Redirects to the edit route.
   *
   * @override
   * @function
   * @returns {undefined}
   */
  afterModel() {
    this.transitionTo('customers.customer.edit');
  }
});
