import React, { Component } from 'react';
//import logo from './logo.svg';
import NavbarComp from './components/navbar'
import Description from './components/description'
import Skills from './components/skills'
import Portfolio from './components/portfolio'
import Contact from './components/contact'
import pageInfo from './pageinfo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavbarComp />
        <a className="link-button" name="home">
          <header>
            <div className="name">
                <h1>{pageInfo.greet}</h1>
                <p>{pageInfo.greetDescription}</p>
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
