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
// NoteSchema.method('toClient', function() {
//   var obj = this.toObject()
//   console.log(obj)
//   //Rename fields
//   obj.id = obj._id
//   delete obj._id

//   return obj
// })

let Note = mongoose.model('note', NoteSchema)

// Connect to MongoDB
const db = require('../../config/keys').mongoURI
mongoose
  .connect(db)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err))

let notes = Note.find()

notes.then(notes => {
  notes = toClient(notes)
  console.log(notes)
})

// let compare = notes instanceof mongoose.Query

// console.log(compare)

// let om = Object.getOwnPropertyNames(notes)

// let im = Object.getOwnPropertyNames(Object.getPrototypeOf(notes))

// console.log('om', om)
// console.log('im', im)

function toClient(docs) {
  return docs.map ? docs.map(doc => normaliseId(doc)) : normaliseId(docs)
}

function normaliseId(doc) {
  doc = doc.toObject()
  doc.id = doc._id
  delete doc._id
  return doc
}
