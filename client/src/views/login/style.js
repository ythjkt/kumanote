import styled from 'styled-components'
import theme from '../../const/theme'

export const CenterBlock = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

export const CenterBox = styled.div`
  width: 320px;
`

export const StyledForm = styled.form`
  margin-bottom: 20px;
`

export const Title = styled.h1`
  margin: 0 0 40px;
  font-size: 20px;
  font-family: ${theme.font.secondary};
`
