import React from 'react'

import styled from 'styled-components'
import theme from '../../const/theme'

const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  height: ${props => props.height || '32px'};

  & img,
  & svg {
    height: 100%;
    fill: ${props => props.fill || theme.text.default};
  }
`

export const NoteIcon = props => (
  <StyledIcon {...props}>
    <img src="/img/icon.note.svg" alt="note icon" />
  </StyledIcon>
)

export const BackIcon = props => (
  <StyledIcon {...props}>
    <img src="/img/icon.back.svg" alt="back icon" />
  </StyledIcon>
)

export const MenuIcon = props => (
  <StyledIcon {...props}>
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
    >
      <title>Artboard 2</title>
      <circle cx="16" cy="16" r="1.56" />
      <circle cx="9.56" cy="16" r="1.56" />
      <circle cx="22.44" cy="16" r="1.56" />
    </svg>
  </StyledIcon>
)
