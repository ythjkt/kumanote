import React from 'react'

import styled from 'styled-components'
import theme from '../../const/theme'

import { NoteList, AddNote } from './view'

const Main = styled.main`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MainContainer = styled.div`
  width: 100%;
  max-width: 960px;
`

const SectionTitle = styled.h1`
  font-family: ${theme.font.secondary};
  font-size: 24px;
  padding-bottom: 1em;
`

const SectionSubtitle = styled.h2`
  font-size: 16px;
  padding-bottom: 1em;
  border-bottom: 1px solid ${theme.border.default};
`

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
        <AddNote />
        <NoteList />
      </FlexCol>
    </MainContainer>
  </Main>
)

export default Dashboard
