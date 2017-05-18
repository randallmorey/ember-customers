import { moduleFor, test } from 'ember-qunit';

moduleFor('route:customers', 'Unit | Route | customers', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});

test('it should call findAll(\'customer\') on the route\'s store from model()', function (assert) {
  assert.expect(1);
  let route = this.subject({
    store: {
      findAll: (modelName) => {
        assert.equal(modelName, 'customer');
      }
    }
  });
  route.model();
});
