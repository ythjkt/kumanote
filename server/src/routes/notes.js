const router = require('express').Router()
const passport = require('passport')

// Models
const Note = require('../models/Note')
const User = require('../models/User')

// Converts '_id' to 'id'
const toClient = require('../utils/toClient.mongoose')

// Inport Validators
const validateNoteInput = require('../validators/validateNoteInput')

// @route   GET api/notes
// @desc    Get notes by user
// @access  Private
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Note.find({ user: req.user.id })
      .populate('user', 'name')
      .then(notes => res.json(toClient(notes)))
      .catch(err => res.status(404).json(err))
  }
)

// @route   GET api/notes/:id
// @desc    Get note by id
// @access  Private
router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const errors = {}
    Note.findById(req.params.id)
      .populate('user', ['name'])
      .then(note => {
        if (!note || note.user.id !== req.user.id) {
          errors.nonote = 'The note does not exist'
          return res.status(404).json(errors)
        }

        res.json(toClient(note))
      })
      .catch(err => {
        res.status(404).json({ nonote: 'The note does not exist' })
      })
  }
)

// @route   POST api/notes
// @desc    Create | Update note
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateNoteInput(req.body)

    if (!isValid) {
      return res.status(400).json(errors)
    }

    let noteFields = {
      user: req.user.id,
      title: req.body.title,
      excerpt: req.body.excerpt,
      content: req.body.content
    }

    Note.findById(req.body.id).then(note => {
      if (note) {
        // Update
        Note.findByIdAndUpdate(
          req.body.id,
          { $set: noteFields },
          {
            // return the updated document instaed of original
            new: true
          }
        )
          .populate('user', 'name')
          .then(note => {
            return res.json(toClient(note))
          })
      } else {
        // Create
        let newNote = new Note(noteFields)
        newNote.save().then(note => {
          Note.findById(note.id)
            .populate('user', ['name'])
            .then(note => res.json(toClient(note)))
        })
      }
    })
  }
)

// @route   DELETE api/notes/:id
// @desc    Delete note
// @access  Private
router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    User.findOne({ user: req.user.id }).then(user => {
      Note.findById(req.params.id)
        .then(note => {
          // Check if note belongs to user
          if (note.user.toString() !== req.user.id) {
            return res
              .status(401)
              .json({ notauthorized: 'User not authorised' })
          }

          // Delete
          note.remove().then(note => {
            return res.json({ success: true, id: note.id })
          })
        })
        .catch(err => res.status(404).json({ postnotfound: 'No post found' }))
    })
  }
)

module.exports = router
