import React from 'react';
import { normalizeIcon } from '../utils/iconUtils';
import { useTranslation } from '../i18n/LanguageContext';
import {
  BoxCard,
  ContactCard,
  ContactSection,
  PrimaryButton,
  SocialGrid,
  SocialLink
} from '../AppStyles';

const Contact = ({ pageInfo, variant = 'main' }) => {
  const { t } = useTranslation();

  if (variant === 'sidebar') {
    return (
      <BoxCard>
        <div className='box-header'>{t('contact.links')}</div>
        <div className='box-body'>
          <SocialGrid>
            {pageInfo.social?.map(social => (
              <SocialLink
                key={social.socialName}
                href={social.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className={normalizeIcon(social.icon)} />
                {social.user}
              </SocialLink>
            ))}
            <SocialLink href={`mailto:${pageInfo.email}`}>
              <i className='fa-solid fa-envelope' />
              {t('contact.email')}
            </SocialLink>
          </SocialGrid>
        </div>
      </BoxCard>
    );
  }

  return (
    <ContactSection id='contact'>
      <ContactCard>
        <h2>{t('contact.getInTouch')}</h2>
        <p>{t('contact.description')}</p>
        <PrimaryButton href={`mailto:${pageInfo.email}`}>
          <i className='fa-solid fa-envelope' />
          {pageInfo.email}
        </PrimaryButton>
      </ContactCard>
    </ContactSection>
  );
};

export default Contact;
