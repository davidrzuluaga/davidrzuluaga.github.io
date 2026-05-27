import { css } from '@emotion/react';
import { theme } from './theme';

export const GlobalStyles = css`
  :root {
    color-scheme: dark;

    --color-header-bg: ${theme.raw.dark.headerBg};
    --color-header-text: ${theme.raw.dark.headerText};
    --color-header-text-muted: ${theme.raw.dark.headerTextMuted};
    --color-bg: ${theme.raw.dark.bg};
    --color-bg-subtle: ${theme.raw.dark.bgSubtle};
    --color-bg-inset: ${theme.raw.dark.bgInset};
    --color-border: ${theme.raw.dark.border};
    --color-border-muted: ${theme.raw.dark.borderMuted};
    --color-text: ${theme.raw.dark.text};
    --color-text-muted: ${theme.raw.dark.textMuted};
    --color-text-subtle: ${theme.raw.dark.textSubtle};
    --color-link: ${theme.raw.dark.link};
    --color-link-hover: ${theme.raw.dark.linkHover};
    --color-accent: ${theme.raw.dark.accent};
    --color-accent-soft: ${theme.raw.dark.accentSoft};
    --color-btn-primary: ${theme.raw.dark.btnPrimary};
    --color-btn-primary-hover: ${theme.raw.dark.btnPrimaryHover};
    --color-btn-primary-border: ${theme.raw.dark.btnPrimaryBorder};
    --color-btn-default: ${theme.raw.dark.btnDefault};
    --color-btn-default-hover: ${theme.raw.dark.btnDefaultHover};
    --color-tag-bg: ${theme.raw.dark.tagBg};
    --color-tag-text: ${theme.raw.dark.tagText};
    --color-topic-bg: ${theme.raw.dark.topicBg};
    --color-topic-text: ${theme.raw.dark.topicText};
    --color-avatar-bg: ${theme.raw.dark.avatarBg};
    --color-avatar-border: ${theme.raw.dark.avatarBorder};
    --color-tab-active: ${theme.raw.dark.tabActive};
  }

  @media (prefers-color-scheme: light) {
    :root {
      color-scheme: light;

      --color-header-bg: ${theme.raw.light.headerBg};
      --color-header-text: ${theme.raw.light.headerText};
      --color-header-text-muted: ${theme.raw.light.headerTextMuted};
      --color-bg: ${theme.raw.light.bg};
      --color-bg-subtle: ${theme.raw.light.bgSubtle};
      --color-bg-inset: ${theme.raw.light.bgInset};
      --color-border: ${theme.raw.light.border};
      --color-border-muted: ${theme.raw.light.borderMuted};
      --color-text: ${theme.raw.light.text};
      --color-text-muted: ${theme.raw.light.textMuted};
      --color-text-subtle: ${theme.raw.light.textSubtle};
      --color-link: ${theme.raw.light.link};
      --color-link-hover: ${theme.raw.light.linkHover};
      --color-accent: ${theme.raw.light.accent};
      --color-accent-soft: ${theme.raw.light.accentSoft};
      --color-btn-primary: ${theme.raw.light.btnPrimary};
      --color-btn-primary-hover: ${theme.raw.light.btnPrimaryHover};
      --color-btn-primary-border: ${theme.raw.light.btnPrimaryBorder};
      --color-btn-default: ${theme.raw.light.btnDefault};
      --color-btn-default-hover: ${theme.raw.light.btnDefaultHover};
      --color-tag-bg: ${theme.raw.light.tagBg};
      --color-tag-text: ${theme.raw.light.tagText};
      --color-topic-bg: ${theme.raw.light.topicBg};
      --color-topic-text: ${theme.raw.light.topicText};
      --color-avatar-bg: ${theme.raw.light.avatarBg};
      --color-avatar-border: ${theme.raw.light.avatarBorder};
      --color-tab-active: ${theme.raw.light.tabActive};
    }
  }

  [data-theme='light'] {
    color-scheme: light;

    --color-header-bg: ${theme.raw.light.headerBg};
    --color-header-text: ${theme.raw.light.headerText};
    --color-header-text-muted: ${theme.raw.light.headerTextMuted};
    --color-bg: ${theme.raw.light.bg};
    --color-bg-subtle: ${theme.raw.light.bgSubtle};
    --color-bg-inset: ${theme.raw.light.bgInset};
    --color-border: ${theme.raw.light.border};
    --color-border-muted: ${theme.raw.light.borderMuted};
    --color-text: ${theme.raw.light.text};
    --color-text-muted: ${theme.raw.light.textMuted};
    --color-text-subtle: ${theme.raw.light.textSubtle};
    --color-link: ${theme.raw.light.link};
    --color-link-hover: ${theme.raw.light.linkHover};
    --color-accent: ${theme.raw.light.accent};
    --color-accent-soft: ${theme.raw.light.accentSoft};
    --color-btn-primary: ${theme.raw.light.btnPrimary};
    --color-btn-primary-hover: ${theme.raw.light.btnPrimaryHover};
    --color-btn-primary-border: ${theme.raw.light.btnPrimaryBorder};
    --color-btn-default: ${theme.raw.light.btnDefault};
    --color-btn-default-hover: ${theme.raw.light.btnDefaultHover};
    --color-tag-bg: ${theme.raw.light.tagBg};
    --color-tag-text: ${theme.raw.light.tagText};
    --color-topic-bg: ${theme.raw.light.topicBg};
    --color-topic-text: ${theme.raw.light.topicText};
    --color-avatar-bg: ${theme.raw.light.avatarBg};
    --color-avatar-border: ${theme.raw.light.avatarBorder};
    --color-tab-active: ${theme.raw.light.tabActive};
  }

  [data-theme='dark'] {
    color-scheme: dark;

    --color-header-bg: ${theme.raw.dark.headerBg};
    --color-header-text: ${theme.raw.dark.headerText};
    --color-header-text-muted: ${theme.raw.dark.headerTextMuted};
    --color-bg: ${theme.raw.dark.bg};
    --color-bg-subtle: ${theme.raw.dark.bgSubtle};
    --color-bg-inset: ${theme.raw.dark.bgInset};
    --color-border: ${theme.raw.dark.border};
    --color-border-muted: ${theme.raw.dark.borderMuted};
    --color-text: ${theme.raw.dark.text};
    --color-text-muted: ${theme.raw.dark.textMuted};
    --color-text-subtle: ${theme.raw.dark.textSubtle};
    --color-link: ${theme.raw.dark.link};
    --color-link-hover: ${theme.raw.dark.linkHover};
    --color-accent: ${theme.raw.dark.accent};
    --color-accent-soft: ${theme.raw.dark.accentSoft};
    --color-btn-primary: ${theme.raw.dark.btnPrimary};
    --color-btn-primary-hover: ${theme.raw.dark.btnPrimaryHover};
    --color-btn-primary-border: ${theme.raw.dark.btnPrimaryBorder};
    --color-btn-default: ${theme.raw.dark.btnDefault};
    --color-btn-default-hover: ${theme.raw.dark.btnDefaultHover};
    --color-tag-bg: ${theme.raw.dark.tagBg};
    --color-tag-text: ${theme.raw.dark.tagText};
    --color-topic-bg: ${theme.raw.dark.topicBg};
    --color-topic-text: ${theme.raw.dark.topicText};
    --color-avatar-bg: ${theme.raw.dark.avatarBg};
    --color-avatar-border: ${theme.raw.dark.avatarBorder};
    --color-tab-active: ${theme.raw.dark.tabActive};
  }

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
