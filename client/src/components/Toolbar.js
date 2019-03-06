import React, { Component } from 'react'
import styled from 'styled-components'

import AddNote from '../containers/note/AddNote'

const StyledToolbar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
`

export default class Toolbar extends Component {
  render() {
    return (
      <StyledToolbar>
        <h2>All</h2>
        <AddNote />
      </StyledToolbar>
    )
  }
}
