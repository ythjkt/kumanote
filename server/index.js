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
const db = require('./config/keys').mongoURI
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err))

// Passport Middleware
app.use(passport.initialize())

// Passport Config
require('./config/passport')(passport)

// API Routes
app.use('/api/users', users)
app.use('/api/notes', notes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log('running'))
