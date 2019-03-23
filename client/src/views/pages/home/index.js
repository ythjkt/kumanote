import React, { Component } from 'react'
import theme from '../../../const/theme'
import styled from 'styled-components'

import Button from '../../../components/atoms/Button'

const H2 = styled.h2`
  font-family: ${theme.font.secondary};
  font-size: 48px;
`

const H3 = styled.h3`
  font-family: ${theme.font.secondary};
  font-size: 32px;
`

const Copy = styled.p`
  font-weight: 400;
  font-size: 24px;
`

const Section = styled.div`
  background-color: #cbd8ef;
  padding-top: 82px;
  padding-bottom: 82px;
  display: flex;
  flex-direction: row;
`

const Col = styled.div`
  padding: 60px;

  img {
    width: 600px;
    transform: translateX(100px);
    border-radius: 4px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
  }
`

const InnerSection = styled.div`
  margin-right: 300px;
  max-width: 900px;
  display: flex;
  justify-content: center;
`

const ImageFrame = styled.div`
  position: absolute;
  right: 0;
  border-radius: 4px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
  max-width: 500px;
  overflow: hidden;

  img {
    display: block;
    width: 600px;
  }
`

const FeatureSection = styled(Section)`
  background-color: #f4c13f;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Overview = () => {
  const ThisSection = styled.div`
    background-color: #cbd8ef;
    padding-top: 82px;
    padding-bottom: 82px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  `

  const InnerSection = styled.div`
    width: 1040px;
    display: flex;
    align-items: center;
  `

  const ImageFrame = styled.div`
    flex: 1;

    img {
      width: 400px;
    }
  `

  return (
    <ThisSection>
      <InnerSection>
        <Col>
          <H2>Organise your notes and store them online.</H2>
          <Copy>
            Research shows that cluttered note and information is the number one
            cause of cancer. My decluttering your notes, not only can you reduce
            the chance of cancer but also be happier with life.
          </Copy>
        </Col>
        <ImageFrame>
          <img src="/img/screenshot.1.png" />
        </ImageFrame>
      </InnerSection>
    </ThisSection>
  )
}

const Features = () => {
  const ImageFrame = styled.div`
    width: 400px;
    margin-right: 80px;

    img {
      width: 100%;
    }
  `

  const ThisTitle = styled.h2`
    font-size: 32px;
    font-family: ${theme.font.secondary};
    margin-bottom: 60px;
  `

  const ColSection = styled.div`
    display: flex;
    align-items: center;
  `

  const ThisContent = styled.div`
    padding: 0 40px;
  `

  const ThisText = styled.div`
    padding-bottom: 20px;
    margin-bottom: 20px;
    max-width: 600px;

    h3 {
      font-family: ${theme.font.secondary};
    }
  `

  return (
    <FeatureSection>
      <ThisTitle>Organise your notes and store them online.</ThisTitle>
      <div>
        <ColSection>
          <ImageFrame>
            <img src="/img/screenshot.2.png" alt="" />
          </ImageFrame>
          <ThisContent>
            <ul>
              <li>
                <ThisText>
                  <h3>Research shows that cluttered note</h3>
                  <p>
                    Research shows that cluttered note and information is the
                    number one cause of cancer. My decluttering your notes, not
                    only can you reduce.
                  </p>
                </ThisText>
              </li>
              <li>
                <ThisText>
                  <h3>Research shows that cluttered note</h3>
                  <p>
                    Research shows that cluttered note and information is the
                    number one cause of cancer. My decluttering your notes, not
                    only can you reduce.
                  </p>
                </ThisText>
              </li>
              <li>
                <ThisText>
                  <h3>Research shows that cluttered note</h3>
                  <p>
                    Research shows that cluttered note and information is the
                    number one cause of cancer. My decluttering your notes, not
                    only can you reduce.
                  </p>
                </ThisText>
              </li>
            </ul>
          </ThisContent>
        </ColSection>
      </div>
    </FeatureSection>
  )
}

const Join = () => {
  const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 60px 0;
    background-color: ${theme.bg.wash};
  `

  const Col = styled.div``

  const ThisTitle = styled.h2`
    font-size: 32px;
    font-family: ${theme.font.secondary};
  `

  return (
    <Section>
      <div>
        <ThisTitle>
          New Features Coming Soon!
          <br />
          Signup Now
        </ThisTitle>
      </div>
      <div>
        <Button>Join Now</Button>
      </div>
    </Section>
  )
}

const Footer = () => {
  const Centerise = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
    color: ${theme.text.reverse};
    background-color: ${theme.bg.reverse};
  `

  return <Centerise>{2019}</Centerise>
}

export default class Home extends Component {
  render() {
    return (
      <div>
        <Overview />
        <Features />
        <Join />
        <Footer />
      </div>
    )
  }
}
