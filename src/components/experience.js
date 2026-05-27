import React from 'react';
import {
  BoxCard,
  ExperienceCard,
  ExperienceContent,
  ExperienceLogo,
  SectionHeader,
  SectionTitle,
  Timeline,
  TimelineGroup
} from '../AppStyles';

const ExperienceItem = ({ xp }) => (
  <ExperienceCard>
    <ExperienceLogo>
      <img src={xp.logo} alt={xp.institution} />
    </ExperienceLogo>
    <ExperienceContent>
      <h4>
        <a href={xp.link} target='_blank' rel='noopener noreferrer'>
          {xp.institution}
        </a>
      </h4>
      <p className='role'>{xp.title}</p>
      <p className='company'>{xp.subtitle}</p>
      <span className='dates'>{xp.dates}</span>
      {xp.description && <p>{xp.description}</p>}
    </ExperienceContent>
  </ExperienceCard>
);

const Experience = ({ pageInfo }) => {
  const work = pageInfo.experience?.filter(item => item.area === 'work') || [];
  const education =
    pageInfo.experience?.filter(item => item.area === 'education') || [];

  return (
    <div id='experience'>
      <SectionHeader>
        <SectionTitle>Experience</SectionTitle>
      </SectionHeader>

      <BoxCard>
        <div className='box-header'>Work</div>
        <div className='box-body'>
          <Timeline>
            <TimelineGroup>
              {work.map((xp, index) => (
                <ExperienceItem key={`${xp.institution}-${index}`} xp={xp} />
              ))}
            </TimelineGroup>
          </Timeline>
        </div>
      </BoxCard>

      <BoxCard style={{ marginTop: '16px' }}>
        <div className='box-header'>Education</div>
        <div className='box-body'>
          <Timeline>
            <TimelineGroup>
              {education.map((xp, index) => (
                <ExperienceItem key={`${xp.institution}-${index}`} xp={xp} />
              ))}
            </TimelineGroup>
          </Timeline>
        </div>
      </BoxCard>
    </div>
  );
};

export default Experience;
