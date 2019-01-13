import React from 'react'
import NoteList from '../containers/NoteList'
import AddNote from '../containers/AddNote'
import EditNote from '../containers/EditNote'

const App = () => (
  <div>
    <AddNote>Create Note</AddNote>
    <NoteList />
    <EditNote />
  </div>
)

export default App
