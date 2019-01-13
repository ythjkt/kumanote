let nextNoteId = 0
export const addNote = (title, content) => ({
  type: 'ADD_NOTE',
  id: nextNoteId++,
  title,
  content
})

export const editNote = (id, title, content) => ({
  type: 'EDIT_NOTE',
  id,
  title,
  content
})

export const selectNote = id => ({
  type: 'SELECT_NOTE',
  id
})
