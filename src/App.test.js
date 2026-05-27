import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { LanguageProvider } from './i18n/LanguageContext';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <LanguageProvider>
      <App />
    </LanguageProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
