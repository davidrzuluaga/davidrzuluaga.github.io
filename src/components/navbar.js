import React from 'react';
import { connect } from 'react-redux';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

const NavbarComp = props => {
  return (
    <Navbar inverse collapseOnSelect className='navbar-fixed-top'>
      <Navbar.Header>
        <Navbar.Brand>
          <a href='#home'> David R Zuluaga</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href='#description'>
            About Me
          </NavItem>
          <NavItem eventKey={2} href='#skills'>
            Skills
          </NavItem>
          <NavItem eventKey={3} href='#portfolio'>
            Portfolio
          </NavItem>
          <NavItem eventKey={4} href='#experience'>
            Experience
          </NavItem>
          <NavItem eventKey={5} href='#contact'>
            Contact
          </NavItem>
        </Nav>
        <Nav pullRight className='hidden-xs'>
          {props.pageInfo.social.map((social, index) => (
            <NavItem href={`${social.link}`} eventKey={index} target='_blank'>
              <i className={social.icon} />
            </NavItem>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
const mapStateToProps = state => {
  return {
    pageInfo: state.pageInfo
  };
};
export default connect(mapStateToProps)(NavbarComp);
