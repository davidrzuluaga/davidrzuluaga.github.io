import React, { Component } from 'react';
import {Nav, Navbar, NavItem } from 'react-bootstrap'
import '../App.css';
import store from "../store";

class NavbarComp extends Component {
    constructor() {
        super()
        this.state = {
            pageInfo: {social: [""]}
        }
        store.subscribe(() => {
          this.setState({
            pageInfo: store.getState().pageInfo
          })
        })
    }
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
                <NavItem eventKey={4} href="#experience">
                    Experience
                </NavItem>
                <NavItem eventKey={5} href="#contact">
                  Contact
                </NavItem>
              </Nav>
              <Nav pullRight className="hidden-xs">
                {this.state.pageInfo.social.map((social, index) =>  
                    <NavItem href={`${social.link}`} eventKey={index} target="_blank">
                        <i className={social.icon} />
                    </NavItem>
                )}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )
    }
}
export default NavbarComp;
