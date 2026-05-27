import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavbarComp from './components/navbar';
import ProfileSidebar from './components/profileSidebar';
import Description from './components/description';
import Skills from './components/skills';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Experience from './components/experience';
import { hashToTab, profileTabs } from './data/profileTabs';
import {
  Container,
  LoadingScreen,
  MainColumn,
  PageGrid,
  ProfileTabs,
  TabPanel
} from './AppStyles';

const PAGE_INFO_URL =
  'https://s3.us-east-2.amazonaws.com/davidrzuluaga.com/assets/pageinfo.json';

const App = () => {
  const [pageInfo, setPageInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState(() =>
    hashToTab(window.location.hash)
  );

  useEffect(() => {
    axios
      .get(PAGE_INFO_URL, {
        headers: {
          'Cache-Control': 'no-cache'
        }
      })
      .then(response => {
        setPageInfo(response.data[0]);
      })
      .catch(err => {
        console.log(err);
        setError('Unable to load profile data. Please try again later.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const onHashChange = () => {
      setActiveTab(hashToTab(window.location.hash));
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleTabChange = tabId => {
    setActiveTab(tabId);
    const hash = tabId === 'overview' ? '#overview' : `#${tabId}`;
    if (window.location.hash !== hash) {
      window.history.replaceState(null, '', hash);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <>
            <Description pageInfo={pageInfo} variant='readme' />
            <Portfolio pageInfo={pageInfo} />
          </>
        );
      case 'skills':
        return <Skills pageInfo={pageInfo} />;
      case 'portfolio':
        return <Portfolio pageInfo={pageInfo} />;
      case 'experience':
        return <Experience pageInfo={pageInfo} />;
      case 'contact':
        return <Contact pageInfo={pageInfo} variant='main' />;
      default:
        return null;
    }
  };

  if (loading) {
    return <LoadingScreen>Loading profile…</LoadingScreen>;
  }

  if (error || !pageInfo) {
    return <LoadingScreen>{error || 'Unable to load profile data.'}</LoadingScreen>;
  }

  return (
    <div>
      <NavbarComp pageInfo={pageInfo} onTabChange={handleTabChange} />

      <Container>
        <PageGrid>
          <ProfileSidebar pageInfo={pageInfo} />

          <MainColumn>
            <ProfileTabs role='tablist' aria-label='Profile sections'>
              {profileTabs.map(tab => (
                <button
                  key={tab.id}
                  type='button'
                  role='tab'
                  id={`tab-${tab.id}`}
                  aria-selected={activeTab === tab.id}
                  aria-controls={`panel-${tab.id}`}
                  className={activeTab === tab.id ? 'active' : undefined}
                  onClick={() => handleTabChange(tab.id)}
                >
                  <i className={tab.icon} />
                  {tab.label}
                </button>
              ))}
            </ProfileTabs>

            <TabPanel
              role='tabpanel'
              id={`panel-${activeTab}`}
              aria-labelledby={`tab-${activeTab}`}
            >
              {renderTabContent()}
            </TabPanel>
          </MainColumn>
        </PageGrid>
      </Container>
    </div>
  );
};

export default App;
