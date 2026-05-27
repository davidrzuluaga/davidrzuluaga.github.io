import React from 'react';
import { AboutText, ReadmeCard } from '../AppStyles';

const Description = ({ pageInfo, variant = 'readme' }) => {
  const paragraphs = pageInfo.description || [];

  if (variant !== 'readme') {
    return null;
  }

  return (
    <ReadmeCard id='about'>
      <div className='readme-header'>
        <span>davidrzuluaga / README.md</span>
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
