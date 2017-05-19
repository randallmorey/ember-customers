import Ember from 'ember';

/**
 * Route for the new customer form.
 *
 * @module
 * @augments ember/Route
 */
export default Ember.Route.extend({
  // =methods

  /**
   * This route generates a newly-created customer instance.
   *
   * @override
   * @function
   * @returns {module:app/customer/model}
   */
  model() {
    return this.store.createRecord('customer');
  },

  // =actions

  actions: {
    /**
     * Rollsback and removes the route's customer model if it `isNew`.
     *
     * @function actions:willTransition
     * @returns {undefined}
     */
    willTransition() {
      const model = this.modelFor('customers.new');
      if (model.get('isNew')) {
        // `rollbackAttributes` on a model that `isNew` both reverts all
        // attributes to their defaults and causes the record to be removed
        // from the store.
        // Thus, this is a good way to clean up new unsaved records that we
        // want to get rid of.
        model.rollbackAttributes();
      }
    }
  }
});
