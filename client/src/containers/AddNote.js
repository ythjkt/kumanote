import { connect } from 'react-redux'
import { addNote } from '../actions'
import Button from '../components/Button'

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(addNote())
})

export default connect(
  null,
  mapDispatchToProps
)(Button)
