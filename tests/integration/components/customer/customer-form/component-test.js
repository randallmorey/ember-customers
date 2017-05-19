import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

const { run } = Ember;

moduleForComponent('customer/customer-form', 'Integration | Component | customer/customer form', {
  integration: true
});

test('it renders with an empty customer model', function (assert) {
  run(() => {
    this.set('customer', {});
    this.render(hbs`{{customer/customer-form customer=customer}}`);
    assert.equal(this.$('[name="name"]:visible').length, 1);
    assert.equal(this.$('[name="email"]:visible').length, 1);
    assert.equal(this.$('[name="tel"]:visible').length, 1);
    assert.equal(this.$('[name="streetAddress"]:visible').length, 1);
    assert.equal(this.$('[name="locality"]:visible').length, 1);
    assert.equal(this.$('[name="region"]:visible').length, 1);
    assert.equal(this.$('[name="postalCode"]:visible').length, 1);
  });
});

test('it renders with a filled customer model', function (assert) {
  run(() => {
    this.set('customer', {
      name: 'John Doe',
      email: 'john@doe.com',
      tel: '+18001234567',
      streetAddress: '1 Main St',
      locality: 'Pleasantville',
      region: 'PV',
      postalCode: '00001'
    });
    this.render(hbs`{{customer/customer-form customer=customer}}`);
    assert.equal(this.$('[name="name"]:visible').val(), 'John Doe');
    assert.equal(this.$('[name="email"]:visible').val(), 'john@doe.com');
    assert.equal(this.$('[name="tel"]:visible').val(), '+18001234567');
    assert.equal(this.$('[name="streetAddress"]:visible').val(), '1 Main St');
    assert.equal(this.$('[name="locality"]:visible').val(), 'Pleasantville');
    assert.equal(this.$('[name="region"]:visible').val(), 'PV');
    assert.equal(this.$('[name="postalCode"]:visible').val(), '00001');
  });
});

test('it updates underlaying instance based on input', function (assert) {
  run(() => {
    let customer = {};
    this.set('customer', customer);
    this.render(hbs`{{customer/customer-form customer=customer}}`);
    // fill out the form and force an onchange
    this.$('[name="name"]').val('John Doe').change();
    this.$('[name="email"]').val('john@doe.com').change();
    this.$('[name="tel"]').val('+18001234567').change();
    this.$('[name="streetAddress"]').val('1 Main St').change();
    this.$('[name="locality"]').val('Pleasantville').change();
    this.$('[name="region"]').val('PV').change();
    this.$('[name="postalCode"]').val('0001').change();

    // test that changes propogate to underlaying instance
    assert.equal(customer.name, 'John Doe');
    assert.equal(customer.email, 'john@doe.com');
    assert.equal(customer.tel, '+18001234567');
    assert.equal(customer.streetAddress, '1 Main St');
    assert.equal(customer.locality, 'Pleasantville');
    assert.equal(customer.region, 'PV');
    assert.equal(customer.postalCode, '0001');
  });
});

test('it renders validation error messages', function (assert) {
  run(() => {
    const store = this.container.lookup('service:store');
    let customer = store.createRecord('customer', {
      name: '',
      email: 'foo@',
      postalCode: '123'
    });
    this.set('customer', customer);
    this.render(hbs`{{customer/customer-form customer=customer}}`);
    customer.validate();
  });
  run(() => {
    let nameErrors = this.get('customer.errors').errorsFor('name');
    let emailErrors = this.get('customer.errors').errorsFor('email');
    let postalCodeErrors = this.get('customer.errors').errorsFor('postalCode');
    assert.equal(this.$('.form-group.has-danger:visible').length, 3);
    assert.equal(this.$('.form-group:eq(0) .form-control-feedback').text(), nameErrors[0].message);
    assert.equal(this.$('.form-group:eq(1) .form-control-feedback').text(), emailErrors[0].message);
    assert.equal(this.$('.form-group:eq(6) .form-control-feedback').text(), postalCodeErrors[0].message);
  });
});

test('its `submit` action calls `validate` on the customer instance', function (assert) {
  assert.expect(1);
  let customer = {
    validate() {
      assert.ok(true, 'customer.validate() was called');
      return false;
    }
  };
  this.set('customer', customer);
  this.render(hbs`{{customer/customer-form customer=customer}}`);
  // submit form
  this.$('button[type="submit"]').click();
});

test('it triggers the external save action on submit if the customer instance is valid', function (assert) {
  run(() => {
    const store = this.container.lookup('service:store');
    let customer = store.createRecord('customer', {
      name: 'John Doe',
      email: 'john@doe.com',
      tel: '+18001234567',
      streetAddress: '1 Main St',
      locality: 'Pleasantville',
      region: 'PV',
      postalCode: '00001'
    });
    this.set('customer', customer);
    this.set('externalSave', (savedcustomer) => {
      assert.ok(savedcustomer);
      assert.equal(savedcustomer.get('name'), 'John Doe');
      assert.equal(savedcustomer.get('email'), 'john@doe.com');
      assert.equal(savedcustomer.get('tel'), '+18001234567');
      assert.equal(savedcustomer.get('streetAddress'), '1 Main St');
      assert.equal(savedcustomer.get('locality'), 'Pleasantville');
      assert.equal(savedcustomer.get('region'), 'PV');
      assert.equal(savedcustomer.get('postalCode'), '00001');
    });
    this.render(hbs`{{customer/customer-form customer=customer save=(action externalSave)}}`);
    // submit form
    this.$('button[type="submit"]').click();
  });
});

test('it triggers the external delete action on delete', function (assert) {
  this.set('customer', {
    hasDirtyAttributes: false
  });
  this.set('externalDelete', (deletedCustomer) => {
    assert.ok(deletedCustomer);
  });
  this.render(hbs`{{customer/customer-form customer=customer delete=(action externalDelete)}}`);
  assert.equal(this.$('.btn-outline-danger:visible').length, 1);
  // submit form
  this.$('.btn-outline-danger:visible').click();
});
