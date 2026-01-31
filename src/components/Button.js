// src/components/Button.js - UI component
class Button {
  constructor(text, onClick) {
    this.text = text
    this.onClick = onClick
    this.element = null
  }

  render() {
    const button = document.createElement('button')
    button.textContent = this.text
    button.addEventListener('click', this.onClick)
    this.element = button
    return button
  }

  disable() {
    if (this.element) {
      this.element.disabled = true
    }
  }

  enable() {
    if (this.element) {
      this.element.disabled = false
    }
  }
}

const unusedButton = new Button('Test', () => {})

module.exports = Button
