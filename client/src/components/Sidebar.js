import React from 'react'
import NoteList from '../components/NoteList'
import AddNote from '../components/AddNote'

const Sidebar = () => {
  return (
    <div>
      Sidebar
      <AddNote />
      <NoteList />
    </div>
  )
}

export default Sidebar
