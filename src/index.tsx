import * as React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import { cssConfig } from './configs/cssConfig';
import Header from './Header';
import Introduction from './Introduction';
import Information from './Information';
import './styles.css';
import jumpTo from './helpers/jump';

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

const ScrollToTop = styled.a`
  display: flex;
  font-size: 4rem;
  justify-content: center;
  margin: 3rem 0;

  &:before {
    content: '🔝';
  }
`;

const Site = () => {
  return (
    <SiteContainer>
      <Inner>
        <Header />
        <Introduction />
        <Information />
        <ScrollToTop title='Scroll to Top' href='#' onClick={() => jumpTo('.top')}></ScrollToTop>
      </Inner>
    </SiteContainer>
  );
};

render(<Site />, document.getElementById('root'));
