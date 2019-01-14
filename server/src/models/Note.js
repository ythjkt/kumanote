const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NoteSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Note = mongoose.model('note', NoteSchema)
