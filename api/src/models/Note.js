const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NoteSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  title: {
    type: String
  },
  excerpt: {
    type: String
  },
  content: {
    type: String
  },
  created: {
    // Unix Timestamp
    type: Number
  },
  updated: {
    // Unix Timestamp
    type: Number
  }
})

module.exports = Note = mongoose.model('note', NoteSchema)
