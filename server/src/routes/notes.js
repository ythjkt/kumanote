const router = require('express').Router()
const Note = require('../models/Note')
const passport = require('passport')

router.get('/test', (req, res) => {
  res.json({ msg: 'notes works' })
})

// @route GET api/notes
// @desc  Create note
// @access Private
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Note.find({ user: req.user.id }).then(notes => res.json(notes))
  }
)

// @route POST api/notes
// @desc  Create note
// @access Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const newNote = new Note({
      user: req.user.id,
      title: req.body.title,
      content: req.body.content
    })

    newNote.save().then(note => res.json(note))
  }
)

module.exports = router
