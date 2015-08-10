/// <reference path="qunit.js" />
/// <reference path="calculator.js" />

QUnit.test("hello test", function (assert) {
    assert.ok(1 == "1", "Passed!");
});

QUnit.test("Add", function(assert) {
    assert.strictEqual(calculator.add(1, 1), 2, "Add Passed!");
});

QUnit.test("Subtract", function(assert) {
    assert.strictEqual(calculator.subtract(1, 1), 0, "Subtract Passed!");
});