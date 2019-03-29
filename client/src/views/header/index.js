import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

import Logo from '../../components/logo/'
import { Button } from '../../components/button/'
import Avatar from '../../views/avatar/'

const StyledHeader = styled.div`
  height: 60px;
  padding: 10px 24px;
  background-color: white;
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  border-bottom: ${props =>
    props.shadow ? '1px solid ' + props.theme.border.default : 'none'};
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
  render() {
    const { isAuthenticated, user } = this.props.user

    const pathname = this.props.location && this.props.location.pathname
    let isHome = pathname == '/' || pathname == '/about'

    const authLinks = (
      <FlexBox>
        <Avatar />
      </FlexBox>
    )

    const guestLinks = (
      <FlexBox>
        <ThisButton as={Link} to="/login">
          Login
        </ThisButton>
        {/*passes true as string to avoid react-router raising error. (styled-component issuse #1198) */}
        <ThisButton as={Link} primary="true" to="/register">
          Create an account
        </ThisButton>
      </FlexBox>
    )

    return (
      <StyledHeader shadow={!isHome}>
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

export default withRouter(connect(mapStateToProps)(Header))
