import React from 'react'
import NoteList from '../containers/NoteList'
import AddNote from '../containers/AddNote'
import EditNote from '../containers/EditNote'
import Register from '../components/Register'

const App = () => (
  <div>
    <Register />
    <AddNote>Create Note</AddNote>
    <NoteList />
    <EditNote />
  </div>
)

export default App
