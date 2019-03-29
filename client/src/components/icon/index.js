import React from 'react'

import styled from 'styled-components'

const StyledNoteIcon = styled.div`
  display: flex;
  align-items: center;

  & img {
    height: 32px;
  }
`

export const NoteIcon = () => (
  <StyledNoteIcon>
    <img src="/img/icon.note.svg" />
  </StyledNoteIcon>
)
