// src/utils/helpers.js - Utility functions with errors
const API_KEY = 'test123'

function validateEmail(email) {
  console.log('Validating email:', email)
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return date.toLocaleDateString('en-US', options)
}

const unusedVariable = 'this will cause error'

function calculatePercentage(value, total) {
  if (total == 0) {
    return 0
  }
  return (value / total) * 100
}

module.exports = { validateEmail, formatDate, calculatePercentage }
