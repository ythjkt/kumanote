/* This component needs cleaning up 
- separate presentational and logical
- connect setting page
- adjust styling
*/

import React, { Component } from 'react'
import styled from 'styled-components'
import { logoutUser } from '../../actions/userActions'
import { connect } from 'react-redux'
import theme from '../../const/theme'

import { Link } from 'react-router-dom'

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

const UserAvatar = styled.button`
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

const ToggleNav = styled.div`
  position: relative;
`

const MenuItem = styled.span`
  padding: 16px;
  border-bottom: 1px solid ${theme.border.default};
  cursor: pointer;

  &:hover {
    background-color: ${theme.bg.wash};
  }
`

class Avatar extends Component {
  state = {
    navOpen: false
  }

  onClick = e => {
    if (!this.state.navOpen) {
      this.setState({ navOpen: true }, () => {
        document.addEventListener('click', this.handleClickOutside)
      })
    } else {
      this.setState({ navOpen: false }, () => {
        document.removeEventListener('click', this.handleClickOutside)
      })
    }
  }

  handleClickOutside = e => {
    e.preventDefault()

    this.setState({ navOpen: false }, () => {
      document.removeEventListener('click', this.handleClickOutside)
    })
  }

  onLogoutUser = e => {
    e.preventDefault()
    e.stopPropagation()

    document.removeEventListener('click', this.onClick)

    this.props.logoutUser()
  }

  render() {
    return (
      <ToggleNav>
        <UserAvatar onClick={this.onClick}>
          {this.props.user.user.name.substring(0, 1).toUpperCase()}
        </UserAvatar>
        {this.state.navOpen ? (
          <Nav>
            <MenuItem>{this.props.user.user.name}</MenuItem>
            <MenuItem as={Link} to="/app/settings/">
              Settings
            </MenuItem>
            <MenuItem onClick={this.onLogoutUser}>Logout</MenuItem>
          </Nav>
        ) : null}
      </ToggleNav>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(
  mapStateToProps,
  { logoutUser }
)(Avatar)
