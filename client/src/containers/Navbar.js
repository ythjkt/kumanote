import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/userActions'

class Navbar extends Component {
  onlogoutClick(e) {
    e.preventDefault()
    this.props.logoutUser()
    // TODO: clear notes too
  }

  render() {
    const { isAuthenticated, user } = this.props.user

    const guestLinks = (
      <span>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </span>
    )
    const userLinks = (
      <span>
        <button onClick={e => this.onlogoutClick(e)}>Logout</button>
      </span>
    )
    return (
      <div>
        <Link to="/">Kumanote</Link>
        <span>USER: {isAuthenticated ? user.name : 'Guest'}</span>
        {isAuthenticated ? userLinks : guestLinks}
      </div>
    )
  }
}

Navbar.propTypes = {
  user: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar)
