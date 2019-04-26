import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Logo from '../../components/logo/'
import { Button } from '../../components/button/'

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  grid-template-areas: 'logo . login signup';
  grid-column-gap: 24px;
  height: 60px;
  padding: 10px 24px;
  background-color: white;
  align-items: center;
  position: fixed;
  width: 100%;
  border-bottom: ${props =>
    props.shadow ? '1px solid ' + props.theme.border.default : 'none'};

  @media (max-width: 1000px) {
    grid-template-columns: auto 1fr auto;
    grid-template-areas: 'logo . menu';
  }
`

const LoginButton = styled(Button)`
  grid-area: login;

  @media (max-width: 1000px) {
    display: none;
  }
`

const SignupButton = styled(Button)`
  grid-area: signup;
  @media (max-width: 1000px) {
    display: none;
  }
`

const HambugerMenu = styled.div.attrs({
  className: props => (props.open ? 'is-open' : '')
})`
  display: none;

  & > span {
    width: 100%;
    height: 2px;
    margin: 0 0 2px;
    display: block;
    background: black;
  }

  & > span:last-child {
    margin: 0;
  }

  &.is-open > span {
    transform: translate3d(0, 4px, 0) rotate3d(0, 0, 1, 45deg);
  }

  &.is-open > span:nth-child(2) {
    opacity: 0;
  }

  &.is-open > span:last-child {
    transform: translate3d(0, -4px, 0) rotate3d(0, 0, 1, -45deg);
  }

  @media (max-width: 1000px) {
    grid-area: menu;
    display: block;
    width: 20px;
    height: 10px;
  }
`

const MobileMenu = styled.div`
  display: ${props => (props.open ? 'flex' : 'none')};
  height: calc(100vh - 60px);
  width: 100vw;
  background: white;
  position: absolute;
  top: 60px;
  left: 0;
`

class Header extends Component {
  state = {
    navOpen: false
  }

  toggleNavOpen = () => {
    this.setState({ navOpen: !this.state.navOpen })
  }

  render() {
    return (
      <StyledHeader>
        <Logo />
        <LoginButton as={Link} to="/login">
          Login
        </LoginButton>
        {/*passes true as string to avoid react-router raising error. (styled-component issuse #1198) */}
        <SignupButton as={Link} primary="true" to="/register">
          Create an account
        </SignupButton>
        <HambugerMenu onClick={this.toggleNavOpen} open={this.state.navOpen}>
          <span />
          <span />
          <span />
        </HambugerMenu>
        <MobileMenu open={this.state.navOpen} />
      </StyledHeader>
    )
  }
}

export default Header
