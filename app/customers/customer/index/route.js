import Ember from 'ember';

/**
 * customers.customer.index redirects to customers.customer.edit and is included
 * here for flexibility, since the index may not always be for edit.
 * For example, this route could easily become a "show"-only route.
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
