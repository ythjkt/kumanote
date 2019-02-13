import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Note from '../components/Note'
import { getNotes, selectNote } from '../actions/noteActions'
import { withRouter } from 'react-router-dom'

import styled from 'styled-components'

const StyledNoteList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

class NoteList extends Component {
  componentDidMount() {
    this.props.getNotes()
  }

  onSelectNote = id => {
    this.props.history.push(`/app/${id}`)
  }

  render() {
    const { notes } = this.props.note
    return (
      <div>
        NOTELIST
        <StyledNoteList>
          {notes &&
            Object.values(notes).map(note => (
              <Note
                key={note.id}
                title={note.title}
                content={note.content}
                onClick={() => this.onSelectNote(note.id)}
              />
            ))}
        </StyledNoteList>
      </div>
    )
  }
}

NoteList.propTypes = {
  note: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  note: state.note
})

// Wrap with withRouter to pass props.history to NoteList
export default withRouter(
  connect(
    mapStateToProps,
    {
      selectNote,
      getNotes
    }
  )(NoteList)
)
