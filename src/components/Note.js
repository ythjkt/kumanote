import React from 'react'
import PropTypes from 'prop-types'

const Note = ({ onClick, title }) => <li onClick={onClick}>{title}</li>

Note.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

export default Note
