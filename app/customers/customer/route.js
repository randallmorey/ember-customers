import Ember from 'ember';

/**
 * The customer route loads the specified customer record.
 *
 * @module
 * @augments ember/Route
 */
export default Ember.Route.extend({
  // =methods

  /**
   * This route loads the specified customer.
   *
   * @override
   * @function
   * @returns {module:app/customer/model}
   */
  model(params) {
    return this.modelFor('customers').findBy('id', params.customer_id);
  }
});
