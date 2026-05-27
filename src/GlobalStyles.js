import { css } from '@emotion/react';
import { theme } from './theme';

export const GlobalStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${theme.fonts.body};
    background: ${theme.colors.bg};
    color: ${theme.colors.text};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5;
    font-size: 14px;
  }

  ::selection {
    background: ${theme.colors.accentSoft};
    color: ${theme.colors.text};
  }

  a {
    color: ${theme.colors.link};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-weight: 600;
    line-height: 1.25;
  }

  p {
    margin: 0;
  }

  i.fab,
  i.fa-brands {
    font-family: 'Font Awesome 6 Brands';
    font-weight: 400;
  }

  i.fa-solid,
  i.fas {
    font-family: 'Font Awesome 6 Free';
    font-weight: 900;
  }
`;
