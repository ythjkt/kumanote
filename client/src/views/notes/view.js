import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getNotes, selectNote } from '../../actions/noteActions'
import { withRouter } from 'react-router-dom'

import styled from 'styled-components'
import theme from '../../const/theme'

// Components
import { NoteIcon } from '../../components/icon/'

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

const Date = styled.span`
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

export const NotePanel = () => {
  return (
    <StyledNotePanel>
      <FlexRow>
        <Wrapper>
          <NoteIcon />
        </Wrapper>

        <FlexCol>
          <Title>Title is going to be here</Title>
          <FlexRow>
            <Date>2017.12.12</Date>
            <Excerpt>Content is here</Excerpt>
          </FlexRow>
        </FlexCol>
      </FlexRow>
    </StyledNotePanel>
  )
}

const Content = styled.p`
  font-size: 16px;
`
const NoteBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 320px;
  height: 240px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  box-sizing: border-box;
  cursor: pointer;
`

const Tag = styled.span`
  font-size: 12px;
  color: #3850a2;
`

class Note extends Component {
  render() {
    return (
      <NoteBox onClick={this.props.onClick}>
        <Tag>note</Tag>
        <Title>{this.props.title}</Title>
        <Content>{this.props.excerpt}</Content>
        <Date>{this.props.updated}</Date>
      </NoteBox>
    )
  }
}

Note.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

export default Note

const StyledNoteList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 40px;
  grid-column-gap: 40px;
`

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
