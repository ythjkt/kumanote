import React from 'react'
import styled from 'styled-components'

import Header from './Header/Header'

import screenshot from './screenshot.png'

const Title = styled.h1`
  font-size: 60px;
  text-align: center;
  color: #111;
  font-family: minion-3, serif;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(56, 80, 162, 0.1);
`

const Screenshot = styled.img`
  width: 800px;
  border-radius: 10px;
`

const Landing = () => (
  <div>
    <Header />
    <Wrapper>
      <Title>Organise your notes with Kumanote</Title>
      <p>
        Research shows that cluttered note and information is the number one
        cause of cancer. My decluttering your notes, not only can you reduce the
        chance of cancer but also be happier with life.
      </p>
      <Screenshot src={screenshot} alt="screenshot" />
    </Wrapper>
  </div>
)

export default Landing
