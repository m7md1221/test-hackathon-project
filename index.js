// Clean test file - no ESLint errors or warnings

const API_URL = 'https://api.example.com';

function calculateSum(a, b) {
  return a + b;
}

function calculateProduct(a, b) {
  return a * b;
}

function processNumber(num) {
  const doubled = num * 2;
  return doubled;
}

class DataProcessor {
  constructor(data) {
    this.data = data;
  }

  process() {
    return this.data.map((item) => item * 2);
  }

  filter(predicate) {
    return this.data.filter(predicate);
  }
}

const processor = new DataProcessor([1, 2, 3, 4, 5]);
const result = processor.process();
const filtered = processor.filter((item) => item > 2);

module.exports = {
  calculateSum,
  calculateProduct,
  processNumber,
  DataProcessor
};
