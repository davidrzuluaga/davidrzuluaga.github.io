import React, { Component } from 'react';
//import logo from './logo.svg';
import NavbarComp from './components/navbar';
import Description from './components/description';
import Skills from './components/skills';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Experience from './components/experience';
import './App.scss';
import axios from 'axios';
import store from './store';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pageInfo: []
    };
    axios
      .get('/pageinfo.json')
      .then(response => {
        this.setState({
          pageInfo: response.data[0]
        });
        store.dispatch({
          type: 'setPageInfo',
          pageInfo: response.data[0]
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  anchor = name => (
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
  render() {
    return (
      <div>
        <NavbarComp />
        {this.anchor('home')}
        <header>
          <div className='name'>
            <h1>{this.state.pageInfo.greet}</h1>
            <p>{this.state.pageInfo.greetDescription}</p>
          </div>
        </header>
        {this.anchor('description')}
        <Description />
        {this.anchor('skills')}
        <Skills />
        {this.anchor('portfolio')}
        <Portfolio />
        {this.anchor('experience')}
        <Experience />
        {this.anchor('contact')}
        <Contact />
      </div>
    );
  }
}

export default App;
