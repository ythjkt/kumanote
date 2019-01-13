let nextNoteId = 0
export const addNote = (title, content) => ({
  type: 'ADD_NOTE',
  id: nextNoteId++,
  title,
  content
})

export const selectNote = id => ({
  type: 'SELECT_NOTE',
  id
})
