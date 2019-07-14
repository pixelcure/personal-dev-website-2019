import * as React from 'react';
import styled from 'styled-components';
import { cssConfig } from '../configs/cssConfig';
import technologies from '../configs/technologies';
import tools from '../configs/tools';
import experience from '../configs/experience';
import softSkills from '../configs/softSkills'
import Column from '../Column';
import Experience from './Experience';
import Education from './Education';
import List from '../List';

const InformationContainer = styled.div`
  @media (min-width: ${cssConfig.media.small}) {
    display: flex;
  }
`;

const renderSkills = () => (
  <>
    <List
      className='tech'
      data={technologies}
      type='tool'
      headline='Tech &amp; Approaches'
    />
    <List
      className='tools'
      data={tools}
      type='tool'
      headline='Tools &amp; Software'
    />
    <List
      className='soft-skills'
      data={softSkills}
      type='soft-skills'
      headline='Soft Skills'
    />
  </>
);

const Information = (): JSX.Element => (
  <InformationContainer>
    <Column>
      {renderSkills()}
    </Column>
    <Column className='wider experience'>
      <Experience jobs={experience} />
      <Education />
    </Column>
  </InformationContainer>
);

export default Information;