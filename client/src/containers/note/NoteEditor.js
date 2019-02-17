// This should be nested so that editor itself doesn't need to
// check whether there is a note selected or not

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editNote, deleteNote, getNote } from '../../actions/noteActions'

import {
  Editor,
  EditorState,
  ContentState,
  RichUtils,
  convertToRaw,
  convertFromRaw
} from 'draft-js'
import styled from 'styled-components'
import { timingSafeEqual } from 'crypto'

const starter = {
  blocks: [
    {
      key: 'fpr3t',
      text: 'This is the latest version',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {}
    }
  ],
  entityMap: {}
}

const Frame = styled.div`
  border: 1px solid lightgray;
`

class NoteEditor extends Component {
  state = {
    id: null,
    title: '',
    editorState: EditorState.createWithContent(convertFromRaw(starter))
  }

  componentWillMount() {
    this.props.getNote(this.props.match.params.id)
  }

  componentWillReceiveProps(nextProps) {
    const { notes, selectedNoteId, loading } = nextProps.note
    if (selectedNoteId && !loading) {
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
        editorState: editorContent
      })
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
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
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
  }

  render() {
    let noteContent
    if (this.state.id) {
      noteContent = (
        <div>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              value={this.state.title}
              onChange={this.onChange}
              name="title"
            />
            <button type="submit">Submit</button>
          </form>
          <button onClick={this.onDeleteClick}>Delete</button>
        </div>
      )
    } else {
      noteContent = <div>Blank</div>
    }
    return (
      <div>
        {this.props.note.saving ? <span>Saving...</span> : ''}
        {noteContent}
        <Frame>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onEditorChange}
            handleKeyCommand={this.handleKeyCommand}
          />
        </Frame>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  note: state.note
})

export default connect(
  mapStateToProps,
  { editNote, deleteNote, getNote }
)(NoteEditor)
