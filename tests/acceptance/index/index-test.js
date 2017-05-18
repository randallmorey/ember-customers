import { test } from 'qunit';
import moduleForAcceptance from 'ember-customers/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index');

test('visiting / redirects to /customers', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/customers');
  });
});
