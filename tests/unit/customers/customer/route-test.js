import { moduleFor, test } from 'ember-qunit';

moduleFor('route:customers/customer', 'Unit | Route | customers/customer', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});

test('it should call the route\'s modelFor() method', function (assert) {
  assert.expect(1);
  let route = this.subject({
    modelFor: (routeName) => {
      assert.equal(routeName, 'customers');
      return {findBy() {}}
    }
  });
  route.model({});
});

test('it should call the findBy method on the return value of the route\'s modelFor() method', function (assert) {
  assert.expect(2);
  let route = this.subject({
    modelFor: () => {
      return {
        findBy(field, value) {
          assert.equal(field, 'id');
          assert.equal(value, 3);
        }
      }
    }
  });
  route.model({customer_id: 3});
});
