import * as React from "react";
import styled from "styled-components";
import HeaderLinks from "./HeaderLinks";

const logoPath = `http://pixelcureinteractive.com/docs/paulthibedeau-logo.svg`;

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  width: 100%;
`;

const Logo = styled.div`
  align-self: center;
  justify-content: center;
  padding: 2rem 0 1rem;
  width: 30rem;

  img {
    height: auto;
    width: 100%;
  }
`;

const Header = (): JSX.Element => (
  <HeaderContainer>
    <Logo>
      <a href="/" title="Paul Thibedeau">
        <img src={logoPath} alt="Paul Thibedeau" />
      </a>
    </Logo>
    <HeaderLinks />
  </HeaderContainer>
);

export default Header;
