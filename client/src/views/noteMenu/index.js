/* This component needs cleaning up 
- separate presentational and logical
- DRY with avatar component
*/

import React, { Component } from 'react'
import styled from 'styled-components'
import { logoutUser } from '../../actions/userActions'
import { deleteNote } from '../../actions/noteActions'
import { connect } from 'react-redux'
import theme from '../../const/theme'
import { withRouter } from 'react-router-dom'

import { MenuIcon } from '../../components/icon/'

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

const Button = styled.span`
  cursor: pointer;
`

class NoteMenu extends Component {
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

  onDeleteClick = () => {
    this.props.deleteNote(this.props.note.selectedNoteId)
    this.props.history.push('/app')
  }

  render() {
    return (
      <ToggleNav>
        <Button>
          <MenuIcon
            onClick={this.onClick}
            height="30px"
            fill={theme.text.placeholder}
          />
        </Button>

        {this.state.navOpen ? (
          <Nav>
            <MenuItem onClick={this.onDeleteClick}>Delete Note</MenuItem>
          </Nav>
        ) : null}
      </ToggleNav>
    )
  }
}

const mapStateToProps = state => ({
  note: state.note
})

export default withRouter(
  connect(
    mapStateToProps,
    { logoutUser, deleteNote }
  )(NoteMenu)
)
