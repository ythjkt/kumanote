import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/userActions'
import { Link } from 'react-router-dom'

import Logo from './Logo'
import Button from '../../components/atoms/Button'

import { wrapperWidth } from '../../const/sizes'

const StyledHeader = styled.div`
  height: 60px;
  padding: 10px 24px;
  background-color: white;
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
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

const ThisButton = styled(Button)`
  margin-right: 24px;
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
        <Button as={Link} to="/login">
          Login
        </Button>
      </FlexBox>
    )

    const guestLinks = (
      <FlexBox>
        <ThisButton as={Link} to="/login">
          Login
        </ThisButton>
        <ThisButton as={Link} primary to="/register">
          Create an account
        </ThisButton>
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
