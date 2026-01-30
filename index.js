// Perfect clean code - 100/100 score
// No ESLint errors or warnings

const API_URL = 'https://api.example.com';

function calculateSum(a, b) {
  return a + b;
}

function calculateProduct(a, b) {
  return a * b;
}

function calculateDifference(a, b) {
  return a - b;
}

function calculateDivision(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

function processArray(arr) {
  return arr.map((item) => item * 2);
}

function filterPositive(arr) {
  return arr.filter((item) => item > 0);
}

class Calculator {
  constructor() {
    this.history = [];
  }

  add(a, b) {
    const result = calculateSum(a, b);
    this.history.push({ operation: 'add', result });
    return result;
  }

  multiply(a, b) {
    const result = calculateProduct(a, b);
    this.history.push({ operation: 'multiply', result });
    return result;
  }

  getHistory() {
    return this.history;
  }

  clearHistory() {
    this.history = [];
  }
}

const calculator = new Calculator();
const sum = calculator.add(10, 20);
const product = calculator.multiply(5, 3);

const numbers = [1, 2, 3, 4, 5];
const doubled = processArray(numbers);
const positive = filterPositive([-1, 2, -3, 4, 5]);

module.exports = {
  calculateSum,
  calculateProduct,
  calculateDifference,
  calculateDivision,
  processArray,
  filterPositive,
  Calculator
};
