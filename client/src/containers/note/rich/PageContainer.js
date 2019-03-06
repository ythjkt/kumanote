import React, { Component } from 'react'
import Editor from 'draft-js-plugins-editor'
import { EditorState, RichUtils } from 'draft-js'
import createHighlightPlugin from './plugins/highlightPlugin'
import addLinkPlugin from './plugins/addLinkPlugin'
import styled from 'styled-components'

const hightlightPlugin = createHighlightPlugin()

const Box = styled.div`
  background-color: #eee;
  padding: 20px;
`

class PageContainer extends Component {
  state = {
    editorState: EditorState.createEmpty(),
    readOnly: false
  }

  plugins = [hightlightPlugin, addLinkPlugin]

  handleKeyCommand = command => {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command)

    if (newState) {
      this.onChange(newState)
      return 'handled'
    } else {
      return 'not-handled'
    }
  }
  toggleReadOnly = () => {
    this.setState({
      readOnly: !this.state.readOnly
    })
  }

  onAddLink = () => {
    const editorState = this.state.editorState
    const selection = editorState.getSelection()
    const link = window.prompt('Paste the link -')
    if (!link) {
      this.onChange(RichUtils.toggleLink(editorState, selection, null))
      return 'handled'
    }
    const content = editorState.getCurrentContent()
    const contentWithEntity = content.createEntity('LINK', 'MUTABLE', {
      url: link
    })
    const newEditorState = EditorState.push(
      editorState,
      contentWithEntity,
      'create-entity'
    )
    const entityKey = contentWithEntity.getLastCreatedEntityKey()
    this.onChange(RichUtils.toggleLink(newEditorState, selection, entityKey))
    return 'handled'
  }

  onHighlightClick = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, 'HIGHLIGHT')
    )
  }

  onButtonClick = e => {
    e.preventDefault()
    switch (e.target.value) {
      case 'BOLD':
      case 'ITALIC':
      case 'UNDERLINE':
        console.log(e.target.value)
        this.onChange(
          RichUtils.toggleInlineStyle(this.state.editorState, e.target.value)
        )
    }
  }

  onChange = editorState => {
    this.setState({
      editorState
    })
  }

  render() {
    return (
      <Box>
        <button onClick={this.onButtonClick} value="BOLD">
          <em>B</em>
        </button>
        <button onClick={this.onButtonClick} value="ITALIC">
          <em>I</em>
        </button>
        <button onClick={this.onButtonClick} value="UNDERLINE">
          <em style={{ textDecoration: 'underline' }}>U</em>
        </button>
        <button onClick={this.onHighlightClick}>
          <em style={{ background: 'yellow' }}>H</em>
        </button>
        <button id="link_url" onClick={this.onAddLink} className="add-link">
          Link
        </button>
        <button onClick={this.toggleReadOnly}>Read</button>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          handleKeyCommand={this.handleKeyCommand}
          plugins={this.plugins}
          readOnly={this.state.readOnly}
        />
      </Box>
    )
  }
}

export default PageContainer
