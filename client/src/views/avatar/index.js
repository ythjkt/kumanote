import React, { Component } from 'react'
import styled from 'styled-components'
import { logoutUser } from '../../actions/userActions'
import { connect } from 'react-redux'
import theme from '../../const/theme'

import { Link } from 'react-router-dom'

import DropdownMenu from '../../components/dropdownMenu/'

const Nav = styled.nav`
  width: 200px;
  background-color: white;
  position: absolute;
  border-radius: 4px;
  right: 0;
  top: 60px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
`

const StyledUserAvatar = styled.button`
  width: 32px;
  height: 32px;
  display: block;
  background-color: ${theme.bg.dark};
  border-radius: 50%;
  color: white;
  text-align: center;
  font-size: 16px;
  line-height: 2em;
  font-family: ${theme.font.secondary};
  cursor: pointer;
`

const MenuItem = styled.span`
  padding: 16px;
  border-bottom: 1px solid ${theme.border.default};
  cursor: pointer;

  &:hover {
    background-color: ${theme.bg.wash};
  }
`

export default class Avatar extends Component {
  render() {
    return (
      <DropdownMenu Button={ConnectedUserAvatar} Menu={ConnectedUserMenu} />
    )
  }
}

class UserAvatar extends Component {
  render() {
    return (
      <StyledUserAvatar>
        {this.props.user.user.name.substring(0, 1).toUpperCase()}
      </StyledUserAvatar>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const ConnectedUserAvatar = connect(mapStateToProps)(UserAvatar)

class UserMenu extends Component {
  onLogoutUser = e => {
    e.preventDefault()
    e.stopPropagation()

    this.props.logoutUser()
  }

  render() {
    return (
      <Nav>
        <MenuItem>{this.props.user.user.name}</MenuItem>
        <MenuItem as={Link} to="/app/settings/">
          Settings
        </MenuItem>
        <MenuItem onClick={this.onLogoutUser}>Logout</MenuItem>
      </Nav>
    )
  }
}

const ConnectedUserMenu = connect(
  mapStateToProps,
  { logoutUser }
)(UserMenu)
