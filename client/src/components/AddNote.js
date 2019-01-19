import React from 'react'
import { connect } from 'react-redux'
import { addNote } from '../actions/noteActions'

import Button from './Button'

const AddNote = ({ addNote }) => <Button onClick={addNote}>ADD NOTE!</Button>

export default connect(
  null,
  { addNote }
)(AddNote)
