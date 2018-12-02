import React, { Component } from 'react';
import {Nav, Navbar, NavItem } from 'react-bootstrap'
import '../App.css';

class NavbarComp extends Component {
    render() {
      return (
          <Navbar inverse collapseOnSelect className="navbar-fixed-top">
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#home"> David R Zuluaga</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="#description">
                    About Me
                </NavItem>
                <NavItem eventKey={2} href="#skills">
                    Skills
                </NavItem>
                <NavItem eventKey={3} href="#portfolio">
                    Portfolio
                </NavItem>
                <NavItem eventKey={4} href="#contact">
                  Contact
                </NavItem>
              </Nav>
              <Nav pullRight className="hidden-xs">
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
