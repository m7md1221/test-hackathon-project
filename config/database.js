// config/database.js - Database configuration
const mongoose = require('mongoose')

const DB_URL = process.env.MONGO_URI || "mongodb://localhost:27017/testdb"

async function connectDB() {
    try {
        console.log("Connecting to database...")
        await mongoose.connect(DB_URL)
        console.log('Database connected successfully')
    } catch (error) {
        console.error("Database connection error:", error)
        process.exit(1)
    }
}

var retryCount = 0

function disconnectDB() {
    console.log('Disconnecting from database')
    mongoose.connection.close()
}

const dbConfig = {
    maxRetries: 3,
    timeout: 5000
}

module.exports = { connectDB, disconnectDB }
