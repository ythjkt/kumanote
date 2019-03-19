import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Note from '../../components/Note'
import { getNotes, selectNote } from '../../actions/noteActions'
import { withRouter } from 'react-router-dom'

import styled from 'styled-components'

const StyledNoteList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 40px;
  grid-column-gap: 40px;
`

class NoteList extends Component {
  componentDidMount() {
    this.props.getNotes()
  }

  onSelectNote = id => {
    this.props.history.push(`/app/${id}`)
  }

  render() {
    let { notes } = this.props.note
    if (notes) {
      notes = Object.values(notes)
        .sort((a, b) => b.updated - a.updated) // Order by newest
        .map(note => {
          let updated = new Date(note.updated).toLocaleString()
          return (
            <Note
              key={note.id}
              title={note.title}
              excerpt={note.excerpt}
              updated={updated}
              onClick={() => this.onSelectNote(note.id)}
            />
          )
        })
    }
    return <StyledNoteList>{notes}</StyledNoteList>
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
