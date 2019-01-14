import { connect } from 'react-redux'
import { addNote } from '../actions'
import Button from '../components/Button'

export default connect(
  null,
  { onClick: addNote }
)(Button)
