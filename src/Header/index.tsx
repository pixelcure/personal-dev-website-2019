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

const Logo = styled.div`
  align-self: center;
  justify-content: center;
  padding: 1rem 0 1rem;
  width: 30rem;

  img {
    height: auto;
    width: 100%;
  }
`;

const PDFDownload = styled.a`
  background: ${cssConfig.colors.teal};
  color: #FFF;
  display: block;
  font-size: 1.5rem;
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
    <PDFDownload href='http://paulthibedeau.com/docs/PaulThibedeauResume2019.pdf' target='_blank' title='Download as PDF'>.PDF</PDFDownload>
    <Logo>
      <a href='/' title='Paul Thibedeau'>
        <img src={logoPath} alt='Paul Thibedeau' />
      </a>
    </Logo>
    <HeaderLinks />
  </HeaderContainer>
);

export default Header;
