import Ember from 'ember';

/**
 * The top-level index route
 *
 * @module
 * @augments ember/Route
 */
export default Ember.Route.extend({
  // =methods

  /**
   * Redirects to the customers route.
   *
   * @override
   * @function
   * @returns {undefined}
   */
  afterModel() {
    this.transitionTo('customers');
  }
});
