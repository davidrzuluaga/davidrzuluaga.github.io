import styled from '@emotion/styled';
import { theme } from './theme';

export const AppStyles = styled.div`
  min-height: 100vh;
  overflow-x: hidden;
  background: ${theme.colors.bg};
`;

export const Container = styled.div`
  width: min(100% - 32px, ${theme.maxWidth});
  margin: 0 auto;
`;

export const Section = styled.section`
  padding: ${theme.sectionPadding} 0;

  &.subtle {
    background: ${theme.colors.bgSubtle};
    border-top: 1px solid ${theme.colors.border};
    border-bottom: 1px solid ${theme.colors.border};
  }
`;

export const SectionHeader = styled.div`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
`;

export const SectionLabel = styled.span`
  display: none;
`;

export const SectionTitle = styled.h2`
  font-size: 14px;
  font-weight: 400;
  color: ${theme.colors.text};
`;

export const SectionSubtitle = styled.p`
  font-size: 12px;
  color: ${theme.colors.textMuted};
  line-height: 1.5;
  margin-top: 4px;
`;

export const Card = styled.div`
  background: ${theme.colors.bg};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radius.sm};
  padding: 16px;
  transition: border-color 0.15s ease;

  &:hover {
    border-color: ${theme.colors.link};
  }
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 5px 16px;
  border-radius: ${theme.radius.sm};
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #ffffff;
  background: ${theme.colors.btnPrimary};
  border: 1px solid ${theme.colors.btnPrimaryBorder};
  box-shadow: 0 0 transparent;
  transition: background 0.15s ease;

  &:hover {
    background: ${theme.colors.btnPrimaryHover};
    color: #ffffff;
    text-decoration: none;
  }
`;

export const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 5px 16px;
  border-radius: ${theme.radius.sm};
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: ${theme.colors.text};
  background: ${theme.colors.btnDefault};
  border: 1px solid ${theme.colors.btnPrimaryBorder};
  box-shadow: 0 0 transparent;
  transition: background 0.15s ease;

  &:hover {
    background: ${theme.colors.btnDefaultHover};
    color: ${theme.colors.text};
    text-decoration: none;
  }
`;

export const Tag = styled.span`
  display: inline-block;
  padding: 0 7px;
  border-radius: 2em;
  font-size: 12px;
  font-weight: 500;
  line-height: 22px;
  color: ${theme.colors.topicText};
  background: ${theme.colors.topicBg};
  white-space: nowrap;
`;

export const HeroSection = styled.header`
  display: none;
`;

export const HeroContent = styled.div`
  display: none;
`;

export const ProfileLayout = styled.div`
  display: none;
`;

export const ProfileInfo = styled.div`
  display: none;
`;

export const ProfileAvatar = styled.div`
  width: 100%;
  aspect-ratio: 1;
  max-width: 280px;
  border-radius: 50%;
  background: ${theme.colors.avatarBg};
  border: 1px solid ${theme.colors.avatarBorder};
  overflow: hidden;
  margin-bottom: 16px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 18% center;
    display: block;
  }
`;

export const ProfileSidebarWrap = styled.aside`
  width: 296px;
  flex-shrink: 0;

  @media (max-width: 900px) {
    width: 100%;
    max-width: 296px;
    margin: 0 auto;
  }
`;

export const ProfileName = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: ${theme.colors.text};
  line-height: 1.25;
  margin-bottom: 4px;
`;

export const ProfileUsername = styled.p`
  font-size: 20px;
  font-weight: 300;
  color: ${theme.colors.textMuted};
  line-height: 1.5;
  margin-bottom: 16px;
`;

export const ProfileBio = styled.p`
  font-size: 16px;
  color: ${theme.colors.text};
  line-height: 1.5;
  margin-bottom: 16px;
`;

export const ProfileActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;

  a {
    width: 100%;
    justify-content: center;
  }
`;

export const ProfileDetails = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ProfileDetailsItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: ${theme.colors.textMuted};

  i {
    width: 16px;
    text-align: center;
    flex-shrink: 0;
    color: ${theme.colors.textMuted};
  }

  a {
    color: ${theme.colors.text};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:hover {
      color: ${theme.colors.link};
      text-decoration: underline;
    }
  }
`;

export const HeroEyebrow = styled.p`
  display: none;
`;

export const HeroTitle = styled.h1`
  font-size: 32px;
  font-weight: 400;
  color: ${theme.colors.text};
  margin-bottom: 16px;
  line-height: 1.25;
`;

export const HeroDescription = styled.p`
  font-size: 20px;
  color: ${theme.colors.textMuted};
  line-height: 1.5;
  margin-bottom: 16px;
  max-width: 640px;
`;

export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const HeroMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  color: ${theme.colors.textMuted};
  font-size: 14px;
  margin-bottom: 16px;

  span {
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }

  i {
    color: ${theme.colors.textMuted};
    font-size: 14px;
  }
`;

export const ScrollHint = styled.a`
  display: none;
`;

export const ProfileTabs = styled.nav`
  display: flex;
  gap: 8px;
  overflow-x: auto;
  border-bottom: 1px solid ${theme.colors.border};
  margin-bottom: 24px;

  button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    font-size: 14px;
    color: ${theme.colors.text};
    border: none;
    border-bottom: 2px solid transparent;
    white-space: nowrap;
    margin-bottom: -1px;
    background: transparent;
    cursor: pointer;
    font-family: inherit;

    i {
      font-size: 16px;
      color: ${theme.colors.textMuted};
    }

    &:hover {
      color: ${theme.colors.text};
      border-bottom-color: ${theme.colors.borderMuted};

      i {
        color: ${theme.colors.text};
      }
    }

    &.active {
      border-bottom-color: ${theme.colors.tabActive};
      font-weight: 600;

      i {
        color: ${theme.colors.text};
      }
    }
  }
`;

export const MainColumn = styled.div`
  flex: 1;
  min-width: 0;
`;

export const TabPanel = styled.div`
  padding-bottom: 48px;
`;

export const PageGrid = styled.div`
  display: flex;
  gap: 24px;
  padding: 24px 0;
  align-items: flex-start;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const ReadmeCard = styled.div`
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radius.sm};
  overflow: hidden;
  background: ${theme.colors.bg};
  margin-bottom: 24px;

  .readme-header {
    padding: 8px 16px;
    background: ${theme.colors.bgSubtle};
    border-bottom: 1px solid ${theme.colors.border};
    font-size: 12px;
    color: ${theme.colors.textMuted};
    font-family: ${theme.fonts.mono};
  }

  .readme-body {
    padding: 16px;
  }
`;

export const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SidebarCard = styled.div`
  h3 {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 8px;
    color: ${theme.colors.text};
  }

  p,
  li {
    font-size: 14px;
    color: ${theme.colors.textMuted};
    line-height: 1.5;
  }

  ul {
    margin: 0;
    padding-left: 16px;
  }

  li + li {
    margin-top: 4px;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 0;
`;

export const AboutGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const AboutHighlight = styled.div`
  display: none;
`;

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  p {
    color: ${theme.colors.textMuted};
    font-size: 14px;
    line-height: 1.5;
  }
`;

export const SkillsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SkillPanel = styled(Card)`
  padding: 0;
  overflow: hidden;

  &:hover {
    border-color: ${theme.colors.border};
  }

  .panel-header {
    padding: 8px 16px;
    background: ${theme.colors.bgSubtle};
    border-bottom: 1px solid ${theme.colors.border};
    font-size: 14px;
    font-weight: 600;
    color: ${theme.colors.text};
  }

  .panel-body {
    padding: 16px;
  }
`;

export const TechGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const TechItem = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 10px 4px 4px;
  border-radius: ${theme.radius.sm};
  border: 1px solid ${theme.colors.border};
  background: ${theme.colors.bgSubtle};

  img {
    object-fit: contain;
    width: 20px;
    height: 20px;
  }

  span {
    font-size: 12px;
    color: ${theme.colors.text};
  }
`;

export const LangList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LangItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;

  img {
    width: 20px;
    height: 20px;
    border-radius: 2px;
  }

  strong {
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: ${theme.colors.text};
  }

  span {
    font-size: 12px;
    color: ${theme.colors.textMuted};
  }
`;

export const TagGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.article`
  background: ${theme.colors.bgSubtle};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radius.sm};
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 132px;
  transition: border-color 0.15s ease;

  &:hover {
    border-color: ${theme.colors.link};
  }
`;

export const ProjectImage = styled.div`
  display: none;
`;

export const ProjectBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;

  h3 {
    font-size: 14px;
    font-weight: 600;

    a {
      color: ${theme.colors.link};

      &:hover {
        text-decoration: underline;
      }
    }
  }

  p {
    color: ${theme.colors.textMuted};
    font-size: 12px;
    line-height: 1.5;
    flex: 1;
  }
`;

export const ProjectLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: auto;

  a {
    font-size: 12px;
    font-weight: 400;
    color: ${theme.colors.textMuted};

    &:hover {
      color: ${theme.colors.link};
    }
  }
`;

export const RepoMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 12px;
  color: ${theme.colors.textMuted};
  margin-top: 4px;

  span {
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #3178c6;
  }
`;

export const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TimelineGroup = styled.div`
  h3 {
    font-size: 14px;
    font-weight: 600;
    color: ${theme.colors.text};
    margin-bottom: 12px;
  }
`;

export const ExperienceCard = styled.div`
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 12px;
  align-items: start;
  padding: 16px 0;
  border-bottom: 1px solid ${theme.colors.border};

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const ExperienceLogo = styled.div`
  width: 48px;
  height: 48px;
  border-radius: ${theme.radius.sm};
  background: ${theme.colors.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border: 1px solid ${theme.colors.border};

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ExperienceContent = styled.div`
  h4 {
    font-size: 14px;
    margin-bottom: 2px;

    a {
      color: ${theme.colors.link};
      font-weight: 600;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .role {
    color: ${theme.colors.text};
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 2px;
  }

  .company {
    color: ${theme.colors.textMuted};
    font-size: 12px;
    margin-bottom: 4px;
  }

  .dates {
    display: block;
    font-size: 12px;
    color: ${theme.colors.textMuted};
    margin-bottom: 8px;
  }

  p {
    color: ${theme.colors.textMuted};
    font-size: 12px;
    line-height: 1.5;
  }
`;

export const ContactSection = styled(Section)`
  padding-bottom: 32px;
`;

export const ContactCard = styled.div`
  padding: 16px;
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radius.sm};
  background: ${theme.colors.bg};

  h2 {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  p {
    color: ${theme.colors.textMuted};
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 16px;
  }
`;

export const SocialGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  border-radius: ${theme.radius.sm};
  background: ${theme.colors.btnDefault};
  border: 1px solid ${theme.colors.btnPrimaryBorder};
  color: ${theme.colors.text};
  font-size: 12px;
  font-weight: 500;
  transition: background 0.15s ease;

  &:hover {
    background: ${theme.colors.btnDefaultHover};
    color: ${theme.colors.text};
    text-decoration: none;
  }

  i {
    color: ${theme.colors.textMuted};
    font-size: 12px;
  }
`;

export const Footer = styled.footer`
  padding: 24px 0 40px;
  text-align: center;
  color: ${theme.colors.textMuted};
  font-size: 12px;
  border-top: 1px solid ${theme.colors.border};
  background: ${theme.colors.bgSubtle};
`;

export const LoadingScreen = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.bg};
  color: ${theme.colors.textMuted};
  font-size: 14px;
`;

export const NavBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: ${theme.colors.headerBg};
  color: ${theme.colors.headerText};
  border-bottom: 1px solid rgba(240, 246, 252, 0.1);

  .nav-inner {
    width: min(100% - 32px, ${theme.maxWidth});
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 16px 0;
  }

  .brand {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 600;
    color: ${theme.colors.headerText};
    white-space: nowrap;
    background: transparent;
    border: none;
    cursor: pointer;
    font-family: inherit;
    padding: 0;

    .mark {
      color: ${theme.colors.headerText};
      font-size: 24px;
    }

    &:hover {
      color: rgba(240, 246, 252, 0.85);
    }
  }

  .nav-spacer {
    flex: 1;
  }

  .nav-social {
    display: flex;
    align-items: center;
    gap: 4px;

    a {
      width: 32px;
      height: 32px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: ${theme.radius.sm};
      color: ${theme.colors.headerText};
      transition: color 0.15s ease;

      &:hover {
        color: rgba(240, 246, 252, 0.7);
      }
    }
  }

  .menu-toggle {
    display: none;
    background: transparent;
    border: 1px solid rgba(240, 246, 252, 0.2);
    color: ${theme.colors.headerText};
    width: 32px;
    height: 32px;
    border-radius: ${theme.radius.sm};
    cursor: pointer;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      display: inline-flex;
    }
  }

  .mobile-menu {
    display: none;
    padding: 8px 16px 16px;
    background: ${theme.colors.headerBg};
    border-top: 1px solid rgba(240, 246, 252, 0.1);

    &.open {
      display: block;
    }

    button {
      display: block;
      width: 100%;
      text-align: left;
      padding: 10px 0;
      color: ${theme.colors.headerText};
      font-size: 14px;
      font-weight: 600;
      background: transparent;
      border: none;
      border-bottom: 1px solid rgba(240, 246, 252, 0.1);
      cursor: pointer;
      font-family: inherit;

      &:last-child {
        border-bottom: none;
      }

      &:hover {
        color: rgba(240, 246, 252, 0.7);
      }

      &.active {
        color: ${theme.colors.tabActive};
      }
    }
  }
`;

export const BoxCard = styled.div`
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radius.sm};
  overflow: hidden;
  background: ${theme.colors.bg};

  .box-header {
    padding: 8px 16px;
    background: ${theme.colors.bgSubtle};
    border-bottom: 1px solid ${theme.colors.border};
    font-size: 14px;
    font-weight: 600;
    color: ${theme.colors.text};
  }

  .box-body {
    padding: 16px;
  }
`;
