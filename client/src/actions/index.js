let nextNoteId = 0
export const addNote = () => ({
  type: 'ADD_NOTE',
  id: nextNoteId++
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
