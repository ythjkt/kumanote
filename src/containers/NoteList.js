import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { selectNote } from '../actions'
import Note from '../components/Note'

const NoteList = ({ notes, selectNote }) => (
  <ul>
    {Object.values(notes).map(note => (
      <Note
        key={note.id}
        title={note.title}
        onClick={() => selectNote(note.id)}
      />
    ))}
  </ul>
)

NoteList.propTypes = {
  notes: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  selectNote: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  notes: state.notes
})

const mapDispatchToProps = dispatch => ({
  selectNote: id => dispatch(selectNote(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteList)
