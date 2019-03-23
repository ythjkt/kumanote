import React from 'react'

import styled from 'styled-components'

import { Link } from 'react-router-dom'

const StyledLogo = styled(Link)`
  margin-right: auto;
  display: flex;
  align-items: center;

  & img {
    height: 20px;
  }
`

export default function Logo() {
  return (
    <StyledLogo to="/app">
      <img src="/img/logo.svg" alt="" />
    </StyledLogo>
  )
}
