import React from 'react'

import styled from 'styled-components'

const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  height: ${props => props.height || '32px'};

  & img {
    height: 100%;
  }
`

export const NoteIcon = props => (
  <StyledIcon {...props}>
    <img src="/img/icon.note.svg" />
  </StyledIcon>
)

export const BackIcon = props => (
  <StyledIcon {...props}>
    <img src="/img/icon.back.svg" />
  </StyledIcon>
)
