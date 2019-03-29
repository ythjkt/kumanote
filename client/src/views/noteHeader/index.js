import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

import Logo from '../../components/logo/'
import { Button } from '../../components/button/'
import Avatar from '../../views/avatar/'
import NoteMenu from '../../views/noteMenu'

import { BackIcon } from '../../components/icon/'

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

const FlexRow = styled.div`
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

const ThisButton = styled(Button)`
  margin-right: 24px;
`

const PaddingRight = styled.div`
  padding-right: 16px;
`

class Header extends Component {
  render() {
    const { isAuthenticated, user } = this.props.user
    console.log(this.props)
    let noteId = this.props.match.params.note_id
    console.log(noteId)

    console.log(this.props.note.notes)
    console.log(
      this.props.note.notes[noteId] ? this.props.note.notes[noteId].title : null
    )

    const authLinks = (
      <FlexBox>
        <NoteMenu />
        <Avatar />
      </FlexBox>
    )

    return (
      <StyledHeader shadow={true}>
        <Wrapper>
          <FlexRow>
            <PaddingRight as={Link} to="/app">
              <BackIcon height="16px" />
            </PaddingRight>
            <PaddingRight>
              {this.props.note.notes[noteId] &&
                this.props.note.notes[noteId].title}
            </PaddingRight>
            <PaddingRight>
              {this.props.note.saving ? 'saving...' : null}
            </PaddingRight>
          </FlexRow>

          {authLinks}
        </Wrapper>
      </StyledHeader>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  note: state.note
})

export default withRouter(connect(mapStateToProps)(Header))
