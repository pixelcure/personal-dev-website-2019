import * as React from "react";
import styled from "styled-components";
import headerDetails from "../configs/headerDetails";
import { cssConfig } from "../configs/cssConfig";

const LinkList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin-right: 1.5rem;
    font-size: 1.4rem;
    padding-right: 1.5rem;
    position: relative;

    @media (min-width: ${cssConfig.media.small}) {
      &:after {
        content: "∙";
        color: ${cssConfig.colors.teal};
        position: absolute;
        font-size: 2rem;
        right: -0.5rem;
      }

      &:last-child {
        padding-right: 0;
        margin-right: 0;
        &:after {
          display: none;
        }
      }
    }
  }

  a {
    text-decoration: none;
    color: ${cssConfig.colors.copy};
  }
`;

const handleLinks = (detail, index) => (
  <li
    key={`header-link-${index}`}
    dangerouslySetInnerHTML={{ __html: detail }}
  />
);

const HeaderLinks = (): JSX.Element => (
  <LinkList>
    {headerDetails &&
      headerDetails.map((detail, index) => handleLinks(detail, index))}
  </LinkList>
);

export default HeaderLinks;
