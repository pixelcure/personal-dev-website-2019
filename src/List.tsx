import * as React from 'react';
import cs from 'classnames';
import styled from 'styled-components';
import { cssConfig } from './configs/cssConfig';

interface IProps {
  bulletList?: boolean;
  children?: React.ReactNode;
  className?: string;
  data?: any[];
  headline?: string;
  type: string;
}

const ListStyles = styled.div`
  margin-bottom: 3rem;

  h2 {
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
  }
`;

const BulletList = styled.ul`
  list-style: none;
  margin: 1.5rem 0 0;
  padding: 0 1.5rem;

  .item {
    padding-bottom: 1rem;
    position: relative;
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

const handleItem = (item: string, index: number, type: string, bulletList = false) => <li className='item' key={`${type}-${index}`}>{item}</li>;

const List = ({ bulletList = false, className, children, data, headline, type }: IProps) => {
  return (
    <ListStyles className={cs(className)}>
      {headline && <h2>{headline}</h2>}
      {data && type && !bulletList && <ul className='outer-list'>{data && data.map((item, index) => handleItem(item, index, type))}</ul>}
      {data && type && bulletList && <BulletList>{data.map((job, index) => handleItem(job, index, type))}</BulletList>}
      {children ? children : null}
    </ListStyles>
  )
};

export default List;
