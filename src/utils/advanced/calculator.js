// Deep nested file - src/utils/advanced/calculator.js
function add(x, y) {
    return x + y
}

function subtract(x, y) {
    return x - y
}

function multiply(x, y) {
    console.log('Multiplying:', x, y)
    return x * y
}

function divide(x, y) {
    if (y == 0) {
        throw new Error("Cannot divide by zero")
    }
    return x / y
}

const PI = 3.14159

module.exports = { add, subtract, multiply, divide }
