import { moduleFor, test } from 'ember-qunit';

moduleFor('route:application', 'Unit | Route | application', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});

test('it should transition to customers route', function (assert) {
  assert.expect(1);
  let route = this.subject({
    transitionTo: (routeName) => {
      assert.equal(routeName, 'customers');
    }
  });
  route.afterModel();
});
