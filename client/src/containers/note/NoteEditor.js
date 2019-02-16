// This should be nested so that editor itself doesn't need to
// check whether there is a note selected or not

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editNote, deleteNote, getNote } from '../../actions/noteActions'
import PageContainer from './rich/PageContainer'
import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  convertFromRaw
} from 'draft-js'
import styled from 'styled-components'

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
      console.log('Compoenent recieves props')
      console.log(content)
      if (content === '') {
        editorContent = EditorState.createEmpty()
      } else {
        console.log('So editor is not empty')
        editorContent = EditorState.createWithContent(
          convertFromRaw(JSON.parse(content))
        )
      }
      console.log(editorContent.getCurrentContent().getPlainText())
      this.setState({
        id: selectedNoteId,
        title,
        editorState: editorContent
      })
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

    // note['content'] = JSON.stringify(note.content)
    // TODO call action creator
    let editorContent = JSON.stringify(convertToRaw(contentState))
    console.log(editorContent)
    this.props.editNote(id, title, editorContent)
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
        {noteContent}
        <Frame>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onEditorChange}
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
