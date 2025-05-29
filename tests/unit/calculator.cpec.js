const assert = require("assert");
const Calculator = require("../../app/calculator");

describe("Calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe("Положительные тесты", () => {
    it("должен корректно складывать 5 + 3", () => {
      const result = calculator.calculate(5, 3, "+");
      assert.strictEqual(result, 8, "Сложение 5 + 3 должно равняться 8");
    });

    it("должен корректно вычитать 10 - 4", () => {
      const result = calculator.calculate(10, 4, "-");
      assert.strictEqual(result, 6, "Вычитание 10 - 4 должно равняться 6");
    });

    it("должен корректно умножать 6 * 7", () => {
      const result = calculator.calculate(6, 7, "*");
      assert.strictEqual(result, 42, "Умножение 6 * 7 должно равняться 42");
    });

    it("должен корректно делить 15 / 3", () => {
      const result = calculator.calculate(15, 3, "/");
      assert.strictEqual(result, 5, "Деление 15 / 3 должно равняться 5");
    });

    it("должен корректно возводить 2^3", () => {
      const result = calculator.calculate(2, 3, "^");
      assert.strictEqual(result, 8, "Возведение 2^3 должно равняться 8");
    });
  });

  describe("Отрицательные тесты", () => {
    it("должен выбросить исключение при делении на ноль", () => {
      assert.throws(
        () => {
          calculator.calculate(10, 0, "/");
        },
        /Деление на ноль невозможно/,
        "Должно выбросить ошибку при делении на ноль"
      );
    });

    it("должен выбросить исключение при неверном операторе", () => {
      assert.throws(
        () => {
          calculator.calculate(5, 3, "%");
        },
        /Неверный оператор/,
        "Должно выбросить ошибку при неверном операторе"
      );
    });

    it("должен провалиться при неверном сложении 5 + 3", () => {
      const result = calculator.calculate(5, 3, "+");
      assert.notStrictEqual(
        result,
        10,
        "Сложение 5 + 3 не должно равняться 10"
      );
    });

    it("должен провалиться при неверном умножении 4 * 5", () => {
      const result = calculator.calculate(4, 5, "*");
      assert.notStrictEqual(
        result,
        25,
        "Умножение 4 * 5 не должно равняться 25"
      );
    });

    it("должен провалиться при неверном возведении 3^2", () => {
      const result = calculator.calculate(3, 2, "^");
      assert.notStrictEqual(
        result,
        10,
        "Возведение 3^2 не должно равняться 10"
      );
    });
  });
});
