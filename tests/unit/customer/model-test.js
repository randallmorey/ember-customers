import Ember from 'ember';
import { moduleForModel, test } from 'ember-qunit';

const { run } = Ember;

moduleForModel('customer', 'Unit | Model | customer', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('it passes validation if validations are satisfied', function (assert) {
  const model = this.subject();
  // let store = this.store();
  run(() => {
    model.set('name', 'Andy Grammer');
    model.set('email', 'test@foo.com');
    model.set('postalCode', '01234');
    assert.ok(model.validate());
    model.set('postalCode', '01234-5678');
    assert.ok(model.validate());
  });
});

test('it passes validation if validations are satisfied and postalCode is blank', function (assert) {
  const model = this.subject();
  // let store = this.store();
  run(() => {
    model.set('name', 'Andy Grammer');
    model.set('email', 'test@foo.com');
    assert.ok(model.validate());
  });
});

test('it fails validation if name is blank', function (assert) {
  const model = this.subject();
  // let store = this.store();
  run(() => {
    model.set('name', '');
    model.set('email', 'test@foo.com');
    assert.notOk(model.validate());
  });
});

test('it fails validation if email is blank', function (assert) {
  const model = this.subject();
  // let store = this.store();
  run(() => {
    model.set('name', '');
    model.set('email', 'test@foo.com');
    assert.notOk(model.validate());
  });
});

test('it fails validation if email is invalid', function (assert) {
  const model = this.subject();
  // let store = this.store();
  run(() => {
    model.set('name', '');
    model.set('email', 'test@foo');
    assert.notOk(model.validate());
  });
});

test('it fails validation if postalCode is invalid', function (assert) {
  const model = this.subject();
  // let store = this.store();
  run(() => {
    model.set('name', 'Andy Grammer');
    model.set('email', 'test@foo.com');
    model.set('postalCode', '0123');
    assert.notOk(model.validate());
  });
});
