const router = require('express').Router()
const Note = require('../models/Note')
const User = require('../models/User')
const passport = require('passport')
const toClient = require('../utils/toClient.mongoose')

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
    Note.find({ user: req.user.id }).then(notes => {
      return res.json(toClient(notes))
    })
  }
)

// @route POST api/notes
// @desc  Create note
// @access Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    console.log(req.body.id)

    // If id is passed, update the document
    if (req.body.id) {
      Note.findByIdAndUpdate(
        req.body.id,
        {
          user: req.user.id,
          title: req.body.title,
          content: req.body.content
        },
        {
          // return the updated document instaed of original
          new: true
        }
      ).then(note => {
        console.log(note)
        return res.json(toClient(note))
      })
    } else {
      // If id is not present, create a new document
      const newNote = new Note({
        user: req.user.id,
        title: req.body.title,
        content: req.body.content
      })

      newNote.save().then(note => res.json(toClient(note)))
    }
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
