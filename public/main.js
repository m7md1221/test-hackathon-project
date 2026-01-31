// public/main.js - Frontend JavaScript
document.addEventListener('DOMContentLoaded', () => {
    console.log("Page loaded")
    
    const button = document.getElementById("testBtn")
    const result = document.getElementById("result")
    
    button.addEventListener('click', handleButtonClick)
})

function handleButtonClick(event) {
    console.log('Button clicked:', event)
    
    var clickCount = 0
    clickCount++
    
    const message = "You clicked the button!"
    showMessage(message)
}

function showMessage(msg) {
    const result = document.getElementById("result")
    result.textContent = msg
    result.style.display = "block"
}

async function fetchUserData() {
    try {
        const response = await fetch('/api/users')
        const data = await response.json()
        console.log("Users:", data)
        return data
    } catch (err) {
        console.error('Error fetching users:', err)
    }
}

const API_ENDPOINT = "https://api.example.com"
const unusedConstant = "not used"
