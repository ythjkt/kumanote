import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editNote } from '../actions'
import { deleteNote } from '../actions'

class EditNote extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: undefined,
      title: '',
      content: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    const { note } = nextProps
    if (note) {
      this.setState({
        id: note.id,
        title: note.title,
        content: note.content
      })
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const { id, title, content } = this.state
    console.log(id)
    this.props.editNote(id, title, content)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            onChange={this.onChange}
            name="title"
            value={this.state.title}
          />
          <input
            type="text"
            onChange={this.onChange}
            name="content"
            value={this.state.content}
          />
          <button type="submit">Submit</button>
        </form>
        <button onClick={() => this.props.deleteNote(this.state.id)}>
          Delete
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  note: state.notes[state.note]
})

export default connect(
  mapStateToProps,
  { editNote, deleteNote }
)(EditNote)
