import styled from 'styled-components'
import theme from '../../const/theme'

export const SectionTitle = styled.h1`
  font-family: ${theme.font.secondary};
  font-size: 24px;
  padding-bottom: 1em;
`

export const SectionSubtitle = styled.h2`
  font-size: 16px;
  padding-bottom: 1em;
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

  @media (max-width: 1000px) {
    display: none;
  }
`

export const StyledNotePanel = styled.article`
  padding: 16px 0;
  border-bottom: 1px solid ${theme.border.default};
  cursor: pointer;
`

export const Wrapper = styled.div`
  padding: 0 16px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto;
  grid-gap: 20px;
  grid-template-areas:
    'title sidebar'
    'notes sidebar';
  padding: 120px 0;
  margin: 0 auto;
  max-width: 1000px;

  @media (max-width: 1000px) {
    grid-template-areas:
      'title sidebar'
      'notes notes';
    padding: 120px 20px;
  }
`

export const TitleArea = styled.div`
  grid-area: title;
`

export const NoteArea = styled.div`
  grid-area: notes;
`

export const Sidebar = styled.div`
  grid-area: sidebar;
`
