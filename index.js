// Test file with ONLY warnings (no errors)

function calculateSum(a, b) {
  console.log('Calculating sum...'); // Warning: console
  return a + b;
}

function calculateProduct(a, b) {
  console.log('Calculating product...'); // Warning: console
  return a * b;
}

function processData(data) {
  console.warn('Processing data...'); // Warning: console
  const result = data.map((item) => item * 2);
  console.log('Processing complete'); // Warning: console
  return result;
}

class Calculator {
  constructor() {
    this.history = [];
  }

  add(a, b) {
    const result = a + b;
    console.log('Add result:', result); // Warning: console
    this.history.push(result);
    return result;
  }

  multiply(a, b) {
    const result = a * b;
    console.log('Multiply result:', result); // Warning: console
    this.history.push(result);
    return result;
  }
}

const calc = new Calculator();
calc.add(10, 20);
calc.multiply(5, 3);

const data = [1, 2, 3, 4, 5];
const processed = processData(data);
console.log('Final result:', processed); // Warning: console

module.exports = {
  calculateSum,
  calculateProduct,
  processData,
  Calculator
};
