import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getNotes, selectNote, addNote } from '../../actions/noteActions'
import { withRouter } from 'react-router-dom'

// Components
import { NoteIcon } from '../../components/icon/'
import { Button } from '../../components/button/'

// Styled components
import {
  FlexCol,
  FlexRow,
  Title,
  Updated,
  Excerpt,
  StyledNotePanel,
  Wrapper,
  StyledNoteList
} from './style'

const NoteListItem = props => {
  return (
    <StyledNotePanel onClick={props.onClick}>
      <FlexRow>
        <Wrapper>
          <NoteIcon />
        </Wrapper>

        <FlexCol>
          <Title>{props.title}</Title>
          <FlexRow>
            <Updated>{props.updated}</Updated>
            <Excerpt>{props.excerpt}</Excerpt>
          </FlexRow>
        </FlexCol>
      </FlexRow>
    </StyledNotePanel>
  )
}

class NoteListClass extends Component {
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
            <NoteListItem
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

NoteListClass.propTypes = {
  note: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  note: state.note
})

// Wrap with withRouter to pass props.history to NoteList
export const NoteList = withRouter(
  connect(
    mapStateToProps,
    {
      selectNote,
      getNotes
    }
  )(NoteListClass)
)

const AddNoteComponent = ({ addNote, history }) => (
  <Button onClick={() => addNote(history)}>New Note</Button>
)

export const AddNote = withRouter(
  connect(
    null,
    { addNote }
  )(AddNoteComponent)
)
