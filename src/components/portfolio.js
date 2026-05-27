import React from 'react';
import {
  PortfolioGrid,
  ProjectBody,
  ProjectCard,
  ProjectLinks,
  RepoMeta,
  SectionHeader,
  SectionTitle,
  Tag
} from '../AppStyles';

const Portfolio = ({ pageInfo }) => {
  const projects = pageInfo.portfolio || [];

  return (
    <div id='portfolio'>
      <SectionHeader>
        <SectionTitle>Popular repositories</SectionTitle>
      </SectionHeader>

      <PortfolioGrid>
        {projects.map(project => (
          <ProjectCard key={project.name}>
            <ProjectBody>
              <h3>
                {project.github ? (
                  <a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {project.name}
                  </a>
                ) : (
                  project.name
                )}
              </h3>
              <p>
                {project.description ||
                  'A production-ready application focused on usability and maintainable architecture.'}
              </p>
              <RepoMeta>
                <span>
                  <span className='dot' />
                  {project.technologies.split(',')[0]?.trim() || 'Public'}
                </span>
              </RepoMeta>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {project.technologies.split(',').map(tech => (
                  <Tag key={tech.trim()}>{tech.trim()}</Tag>
                ))}
              </div>
              <ProjectLinks>
                {project.url && project.url !== '#' && (
                  <a href={project.url} target='_blank' rel='noopener noreferrer'>
                    Live demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Source
                  </a>
                )}
              </ProjectLinks>
            </ProjectBody>
          </ProjectCard>
        ))}
      </PortfolioGrid>
    </div>
  );
};

export default Portfolio;
