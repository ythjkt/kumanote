import React, { Component } from 'react'
import { connect } from 'react-redux'

class NoteEditor extends Component {
  constructor() {
    super()

    this.state = {
      id: null,
      title: '',
      content: ''
    }

    this.onChange = this.onChange.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    const { notes, selectedNoteId } = nextProps.note

    if (selectedNoteId) {
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
  render() {
    let noteContent
    if (this.state.id) {
      noteContent = (
        <div>
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

export default connect(mapStateToProps)(NoteEditor)
