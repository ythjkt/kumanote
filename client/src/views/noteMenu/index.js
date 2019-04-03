import React, { Component } from 'react'
import styled from 'styled-components'
import { logoutUser } from '../../actions/userActions'
import { deleteNote } from '../../actions/noteActions'
import { connect } from 'react-redux'
import theme from '../../const/theme'
import { withRouter } from 'react-router-dom'

import { MenuIcon } from '../../components/icon/'
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

export default class NoteMenu extends Component {
  render() {
    return <DropdownMenu Button={ThisButton} Menu={ConnectedNoteMenuItem} />
  }
}

class NoteMenuItem extends Component {
  onDeleteClick = () => {
    this.props.deleteNote(this.props.note.selectedNoteId)
    this.props.history.push('/app')
  }

  render() {
    return (
      <Nav>
        <MenuItem onClick={this.onDeleteClick}>Delete Note</MenuItem>
      </Nav>
    )
  }
}

const ThisButton = () => (
  <Button>
    <MenuIcon height="30px" fill={theme.text.placeholder} />
  </Button>
)

const mapStateToProps = state => ({
  note: state.note
})

const ConnectedNoteMenuItem = withRouter(
  connect(
    mapStateToProps,
    { logoutUser, deleteNote }
  )(NoteMenuItem)
)
