import React from 'react';
import { normalizeIcon } from '../utils/iconUtils';
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

const ProfileSidebar = ({ pageInfo }) => (
  <ProfileSidebarWrap id='home'>
    <ProfileAvatar>
      <img
        src='https://s3.us-east-2.amazonaws.com/davidrzuluaga.com/assets/backgrounds/DRZ+BGF.png'
        alt='David R. Zuluaga'
      />
    </ProfileAvatar>

    <ProfileName>{pageInfo.greet}</ProfileName>
    <ProfileUsername>davidrzuluaga</ProfileUsername>
    <ProfileBio>{pageInfo.greetDescription}</ProfileBio>

    <ProfileActions>
      <SecondaryButton href={`mailto:${pageInfo.email}`}>Contact</SecondaryButton>
      {pageInfo.CV && (
        <SecondaryButton
          href={pageInfo.CV}
          target='_blank'
          rel='noopener noreferrer'
        >
          Resume
        </SecondaryButton>
      )}
    </ProfileActions>

    <ProfileDetails>
      <ProfileDetailsItem>
        <i className='fa-solid fa-building' />
        <span>Globant</span>
      </ProfileDetailsItem>
      <ProfileDetailsItem>
        <i className='fa-solid fa-location-dot' />
        <span>Medellín, Colombia</span>
      </ProfileDetailsItem>
      <ProfileDetailsItem>
        <i className='fa-solid fa-envelope' />
        <a href={`mailto:${pageInfo.email}`}>{pageInfo.email}</a>
      </ProfileDetailsItem>
      <ProfileDetailsItem>
        <i className='fa-solid fa-link' />
        <a
          href='https://davidrzuluaga.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          davidrzuluaga.com
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

export default ProfileSidebar;
