// What’s wrong in the test of pow below?

it("Raises x to the power n", function() {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});

// The test demonstrates one of the temptations a developer meets when writing tests.

// What we have here is actually 3 tests, but layed out as a single function with 3 asserts.

// Sometimes it’s easier to write this way, but if an error occurs, it’s much less obvious what went wrong.

// If an error happens in the middle of a complex execution flow, then we’ll have to figure out the data at that point. We’ll actually have to debug the test.

// It would be much better to break the test into multiple it blocks with clearly written inputs and outputs.

// Like this:

describe("Raises x to power n", function() {
    it("5 in the power of 1 equals 5", function() {
      assert.equal(pow(5, 1), 5);
    });
  
    it("5 in the power of 2 equals 25", function() {
      assert.equal(pow(5, 2), 25);
    });
  
    it("5 in the power of 3 equals 125", function() {
      assert.equal(pow(5, 3), 125);
    });
  });