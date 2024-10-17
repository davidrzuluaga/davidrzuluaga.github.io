import React, { useEffect, useState } from 'react';
import NavbarComp from './components/navbar';
import Description from './components/description';
import Skills from './components/skills';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Experience from './components/experience';
import axios from 'axios';

const App = () => {
  const [pageInfo, setPageInfo] = useState({
    experience: [''],
    portfolio: [''],
    social: [''],
    description: [''],
    webDevSkills: [''],
    langSkills: [''],
    proSkills: ['']
  });

  const getInfo = () => {
    axios
      .get(
        'https://s3.us-east-2.amazonaws.com/davidrzuluaga.com/assets/pageinfo.json',
        {
          headers: {
            'Cache-Control': 'no-cache'
          }
        }
      )
      .then(response => {
        setPageInfo(response.data[0]);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getInfo();
  }, []);

  const anchor = name => (
    <a
      className='link-button'
      name={name}
      href={'/'}
      onClick={e => e.preventDefault()}
      style={{ visibility: 'hidden', height: '0px', display: 'block' }}
    >
      .
    </a>
  );
  return (
    <div>
      {/* <NavbarComp pageInfo={pageInfo} /> */}
      {anchor('home')}
      <header>
        <div className='name'>
          <h1>{pageInfo.greet}</h1>
          <p>{pageInfo.greetDescription}</p>
        </div>
      </header>
      {anchor('description')}
      <Description pageInfo={pageInfo} />
      {anchor('skills')}
      <Skills pageInfo={pageInfo} />
      {/* {anchor('portfolio')}
      <Portfolio pageInfo={pageInfo} /> */}
      {anchor('experience')}
      <Experience pageInfo={pageInfo} />
      {anchor('contact')}
      <Contact pageInfo={pageInfo} />
    </div>
  );
};

export default App;
