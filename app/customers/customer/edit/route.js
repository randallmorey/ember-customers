import Ember from 'ember';

/**
 * The edit route displays the customer form.
 *
 * @module
 * @augments ember/Route
 */
export default Ember.Route.extend({
  // =actions

  actions: {
    /**
     * Rollsback the customer model if it `hasDirtyAttributes`.
     *
     * @function actions:willTransition
     * @returns {undefined}
     */
    willTransition() {
      const customer = this.modelFor('customers.customer');
      if (customer.get('hasDirtyAttributes')) {
        customer.rollbackAttributes();
      }
    }
  }
});
