import * as React from 'react';
import styled from 'styled-components';
import headerDetails from '../configs/headerDetails';
import { cssConfig } from '../configs/cssConfig';

const LinkList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    font-size: 1.2rem;
    margin-bottom: 0.25rem;
    position: relative;
    text-align: center;

    &:last-child {
      margin: 0;
    }
  }

  @media (min-width: ${cssConfig.media.small}) {
    display: flex;
    justify-content: center;

    li {
      margin: 0 1.5rem 0 0;
      padding-right: 1.5rem;

      &:after {
        content: '∙';
        color: ${cssConfig.colors.teal};
        position: absolute;
        font-size: 2rem;
        right: -0.5rem;
      }

      &:last-child {
        margin-right: 0;
        padding-right: 0;

        &:after {
          display: none;
        }
      }
    }
  }
`;

const handleLinks = (detail: string, index: number): JSX.Element => <li key={`header-link-${index}`} dangerouslySetInnerHTML={{ __html: detail }} />;

const HeaderLinks = (): JSX.Element => (
  <LinkList>
    {headerDetails && headerDetails.map((detail, index) => handleLinks(detail, index))}
  </LinkList>
);

export default HeaderLinks;
