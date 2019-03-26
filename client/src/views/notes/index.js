import React from 'react'

import styled from 'styled-components'
import theme from '../../const/theme'

import { NoteList, AddNote } from './view'
import { Main, MainContainer, SectionTitle, SectionSubtitle } from './style'

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`

const Dashboard = () => (
  <Main>
    <MainContainer>
      <FlexCol>
        <SectionTitle>Home</SectionTitle>
        <SectionSubtitle>All</SectionSubtitle>
        <NoteList />
      </FlexCol>
      <FlexCol>
        <AddNote />
      </FlexCol>
    </MainContainer>
  </Main>
)

export default Dashboard
