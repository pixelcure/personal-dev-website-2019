import * as React from 'react';
import cs from 'classnames'
import styled from 'styled-components';
import { cssConfig } from './configs/cssConfig';

interface IProps {
  className?: string;
  children: React.ReactNode;
}

const ColumnStyles = styled.div`
  width: 100%;
  margin-bottom: 3.5rem;

  @media (min-width: ${cssConfig.media.small}) {
    margin-bottom: 0;
    width: 33%;
    &.wider {
      padding-left: 2rem;
      width: 66%;
    }
  }

  @media (min-width: ${cssConfig.media.medium}) {
    padding-left: 0;
  }
`;

const Column = ({ children, className }: IProps): JSX.Element => (
  <ColumnStyles className={cs(className)}>
    {children}
  </ColumnStyles>
);

export default Column;