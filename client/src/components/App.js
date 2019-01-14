import React from 'react'
import Header from '../containers/Header'
import NoteList from '../containers/NoteList'
import AddNote from '../containers/AddNote'
import EditNote from '../containers/EditNote'
import Register from '../components/Register'
import Login from '../components/Login'

const App = () => (
  <div>
    <Header />
    <Register />
    <Login />
    <AddNote>Create Note</AddNote>
    <NoteList />
    <EditNote />
  </div>
)

export default App
