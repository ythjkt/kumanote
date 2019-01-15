import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = ({ user }) => (
  <div>
    <Link to="/">Kumanote</Link>
    <span>USER: {user.isAuthenticated ? user.user.name : 'Guest'}</span>
    <Link to="/register">Register</Link>
    <Link to="/login">Login</Link>
  </div>
)

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(Header)
