import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/userActions'
import { Link } from 'react-router-dom'

import Logo from './Logo'

import { wrapperWidth } from '../../const/sizes'

const StyledLink = styled(Link)`
  font-weight: 600;
  font-size: 16px;
  padding-left: 24px;
`

const StyledHeader = styled.div`
  height: 60px;
  padding: 10px 24px;
  background-color: white;
  display: flex;
  align-items: center;
`

const Wrapper = styled.div`
  width: ${wrapperWidth}px;
  display: flex;
  justify-content: flex-end;
  margin: auto;
  align-items: center;
`

const FlexBox = styled.div`
  display: flex;
  align-items: center;
`

class Header extends Component {
  onLogoutClick = e => {
    e.preventDefault()

    this.props.logoutUser()
  }

  render() {
    const { isAuthenticated, user } = this.props.user

    const authLinks = (
      <FlexBox>
        <StyledLink to="/" onClick={this.onLogoutClick}>
          Logout
        </StyledLink>
      </FlexBox>
    )

    const guestLinks = (
      <FlexBox>
        <StyledLink to="/register">Register</StyledLink>
        <StyledLink to="/login">Login</StyledLink>
      </FlexBox>
    )

    return (
      <StyledHeader>
        <Wrapper>
          <Logo />
          {isAuthenticated ? authLinks : guestLinks}
        </Wrapper>
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
