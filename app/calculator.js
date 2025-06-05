class Calculator {
  calculate(num1, num2, operator) {
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        if (num2 === 0) {
          throw new Error("Деление на ноль невозможно");
        }
        return num1 / num2;
      case "^":
        return Math.pow(num1, num2);
      default:
        throw new Error("Неверный оператор");
    }
  }
}

module.exports = Calculator;
