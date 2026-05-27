import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';
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

const Skills = ({ pageInfo }) => {
  const { t } = useTranslation();

  const languageLabel = skill => {
    const key = skill.id || skill.alt;
    switch (key) {
      case 'es':
      case 'ColFlag':
        return t('skills.spanish');
      case 'en':
      case 'USFlag':
        return t('skills.english');
      default:
        return skill.alt;
    }
  };

  return (
    <div id='skills'>
      <SectionHeader>
        <SectionTitle>{t('skills.title')}</SectionTitle>
      </SectionHeader>

      <SkillsGrid>
        <SkillPanel>
          <div className='panel-header'>{t('skills.technologies')}</div>
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
          <div className='box-header'>{t('skills.languages')}</div>
          <div className='box-body'>
            <LangList>
              {pageInfo.langSkills?.map(skill => (
                <LangItem key={skill.id || skill.alt}>
                  <img src={skill.imgurl} alt={languageLabel(skill)} />
                  <div>
                    <strong>{languageLabel(skill)}</strong>
                    <span>{skill.level}</span>
                  </div>
                </LangItem>
              ))}
            </LangList>
          </div>
        </BoxCard>

        <BoxCard>
          <div className='box-header'>{t('skills.professionalStrengths')}</div>
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
