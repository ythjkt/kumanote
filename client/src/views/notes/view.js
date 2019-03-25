import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getNotes, selectNote, addNote } from '../../actions/noteActions'
import { withRouter } from 'react-router-dom'

import styled from 'styled-components'
import theme from '../../const/theme'

// Components
import { NoteIcon } from '../../components/icon/'
import { Button } from '../../components/button/'

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`

const FlexRow = styled.div`
  display: flex;
  align-items: center;
`

const Title = styled.h1`
  font-size: 16px;
`

const Updated = styled.span`
  font-size: 16px;
  margin-right: 16px;
`

const Excerpt = styled.p`
  font-size: 16px;
  color: ${theme.text.placeholder};
`

const StyledNotePanel = styled.section`
  padding: 16px 0;
  border-bottom: 1px solid ${theme.border.default};
`

const Wrapper = styled.div`
  padding: 0 16px;
`

export const NotePanel = props => {
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
            <Excerpt>Content is here</Excerpt>
          </FlexRow>
        </FlexCol>
      </FlexRow>
    </StyledNotePanel>
  )
}

const StyledNoteList = styled.div``

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
            <NotePanel
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
