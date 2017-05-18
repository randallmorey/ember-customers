import { test } from 'qunit';
import moduleForAcceptance from 'ember-customers/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | customers/index');

test('read customers list', function (assert) {
  visit('/customers');
  andThen(function () {
    assert.equal(currentURL(), '/customers');
    assert.notEqual(find('a.list-group-item').length, 0);
    assert.equal(find('a.list-group-item').length, window.server.db.customers.length);
  });
});

test('navigate to customer from customers list', function (assert) {
  visit('/customers');
  andThen(function () {
    assert.equal(currentURL(), '/customers');
  });
  click('a.list-group-item:eq(0)');
  andThen(function () {
    assert.equal(currentURL(), '/customers/1/edit');
  });
});
