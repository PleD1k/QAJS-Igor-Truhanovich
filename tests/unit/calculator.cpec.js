const assert = require("assert");
const Calculator = require("../../app/calculator");

describe("Calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe("Positive tests", () => {
    it("should correctly addition 5 + 3", () => {
      const result = calculator.calculate(5, 3, "+");
      assert.strictEqual(result, 8, "The addition of 5 + 3 should equal 8");
    });

    it("should correctly subtract 10 - 4", () => {
      const result = calculator.calculate(10, 4, "-");
      assert.strictEqual(result, 6, "Subtraction of 10 - 4 should equal 6");
    });

    it("should correctly multiply 6 * 7", () => {
      const result = calculator.calculate(6, 7, "*");
      assert.strictEqual(result, 42, "Multiplication of 6 * 7 should equal 42");
    });

    it("should correctly divide 15 / 3", () => {
      const result = calculator.calculate(15, 3, "/");
      assert.strictEqual(result, 5, "Division 15 / 3 should be equal to 5");
    });

    it("should correctly raise 2^3", () => {
      const result = calculator.calculate(2, 3, "^");
      assert.strictEqual(result, 8, "The exponentiation of 2^3 should equal 8");
    });
  });

  describe("Negative tests", () => {
    it("should throw an error when dividing by zero", () => {
      assert.throws(
        () => {
          calculator.calculate(10, 0, "/");
        },
        /Division by zero is not possible/,
        "It should throw an error when dividing by zero"
      );
    });

    it("should throw an error when dividing by zero", () => {
      assert.throws(
        () => {
          calculator.calculate(5, 3, "%");
        },
        /Invalid operator/,
        "should throw an error with an incorrect statement"
      );
    });

    it("should fail if the addition of 5 + 3 is incorrect", () => {
      const result = calculator.calculate(5, 3, "+");
      assert.notStrictEqual(
        result,
        10,
        "The addition of 5 + 3 should not equal 10"
      );
    });

    it("should fail with an incorrect multiplication of 4 * 5", () => {
      const result = calculator.calculate(4, 5, "*");
      assert.notStrictEqual(
        result,
        25,
        "Multiplication of 4 * 5 should not equal 25"
      );
    });

    it("should fail if 3^2 is raised incorrectly", () => {
      const result = calculator.calculate(3, 2, "^");
      assert.notStrictEqual(
        result,
        10,
        "The exponentiation of 3^2 should not equal 10"
      );
    });
  });
});
