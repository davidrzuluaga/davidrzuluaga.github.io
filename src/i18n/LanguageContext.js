import React, { createContext, useContext, useEffect, useState } from 'react';
import { translations } from './translations';

const LanguageContext = createContext(null);

export const getInitialLocale = () => {
  if (typeof window === 'undefined') {
    return 'en';
  }

  const stored = window.localStorage.getItem('locale');
  if (stored === 'en' || stored === 'es') {
    return stored;
  }

  const browserLang =
    navigator.language || navigator.userLanguage || 'en';

  return browserLang.toLowerCase().startsWith('es') ? 'es' : 'en';
};

export const LanguageProvider = ({ children }) => {
  const [locale, setLocaleState] = useState(getInitialLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem('locale', locale);
  }, [locale]);

  const setLocale = newLocale => {
    if (newLocale === 'en' || newLocale === 'es') {
      setLocaleState(newLocale);
    }
  };

  const toggleLocale = () => {
    setLocaleState(current => (current === 'en' ? 'es' : 'en'));
  };

  const t = key => {
    const value = key.split('.').reduce((acc, part) => acc?.[part], translations[locale]);
    return value ?? key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggleLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }

  return context;
};
