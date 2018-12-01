import React, { Component } from 'react';
//import logo from './logo.svg';
import NavbarComp from './components/navbar'
import Description from './components/description'
import Skills from './components/skills'
import Portfolio from './components/portfolio'
import Contact from './components/contact'
import './App.css';
import store from "./store";

class App extends Component {
  constructor() {
    super()
    this.state = {
      home: "",
      description: "hidden",
      skills: "hidden",
      portfolio: "hidden",
      contact: "hidden",
    }
    store.subscribe(() => {
      this.setState({
        home: store.getState().home,
        description: store.getState().description,
        skills: store.getState().skills,
        portfolio: store.getState().portfolio,
        contact: store.getState().contact,
      })
    })
  }
  render() {
    return (
      <div>
        <NavbarComp />
        <header className={this.state.home}>
          <div className="name">
              <h1>Hi! I'm David R Zuluaga</h1>
              <p>Full Stack Developer</p>
          </div>
        </header>
        <div className={this.state.description}>
          <Description />
        </div>
        <div className={this.state.skills}>
          <Skills />
        </div>
        <div className={this.state.portfolio}>
          <Portfolio />
        </div>
        <div className={this.state.contact}>
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
