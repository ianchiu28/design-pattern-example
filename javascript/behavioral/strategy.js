// Strategy interface
class IOperation {
  execute(a, b) {
    throw new Error("execute method must be implemented");
  }
}

// Concrete strategies
class AddOperation extends IOperation {
  execute(a, b) {
    return a + b;
  }
}

class SubtractOperation extends IOperation {
  execute(a, b) {
    return a - b;
  }
}

class MultiplyOperation extends IOperation {
  execute(a, b) {
    return a * b;
  }
}

// Context
class Calculator {
  constructor() {}

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  calculate(a, b) {
    return this.strategy.execute(a, b);
  }
}

// Usage
const calculator = new Calculator();

calculator.setStrategy(new AddOperation());
console.log(calculator.calculate(5, 3)); // Output: 8

calculator.setStrategy(new SubtractOperation());
console.log(calculator.calculate(5, 3)); // Output: 2

calculator.setStrategy(new MultiplyOperation());
console.log(calculator.calculate(5, 3)); // Output: 15
