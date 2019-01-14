function toClient(docs) {
  return docs.map ? docs.map(doc => normaliseId(doc)) : normaliseId(docs)
}

function normaliseId(doc) {
  doc = doc.toObject ? doc.toObject() : doc
  doc.id = doc._id
  delete doc._id
  return doc
}

module.exports = toClient
