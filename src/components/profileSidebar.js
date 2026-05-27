import React from 'react';
import { normalizeIcon } from '../utils/iconUtils';
import { useTranslation } from '../i18n/LanguageContext';
import {
  ProfileActions,
  ProfileAvatar,
  ProfileBio,
  ProfileDetails,
  ProfileDetailsItem,
  ProfileName,
  ProfileSidebarWrap,
  ProfileUsername,
  SecondaryButton
} from '../AppStyles';

const ProfileSidebar = ({ pageInfo }) => {
  const { t } = useTranslation();

  return (
    <ProfileSidebarWrap id='home'>
      <ProfileAvatar>
        <img src={pageInfo.avatar} alt='David R. Zuluaga' />
      </ProfileAvatar>

      <ProfileName>{pageInfo.greet}</ProfileName>
      <ProfileUsername>{pageInfo.username}</ProfileUsername>
      <ProfileBio>{pageInfo.greetDescription}</ProfileBio>

      <ProfileActions>
        <SecondaryButton href={`mailto:${pageInfo.email}`}>
          {t('sidebar.contact')}
        </SecondaryButton>
        {pageInfo.CV && (
          <SecondaryButton
            href={pageInfo.CV}
            target='_blank'
            rel='noopener noreferrer'
          >
            {t('sidebar.resume')}
          </SecondaryButton>
        )}
      </ProfileActions>

      <ProfileDetails>
        <ProfileDetailsItem>
          <i className='fa-solid fa-building' />
          <span>{pageInfo.company}</span>
        </ProfileDetailsItem>
        <ProfileDetailsItem>
          <i className='fa-solid fa-location-dot' />
          <span>{t('sidebar.location')}</span>
        </ProfileDetailsItem>
        <ProfileDetailsItem>
          <i className='fa-solid fa-envelope' />
          <a href={`mailto:${pageInfo.email}`}>{pageInfo.email}</a>
        </ProfileDetailsItem>
        <ProfileDetailsItem>
          <i className='fa-solid fa-link' />
          <a href={pageInfo.website} target='_blank' rel='noopener noreferrer'>
            {pageInfo.website.replace(/^https?:\/\//, '')}
          </a>
        </ProfileDetailsItem>
        {pageInfo.social?.map(social => (
          <ProfileDetailsItem key={social.socialName}>
            <i className={normalizeIcon(social.icon)} />
            <a href={social.link} target='_blank' rel='noopener noreferrer'>
              {social.user}
            </a>
          </ProfileDetailsItem>
        ))}
      </ProfileDetails>
    </ProfileSidebarWrap>
  );
};

export default ProfileSidebar;
