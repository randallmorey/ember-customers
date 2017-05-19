import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';

const { RSVP: { Promise } } = Ember;

moduleFor('controller:customers/customer/edit', 'Unit | Controller | customers/customer/edit', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});

test('its `saveCustomer` action calls `save` on the passed customer instance', function (assert) {
  assert.expect(1);
  let controller = this.subject();
  let customer = {
    save() {
      assert.ok(true, 'customer.save() was called');
      return {
        then() {}
      };
    }
  };
  controller.send('saveCustomer', customer);
});

test('its `saveCustomer` action transitions to the `application` route if the customer instance validates and saves', function (assert) {
  const done = assert.async();
  assert.expect(1);
  let controller = this.subject();
  controller.transitionToRoute = function (routeName) {
    assert.equal(routeName, 'application', 'controller.transitionToRoute() was called');
    done();
  };
  let customer = {
    validate() {
      return true;
    },
    save() {
      return Promise.resolve();
    }
  };
  controller.send('saveCustomer', customer);
});

test('its `deleteCustomer` action calls `destroyRecord` on the passed customer instance', function (assert) {
  assert.expect(1);
  let controller = this.subject();
  let customer = {
    destroyRecord() {
      assert.ok(true, 'customer.destroyRecord() was called');
      return {
        then() {}
      };
    }
  };
  controller.send('deleteCustomer', customer);
});

test('its `deleteCustomer` action transitions to the `application` route if the customer instance deletes successfully', function (assert) {
  const done = assert.async();
  assert.expect(1);
  let controller = this.subject();
  controller.transitionToRoute = function (routeName) {
    assert.equal(routeName, 'application', 'controller.transitionToRoute() was called');
    done();
  };
  let customer = {
    destroyRecord() {
      return Promise.resolve();
    }
  };
  controller.send('deleteCustomer', customer);
});
