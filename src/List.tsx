import * as React from 'react';
import cs from 'classnames';
import styled from 'styled-components';
import { cssConfig } from './configs/cssConfig';

interface IProps {
  children?: React.ReactNode;
  className?: string;
  data?: any[];
  headline?: string;
  roleList?: boolean;
  type: string;
}

const ListStyles = styled.div`
  margin-bottom: 3rem;

  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin: 0 0 1.5rem;
    text-align: center;
  }

  .outer-list {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;

    .item {
      color: ${cssConfig.colors.copy};
      font-size: 1.4rem;
      margin-bottom: 0.5rem;
      position: relative;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  @media (min-width: ${cssConfig.media.small}) {
    .outer-list,
    h2 {
      text-align: left;
    }

    .outer-list {
      padding-left: 2rem;
    }

    .item:before {
      content: '∙';
      color: ${cssConfig.colors.copy};
      font-size: 2rem;
      left: -1.5rem;
      position: absolute;
    }
  }
`;

const RoleList = styled.ul`
  list-style: none;
  margin: 1.5rem 0 0;
  padding: 0 1.5rem;

  .item {
    padding-bottom: 1rem;
    text-align: left;

    &:before {
      content: '∙';
      color: ${cssConfig.colors.copy};
      font-size: 2rem;
      left: -1.5rem;
      position: absolute;
    }
  }

  @media (min-width: ${cssConfig.media.small}) {
    margin: 2.5rem 0;
    padding-left: 3.75rem;
  }
`;

const handleItem = (item: string, index: number, type: string) => <li className='item' key={`${type}-${index}`}>{item}</li>;

const List = ({ className, children, data, headline, roleList = false, type }: IProps) => (
  <ListStyles className={cs(className)}>
    {headline && <h2>{headline}</h2>}
    {data && type && !roleList && <ul className='outer-list'>{data && data.map((item, index) => handleItem(item, index, type))}</ul>}
    {data && type && roleList && <RoleList>{data.map((job, index) => handleItem(job, index, type))}</RoleList>}
    {children ? children : null}
  </ListStyles>
);

export default List;