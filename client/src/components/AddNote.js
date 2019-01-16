import React from 'react'
import { connect } from 'react-redux'
import { addNote } from '../actions/noteActions'

const AddNote = ({ addNote }) => <button onClick={addNote}>ADD NOTE</button>

export default connect(
  null,
  { addNote }
)(AddNote)
