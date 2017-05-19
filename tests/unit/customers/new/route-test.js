import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';

const { run } = Ember;

moduleFor('route:customers/new', 'Unit | Route | customers/new', {
  // Specify the other units that are required for this test.
  needs: ['model:customer']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});

test('it generates a new customer instance', function (assert) {
  let route = this.subject();
  run(() => {
    const model = route.model();
    assert.ok(model);
    assert.equal(model.constructor.modelName, 'customer');
  });
});

test('it should call rollbackAttributes on a new model on transition', function (assert) {
  assert.expect(1);
  let route = this.subject({
    modelFor: function () {
      return Ember.Object.create({
        isNew: true,
        rollbackAttributes() {
          assert.ok(true, 'should call rollbackAttributes on a new model');
        }
      });
    }
  });
  route.actions.willTransition.call(route);
});
