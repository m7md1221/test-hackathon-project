// Test file with intentional ESLint errors and warnings
const unusedVariable = 5; // Error: unused variable

function calculateSum(a, b) {
  console.log("Calculating sum..."); // Warning: console statement
  return a + b
}

const unusedFunction = () => {
  return "This function is never used"; // Error: unused function
};

function processData(data) {
  console.log(data); // Warning: console statement
  let result = data * 2;
  return result;
}

// Missing semicolon - error
const greeting = "Hello World"

// Using console - warning
console.log(greeting);

// Calling function
const sum = calculateSum(10, 20);
processData(sum);

// This will generate:
// - 3 unused variable/function errors (unusedVariable, unusedFunction, greeting without proper usage)
// - 3 console warnings
// - 1 missing semicolon error
// Expected score: 100 - (4 errors * 5) - (3 warnings * 2) = 100 - 20 - 6 = 74/100
