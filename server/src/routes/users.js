const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../../config/keys')
const passport = require('passport')

// Load Input Validation
const validateResigeterInput = require('../validators/validateRegister')

// @route GET api/users/test
// @desc  Tests users route
// @access Public
router.get('/test', (req, res) => {
  res.json({ msg: 'Users works' })
})

// @route GET api/users/register
// @desc  Creates user
// @access Public
router.post('/register', (req, res) => {
  const { errors, isValid } = validateResigeterInput(req.body)

  if (!isValid) {
    return res.status(400).json(errors)
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = 'Email already exists'
      return res.status(404).json(errors)
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      })

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err
          newUser.password = hash
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err))
        })
      })
    }
  })
})

// @route POST api/users/login
// @desc  Login user / Returns JWT Token
// @access Public
router.post('/login', (req, res) => {
  const { email, password } = req.body

  User.findOne({
    email
  }).then(user => {
    if (!user) {
      return res.statue(404).json({ email: 'User not found' })
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched
        const payload = { id: user.id, name: user.name }

        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 86400 },
          (err, token) => {
            return res.json({
              success: true,
              token: 'Bearer ' + token
            })
          }
        )
      } else {
        return res.status(400).json({ password: 'Password Incorrect' })
      }
    })
  })
})

// @route POST api/users/login
// @desc  Login user / Returns JWT Token
// @access Public
router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    return res.json({
      id: req.user.id,
      user: req.user.name
    })
  }
)

module.exports = router
