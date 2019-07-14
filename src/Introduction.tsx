import * as React from 'react';
import styled from 'styled-components';
import { cssConfig } from './configs/cssConfig';
import jumpTo from './helpers/jump';

const IntroductionContainer = styled.div`
  color: ${cssConfig.colors.copy};
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 2.3rem;
  margin-bottom: 3.5rem;
  text-align: center;

  a {
    border-bottom: 0.1rem solid #6E918E;

    &:hover {
      border: 0;
    }
  }

  span {
    color: ${cssConfig.colors.teal};
    font-weight: 600;
  }

  @media (min-width: ${cssConfig.media.small}) {
    padding: 0 3rem;
    margin-bottom: 5rem;

    p {
      max-width: 77rem;
      margin: 0 auto;
    }
  }

  @media (min-width: ${cssConfig.media.medium}) {
    padding: 0;
  }
`;

const MobileOnly = styled.span`
  font-weight: normal;

  @media (min-width: ${cssConfig.media.small}) {
    display: none;
  }
`;

const Introduction = (): JSX.Element => (
  <IntroductionContainer>
    <p>
      <span>I am a front end engineer living in New York, New York.</span> I’m a
      collaborator and enjoy solving problems with smart, creative, and tech
      savvy people. I believe in developing solutions for cross-device
      platforms, from mobile to desktop. <MobileOnly>Look below to learn more about <a href='#' title='Tech &amp; Approaches' onClick={() => jumpTo('.tech')}>tech</a> and <a href='#' title='Tools &amp; Software' onClick={() => jumpTo('.tools')}>tools</a> I enjoy using, as well as <a href='#' title='Job Experience' onClick={() => jumpTo('.experience')}>companies</a> I've had the pleasure being with.</MobileOnly>
    </p>
  </IntroductionContainer>
);

export default Introduction;