import Ember from 'ember';

/**
 * The new controller handles the `saveCustomer` action
 * and post-success redirect.
 *
 * @module
 * @augments ember/Controller
 */
export default Ember.Controller.extend({
  // =actions

  /** @type {Object} */
  actions: {
    /**
     * Saves the passed customer instance.
     * If save is successful, redirects to the `application` route.
     * If save fails, does nothing.
     *
     * @function actions:saveCustomer
     * @param {module:app/customer/model} customer
     * @returns {undefined}
     */
    saveCustomer(customer) {
      customer.save().then(() => {
        this.transitionToRoute('application');
      });
    }
  }
});
