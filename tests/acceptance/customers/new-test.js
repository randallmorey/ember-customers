import { test } from 'qunit';
import moduleForAcceptance from 'ember-customers/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | customers/new');

test('visiting /customers/new', function(assert) {
  visit('/customers/new');

  andThen(function() {
    assert.equal(currentURL(), '/customers/new');
  });
});

test('navigating to /customers/new', function (assert) {
  visit('/');
  click('.btn-success');
  andThen(function () {
    assert.equal(currentURL(), '/customers/new');
  });
});

test('viewing validation errors', function (assert) {
  visit('/customers/new');
  fillIn('[name="name"]', '');
  fillIn('[name="email"]', 'test@');
  fillIn('[name="postalCode"]', '1');
  click('button[type="submit"]');
  andThen(function () {
    assert.equal(currentURL(), '/customers/new');
    assert.equal(find('.form-group.has-danger:visible').length, 3);
    assert.equal(find('.form-group:eq(0) .form-control-feedback').text(), 'can\'t be blank');
    assert.equal(find('.form-group:eq(1) .form-control-feedback').text(), 'is not a valid email');
    assert.equal(find('.form-group:eq(6) .form-control-feedback').text(), 'is not a valid zip code');
  });
});

test('saving valid new customer instance and redirecting to /', function (assert) {
  const initialCustomerCount = window.server.db.customers.length;
  visit('/customers/new');
  andThen(function () {
    assert.equal(currentURL(), '/customers/new');
  });
  fillIn('[name="name"]', 'John Doe');
  fillIn('[name="email"]', 'john@doe.com');
  fillIn('[name="tel"]', '+18001234567');
  fillIn('[name="streetAddress"]', '1 Main St');
  fillIn('[name="locality"]', 'Pleasantville');
  fillIn('[name="region"]', 'PV');
  fillIn('[name="postalCode"]', '00001');
  click('button[type="submit"]');
  andThen(function () {
    assert.equal(currentURL(), '/customers');
    assert.equal(window.server.db.customers.length, initialCustomerCount + 1);
  });
});
