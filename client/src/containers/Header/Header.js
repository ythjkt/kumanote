import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/userActions'
import { Link } from 'react-router-dom'

import Logo from './Logo'

const StyledLink = styled(Link)`
  font-weight: 600;
  font-size: 16px;
  padding-left: 24px;
`

const StyledHeader = styled.div`
  height: 60px;
  padding: 10px 24px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  box-sizing: border-box;
  background-color: white;
`

class Header extends Component {
  onLogoutClick = e => {
    e.preventDefault()

    this.props.logoutUser()
  }

  render() {
    const { isAuthenticated, user } = this.props.user

    const authLinks = (
      <div>
        <StyledLink to="/" onClick={this.onLogoutClick}>
          Logout
        </StyledLink>
      </div>
    )

    const guestLinks = (
      <div>
        <StyledLink to="/register">Register</StyledLink>
        <StyledLink to="/login">Login</StyledLink>
      </div>
    )

    return (
      <StyledHeader>
        <Logo />
        {isAuthenticated ? authLinks : guestLinks}
      </StyledHeader>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(
  mapStateToProps,
  { logoutUser }
)(Header)
