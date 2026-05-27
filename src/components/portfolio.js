import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';
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
  const { t } = useTranslation();
  const projects = pageInfo.portfolio || [];

  return (
    <div id='portfolio'>
      <SectionHeader>
        <SectionTitle>{t('portfolio.popularRepositories')}</SectionTitle>
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
                {project.description || t('portfolio.defaultDescription')}
              </p>
              <RepoMeta>
                <span>
                  <span className='dot' />
                  {project.technologies.split(',')[0]?.trim() ||
                    t('portfolio.public')}
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
                    {t('portfolio.liveDemo')}
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {t('portfolio.source')}
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
