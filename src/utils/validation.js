// src/utils/validation.js - More utility functions
function isValidPhone(phone) {
  const cleaned = phone.replace(/\D/g, '')
  return cleaned.length >= 10 && cleaned.length <= 15
}

function sanitizeInput(input) {
  return input.trim().replace(/<[^>]*>/g, '')
}

var oldStyleVar = 'avoid var keyword'

function checkPassword(password) {
  if (password.length < 8) return false
  if (!/[A-Z]/.test(password)) return false
  if (!/[a-z]/.test(password)) return false
  if (!/[0-9]/.test(password)) return false
  return true
}

module.exports = { isValidPhone, sanitizeInput, checkPassword }
