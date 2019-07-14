import * as React from 'react';
import styled from 'styled-components';
import { cssConfig } from '../configs/cssConfig';

const EducationStyles = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin: 0 0 0.5rem 0;
  }

  .label {
    overflow: hidden;
    position: relative;

    &:after {
      content: '';
      border-top: 0.1rem solid ${cssConfig.colors.copy};
      height: 0.1rem;
      left: 14.25rem;
      opacity: 0.7;
      position: absolute;
      top: 50%;
      width: 14rem;
    }
  }

  .major {
    color: ${cssConfig.colors.copy};
    display: block;
    font-size: 1.4rem;
    margin-bottom: 0.1rem;
    max-width: 25rem;

    &:last-child {
      margin-bottom: 1.5rem;
    }
  }

  .school {
    color: ${cssConfig.colors.teal};
    font-weight: 600;
    font-size: 2rem;
    margin-bottom: 0;
    text-transform: uppercase;
  }

  .school-dates {
    margin: 0;
    padding: 0;
    text-align: left;
  }

  @media (min-width: ${cssConfig.media.small}) {
    flex-flow: row;
    justify-content: space-between;

    .school {
      font-size: 2.4rem;
      line-height: 2.5rem;
      margin: initial;
      text-align: right;
    }

    .school-dates {
      line-height: 1.7rem;
      margin-top: 1.25rem;
      text-align: right;
    }

    .major {
      margin-bottom: initial;
    }
  }

  @media (min-width: ${cssConfig.media.medium}) {
    .school-dates {
      margin-top: 0.85rem;
    }
  }
`;

const MajorSection = styled.div`
  h2 {
    margin-bottom: 1.5rem;
  }
`;

const DateLocation = styled.span`
  color: ${cssConfig.colors.copy};
  display: block;
  font-size: 1.2rem;
  margin: 1rem 0;
  padding-left: 1.5rem;
  text-align: left;

  span {
    color: ${cssConfig.colors.copy};
    font-size: 1.8rem;
    font-weight: 600;
  }

  em {
    display: block;
    font-style: italic;
    font-weight: 600;
  }

  @media (min-width: ${cssConfig.media.small}) {
    font-size: 1.4rem;
    margin: 0;
    text-align: right;
  }
`;

const Education = (): JSX.Element => (
  <EducationStyles>
    <MajorSection>
      <h2 className='label'>Education</h2>
      <span className='major'>B.A Art, Interactive Multimedia</span>
      <span className='major'>Minor in Communications, Advertising</span>
    </MajorSection>
    <div>
      <h2 className='school'>Salem State University</h2>
      <DateLocation className='school-dates'>
        September 2006 — August 2010&nbsp;&nbsp;<span>∙</span>&nbsp;&nbsp;Salem, MA
      </DateLocation>
    </div>
  </EducationStyles>
);

export default Education;