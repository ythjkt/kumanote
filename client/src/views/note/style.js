import React from 'react'
import styled from 'styled-components'

import theme from '../../const/theme'

export const Toolbar = styled.div`
  position: fixed;
  padding: 4px 8px;
  border: 1px solid ${theme.border.default};
  border-radius: 4px;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, -100%);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
`

export const Frame = styled.div`
  border: none;
  width: 100%;
`

export const Title = styled.input.attrs({
  autoComplete: 'off'
})`
  width: 100%;
  display: block;
  font-size: 32px;
  margin-bottom: 1em;
  height: 40px;
  border: none;
  box-sizing: border-box;
  auto :focus {
    outline: none;
  }
`

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  grid-column: 2/3;
  font-family: ${theme.font.system};
`

export const ViewGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1000px 1fr;
`

export const Button = styled.button`
  font-size: 16px;
  font-family: ${theme.font.secondary};
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    color: ${theme.text.secondary};
  }
`
