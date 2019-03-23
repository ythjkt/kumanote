import React from 'react'

import styled from 'styled-components'

import { Link } from 'react-router-dom'

const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;

  & img {
    height: 20px;
  }
`

const Logo = ({ className }) => (
  <div className={className}>
    <StyledLogo to="/app">
      <img src="/img/logo.svg" alt="" />
    </StyledLogo>
  </div>
)

export default Logo
