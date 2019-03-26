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
import 'draft-js/dist/Draft.css'
import debounced from '../../utils/debounced'
import { Toolbar, Frame, Title, FlexCol, ViewGrid, Button } from './style'

class NoteEditor extends Component {
  state = {
    id: null,
    title: '',
    initialLoad: true,
    editorState: EditorState.createEmpty()
  }

  componentWillMount() {
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

  debouncedSave = debounced(2000, () => {
    const { id, title, editorState } = this.state

    let contentState = editorState.getCurrentContent()
    let excerpt = contentState.getPlainText().substring(0, 100)

    let editorContent = JSON.stringify(convertToRaw(contentState))
    this.props.editNote(id, title, excerpt, editorContent)
  })

  // command e.g. bold, underline
  handleKeyCommand = command => {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command)

    if (newState) {
      this.onEditorChange(newState)
      return 'handled'
    } else {
      return 'not-handled'
    }
  }

  onTitleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
    this.debouncedSave()
  }

  onItalicClick = () => {
    this.onEditorChange(
      RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC')
    )
  }

  onUnderlineClick = () => {
    this.onEditorChange(
      RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE')
    )
  }

  onBoldClick = () => {
    this.onEditorChange(
      RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD')
    )
  }

  render() {
    let noteContent
    if (this.state.id) {
      noteContent = (
        <ViewGrid>
          <FlexCol>
            <Title
              type="text"
              value={this.state.title}
              onChange={this.onTitleChange}
              name="title"
              placeholder="Title"
            />
            <Frame>
              <Editor
                editorState={this.state.editorState}
                onChange={this.onEditorChange}
                handleKeyCommand={this.handleKeyCommand}
                placeholder="Content"
              />
            </Frame>
            <Toolbar>
              <Button onClick={this.onUnderlineClick}>U</Button>
              <Button onClick={this.onBoldClick}>B</Button>
              <Button onClick={this.onItalicClick}>I</Button>
            </Toolbar>
          </FlexCol>
        </ViewGrid>
      )
    } else {
      noteContent = <div />
    }
    return noteContent
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
