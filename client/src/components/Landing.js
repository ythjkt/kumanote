import React from 'react'
import styled from 'styled-components'

import Header from './Header'

const Title = styled.h1`
  font-size: 60px;
  text-align: center;
  color: #111;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Landing = () => (
  <div>
    <Header />
    <Wrapper>
      <Title>Just Note It</Title>
    </Wrapper>
  </div>
)

export default Landing
