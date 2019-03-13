const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')

const users = require('./src/routes/users')
const notes = require('./src/routes/notes')

const app = express()

// Add body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Connect to MongoDB
const { mongoURI, mongoDB, mongoPort } = require('./config/keys')
const db = `${mongoURI}:${mongoPort}/${mongoDB}`
console.log('db', db)
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err))

// Passport Middleware
app.use(passport.initialize())

// Passport Config
require('./config/passport')(passport)

// API Routes
app.use('/users', users)
app.use('/notes', notes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
