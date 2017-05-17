import { test } from 'qunit';
import moduleForAcceptance from 'ember-customers/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | customers/index');

test('visiting /customers/', function(assert) {
  visit('/customers/');

  andThen(function() {
    assert.equal(currentURL(), '/customers/');
  });
});
