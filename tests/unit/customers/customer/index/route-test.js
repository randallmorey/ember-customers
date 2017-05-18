import { moduleFor, test } from 'ember-qunit';

moduleFor('route:customers/customer/index', 'Unit | Route | customers/customer/index', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});

test('it should transition to edit route', function (assert) {
  assert.expect(1);
  let route = this.subject({
    transitionTo: (routeName) => {
      assert.equal(routeName, 'customers.customer.edit');
    }
  });
  route.afterModel();
});
