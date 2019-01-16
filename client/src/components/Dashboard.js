import React from 'react'
import NoteList from '../containers/NoteList'
import AddNote from '../containers/AddNote'
import EditNote from '../containers/EditNote'

const Dashboard = () => (
  <div>
    <AddNote>Create Note</AddNote>
    <NoteList />
    <EditNote />
  </div>
)

export default Dashboard
