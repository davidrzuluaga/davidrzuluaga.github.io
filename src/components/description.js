import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import { AboutText, ReadmeCard } from '../AppStyles';

const Description = ({ pageInfo, variant = 'readme' }) => {
  const { t } = useTranslation();
  const paragraphs = pageInfo.description || [];

  if (variant !== 'readme') {
    return null;
  }

  return (
    <ReadmeCard id='about'>
      <div className='readme-header'>
        <span>{t('description.readmePath')}</span>
      </div>
      <div className='readme-body'>
        <AboutText>
          {paragraphs.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
        </AboutText>
      </div>
    </ReadmeCard>
  );
};

export default Description;
