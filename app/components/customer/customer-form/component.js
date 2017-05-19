import Ember from 'ember';

/**
 * A simple customer form component with fields for
 * {@link module:app/customer/model}.
 *
 * @module
 * @augments ember/Component
 * @example
 *  {{customer/customer-form
 *    customer=model
 *    delete=(action externalDelete)
 *    save=(action externalSave)}}
 */
export default Ember.Component.extend({
  // =actions

  /** @type {Object} */
  actions: {
    /**
     * Trigger a bound `save` method when the form is submitted, passing the
     * form's customer instance *if* the customer instance is valid.
     *
     * @function actions:submit
     * @returns {undefined}
     */
    submit() {
      const customer = this.get('customer');
      if (customer.validate()) {
        this.get('save')(customer);
      }
    },

    /**
     * Trigger a bound `delete` method when the delete action is fired, passing
     * the form's customer instance.
     *
     * @function actions:delete
     * @returns {undefined}
     */
    delete() {
      const customer = this.get('customer');
      this.get('delete')(customer);
    }
  }
});
