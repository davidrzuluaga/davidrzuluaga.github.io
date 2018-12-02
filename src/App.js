import React, { Component } from 'react';
//import logo from './logo.svg';
import NavbarComp from './components/navbar'
import Description from './components/description'
import Skills from './components/skills'
import Portfolio from './components/portfolio'
import Contact from './components/contact'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavbarComp />
        <a className="link-button" name="home">
          <header>
            <div className="name">
                <h1>Hi! I'm David R Zuluaga</h1>
                <p>Full Stack Developer</p>
            </div>
          </header>
        </a>
        <a className="link-button" name="description"><Description /></a>
        <a className="link-button" name="skills"><Skills /></a>
        <a className="link-button" name="portfolio"><Portfolio /></a>
        <a className="link-button" name="contact"><Contact /></a>
      </div>
    );
  }
}

export default App;
