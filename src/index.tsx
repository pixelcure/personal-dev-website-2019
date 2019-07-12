import * as React from "react";
import { render } from "react-dom";
import styled from "styled-components";
import { cssConfig } from "./configs/cssConfig";
import Header from "./Header";
import Introduction from "./Introduction";
import "./styles.css";

const SiteContainer = styled.div`
  border-top: 0.5rem solid ${cssConfig.colors.teal};
  padding: 2rem 1.5rem;
`;

const Inner = styled.main`
  margin: 0 auto;
  width: 100%;

  @media (min-width: ${cssConfig.media.medium}) {
    width: 97rem;
  }

  @media (min-width: ${cssConfig.media.large}) {
    width: 117rem;
  }
`;

const Site = () => {
  return (
    <SiteContainer>
      <Inner>
        <Header />
        <Introduction />
        {/* <Information /> */}
      </Inner>
    </SiteContainer>
  );
};

const rootElement = document.getElementById("root");
render(<Site />, rootElement);
