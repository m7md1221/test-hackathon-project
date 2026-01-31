// src/components/Modal.js - Modal component with many issues
function showModal(title, content) {
    console.log("Opening modal:", title)
    
    const modal = document.createElement("div")
    modal.className = "modal"
    
    const header = document.createElement("div")
    header.textContent = title
    
    const body = document.createElement("div")
    body.innerHTML = content
    
    modal.appendChild(header)
    modal.appendChild(body)
    
    document.body.appendChild(modal)
}

function closeModal() {
    const modals = document.querySelectorAll('.modal')
    modals.forEach(modal => modal.remove())
}

const MODAL_Z_INDEX = "9999"

module.exports = { showModal, closeModal }
