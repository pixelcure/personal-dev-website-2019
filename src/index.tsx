import * as React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import { cssConfig } from './configs/cssConfig';
import Header from './Header';
import Introduction from './Introduction';
import Information from './Information';
import './styles.css';

const SiteContainer = styled.div`
  border-top: 0.5rem solid ${cssConfig.colors.teal};
  padding: 2rem 1.5rem;
`;

const Inner = styled.main`
  margin: 0 auto;
  width: 100%;

  @media (min-width: ${cssConfig.media.medium}) {
    width: 92rem;
  }
`;

const Site = () => {
  return (
    <SiteContainer className='top'>
      <Inner>
        <Header />
        <Introduction />
        <Information />
      </Inner>
    </SiteContainer>
  );
};

render(<Site />, document.getElementById('root'));