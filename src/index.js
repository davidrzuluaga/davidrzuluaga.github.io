import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Global, css } from '@emotion/react';
import { AppStyles } from './AppStyles';
import { GlobalStyles } from './GlobalStyles';
import { LanguageProvider } from './i18n/LanguageContext';

ReactDOM.render(
  <>
    <Global
      styles={css`
        ${GlobalStyles}
      `}
    />
    <LanguageProvider>
      <AppStyles>
        <App />
      </AppStyles>
    </LanguageProvider>
  </>,
  document.getElementById('root')
);
