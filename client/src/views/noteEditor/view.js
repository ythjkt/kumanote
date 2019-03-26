import React from 'react'
import styled from 'styled-components'

import theme from '../../const/theme'

const StyledToolbar = styled.div`
  position: fixed;
  padding: 10px;
  border: 1px solid ${theme.border.default};
  border-radius: 4px;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, -100%);
`

export const Toolbar = () => <StyledToolbar>Tools</StyledToolbar>
