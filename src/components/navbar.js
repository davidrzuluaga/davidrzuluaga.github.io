import React from 'react';
import { normalizeIcon } from '../utils/iconUtils';
import { NavBar } from '../AppStyles';

const NavbarComp = ({ pageInfo, onTabChange, colorMode, onToggleColorMode }) => {
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

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            type='button'
            className='theme-toggle'
            onClick={onToggleColorMode}
            aria-label={
              colorMode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
            }
          >
            <i
              className={
                colorMode === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun'
              }
            />
          </button>

          <div className='nav-social'>
            {pageInfo.social?.map(social => (
              <a
                key={social.socialName}
                href={social.link}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={social.socialName}
              >
                <i className={normalizeIcon(social.icon)} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </NavBar>
  );
};

export default NavbarComp;
