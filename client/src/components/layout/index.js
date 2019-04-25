import styled from 'styled-components'

export const Main = styled.main`
  padding-top: 100px;
  display: grid;
  grid-template-columns: 1fr 1200px 1fr;
`

/*
|**| MainContainer 120px |**| 
*/
export const MainContainer = styled.div`
  grid-column: 2/3;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 200px;
  gap: 16px;
`
