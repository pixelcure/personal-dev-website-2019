import * as React from 'react';
import styled from 'styled-components';
import { cssConfig } from '../configs/cssConfig';
import HeaderLinks from './HeaderLinks';

const logoPath = `http://paulthibedeau.com/paulthibedeau-logo.svg`;

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  width: 100%;

  @media (min-width: ${cssConfig.media.small}) {
    margin: 1rem 0 3rem;
  }
`;

const Logo = styled.a`
  align-self: center;
  justify-content: center;
  padding: 1rem 0 1rem;
  width: 30rem;

  img {
    height: auto;
    width: 100%;
  }
`;

const ResumeDownload = styled.a`
  background: ${cssConfig.colors.teal};
  color: #FFF;
  display: block;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0.5rem;
  position: absolute;
  top: 0;
  right: 0;

  @media (min-width: ${cssConfig.media.small}) {
    font-size: 2rem;
    padding: 1rem;
  }
`;

const Header = (): JSX.Element => (
  <HeaderContainer>
    <ResumeDownload
      href='http://paulthibedeau.com/docs/PaulThibedeauResume2019.pdf'
      target='_blank'
      title='Download Resume'
    >
      Resume
    </ResumeDownload>
    <Logo href='/' title='Paul Thibedeau'>
      <img src={logoPath} alt='Paul Thibedeau' />
    </Logo>
    <HeaderLinks />
  </HeaderContainer>
);

export default Header;