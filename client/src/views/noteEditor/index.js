// This should be nested so that editor itself doesn't need to
// check whether there is a note selected or not

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editNote, deleteNote, getNote } from '../../actions/noteActions'
import { withRouter } from 'react-router-dom'

import {
  Editor,
  EditorState,
  ContentState,
  RichUtils,
  convertToRaw,
  convertFromRaw
} from 'draft-js'
import styled from 'styled-components'
import theme from '../../const/theme'
import debounced from '../../utils/debounced'

import { Toolbar } from './view'

const Frame = styled.div`
  border: none;
`

const Title = styled.input.attrs({
  autoComplete: 'off'
})`
  width: ${props => (props.full ? '100%' : null)};
  display: block;
  font-size: 32px;
  margin-bottom: 1em;
  height: 40px;
  border: none;
  box-sizing: border-box;
  auto :focus {
    outline: none;
  }
`

const Wrapper = styled.div`
  padding-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-family: ${theme.font.system};
`

class NoteEditor extends Component {
  state = {
    id: null,
    title: '',
    initialLoad: true,
    editorState: EditorState.createEmpty()
  }

  debouncedSave = debounced(2000, () => {
    console.log('Auto Saving now!')
    const { id, title, editorState } = this.state

    let contentState = editorState.getCurrentContent()
    // let note = { content: convertToRaw(contentState) }
    // TODO get plain text and save as preview
    // console.log(contentState.getPlainText())
    let excerpt = contentState.getPlainText().substring(0, 100)

    // note['content'] = JSON.stringify(note.content)
    // TODO call action creator
    let editorContent = JSON.stringify(convertToRaw(contentState))
    this.props.editNote(id, title, excerpt, editorContent)
  })

  componentWillMount() {
    console.log('will mount')
    this.props.getNote(this.props.match.params.id)
  }

  componentWillReceiveProps(nextProps) {
    const { notes, selectedNoteId, loading, saving } = nextProps.note
    // Only construct editorState from json
    // on receiving state for the first time.
    if (this.state.initialLoad) {
      if (selectedNoteId && !loading && !saving) {
        const { content, title } = notes[selectedNoteId]
        let editorContent
        if (content === '') {
          editorContent = EditorState.createEmpty()
        } else {
          try {
            editorContent = EditorState.createWithContent(
              convertFromRaw(JSON.parse(content))
            )
          } catch (e) {
            // If error with convertFromRaw,
            // Try salvaging by simply creating a new ContentState
            // assuming content as string
            let contentState = ContentState.createFromText(content)
            editorContent = EditorState.createWithContent(contentState)
          }
        }
        this.setState({
          id: selectedNoteId,
          title,
          editorState: editorContent,
          initialLoad: false
        })
      }
    }
  }

  handleKeyCommand = command => {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command)

    if (newState) {
      this.onEditorChange(newState)
      return 'handled'
    } else {
      return 'not-handled'
    }
  }

  onEditorChange = editorState => {
    this.setState({
      editorState
    })
    // if content has changed
    if (
      editorState.getCurrentContent() !==
      this.state.editorState.getCurrentContent()
    ) {
      this.debouncedSave()
    }
  }

  onTitleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
    this.debouncedSave()
  }

  onSubmit = e => {
    e.preventDefault()
    const { id, title, content } = this.state

    let contentState = this.state.editorState.getCurrentContent()
    // let note = { content: convertToRaw(contentState) }
    // TODO get plain text and save as preview
    // console.log(contentState.getPlainText())
    let excerpt = contentState.getPlainText().substring(0, 100)

    // note['content'] = JSON.stringify(note.content)
    // TODO call action creator
    let editorContent = JSON.stringify(convertToRaw(contentState))
    console.log(editorContent)
    this.props.editNote(id, title, excerpt, editorContent)
  }
  onDeleteClick = e => {
    this.props.deleteNote(this.state.id)
    this.props.history.push('/app')
  }

  render() {
    let noteContent
    if (this.state.id) {
      noteContent = (
        <div>
          <div>
            <Title
              type="text"
              value={this.state.title}
              onChange={this.onTitleChange}
              name="title"
              placeholder="Title"
            />
          </div>
          <Frame>
            <Editor
              editorState={this.state.editorState}
              onChange={this.onEditorChange}
              handleKeyCommand={this.handleKeyCommand}
            />
          </Frame>
          <Toolbar />
          <button onClick={this.onDeleteClick}>Delete</button>
        </div>
      )
    } else {
      noteContent = <div>Blank</div>
    }
    return (
      <Wrapper>
        {this.props.note.saving ? <span>Saving...</span> : ''}
        {noteContent}
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({
  note: state.note
})

export default withRouter(
  connect(
    mapStateToProps,
    { editNote, deleteNote, getNote }
  )(NoteEditor)
)
