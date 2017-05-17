import Ember from 'ember';

/**
 * The customers route displays a list of customers.
 *
 * @module
 * @augments ember/Route
 */
export default Ember.Route.extend({
  // =methods

  /**
   * This route loads all customers.
   *
   * @override
   * @function
   * @returns {module:app/customer/model}
   */
  model() {
    return this.store.findAll('customer');
  },
});
