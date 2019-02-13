import React, { Component } from 'react'
import styled from 'styled-components'

import AddNote from '../components/AddNote'

const StyledToolbar = styled.div`
  display: flex;
  justify-content: space-between;
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
