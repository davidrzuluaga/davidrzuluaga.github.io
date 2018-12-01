import React, { Component } from 'react';
import {Nav, Navbar, NavItem } from 'react-bootstrap'
import '../App.css';
import store from "../store";

class NavbarComp extends Component {
    showHome = () => {
        store.dispatch( {
            type: "showHome"
        })
      }
      showDescription = () => {
        store.dispatch( {
            type: "showDescription"
        })
      }
      showSkills = () => {
        store.dispatch( {
            type: "showSkills"
        })
      }
      showPortfolio = () => {
        store.dispatch( {
            type: "showPortfolio"
        })
      }
      showContact = () => {
        store.dispatch( {
            type: "showContact"
        })
      }
    render() {
      return (
          <Navbar inverse collapseOnSelect className="navbar-fixed-top">
            <Navbar.Header>
              <Navbar.Brand onClick={this.showHome}>
                David R Zuluaga
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} onClick={this.showDescription}>
                    About Me
                </NavItem>
                <NavItem eventKey={2} onClick={this.showSkills}>
                    Skills
                </NavItem>
                <NavItem eventKey={3} onClick={this.showPortfolio}>
                    Portfolio
                </NavItem>
                <NavItem eventKey={2} onClick={this.showContact}>
                  Contact
                </NavItem>
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={4} href="https://linkedin.com/in/davidrzuluaga/" target="_blank">
                    <i class="fa fa-linkedin" />
                </NavItem>
                <NavItem eventKey={2} href="https://www.github.com/davidrzuluaga" target="_blank">
                    <i class="fa fa-github" />
                </NavItem>
                <NavItem eventKey={1} href="https://www.facebook.com/davidricardozuluaga" target="_blank">
                    <i class="fa fa-facebook"/>
                </NavItem>
                <NavItem eventKey={3} href="https://www.twitter.com/davidrzuluaga" target="_blank">
                    <i class="fa fa-twitter" />
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )
    }
}
export default NavbarComp;
