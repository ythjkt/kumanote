import React, { Component } from 'react'
import theme from '../../../const/theme'
import styled from 'styled-components'

import { Button } from '../../../components/button/'
import Logo from '../../../components/logo/'

import { FlexCol, FlexRow, Section, ImageFrame, SectionTitle } from './style'

export const Overview = () => {
  const ThisSection = styled(Section)`
    background-color: #cbd8ef;
    padding-top: 180px;
    padding-bottom: 120px;
  `
  const ThisTitle = styled.h2`
    font-family: ${theme.font.secondary};
    font-size: 48px;
    line-height: 60px;
    margin-bottom: 32px;
  `

  const Copy = styled.p`
    font-size: 24px;
  `

  const ThisFlexCol = styled(FlexCol)`
    max-width: 600px;
    padding-right: 80px;
  `

  return (
    <ThisSection>
      <ThisFlexCol>
        <ThisTitle>Organise your notes and store them online.</ThisTitle>
        <Copy>
          Research shows that cluttered note and information is the number one
          cause of cancer. My decluttering your notes, not only can you reduce
          the chance of cancer but also be happier with life.
        </Copy>
      </ThisFlexCol>
      <ImageFrame width="600">
        <img src="/img/screenshot.1.png" />
      </ImageFrame>
    </ThisSection>
  )
}

export const Features = () => {
  const ThisTitle = styled(SectionTitle)`
    margin-bottom: 60px;
  `

  const FeatureList = styled.div`
    padding: 0 40px;
  `

  const FeatureListItem = styled.div`
    padding-bottom: 20px;
    margin-bottom: 20px;
    max-width: 400px;

    h3 {
      font-family: ${theme.font.secondary};
      margin-bottom: 0.8em;
    }
  `

  const ThisSection = styled(Section)`
    background-color: #f8d67b;
    flex-direction: column;
    padding: 80px 0;
  `

  return (
    <ThisSection>
      <ThisTitle>Organise your notes and store them online.</ThisTitle>
      <div>
        <FlexRow>
          <ImageFrame width="400">
            <img src="/img/screenshot.2.png" alt="" />
          </ImageFrame>
          <FeatureList>
            <FeatureListItem>
              <h3>Research shows that cluttered note</h3>
              <p>
                Research shows that cluttered note and information is the number
                one cause of cancer. My decluttering your notes, not only can
                you reduce.
              </p>
            </FeatureListItem>

            <FeatureListItem>
              <h3>Research shows that cluttered note</h3>
              <p>
                Research shows that cluttered note and information is the number
                one cause of cancer. My decluttering your notes, not only can
                you reduce.
              </p>
            </FeatureListItem>

            <FeatureListItem>
              <h3>Research shows that cluttered note</h3>
              <p>
                Research shows that cluttered note and information is the number
                one cause of cancer. My decluttering your notes, not only can
                you reduce.
              </p>
            </FeatureListItem>
          </FeatureList>
        </FlexRow>
      </div>
    </ThisSection>
  )
}

export const Join = () => {
  const ThisSection = styled(Section)`
    flex-direction: column;
    padding: 100px 0 60px;
  `

  const ThisLogo = styled(Logo)`
    margin-bottom: 20px;
    padding-bottom: 10px;
    display: block;
  `

  return (
    <ThisSection>
      <ThisLogo />
      <SectionTitle>New Features Coming Soon! Signup Now</SectionTitle>
      <Button primary>Create an account</Button>
    </ThisSection>
  )
}

export const Footer = () => {
  const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    padding: 40px;
    background-color: ${theme.bg.wash};
  `

  return <StyledFooter>&copy; {new Date().getFullYear()} kumanote</StyledFooter>
}
