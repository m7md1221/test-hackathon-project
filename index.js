'use strict';

/**
 * Basic math functions
 */
function calculateSum(a, b) {
  return Number(a) + Number(b);
}

function calculateProduct(a, b) {
  return Number(a) * Number(b);
}

function calculateDifference(a, b) {
  return Number(a) - Number(b);
}

function calculateDivision(a, b) {
  if (Number(b) === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return Number(a) / Number(b);
}

/**
 * Array utilities
 */
function processArray(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }
  return arr.map(item => Number(item) * 2);
}

function filterPositive(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }
  return arr.filter(item => Number(item) > 0);
}

/**
 * Calculator class
 */
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
    return [...this.history];
  }

  clearHistory() {
    this.history.length = 0;
  }
}

/**
 * Example usage
 */
const calculator = new Calculator();
calculator.add(10, 20);
calculator.multiply(5, 3);

processArray([1, 2, 3, 4, 5]);
filterPositive([-1, 2, -3, 4, 5]);

module.exports = {
  calculateSum,
  calculateProduct,
  calculateDifference,
  calculateDivision,
  processArray,
  filterPositive,
  Calculator
};
