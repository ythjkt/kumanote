import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
  font-weight: 600;
  font-size: 16px;
  padding-left: 24px;
`

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

const Header = () => (
  <StyledHeader>
    <StyledLink to="/register">Register</StyledLink>
    <StyledLink to="/login">Login</StyledLink>
  </StyledHeader>
)

export default Header
