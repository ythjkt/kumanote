import React, { Component } from 'react'
import styled from 'styled-components'
import { logoutUser } from '../../actions/userActions'
import { connect } from 'react-redux'

const Nav = styled.nav`
  padding: 10px;
  width: 200px;
  background-color: white;
  position: absolute;
  border-radius: 4px;
  right: 0;
  top: 42px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
`

const UserAvatar = styled.span`
  width: 32px;
  height: 32px;
  display: block;
  background-color: skyblue;
  border-radius: 50%;
`

const ToggleNav = styled.div`
  position: relative;
`

class Avatar extends Component {
  state = {
    navOpen: false
  }

  thisRef = React.createRef()

  onClick = e => {
    if (!this.state.navOpen) {
      this.setState({ navOpen: true }, () => {
        document.addEventListener('click', this.onClick)
      })
    } else {
      if (!this.thisRef.current.contains(e.target)) {
        this.setState({ navOpen: false }, () => {
          document.removeEventListener('click', this.onClick)
        })
      }
    }
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
        <UserAvatar onClick={this.onClick} />
        {this.state.navOpen ? (
          <Nav ref={this.thisRef}>
            {this.props.menus}
            <li onClick={this.onLogoutUser}>Logout</li>
            <li>Menu </li>
            <li>Menu </li>
            <li>Menu </li>
          </Nav>
        ) : null}
      </ToggleNav>
    )
  }
}

export default connect(
  null,
  { logoutUser }
)(Avatar)
