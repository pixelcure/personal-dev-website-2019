import * as React from 'react';
import styled from 'styled-components';
import List from '../List';
import { cssConfig } from '../configs/cssConfig';
import { IJob } from '../configs/experience';

interface IProps {
  jobs?: IJob[];
}

const ExperienceStyles = styled.li`
  margin-bottom: 3.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const JobTop = styled.div`
  @media (min-width: ${cssConfig.media.medium}) {
    display: flex;
    justify-content: space-between;
  }
`;

const Job = styled.div`
  display: flex;
`;

const Year = styled.span`
  background: ${cssConfig.colors.teal};
  color: #FFF;
  display: block;
  font-size: 2rem;
  font-weight: 600;
  height: 2rem;
  line-height: 2rem;
  padding: 1rem;
  text-align: center;
  width: 5rem;
`;

const Company = styled.span`
  color: ${cssConfig.colors.teal};
  font-size: 2.4rem;
  font-weight: 600;
  letter-spacing: 0.04rem;
  line-height: 2rem;
  padding: 0.8rem 0 0 1.5rem;
  text-transform: uppercase;

  @media (min-width: ${cssConfig.media.small}) {
    padding-left: 2rem;
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
  }

  @media (min-width: ${cssConfig.media.medium}) {
    margin: 0;
    text-align: right;
  }
`;

const handleJob = (job: IJob, index: number) => (
  <ExperienceStyles key={`job-${index}`}>
    <JobTop>
      <Job>
        <Year>{job.year}</Year>
        <Company>{job.company}</Company>
      </Job>
      <DateLocation>
        {job.timePeriod}&nbsp;&nbsp;<span>∙</span>&nbsp;&nbsp;{job.city}
        <em>{job.title}</em>
      </DateLocation>
    </JobTop>
    <List bulletList type={job.company} data={job.details} />
  </ExperienceStyles>
);

const Experience = ({ jobs }: IProps): JSX.Element => (
  <List type='experience'>
    <ul className='outer-list'>{jobs && jobs.map((job, index) => handleJob(job, index))}</ul>
  </List>
);

export default Experience;
