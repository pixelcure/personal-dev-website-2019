import * as React from "react";
import styled from "styled-components";
import { cssConfig } from "../configs/cssConfig";

const IntroductionContainer = styled.div`
  font-weight: normal;
  font-size: 1.4rem;
  text-align: center;

  span {
    color: ${cssConfig.colors.teal};
    font-weight: 600;
  }

  @media (min-width: ${cssConfig.media.medium}) {
    padding: 0 3rem;
  }

  @media (min-width: ${cssConfig.media.large}) {
    padding: 0 10rem;
  }
`;

const Introduction = (): JSX.Element => (
  <IntroductionContainer>
    <p>
      <span>I am a front end engineer living in New York, New York.</span> I’m a
      team player and enjoy solving problems with smart, creative, and tech
      savvy people. I believe in developing solutions for cross-device
      platforms, from mobile to desktop.
    </p>
  </IntroductionContainer>
);

export default Introduction;
