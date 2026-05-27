import React from 'react';
import { normalizeIcon } from '../utils/iconUtils';
import { useTranslation } from '../i18n/LanguageContext';
import { NavBar } from '../AppStyles';

const NavbarComp = ({
  pageInfo,
  onTabChange,
  colorMode,
  onToggleColorMode
}) => {
  const { locale, toggleLocale, t } = useTranslation();

  const goHome = () => {
    onTabChange('overview');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <NavBar>
      <div className='nav-inner'>
        <button type='button' className='brand' onClick={goHome}>
          {t('nav.portfolio')}
        </button>

        <div className='nav-spacer' />

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            type='button'
            className='language-toggle'
            onClick={toggleLocale}
            aria-label={
              locale === 'en' ? t('nav.switchToSpanish') : t('nav.switchToEnglish')
            }
            title={locale === 'en' ? t('nav.switchToSpanish') : t('nav.switchToEnglish')}
          >
            {locale === 'en' ? 'ES' : 'EN'}
          </button>

          <button
            type='button'
            className='theme-toggle'
            onClick={onToggleColorMode}
            aria-label={
              colorMode === 'light'
                ? t('nav.switchToDark')
                : t('nav.switchToLight')
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
