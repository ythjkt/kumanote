import React, { Component } from 'react'
import theme from '../../../const/theme'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Button } from '../../../components/button/'
import Logo from '../../../components/logo/'

import { FlexCol, FlexRow, Section, ImageFrame, SectionTitle } from './style'

export const Overview = () => {
  const ThisSection = styled(Section)`
    padding: 180px 0 120px;
    height: 98vh;

    @media (max-width: 1000px) {
      padding: 180px 20px 120px;
    }
  `
  const ThisTitle = styled.h2`
    grid-area: title;
    font-family: ${theme.font.secondary};
    font-size: 48px;
    line-height: 60px;
  `

  const Copy = styled.p`
    grid-area: copy;

    font-size: 24px;
  `

  const HeroImage = styled(ImageFrame)`
    grid-area: image;

    @media (max-width: 1000px) {
      display: none;
    }
  `

  const Buttons = styled.div`
    grid-area: button;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;

    @media (max-width: 1000px) {
      grid-template-columns: auto;
      grid-template-rows: auto auto;
      justify-items: start;
    }
  `

  const Grid = styled.div`
    display: grid;
    grid-template-columns: 600px auto;
    grid-template-rows: auto auto auto;
    grid-gap: 40px;
    grid-template-areas:
      'title image'
      'copy image'
      'button image';
    justify-items: start;

    @media (max-width: 1000px) {
      grid-template-columns: auto;
      grid-template-rows: auto auto auto;
      grid-template-areas:
        'title'
        'copy'
        'button';
    }
  `

  return (
    <ThisSection>
      <Grid>
        <ThisTitle>Organise your notes and store them online.</ThisTitle>
        <Copy>
          Research shows that cluttered note and information is the number one
          cause of cancer. My decluttering your notes, not only can you reduce
          the chance of cancer but also be happier with life.
        </Copy>
        <Buttons>
          <Button as={Link} to="/register" primary>
            Create an account
          </Button>
          <Button as={Link} to="/login">
            Login
          </Button>
        </Buttons>

        <HeroImage width="600">
          <img src="/img/screenshot.1.png" />
        </HeroImage>
      </Grid>
    </ThisSection>
  )
}

export const Features = () => {
  const FeatureList = styled.div`
    grid-area: copy;
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
    background-color: #cbd8ef;
    flex-direction: column;
    padding: 80px 0;

    @media (max-width: 1000px) {
      padding: 80px 20px;
    }
  `

  const ThisImageFrame = styled(ImageFrame)`
    grid-area: image;
    width: 100%;
    height: auto;
  `

  const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'image copy';
    align-items: start;
    grid-gap: 40px;
    max-width: 1000px;

    @media (max-width: 1000px) {
      grid-template-columns: auto;
      grid-template-rows: auto auto;
      grid-template-areas: 'image' 'copy';
    }
  `

  return (
    <ThisSection>
      <Grid>
        <ThisImageFrame>
          <img src="/img/screenshot.2.png" alt="" />
        </ThisImageFrame>
        <FeatureList>
          <FeatureListItem>
            <h3>Research shows that cluttered note</h3>
            <p>
              Research shows that cluttered note and information is the number
              one cause of cancer. My decluttering your notes, not only can you
              reduce.
            </p>
          </FeatureListItem>

          <FeatureListItem>
            <h3>Research shows that cluttered note</h3>
            <p>
              Research shows that cluttered note and information is the number
              one cause of cancer. My decluttering your notes, not only can you
              reduce.
            </p>
          </FeatureListItem>

          <FeatureListItem>
            <h3>Research shows that cluttered note</h3>
            <p>
              Research shows that cluttered note and information is the number
              one cause of cancer. My decluttering your notes, not only can you
              reduce.
            </p>
          </FeatureListItem>
        </FeatureList>
      </Grid>
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
      <Button as={Link} to="/register" primary>
        Create an account
      </Button>
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
