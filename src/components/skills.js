import React from 'react';
import {
  BoxCard,
  LangItem,
  LangList,
  SectionHeader,
  SectionTitle,
  SkillPanel,
  SkillsGrid,
  Tag,
  TagGrid,
  TechGrid,
  TechItem
} from '../AppStyles';

const languageLabel = alt => {
  switch (alt) {
    case 'ColFlag':
      return 'Spanish';
    case 'USFlag':
      return 'English';
    default:
      return alt;
  }
};

const Skills = ({ pageInfo }) => {
  return (
    <div id='skills'>
      <SectionHeader>
        <SectionTitle>Skills</SectionTitle>
      </SectionHeader>

      <SkillsGrid>
        <SkillPanel>
          <div className='panel-header'>Technologies</div>
          <div className='panel-body'>
            <TechGrid>
              {pageInfo.webDevSkills?.map(skill => (
                <TechItem key={skill.alt}>
                  <img src={skill.imgurl} alt={skill.alt} />
                  <span>{skill.alt}</span>
                </TechItem>
              ))}
            </TechGrid>
          </div>
        </SkillPanel>

        <BoxCard>
          <div className='box-header'>Languages</div>
          <div className='box-body'>
            <LangList>
              {pageInfo.langSkills?.map(skill => (
                <LangItem key={skill.alt}>
                  <img src={skill.imgurl} alt={languageLabel(skill.alt)} />
                  <div>
                    <strong>{languageLabel(skill.alt)}</strong>
                    <span>{skill.level}</span>
                  </div>
                </LangItem>
              ))}
            </LangList>
          </div>
        </BoxCard>

        <BoxCard>
          <div className='box-header'>Professional strengths</div>
          <div className='box-body'>
            <TagGrid>
              {pageInfo.proSkills?.map(skill => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </TagGrid>
          </div>
        </BoxCard>
      </SkillsGrid>
    </div>
  );
};

export default Skills;
