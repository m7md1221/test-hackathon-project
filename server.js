// server.js - Express server with errors
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

// Global variables (not ideal)
var users = []
var requestCount = 0

app.get('/api/users', (req, res) => {
    console.log('Fetching users...')
    requestCount++
    res.json(users)
})

app.post('/api/users', (req, res) => {
    const user = req.body
    console.log("Adding user:", user)
    
    if (!user.name) {
        return res.status(400).json({ error: "Name is required" })
    }
    
    users.push(user)
    res.status(201).json(user)
})

app.get('/api/stats', (req, res) => {
    console.log('Getting stats')
    res.json({ 
        totalUsers: users.length,
        requests: requestCount 
    })
})

const unusedMiddleware = (req, res, next) => {
    console.log('Middleware')
    next()
}

app.listen(PORT, () => {
    console.log('Server running on port ' + PORT)
})
