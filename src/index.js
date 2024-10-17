import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Global, css } from '@emotion/react';
import { AppStyles } from './AppStyles';
import { GlobalStyles } from './GlobalStyles';

ReactDOM.render(
  <>
    <Global
      styles={css`
        ${GlobalStyles}
      `}
    />
    <AppStyles>
      <App />
    </AppStyles>
  </>,
  document.getElementById('root')
);
