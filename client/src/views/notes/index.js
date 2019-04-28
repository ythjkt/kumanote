import React from 'react'

import { NoteList, AddNote } from './view'
import {
  SectionTitle,
  SectionSubtitle,
  Grid,
  NoteArea,
  TitleArea,
  Sidebar
} from './style'

const Dashboard = () => (
  <Grid>
    <TitleArea>
      <SectionTitle>Home</SectionTitle>
      <SectionSubtitle>All</SectionSubtitle>
    </TitleArea>
    <Sidebar>
      <AddNote />
    </Sidebar>
    <NoteArea>
      <NoteList />
    </NoteArea>
  </Grid>
)

export default Dashboard
