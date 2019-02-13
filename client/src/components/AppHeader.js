import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
  height: 60px;
  padding: 10px 24px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  box-sizing: border-box;
`

const AppHeader = () => (
  <StyledHeader>
    <button>Logout</button>
  </StyledHeader>
)

export default AppHeader
