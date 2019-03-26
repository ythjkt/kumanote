import styled from 'styled-components'
import theme from '../../const/theme'

export const Main = styled.main`
  padding-top: 100px;
  display: grid;
  grid-template-columns: 1fr 1200px 1fr;
`

export const MainContainer = styled.div`
  grid-column: 2/3;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 200px;
  gap: 16px;
`

export const SectionTitle = styled.h1`
  font-family: ${theme.font.secondary};
  font-size: 24px;
  padding-bottom: 1em;
`

export const SectionSubtitle = styled.h2`
  font-size: 16px;
  padding-bottom: 1em;
  border-bottom: 1px solid ${theme.border.default};
`

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 16px;
`

export const Updated = styled.span`
  font-size: 16px;
  margin-right: 16px;
`

export const Excerpt = styled.p`
  font-size: 16px;
  color: ${theme.text.placeholder};
`

export const StyledNotePanel = styled.section`
  padding: 16px 0;
  border-bottom: 1px solid ${theme.border.default};
`

export const Wrapper = styled.div`
  padding: 0 16px;
`

export const StyledNoteList = styled.div``
