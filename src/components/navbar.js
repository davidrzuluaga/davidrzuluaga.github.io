import React from 'react';
import { NavBar } from '../AppStyles';

const NavbarComp = ({ pageInfo, onTabChange }) => {
  const goHome = () => {
    onTabChange('overview');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <NavBar>
      <div className='nav-inner'>
        <button type='button' className='brand' onClick={goHome}>
          Portfolio
        </button>

        <div className='nav-spacer' />

        <div className='nav-social'>
          {pageInfo.social?.map(social => (
            <a
              key={social.socialName}
              href={social.link}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={social.socialName}
            >
              <i className={social.icon} />
            </a>
          ))}
        </div>
      </div>
    </NavBar>
  );
};

export default NavbarComp;
