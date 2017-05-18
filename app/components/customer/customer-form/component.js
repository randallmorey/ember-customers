import Ember from 'ember';

/**
 * A simple customer form component with fields for {@link module:app/customer/model}.
 *
 * @module
 * @augments ember/Component
 * @example
 *  {{customer/customer-form
 *    customer=model
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
    }
  }
});
