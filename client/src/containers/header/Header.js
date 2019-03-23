import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/userActions'
import { Link } from 'react-router-dom'

import Logo from './Logo'
import Button from '../../components/atoms/Button'

import { wrapperWidth } from '../../const/sizes'

const StyledLink = styled(Link)`
  font-weight: 600;
  font-size: 16px;
  padding-right: 24px;
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: underline;
  }
`

const StyledHeader = styled.div`
  height: 60px;
  padding: 10px 24px;
  background-color: white;
  display: flex;
  align-items: center;
`

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  margin: auto;
  align-items: center;
`

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
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
        <StyledLink to="/login">Login</StyledLink>
        <Button as={Link} to="/register">
          Register
        </Button>
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
