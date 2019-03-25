import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addNote } from '../../actions/noteActions'

import { Button } from '../../components/button/'

const AddNote = ({ addNote, history }) => (
  <Button onClick={() => addNote(history)}>New Note</Button>
)

export default withRouter(
  connect(
    null,
    { addNote }
  )(AddNote)
)
