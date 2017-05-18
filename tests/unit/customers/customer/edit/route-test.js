import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';

moduleFor('route:customers/customer/edit', 'Unit | Route | customers/customer/edit', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});

test('it should call rollbackAttributes on a dirty model on transition', function (assert) {
  assert.expect(1);
  let route = this.subject({
    modelFor: function () {
      return Ember.Object.create({
        hasDirtyAttributes: true,
        rollbackAttributes() {
          assert.ok(this.hasDirtyAttributes, 'should call rollbackAttributes on a dirty model');
        }
      });
    }
  });
  route.actions.willTransition.call(route);
});
