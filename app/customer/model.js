import DS from 'ember-data';
import Validator from 'ember-model-validator/mixins/model-validator';

const { Model, attr } = DS;

/**
 * A simple customer model.
 *
 * @module
 * @augments ember-data/Model
 * @augments ember-model-validator/mixins/model-validator
 */
export default Model.extend(Validator, {
  // =attributes

  /** @type {String} */
  name: attr('string'),

  /** @type {String} */
  email: attr('string'),

  /** @type {String} */
  tel: attr('string'),

  /** @type {String} */
  streetAddress: attr('string'),

  /** @type {String} */
  locality: attr('string'),

  /** @type {String} */
  region: attr('string'),

  /** @type {String} */
  postalCode: attr('string'),

  // =validations

  /**
   * Validations declarations.
   *
   * @type {Object}
   */
  validations: {
    name: {
      presence: true
    },
    email: {
      presence: true,
      email: true
    },
    postalCode: {
      // If no countryCode is specified, 'US' is used as default
      zipCode: {
        allowBlank: true
      }
    }
  }
});
