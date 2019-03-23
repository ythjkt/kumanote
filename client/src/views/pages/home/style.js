import theme from '../../../const/theme'
import styled from 'styled-components'

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`

export const FlexRow = styled.div`
  display: flex;
  align-items: flex-start;
`

export const Section = styled.section`
  background-color: ${props => props.theme.bg.wash};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const ImageFrame = styled.div`
  overflow: hidden;
  width: ${props => (props.width ? props.width + 'px' : '100%')};
  border-radius: 4px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);

  img {
    width: 100%;
    display: block;
  }
`

export const SectionTitle = styled.h2`
  font-size: 32px;
  font-family: ${theme.font.secondary};
  margin-bottom: 1.25em;
  text-align: center;
`
