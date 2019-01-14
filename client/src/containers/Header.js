import React from 'react'
import { connect } from 'react-redux'

const Header = ({ user }) => (
  <div>USER: {user.isAuthenticated ? user.name : 'Guest'}</div>
)

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(Header)
