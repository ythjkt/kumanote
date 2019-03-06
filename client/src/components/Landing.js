import React from "react";
import styled from "styled-components";

import screenshot from "./screenshot.png";

import { contentWidth } from "../const/sizes";

const Title = styled.h1`
  margin: 60px 0 32px;
  font-size: 60px;
  line-height: 1.3em;
  text-align: center;
  color: #111;
  font-family: minion-3, serif;

  @media (max-width: 600px) {
    font-size: 40px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${contentWidth}px;
  margin: auto;

  @media (max-width: 600px) {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const Paragraph = styled.p`
  text-align: center;
  font-size: 20px;
  line-height: 1.6em;
  margin-bottom: 60px;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const Screenshot = styled.img`
  width: 1000px;
  border-radius: 10px;
  margin-bottom: 60px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const ContentArea = styled.div`
  background-color: rgba(56, 80, 162, 0.1);
`;

const Landing = () => (
  <ContentArea>
    <Wrapper>
      <Title>
        Organise your notes
        <br /> with Kumanote
      </Title>
      <Paragraph>
        Research shows that cluttered note and information is the number one
        cause of cancer. <br />
        My decluttering your notes, not only can you reduce the chance of cancer
        but also be happier with life.
      </Paragraph>
      <Screenshot src={screenshot} alt="screenshot" />
    </Wrapper>
  </ContentArea>
);

export default Landing;
