// This should be nested so that editor itself doesn't need to
// check whether there is a note selected or not

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editNote, deleteNote, getNote } from '../actions/noteActions'

class NoteEditor extends Component {
  constructor() {
    super()

    this.state = {
      id: null,
      title: '',
      content: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }

  componentWillMount() {
    this.props.getNote(this.props.match.params.id)
  }

  componentWillReceiveProps(nextProps) {
    const { notes, selectedNoteId, loading } = nextProps.note
    if (selectedNoteId && !loading) {
      this.setState({
        id: selectedNoteId,
        title: notes[selectedNoteId].title,
        content: notes[selectedNoteId].content
      })
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    const { id, title, content } = this.state

    this.props.editNote(id, title, content)
  }
  onDeleteClick(e) {
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
            <input
              type="text"
              onChange={this.onChange}
              name="content"
              value={this.state.content}
            />
            <button type="submit">Submit</button>
          </form>
          <button onClick={this.onDeleteClick}>Delete</button>
        </div>
      )
    } else {
      noteContent = <div>Blank</div>
    }
    return <div>{noteContent}</div>
  }
}

const mapStateToProps = state => ({
  note: state.note
})

export default connect(
  mapStateToProps,
  { editNote, deleteNote, getNote }
)(NoteEditor)
