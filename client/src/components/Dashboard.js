import React from 'react'

import Toolbar from './Toolbar'
import NoteList from '../containers/note/NoteList'

import styled from 'styled-components'

import { contentWidth } from '../const/sizes'

const Wrapper = styled.div`
  width: ${contentWidth}px;
  margin: auto;
`

const Dashboard = () => (
  <Wrapper>
    <Toolbar />
    <NoteList />
  </Wrapper>
)

export default Dashboard
