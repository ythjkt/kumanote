import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/userActions'

class Navbar extends Component {
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
        <a href="">Logout</a>
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

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(Navbar)
