import React from 'react'
import NoteList from '../containers/NoteList'
import AddNote from '../containers/AddNote'
import EditNote from '../containers/EditNote'
import Register from '../components/Register'
import Login from '../components/Login'

const App = () => (
  <div>
    <Register />
    <Login />
    <AddNote>Create Note</AddNote>
    <NoteList />
    <EditNote />
  </div>
)

export default App
