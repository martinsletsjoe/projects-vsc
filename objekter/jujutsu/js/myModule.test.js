/**
 * @qunit
 */

QUnit.module("My Module Tests");

QUnit.test("Test case 1", function (assert) {
  assert.ok(true, "This test should pass.");
});

QUnit.test("Test case 2", function (assert) {
  assert.equal(2 + 2, 4, "This test should also pass.");
});
