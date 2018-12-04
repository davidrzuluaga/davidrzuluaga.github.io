import React, { Component } from 'react';
//import logo from './logo.svg';
import NavbarComp from './components/navbar'
import Description from './components/description'
import Skills from './components/skills'
import Portfolio from './components/portfolio'
import Contact from './components/contact'
import './App.css';
import axios from 'axios';
import store from "./store";

class App extends Component {
  constructor() {
    super()
    this.state = {
      pageInfo: []
    }
    axios.get("/pageinfo.json")
      .then(response => {
        this.setState({
          pageInfo: response.data[0]
        })
        store.dispatch( {
          type: "setPageInfo",
          pageInfo: response.data[0]
      })
      })
      .catch(error => {
          console.log(error);
      })
  }
  render() {
    return (
      <div>
        <NavbarComp />
        <a className="link-button" name="home">
          <header>
            <div className="name">
                <h1>{this.state.pageInfo.greet}</h1>
                <p>{this.state.pageInfo.greetDescription}</p>
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
