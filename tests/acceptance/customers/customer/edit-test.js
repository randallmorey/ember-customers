import { test } from 'qunit';
import moduleForAcceptance from 'ember-customers/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | customers/customer/edit');

test('visiting /customers/1/edit', function(assert) {
  visit('/customers/1/edit');
  andThen(function() {
    assert.equal(currentURL(), '/customers/1/edit');
  });
});

test('viewing validation errors', function (assert) {
  visit('/customers/1/edit');
  fillIn('[name="name"]', '');
  fillIn('[name="email"]', 'test@');
  fillIn('[name="postalCode"]', '1');
  click('button[type="submit"]');
  andThen(function () {
    assert.equal(find('.form-group.has-danger:visible').length, 3);
    assert.equal(find('.form-group:eq(0) .form-control-feedback').text(), 'can\'t be blank');
    assert.equal(find('.form-group:eq(1) .form-control-feedback').text(), 'is not a valid email');
    assert.equal(find('.form-group:eq(6) .form-control-feedback').text(), 'is not a valid zip code');
  });
});

test('saving valid customer instance and redirecting to /', function (assert) {
  visit('/customers/1/edit');
  andThen(function () {
    assert.equal(currentURL(), '/customers/1/edit');
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
  });
});


test('navigating away from edit route discards abandoned changes', function (assert) {
  visit('/customers/1/edit');
  andThen(function () {
    assert.equal(currentURL(), '/customers/1/edit');
    assert.notEqual(window.server.db.customers[0].name, 'foobar');
  });
  fillIn('[name="name"]', 'foobar');
  click('.navbar-brand');
  andThen(function () {
    assert.equal(currentURL(), '/customers');
    assert.notEqual(window.server.db.customers[0].name, 'foobar');
  });
});
