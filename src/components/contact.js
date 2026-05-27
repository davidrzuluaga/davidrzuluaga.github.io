import React from 'react';
import { normalizeIcon } from '../utils/iconUtils';
import {
  BoxCard,
  ContactCard,
  ContactSection,
  PrimaryButton,
  SocialGrid,
  SocialLink
} from '../AppStyles';

const Contact = ({ pageInfo, variant = 'main' }) => {
  if (variant === 'sidebar') {
    return (
      <BoxCard>
        <div className='box-header'>Links</div>
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
              Email
            </SocialLink>
          </SocialGrid>
        </div>
      </BoxCard>
    );
  }

  return (
    <>
      <ContactSection id='contact'>
        <ContactCard>
          <h2>Get in touch</h2>
          <p>
            Open to meaningful collaborations, engineering conversations, and
            opportunities to build products that make a difference.
          </p>
          <PrimaryButton href={`mailto:${pageInfo.email}`}>
            <i className='fa-solid fa-envelope' />
            {pageInfo.email}
          </PrimaryButton>
        </ContactCard>
      </ContactSection>
    </>
  );
};

export default Contact;
