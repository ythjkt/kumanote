import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

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
  top: 0;
  left: 0;
  z-index: 30;
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

const PaddingRight = styled.div`
  padding-right: 16px;
`

class Header extends Component {
  render() {
    let noteId = this.props.match.params.note_id

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
          <FlexRow>
            <PaddingRight>
              <NoteMenu />
            </PaddingRight>
            <Avatar />
          </FlexRow>
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
