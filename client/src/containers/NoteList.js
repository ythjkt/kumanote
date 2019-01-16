import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { selectNote } from '../actions'
import Note from '../components/Note'
import { getNotes } from '../actions/'

class NoteList extends Component {
  componentDidMount() {
    this.props.getNotes()
  }

  render() {
    const { notes } = this.props.note
    return (
      <div>
        NOTELIST
        <ul>
          {notes &&
            Object.values(notes).map(note => (
              <Note
                key={note.id}
                title={note.title}
                onClick={() => this.props.selectNote(note.id)}
              />
            ))}
        </ul>
      </div>
    )
  }
}

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
  note: state.note
})

export default connect(
  mapStateToProps,
  {
    selectNote,
    getNotes
  }
)(NoteList)
